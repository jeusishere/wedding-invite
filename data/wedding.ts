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
  time: "18.00",
  venue: "Akkent Kültür ve Kongre Merkezi",
  displayDate: "15 Kasım 2026",
  displayTime: "18.00",
  targetDate: "2026-11-15T18:00:00+03:00",

  // Düğün Detayları
  wedding: {
    title: "Düğün",
    displayDate: "15 Kasım 2026",
    displayTime: "18.00",
    time: "18.00",
    venue: "Akkent Kültür ve Kongre Merkezi",
    targetDate: "2026-11-15T18:00:00+03:00",
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
    name: "Akkent Kültür ve Kongre Merkezi",
    venue: "Akkent Kültür ve Kongre Merkezi",
    address: "Karataş, Park İçi Yolu, 27470 Şahinbey / Gaziantep",
    mapsUrl: "https://maps.app.goo.gl/TPS6Tes8caZHD6gP6",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3824.6203887064494!2d37.3580306!3d37.0145452!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e1b4d83c90d9%3A0x2cff6a079b4a35b4!2sAkkent%20K%C3%BClt%C3%BCr%20ve%20Kongre%20Merkezi!5e1!3m2!1str!2str!4v1786434347840!5m2!1str!2str",
  },

  // Cloudinary Ayarları
  cloudinary: {
    cloudName: "d2vfvibz",
    uploadPreset: "ml_default",
  },

  // Harici Link
  driveUploadUrl: "https://maps.app.goo.gl/TPS6Tes8caZHD6gP6",
};