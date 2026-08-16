import React from 'react';
import { weddingData } from '@/data/wedding';

export default function Location() {
  return (
    <section className="py-10 px-6 sm:px-12 w-full flex flex-col items-center text-center">
      <div className="max-w-2xl mx-auto space-y-6 w-full flex flex-col items-center">
        
        {/* Başlık ve Adres */}
        <div className="space-y-2">
          <p className="text-[#D4AF37] tracking-widest uppercase text-xs font-semibold">
            Konum & Ulaşım
          </p>
          <h2 className="text-3xl font-serif text-[#1A1A1A]">Düğün Mekanı</h2>
          <h3 className="text-lg font-medium text-[#D4AF37] font-serif">
            {weddingData.location.name}
          </h3>
          <p className="text-[#666666] text-xs max-w-md mx-auto leading-relaxed">
            {weddingData.location.address}
          </p>
        </div>

        {/* Yol Tarifi Butonu */}
        <div>
          <a
            href={weddingData.location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#b8952b] text-white px-6 py-2.5 rounded-full transition-all shadow-md text-xs font-medium hover:scale-105 active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Haritada Aç & Yol Tarifi Al
          </a>
        </div>

        {/* Tam Ortalanmış Harita Çerçevesi */}
        <div className="w-full max-w-2xl h-[280px] sm:h-[320px] rounded-2xl overflow-hidden shadow-sm border border-[#E8E2D5] bg-[#FAF7F2] mx-auto">
          <iframe
            src={weddingData.location.embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Düğün Konumu"
            className="w-full h-full"
          ></iframe>
        </div>

      </div>
    </section>
  );
}