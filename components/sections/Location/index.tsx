import React from 'react';
import { weddingData } from '@/data/wedding';

export default function Location() {
  return (
    <section className="py-16 px-4 bg-[#faf8f5]" id="location">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Üst Başlık ve Mekan Bilgisi */}
        <div className="space-y-3">
          <span className="text-[#D4AF37] font-serif text-sm tracking-widest uppercase block">
            Sizleri Aramızda Görmekten Mutluluk Duyarız
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1a1a1a]">
            Düğün Mekanı
          </h2>
          <h3 className="text-xl sm:text-2xl font-medium text-[#D4AF37] pt-2">
            {weddingData.location.name}
          </h3>
          <p className="text-[#666666] max-w-md mx-auto text-sm leading-relaxed">
            {weddingData.location.address}
          </p>
          <div className="inline-block bg-[#f0ebd9] text-[#8c8275] font-medium text-sm px-4 py-1.5 rounded-full mt-2">
            {weddingData.wedding.displayDate} — Saat: {weddingData.wedding.displayTime}
          </div>
        </div>

        {/* Yol Tarifi Butonu */}
        <div>
          <a
            href={weddingData.location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-white px-7 py-3.5 rounded-full hover:bg-[#b39023] transition-all shadow-md text-sm font-medium hover:scale-105 active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Haritada Aç & Yol Tarifi Al
          </a>
        </div>

        {/* Gömülü Canlı Google Haritası */}
        <div className="w-full h-[350px] sm:h-[450px] rounded-2xl overflow-hidden shadow-lg border border-[#e5dfd3] bg-white">
          <iframe
            src={weddingData.location.embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Düğün Konumu - Akkent Kültür ve Kongre Merkezi"
            className="w-full h-full"
          ></iframe>
        </div>

      </div>
    </section>
  );
}