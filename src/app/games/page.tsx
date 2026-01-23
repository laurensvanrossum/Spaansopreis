import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spaanse games om te oefenen',
  description:
    'Oefen Spaanse woordenschat met flashcards, quizzen en minigames. Spelenderwijs Spaans leren voor op reis.',
  alternates: {
    canonical: '/games',
  },
};

export default function Games() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Spaanse Games
          </h1>
          <p className="text-xl text-gray-600">
            Kies een game om je Spaanse vocabulaire te oefenen
          </p>
        </div>

        {/* Available Games */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Flashcards Game Card */}
          <Link href="/games/flashcards">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-8 border-2 border-transparent hover:border-orange-500 group cursor-pointer h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">🃏</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                    Flashcards
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Oefen woordenschat door kaarten om te draaien en vertalingen te onthouden
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full font-medium">
                  🃏 490 kaarten
                </span>
                <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full font-medium">
                  📂 21 categorieën
                </span>
              </div>

              {/* Play Button */}
              <div className="flex items-center text-orange-600 font-semibold group-hover:translate-x-2 transition-transform">
                Speel nu
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Multiple Choice Quiz Card */}
          <Link href="/games/quiz">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-8 border-2 border-transparent hover:border-purple-500 group cursor-pointer h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">🎯</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Multiple Choice Quiz
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Test je kennis met meerkeuzevragen en zie direct je score
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-medium">
                  🎯 10 vragen
                </span>
                <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-medium">
                  📊 Score tracking
                </span>
                <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-medium">
                  📂 21 categorieën
                </span>
              </div>

              {/* Play Button */}
              <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
                Speel nu
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Spaans Tellen Game Card */}
          <Link href="/games/spaans-tellen">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-8 border-2 border-transparent hover:border-green-500 group cursor-pointer h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">🔢</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                    Spaans Tellen
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Oefen Spaanse getallen met simpele rekenoefeningen
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                  🔢 Getallen 0-100
                </span>
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                  ➕ Optellen & Aftrekken
                </span>
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                  📝 10 Vragen
                </span>
              </div>

              {/* Play Button */}
              <div className="flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform">
                Speel nu
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Etenstijd Game Card */}
          <Link href="/games/etenstijd">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-8 border-2 border-transparent hover:border-pink-500 group cursor-pointer h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">🍎</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors mb-2">
                    Etenstijd
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Match groente en fruit met hun Spaanse namen
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-pink-100 text-pink-700 text-xs px-3 py-1 rounded-full font-medium">
                  🍎 31 items
                </span>
                <span className="bg-pink-100 text-pink-700 text-xs px-3 py-1 rounded-full font-medium">
                  🎯 8 per ronde
                </span>
                <span className="bg-pink-100 text-pink-700 text-xs px-3 py-1 rounded-full font-medium">
                  📊 Score tracking
                </span>
              </div>

              {/* Play Button */}
              <div className="flex items-center text-pink-600 font-semibold group-hover:translate-x-2 transition-transform">
                Speel nu
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Coming Soon Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Meer games komen binnenkort
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow opacity-60">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Woordzoeker
              </h3>
              <p className="text-gray-600">
                Vind verborgen woorden in een letter grid
              </p>
              <span className="inline-block mt-3 text-sm text-gray-500">
                Binnenkort beschikbaar
              </span>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow opacity-60">
              <div className="text-4xl mb-3">🃏</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Memory Match
              </h3>
              <p className="text-gray-600">
                Match woorden met hun vertalingen of afbeeldingen
              </p>
              <span className="inline-block mt-3 text-sm text-gray-500">
                Binnenkort beschikbaar
              </span>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow opacity-60">
              <div className="text-4xl mb-3">📝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Invuloefeningen
              </h3>
              <p className="text-gray-600">
                Vul de ontbrekende woorden in zinnen in
              </p>
              <span className="inline-block mt-3 text-sm text-gray-500">
                Binnenkort beschikbaar
              </span>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow opacity-60">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Letter Soep
              </h3>
              <p className="text-gray-600">
                Maak woorden uit een set letters
              </p>
              <span className="inline-block mt-3 text-sm text-gray-500">
                Binnenkort beschikbaar
              </span>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow opacity-60">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Snelle Quiz
              </h3>
              <p className="text-gray-600">
                Test je kennis met tijdgebonden vragen
              </p>
              <span className="inline-block mt-3 text-sm text-gray-500">
                Binnenkort beschikbaar
              </span>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow opacity-60">
              <div className="text-4xl mb-3">🎲</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Woordrace
              </h3>
              <p className="text-gray-600">
                Race tegen de klok om zoveel mogelijk woorden te vertalen
              </p>
              <span className="inline-block mt-3 text-sm text-gray-500">
                Binnenkort beschikbaar
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

