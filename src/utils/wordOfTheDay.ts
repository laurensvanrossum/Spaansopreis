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
 * Get today's date in Amsterdam timezone (Europe/Amsterdam)
 * @returns Date string in YYYY-MM-DD format
 */
function getTodayString(): string {
  // Use Amsterdam timezone to ensure consistent date across users
  const now = new Date();
  const amsterdamDateString = now.toLocaleString('en-US', {
    timeZone: 'Europe/Amsterdam',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  
  // Parse the date (format: MM/DD/YYYY)
  const [month, day, year] = amsterdamDateString.split('/');
  
  // Return in YYYY-MM-DD format
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}

/**
 * Get the Word of the Day
 * Uses a deterministic approach: hash today's date and use modulo to select a word
 * Excludes number categories from selection
 * @param words - Array of all available words
 * @returns The selected word, or null if no words exist
 */
export function getWordOfTheDay(words: Word[]): Word | null {
  // Edge case: no words available
  if (!words || words.length === 0) {
    return null;
  }

  // Get today's date as a string (Amsterdam timezone)
  const todayString = getTodayString();
  
  // Hash the date to get a deterministic number
  const hash = hashString(todayString);
  
  // Use modulo to select a word index
  const index = hash % words.length;
  
  return words[index];
}

/**
 * Flatten all words from multiple categories into a single array
 * Excludes numbers category from word of the day selection
 * @param categories - Array of category data
 * @returns Flat array of all words (excluding numbers)
 */
export function getAllWords(categories: CategoryData[]): Word[] {
  // Filter out the "Getallen" (numbers) category
  const categoriesWithoutNumbers = categories.filter(
    category => category.category !== 'Getallen' && category.category !== 'Numbers'
  );
  
  return categoriesWithoutNumbers.flatMap(category => category.words);
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


