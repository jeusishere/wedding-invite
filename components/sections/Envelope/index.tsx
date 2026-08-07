"use client";

import React, { useState } from 'react';
import { weddingData } from '../../../data/wedding';

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [step, setStep] = useState<'closed' | 'opening' | 'card_revealed'>('closed');

  const handleSealClick = () => {
    if (step !== 'closed') return;

    // 1. Kapağı aç
    setStep('opening');

    // 2. Zarf kapandıktan/açıldıktan sonra davetiye kartını tam öne çıkar
    setTimeout(() => {
      setStep('card_revealed');
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#141414] bg-opacity-95 backdrop-blur-md px-4 overflow-hidden">
      <div className="relative w-full max-w-md flex flex-col items-center">
        
        {/* ZARF & DAVETİYE ALANI */}
        <div className="relative w-full aspect-[4/3] flex items-center justify-center perspective-1000">
          
          {/* İÇ DAVETİYE KARTI */}
          <div
            className={`w-full h-full bg-[#fffdfa] border border-[#d4af37]/40 rounded-lg p-6 shadow-2xl flex flex-col items-center justify-center text-center transition-all duration-1000 ease-in-out z-10 ${
              step === 'closed'
                ? 'opacity-0 scale-90 translate-y-4 pointer-events-none'
                : step === 'opening'
                ? 'opacity-50 scale-95 translate-y-0'
                : 'opacity-100 scale-105 -translate-y-2 shadow-2xl'
            }`}
          >
            <div className="w-12 h-[1px] bg-[#D4AF37] mb-3" />

            <h1 className="font-serif text-2xl sm:text-3xl text-[#1a1a1a] tracking-wide">
              {weddingData.bride}
            </h1>
            <span className="font-serif text-lg text-[#D4AF37] my-0.5">&amp;</span>
            <h1 className="font-serif text-2xl sm:text-3xl text-[#1a1a1a] tracking-wide mb-2">
              {weddingData.groom}
            </h1>

            <p className="text-xs text-[#766e65] tracking-widest uppercase mb-3 font-semibold">
              {weddingData.displayDate}
            </p>

            <p className="font-serif italic text-xs text-[#555] max-w-xs">
              "Hayatımızın en özel gününde..."
            </p>

            <div className="w-12 h-[1px] bg-[#D4AF37] mt-3" />
          </div>

          {/* Dış Zarf Gövdesi (Mühür Basılana Kadar Kartı Saklar) */}
          {step !== 'card_revealed' && (
            <div className="absolute inset-0 bg-[#f3efe6] border border-[#dcd5c5] rounded-lg shadow-2xl overflow-hidden pointer-events-none z-20">
              {/* Zarf Alt & Yan Katlamaları Görünümü */}
              <div 
                className="absolute inset-0 bg-[#ebe5d8]"
                style={{
                  clipPath: 'polygon(0 100%, 50% 45%, 100% 100%)'
                }}
              />
              <div 
                className="absolute inset-0 bg-[#e4dccf]"
                style={{
                  clipPath: 'polygon(0 0, 45% 50%, 0 100%)'
                }}
              />
              <div 
                className="absolute inset-0 bg-[#e4dccf]"
                style={{
                  clipPath: 'polygon(100% 0, 100% 100%, 55% 50%)'
                }}
              />

              {/* Zarf Üst Kapağı (Flap) */}
              <div
                className={`absolute top-0 left-0 w-full h-full bg-[#f8f5ee] border-b border-[#d4af37]/30 origin-top transition-transform duration-700 ease-in-out ${
                  step === 'opening' ? '[transform:rotateX(180deg)] z-0' : 'z-30'
                }`}
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 55%)',
                }}
              />
            </div>
          )}

          {/* ALTIN MÜHÜR (WAX SEAL) */}
          {step === 'closed' && (
            <button
              onClick={handleSealClick}
              className="absolute z-40 transform hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer focus:outline-none group flex flex-col items-center"
              title="Davetiyeyi Açmak İçin Tıklayın"
            >
              {/* Altın Sarısı / Doku Verilmiş Mühür */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F4D068] via-[#D4AF37] to-[#AA7C11] border-2 border-[#FFF8DC] shadow-[0_4px_15px_rgba(212,175,55,0.4)] flex items-center justify-center text-[#3a2e10] font-serif font-bold text-lg tracking-wider group-hover:brightness-110 transition-all">
                <span>H&amp;S</span>
              </div>
              <span className="mt-3 text-xs tracking-widest text-[#D4AF37] bg-black/60 px-3 py-1 rounded-full border border-[#D4AF37]/30 uppercase font-medium">
                Mühüre Tıkla
              </span>
            </button>
          )}

        </div>

        {/* Zarf Açıldıktan Sonra Beliren "Aşağı Kaydır / Sitéye Geç" Butonu */}
        {step === 'card_revealed' && (
          <div className="mt-8 flex flex-col items-center animate-fade-in">
            <button
              onClick={onOpen}
              className="flex flex-col items-center gap-2 text-[#D4AF37] hover:text-white transition-colors cursor-pointer group focus:outline-none"
            >
              <span className="text-xs font-semibold tracking-widest uppercase">
                Davetiyeye Giriş Yap
              </span>
              <svg
                className="w-6 h-6 animate-bounce stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}