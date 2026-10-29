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
  metadataBase: new URL("https://example.com"),
  title: "Hatice Kübra & Samet Baki",
  description: "Hatice Kübra Özcan ve Samet Baki Tokur nikah davetiyesi",
  openGraph: {
    title: "Hatice Kübra & Samet Baki",
    description: "Hatice Kübra Özcan ve Samet Baki Tokur nikah davetiyesi",
    url: "https://example.com",
    siteName: "Hatice Kübra & Samet Baki",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Hatice Kübra & Samet Baki",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hatice Kübra & Samet Baki",
    description: "Hatice Kübra Özcan ve Samet Baki Tokur nikah davetiyesi",
    images: ["/og-image.svg"],
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
    <html
      lang="tr"
      className={`${cormorant.variable} ${pinyon.variable} ${jost.variable} antialiased`}
    >
      <body className="min-h-screen bg-ivory text-ink font-body">{children}</body>
    </html>
  );
}
