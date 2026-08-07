"use client"
import React, { useState, useEffect } from 'react';
import { weddingData } from '../data/wedding';

// Import section components
import Envelope from './sections/Envelope';
import Hero from './sections/Hero';
import Info from './sections/Info';
import Countdown from './sections/Countdown';
import Location from './sections/Location';
import Upload from './sections/Upload';
import RSVP from './sections/RSVP';
import Footer from './sections/Footer';

export default function WeddingPage() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState<boolean>(false);
  const [bannerMessage, setBannerMessage] = useState<string | null>(null);

  useEffect(() => {
    const checkWeddingDate = () => {
      const now = new Date();
      const target = new Date(weddingData.targetDate);

      // Compare calendar days (Year, Month, Day)
      const isSameDay =
        now.getFullYear() === target.getFullYear() &&
        now.getMonth() === target.getMonth() &&
        now.getDate() === target.getDate();

      const isPast = now > target && !isSameDay;

      if (isSameDay) {
        setBannerMessage("💍 Bugün bizim en mutlu günümüz! Hoş geldiniz.");
      } else if (isPast) {
        setBannerMessage("❤️ Bu özel günümüzde yanımızda olduğunuz için teşekkür ederiz.");
      } else {
        setBannerMessage(null);
      }
    };

    checkWeddingDate();
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2c2c2c] font-sans relative overflow-x-hidden">
      {/* Dynamic Status Banner */}
      {bannerMessage && (
        <div className="bg-[#D4AF37] text-white text-center py-2.5 px-4 text-sm font-medium shadow-md sticky top-0 z-50 flex items-center justify-center gap-2 tracking-wide transition-all duration-300">
          <span>{bannerMessage}</span>
        </div>
      )}

      {/* Envelope Overlay / Landing Screen */}
      {!isEnvelopeOpen ? (
        <Envelope onOpen={() => setIsEnvelopeOpen(true)} />
      ) : (
        /* Main Content Flow */
        <div className="transition-opacity duration-1000 ease-in-out">
          <Hero />
          <Info />
          <Countdown />
          <Location />
          <Upload />
          <RSVP />
          <Footer />
        </div>
      )}
    </div>
  );
}