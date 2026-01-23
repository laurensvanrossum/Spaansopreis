import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/Footer";
import { getSiteUrlAsUrl } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: getSiteUrlAsUrl(),
  title: {
    default: "Spaans op reis",
    template: "%s | Spaans op reis",
  },
  description:
    "Leer Spaans op een leuke en interactieve manier met woorden, gesprekken en games. Ideaal voor reizigers die snel praktisch Spaans willen oefenen.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Spaans op reis",
    description:
      "Oefen Spaans met woorden, gesprekken en games. Praktisch Spaans voor op reis.",
    type: "website",
    url: "/",
    locale: "nl_NL",
    siteName: "Spaans op reis",
    images: [
      {
        url: "/logo.webp",
        alt: "Spaans op reis",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Spaans op reis",
    description:
      "Oefen Spaans met woorden, gesprekken en games. Praktisch Spaans voor op reis.",
    images: ["/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <GoogleAnalytics />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
