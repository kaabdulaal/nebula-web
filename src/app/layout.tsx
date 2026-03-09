import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nebula-storage.vercel.app"),
  title: "Nebula | Zero-Knowledge Cloud Storage on Telegram",
  description: "Secure standalone vault leveraging Telegram's secure infrastructure. Private encrypted file storage with unlimited capacity and C++ performance.",
  keywords: ["zero-knowledge", "cloud storage", "Telegram file storage", "encrypted vault", "C++ backend", "privacy", "Nebula", "Telegram client", "secure messenger", "TDLib", "encrypted", "cross-platform", "Linux", "Android", "Windows", "SQLCipher", "AES-GCM", "Flutter", "open source"],
  authors: [{ name: "Nebula Project" }],
  openGraph: {
    title: "Nebula — Your Telegram. Under Your Complete Control.",
    description: "Ultra-secure, cross-platform Telegram client. Native C++ core, local-only encryption, background sync. Download for Linux, Android, or Windows.",
    url: "https://nebula-storage.vercel.app",
    siteName: "Nebula",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nebula — Ultra-Secure Telegram Client",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nebula | Ultra-Secure Telegram Client",
    description: "Cross-platform Telegram client with local-only encryption and native C++ performance.",
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
      <body className={inter.className}>
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
