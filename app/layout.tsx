import type { Metadata } from "next";
import { Lora, Inter, Manrope } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});


export const metadata: Metadata = {
  // ─── Básico ───────────────────────────────────────────────
  title: "Alma — Diario personal con IA local y privacidad absoluta",
  description: "El diario personal que combina Inteligencia Artificial local, análisis de trayectoria emocional y privacidad absoluta bajo llave.",
  keywords: ["diario personal", "bienestar mental", "privacidad", "IA local", "journaling", "salud mental"],
  authors: [{ name: "Arnaldo Ramos" }],
  creator: "Arnaldo Ramos",
  publisher: "Alma Diary",

  // ─── Open Graph (preview en WhatsApp, Facebook, LinkedIn) ─
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://tudominio.com",
    siteName: "Alma",
    title: "Alma — Un lugar seguro para tus pensamientos",
    description: "El diario personal que combina IA local, trayectoria emocional y privacidad absoluta.",
    images: [
      {
        url: "/og-image.png",   // 1200×630px
        width: 1200,
        height: 630,
        alt: "Alma — Diario personal con IA",
      },
    ],
  },

  // ─── Twitter/X ────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Alma — Un lugar seguro para tus pensamientos",
    description: "El diario personal que combina IA local, trayectoria emocional y privacidad absoluta.",
    images: ["/og-image.png"],
    // creator: "@usuario"
  },

  // ─── Íconos ───────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-icon.png",   // 180×180px
    shortcut: "/favicon.ico",
  },

  // ─── PWA / móvil ──────────────────────────────────────────
  manifest: "/manifest.json",   // opcional, si quieres PWA
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Alma",
  },

  // ─── SEO ──────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://tudominio.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${lora.variable} ${inter.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}