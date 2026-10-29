const guestCounts = new Set(["1", "2", "3", "4+"]);
const scriptErrors: Record<string, string> = {
  secret_missing: "Apps Script'te RSVP_SHARED_SECRET tanımlı değil.",
  unauthorized: "Apps Script ve Vercel RSVP_SHARED_SECRET değerleri eşleşmiyor.",
  spreadsheet_not_found: "Google Sheet'te gid=0 sekmesi bulunamadı.",
  spreadsheet_access_denied: "Apps Script'in Google Sheet erişimini kontrol edin.",
  invalid_payload: "Form verileri Apps Script tarafından kabul edilmedi.",
  append_failed: "Apps Script satırı tabloya ekleyemedi.",
};
const defaultScriptUrl =
  "https://script.google.com/macros/s/AKfycbyl3btruIJYxPMidN-q4_28rH1MgRfDwFhHzGQq1epMu7IXF8vVZ6iM7hLsb_KlXEYu/exec";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && new URL(origin).host !== new URL(request.url).host) {
    return Response.json({ error: "Geçersiz istek." }, { status: 403 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Form verisi okunamadı." }, { status: 400 });
  }

  if (!isRecord(payload)) {
    return Response.json({ error: "Form bilgileri geçersiz." }, { status: 400 });
  }

  const firstName = typeof payload.firstName === "string" ? payload.firstName.trim() : "";
  const lastName = typeof payload.lastName === "string" ? payload.lastName.trim() : "";
  const attendance = payload.attendance;
  const guestCount = payload.guestCount;
  const note = typeof payload.note === "string" ? payload.note.trim() : "";

  if (!firstName || firstName.length > 80 || !lastName || lastName.length > 80) {
    return Response.json({ error: "Ad ve soyadınızı kontrol edin." }, { status: 400 });
  }
  if (attendance !== "yes" && attendance !== "no") {
    return Response.json({ error: "Katılım durumunuzu seçin." }, { status: 400 });
  }
  if (attendance === "yes" && (typeof guestCount !== "string" || !guestCounts.has(guestCount))) {
    return Response.json({ error: "Kişi sayısını kontrol edin." }, { status: 400 });
  }
  if (note.length > 500) {
    return Response.json({ error: "Notunuz en fazla 500 karakter olabilir." }, { status: 400 });
  }

  const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL ?? defaultScriptUrl;
  const sharedSecret = process.env.RSVP_SHARED_SECRET;
  if (!scriptUrl || !sharedSecret) {
    return Response.json(
      { error: "Katılım formu henüz etkinleştirilmedi. Lütfen daha sonra tekrar deneyin." },
      { status: 503 },
    );
  }

  let endpoint: URL;
  try {
    endpoint = new URL(scriptUrl);
  } catch {
    return Response.json({ error: "Katılım formu yapılandırması geçersiz." }, { status: 500 });
  }
  if (endpoint.protocol !== "https:" || endpoint.hostname !== "script.google.com") {
    return Response.json({ error: "Katılım formu yapılandırması geçersiz." }, { status: 500 });
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: sharedSecret,
        firstName,
        lastName,
        attendance,
        guestCount: attendance === "yes" ? guestCount : "0",
        note,
      }),
      signal: AbortSignal.timeout(12000),
    });
    const responseText = await response.text();
    let result: { ok?: boolean; code?: string } | null = null;
    try {
      result = JSON.parse(responseText) as { ok?: boolean; code?: string };
    } catch {
      result = null;
    }

    if (!response.ok || result?.ok !== true) {
      const code = result?.code ?? "invalid_response";
      console.error("RSVP Apps Script rejected request", {
        status: response.status,
        contentType: response.headers.get("content-type"),
        code,
      });
      return Response.json(
        {
          error:
            scriptErrors[code] ??
            "Apps Script geçerli yanıt vermedi. Web uygulamasını yeni sürüm olarak dağıtın.",
        },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { error: "Tabloya bağlanılamadı. Lütfen daha sonra tekrar deneyin." },
      { status: 502 },
    );
  }
}