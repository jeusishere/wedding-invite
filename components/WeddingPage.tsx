"use client";

import React, { useState } from "react";
import { weddingData } from "@/data/wedding";
import Envelope from "@/components/sections/Envelope";
import Rsvp from "@/components/sections/RSVP";
import Upload from "@/components/sections/Upload";
import Countdown from "@/components/sections/Countdown";
import Location from "@/components/sections/Location";

export default function WeddingPage() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <main className="min-h-svh bg-ivory font-body text-ink selection:bg-glow/60">
      {/* 1. Zarf (açılış ekranı) */}
      {!isOpened && <Envelope onOpen={() => setIsOpened(true)} />}

      {/* 2. Davetiye */}
      <section className="mx-auto flex min-h-svh max-w-2xl flex-col items-center justify-center px-6 py-20 text-center">
        <p className="font-display text-xl italic text-soft">
          Sizleri aramızda görmekten mutluluk duyarız
        </p>

        <h1 className="mt-8 text-balance text-wine">
          <span className="block font-script text-5xl leading-tight sm:text-7xl">
            {weddingData.bride.split(" ")[0]}
          </span>
          <span className="block font-display text-xl font-medium leading-tight tracking-[0.02em] sm:text-2xl">
            {weddingData.bride.split(" ").slice(1).join(" ")}
          </span>
          <span className="my-1 block text-3xl font-normal italic tracking-normal text-gold">&amp;</span>
          <span className="block font-script text-5xl leading-tight sm:text-7xl">
            {weddingData.groom.split(" ")[0]}
          </span>
          <span className="block font-display text-xl font-medium leading-tight tracking-[0.02em] sm:text-2xl">
            {weddingData.groom.split(" ").slice(1).join(" ")}
          </span>
        </h1>

        <div className="orn my-10">❖</div>

        <p className="max-w-md text-balance font-display text-xl leading-relaxed text-ink sm:text-2xl">
          Hayatımızı birleştireceğimiz bu özel günde siz değerli dostlarımızı
          yanımızda görmekten onur duyuyoruz.
        </p>

        <div className="mt-10 border-y border-gold/40 px-8 py-5">
          <p className="font-display text-4xl text-ink sm:text-5xl">
            {weddingData.displayDate}
          </p>
          <p className="font-display text-2xl italic text-soft sm:text-3xl">
            {weddingData.displayDay}
          </p>
          <p className="font-display text-3xl italic text-soft sm:text-4xl">
            saat {weddingData.displayTime}
          </p>
        </div>

        <p className="mt-6 font-display text-lg italic text-soft">
          {weddingData.venue}
        </p>
      </section>

      {/* 3. Geri sayım */}
      <section className="bg-wine px-6 py-16 text-center">
        <h2 className="font-display text-4xl font-medium text-glow sm:text-5xl">
          Nikahımıza kalan süre
        </h2>
        <Countdown />
      </section>

      {/* 4. Katılım bildirimi: yanıt kartı */}
      <section className="mx-auto max-w-xl px-5 py-20">
        <div className="border border-gold/60 p-1.5">
          <div className="border border-gold/30 bg-cream px-6 py-10 sm:px-10">
            <Rsvp />
          </div>
        </div>
      </section>

      {/* 5. Fotoğraf paylaşımı */}
      <section className="mx-auto max-w-xl px-6 pb-20">
        <Upload />
      </section>

      {/* 6. Konum */}
      <section className="bg-sand px-5 py-20">
        <Location />
      </section>

      {/* 7. Alt bilgi */}
      <footer
        className="px-6 pt-14 text-center"
        style={{ paddingBottom: "max(3.5rem, env(safe-area-inset-bottom))" }}
      >
        <p className="font-script text-4xl text-wine sm:text-5xl">
          Hatice &amp; Samet
        </p>
        <p className="mt-1 font-display text-lg italic text-soft">
          {weddingData.displayDate}
        </p>
        <p className="font-display text-base italic text-soft">
          {weddingData.displayDay}
        </p>
      </footer>
    </main>
  );
}
