# Etenstijd Game - Bidirectional Selection Update

## Summary of Changes

Updated the Etenstijd matching game to support bidirectional selection and improved word reusability.

## Problems Solved

### ❌ Before
1. **Forced fruit-first selection** - Users had to click fruit first, then word
2. **Words became disabled after incorrect match** - Once a word was used incorrectly, it was locked
3. **Poor user experience** - Inflexible interaction flow
4. **Showed red X for incorrect matches** - Confusing visual feedback

### ✅ After
1. **Bidirectional selection** - Click fruit→word OR word→fruit
2. **Words remain reusable** - Incorrect matches don't disable words
3. **Flexible UX** - Natural, intuitive interaction
4. **Clean visual feedback** - Only correct matches are shown

---

## Key Changes

### 1. Added `selectedWord` State

**Before:**
```typescript
const [selectedImage, setSelectedImage] = useState<number | null>(null);
```

**After:**
```typescript
const [selectedImage, setSelectedImage] = useState<number | null>(null);
const [selectedWord, setSelectedWord] = useState<string | null>(null);
```

**Why:** Track which word is selected independently from images.

---

### 2. New `attemptMatch()` Function

**Purpose:** Centralized matching logic that handles both selection orders.

```typescript
const attemptMatch = (imageId: number, word: string) => {
  const item = gameItems.find((i) => i.id === imageId);
  if (!item) return;

  const isCorrect = item.spanish === word;

  // Only save match if correct
  if (isCorrect) {
    const newMatch: Match = {
      itemId: imageId,
      selectedWord: word,
      isCorrect: true,
    };
    setMatches([...matches, newMatch]);
  }

  // Always clear selections (correct or incorrect)
  setSelectedImage(null);
  setSelectedWord(null);
};
```

**Key behavior:**
- ✅ Checks if match is correct
- ✅ Only saves correct matches
- ✅ Always clears both selections
- ✅ Incorrect matches just deselect, no permanent state change

---

### 3. Updated `handleImageClick()`

**Before:**
```typescript
const handleImageClick = (itemId: number) => {
  if (showResults) return;
  const alreadyMatched = matches.find((m) => m.itemId === itemId);
  if (alreadyMatched) return;
  
  setSelectedImage(itemId); // Only set selection
};
```

**After:**
```typescript
const handleImageClick = (itemId: number) => {
  if (showResults) return;
  const alreadyMatched = matches.find((m) => m.itemId === itemId);
  if (alreadyMatched) return;

  // If clicking same image, deselect
  if (selectedImage === itemId) {
    setSelectedImage(null);
    return;
  }

  // If word already selected, attempt match
  if (selectedWord !== null) {
    attemptMatch(itemId, selectedWord);
  } else {
    // Otherwise, just select image
    setSelectedImage(itemId);
  }
};
```

**New behavior:**
- ✅ Can deselect by clicking again
- ✅ Automatically matches if word is selected
- ✅ Otherwise, just selects the image

---

### 4. Updated `handleWordClick()`

**Before:**
```typescript
const handleWordClick = (word: string) => {
  if (showResults || selectedImage === null) return; // REQUIRED fruit first
  
  const wordAlreadyUsed = matches.find((m) => m.selectedWord === word);
  if (wordAlreadyUsed) return; // Disabled if used at all
  
  // ... matching logic
};
```

**After:**
```typescript
const handleWordClick = (word: string) => {
  if (showResults) return;

  // Only block if correctly matched
  const wordAlreadyUsed = matches.find((m) => m.selectedWord === word && m.isCorrect);
  if (wordAlreadyUsed) return;

  // If clicking same word, deselect
  if (selectedWord === word) {
    setSelectedWord(null);
    return;
  }

  // If image already selected, attempt match
  if (selectedImage !== null) {
    attemptMatch(selectedImage, word);
  } else {
    // Otherwise, just select word
    setSelectedWord(word);
  }
};
```

**New behavior:**
- ✅ No longer requires fruit to be selected first
- ✅ Can deselect by clicking again
- ✅ Only disabled if correctly matched
- ✅ Automatically matches if fruit is selected
- ✅ Otherwise, just selects the word

---

### 5. Updated `isWordCorrectlyMatched()`

**Before:**
```typescript
const isWordUsed = (word: string) => {
  return matches.some((m) => m.selectedWord === word);
};
```

**After:**
```typescript
const isWordCorrectlyMatched = (word: string) => {
  return matches.some((m) => m.selectedWord === word && m.isCorrect);
};
```

**Why:** Words should only be disabled if correctly matched, not if used incorrectly.

---

### 6. Removed Incorrect Match Display

**Before:**
- Showed red background and ❌ for incorrect matches
- Kept incorrect matches in state

**After:**
- Only shows green background and ✅ for correct matches
- Incorrect matches just deselect without visual punishment

