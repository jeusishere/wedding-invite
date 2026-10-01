"use client";

import React, { useState } from "react";
import { weddingData } from "@/data/wedding";

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
        formData.append("file", file);
        formData.append(
          "upload_preset",
          weddingData.cloudinary?.uploadPreset || "wedding_preset"
        );

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${weddingData.cloudinary?.cloudName || "demo"}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (!res.ok) throw new Error("Yükleme başarısız");
        return await res.json();
      });

      await Promise.all(uploadPromises);

      setSuccess(true);
      setSelectedFiles([]);
      setPreviews([]);
    } catch (error) {
      console.error("Yükleme hatası:", error);
      alert("Fotoğraflar yüklenirken bir sorun oluştu.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="text-center">
      <h2 className="font-script text-5xl text-wine">Anılarınızı paylaşın</h2>
      <p className="mx-auto mt-2 max-w-sm font-display text-lg italic text-soft">
        Düğünümüzden veya nişanımızdan çektiğiniz güzel anları bizimle
        paylaşabilirsiniz.
      </p>

      <label className="mt-6 inline-flex cursor-pointer items-center gap-2 border border-wine px-6 py-3 text-sm tracking-wide text-wine transition active:scale-95 hover:bg-wine hover:text-cream">
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span>Galerinizden seçin</span>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {previews.length > 0 && (
        <div className="mx-auto mt-6 grid max-w-sm grid-cols-3 gap-2">
          {previews.map((src, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden border border-gold/40"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="Önizleme" className="h-full w-full object-cover" />
              <button
                type="button"
                onClick={() => handleRemoveImage(index)}
                aria-label="Fotoğrafı kaldır"
                className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-wine/85 text-xs text-cream"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedFiles.length > 0 && (
        <button
          onClick={handleUpload}
          disabled={uploading}
          className="mt-5 w-full max-w-sm bg-wine px-4 py-4 text-sm tracking-wide text-cream shadow-md transition active:scale-[0.99] disabled:opacity-60"
        >
          {uploading ? "Yükleniyor..." : `${selectedFiles.length} fotoğrafı yükle`}
        </button>
      )}

      {success && (
        <p className="mt-5 font-display text-xl italic text-wine">
          Fotoğraflarınız yüklendi, teşekkür ederiz.
        </p>
      )}
    </div>
  );
}
