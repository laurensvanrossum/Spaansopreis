'use client';

import { useState, useEffect } from 'react';
import numbersData from '../../data/numbers.json';

interface NumberWord {
  id: number;
  spanish: string;
  dutch: string;
  value: number;
}

export default function SpaansTellen() {
  const [question, setQuestion] = useState<{
    num1: NumberWord;
    num2: NumberWord;
    operator: '+' | '-';
    result: number;
  } | null>(null);
  const [options, setOptions] = useState<NumberWord[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);

  // Create number lookup with actual numeric values
  const numbersList: NumberWord[] = numbersData.words.map((word: { id: number; spanish: string; dutch: string }, index: number) => ({
    id: word.id,
    spanish: word.spanish,
    dutch: word.dutch,
    value: index, // 0-100
  }));

  const generateQuestion = () => {
    // Reset state
    setSelectedAnswer(null);
    setShowFeedback(false);

    // Randomly choose operator
    const operator = Math.random() > 0.5 ? '+' : '-';

    let num1: NumberWord;
    let num2: NumberWord;
    let result: number;

    // Generate valid question based on operator
    if (operator === '+') {
      // For addition, make sure result <= 100
      num1 = numbersList[Math.floor(Math.random() * 51)]; // 0-50
      const maxNum2 = Math.min(100 - num1.value, 50);
      num2 = numbersList[Math.floor(Math.random() * (maxNum2 + 1))];
      result = num1.value + num2.value;
    } else {
      // For subtraction, make sure result >= 0
      num1 = numbersList[Math.floor(Math.random() * 101)]; // 0-100
      num2 = numbersList[Math.floor(Math.random() * (num1.value + 1))]; // 0 to num1
      result = num1.value - num2.value;
    }

    // Get the correct answer
    const correctAnswer = numbersList[result];

    // Generate 2 wrong answers
    const wrongAnswers: NumberWord[] = [];
    const usedValues = new Set([result]);

    while (wrongAnswers.length < 2) {
      const randomValue = Math.floor(Math.random() * 101);
      if (!usedValues.has(randomValue)) {
        wrongAnswers.push(numbersList[randomValue]);
        usedValues.add(randomValue);
      }
    }

    // Shuffle options
    const allOptions = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);

    setQuestion({ num1, num2, operator, result });
    setOptions(allOptions);
  };

  // Generate first question on mount
  useEffect(() => {
    generateQuestion();
  }, []);

  const handleAnswerSelect = (value: number) => {
    if (showFeedback) return;

    setSelectedAnswer(value);
    setShowFeedback(true);
    setQuestionsAnswered(questionsAnswered + 1);

    if (value === question!.result) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    generateQuestion();
  };

  if (!question) {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <div className="text-center">
          <div className="text-6xl mb-4">🔄</div>
          <p className="text-gray-600">Bezig met laden...</p>
        </div>
      </div>
    );
  }

  const isCorrect = selectedAnswer === question.result;
  const correctAnswerWord = numbersList[question.result];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Score Display */}
      <div className="mb-6 flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Vragen beantwoord: <span className="font-semibold">{questionsAnswered}</span>
        </div>
        <div className="text-sm text-green-600">
          Score: <span className="font-semibold">{score}/{questionsAnswered}</span>
          {questionsAnswered > 0 && (
            <span className="ml-2">
              ({Math.round((score / questionsAnswered) * 100)}%)
            </span>
          )}
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Math Problem */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="text-5xl md:text-6xl font-bold text-orange-600">
              {question.num1.value}
            </span>
            <span className="text-5xl md:text-6xl font-bold text-gray-400">
              {question.operator}
            </span>
            <span className="text-5xl md:text-6xl font-bold text-orange-600">
              {question.num2.value}
            </span>
            <span className="text-5xl md:text-6xl font-bold text-gray-400">
              =
            </span>
            <span className="text-5xl md:text-6xl font-bold text-orange-600">
              ?
            </span>
          </div>

          {/* Instruction */}
          <div className="text-sm text-gray-500 mt-4">
            Kies het juiste antwoord in het Spaans
          </div>
        </div>

        {/* Answer Options */}
        <div className="space-y-3 mb-6">
          {options.map((option) => {
            const isSelected = selectedAnswer === option.value;
            const isCorrectOption = option.value === question.result;
            const showCorrect = showFeedback && isCorrectOption;
            const showIncorrect = showFeedback && isSelected && !isCorrectOption;

            let buttonClasses =
              'w-full p-4 text-center rounded-lg border-2 transition-all font-bold text-xl ';

            if (showCorrect) {
              buttonClasses += 'bg-green-100 border-green-500 text-green-900';
            } else if (showIncorrect) {
              buttonClasses += 'bg-red-100 border-red-500 text-red-900';
            } else if (isSelected) {
              buttonClasses += 'bg-orange-100 border-orange-500 text-orange-900';
            } else {
              buttonClasses +=
                'bg-white border-gray-300 text-gray-900 hover:bg-orange-50 hover:border-orange-300';
            }

            return (
              <button
                key={option.id}
                onClick={() => handleAnswerSelect(option.value)}
                disabled={showFeedback}
                className={buttonClasses}
              >
                <div className="flex items-center justify-center gap-3">
                  <span>{option.spanish}</span>
                  {showCorrect && <span className="text-2xl">✅</span>}
                  {showIncorrect && <span className="text-2xl">❌</span>}
                </div>
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        {showFeedback && (
          <div className="flex justify-center">
            <button
              onClick={handleNextQuestion}
              className="px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg"
            >
              Volgende vraag →
            </button>
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="mt-6 text-center text-sm text-gray-600">
        <p>💡 Los de som op en kies het juiste Spaanse getal</p>
      </div>
    </div>
  );
}

