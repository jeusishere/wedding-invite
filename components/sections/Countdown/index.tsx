"use client";

import React, { useEffect, useState } from "react";
import { weddingData } from "../../../data/wedding";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Countdown() {
  const calculateTimeLeft = (): TimeLeft => {
    const target = new Date(weddingData.targetDate).getTime();
    const now = new Date().getTime();

    const difference = target - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(
        difference / (1000 * 60 * 60 * 24)
      ),

      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),

      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),

      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [timeLeft, setTimeLeft] =
    useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBoxes = [
    {
      value: timeLeft.days,
      label: "Gün",
    },
    {
      value: timeLeft.hours,
      label: "Saat",
    },
    {
      value: timeLeft.minutes,
      label: "Dakika",
    },
    {
      value: timeLeft.seconds,
      label: "Saniye",
    },
  ];

  return (
    <section
      id="countdown-section"
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
          h-[500px]
          w-[500px]
          -translate-x-1/2
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
          left-1/2
          top-1/2
          h-[360px]
          w-[360px]
          -translate-x-1/2
          -translate-y-1/2
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
          max-w-4xl
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
          BÜYÜK GÜNE KALAN ZAMAN
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
          Buluşmamıza Çok Az Kaldı
        </h2>

        <p
          className="
            mx-auto
            mt-5
            max-w-lg
            font-serif
            text-base
            italic
            leading-relaxed
            text-[#716B63]
          "
        >
          Bu güzel günü birlikte kutlamak için
          sabırsızlanıyoruz.
        </p>

        {/* Geri sayım */}

        <div
          className="
            mx-auto
            mt-12
            grid
            max-w-3xl
            grid-cols-2
            gap-3
            sm:grid-cols-4
            sm:gap-5
          "
        >
          {timeBoxes.map((item) => (
            <div
              key={item.label}
              className="
                rounded-2xl
                border
                border-[#E8D7B0]
                bg-[#FFFDF9]
                px-3
                py-6
                shadow-[0_10px_30px_rgba(45,42,38,0.04)]
                sm:px-5
                sm:py-8
              "
            >
              <div
                className="
                  font-serif
                  text-4xl
                  font-light
                  tabular-nums
                  text-[#2D2A26]
                  sm:text-5xl
                "
              >
                {String(item.value).padStart(2, "0")}
              </div>

              <div
                className="
                  mt-2
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-[#8A8379]
                  sm:text-xs
                "
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tarih */}

        <div
          className="
            mt-10
            inline-flex
            items-center
            gap-3
            border-y
            border-[#C8A96A]/30
            px-6
            py-3
          "
        >
          <span className="font-serif text-[#C8A96A]">
            ✦
          </span>

          <span
            className="
              text-sm
              tracking-[0.15em]
              text-[#716B63]
            "
          >
            {weddingData.displayDate}
          </span>

          <span className="font-serif text-[#C8A96A]">
            ✦
          </span>
        </div>
      </div>
    </section>
  );
}