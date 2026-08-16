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
    
    try {
      // Katılım formu gönderme mantığınız
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-serif text-[#1a1a1a] text-center">Katılım Bildirimi</h3>
      <p className="text-xs text-[#666] text-center leading-relaxed">
        Lütfen katılım durumunuzu en geç düğün tarihinden önce bildiriniz.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Ad ve Soyad Ayrı Alanlar */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-[#4a4a4a] mb-1">Adınız</label>
            <input
              type="text"
              required
              placeholder="Adınız"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full px-3 py-2 text-xs border border-[#e5dfd3] rounded-lg focus:outline-none focus:border-[#D4AF37]"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-[#4a4a4a] mb-1">Soyadınız</label>
            <input
              type="text"
              required
              placeholder="Soyadınız"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full px-3 py-2 text-xs border border-[#e5dfd3] rounded-lg focus:outline-none focus:border-[#D4AF37]"
            />
          </div>
        </div>

        {/* Katılım Durumu */}
        <div>
          <label className="block text-xs font-medium text-[#4a4a4a] mb-1">Katılım Durumunuz</label>
          <select
            value={formData.attendance}
            onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
            className="w-full px-3 py-2 text-xs border border-[#e5dfd3] rounded-lg focus:outline-none focus:border-[#D4AF37] bg-white"
          >
            <option value="yes">Katılıyorum</option>
            <option value="no">Maalesef Katılamıyorum</option>
          </select>
        </div>

        {/* Kişi Sayısı */}
        {formData.attendance === 'yes' && (
          <div>
            <label className="block text-xs font-medium text-[#4a4a4a] mb-1">Kişi Sayısı</label>
            <select
              value={formData.guestCount}
              onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
              className="w-full px-3 py-2 text-xs border border-[#e5dfd3] rounded-lg focus:outline-none focus:border-[#D4AF37] bg-white"
            >
              <option value="1">1 Kişi</option>
              <option value="2">2 Kişi</option>
              <option value="3">3 Kişi</option>
              <option value="4">4+ Kişi</option>
            </select>
          </div>
        )}

        {/* Not / Mesaj */}
        <div>
          <label className="block text-xs font-medium text-[#4a4a4a] mb-1">Notunuz (Opsiyonel)</label>
          <textarea
            rows={2}
            placeholder="Mesajınız..."
            value={formData.note}
            onChange={(e) => setFormData({ ...formData, note: e.target.value })}
            className="w-full px-3 py-2 text-xs border border-[#e5dfd3] rounded-lg focus:outline-none focus:border-[#D4AF37]"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-[#D4AF37] hover:bg-[#b39023] text-white text-xs font-medium py-2.5 px-4 rounded-full transition shadow-sm active:scale-95 disabled:opacity-50"
        >
          {status === 'submitting' ? 'Gönderiliyor...' : 'Katılım Bilgisini Gönder'}
        </button>

        {status === 'success' && (
          <p className="text-xs text-center text-emerald-600 font-medium">
            ✓ Katılım bildiriminiz alındı, teşekkür ederiz!
          </p>
        )}
      </form>
    </div>
  );
}