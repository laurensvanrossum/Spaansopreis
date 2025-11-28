'use client';

import { useState } from 'react';

interface Sentence {
  spanish: string;
  dutch: string;
}

interface Conversation {
  id: number;
  title: string;
  category: string;
  icon: string;
  sentences: Sentence[];
}

interface ConversationCardProps {
  conversation: Conversation;
}

export default function ConversationCard({ conversation }: ConversationCardProps) {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const playSpanishAudio = (text: string, index: number) => {
    // Cancel any ongoing speech
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }

    // If clicking the same sentence that's playing, just stop
    if (playingIndex === index) {
      setPlayingIndex(null);
      return;
    }

    setPlayingIndex(index);

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 0.9; // Slightly slower for learners
    
    // Reset playing state when speech ends
    utterance.onend = () => {
      setPlayingIndex(null);
    };

    utterance.onerror = () => {
      setPlayingIndex(null);
    };

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 mb-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b">
        <span className="text-4xl">{conversation.icon}</span>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">
            {conversation.title}
          </h3>
          <span className="inline-block mt-1 px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">
            {conversation.category}
          </span>
        </div>
      </div>

      {/* Conversation Sentences */}
      <div className="space-y-4">
        {conversation.sentences.map((sentence, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${
              index % 2 === 0 ? 'bg-orange-50' : 'bg-blue-50'
            }`}
          >
            <div className="flex items-start gap-3">
              <button
                onClick={() => playSpanishAudio(sentence.spanish, index)}
                className={`flex-shrink-0 p-2 rounded-full transition-colors ${
                  playingIndex === index
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-orange-600 hover:bg-orange-100'
                } shadow-sm`}
                aria-label="Play Spanish audio"
                title="Speel Spaanse audio af"
              >
                {playingIndex === index ? (
                  // Stop icon
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect x="6" y="6" width="12" height="12" />
                  </svg>
                ) : (
                  // Speaker icon
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                )}
              </button>
              <div className="flex-1">
                <p className="text-lg font-bold text-gray-900 mb-2">
                  {sentence.spanish}
                </p>
                <p className="text-base text-gray-600">
                  {sentence.dutch}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


