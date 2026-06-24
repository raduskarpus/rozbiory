import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";

// Lora - elegancki font z seryfami, dobry do tytułów historycznych
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin-ext"], // latin-ext żeby miał polskie znaki
});

// Inter - nowoczesny font do tekstu głównego
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin-ext"],
});

// Metadata - informacje o stronie (widoczne w karcie przeglądarki i Google)
export const metadata: Metadata = {
  title: "Rozbiory Polski",
  description: "Blog historyczny o trzech rozbiorach Polski (1772, 1793, 1795)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${lora.variable} ${inter.variable}`}>
      {/* children = zawartość konkretnej podstrony, np. page.tsx */}
      <body className="min-h-screen bg-stone-50 text-stone-900">
        {children}
      </body>
    </html>
  );
}
