"use client";

import { useEffect, useState } from "react";
import { weddingData } from "@/data/wedding";

type Props = { onOpen?: () => void };
type Step = "closed" | "opening" | "revealed";

export default function Envelope({ onOpen }: Props) {
  const [step, setStep] = useState<Step>("closed");
  const opened = step !== "closed";

  // Zarf açıkken arkadaki sayfa kaymasın
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleSealClick = () => {
    if (step !== "closed") return;
    setStep("opening");
    setTimeout(() => setStep("revealed"), 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      style={{
        background:
          "radial-gradient(ellipse at 50% 30%, #efe2d3, #f8f0e7 70%)",
      }}
    >
      <div
        className="flex min-h-full flex-col items-center justify-center px-5"
        style={{
          paddingTop: "max(2.5rem, env(safe-area-inset-top))",
          paddingBottom: "max(2.5rem, env(safe-area-inset-bottom))",
        }}
      >
        <div className="relative mb-28 mt-36 aspect-[4/3] w-full max-w-[340px]">
          {/* Zarf arka yüzü */}
          <div className="absolute inset-0 z-0 rounded-sm border border-gold/40 bg-sand shadow-xl" />

          {/* İç kart */}
          <div
            className="absolute inset-3 z-10 flex flex-col items-center justify-center border border-gold/50 bg-cream px-4 text-center shadow-md transition-transform duration-1000 ease-out"
            style={{
              transform: opened ? "translateY(-62%)" : "translateY(0)",
              transitionDelay: opened ? "500ms" : "0ms",
            }}
          >
            <p className="font-display text-sm italic text-soft">
              Düğün davetiyesi
            </p>
            <p className="mt-1 font-script text-4xl leading-none text-wine">
              Hatice
            </p>
            <p className="font-script text-2xl text-gold">&amp;</p>
            <p className="font-script text-4xl leading-none text-wine">
              Samet
            </p>
            <p className="mt-2 font-display text-base text-ink">
              {weddingData.displayDate}
            </p>
          </div>

          {/* Zarf cepleri */}
          <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-sm">
            <div
              className="absolute inset-0 bg-[#e6d6c2]"
              style={{ clipPath: "polygon(0 100%, 50% 45%, 100% 100%)" }}
            />
            <div
              className="absolute inset-0 bg-[#ecdfcd]"
              style={{ clipPath: "polygon(0 0, 45% 50%, 0 100%)" }}
            />
            <div
              className="absolute inset-0 bg-[#ecdfcd]"
              style={{ clipPath: "polygon(100% 0, 100% 100%, 55% 50%)" }}
            />
          </div>

          {/* Üst kapak */}
          <div
            className="pointer-events-none absolute inset-0 origin-top bg-[#f3e8d9] transition-transform duration-700 ease-in-out"
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 55%)",
              transform: opened ? "rotateX(180deg)" : "rotateX(0deg)",
              zIndex: opened ? 5 : 30,
            }}
          />

          {/* Mühür */}
          <button
            type="button"
            onClick={handleSealClick}
            aria-label="Davetiyeyi aç"
            className={`absolute left-1/2 top-[55%] z-40 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full font-display text-xl font-semibold text-glow transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${
              opened ? "scale-0 opacity-0" : "pulse-seal"
            }`}
            style={{
              background:
                "radial-gradient(circle at 35% 30%, #a63248, #5b1a2b 60%, #3d0f1c)",
              boxShadow:
                "0 8px 22px rgba(91,26,43,.45), inset 0 0 0 4px rgba(255,255,255,.08)",
            }}
          >
            H&amp;S
          </button>

          {/* Alt yazı / giriş düğmesi */}
          <div className="absolute left-1/2 top-full mt-10 -translate-x-1/2 whitespace-nowrap text-center">
            {step === "closed" && (
              <p className="font-display text-lg italic text-soft">
                Mühüre dokunun
              </p>
            )}
            {step === "revealed" && (
              <button
                type="button"
                onClick={() => onOpen?.()}
                className="rounded-full bg-wine px-8 py-3 font-body text-sm tracking-wide text-cream shadow-lg transition active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                Davetiyeye gir
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
