import React, { useState } from 'react';

export default function RSVP() {
  const [attending, setAttending] = useState<'yes' | 'no'>('yes');
  const [guestCount, setGuestCount] = useState<number>(2);
  const [guestName, setGuestName] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    // Form gönderme işlemleri (Örn: EmailJS, Formspree veya Kendi API'niz)
    // Şimdilik başarılı simülasyonu çalıştırıyoruz:
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 px-4 bg-[#faf8f5] text-[#2c2c2c] flex flex-col items-center justify-center">
      <div className="text-center mb-10">
        <span className="text-[#D4AF37] font-serif text-sm tracking-widest uppercase">
          Lütfen Cevap Veriniz
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1a1a] mt-1">
          Katılım Durumu (RSVP)
        </h2>
        <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-4" />
      </div>

      <div className="w-full max-w-lg bg-[#fffdfa] border border-[#d4af37]/30 rounded-2xl p-6 sm:p-10 shadow-xl backdrop-blur-sm">
        {isSubmitted ? (
          <div className="text-center py-8 space-y-4 animate-fade-in">
            <div className="w-16 h-16 bg-[#e6f4ea] text-[#2e7d32] border border-[#2e7d32]/30 rounded-full flex items-center justify-center mx-auto text-3xl">
              ✓
            </div>
            <h3 className="font-serif text-2xl text-[#1a1a1a]">
              Yanıtınız Alındı!
            </h3>
            <p className="text-sm text-[#666] leading-relaxed max-w-xs mx-auto">
              Yanıtınızı ilettiğiniz için teşekkür ederiz. Sizi aramızda görmek için sabırsızlanıyoruz!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Ad Soyad */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold tracking-widest text-[#8c8275] uppercase">
                Adınız ve Soyadınız
              </label>
              <input
                type="text"
                required
                placeholder="Örn: Ahmet Yılmaz"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#e5dfd3] bg-[#faf8f5] focus:outline-none focus:border-[#D4AF37] transition-colors text-sm"
              />
            </div>

            {/* Katılıyor musunuz? */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold tracking-widest text-[#8c8275] uppercase">
                Katılıyor musunuz?
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setAttending('yes')}
                  className={`py-3 px-4 rounded-xl border font-medium text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    attending === 'yes'
                      ? 'bg-[#D4AF37] text-white border-[#D4AF37] shadow-md'
                      : 'border-[#e5dfd3] bg-[#faf8f5] text-[#555] hover:border-[#D4AF37]/50'
                  }`}
                >
                  <span className="text-base">{attending === 'yes' ? '●' : '○'}</span> Evet
                </button>

                <button
                  type="button"
                  onClick={() => setAttending('no')}
                  className={`py-3 px-4 rounded-xl border font-medium text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    attending === 'no'
                      ? 'bg-[#D4AF37] text-white border-[#D4AF37] shadow-md'
                      : 'border-[#e5dfd3] bg-[#faf8f5] text-[#555] hover:border-[#D4AF37]/50'
                  }`}
                >
                  <span className="text-base">{attending === 'no' ? '●' : '○'}</span> Hayır
                </button>
              </div>
            </div>

            {/* Kaç kişi? (Sadece 'Evet' seçiliyse görünür) */}
            {attending === 'yes' && (
              <div className="space-y-2 animate-fade-in">
                <label className="block text-xs font-semibold tracking-widest text-[#8c8275] uppercase">
                  Kaç kişi katılıyorsunuz?
                </label>
                <div className="flex items-center justify-center gap-4 bg-[#faf8f5] border border-[#e5dfd3] rounded-xl p-2">
                  <button
                    type="button"
                    onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                    className="w-10 h-10 rounded-lg bg-white border border-[#e5dfd3] flex items-center justify-center text-xl font-bold text-[#555] hover:border-[#D4AF37] cursor-pointer active:scale-95 transition-all"
                  >
                    -
                  </button>
                  <span className="font-serif text-xl font-semibold w-12 text-center text-[#1a1a1a]">
                    {guestCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => setGuestCount(guestCount + 1)}
                    className="w-10 h-10 rounded-lg bg-white border border-[#e5dfd3] flex items-center justify-center text-xl font-bold text-[#555] hover:border-[#D4AF37] cursor-pointer active:scale-95 transition-all"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* Gönder Butonu */}
            <button
              type="submit"
              className="w-full bg-[#D4AF37] hover:bg-[#b39023] text-white py-3.5 px-6 rounded-xl font-medium text-base shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer mt-4"
            >
              Gönder
            </button>
          </form>
        )}
      </div>
    </section>
  );
}