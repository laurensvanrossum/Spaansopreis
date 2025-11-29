/**
 * Utility for selecting the "Word of the Day"
 * Uses a deterministic approach based on the current date
 * so all users see the same word on the same day
 */

export interface Word {
  id: number;
  spanish: string;
  dutch: string;
  exampleSpanish: string;
  exampleDutch: string;
}

export interface CategoryData {
  category: string;
  icon: string;
  words: Word[];
}

/**
 * Simple hash function to convert a date string to a number
 * @param str - Date string in YYYY-MM-DD format
 * @returns A hash number
 */
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

/**
 * Get today's date in YYYY-MM-DD format
 * @returns Date string
 */
function getTodayString(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Get the Word of the Day
 * Uses a deterministic approach: hash today's date and use modulo to select a word
 * @param words - Array of all available words
 * @returns The selected word, or null if no words exist
 */
export function getWordOfTheDay(words: Word[]): Word | null {
  // Edge case: no words available
  if (!words || words.length === 0) {
    return null;
  }

  // Get today's date as a string
  const todayString = getTodayString();
  
  // Hash the date to get a deterministic number
  const hash = hashString(todayString);
  
  // Use modulo to select a word index
  const index = hash % words.length;
  
  return words[index];
}

/**
 * Flatten all words from multiple categories into a single array
 * @param categories - Array of category data
 * @returns Flat array of all words
 */
export function getAllWords(categories: CategoryData[]): Word[] {
  return categories.flatMap(category => category.words);
}

/**
 * Get the category name for a specific word
 * @param word - The word to find
 * @param categories - Array of category data
 * @returns Category name or null if not found
 */
export function getCategoryForWord(word: Word, categories: CategoryData[]): { name: string; icon: string } | null {
  for (const category of categories) {
    if (category.words.some(w => w.id === word.id)) {
      return { name: category.category, icon: category.icon };
    }
  }
  return null;
}

