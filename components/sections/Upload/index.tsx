'use client';

import React, { useState } from 'react';
import { weddingData } from '@/data/wedding';

export default function Upload() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [uploading, setUploading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const filesArray = Array.from(e.target.files);
    setSelectedFiles((prev) => [...prev, ...filesArray]);

    const newPreviews = filesArray.map((file) => URL.createObjectURL(file));
    setPreviews((prev) => [...prev, ...newPreviews]);
  };

  const handleRemoveImage = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) return;

    setUploading(true);
    setSuccess(false);

    try {
      const uploadPromises = selectedFiles.map(async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', weddingData.cloudinary?.uploadPreset || 'wedding_preset');

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${weddingData.cloudinary?.cloudName || 'demo'}/image/upload`,
          {
            method: 'POST',
            body: formData,
          }
        );

        if (!res.ok) throw new Error('Yükleme başarısız');
        return await res.json();
      });

      await Promise.all(uploadPromises);

      setSuccess(true);
      setSelectedFiles([]);
      setPreviews([]);
    } catch (error) {
      console.error('Yükleme hatası:', error);
      alert('Fotoğraflar yüklenirken bir sorun oluştu.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4 text-center">
      <h3 className="text-xl font-serif text-[#1a1a1a]">Fotoğraflarınızı Paylaşın</h3>
      <p className="text-xs text-[#666] leading-relaxed">
        Düğünümüzden veya nişanımızdan çektiğiniz güzel anları bizimle paylaşabilirsiniz.
      </p>

      {/* Fotoğraf Seç Butonu */}
      <div className="pt-2">
        <label className="cursor-pointer inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#b39023] text-white text-xs font-medium py-2.5 px-5 rounded-full shadow-sm transition active:scale-95">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Galerinizden Seçin</span>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>

      {/* Seçilen Fotoğrafların Önizlemesi */}
      {previews.length > 0 && (
        <div className="bg-[#faf8f5] p-3 rounded-xl border border-[#e5dfd3] mt-2">
          <div className="grid grid-cols-3 gap-2 max-h-36 overflow-y-auto">
            {previews.map((src, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden border border-[#e5dfd3]">
                <img src={src} alt="Önizleme" className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-1 right-1 bg-red-600/80 hover:bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] transition"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Gönder Butonu */}
      {selectedFiles.length > 0 && (
        <button
          onClick={handleUpload}
          disabled={uploading}
          className="w-full bg-[#1a1a1a] hover:bg-black text-white text-xs font-medium py-2.5 px-4 rounded-full transition disabled:opacity-50 shadow-sm active:scale-95"
        >
          {uploading ? 'Yükleniyor...' : `${selectedFiles.length} Fotoğrafı Yükle`}
        </button>
      )}

      {success && (
        <p className="text-xs text-emerald-600 font-medium">
          ✓ Fotoğraflarınız başarıyla yüklendi, teşekkür ederiz!
        </p>
      )}
    </div>
  );
}