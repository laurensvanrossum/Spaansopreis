'use client';

import { useState } from 'react';
import VocabularyCard from './VocabularyCard';

interface Word {
  id: number;
  spanish: string;
  dutch: string;
  exampleSpanish: string;
  exampleDutch: string;
}

interface CategoryData {
  category: string;
  icon: string;
  words: Word[];
}

interface CategorySectionProps {
  data: CategoryData;
  showExamples: boolean;
}

export default function CategorySection({ data, showExamples }: CategorySectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all flex justify-between items-center group"
      >
        <div className="flex items-center gap-4">
          <span className="text-4xl">{data.icon}</span>
          <div className="text-left">
            <h2 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
              {data.category}
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              {data.words.length} woorden
            </p>
          </div>
        </div>
        <svg
          className={`w-6 h-6 text-gray-400 transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {isExpanded && (
        <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in">
          {data.words.map((word) => (
            <VocabularyCard key={word.id} word={word} showExamples={showExamples} />
          ))}
        </div>
      )}
    </div>
  );
}

