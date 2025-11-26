'use client';

import { useState, useEffect } from 'react';
import groenteEnFruitData from '../../data/groente-en-fruit.json';

interface Word {
  id: number;
  spanish: string;
  dutch: string;
  exampleSpanish: string;
  exampleDutch: string;
}

interface GameItem extends Word {
  emoji: string;
}

interface Match {
  itemId: number;
  selectedWord: string;
  isCorrect: boolean;
}

export default function Etenstijd() {
  const [gameItems, setGameItems] = useState<GameItem[]>([]);
  const [shuffledWords, setShuffledWords] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [matches, setMatches] = useState<Match[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [totalRounds, setTotalRounds] = useState(0);

  // Map Spanish names to emojis
  const emojiMap: { [key: string]: string } = {
    'Manzana': '🍎',
    'Plátano': '🍌',
    'Naranja': '🍊',
    'Fresa': '🍓',
    'Pera': '🍐',
    'Uva': '🍇',
    'Sandía': '🍉',
    'Melón': '🍈',
    'Piña': '🍍',
    'Limón': '🍋',
    'Melocotón': '🍑',
    'Cereza': '🍒',
    'Kiwi': '🥝',
    'Mango': '🥭',
    'Frambuesa': '🫐',
    'Arándano': '🫐',
    'Aguacate': '🥑',
    'Coco': '🥥',
    'Tomate': '🍅',
    'Lechuga': '🥬',
    'Zanahoria': '🥕',
    'Patata': '🥔',
    'Cebolla': '🧅',
    'Pimiento': '🫑',
    'Pepino': '🥒',
    'Berenjena': '🍆',
    'Maíz': '🌽',
    'Brócoli': '🥦',
    'Ajo': '🧄',
    'Chile': '🌶️',
    'Calabaza': '🎃',
  };

  // Initialize a new round
  const startNewRound = () => {
    // Get 8 random items
    const allWords = groenteEnFruitData.words as Word[];
    const shuffled = [...allWords].sort(() => Math.random() - 0.5).slice(0, 8);
    
    // Add emojis to items
    const itemsWithEmojis = shuffled.map((word) => ({
      ...word,
      emoji: emojiMap[word.spanish] || '🍽️',
    }));

    // Shuffle words separately
    const words = shuffled.map((w) => w.spanish).sort(() => Math.random() - 0.5);

    setGameItems(itemsWithEmojis);
    setShuffledWords(words);
    setSelectedImage(null);
    setMatches([]);
    setShowResults(false);
  };

  useEffect(() => {
    startNewRound();
  }, []);

  // Handle image click
  const handleImageClick = (itemId: number) => {
    if (showResults) return;
    
    // Check if already matched
    const alreadyMatched = matches.find((m) => m.itemId === itemId);
    if (alreadyMatched) return;

    setSelectedImage(itemId);
  };

  // Handle word click
  const handleWordClick = (word: string) => {
    if (showResults || selectedImage === null) return;

    // Check if word already used
    const wordAlreadyUsed = matches.find((m) => m.selectedWord === word);
    if (wordAlreadyUsed) return;

    // Find the selected item
    const item = gameItems.find((i) => i.id === selectedImage);
    if (!item) return;

    // Check if match is correct
    const isCorrect = item.spanish === word;

    // Add match
    const newMatch: Match = {
      itemId: selectedImage,
      selectedWord: word,
      isCorrect,
    };

    const newMatches = [...matches, newMatch];
    setMatches(newMatches);
    setSelectedImage(null);

    // Check if all items are matched
    if (newMatches.length === 8) {
      const correctCount = newMatches.filter((m) => m.isCorrect).length;
      setScore(score + correctCount);
      setTotalRounds(totalRounds + 1);
      setShowResults(true);
    }
  };

  // Get match for an item
  const getMatchForItem = (itemId: number) => {
    return matches.find((m) => m.itemId === itemId);
  };

  // Check if word is used
  const isWordUsed = (word: string) => {
    return matches.some((m) => m.selectedWord === word);
  };

  if (gameItems.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <div className="text-center">
          <div className="text-6xl mb-4">🔄</div>
          <p className="text-gray-600">Spel wordt geladen...</p>
        </div>
      </div>
    );
  }

  const correctMatches = matches.filter((m) => m.isCorrect).length;

  return (
    <div className="max-w-6xl mx-auto">
      {/* Score Header */}
      <div className="mb-6 flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Ronde: {totalRounds + 1}
        </div>
        <div className="flex gap-4">
          <div className="bg-green-100 px-4 py-2 rounded-full">
            <span className="text-green-700 font-semibold">
              Totale score: {score}
            </span>
          </div>
          {!showResults && (
            <div className="bg-blue-100 px-4 py-2 rounded-full">
              <span className="text-blue-700 font-semibold">
                Gekoppeld: {matches.length}/8
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Instructions */}
      {!showResults && matches.length === 0 && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
          <p className="text-blue-900 font-medium text-sm">
            💡 Klik eerst op een afbeelding, dan op het bijpassende Spaanse woord
          </p>
        </div>
      )}

      {/* Game Area */}
      <div className="grid lg:grid-cols-2 gap-8 mb-6">
        {/* Images Grid */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Kies een afbeelding:
          </h3>
          <div className="grid grid-cols-4 gap-4">
            {gameItems.map((item) => {
              const match = getMatchForItem(item.id);
              const isSelected = selectedImage === item.id;
              
              let cardClasses = 'relative aspect-square rounded-xl border-4 transition-all cursor-pointer flex items-center justify-center p-4 ';
              
              if (match) {
                if (match.isCorrect) {
                  cardClasses += 'bg-green-100 border-green-500 cursor-default';
                } else {
                  cardClasses += 'bg-red-100 border-red-500 cursor-default';
                }
              } else if (isSelected) {
                cardClasses += 'bg-orange-100 border-orange-500 shadow-lg scale-105';
              } else {
                cardClasses += 'bg-white border-gray-300 hover:border-orange-400 hover:shadow-md';
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleImageClick(item.id)}
                  className={cardClasses}
                  disabled={showResults || !!match}
                >
                  {/* Emoji */}
                  <div className="text-7xl">{item.emoji}</div>
                  
                  {/* Match feedback */}
                  {match && (
                    <div className="absolute -top-3 -right-3 text-3xl bg-white rounded-full shadow-md">
                      {match.isCorrect ? '✅' : '❌'}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Words List */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Kies het Spaanse woord:
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {shuffledWords.map((word, index) => {
              const isUsed = isWordUsed(word);
              const match = matches.find((m) => m.selectedWord === word);
              
              let buttonClasses = 'p-4 rounded-xl border-2 transition-all font-medium text-center ';
              
              if (isUsed) {
                if (match?.isCorrect) {
                  buttonClasses += 'bg-green-100 border-green-500 text-green-900 cursor-default';
                } else {
                  buttonClasses += 'bg-red-100 border-red-500 text-red-900 cursor-default';
                }
              } else {
                buttonClasses += 'bg-white border-gray-300 text-gray-900 hover:bg-orange-50 hover:border-orange-400 cursor-pointer';
              }

              return (
                <button
                  key={index}
                  onClick={() => handleWordClick(word)}
                  className={buttonClasses}
                  disabled={showResults || isUsed || selectedImage === null}
                >
                  {word}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results */}
      {showResults && (
        <div className="bg-white rounded-xl shadow-lg p-8 text-center animate-fade-in">
          <div className="text-6xl mb-4">
            {correctMatches === 8 ? '🎉' : correctMatches >= 6 ? '👍' : '💪'}
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {correctMatches === 8 ? 'Perfect!' : correctMatches >= 6 ? 'Goed gedaan!' : 'Blijf oefenen!'}
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Je hebt {correctMatches} van de 8 correct gekoppeld!
          </p>

          {/* Score Display */}
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white mb-6">
            <div className="text-center">
              <div className="text-4xl font-bold">{correctMatches}</div>
              <div className="text-sm">/ 8</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={startNewRound}
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
            >
              🔄 Nieuwe ronde
            </button>
          </div>
        </div>
      )}

      {/* Help Text */}
      <div className="mt-6 text-center text-sm text-gray-600">
        <p>💡 Match alle 8 afbeeldingen met de juiste Spaanse namen</p>
      </div>
    </div>
  );
}

