import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hatice Kübra & Samet Baki",
  description:
    "Hatice Kübra Özcan ve Samet Baki Tokur düğün davetiyesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#FAF7F2] text-[#2D2A26]">
        {children}
      </body>
    </html>
  );
}