'use client';

import { useState, useEffect } from 'react';

// Import all vocabulary data
import greetingsData from '../../data/greetings.json';
import airportData from '../../data/airport.json';
import hotelData from '../../data/hotel.json';
import transportData from '../../data/transport.json';
import foodData from '../../data/food.json';
import directionsData from '../../data/directions.json';
import emergencyData from '../../data/emergency.json';
import shoppingData from '../../data/shopping.json';
import numbersData from '../../data/numbers.json';
import weatherData from '../../data/weather.json';
import activitiesData from '../../data/activities.json';
import accommodationData from '../../data/accommodation.json';
import moneyData from '../../data/money.json';
import communicationData from '../../data/communication.json';
import healthData from '../../data/health.json';
import documentsData from '../../data/documents.json';
import clothingData from '../../data/clothing.json';
import colorsData from '../../data/colors.json';
import familyData from '../../data/family.json';
import bodyData from '../../data/body.json';
import groenteEnFruitData from '../../data/groente-en-fruit.json';

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

interface FlashcardData extends Word {
  category: string;
  categoryIcon: string;
}

export default function Flashcards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [flashcards, setFlashcards] = useState<FlashcardData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Combine all vocabulary data
  useEffect(() => {
    const allCategories: CategoryData[] = [
      greetingsData,
      airportData,
      hotelData,
      transportData,
      foodData,
      directionsData,
      emergencyData,
      shoppingData,
      numbersData,
      weatherData,
      activitiesData,
      accommodationData,
      moneyData,
      communicationData,
      healthData,
      documentsData,
      clothingData,
      colorsData,
      familyData,
      bodyData,
      groenteEnFruitData,
    ];

    const allFlashcards: FlashcardData[] = [];
    allCategories.forEach((categoryData) => {
      categoryData.words.forEach((word) => {
        allFlashcards.push({
          ...word,
          category: categoryData.category,
          categoryIcon: categoryData.icon,
        });
      });
    });

    setFlashcards(allFlashcards);
  }, []);

  // Filter flashcards by category
  const filteredFlashcards =
    selectedCategory === 'all'
      ? flashcards
      : flashcards.filter((card) => card.category === selectedCategory);

  const currentCard = filteredFlashcards[currentIndex];

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [selectedCategory]);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const nextCard = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % filteredFlashcards.length);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setCurrentIndex(
      (prev) => (prev - 1 + filteredFlashcards.length) % filteredFlashcards.length
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextCard();
      } else if (e.key === 'ArrowLeft') {
        prevCard();
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        flipCard();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isFlipped, filteredFlashcards.length]);

  // Get unique categories for filter
  const categories = [
    { name: 'all', label: 'Alle Categorieën', icon: '📚' },
    ...Array.from(
      new Set(flashcards.map((card) => card.category))
    ).map((category) => {
      const card = flashcards.find((c) => c.category === category);
      return {
        name: category,
        label: category,
        icon: card?.categoryIcon || '📖',
      };
    }),
  ];

  if (!currentCard) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="text-6xl mb-4">🔄</div>
          <p className="text-gray-600">Loading flashcards...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Kies een categorie:
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat.name
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-orange-100 border border-gray-300'
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Card Counter */}
      <div className="text-center mb-3">
        <span className="inline-block px-2.5 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
          Kaart {currentIndex + 1} van {filteredFlashcards.length}
        </span>
        <div className="mt-1 text-xs text-gray-600">
          {currentCard.categoryIcon} {currentCard.category}
        </div>
      </div>

      {/* Flashcard Container */}
      <div className="perspective-1000 mb-4">
        <div
          className="relative w-full h-44 max-w-xl mx-auto cursor-pointer"
          onClick={flipCard}
          role="button"
          tabIndex={0}
          aria-label={`Flashcard: ${currentCard.spanish}. Druk Enter om om te draaien.`}
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              flipCard();
            }
          }}
        >
          {/* Card Inner - This creates the flip effect */}
          <div
            className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
          >
            {/* Front of card (Spanish) */}
            <div className="absolute w-full h-full backface-hidden">
              <div className="w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-lg p-4 flex flex-col items-center justify-center text-white">
                <div className="text-xs font-medium mb-2 opacity-90">
                  SPAANS
                </div>
                <div className="text-2xl md:text-3xl font-bold text-center mb-2">
                  {currentCard.spanish}
                </div>
                <div className="text-xs opacity-75 mt-auto">
                  Klik om de vertaling te zien
                </div>
              </div>
            </div>

            {/* Back of card (Dutch) */}
            <div className="absolute w-full h-full backface-hidden rotate-y-180">
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-4 flex flex-col items-center justify-center text-white">
                <div className="text-xs font-medium mb-2 opacity-90">
                  NEDERLANDS
                </div>
                <div className="text-2xl md:text-3xl font-bold text-center mb-2">
                  {currentCard.dutch}
                </div>
                <div className="text-xs opacity-75 mt-auto">
                  Klik om terug te draaien
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <button
          onClick={prevCard}
          className="flex items-center gap-1 px-3 py-1.5 bg-white border-2 border-orange-600 text-orange-600 rounded-lg text-xs font-semibold hover:bg-orange-50 transition-colors"
          aria-label="Vorige kaart"
        >
          <svg
            className="w-3 h-3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Vorige
        </button>

        <button
          onClick={flipCard}
          className="px-4 py-1.5 bg-orange-600 text-white rounded-lg text-xs font-semibold hover:bg-orange-700 transition-colors"
          aria-label="Draai kaart om"
        >
          {isFlipped ? '🔄 Draai terug' : '🔄 Draai om'}
        </button>

        <button
          onClick={nextCard}
          className="flex items-center gap-1 px-3 py-1.5 bg-white border-2 border-orange-600 text-orange-600 rounded-lg text-xs font-semibold hover:bg-orange-50 transition-colors"
          aria-label="Volgende kaart"
        >
          Volgende
          <svg
            className="w-3 h-3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Keyboard Shortcuts Info */}
      <div className="text-center text-xs text-gray-500">
        <div className="flex justify-center gap-2 flex-wrap">
          <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">← Vorige</span>
          <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">→ Volgende</span>
          <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">
            Enter/Space Omdraaien
          </span>
        </div>
      </div>
    </div>
  );
}

