"use client";

import React from "react";
import { weddingData } from "../../../data/wedding";

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#2D2A26]
        px-6
        py-20
        text-center
      "
    >
      {/* Dekoratif çizgiler */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-px
          w-32
          -translate-x-1/2
          bg-[#C8A96A]/50
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          bottom-0
          h-px
          w-20
          -translate-x-1/2
          bg-[#C8A96A]/30
        "
      />

      <div className="relative z-10 mx-auto max-w-3xl">

        {/* Süsleme */}

        <div className="mb-7 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#C8A96A]/40" />

          <span className="font-serif text-lg text-[#C8A96A]">
            ❖
          </span>

          <span className="h-px w-10 bg-[#C8A96A]/40" />
        </div>

        {/* İsimler */}

        <h2
          className="
            font-serif
            text-4xl
            font-light
            tracking-wide
            text-[#FFFDF9]
            sm:text-5xl
          "
        >
          {weddingData.bride}
        </h2>

        <div
          className="
            my-3
            font-serif
            text-2xl
            italic
            text-[#C8A96A]
          "
        >
          &
        </div>

        <h2
          className="
            font-serif
            text-4xl
            font-light
            tracking-wide
            text-[#FFFDF9]
            sm:text-5xl
          "
        >
          {weddingData.groom}
        </h2>

        {/* Tarih */}

        <p
          className="
            mt-8
            text-xs
            uppercase
            tracking-[0.35em]
            text-[#C8A96A]
          "
        >
          {weddingData.displayDate}
        </p>

        {/* Mesaj */}

        <p
          className="
            mx-auto
            mt-8
            max-w-md
            font-serif
            text-sm
            italic
            leading-7
            text-[#D5D0C9]
          "
        >
          Hayatımızın bu özel gününde
          bizimle olduğunuz için teşekkür ederiz.
        </p>

        {/* Alt bilgi */}

        <div
          className="
            mt-12
            border-t
            border-[#FFFDF9]/10
            pt-6
          "
        >
          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-[#8A8379]
            "
          >
            Sevgiyle hazırlandı
          </p>
        </div>

      </div>
    </footer>
  );
}