"use client";

import React from "react";
import { weddingData } from "../../../data/wedding";

export default function Hero() {
  const handleScrollDown = () => {
    const countdownSection = document.getElementById("countdown-section");

    if (countdownSection) {
      countdownSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero-section"
      className="
        relative
        min-h-[86vh]
        flex
        flex-col
        items-center
        justify-between
        overflow-hidden
        bg-[#FAF7F2]
        px-6
        pt-8
        pb-5
        text-center
      "
    >
      {/* Çok hafif arka plan süsü */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          bg-[radial-gradient(circle_at_center,#C8A96A_1px,transparent_1px)]
          bg-[size:24px_24px]
        "
      />

      {/* Üst Süsleme */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="h-px w-12 bg-[#C8A96A]/60" />

        <span className="my-1 font-serif text-lg text-[#C8A96A]">
          ❖
        </span>

        <div className="h-px w-12 bg-[#C8A96A]/60" />
      </div>

      {/* Ana Davetiye İçeriği */}
      <div
        className="
          relative
          z-10
          flex
          w-full
          max-w-3xl
          flex-col
          items-center
          justify-center
          text-center
          space-y-6
        "
      >
        {/* Küçük başlık */}
        <p
          className="
            text-xs
            sm:text-sm
            tracking-[0.35em]
            uppercase
            text-[#8A847B]
          "
        >
          Düğün Davetiyesi
        </p>

        {/* İsimler */}
        <div className="space-y-3">

          <h1
            className="
              font-serif
              text-3xl
              sm:text-5xl
              md:text-6xl
              font-light
              tracking-wide
              text-[#2D2A26]
            "
          >
            {weddingData.bride}
          </h1>

          <div className="flex items-center justify-center gap-4">

            <span className="h-px w-8 sm:w-16 bg-[#C8A96A]/40" />

            <span
              className="
                font-serif
                text-2xl
                sm:text-3xl
                italic
                text-[#C8A96A]
              "
            >
              &
            </span>

            <span className="h-px w-8 sm:w-16 bg-[#C8A96A]/40" />

          </div>

          <h1
            className="
              font-serif
              text-3xl
              sm:text-5xl
              md:text-6xl
              font-light
              tracking-wide
              text-[#2D2A26]
            "
          >
            {weddingData.groom}
          </h1>

        </div>

        {/* Tarih */}
        <div className="pt-3">

          <span
            className="
              inline-block
              border-y
              border-[#C8A96A]/40
              px-6
              py-2
              font-serif
              text-base
              sm:text-xl
              tracking-[0.18em]
              text-[#55504A]
            "
          >
            {weddingData.displayDate}
          </span>

        </div>

        {/* Davet Mesajı */}
        <p
          className="
            max-w-md
            px-4
            pt-1
            font-serif
            text-base
            sm:text-lg
            italic
            leading-relaxed
            text-[#66615B]
          "
        >
          Hayatımızın en özel gününde sizleri aramızda görmekten mutluluk
          duyacağız.
        </p>

      </div>

      {/* Aşağıda içerik olduğunu gösteren alan */}
      <div className="relative z-10 flex flex-col items-center">

        <button
          type="button"
          onClick={handleScrollDown}
          className="
            group
            flex
            flex-col
            items-center
            gap-1
            text-[#C8A96A]
            transition-all
            duration-300
            hover:text-[#A98236]
            focus:outline-none
          "
          aria-label="Düğün detaylarını keşfet"
        >

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.3em]
              opacity-70
              transition-opacity
              group-hover:opacity-100
            "
          >
            Detayları keşfet
          </span>

          <svg
            className="
              h-6
              w-6
              animate-bounce
              stroke-current
            "
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>

        </button>

        {/* Bir sonraki bölümün ipucu */}
        <div
          className="
            mt-2
            h-5
            w-px
            bg-gradient-to-b
            from-[#C8A96A]/50
            to-transparent
          "
        />

      </div>

    </section>
  );
}