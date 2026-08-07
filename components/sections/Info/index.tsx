import React from 'react';
import { weddingData } from '../../../data/wedding';

export default function Info() {
  return (
    <section
      id="info-section"
      className="py-20 px-4 relative bg-[#faf8f5] text-[#2c2c2c] overflow-hidden flex flex-col items-center justify-center min-h-[80vh]"
    >
      {/* Arka Plandaki Hafif Altın Desen Dokusu */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#D4AF37 1.5px, transparent 1.5px), radial-gradient(#D4AF37 1.5px, #faf8f5 1.5px)`,
          backgroundSize: `60px 60px`,
          backgroundPosition: `0 0, 30px 30px`
        }}
      />

      {/* Başlık */}
      <div className="text-center mb-12 z-10">
        <span className="text-[#D4AF37] font-serif text-sm tracking-widest uppercase">Detaylar</span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1a1a] mt-1">Düğün Bilgileri</h2>
        <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-4" />
      </div>

      {/* Ana Bilgi Kartı */}
      <div className="w-full max-w-md bg-[#fffdfa] border border-[#d4af37]/30 rounded-2xl p-8 sm:p-10 shadow-xl relative z-10 text-center space-y-8 backdrop-blur-sm">
        
        {/* 📅 Tarih */}
        <div className="space-y-2">
          <div className="text-2xl">📅</div>
          <h3 className="text-xs font-semibold tracking-widest uppercase text-[#8c8275]">Tarih</h3>
          <p className="font-serif text-2xl text-[#1a1a1a] font-medium">
            {weddingData.displayDate}
          </p>
        </div>

        {/* Ayraç Çizgi */}
        <div className="w-full h-[1px] bg-[#e5dfd3]" />

        {/* 🕐 Saat */}
        <div className="space-y-2">
          <div className="text-2xl">🕐</div>
          <h3 className="text-xs font-semibold tracking-widest uppercase text-[#8c8275]">Saat</h3>
          <p className="font-serif text-2xl text-[#1a1a1a] font-medium">
            {weddingData.displayTime}
          </p>
        </div>

        {/* Ayraç Çizgi */}
        <div className="w-full h-[1px] bg-[#e5dfd3]" />

        {/* 📍 Salon & Adres */}
        <div className="space-y-3">
          <div className="text-2xl">📍</div>
          <h3 className="text-xs font-semibold tracking-widest uppercase text-[#8c8275]">Salon</h3>
          <div className="space-y-1">
            <p className="font-serif text-xl text-[#1a1a1a] font-semibold">
              {weddingData.location.name}
            </p>
            <p className="text-sm text-[#666] leading-relaxed max-w-xs mx-auto">
              {weddingData.location.address}
            </p>
          </div>

          {/* Haritada Aç Butonu */}
          <div className="pt-4">
            <a
              href={weddingData.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#b39023] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-md hover:shadow-lg active:scale-95"
            >
              <span>Haritada Aç</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3z" />
                <path d="M5 5h5V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5h-2v5H5V5z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}