export interface EventDetails {
  title: string;
  displayDate: string;
  displayTime: string;
  time: string;
  venue: string;
  targetDate: string | null;
}

export interface LocationDetails {
  name: string;
  venue: string;
  address: string;
  mapsUrl: string;
  embedUrl: string;
}

export interface WeddingData {
  bride: string;
  groom: string;
  time: string;
  venue: string;
  displayDate: string;
  displayDay: string;
  displayTime: string;
  targetDate: string;
  wedding: EventDetails;
  kina: EventDetails;
  location: LocationDetails;
  cloudinary: {
    cloudName: string;
    uploadPreset: string;
  };
  driveUploadUrl: string;
}

export const weddingData: WeddingData = {
  // Kişisel Bilgiler
  bride: "Hatice Kübra Özcan",
  groom: "Samet Baki Tokur",

  // Genel Saat ve Mekan (Üst Seviye)
  time: "17.30",
  venue: "Şahinbey Kongre Ve Sanat Merkezi Şehreküstü Salonu",
  displayDate: "15 Kasım 2026",
  displayDay: "Pazar",
  displayTime: "17.30",
  targetDate: "2026-11-15T17:30:00+03:00",

  // Nikah Detayları
  wedding: {
    title: "Nikah",
    displayDate: "15 Kasım 2026",
    displayTime: "17.30",
    time: "17.30",
    venue: "Şahinbey Kongre Ve Sanat Merkezi Şehreküstü Salonu",
    targetDate: "2026-11-15T17:30:00+03:00",
  },

  // Kına Gecesi Bilgileri
  kina: {
    title: "Kına Gecesi",
    displayDate: "Tarih Yakında Açıklanacak",
    displayTime: "--.--",
    time: "--.--",
    venue: "Henüz Belli Değil",
    targetDate: null,
  },

  // Mekan Bilgileri
  location: {
    name: "Şahinbey Kongre Ve Sanat Merkezi",
    venue: "Şahinbey Kongre Ve Sanat Merkezi Şehreküstü Salonu",
    address: "Şehreküstü Salonu",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=%C5%9Eahinbey+Kongre+Ve+Sanat+Merkezi+%C5%9Eehrek%C3%BCst%C3%BC+Salonu",
    embedUrl:
      "https://www.google.com/maps?q=%C5%9Eahinbey%20Kongre%20Ve%20Sanat%20Merkezi%20%C5%9Eehrek%C3%BCst%C3%BC%20Salonu&output=embed",
  },

  // Cloudinary Ayarları
  cloudinary: {
    cloudName: "d2vfvibz",
    uploadPreset: "ml_default",
  },

  // Harici Link
  driveUploadUrl: "https://maps.app.goo.gl/TPS6Tes8caZHD6gP6",
};