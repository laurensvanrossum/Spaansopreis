import { Metadata } from 'next';
import Link from 'next/link';
import BlogGridLarge from '@/components/BlogGridLarge';
import { filterPublishedPosts } from '@/lib/dateUtils';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Spaans Leren - Tips, Tricks en Lesmethoden | Spaans op reis',
  description: 'Ontdek de beste manieren om Spaans te leren voor je reis. Van praktische tips tot effectieve lesmethoden - alles wat je nodig hebt om Spaans onder de knie te krijgen.',
  keywords: 'Spaans leren, Spaanse taal, taallessen, reistips, taalonderwijs, Spaans voor beginners',
  alternates: {
    canonical: '/spaans-leren',
  },
  openGraph: {
    title: 'Spaans Leren - Spaans op reis',
    description: 'De beste tips en methoden om Spaans te leren',
    type: 'website',
    url: '/spaans-leren',
    images: [
      {
        url: '/blog/spaans-leren.webp',
        alt: 'Spaans leren - Spaans op reis',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Spaans Leren - Spaans op reis',
    description: 'De beste tips en methoden om Spaans te leren',
    images: ['/blog/spaans-leren.webp'],
  },
};

// Blog posts data - focused on Spanish learning (all posts including future ones)
const allSpaansLerenPosts = [
  {
    id: 1,
    title: 'Waarom Spaans leren zoveel leuker én handiger is dan je denkt',
    category: 'Spaans leren',
    slug: 'waarom-spaans-leren-leuker-en-handiger-is',
    coverImage: '/blog/spaans-leren.webp',
    date: '2025-11-28',
  },
  {
    id: 2,
    title: 'Een goed voornemen dat je reis écht beter maakt: Spaans leren voor op reis',
    category: 'Algemeen',
    slug: 'goed-voornemen-spaans-leren-voor-op-reis',
    coverImage: '/blog/new-year-resolutions.webp',
    date: '2026-01-01',
  },
  {
    id: 3,
    title: 'Spaans leren met spelletjes',
    category: 'Spelletjes',
    slug: 'spaans-leren-met-spelletjes',
    coverImage: '/blog/learning-games.webp',
    date: '2026-01-03',
  },
  {
    id: 4,
    title: 'Waarom fout Spaans beter is dan geen Spaans',
    category: 'Spaans leren',
    slug: 'waarom-fout-spaans-beter-is-dan-geen-spaans',
    coverImage: '/blog/mistakes-are-okay.webp',
    date: '2026-01-06',
  },
  {
    id: 5,
    title: 'Hoeveel tijd moet je besteden om Spaans te leren?',
    category: 'Spaans leren',
    slug: 'hoeveel-tijd-spaans-leren',
    coverImage: '/blog/time-to-learn.webp',
    date: '2026-01-09',
  },
  {
    id: 6,
    title: '5 Spaanse woorden die elke reiziger moet kennen',
    category: 'Spaans leren',
    slug: '5-spaanse-woorden-die-elke-reiziger-moet-kennen',
    coverImage: '/blog/essential-words.webp',
    date: '2026-01-10',
  },
{
  id: 7,
  title: 'Spaans leren in Guatemala: betaalbaar en intensief voor reizigers',
  category: 'Spaans leren',
  slug: 'spaans-leren-in-guatemala',
  coverImage: '/blog/spaans-leren-guatemala.webp',
  date: '2026-01-07',
},
{
  id: 8,
  title: 'Spaans leren in Bolivia: rustig tempo en maximale focus',
  category: 'Spaans leren',
  slug: 'spaans-leren-in-bolivia',
  coverImage: '/blog/spaans-leren-bolivia.webp',
  date: '2026-01-13',
},
{
  id: 9,
  title: 'Spaans leren in Colombia: sociaal leren met een duidelijk accent',
  category: 'Spaans leren',
  slug: 'spaans-leren-in-colombia',
  coverImage: '/blog/spaans-leren-colombia.webp',
  date: '2026-01-13',
},{
  id: 10,
  title: 'Spaans leren in Nicaragua: ontspannen leren tijdens je reis',
  category: 'Spaans leren',
  slug: 'spaans-leren-in-nicaragua',
  coverImage: '/blog/spaans-leren-nicaragua.webp',
  date: '2026-01-14',
},{
  id: 11,
  title: 'Spaans leren in Midden- en Zuid-Amerika: hoe het werkt, kosten en tips',
  category: 'Spaans leren',
  slug: 'spaans-leren-midden-en-zuid-amerika',
  coverImage: '/blog/spaans-leren-midden-en-zuid-amerika.webp',
  date: '2026-01-16',
},
];

export default function SpaansLerenPage() {
  // Filter to only show published posts (Amsterdam timezone)
  const spaansLerenPosts = filterPublishedPosts(allSpaansLerenPosts);
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0EBE0] to-white">
      {/* Hero Section */}
      <div className="relative bg-[#F0EBE0] text-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/topography.svg')] opacity-10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Spaans Leren
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
              Ontdek de beste tips, tricks en methoden om Spaans te leren voor je volgende reis
            </p>
            
            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/woorden"
                className="px-6 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-colors shadow-lg"
              >
                📚 Woordenlijst
              </Link>
              <Link
                href="/gesprekken"
                className="px-6 py-3 bg-white text-gray-900 border-2 border-gray-900 rounded-full font-semibold hover:bg-gray-50 transition-colors"
              >
                💬 Gesprekken
              </Link>
              <Link
                href="/games"
                className="px-6 py-3 bg-white text-gray-900 border-2 border-gray-900 rounded-full font-semibold hover:bg-gray-50 transition-colors"
              >
                🎮 Games
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ontdek onze artikelen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Van praktische tips tot motiverende verhalen - alles wat je nodig hebt om Spaans te leren voor je reis
          </p>
        </div>

        {/* Blog Grid */}
        <BlogGridLarge posts={spaansLerenPosts} />
      </main>

      {/* CTA Section */}
      <section className="bg-[#F0EBE0] text-gray-900 py-16 md:py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar om te beginnen met Spaans leren?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Start vandaag nog met onze interactieve lessen en games
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/woorden"
              className="px-8 py-4 bg-orange-600 text-white rounded-full font-bold hover:bg-orange-700 transition-colors shadow-xl text-lg"
            >
              Start met Woorden Leren
            </Link>
            <Link
              href="/games"
              className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-900 rounded-full font-bold hover:bg-gray-50 transition-colors text-lg"
            >
              Oefen met Games
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Jouw leerpad
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Begin met de basis</h3>
            <p className="text-gray-600 mb-4">
              Leer de meest gebruikte woorden en zinnen voor je reis
            </p>
            <Link
              href="/woorden"
              className="text-orange-600 font-semibold hover:text-orange-700 inline-flex items-center gap-2 group"
            >
              <span>Naar woordenlijst</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Oefen gesprekken</h3>
            <p className="text-gray-600 mb-4">
              Raak vertrouwd met praktische dialogen en situaties
            </p>
            <Link
              href="/gesprekken"
              className="text-orange-600 font-semibold hover:text-orange-700 inline-flex items-center gap-2 group"
            >
              <span>Naar gesprekken</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">🎮</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Test je kennis</h3>
            <p className="text-gray-600 mb-4">
              Maak het leren leuk met interactieve games en quizzen
            </p>
            <Link
              href="/games"
              className="text-orange-600 font-semibold hover:text-orange-700 inline-flex items-center gap-2 group"
            >
              <span>Naar games</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

