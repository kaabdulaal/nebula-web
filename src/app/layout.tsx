import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nebula-storage.vercel.app"),
  title: "Nebula | Zero-Knowledge Cloud Storage on Telegram",
  description: "Secure standalone vault leveraging Telegram's secure infrastructure. Private encrypted file storage with unlimited capacity and C++ performance.",
  keywords: ["zero-knowledge", "cloud storage", "Telegram file storage", "encrypted vault", "C++ backend", "privacy", "Nebula"],
  authors: [{ name: "Nebula Project" }],
  openGraph: {
    title: "Nebula - Encrypted Telegram Cloud Storage",
    description: "Transform your Telegram into a private, zero-knowledge vault. Military-grade encryption, infinite storage.",
    url: "https://nebula-storage.vercel.app", 
    siteName: "Nebula",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nebula Cloud Storage Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nebula | Zero-Knowledge Telegram Storage",
    description: "Secure standalone vault leveraging Telegram's secure infrastructure.",
  },
  verification: {
    google: '_V0xiY7q215VJ-aNt3u35Qlojc5DmeiWCImFHXxno8Y',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
