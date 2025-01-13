import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Mariam Travel - Votre Agence de Voyage pour la Oumra",
  description: "Découvrez nos offres exclusives pour la Oumra Ramadan 2025. Voyagez vers le pardon, revenez avec la sérénité. Formation complète incluse pour maximiser votre expérience spirituelle.",
  openGraph: {
    title: "Mariam Travel - Votre Agence de Voyage pour la Oumra",
    description: "Découvrez nos offres exclusives pour la Oumra Ramadan 2025. Voyagez vers le pardon, revenez avec la sérénité.",
    images: [
      {
        url: "/og-image.png", // Assurez-vous d'ajouter cette image dans votre dossier public
        width: 1200,
        height: 630,
        alt: "Mariam Travel Oumra 2025",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#F8B710",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
