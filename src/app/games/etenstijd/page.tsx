import Link from 'next/link';
import Etenstijd from '@/components/Etenstijd';

export default function EtenstijdPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/games"
          className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 mb-6"
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
            🍎 Etenstijd
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Match groente en fruit met hun Spaanse namen
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4">
            <div className="bg-pink-100 px-4 py-2 rounded-full">
              <span className="text-pink-700 font-semibold">
                🍎 31 groenten & fruit
              </span>
            </div>
            <div className="bg-pink-100 px-4 py-2 rounded-full">
              <span className="text-pink-700 font-semibold">
                🎯 8 items per ronde
              </span>
            </div>
            <div className="bg-pink-100 px-4 py-2 rounded-full">
              <span className="text-pink-700 font-semibold">
                📊 Score tracking
              </span>
            </div>
          </div>
        </div>

        {/* Game Component */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <Etenstijd />
        </div>
      </div>
    </div>
  );
}

