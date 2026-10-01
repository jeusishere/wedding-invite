import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Pinyon_Script, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Hatice Kübra & Samet Baki",
  description: "Hatice Kübra Özcan ve Samet Baki Tokur düğün davetiyesi",
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
    <html
      lang="tr"
      className={`${cormorant.variable} ${pinyon.variable} ${jost.variable} antialiased`}
    >
      <body className="min-h-screen bg-ivory text-ink font-body">{children}</body>
    </html>
  );
}
