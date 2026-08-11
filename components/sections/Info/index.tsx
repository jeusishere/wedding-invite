"use client";

import React from "react";
import { weddingData } from "../../../data/wedding";

export default function Info() {
  return (
    <section
      id="info-section"
      className="
        relative
        overflow-hidden
        bg-[#FAF7F2]
        px-6
        py-24
        sm:py-28
      "
    >
      {/* Dekoratif arka plan */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-[#C8A96A]/10
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl">

        {/* Başlık */}
        <div className="mb-16 text-center">

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#C8A96A]/40" />

            <span className="font-serif text-lg text-[#C8A96A]">
              ❖
            </span>

            <span className="h-px w-10 bg-[#C8A96A]/40" />
          </div>

          <p
            className="
              mb-3
              text-xs
              uppercase
              tracking-[0.35em]
              text-[#8A8379]
            "
          >
            ÖZEL GÜNÜMÜZ
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
            Düğün Bilgileri
          </h2>

        </div>


        {/* Bilgi alanları */}
        <div
          className="
            grid
            grid-cols-1
            gap-px
            overflow-hidden
            rounded-2xl
            border
            border-[#E8D7B0]/70
            bg-[#E8D7B0]/50
            shadow-[0_15px_50px_rgba(45,42,38,0.05)]
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          {/* Tarih */}
          <div
            className="
              flex
              min-h-[220px]
              flex-col
              items-center
              justify-center
              bg-[#FFFDF9]
              px-8
              py-10
              text-center
            "
          >
            <span
              className="
                mb-5
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-[#C8A96A]/30
                font-serif
                text-xl
                text-[#C8A96A]
              "
            >
              ♡
            </span>

            <p
              className="
                mb-3
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-[#8A8379]
              "
            >
              TARİH
            </p>

            <h3
              className="
                font-serif
                text-2xl
                font-light
                text-[#2D2A26]
              "
            >
              {weddingData.displayDate}
            </h3>
          </div>


          {/* Saat */}
          {weddingData.time && (
            <div
              className="
                flex
                min-h-[220px]
                flex-col
                items-center
                justify-center
                bg-[#FFFDF9]
                px-8
                py-10
                text-center
              "
            >
              <span
                className="
                  mb-5
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#C8A96A]/30
                  font-serif
                  text-xl
                  text-[#C8A96A]
                "
              >
                ◷
              </span>

              <p
                className="
                  mb-3
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-[#8A8379]
                "
              >
                SAAT
              </p>

              <h3
                className="
                  font-serif
                  text-2xl
                  font-light
                  text-[#2D2A26]
                "
              >
                {weddingData.time}
              </h3>
            </div>
          )}


          {/* Mekan */}
          {weddingData.venue && (
            <div
              className="
                flex
                min-h-[220px]
                flex-col
                items-center
                justify-center
                bg-[#FFFDF9]
                px-8
                py-10
                text-center
                sm:col-span-2
                lg:col-span-1
              "
            >
              <span
                className="
                  mb-5
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#C8A96A]/30
                  font-serif
                  text-xl
                  text-[#C8A96A]
                "
              >
                ⌖
              </span>

              <p
                className="
                  mb-3
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-[#8A8379]
                "
              >
                MEKAN
              </p>

              <h3
                className="
                  font-serif
                  text-2xl
                  font-light
                  text-[#2D2A26]
                "
              >
                {weddingData.venue}
              </h3>
            </div>
          )}

        </div>


        {/* Alt mesaj */}
        <div className="mt-14 text-center">

          <p
            className="
              mx-auto
              max-w-xl
              font-serif
              text-base
              italic
              leading-relaxed
              text-[#716B63]
            "
          >
            Bu güzel günümüzde sizleri de
            aramızda görmekten mutluluk duyacağız.
          </p>

        </div>

      </div>
    </section>
  );
}