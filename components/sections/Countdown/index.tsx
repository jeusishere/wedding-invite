'use client';

import React, { useState, useEffect } from 'react';
import { weddingData } from '@/data/wedding';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(weddingData.targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 text-center">
      {[
        { label: 'Gün', value: timeLeft.days },
        { label: 'Saat', value: timeLeft.hours },
        { label: 'Dakika', value: timeLeft.minutes },
        { label: 'Saniye', value: timeLeft.seconds },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="bg-white border border-[#e5dfd3] shadow-xs rounded-xl px-2.5 py-1.5 min-w-[50px]">
            <span className="text-sm sm:text-base font-bold text-[#1a1a1a] font-serif">
              {String(item.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-[10px] text-[#888] uppercase tracking-wider mt-1 font-medium">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}