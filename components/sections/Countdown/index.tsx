"use client";

import React, { useState, useEffect } from 'react';
import { weddingData } from '../../../data/wedding';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const calculateTimeLeft = (targetDateString: string | null): TimeLeft | null => {
    if (!targetDateString) return null;

    const difference = +new Date(targetDateString) - +new Date();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [weddingTime, setWeddingTime] = useState<TimeLeft | null>(
    calculateTimeLeft(weddingData.wedding.targetDate)
  );
  const [kinaTime, setKinaTime] = useState<TimeLeft | null>(
    calculateTimeLeft(weddingData.kina.targetDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setWeddingTime(calculateTimeLeft(weddingData.wedding.targetDate));
      setKinaTime(calculateTimeLeft(weddingData.kina.targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNum = (num: number) => String(num).padStart(2, '0');

  // Tekil Sayaç Kutuları Bileşeni
  const RenderTimerGrid = ({ time }: { time: TimeLeft }) => (
    <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full">
      {[
        { label: 'GÜN', val: formatNum(time.days) },
        { label: 'SAAT', val: formatNum(time.hours) },
        { label: 'DK', val: formatNum(time.minutes) },
        { label: 'SN', val: formatNum(time.seconds) },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-[#faf8f5] border border-[#d4af37]/30 rounded-lg p-2 sm:p-3 text-center shadow-xs"
        >
          <span className="font-serif text-xl sm:text-3xl font-bold text-[#1a1a1a] block">
            {item.val}
          </span>
          <span className="text-[9px] sm:text-[10px] font-semibold tracking-wider text-[#8c8275] uppercase mt-1 block">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-16 px-4 bg-[#f4efe6] text-[#2c2c2c] border-y border-[#e5dfd3] flex flex-col items-center">
      {/* Başlık */}
      <div className="text-center mb-10">
        <span className="text-[#D4AF37] font-serif text-sm tracking-widest uppercase">
          Heyecanlı Bekleyiş
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1a1a] mt-1">
          Geri Sayım
        </h2>
        <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-3" />
      </div>

      {/* İkili Kart Yapısı (Kına & Düğün) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl px-2">
        
        {/* KINA GECESİ KARTI */}
        <div className="bg-[#fffdfa] border border-[#d4af37]/30 rounded-2xl p-6 shadow-md flex flex-col justify-between items-center text-center relative overflow-hidden">
          <div className="space-y-1 mb-4">
            <span className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
              1. Etkinlik
            </span>
            <h3 className="font-serif text-2xl text-[#1a1a1a] font-medium">
              {weddingData.kina.title}
            </h3>
            <p className="text-xs text-[#666]">
              {weddingData.kina.displayDate}
            </p>
          </div>

          {kinaTime ? (
            <RenderTimerGrid time={kinaTime} />
          ) : (
            <div className="w-full py-6 px-4 bg-[#faf8f5] rounded-xl border border-dashed border-[#d4af37]/40 flex flex-col items-center justify-center space-y-2">
              <span className="text-2xl animate-pulse">⏳</span>
              <p className="font-serif italic text-sm text-[#766e65]">
                Tarih ve Detaylar Yakında Açıklanacak
              </p>
            </div>
          )}
        </div>

        {/* DÜĞÜN KARTI */}
        <div className="bg-[#fffdfa] border border-[#d4af37]/30 rounded-2xl p-6 shadow-md flex flex-col justify-between items-center text-center relative overflow-hidden">
          <div className="space-y-1 mb-4">
            <span className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
              2. Etkinlik
            </span>
            <h3 className="font-serif text-2xl text-[#1a1a1a] font-medium">
              {weddingData.wedding.title}
            </h3>
            <p className="text-xs text-[#666]">
              {weddingData.wedding.displayDate} — {weddingData.wedding.displayTime}
            </p>
          </div>

          {weddingTime ? (
            <RenderTimerGrid time={weddingTime} />
          ) : (
            <div className="w-full py-6 px-4 bg-[#faf8f5] rounded-xl border border-dashed border-[#d4af37]/40 flex flex-col items-center justify-center space-y-2">
              <p className="font-serif italic text-sm text-[#766e65]">
                Düğün Günü Geldi!
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}