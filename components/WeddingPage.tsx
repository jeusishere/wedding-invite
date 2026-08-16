'use client';

import React, { useState } from 'react';
import { weddingData } from '@/data/wedding';
import Envelope from '@/components/sections/Envelope';
import Rsvp from '@/components/sections/RSVP';
import Upload from '@/components/sections/Upload';
import Countdown from '@/components/sections/Countdown';
import Location from '@/components/sections/Location';

export default function WeddingPage() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#2B2B2B] flex flex-col items-center w-full selection:bg-[#C5A059]/20">
      
      {/* 1. Zarf (Açılış Ekranı) */}
      {!isOpened && (
        <Envelope onOpen={() => setIsOpened(true)} />
      )}

      {/* 2. Ana Davetiye Alanı */}
      <div className="w-full max-w-3xl mx-auto px-4 py-8 sm:py-14 space-y-10 flex flex-col items-center">
        
        {/* ANA DAVETİYE KARTI */}
        <section className="w-full bg-white rounded-3xl p-8 sm:p-14 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-[#EADBCE] text-center relative flex flex-col items-center">
          
          {/* Çift İnce Altın Çerçeve */}
          <div className="absolute inset-3.5 border border-[#C5A059]/35 rounded-2xl pointer-events-none" />
          <div className="absolute inset-5 border border-[#C5A059]/15 rounded-xl pointer-events-none" />

          <div className="max-w-lg mx-auto space-y-6 relative z-10 flex flex-col items-center">
            
            {/* Üst Sıcak Hitap */}
            <p className="text-[#C5A059] tracking-[0.25em] uppercase text-xs font-semibold pt-2">
              Sizleri Aramızda Görmekten Mutluluk Duyarız
            </p>

            {/* İsimler */}
            <h1 className="text-3xl sm:text-5xl font-serif text-[#1A1A1A] tracking-wide leading-tight">
              {weddingData.bride} <span className="text-[#C5A059] font-light">&</span> {weddingData.groom}
            </h1>

            {/* Süsleme Ayracı */}
            <div className="flex items-center justify-center gap-3 w-full py-0.5">
              <div className="h-[1px] w-14 bg-[#C5A059]/30" />
              <span className="text-[#C5A059] text-xs">❖</span>
              <div className="h-[1px] w-14 bg-[#C5A059]/30" />
            </div>

            {/* Samimi Davet Metni */}
            <p className="text-[#555555] font-serif text-sm sm:text-base leading-relaxed max-w-md">
              Hayatımızı birleştireceğimiz bu özel günde siz değerli dostlarımızı yanımızda görmekten onur duyuyoruz.
            </p>

            {/* Tarih & Saat */}
            <div className="pt-2 pb-1 w-full">
              <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 bg-[#FDFBF7] px-7 py-3 rounded-2xl border border-[#EADBCE] text-[#2B2B2B] text-sm sm:text-base font-medium w-full sm:w-auto font-serif">
                <span>📅 {weddingData.displayDate}</span>
                <span className="hidden sm:inline text-[#C5A059]">|</span>
                <span>⏰ Saat: {weddingData.displayTime}</span>
              </div>
            </div>

            {/* Yenilenmiş Geri Sayım */}
            <div className="w-full flex flex-col items-center pt-3">
              <p className="text-[10px] text-[#888888] uppercase tracking-widest font-sans mb-3 font-medium">
                Düğünümüze Kalan Süre
              </p>
              <Countdown />
            </div>

          </div>
        </section>

        {/* KATILIM BİLDİRİMİ VE FOTOĞRAF YÜKLEME */}
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white p-7 sm:p-9 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-[#EADBCE] flex flex-col justify-between">
            <Rsvp />
          </div>

          <div className="bg-white p-7 sm:p-9 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-[#EADBCE] flex flex-col justify-between">
            <Upload />
          </div>
        </section>

        {/* HARİTA BÖLÜMÜ */}
        <section className="w-full bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-[#EADBCE] overflow-hidden">
          <Location />
        </section>

      </div>
    </main>
  );
}