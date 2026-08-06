"use client";

import { wedding } from "@/data/wedding";

export default function Envelope({
  opened,
  onOpen,
}: {
  opened: boolean;
  onOpen: () => void;
}) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="fade-in flex flex-col items-center text-center">

        <p className="mb-8 text-sm tracking-[0.3em] uppercase text-[#7A746C]">
          Davetlisiniz
        </p>

        <div className="relative w-[320px] h-[220px] bg-white rounded-lg shadow-xl border border-[#E8D7B0] flex items-center justify-center gold-glow">

          {/* Zarf kapağı */}
          <div className={`absolute top-0 left-0 w-full h-1/2 bg-[#FAF7F2] envelope-flap ${
            opened ? "open" : ""
            }`}
            />

          {/* Mühür */}
          <div className="z-10 w-16 h-16 rounded-full bg-[#C8A96A] flex items-center justify-center shadow-lg">
            <span className="text-white text-xl font-serif">
              H&S
            </span>
          </div>

        </div>

        <h1 className="mt-10 text-5xl md:text-6xl">
          {wedding.bride.fullName}
        </h1>

        <div className="my-4 text-3xl text-[#C8A96A]">
          &
        </div>

        <h2 className="text-5xl md:text-6xl">
          {wedding.groom.fullName}
        </h2>

        <p className="mt-8 text-[#7A746C]">
            {wedding.date.day} {wedding.date.month} {wedding.date.year}
        </p>

        <button
         onClick={onOpen}
            className="mt-10 rounded-full bg-[#B8894C] px-8 py-3 text-white transition hover:scale-105"
        >   
         Davetiyeyi Aç
        </button>

      </div>
    </section>
  );
}