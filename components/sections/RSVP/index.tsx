'use client';

import React, { useState } from 'react';

export default function Rsvp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    guestCount: '1',
    attendance: 'yes',
    note: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 800);
  };

  return (
    <div className="space-y-5">
      <div className="text-center space-y-1">
        <h3 className="text-2xl font-serif text-[#1A1A1A]">Katılım Bildirimi</h3>
        <p className="text-xs text-[#777777] leading-relaxed">
          Lütfen katılım durumunuzu en geç düğün tarihinden önce bildiriniz.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Ad & Soyad */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#555] mb-1">Adınız</label>
            <input
              type="text"
              required
              placeholder="Adınız"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] border border-[#E8E2D5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] transition-all"
            />
          </div>
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#555] mb-1">Soyadınız</label>
            <input
              type="text"
              required
              placeholder="Soyadınız"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] border border-[#E8E2D5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] transition-all"
            />
          </div>
        </div>

        {/* Katılım Seçimi (Modern Buton Grubu) */}
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#555] mb-1.5">Katılım Durumunuz</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, attendance: 'yes' })}
              className={`py-2.5 px-3 text-xs font-medium rounded-xl border transition-all ${
                formData.attendance === 'yes'
                  ? 'bg-[#D4AF37] text-white border-[#D4AF37] shadow-xs'
                  : 'bg-[#FAF7F2] text-[#666] border-[#E8E2D5] hover:border-[#D4AF37]/50'
              }`}
            >
              ✓ Katılıyorum
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, attendance: 'no' })}
              className={`py-2.5 px-3 text-xs font-medium rounded-xl border transition-all ${
                formData.attendance === 'no'
                  ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-xs'
                  : 'bg-[#FAF7F2] text-[#666] border-[#E8E2D5] hover:border-[#1A1A1A]/30'
              }`}
            >
              ✕ Katılamıyorum
            </button>
          </div>
        </div>

        {/* Kişi Sayısı */}
        {formData.attendance === 'yes' && (
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#555] mb-1">Kişi Sayısı</label>
            <div className="flex gap-2">
              {['1', '2', '3', '4+'].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setFormData({ ...formData, guestCount: num })}
                  className={`flex-1 py-2 text-xs font-medium rounded-xl border transition-all ${
                    formData.guestCount === num
                      ? 'bg-[#2C2C2C] text-white border-[#2C2C2C]'
                      : 'bg-[#FAF7F2] text-[#666] border-[#E8E2D5]'
                  }`}
                >
                  {num} {num !== '4+' && 'Kişi'}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Not */}
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#555] mb-1">Notunuz (Opsiyonel)</label>
          <textarea
            rows={2}
            placeholder="Gelin ve damada iletmek istediğiniz mesaj..."
            value={formData.note}
            onChange={(e) => setFormData({ ...formData, note: e.target.value })}
            className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] border border-[#E8E2D5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] transition-all"
          />
        </div>

        {/* Gönder Butonu */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-[#D4AF37] hover:bg-[#b8952b] text-white text-xs font-semibold py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.99] disabled:opacity-50"
        >
          {status === 'submitting' ? 'Gönderiliyor...' : 'Katılım Bilgisini Gönder'}
        </button>

        {status === 'success' && (
          <p className="text-xs text-center text-emerald-600 font-medium pt-1">
            ✓ Yanıtınız başarıyla kaydedildi, teşekkür ederiz!
          </p>
        )}
      </form>
    </div>
  );
}