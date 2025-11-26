'use client';

import { useState } from 'react';
import CategorySection from '@/components/CategorySection';

// Import all vocabulary data
import greetingsData from '../../../data/greetings.json';
import airportData from '../../../data/airport.json';
import hotelData from '../../../data/hotel.json';
import transportData from '../../../data/transport.json';
import foodData from '../../../data/food.json';
import directionsData from '../../../data/directions.json';
import emergencyData from '../../../data/emergency.json';
import shoppingData from '../../../data/shopping.json';
import numbersData from '../../../data/numbers.json';
import weatherData from '../../../data/weather.json';
import activitiesData from '../../../data/activities.json';
import accommodationData from '../../../data/accommodation.json';
import moneyData from '../../../data/money.json';
import communicationData from '../../../data/communication.json';
import healthData from '../../../data/health.json';
import documentsData from '../../../data/documents.json';
import clothingData from '../../../data/clothing.json';
import colorsData from '../../../data/colors.json';
import familyData from '../../../data/family.json';
import bodyData from '../../../data/body.json';
import groenteEnFruitData from '../../../data/groente-en-fruit.json';

export default function Woorden() {
  const [showExamples, setShowExamples] = useState(true);

  const categories = [
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

  const totalWords = categories.reduce((sum, cat) => sum + cat.words.length, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Spaanse Woorden
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Leer de top {totalWords} meest bruikbare Spaanse reiswoorden voor Nederlandstaligen
          </p>
          
          {/* Stats and Toggle */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="bg-orange-100 px-4 py-2 rounded-full">
              <span className="text-orange-700 font-semibold">
                📚 {totalWords} woorden
              </span>
            </div>
            <div className="bg-orange-100 px-4 py-2 rounded-full">
              <span className="text-orange-700 font-semibold">
                📂 {categories.length} categorieën
              </span>
            </div>
            <div className="bg-orange-100 px-4 py-2 rounded-full">
              <span className="text-orange-700 font-semibold">
                🎯 A1/A2 niveau
              </span>
            </div>
            
            {/* Toggle Examples Button */}
            <button
              onClick={() => setShowExamples(!showExamples)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                showExamples
                  ? 'bg-orange-600 text-white hover:bg-orange-700'
                  : 'bg-white text-orange-600 border-2 border-orange-600 hover:bg-orange-50'
              }`}
            >
              {showExamples ? '👁️ Verberg voorbeelden' : '👁️ Toon voorbeelden'}
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-4">
          {categories.map((categoryData, index) => (
            <CategorySection key={index} data={categoryData} showExamples={showExamples} />
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Over deze woordenlijst
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                🎯 Speciaal voor reizigers
              </h3>
              <p>
                Deze woorden zijn zorgvuldig geselecteerd voor Nederlandse reizigers naar
                Spaanstalige landen. Ze dekken de meest voorkomende situaties tijdens je reis.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                📖 A1/A2 niveau
              </h3>
              <p>
                Alle woorden en voorbeeldzinnen zijn op beginnersniveau (A1/A2 volgens het ERK),
                perfect om mee te starten met Spaans leren.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

