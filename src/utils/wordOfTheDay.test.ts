/**
 * Test file for Word of the Day utility
 * Run this to verify the deterministic selection works correctly
 */

import { getWordOfTheDay, getAllWords, getCategoryForWord, Word, CategoryData } from './wordOfTheDay';

// Mock data for testing
const mockCategories: CategoryData[] = [
  {
    category: 'Test Category 1',
    icon: '📚',
    words: [
      {
        id: 1,
        spanish: 'Hola',
        dutch: 'Hallo',
        exampleSpanish: '¡Hola! ¿Cómo estás?',
        exampleDutch: 'Hallo! Hoe gaat het?'
      },
      {
        id: 2,
        spanish: 'Adiós',
        dutch: 'Tot ziens',
        exampleSpanish: 'Adiós, hasta luego.',
        exampleDutch: 'Tot ziens, tot later.'
      }
    ]
  },
  {
    category: 'Test Category 2',
    icon: '✈️',
    words: [
      {
        id: 3,
        spanish: 'Gracias',
        dutch: 'Dank je',
        exampleSpanish: 'Muchas gracias por tu ayuda.',
        exampleDutch: 'Heel erg bedankt voor je hulp.'
      }
    ]
  }
];

// Test functions
function testGetAllWords() {
  console.log('Testing getAllWords...');
  const allWords = getAllWords(mockCategories);
  console.log(`✓ Total words: ${allWords.length}`);
  console.log(`✓ Expected: 3, Got: ${allWords.length}`);
  console.assert(allWords.length === 3, 'Should have 3 words total');
  console.log('');
}

function testGetWordOfTheDay() {
  console.log('Testing getWordOfTheDay...');
  const allWords = getAllWords(mockCategories);
  const word = getWordOfTheDay(allWords);
  console.log(`✓ Word selected: ${word?.spanish} (${word?.dutch})`);
  console.assert(word !== null, 'Should return a word');
  console.log('');
}

function testDeterministic() {
  console.log('Testing deterministic selection...');
  const allWords = getAllWords(mockCategories);
  
  // Call multiple times on the same day
  const word1 = getWordOfTheDay(allWords);
  const word2 = getWordOfTheDay(allWords);
  const word3 = getWordOfTheDay(allWords);
  
  console.log(`✓ First call: ${word1?.spanish}`);
  console.log(`✓ Second call: ${word2?.spanish}`);
  console.log(`✓ Third call: ${word3?.spanish}`);
  
  console.assert(
    word1?.id === word2?.id && word2?.id === word3?.id,
    'Should return the same word on multiple calls'
  );
  console.log('✓ Same word returned on all calls');
  console.log('');
}

function testEmptyArray() {
  console.log('Testing empty array...');
  const word = getWordOfTheDay([]);
  console.log(`✓ Result: ${word === null ? 'null (correct)' : 'unexpected value'}`);
  console.assert(word === null, 'Should return null for empty array');
  console.log('');
}

function testGetCategoryForWord() {
  console.log('Testing getCategoryForWord...');
  const allWords = getAllWords(mockCategories);
  const word = allWords[0]; // Get first word
  const category = getCategoryForWord(word, mockCategories);
  console.log(`✓ Word: ${word.spanish}`);
  console.log(`✓ Category: ${category?.name} ${category?.icon}`);
  console.assert(category !== null, 'Should find category for word');
  console.log('');
}

// Run all tests
console.log('=== Word of the Day Utility Tests ===\n');
testGetAllWords();
testGetWordOfTheDay();
testDeterministic();
testEmptyArray();
testGetCategoryForWord();
console.log('=== All tests completed ===');



