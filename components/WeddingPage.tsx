import React from 'react';
import { weddingData } from '@/data/wedding';
import Location from '@/components/sections/Location';
import RsvpForm from '@/components/sections/RSVP'; // Katılım bildirimi bileşenin
import PhotoUpload from '@/components/sections/Upload'; // Fotoğraf yükleme bileşenin
import Countdown from '@/components/sections/Countdown'; // Geri sayım bileşenin

export default function WeddingPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1a1a1a]">
      
      {/* 1. ÜST ALAN: İsimler, Tarih/Saat ve Altında Küçük Geri Sayım */}
      <section className="py-10 px-4 text-center border-b border-[#e5dfd3]">
        <div className="max-w-2xl mx-auto space-y-3">
          <p className="text-[#D4AF37] tracking-widest uppercase text-xs font-medium">Davetlisiniz</p>
          
          <h1 className="text-3xl sm:text-5xl font-serif text-[#1a1a1a]">
            {weddingData.bride} & {weddingData.groom}
          </h1>
          
          <p className="text-[#666666] font-serif text-sm sm:text-base">
            {weddingData.displayDate} — Saat: {weddingData.displayTime}
          </p>

          {/* Tarih ve Saatin Altında Küçük/Kibar Geri Sayım */}
          <div className="pt-4 max-w-sm mx-auto scale-90 sm:scale-95">
            <Countdown />
          </div>
        </div>
      </section>

      {/* 2. ORTA ALAN: Solda Katılım Bildirimi — Sağda Fotoğraf Gönderin */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
          {/* Sol Kart: Katılım Bildirimi (RSVP) */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5dfd3] h-full">
            <RsvpForm />
          </div>

          {/* Sağ Kart: Fotoğraflarınızı Gönderin */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5dfd3] h-full">
            <PhotoUpload />
          </div>

        </div>
      </section>

      {/* 3. EN ALT ALAN: Küçültülmüş Harita ve Mekan Bilgisi */}
      <Location />

    </main>
  );
}