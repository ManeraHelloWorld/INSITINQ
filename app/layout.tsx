import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

const pixellari = localFont({
  src: "./fonts/Pixellari.ttf",
  variable: "--font-pixel",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Insaitiq SYSTEM",
    template: "%s · Insaitiq SYSTEM",
  },
  description:
    "Разработка IT решений и AI-систем. Помогаем компаниям снижать издержки, ускорять процессы и управлять бизнесом через данные, автоматизацию и AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${pixellari.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Providers>
          <Header />
          <main id="main" className="min-h-[50vh]">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
