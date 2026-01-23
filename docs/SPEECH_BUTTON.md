# Speech/Voice Button Implementation

## Overview

The speech button feature allows users to hear the correct Spanish pronunciation for words and sentences throughout the website. This feature is implemented consistently across both the `/woorden` (words) and `/gesprekken` (conversations) pages.

## Components

### SpeechButton Component

**Location:** `src/components/SpeechButton.tsx`

A reusable, accessible speech button component that uses the Web Speech API to speak Spanish text.

#### Features

- ✅ **Text-to-Speech** - Uses native browser `SpeechSynthesisUtterance` API
- ✅ **Spanish pronunciation** - Default language: `es-ES`
- ✅ **Learner-friendly rate** - Speaks at 0.9x speed for clarity
- ✅ **Visual feedback** - Shows stop icon when playing
- ✅ **Smart cancellation** - Stops current speech when playing new audio
- ✅ **Three sizes** - Small, medium, large
- ✅ **Accessible** - Proper ARIA labels and tooltips
- ✅ **Responsive** - Touch and click friendly

#### Props

```typescript
interface SpeechButtonProps {
  text: string;           // Text to speak (required)
  language?: string;      // Language code (default: 'es-ES')
  rate?: number;          // Speech rate (default: 0.9)
  className?: string;     // Additional CSS classes
  size?: 'sm' | 'md' | 'lg'; // Button size (default: 'md')
}
```

#### Usage

```typescript
import SpeechButton from '@/components/SpeechButton';

// Basic usage
<SpeechButton text="Hola" />

// With custom props
<SpeechButton 
  text="Buenos días" 
  size="lg" 
  rate={0.8}
  className="ml-2"
/>
```

## Implementation Details

### Button States

1. **Default State**
   - White background
   - Orange text and icon
   - Speaker icon visible
   - Hover: Orange background (light)

2. **Playing State**
   - Orange background (dark)
   - White text and icon
   - Stop icon (square) visible
   - Tooltip: "Stop audio"

3. **Disabled State**
   - Not currently implemented (all buttons active)

### Visual Design

**Consistent with Gesprekken page:**
- Same icon (speaker/stop)
- Same colors (orange theme)
- Same hover/active states
- Same shadow styling
- Same transition effects

### Sizes

- **Small (`sm`)** - `w-7 h-7` - Used for example sentences
- **Medium (`md`)** - `w-9 h-9` - Default, used for main words
- **Large (`lg`)** - `w-10 h-10` - Available for emphasis

## Pages Using SpeechButton

### 1. Woorden Page (`/woorden`)

**Component:** `src/components/VocabularyCard.tsx`

Each vocabulary card now has:
- **Main word button** - Medium size, speaks the Spanish word
- **Example sentence button** - Small size, speaks the example sentence (when examples are shown)

```typescript
// Main word
<SpeechButton text={word.spanish} size="md" />

// Example sentence
<SpeechButton text={word.exampleSpanish} size="sm" />
```

### 2. Gesprekken Page (`/gesprekken`)

**Component:** `src/components/ConversationCard.tsx`

Each sentence in conversations has:
- **Sentence button** - Medium size, speaks the Spanish sentence

```typescript
<SpeechButton text={sentence.spanish} size="md" />
```

## Technical Implementation

### Web Speech API

Uses the browser's native Speech Synthesis API:

```typescript
const utterance = new SpeechSynthesisUtterance(text);
utterance.lang = 'es-ES';  // Spanish (Spain)
utterance.rate = 0.9;       // 90% speed for learners

window.speechSynthesis.speak(utterance);
```

### State Management

Each button maintains its own playing state:

```typescript
const [isPlaying, setIsPlaying] = useState(false);

// Set to true when speaking starts
// Set to false when:
// - Speech ends naturally (onend)
// - Speech errors (onerror)
// - User clicks stop
// - User starts another speech
```

### Smart Cancellation

When any speech button is clicked:
1. Cancel all ongoing speech: `window.speechSynthesis.cancel()`
2. Start new speech (unless stopping current)

This ensures only one audio plays at a time.

## Browser Compatibility

✅ **Works in all modern browsers:**
- Chrome/Edge (Chromium)
- Firefox
- Safari
- Opera

⚠️ **Note:** Speech quality varies by browser and OS. Chrome typically has the best Spanish voices.

## Accessibility

- **ARIA labels** - Descriptive labels for screen readers
- **Tooltips** - "Speel audio af" / "Stop audio"
- **Keyboard accessible** - Tab navigation + Enter/Space to activate
- **Visual feedback** - Clear playing state indication
- **Focus visible** - Browser default focus outline

## Code Reuse Benefits

✅ **No duplication** - Single SpeechButton component  
✅ **Consistent UX** - Same behavior everywhere  
✅ **Easy maintenance** - One place to update  
✅ **Type safe** - TypeScript interfaces  
✅ **Testable** - Isolated component  

## Future Enhancements

Possible improvements:
- [ ] Volume control
- [ ] Different voice selection
- [ ] Download audio option
- [ ] Repeat/loop functionality
- [ ] Speed control slider
- [ ] Offline audio files fallback
- [ ] Progress indicator for long text
- [ ] Auto-play on card open (optional)

## Testing

To test the speech functionality:

1. **Local testing:**
   ```bash
   npm run dev
   ```
2. Visit `/woorden` or `/gesprekken`
3. Click any speaker icon
4. Verify:
   - Audio plays in Spanish
   - Icon changes to stop icon
   - Only one audio plays at a time
   - Clicking stop works
   - Hover states work

3. **Production testing:**
   - Same tests on live site
   - Test on different browsers
   - Test on mobile devices

## Files Modified/Created

### New Files:
- `src/components/SpeechButton.tsx` - Reusable speech button

### Modified Files:
- `src/components/VocabularyCard.tsx` - Added speech buttons to words
- `src/components/ConversationCard.tsx` - Refactored to use SpeechButton

### Documentation:
- `docs/SPEECH_BUTTON.md` - This file

---

**Status:** ✅ Complete and deployed




