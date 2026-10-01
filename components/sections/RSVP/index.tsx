"use client";

import React, { useState } from "react";

const inputCls =
  "mt-1 w-full border-0 border-b border-gold/50 bg-transparent px-0 py-2 font-body text-ink placeholder:text-soft/60 focus:border-wine focus:outline-none focus:ring-0";

const chip = (active: boolean) =>
  `flex-1 min-w-[5.5rem] border px-3 py-3 text-sm transition focus-visible:outline-2 focus-visible:outline-gold ${
    active
      ? "border-wine bg-wine text-cream"
      : "border-gold/40 bg-transparent text-ink hover:border-wine"
  }`;

export default function Rsvp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    guestCount: "1",
    attendance: "yes",
    note: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  // NOT: Mevcut davranış korundu. Yanıt şu an sadece ekranda teşekkür gösteriyor.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 800);
  };

  return (
    <div>
      <div className="text-center">
        <h2 className="font-script text-5xl text-wine">Yanıtınız</h2>
        <p className="mt-2 font-display text-lg italic text-soft">
          Lütfen katılım durumunuzu düğün tarihinden önce bildirin.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid grid-cols-2 gap-5">
          <label className="block text-sm text-soft">
            Adınız
            <input
              type="text"
              required
              autoComplete="given-name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className={inputCls}
            />
          </label>
          <label className="block text-sm text-soft">
            Soyadınız
            <input
              type="text"
              required
              autoComplete="family-name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className={inputCls}
            />
          </label>
        </div>

        <div>
          <p className="text-sm text-soft">Katılım durumunuz</p>
          <div className="mt-2 flex gap-3">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, attendance: "yes" })}
              className={chip(formData.attendance === "yes")}
            >
              ✓ Katılıyorum
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, attendance: "no" })}
              className={chip(formData.attendance === "no")}
            >
              ✕ Katılamıyorum
            </button>
          </div>
        </div>

        {formData.attendance === "yes" && (
          <div>
            <p className="text-sm text-soft">Kaç kişi geleceksiniz?</p>
            <div className="mt-2 flex gap-2">
              {["1", "2", "3", "4+"].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setFormData({ ...formData, guestCount: num })}
                  className={chip(formData.guestCount === num)}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        )}

        <label className="block text-sm text-soft">
          Notunuz (isteğe bağlı)
          <textarea
            rows={2}
            placeholder="Gelin ve damada iletmek istediğiniz mesaj"
            value={formData.note}
            onChange={(e) => setFormData({ ...formData, note: e.target.value })}
            className={inputCls + " resize-none"}
          />
        </label>

        <button
          type="submit"
          disabled={status === "submitting" || status === "success"}
          className="w-full bg-wine px-4 py-4 text-sm tracking-wide text-cream shadow-md transition active:scale-[0.99] disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          {status === "submitting" ? "Gönderiliyor..." : "Yanıtımı gönder"}
        </button>

        {status === "success" && (
          <p className="text-center font-display text-xl italic text-wine">
            Yanıtınız bize ulaştı, teşekkür ederiz.
          </p>
        )}
      </form>
    </div>
  );
}
