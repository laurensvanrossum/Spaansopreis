import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/Footer";

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
  title: "Spaans op reis - Leer Spaans",
  description: "Leer Spaans op een leuke en interactieve manier met woorden, gesprekken en games",
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
