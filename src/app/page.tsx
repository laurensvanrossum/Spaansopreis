import Link from 'next/link';
import NavigationCard from '@/components/NavigationCard';

const navigationCards = [
  {
    id: 1,
    title: 'Woorden',
    category: 'Woordenschat',
    href: '/woorden',
    coverImage: '/homepage/woorden.jpg',
  },
  {
    id: 2,
    title: 'Gesprekken',
    category: 'Praktijk',
    href: '/gesprekken',
    coverImage: '/homepage/gesprekken.jpg',
  },
  {
    id: 3,
    title: 'Games',
    category: 'Oefenen',
    href: '/games',
    coverImage: '/homepage/games.jpg',
  },
  {
    id: 4,
    title: 'Spaans Leren',
    category: 'Artikelen',
    href: '/spaans-leren',
    coverImage: '/homepage/spaans-leren.JPG',
  },
];

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/30 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 to-orange-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/topography.svg')] opacity-10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Welkom bij Spaans op reis
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto mb-8">
              Leer Spaans op een leuke en interactieve manier met woorden, gesprekken en games
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Cards Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🎯 Begin je leerreis
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Kies waar je mee wilt starten en ontdek de kracht van spelenderwijs Spaans leren
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {navigationCards.map((card) => (
            <NavigationCard
              key={card.id}
              title={card.title}
              category={card.category}
              href={card.href}
              coverImage={card.coverImage}
            />
          ))}
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16 md:py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar om te beginnen?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Start vandaag nog en ontdek hoe leuk Spaans leren kan zijn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/woorden"
              className="px-8 py-4 bg-white text-orange-600 rounded-full font-bold hover:bg-orange-50 transition-colors shadow-xl text-lg"
            >
              Start met Woorden Leren
            </Link>
            <Link
              href="/games"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-full font-bold hover:bg-white/20 transition-colors text-lg"
            >
              Oefen met Games
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
