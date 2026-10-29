# 💍 Wedding Invitation Website

Modern, mobil uyumlu ve interaktif düğün davetiyesi web uygulaması.

---

## ✨ Özellikler

- 💌 Açılış zarf animasyonu
- 📜 Dijital düğün davetiyesi
- ⏳ Canlı geri sayım
- 📍 Düğün konumu
- 👨‍👩‍👧 RSVP (Katılım Durumu)
- 📸 Misafir fotoğraf yükleme
- 🖼️ Fotoğraf galerisi
- 📱 Mobil uyumlu tasarım
- ☁️ Otomatik deployment desteği

---

## 🛠️ Kullanılan Teknolojiler

- Next.js
- React
- TypeScript
- Tailwind CSS
- Git
- GitHub
- Vercel

---

## 📁 Proje Yapısı

```text
app/
components/
│
├── layout/
├── sections/
├── ui/
└── WeddingPage.tsx

data/
hooks/
lib/
public/
styles/
types/
```

---

## 🚀 Kurulum

Projeyi klonlayın:

```bash
git clone <repository-url>
```

Proje klasörüne girin:

```bash
cd wedding-invite
```

Bağımlılıkları yükleyin:

```bash
npm install
```

Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

PowerShell kullanıyorsanız:

```bash
npm.cmd run dev
```

Tarayıcıdan açın:

```text
http://localhost:3000
```

---

## 📦 Yayınlama

```bash
git add .

git commit -m "Açıklayıcı commit mesajı"

git push
```

GitHub'a gönderilen değişiklikler, yapılandırılmışsa otomatik olarak yayınlanacaktır.

## RSVP yanıtlarını Google Sheets'e aktarma

1. Verilen tabloyu düzenleme yetkisi olan Google hesabıyla açın ve **Uzantılar > Apps Script** bölümüne gidin.
2. `scripts/rsvp-google-sheets.gs` içeriğini Apps Script editörüne yapıştırın.
3. Apps Script **Proje Ayarları > Komut dosyası özellikleri** bölümüne `RSVP_SHARED_SECRET` adında uzun, tahmin edilemez bir değer ekleyin.
4. **Dağıt > Yeni dağıtım > Web uygulaması** seçin. Uygulamayı kendi hesabınız olarak çalıştırın ve erişimi **Herkes** yapın. Oluşan `/exec` URL'sini kopyalayın.
5. Vercel proje ayarlarında aynı ortamlar için `GOOGLE_APPS_SCRIPT_URL` (kopyalanan `/exec` URL'si) ve `RSVP_SHARED_SECRET` (3. adımda belirlediğiniz aynı değer) değişkenlerini ekleyin ve yeniden dağıtım yapın.

Apps Script kodunu değiştirdikten sonra mevcut dağıtımda **Düzenle > Yeni sürüm > Dağıt** adımlarını uygulayın. `/exec` adresini tarayıcıda açınca `{"ok":true,"code":"ready"}` yanıtı görünmelidir; bu kontrol tabloya satır yazmaz.

Yerel deneme için bu iki değişkeni `.env.local` dosyasına ekleyin. Form yanıtları verilen tablonun `gid=0` sekmesine tarih, ad, soyad, katılım, kişi sayısı ve not sütunlarıyla eklenir. İlk satır boşsa sütun başlıkları otomatik oluşturulur.

---

## 📅 Roadmap

### Arayüz

- [x] Proje kurulumu
- [x] Next.js altyapısı
- [x] Responsive temel tasarım
- [ ] Premium zarf animasyonu
- [ ] Davetiye geçiş animasyonu

### İçerik

- [ ] Hikaye (Story)
- [ ] Geri sayım
- [ ] Konum bilgisi

### Katılım

- [ ] RSVP sistemi
- [ ] Davetli yönetimi

### Medya

- [ ] Fotoğraf yükleme
- [ ] Galeri
- [ ] QR Kod ile erişim

### Yönetim

- [ ] Yönetici paneli
- [ ] Fotoğraf onay sistemi
- [ ] Katılım istatistikleri

---

## 📄 Lisans

Bu proje kişisel kullanım amacıyla geliştirilmektedir.