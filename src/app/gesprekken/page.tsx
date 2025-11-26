import ConversationCard from '@/components/ConversationCard';
import conversationsData from '../../../data/conversations.json';

export default function Gesprekken() {
  const conversations = conversationsData.conversations;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Spaanse Gesprekken
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Oefen met praktische gesprekken en zinnen voor dagelijkse situaties
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4">
            <div className="bg-orange-100 px-4 py-2 rounded-full">
              <span className="text-orange-700 font-semibold">
                💬 {conversations.length} gesprekken
              </span>
            </div>
            <div className="bg-orange-100 px-4 py-2 rounded-full">
              <span className="text-orange-700 font-semibold">
                🔊 Audio ondersteuning
              </span>
            </div>
            <div className="bg-orange-100 px-4 py-2 rounded-full">
              <span className="text-orange-700 font-semibold">
                🎯 A1/A2 niveau
              </span>
            </div>
          </div>
        </div>

        {/* Conversations List */}
        <div>
          {conversations.map((conversation) => (
            <ConversationCard key={conversation.id} conversation={conversation} />
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Over deze gesprekken
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span>🗣️</span> Praktische situaties
              </h3>
              <p>
                Alle gesprekken zijn gebaseerd op echte situaties die je tegenkomt tijdens
                het reizen: hotels, restaurants, vervoer, noodgevallen en meer.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span>🔊</span> Audio uitspraak
              </h3>
              <p>
                Luister naar de correcte Spaanse uitspraak door op het speaker-icoon te
                klikken. Perfect om je luister- en uitspraakvaardigheid te verbeteren.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span>📚</span> Vocabulaire integratie
              </h3>
              <p>
                Deze gesprekken gebruiken woorden uit de Woorden-pagina. Oefen eerst de
                woorden om deze gesprekken beter te begrijpen.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span>🎯</span> Beginnersvriendelijk
              </h3>
              <p>
                Alle gesprekken zijn op A1/A2 niveau, perfect voor beginners die net
                starten met Spaans leren.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

