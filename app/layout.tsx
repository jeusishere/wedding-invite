import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const deploymentHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (deploymentHost ? `https://${deploymentHost}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hatice Kübra & Samet Baki",
  description: "Hatice Kübra Özcan ve Samet Baki Tokur nikah davetiyesi",
  openGraph: {
    title: "Hatice Kübra & Samet Baki",
    description: "Hatice Kübra Özcan ve Samet Baki Tokur nikah davetiyesi",
    url: siteUrl,
    siteName: "Hatice Kübra & Samet Baki",
    type: "website",
    images: [
      {
        url: "/whatsapp-preview.jpg",
        width: 1080,
        height: 1424,
        alt: "Hatice Kübra & Samet Baki",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hatice Kübra & Samet Baki",
    description: "Hatice Kübra Özcan ve Samet Baki Tokur nikah davetiyesi",
    images: ["/whatsapp-preview.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F8F0E7",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${cormorant.variable} antialiased`}>
      <body className="min-h-screen bg-ivory text-ink font-body">{children}</body>
    </html>
  );
}
