import type { Metadata } from "next";
import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Douglas Maia | Desenvolvedor Full Stack",
  description:
    "Desenvolvedor Full Stack especializado em criar soluções modernas, performáticas e escaláveis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${geist.variable} ${geistMono.variable} --font-geist`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
