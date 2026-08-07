"use client";

import React, { useState, useRef } from 'react';

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Galeriden dosya seçildiğinde çalışır
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setIsSuccess(false);
    }
  };

  // Yükleme butonu
  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      // Oluşturacağımız API servisine fotoğrafı gönderiyoruz
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
        setSelectedFile(null);
        setPreviewUrl(null);
      } else {
        alert('Fotoğraf yüklenirken bir sorun oluştu. Lütfen tekrar deneyin.');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Fotoğraf yüklenemedi.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-[#f4efe6] text-[#2c2c2c] border-t border-[#e5dfd3] flex flex-col items-center justify-center text-center">
      <div className="max-w-md w-full bg-[#fffdfa] border border-[#d4af37]/30 rounded-2xl p-6 sm:p-10 shadow-xl space-y-6">
        
        {/* İkon & Başlık */}
        <div className="space-y-2">
          <div className="w-16 h-16 bg-[#faf8f5] border border-[#d4af37]/40 rounded-full flex items-center justify-center mx-auto text-3xl shadow-xs">
            🖼️
          </div>
          <span className="text-[#D4AF37] font-serif text-xs tracking-widest uppercase block">
            Anıları Paylaşın
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1a1a1a]">
            Fotoğraf Gönder
          </h2>
          <p className="text-xs sm:text-sm text-[#666] leading-relaxed pt-1">
            Düğün günü galerinizde biriken güzel kareleri seçerek bizimle paylaşabilirsiniz.
          </p>
        </div>

        <div className="w-12 h-[1px] bg-[#D4AF37]/50 mx-auto" />

        {/* Dosya Girişi (Telefonda Doğrudan Galeriyi / Albümleri Açar) */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />

        {/* Yükleme Durumları */}
        {isSuccess ? (
          <div className="bg-[#e6f4ea] border border-[#2e7d32]/30 rounded-xl p-4 text-[#2e7d32] space-y-2 animate-fade-in">
            <span className="text-2xl block">🎉</span>
            <p className="font-medium text-sm">Fotoğrafınız Başarıyla İletildi!</p>
            <p className="text-xs opacity-80">Bizimle bu anı paylaştığınız için teşekkür ederiz.</p>
            <button
              onClick={() => setIsSuccess(false)}
              className="mt-2 text-xs underline font-semibold cursor-pointer text-[#2e7d32]"
            >
              Galeriden başka bir fotoğraf daha seç
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Seçilen Fotoğrafın Önizlemesi */}
            {previewUrl ? (
              <div className="space-y-4">
                <div className="relative w-full aspect-square max-w-[200px] mx-auto rounded-xl overflow-hidden border-2 border-[#D4AF37] shadow-md">
                  <img src={previewUrl} alt="Seçilen Fotoğraf" className="w-full h-full object-cover" />
                </div>
                
                <div className="flex gap-2 justify-center">
                  <button
                    onClick={handleUpload}
                    disabled={isUploading}
                    className="bg-[#D4AF37] hover:bg-[#b39023] text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-md transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
                  >
                    {isUploading ? 'Gönderiliyor...' : 'Fotoğrafı Gönder ✨'}
                  </button>
                  <button
                    onClick={() => { setSelectedFile(null); setPreviewUrl(null); }}
                    disabled={isUploading}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer"
                  >
                    İptal
                  </button>
                </div>
              </div>
            ) : (
              /* Galeriden Seç Butonu */
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full bg-[#D4AF37] hover:bg-[#b39023] text-white font-medium py-3.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 text-sm sm:text-base cursor-pointer flex items-center justify-center gap-2"
              >
                <span>🖼️ Galeriden Fotoğraf Seç</span>
              </button>
            )}
          </div>
        )}

      </div>
    </section>
  );
}