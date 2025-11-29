import Link from 'next/link';
import WordOfTheDayCard from '@/components/WordOfTheDayCard';
import { getWordOfTheDay, getAllWords, getCategoryForWord, CategoryData } from '@/utils/wordOfTheDay';

// Import all vocabulary data (same as woorden page)
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

export default function Home() {
  // Gather all categories
  const categories: CategoryData[] = [
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

  // Get all words from all categories
  const allWords = getAllWords(categories);
  
  // Get today's word
  const wordOfTheDay = getWordOfTheDay(allWords);
  
  // Get the category for the word
  const category = wordOfTheDay ? getCategoryForWord(wordOfTheDay, categories) : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welkom bij Spaans op reis
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Leer Spaans op een leuke en interactieve manier met woorden, gesprekken en games.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <Link href="/woorden" className="group">
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow h-full">
              <div className="text-4xl mb-4">📚</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                Woorden
              </h2>
              <p className="text-gray-600">
                Ontdek nieuwe woorden en breid je vocabulaire uit met interactieve oefeningen.
              </p>
            </div>
          </Link>

          <Link href="/gesprekken" className="group">
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow h-full">
              <div className="text-4xl mb-4">💬</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                Gesprekken
              </h2>
              <p className="text-gray-600">
                Oefen met praktische zinnen en conversaties voor dagelijks gebruik.
              </p>
            </div>
          </Link>

          <Link href="/games" className="group">
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow h-full">
              <div className="text-4xl mb-4">🎮</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                Games
              </h2>
              <p className="text-gray-600">
                Maak leren leuk met verschillende taalgames en uitdagingen.
              </p>
            </div>
          </Link>

          <Link href="/blog" className="group">
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow h-full">
              <div className="text-4xl mb-4">✍️</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                Blog
              </h2>
              <p className="text-gray-600">
                Lees handige tips, reisadviezen en verhalen over Spanje en de Spaanse taal.
              </p>
            </div>
          </Link>
        </div>

        {/* Word of the Day Section */}
        <div className="mb-12">
          <WordOfTheDayCard word={wordOfTheDay} category={category} />
        </div>

        {/* Call to Action */}
        <div className="text-center bg-orange-600 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Klaar om te beginnen?</h2>
          <p className="text-xl mb-8 opacity-90">
            Kies een categorie hierboven en start je leerreis vandaag nog!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/woorden"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start met Woorden
            </Link>
            <Link
              href="/games"
              className="bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-800 transition-colors border-2 border-white"
            >
              Speel een Game
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
