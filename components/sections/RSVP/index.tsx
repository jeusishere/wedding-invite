"use client";

import React, { useState } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx8yhas_3Kq9jrjkYscevOLVuRQIRDa2LBg05OUdxMSPIjS8PTdskErpbJdHbBWeQw/exec";

export default function RSVP() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setIsSending(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") || ""),
      attendance: String(
        formData.get("attendance") || ""
      ),
      guestCount: String(
        formData.get("guestCount") || "1"
      ),
      note: String(formData.get("note") || ""),
      date: new Date().toLocaleString("tr-TR"),
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: new URLSearchParams(data).toString(),
      });

      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error(err);

      setError(
        "Katılım bilgileriniz gönderilemedi. Lütfen tekrar deneyin."
      );
    } finally {
      setIsSending(false);
    }
  };

  const closeModal = () => {
    if (isSending) return;

    setIsOpen(false);
    setSubmitted(false);
    setError("");
  };

  return (
    <>
      {/* =====================================
          KATILIM BÖLÜMÜ
      ===================================== */}

      <section
        id="rsvp-section"
        className="
          relative
          overflow-hidden
          bg-[#F4F0E8]
          px-6
          py-24
          sm:py-28
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            -right-32
            top-1/2
            h-80
            w-80
            -translate-y-1/2
            rounded-full
            border
            border-[#C8A96A]/10
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -left-32
            bottom-0
            h-64
            w-64
            rounded-full
            border
            border-[#C8A96A]/10
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-3xl
            text-center
          "
        >
          {/* Süsleme */}

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#C8A96A]/40" />

            <span className="font-serif text-lg text-[#C8A96A]">
              ❖
            </span>

            <span className="h-px w-10 bg-[#C8A96A]/40" />
          </div>

          {/* Başlık */}

          <p
            className="
              mb-3
              text-xs
              uppercase
              tracking-[0.35em]
              text-[#8A8379]
            "
          >
            DAVETİMİZE CEVABINIZ
          </p>

          <h2
            className="
              font-serif
              text-4xl
              font-light
              text-[#2D2A26]
              sm:text-5xl
            "
          >
            Katılımınızı Bildirin
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              font-serif
              text-base
              italic
              leading-relaxed
              text-[#716B63]
              sm:text-lg
            "
          >
            Bu özel günümüzde sizleri aramızda
            görmekten mutluluk duyacağız.
          </p>

          {/* Buton */}

          <button
            type="button"
            onClick={() => {
              setIsOpen(true);
              setSubmitted(false);
              setError("");
            }}
            className="
              mt-10
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-[#C8A96A]
              bg-[#C8A96A]
              px-8
              py-3.5
              text-sm
              tracking-wide
              text-white
              shadow-[0_10px_30px_rgba(200,169,106,0.15)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#B8894C]
            "
          >
            <span className="text-lg">
              ♡
            </span>

            Katılım Bildir
          </button>
        </div>
      </section>

      {/* =====================================
          RSVP MODALI
      ===================================== */}

      {isOpen && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            overflow-y-auto
            bg-[#2D2A26]/50
            px-5
            py-8
            backdrop-blur-sm
          "
          onClick={closeModal}
        >
          <div
            className="
              relative
              w-full
              max-w-lg
              rounded-2xl
              border
              border-[#E8D7B0]
              bg-[#FFFDF9]
              p-7
              shadow-2xl
              sm:p-10
            "
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            {/* Kapat */}

            <button
              type="button"
              onClick={closeModal}
              disabled={isSending}
              className="
                absolute
                right-5
                top-4
                text-2xl
                font-light
                text-[#716B63]
                transition-colors
                hover:text-[#2D2A26]
                disabled:opacity-40
              "
              aria-label="Pencereyi kapat"
            >
              ×
            </button>

            {!submitted ? (
              <>
                {/* Başlık */}

                <div className="text-center">

                  <div className="mb-4 flex justify-center">
                    <span
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#C8A96A]/30
                        font-serif
                        text-2xl
                        text-[#C8A96A]
                      "
                    >
                      ♡
                    </span>
                  </div>

                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.3em]
                      text-[#8A8379]
                    "
                  >
                    BİZİMLE OLACAK MISINIZ?
                  </p>

                  <h3
                    className="
                      mt-2
                      font-serif
                      text-3xl
                      font-light
                      text-[#2D2A26]
                    "
                  >
                    Katılım Bildir
                  </h3>
                </div>

                {/* Hata */}

                {error && (
                  <div
                    className="
                      mt-6
                      rounded-xl
                      bg-red-50
                      px-4
                      py-3
                      text-center
                      text-sm
                      text-red-700
                    "
                  >
                    {error}
                  </div>
                )}

                {/* Form */}

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >
                  {/* Ad Soyad */}

                  <div>
                    <label
                      htmlFor="guest-name"
                      className="
                        mb-2
                        block
                        text-sm
                        text-[#4F4A44]
                      "
                    >
                      Ad Soyad
                    </label>

                    <input
                      id="guest-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Adınız ve soyadınız"
                      className="
                        w-full
                        rounded-xl
                        border
                        border-[#E8D7B0]
                        bg-[#FAF7F2]
                        px-4
                        py-3
                        text-sm
                        text-[#2D2A26]
                        outline-none
                        transition
                        placeholder:text-[#AAA39A]
                        focus:border-[#C8A96A]
                        focus:ring-1
                        focus:ring-[#C8A96A]
                      "
                    />
                  </div>

                  {/* Katılım */}

                  <div>
                    <label
                      htmlFor="attendance"
                      className="
                        mb-2
                        block
                        text-sm
                        text-[#4F4A44]
                      "
                    >
                      Katılım Durumu
                    </label>

                    <select
                      id="attendance"
                      name="attendance"
                      required
                      defaultValue=""
                      className="
                        w-full
                        rounded-xl
                        border
                        border-[#E8D7B0]
                        bg-[#FAF7F2]
                        px-4
                        py-3
                        text-sm
                        text-[#2D2A26]
                        outline-none
                        focus:border-[#C8A96A]
                        focus:ring-1
                        focus:ring-[#C8A96A]
                      "
                    >
                      <option value="" disabled>
                        Seçiniz
                      </option>

                      <option value="Katılacağım">
                        Katılacağım
                      </option>

                      <option value="Katılamayacağım">
                        Katılamayacağım
                      </option>
                    </select>
                  </div>

                  {/* Kişi sayısı */}

                  <div>
                    <label
                      htmlFor="guest-count"
                      className="
                        mb-2
                        block
                        text-sm
                        text-[#4F4A44]
                      "
                    >
                      Kişi Sayısı
                    </label>

                    <input
                      id="guest-count"
                      name="guestCount"
                      type="number"
                      min="1"
                      max="20"
                      defaultValue="1"
                      required
                      className="
                        w-full
                        rounded-xl
                        border
                        border-[#E8D7B0]
                        bg-[#FAF7F2]
                        px-4
                        py-3
                        text-sm
                        text-[#2D2A26]
                        outline-none
                        focus:border-[#C8A96A]
                        focus:ring-1
                        focus:ring-[#C8A96A]
                      "
                    />
                  </div>

                  {/* Not */}

                  <div>
                    <label
                      htmlFor="guest-note"
                      className="
                        mb-2
                        block
                        text-sm
                        text-[#4F4A44]
                      "
                    >
                      Notunuz
                      <span className="ml-1 text-xs text-[#9A938A]">
                        (İsteğe bağlı)
                      </span>
                    </label>

                    <textarea
                      id="guest-note"
                      name="note"
                      rows={3}
                      placeholder="Bize iletmek istediğiniz bir not varsa..."
                      className="
                        w-full
                        resize-none
                        rounded-xl
                        border
                        border-[#E8D7B0]
                        bg-[#FAF7F2]
                        px-4
                        py-3
                        text-sm
                        text-[#2D2A26]
                        outline-none
                        transition
                        placeholder:text-[#AAA39A]
                        focus:border-[#C8A96A]
                        focus:ring-1
                        focus:ring-[#C8A96A]
                      "
                    />
                  </div>

                  {/* Gönder */}

                  <button
                    type="submit"
                    disabled={isSending}
                    className="
                      w-full
                      rounded-full
                      bg-[#C8A96A]
                      px-8
                      py-3.5
                      text-sm
                      tracking-wide
                      text-white
                      transition-all
                      duration-300
                      hover:bg-[#B8894C]
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  >
                    {isSending
                      ? "Gönderiliyor..."
                      : "Katılımımı Gönder"}
                  </button>
                </form>
              </>
            ) : (
              /* =================================
                 BAŞARILI
              ================================= */

              <div className="py-10 text-center">

                <div
                  className="
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#C8A96A]/40
                    bg-[#F4F0E8]
                    font-serif
                    text-2xl
                    text-[#C8A96A]
                  "
                >
                  ✓
                </div>

                <h3
                  className="
                    mt-6
                    font-serif
                    text-3xl
                    font-light
                    text-[#2D2A26]
                  "
                >
                  Teşekkür ederiz
                </h3>

                <p
                  className="
                    mx-auto
                    mt-4
                    max-w-sm
                    font-serif
                    text-base
                    italic
                    leading-relaxed
                    text-[#716B63]
                  "
                >
                  Katılım bilginiz başarıyla
                  iletildi. Sizi bu güzel günümüzde
                  aramızda görmek için sabırsızlanıyoruz.
                </p>

                <button
                  type="button"
                  onClick={closeModal}
                  className="
                    mt-8
                    rounded-full
                    border
                    border-[#C8A96A]
                    px-8
                    py-3
                    text-sm
                    text-[#8A6730]
                    transition-colors
                    hover:bg-[#C8A96A]
                    hover:text-white
                  "
                >
                  Kapat
                </button>

              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}