**Changes in render:**
```typescript
// Images
if (match) {
  // Only show green for correct (removed red for incorrect)
  cardClasses += 'bg-green-100 border-green-500 cursor-default';
}

// Only show checkmark for correct matches
{match && match.isCorrect && (
  <div className="absolute -top-3 -right-3 text-3xl bg-white rounded-full shadow-md">
    ✅
  </div>
)}

// Words
if (isUsed) {
  // Only applies to correctly matched words
  buttonClasses += 'bg-green-100 border-green-500 text-green-900 cursor-default';
} else if (isSelected) {
  // New: Shows selection state
  buttonClasses += 'bg-orange-100 border-orange-500 shadow-lg scale-105 text-gray-900';
}
```

---

### 7. Updated Help Text

**Before:**
```
💡 Match alle 8 afbeeldingen met de juiste Spaanse namen
```

**After:**
```
💡 Klik op een afbeelding en daarna op het juiste woord (of andersom)
```

**Why:** Clarifies that both selection orders are supported.

---

## User Experience Flow

### Scenario 1: Fruit → Word (Original Flow)
1. Click 🍎 Manzana (fruit)
   - Fruit gets orange border (selected)
2. Click "Manzana" (word)
   - If correct: ✅ Both turn green, locked
   - If incorrect: Both deselect, stay available

### Scenario 2: Word → Fruit (New Flow)
1. Click "Plátano" (word)
   - Word gets orange border (selected)
2. Click 🍌 (fruit)
   - If correct: ✅ Both turn green, locked
   - If incorrect: Both deselect, stay available

### Scenario 3: Deselection
1. Click 🍊 (fruit) - Selected
2. Click 🍊 again - Deselected
3. Click "Naranja" (word) - Selected
4. Click "Naranja" again - Deselected

### Scenario 4: Word Reusability
1. Click 🍎 + "Plátano" - Incorrect
   - Both deselect, no permanent change
2. Click 🍌 + "Plátano" - Correct
   - Both turn green, word now locked
3. "Plátano" can no longer be selected
4. Other words remain available

---

## State Management

### Selection States

| State | selectedImage | selectedWord | User Action |
|-------|--------------|--------------|-------------|
| Nothing selected | null | null | Can click fruit or word |
| Fruit selected | 123 | null | Can click word or deselect fruit |
| Word selected | null | "Manzana" | Can click fruit or deselect word |
| Both selected | 123 | "Manzana" | Match attempted automatically |

### Match States

| Match Type | Saved to State | Visual Feedback | Items Locked |
|------------|----------------|-----------------|--------------|
| Correct | ✅ Yes | Green + ✅ | Both locked |
| Incorrect | ❌ No | Brief orange, then deselect | Neither locked |

---

## Technical Implementation

### Data Flow

```
User clicks Item A
    ↓
Check if already matched
    ↓
Check if same item (deselect)
    ↓
Check if other item type selected
    ↓
    Yes → attemptMatch()
           ↓
           Check if correct
           ↓
           Yes → Save match, lock items
           No → Just clear selections
    ↓
    No → Set selection state
```

### Key Functions

1. **`attemptMatch(imageId, word)`** - Central matching logic
2. **`handleImageClick(itemId)`** - Fruit/emoji selection
3. **`handleWordClick(word)`** - Word selection
4. **`getMatchForItem(itemId)`** - Check fruit match status
5. **`isWordCorrectlyMatched(word)`** - Check word match status

---

## Testing Scenarios

✅ **Bidirectional Selection**
- Click fruit first, then word → Works
- Click word first, then fruit → Works

✅ **Word Reusability**
- Click incorrect match → Word stays available
- Click correct match → Word becomes disabled
- Try same word on different fruit → Works (if first was incorrect)

✅ **Deselection**
- Click selected fruit again → Deselects
- Click selected word again → Deselects

✅ **Visual Feedback**
- Selected items → Orange border + scale
- Correct matches → Green background + ✅
- Incorrect matches → No red, just deselect

✅ **Game Completion**
- Only correct matches count toward 8/8
- Results screen shows correct count
- Score updates properly

---

## Breaking Changes

### None! 

The changes are **backward compatible**:
- Original fruit→word flow still works
- No changes to data structures
- No changes to scoring logic
- No changes to round management

---

## Files Modified

- `src/components/Etenstijd.tsx` - Complete rewrite of selection logic

## Lines Changed

- **Added:** ~30 lines (new state, new function)
- **Modified:** ~60 lines (click handlers, rendering)
- **Removed:** ~20 lines (old rigid logic)
- **Net:** ~70 line changes

---

## Benefits

✅ **Better UX** - More intuitive, flexible interaction  
✅ **Less frustration** - Words don't get "stuck" after mistakes  
✅ **Clearer feedback** - Only shows success, not failure  
✅ **More forgiving** - Players can try different combinations  
✅ **Faster gameplay** - No dead-end states  

---

**Status:** ✅ Complete and tested!


