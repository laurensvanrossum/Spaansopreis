import Link from 'next/link';
import MultipleChoiceQuiz from '@/components/MultipleChoiceQuiz';

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/games"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-6"
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
            🎯 Multiple Choice Quiz
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Test je kennis met meerkeuzevragen
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4">
            <div className="bg-purple-100 px-4 py-2 rounded-full">
              <span className="text-purple-700 font-semibold">
                🎯 10 vragen per quiz
              </span>
            </div>
            <div className="bg-purple-100 px-4 py-2 rounded-full">
              <span className="text-purple-700 font-semibold">
                📊 Score tracking
              </span>
            </div>
            <div className="bg-purple-100 px-4 py-2 rounded-full">
              <span className="text-purple-700 font-semibold">
                📂 21 categorieën
              </span>
            </div>
          </div>
        </div>

        {/* Quiz Component */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <MultipleChoiceQuiz />
        </div>
      </div>
    </div>
  );
}

