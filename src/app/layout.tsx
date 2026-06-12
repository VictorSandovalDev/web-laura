import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Psiforensic | Evaluacion Psicologica Forense — Peritajes y Asesorias",
  description:
    "Psiforensic: evaluacion psicologica forense con rigor cientifico. Peritajes, contraperitajes, metapericias y asesoria tecnico-cientifica en Barranquilla, Bogota y a nivel nacional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  );
}
