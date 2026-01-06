'use client';

import SpeechButton from './SpeechButton';

interface Word {
  id: number;
  spanish: string;
  dutch: string;
  exampleSpanish: string;
  exampleDutch: string;
}

interface VocabularyCardProps {
  word: Word;
  showExamples: boolean;
}

export default function VocabularyCard({ word, showExamples }: VocabularyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-orange-600 mb-2" lang="es">
                {word.spanish}
              </h3>
              <p className="text-lg text-gray-700" lang="nl">{word.dutch}</p>
            </div>
            <SpeechButton text={word.spanish} size="md" />
          </div>
        </div>
      </div>

      {showExamples && (
        <div className="border-t pt-4 mt-4 space-y-3">
          <div className="bg-orange-50 p-3 rounded">
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Spaans:</p>
                <p className="text-gray-800 italic" lang="es">{word.exampleSpanish}</p>
              </div>
              <SpeechButton text={word.exampleSpanish} size="sm" />
            </div>
          </div>
          <div className="bg-blue-50 p-3 rounded">
            <p className="text-sm text-gray-500 mb-1">Nederlands:</p>
            <p className="text-gray-800" lang="nl">{word.exampleDutch}</p>
          </div>
        </div>
      )}
    </div>
  );
}

