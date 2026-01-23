'use client';

import { useState } from 'react';

interface SpeechButtonProps {
  text: string;
  language?: string;
  rate?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function SpeechButton({
  text,
  language = 'es-ES',
  rate = 0.9,
  className = '',
  size = 'md',
}: SpeechButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    // Cancel any ongoing speech
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }

    // If clicking while playing, just stop
    if (isPlaying) {
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    utterance.rate = rate; // Slightly slower for learners

    // Reset playing state when speech ends
    utterance.onend = () => {
      setIsPlaying(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  // Size classes
  const sizeClasses = {
    sm: 'p-1.5 w-7 h-7',
    md: 'p-2 w-9 h-9',
    lg: 'p-2.5 w-10 h-10',
  };

  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-5 h-5',
  };

  return (
    <button
      onClick={playAudio}
      className={`flex-shrink-0 rounded-full transition-colors shadow-sm ${
        isPlaying
          ? 'bg-orange-600 text-white'
          : 'bg-white text-orange-600 hover:bg-orange-100'
      } ${sizeClasses[size]} ${className}`}
      aria-label={isPlaying ? 'Stop audio' : 'Play audio'}
      title={isPlaying ? 'Stop audio' : 'Speel audio af'}
    >
      {isPlaying ? (
        // Stop icon
        <svg
          className={iconSizeClasses[size]}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <rect x="6" y="6" width="12" height="12" />
        </svg>
      ) : (
        // Speaker icon
        <svg
          className={iconSizeClasses[size]}
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
  );
}




