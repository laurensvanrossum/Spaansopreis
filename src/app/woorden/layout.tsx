import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spaanse woorden (woordenschat) voor op reis',
  description:
    'Leer de meest bruikbare Spaanse reiswoorden per categorie, met voorbeelden. Ideaal voor beginners (A1/A2) die snel praktische woordenschat willen opbouwen.',
  alternates: {
    canonical: '/woorden',
  },
};

export default function WoordenLayout({ children }: { children: React.ReactNode }) {
  return children;
}


