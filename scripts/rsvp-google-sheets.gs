const SPREADSHEET_ID = "1k0ewgaVQhq0LcXUF1TBTwpcKKAJ2_epRodi6HO8IlWo";
const SHEET_GID = 0;

function doGet() {
  const expectedSecret = PropertiesService.getScriptProperties().getProperty(
    "RSVP_SHARED_SECRET",
  );

  if (!expectedSecret) {
    return jsonOutput({ ok: false, code: "secret_missing" });
  }

  try {
    return getTargetSheet()
      ? jsonOutput({ ok: true, code: "ready" })
      : jsonOutput({ ok: false, code: "spreadsheet_not_found" });
  } catch (error) {
    return jsonOutput({ ok: false, code: "spreadsheet_access_denied" });
  }
}

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const expectedSecret = PropertiesService.getScriptProperties().getProperty(
      "RSVP_SHARED_SECRET",
    );

    if (!expectedSecret || payload.secret !== expectedSecret) {
      return jsonOutput({
        ok: false,
        code: expectedSecret ? "unauthorized" : "secret_missing",
      });
    }

    if (
      typeof payload.firstName !== "string" ||
      typeof payload.lastName !== "string" ||
      (payload.attendance !== "yes" && payload.attendance !== "no")
    ) {
      return jsonOutput({ ok: false, code: "invalid_payload" });
    }

    const sheet = getTargetSheet();

    if (!sheet) {
      return jsonOutput({ ok: false, code: "spreadsheet_not_found" });
    }

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Gönderim tarihi",
        "Ad",
        "Soyad",
        "Katılım",
        "Kişi sayısı",
        "Not",
      ]);
    }

    sheet.appendRow([
      new Date(),
      safeCell(payload.firstName),
      safeCell(payload.lastName),
      payload.attendance === "yes" ? "Katılıyor" : "Katılamıyor",
      payload.attendance === "yes" ? payload.guestCount : "0",
      safeCell(payload.note || ""),
    ]);

    return jsonOutput({ ok: true });
  } catch (error) {
    return jsonOutput({ ok: false, code: "append_failed" });
  }
}

function getTargetSheet() {
  return SpreadsheetApp.openById(SPREADSHEET_ID)
    .getSheets()
    .find((candidate) => candidate.getSheetId() === SHEET_GID);
}

function safeCell(value) {
  const text = String(value);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function jsonOutput(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(
    ContentService.MimeType.JSON,
  );
}