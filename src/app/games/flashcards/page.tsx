import Link from 'next/link';
import Flashcards from '@/components/Flashcards';

export default function FlashcardsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/games"
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-6"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Terug naar Games
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🃏 Flashcards
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Oefen je Spaanse vocabulaire met interactieve flashcards
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4">
            <div className="bg-orange-100 px-4 py-2 rounded-full">
              <span className="text-orange-700 font-semibold">
                🃏 490 flashcards
              </span>
            </div>
            <div className="bg-orange-100 px-4 py-2 rounded-full">
              <span className="text-orange-700 font-semibold">
                📂 21 categorieën
              </span>
            </div>
          </div>
        </div>

        {/* Flashcards Component */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <Flashcards />
        </div>
      </div>
    </div>
  );
}

