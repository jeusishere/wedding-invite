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

  const items = [
    { label: 'GÜN', value: timeLeft.days },
    { label: 'SAAT', value: timeLeft.hours },
    { label: 'DAKİKA', value: timeLeft.minutes },
    { label: 'SANİYE', value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4">
      {items.map((item, index) => (
        <React.Fragment key={item.label}>
          <div className="flex flex-col items-center">
            <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-2xl bg-[#FDFBF7] border border-[#C5A059]/40 flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:border-[#C5A059] transition-all duration-300">
              <span className="text-lg sm:text-2xl font-serif font-semibold text-[#2C2C2C]">
                {String(item.value).padStart(2, '0')}
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] text-[#C5A059] font-medium tracking-widest mt-2">
              {item.label}
            </span>
          </div>

          {/* İki Nokta Üst Üste Ayraçlar */}
          {index < items.length - 1 && (
            <span className="text-[#C5A059]/60 font-serif text-sm sm:text-lg mb-5 select-none">
              :
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}