import React from 'react';
import { weddingData } from '../../../data/wedding';

export default function Hero() {
  const handleScrollDown = () => {
    const infoSection = document.getElementById('info-section');
    if (infoSection) {
      infoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-between items-center py-12 px-6 relative bg-[#faf8f5] text-[#2c2c2c] overflow-hidden">
      {/* Arka Plan Mimarisi ve Arka Plan Desen Dokusu */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Üst Kısım Süsleme Motifi */}
      <div className="flex flex-col items-center pt-4 z-10">
        <div className="w-12 h-[1px] bg-[#D4AF37]/60" />
        <span className="text-[#D4AF37] font-serif text-lg my-1">❖</span>
        <div className="w-12 h-[1px] bg-[#D4AF37]/60" />
      </div>

      {/* Ana İçerik */}
      <div className="flex flex-col items-center max-w-2xl mx-auto my-auto z-10 space-y-6 text-center">
        {/* İsimler */}
        <div className="space-y-2">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1a1a1a] tracking-wide font-light">
            {weddingData.bride}
          </h1>

          <div className="flex items-center justify-center gap-4 my-3">
            <span className="w-8 sm:w-16 h-[1px] bg-[#D4AF37]/40" />
            <span className="font-serif italic text-2xl sm:text-3xl text-[#D4AF37]">&</span>
            <span className="w-8 sm:w-16 h-[1px] bg-[#D4AF37]/40" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1a1a1a] tracking-wide font-light">
            {weddingData.groom}
          </h1>
        </div>

        {/* Tarih Alanı */}
        <div className="pt-4 pb-2">
          <span className="inline-block px-6 py-2 border-y border-[#D4AF37]/40 font-serif text-lg sm:text-xl tracking-widest text-[#555] uppercase">
            {weddingData.displayDate}
          </span>
        </div>

        {/* Davet Mesajı */}
        <p className="font-serif italic text-base sm:text-lg text-[#555] max-w-md leading-relaxed pt-2">
          Hayatımızın en özel gününde sizleri aramızda görmekten mutluluk duyacağız.
        </p>
      </div>

      {/* Alt Kaydırma Oku */}
      <div className="pb-6 z-10 flex flex-col items-center">
        <button
          onClick={handleScrollDown}
          className="group flex flex-col items-center text-[#D4AF37] hover:text-[#b39023] transition-colors cursor-pointer focus:outline-none"
          aria-label="Aşağı Kaydır"
        >
          <svg
            className="w-7 h-7 animate-bounce stroke-current"
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
      </div>
    </section>
  );
}