import React from 'react';
import { weddingData } from '../../../data/wedding';

export default function Upload() {
  return (
    <section className="py-20 px-4 bg-[#f4efe6] text-[#2c2c2c] border-t border-[#e5dfd3] flex flex-col items-center justify-center text-center">
      <div className="max-w-md w-full bg-[#fffdfa] border border-[#d4af37]/30 rounded-2xl p-8 sm:p-10 shadow-xl space-y-6">
        
        {/* Kamera İkonu */}
        <div className="w-16 h-16 bg-[#faf8f5] border border-[#d4af37]/40 rounded-full flex items-center justify-center mx-auto text-3xl shadow-inner">
          📷
        </div>

        {/* Başlık & Açıklama */}
        <div className="space-y-2">
          <span className="text-[#D4AF37] font-serif text-sm tracking-widest uppercase">
            Anıları Paylaşın
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1a1a1a]">
            Fotoğraf Paylaş
          </h2>
          <p className="text-sm text-[#666] leading-relaxed pt-2">
            Düğünde çektiğiniz harika kareleri bizimle paylaşarak bu özel günü ölümsüzleştirin.
          </p>
        </div>

        <div className="w-12 h-[1px] bg-[#D4AF37]/50 mx-auto" />

        {/* Yükleme Butonu */}
        <div>
          <a
            href={weddingData.driveUploadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#b39023] text-white font-medium py-3.5 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 text-base w-full sm:w-auto"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" />
            </svg>
            <span>Fotoğraf Yükle</span>
          </a>
        </div>

      </div>
    </section>
  );
}