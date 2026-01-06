import Link from 'next/link';
import NavigationCard from '@/components/NavigationCard';
import WordOfTheDayCard from '@/components/WordOfTheDayCard';
import { getWordOfTheDay, getAllWords, getCategoryForWord, CategoryData } from '@/utils/wordOfTheDay';

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

const navigationCards = [
  {
    id: 1,
    title: 'Woorden',
    category: 'Woordenschat',
    href: '/woorden',
    coverImage: '/homepage/woorden.jpg',
  },
  {
    id: 2,
    title: 'Gesprekken',
    category: 'Praktijk',
    href: '/gesprekken',
    coverImage: '/homepage/gesprekken.jpg',
  },
  {
    id: 3,
    title: 'Games',
    category: 'Oefenen',
    href: '/games',
    coverImage: '/homepage/games.jpg',
  },
  {
    id: 4,
    title: 'Spaans Leren',
    category: 'Artikelen',
    href: '/spaans-leren',
    coverImage: '/homepage/spaans-leren.JPG',
  },
];

export default function Home() {
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

  const allWords = getAllWords(categories);
  const wordOfTheDay = getWordOfTheDay(allWords);
  const category = wordOfTheDay ? getCategoryForWord(wordOfTheDay, categories) : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0EBE0] to-white">
      {/* Hero Section */}
      <div className="relative bg-[#F0EBE0] text-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/topography.svg')] opacity-10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Welkom bij Spaans op reis
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
              Leer Spaans op een leuke en interactieve manier met woorden, gesprekken en games
            </p>
          </div>
        </div>
      </div>

      {/* Word of the Day Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <WordOfTheDayCard word={wordOfTheDay} category={category} />
      </section>

      {/* Navigation Cards Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Begin je leerreis
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Kies waar je mee wilt starten en ontdek de kracht van spelenderwijs Spaans leren
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {navigationCards.map((card, index) => (
            <NavigationCard
              key={card.id}
              title={card.title}
              category={card.category}
              href={card.href}
              coverImage={card.coverImage}
              priority={index < 2}
            />
          ))}
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-[#F0EBE0] text-gray-900 py-16 md:py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar om te beginnen?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Start vandaag nog en ontdek hoe leuk Spaans leren kan zijn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/woorden"
              className="px-8 py-4 bg-orange-600 text-white rounded-full font-bold hover:bg-orange-700 transition-colors shadow-xl text-lg"
            >
              Start met Woorden Leren
            </Link>
            <Link
              href="/games"
              className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-900 rounded-full font-bold hover:bg-gray-50 transition-colors text-lg"
            >
              Oefen met Games
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
