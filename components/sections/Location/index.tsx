import React from 'react';
import { weddingData } from '@/data/wedding';

export default function Location() {
  return (
    <section className="py-10 px-4 bg-[#f5f1ea] border-t border-[#e5dfd3]" id="location">
      {/* max-w-2xl ile genişliği daralttık */}
      <div className="max-w-2xl mx-auto text-center space-y-5">
        
        {/* Mekan Bilgileri */}
        <div className="space-y-1.5">
          <h2 className="text-2xl font-serif text-[#1a1a1a]">Düğün Mekanı</h2>
          <h3 className="text-lg font-medium text-[#D4AF37]">
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
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-white px-5 py-2.5 rounded-full hover:bg-[#b39023] transition-all shadow-sm text-xs font-medium hover:scale-105 active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Haritada Aç & Yol Tarifi Al
          </a>
        </div>

        {/* Küçük Boyutlu Harita Kutusu (Yükseklik 280px yapıldı) */}
        <div className="w-full h-[250px] sm:h-[280px] rounded-xl overflow-hidden shadow-sm border border-[#e5dfd3] bg-white">
          <iframe
            src={weddingData.location.embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Düğün Konumu"
            className="w-full h-full"
          ></iframe>
        </div>

      </div>
    </section>
  );
}