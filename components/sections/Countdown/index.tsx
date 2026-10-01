"use client";

import { useEffect, useState } from "react";
import { weddingData } from "@/data/wedding";

function calc(target: number) {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(weddingData.targetDate).getTime();
    const tick = () => setTimeLeft(calc(target));
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const items = [
    { label: "Gün", value: timeLeft.days },
    { label: "Saat", value: timeLeft.hours },
    { label: "Dakika", value: timeLeft.minutes },
    { label: "Saniye", value: timeLeft.seconds },
  ];

  return (
    <div className="mx-auto mt-8 grid max-w-md grid-cols-4 divide-x divide-gold/40">
      {items.map((item) => (
        <div key={item.label} className="px-1 text-center">
          <div className="font-display text-4xl font-medium tabular-nums text-cream sm:text-6xl">
            {String(item.value).padStart(2, "0")}
          </div>
          <div className="mt-1 font-display text-base italic text-glow">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
