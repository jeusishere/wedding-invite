import React from 'react';
import { weddingData } from '../../../data/wedding';

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-[#1a1a1a] text-[#faf8f5] flex flex-col items-center justify-center text-center border-t border-[#D4AF37]/30">
      <div className="space-y-4 max-w-md mx-auto">
        {/* Kalp Simgesi */}
        <div className="text-[#D4AF37] text-2xl font-serif animate-pulse">
          ♡
        </div>

        {/* İsimler */}
        <h3 className="font-serif text-2xl sm:text-3xl tracking-wide text-[#fffdfa]">
          {weddingData.bride.split(' ')[0]} &amp; {weddingData.groom.split(' ')[0]}
        </h3>

        {/* Tarih */}
        <p className="text-xs sm:text-sm font-serif tracking-widest text-[#D4AF37] uppercase">
          {weddingData.displayDate}
        </p>

        {/* İnce Ayraç */}
        <div className="w-12 h-[1px] bg-[#D4AF37]/40 mx-auto pt-2" />

        {/* Sevgi Notu */}
        <p className="text-[11px] text-[#8c8275] pt-2">
          Sevgiyle tasarlandı ✨
        </p>
      </div>
    </footer>
  );
}