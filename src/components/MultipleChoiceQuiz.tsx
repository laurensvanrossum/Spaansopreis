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

interface Question {
  id: number;
  question: string;
  correctAnswer: string;
  options: string[];
  category: string;
  categoryIcon: string;
}

export default function MultipleChoiceQuiz() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Combine all vocabulary data
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

  // Generate questions from vocabulary
  const generateQuestions = (category: string = 'all', count: number = 10) => {
    let allWords: (Word & { category: string; categoryIcon: string })[] = [];

    allCategories.forEach((categoryData) => {
      if (category === 'all' || categoryData.category === category) {
        categoryData.words.forEach((word) => {
          allWords.push({
            ...word,
            category: categoryData.category,
            categoryIcon: categoryData.icon,
          });
        });
      }
    });

    // Shuffle and take 'count' words
    const shuffled = allWords.sort(() => Math.random() - 0.5).slice(0, count);

    // Generate questions
    const generatedQuestions: Question[] = shuffled.map((word, index) => {
      // Get 3 random wrong answers from other words
      const wrongAnswers = allWords
        .filter((w) => w.dutch !== word.dutch)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((w) => w.dutch);

      // Combine correct and wrong answers, then shuffle
      const options = [word.dutch, ...wrongAnswers].sort(() => Math.random() - 0.5);

      return {
        id: index + 1,
        question: word.spanish,
        correctAnswer: word.dutch,
        options,
        category: word.category,
        categoryIcon: word.categoryIcon,
      };
    });

    return generatedQuestions;
  };

  // Initialize quiz
  useEffect(() => {
    startNewQuiz();
  }, []);

  const startNewQuiz = (category: string = 'all') => {
    const newQuestions = generateQuestions(category, 10);
    setQuestions(newQuestions);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowFeedback(false);
    setQuizComplete(false);
    setSelectedCategory(category);
  };

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answer: string) => {
    if (showFeedback) return; // Prevent changing answer after selection

    setSelectedAnswer(answer);
    setShowFeedback(true);

    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setQuizComplete(true);
    }
  };

  // Get unique categories for filter
  const categories = [
    { name: 'all', label: 'Alle Categorieën', icon: '📚' },
    ...allCategories.map((cat) => ({
      name: cat.category,
      label: cat.category,
      icon: cat.icon,
    })),
  ];

  if (questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <div className="text-center">
          <div className="text-6xl mb-4">🔄</div>
          <p className="text-gray-600">Quiz wordt geladen...</p>
        </div>
      </div>
    );
  }

  // Quiz Complete Screen
  if (quizComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    let emoji = '🎉';
    let message = 'Uitstekend!';

    if (percentage < 50) {
      emoji = '💪';
      message = 'Blijf oefenen!';
    } else if (percentage < 70) {
      emoji = '👍';
      message = 'Goed gedaan!';
    } else if (percentage < 90) {
      emoji = '🌟';
      message = 'Geweldig!';
    }

    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-6xl mb-3">{emoji}</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{message}</h2>
          <p className="text-lg text-gray-600 mb-4">
            Je hebt {score} van de {questions.length} vragen goed beantwoord!
          </p>
          
          {/* Score Circle */}
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white mb-4">
            <div className="text-center">
              <div className="text-3xl font-bold">{percentage}%</div>
              <div className="text-xs">Score</div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-green-50 p-3 rounded-lg">
              <div className="text-xl font-bold text-green-600">{score}</div>
              <div className="text-xs text-gray-600">Goed</div>
            </div>
            <div className="bg-red-50 p-3 rounded-lg">
              <div className="text-xl font-bold text-red-600">
                {questions.length - score}
              </div>
              <div className="text-xs text-gray-600">Fout</div>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="text-xl font-bold text-blue-600">
                {questions.length}
              </div>
              <div className="text-xs text-gray-600">Totaal</div>
            </div>
          </div>

          {/* Restart Buttons */}
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => startNewQuiz(selectedCategory)}
              className="px-5 py-2.5 bg-orange-600 text-white rounded-lg text-sm font-semibold hover:bg-orange-700 transition-colors"
            >
              🔄 Opnieuw spelen
            </button>
            <button
              onClick={() => startNewQuiz('all')}
              className="px-5 py-2.5 bg-white border-2 border-orange-600 text-orange-600 rounded-lg text-sm font-semibold hover:bg-orange-50 transition-colors"
            >
              📚 Andere categorie
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Category Filter (shown only at start) */}
      {currentQuestionIndex === 0 && !showFeedback && (
        <div className="mb-4">
          <h3 className="text-xs font-semibold text-gray-900 mb-2">
            Kies een categorie:
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => startNewQuiz(cat.name)}
                className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedCategory === cat.name
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-orange-100 border border-gray-300'
                }`}
              >
                <span className="mr-1">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-xs font-medium text-gray-700">
            Vraag {currentQuestionIndex + 1} van {questions.length}
          </span>
          <span className="text-xs font-medium text-orange-600">
            Score: {score}/{questions.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-orange-600 h-1.5 rounded-full transition-all duration-300"
            style={{
              width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        {/* Category Badge */}
        <div className="mb-3">
          <span className="inline-block px-2.5 py-0.5 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">
            {currentQuestion.categoryIcon} {currentQuestion.category}
          </span>
        </div>

        {/* Question */}
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
          {currentQuestion.question}
        </h2>

        {/* Answer Options */}
        <div className="space-y-2">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = option === currentQuestion.correctAnswer;
            const showCorrect = showFeedback && isCorrect;
            const showIncorrect = showFeedback && isSelected && !isCorrect;

            let buttonClasses =
              'w-full p-3 text-left rounded-lg border-2 transition-all font-medium ';

            if (showCorrect) {
              buttonClasses += 'bg-green-100 border-green-500 text-green-900';
            } else if (showIncorrect) {
              buttonClasses += 'bg-red-100 border-red-500 text-red-900';
            } else if (isSelected) {
              buttonClasses += 'bg-orange-100 border-orange-500 text-orange-900';
            } else {
              buttonClasses +=
                'bg-white border-gray-300 text-gray-900 hover:bg-gray-50 hover:border-orange-300';
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                disabled={showFeedback}
                className={buttonClasses}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm md:text-base">{option}</span>
                  {showCorrect && <span className="text-xl">✅</span>}
                  {showIncorrect && <span className="text-xl">❌</span>}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Next Button */}
      {showFeedback && (
        <div className="flex justify-center">
          <button
            onClick={handleNextQuestion}
            className="px-6 py-2.5 bg-orange-600 text-white rounded-lg text-sm font-semibold hover:bg-orange-700 transition-colors shadow-lg"
          >
            {currentQuestionIndex < questions.length - 1
              ? 'Volgende vraag →'
              : 'Resultaten bekijken 🎉'}
          </button>
        </div>
      )}
    </div>
  );
}
