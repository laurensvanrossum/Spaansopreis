'use client';

import Link from 'next/link';
import { Word } from '@/utils/wordOfTheDay';

interface WordOfTheDayCardProps {
  word: Word | null;
  category: { name: string; icon: string } | null;
}

export default function WordOfTheDayCard({ word, category }: WordOfTheDayCardProps) {
  // Fallback if no word is available
  if (!word) {
    return (
      <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-md p-4 max-w-2xl mx-auto">
        <div className="text-center">
          <div className="text-3xl mb-2">📚</div>
          <h2 className="text-lg font-bold text-gray-900 mb-1">
            Woord van de dag
          </h2>
          <p className="text-sm text-gray-600">
            Geen woorden beschikbaar.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-md p-4 sm:p-5 hover:shadow-lg transition-shadow max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">
          Woord van de dag
        </h2>
        {category && (
          <span className="text-xl sm:text-2xl" title={category.name}>
            {category.icon}
          </span>
        )}
      </div>

      {/* Word Display */}
      <div className="bg-white rounded-lg p-3 sm:p-4 mb-2 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
          <div>
            <p className="text-xs text-gray-500 mb-0.5">Spaans</p>
            <p className="text-xl sm:text-2xl font-bold text-orange-600" lang="es">
              {word.spanish}
            </p>
          </div>
          <div className="text-2xl text-gray-300 hidden sm:block">→</div>
          <div>
            <p className="text-xs text-gray-500 mb-0.5">Nederlands</p>
            <p className="text-lg sm:text-xl font-semibold text-gray-900" lang="nl">
              {word.dutch}
            </p>
          </div>
        </div>

        {/* Category Badge */}
        {category && (
          <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full text-xs font-medium">
            <span>{category.icon}</span>
            <span>{category.name}</span>
          </div>
        )}
      </div>

      {/* Example Sentences */}
      {word.exampleSpanish && word.exampleDutch && (
        <div className="bg-white/50 rounded-lg p-2.5 sm:p-3 mb-2">
          <p className="text-xs text-gray-500 mb-1">Voorbeeldzin</p>
          <div className="space-y-1">
            <p className="text-xs sm:text-sm italic text-gray-700">
              <span className="font-semibold text-orange-600">ES:</span> <span lang="es">"{word.exampleSpanish}"</span>
            </p>
            <p className="text-xs text-gray-600">
              <span className="font-semibold">NL:</span> <span lang="nl">"{word.exampleDutch}"</span>
            </p>
          </div>
        </div>
      )}

      {/* Link to Full Vocabulary */}
      <div className="text-center">
        <Link
          href="/woorden"
          className="inline-flex items-center gap-1.5 text-sm text-orange-600 hover:text-orange-700 font-semibold transition-colors group"
        >
          <span>Bekijk alle woorden</span>
          <span className="group-hover:translate-x-1 transition-transform text-xs">→</span>
        </Link>
      </div>
    </div>
  );
}

