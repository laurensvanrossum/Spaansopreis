'use client';

import SpeechButton from './SpeechButton';

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
              <SpeechButton text={sentence.spanish} size="md" />
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


