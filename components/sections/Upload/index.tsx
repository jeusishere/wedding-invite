'use client';

import React, { useState } from 'react';

// ⚠️ BURAYA KENDİ CLOUDINARY BİLGİLERİNİ YAZ
const CLOUD_NAME = 'd2vfvibz'; 
const UPLOAD_PRESET = 'wedding_preset';

export default function Upload() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);

  // Fotoğraflar seçildiğinde çalışır
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const filesArray = Array.from(e.target.files);
    setSelectedFiles((prev) => [...prev, ...filesArray]);

    const newPreviews = filesArray.map((file) => URL.createObjectURL(file));
    setPreviews((prev) => [...prev, ...newPreviews]);
  };

  // Seçimden fotoğraf çıkarma
  const handleRemoveImage = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  // Cloudinary'ye Yükleme İşlemi
  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      alert('Lütfen en az bir fotoğraf seçin!');
      return;
    }

    setUploading(true);

    try {
      // Seçilen tüm dosyaları aynı anda Cloudinary'ye gönderiyoruz
      const uploadPromises = selectedFiles.map(async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', UPLOAD_PRESET);

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          {
            method: 'POST',
            body: formData,
          }
        );

        if (!res.ok) {
          throw new Error('Yükleme başarısız oldu');
        }

        const data = await res.json();
        // Cloudinary'nin döndürdüğü güvenli resim URL'si
        return data.secure_url as string; 
      });

      // Tüm yüklemelerin bitmesini bekle
      const urls = await Promise.all(uploadPromises);

      console.log('Cloudinary Yüklenen Resim Linkleri:', urls);
      setUploadedUrls((prev) => [...prev, ...urls]);

      alert(`${urls.length} fotoğraf başarıyla yüklendi!`);

      // Seçimleri temizle
      setSelectedFiles([]);
      setPreviews([]);
    } catch (error) {
      console.error('Yükleme Hatası:', error);
      alert('Fotoğraflar yüklenirken bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <section className="py-12 px-4 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-serif font-bold mb-3">Fotoğraflarınızı Paylaşın</h2>
      <p className="text-gray-600 mb-6 text-sm sm:text-base">
        Düğünümüzden çektiğiniz güzel kareleri birden fazla seçerek bize gönderebilirsiniz.
      </p>

      {/* Fotoğraf Seçme Butonu */}
      <div className="mb-6">
        <label className="cursor-pointer inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-medium py-3 px-6 rounded-full shadow-md transition transform active:scale-95">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Fotoğraf Seç</span>
          <input
            type="file"
            accept="image/*"
            multiple // 👈 Birden fazla fotoğraf seçimi
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>

      {/* Seçilen Fotoğrafların Önizlemesi */}
      {previews.length > 0 && (
        <div className="mb-6 bg-gray-50 p-4 rounded-xl border border-gray-200">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Seçilen Fotoğraflar ({previews.length})
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-h-64 overflow-y-auto p-1">
            {previews.map((src, index) => (
              <div key={index} className="relative group rounded-lg overflow-hidden aspect-square border shadow-sm">
                <img
                  src={src}
                  alt={`Önizleme ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs shadow-md hover:bg-red-700 transition"
                  title="Fotoğrafı Kaldır"
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
          className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {uploading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
              Fotoğraflar Yükleniyor...
            </span>
          ) : (
            `${selectedFiles.length} Fotoğrafı Yükle ve Gönder`
          )}
        </button>
      )}

      {/* Yüklenen Fotoğraflar (İsteğe Bağlı Alt Kısımda Gösterme) */}
      {uploadedUrls.length > 0 && (
        <div className="mt-8 pt-6 border-t text-left">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Başarıyla Yüklenenler:</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {uploadedUrls.map((url, i) => (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="block aspect-square rounded-lg overflow-hidden border hover:opacity-80 transition">
                <img src={url} alt="Yüklenen" className="w-full h-full object-cover" />
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}