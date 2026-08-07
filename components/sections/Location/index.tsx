import React, { useState, useEffect } from 'react';
import { weddingData } from '../../../data/wedding';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(weddingData.targetDate) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  const timerItems = [
    { label: 'GÜN', value: formatNumber(timeLeft.days) },
    { label: 'SAAT', value: formatNumber(timeLeft.hours) },
    { label: 'DAKİKA', value: formatNumber(timeLeft.minutes) },
    { label: 'SANİYE', value: formatNumber(timeLeft.seconds) },
  ];

  return (
    <section className="py-16 px-4 bg-[#f4efe6] text-[#2c2c2c] border-y border-[#e5dfd3] flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <span className="text-[#D4AF37] font-serif text-sm tracking-widest uppercase">
          Büyük Güne Kalan Zaman
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1a1a] mt-1">
          Geri Sayım
        </h2>
        <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-3" />
      </div>

      {/* Sayaç Kartları Grid Yapısı */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-2xl px-2">
        {timerItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#fffdfa] border border-[#d4af37]/30 rounded-xl p-4 sm:p-6 text-center shadow-md flex flex-col items-center justify-center transform hover:-translate-y-1 transition-transform duration-300"
          >
            <span className="font-serif text-3xl sm:text-5xl font-bold text-[#1a1a1a] tracking-tight">
              {item.value}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#8c8275] uppercase mt-2">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}