# Word of the Day Feature

## Overview

The "Woord van de dag" (Word of the Day) feature displays a different Spanish-Dutch word pair each day on the homepage. All users see the same word on the same day using a deterministic selection algorithm.

## How It Works

### 1. **Deterministic Selection**
- Uses the current date (YYYY-MM-DD format) as the seed
- Hashes the date to generate a consistent number
- Uses modulo operation to select a word index
- Same date always produces the same word

### 2. **Data Source**
- Uses the exact same vocabulary data as the `/woorden` page
- No data duplication - all words come from the existing JSON files
- Includes 21 categories with 490+ total words

### 3. **Display**
- Shows Spanish word, Dutch translation, and example sentences
- Displays the category icon and name
- Fully responsive design
- Matches the site's orange color scheme

## Files

### Core Utility
- **`src/utils/wordOfTheDay.ts`**
  - `getWordOfTheDay(words: Word[]): Word | null` - Main function
  - `getAllWords(categories: CategoryData[]): Word[]` - Flatten categories
  - `getCategoryForWord(word: Word, categories: CategoryData[]): { name, icon } | null` - Find category

### Component
- **`src/components/WordOfTheDayCard.tsx`**
  - Displays the word of the day
  - Handles fallback when no words available
  - Responsive design for all devices

### Integration
- **`src/app/page.tsx`**
  - Homepage integration
  - Imports all vocabulary data
  - Passes word to WordOfTheDayCard component

### Testing
- **`src/utils/wordOfTheDay.test.ts`**
  - Test suite for verification
  - Tests deterministic behavior
  - Tests edge cases

## Algorithm Details

### Date Hashing
```typescript
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}
```

### Word Selection
```typescript
const todayString = getTodayString(); // e.g., "2025-11-28"
const hash = hashString(todayString);
const index = hash % words.length;
return words[index];
```

## Edge Cases Handled

1. **No words available**: Shows fallback message
2. **Empty array**: Returns null safely
3. **Date rollover**: Works correctly across day boundaries
4. **Different timezones**: Uses local date, so may differ by timezone

## Benefits

✅ **Deterministic** - Same word for all users on the same day
✅ **No storage needed** - No database or caching required
✅ **Automatic rotation** - Changes daily without manual intervention
✅ **Uses existing data** - No duplication, single source of truth
✅ **Performant** - Simple hash calculation, instant result
✅ **Testable** - Easy to verify and test

## Future Enhancements

Possible improvements:
- Add caching for performance (though already very fast)
- Track user's seen words to avoid repeats
- Allow manual refresh to see tomorrow's word
- Add sharing functionality ("Check out today's word!")
- Add word history view

## Examples

### Example Output (November 28, 2025)
```
Woord van de dag: "Gracias" → "Dank je"
Category: Begroetingen 👋
Example: "Muchas gracias por tu ayuda."
         "Heel erg bedankt voor je hulp."
```

The word changes automatically at midnight (local time).




