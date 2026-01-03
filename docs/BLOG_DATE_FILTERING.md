# Blog Post Date Filtering System

This system ensures that blog posts are only visible on the website if their publish date is today or in the past, using the Amsterdam timezone (`Europe/Amsterdam`).

## Features

✅ **Amsterdam Timezone**: All date comparisons use Amsterdam time for consistency  
✅ **Future Post Blocking**: Posts with future dates are completely hidden  
✅ **404 for Future Posts**: Direct URL access to future posts returns a 404 page  
✅ **SEO Protection**: Future posts are excluded from JSON-LD schema and static generation  
✅ **Related Articles Filter**: Only published posts appear in related articles sections  
✅ **Clean Architecture**: Centralized date logic in reusable utility functions

## File Structure

```
src/
├── lib/
│   ├── dateUtils.ts              # Core date filtering utilities
│   └── __tests__/
│       └── dateUtils.test.ts     # Unit tests for date utilities
├── app/
│   └── blog/
│       ├── page.tsx               # Blog listing page (filters posts)
│       └── [slug]/
│           └── page.tsx           # Individual blog post page (checks publish date)
```

## How It Works

### 1. Date Utilities (`src/lib/dateUtils.ts`)

Three main functions handle all date filtering:

#### `getAmsterdamToday()`
Returns the current date in Amsterdam timezone at midnight (00:00:00) for consistent comparison.

```typescript
const today = getAmsterdamToday();
// Returns: Date object for today in Amsterdam, time set to 00:00:00
```

#### `isPostPublished(postDate: string)`
Checks if a post's publish date is today or in the past.

```typescript
isPostPublished('2024-01-01'); // true (past date)
isPostPublished('2030-12-31'); // false (future date)
```

#### `filterPublishedPosts<T>(posts: T[])`
Filters an array of blog posts to only include published posts.

```typescript
const allPosts = [
  { date: '2024-01-01', title: 'Past Post' },
  { date: '2030-12-31', title: 'Future Post' },
];
const published = filterPublishedPosts(allPosts);
// Returns: [{ date: '2024-01-01', title: 'Past Post' }]
```

### 2. Blog Listing Page (`src/app/blog/page.tsx`)

```typescript
// Store all posts (including future ones)
const allBlogPosts = [...];

export default function BlogPage() {
  // Filter to only show published posts
  const blogPosts = filterPublishedPosts(allBlogPosts);
  
  // Categories and JSON-LD schema only include published posts
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  const blogSchema = { /* uses blogPosts */ };
  
  // Render only published posts
  return (/* JSX with blogPosts */);
}
```

### 3. Individual Blog Post Page (`src/app/blog/[slug]/page.tsx`)

```typescript
// Store all posts (including future ones)
const allBlogPosts = [...];

// Static generation only creates pages for published posts
export async function generateStaticParams() {
  const publishedPosts = filterPublishedPosts(allBlogPosts);
  return publishedPosts.map(post => ({ slug: post.slug }));
}

// Metadata returns 404 info for unpublished posts
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = allBlogPosts.find(p => p.slug === slug);
  
  if (!post || !isPostPublished(post.date)) {
    return { title: 'Blog niet gevonden - Spaans op reis' };
  }
  
  return { /* metadata for published post */ };
}

// Page component returns 404 for unpublished posts
export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = allBlogPosts.find(p => p.slug === slug);
  
  if (!post || !isPostPublished(post.date)) {
    notFound(); // Shows 404 page
  }
  
  // Only published posts get rendered
  return (/* JSX */);
}
```

## Adding New Blog Posts

To add a new blog post with a scheduled publish date:

1. Add the post to `allBlogPosts` array in both files:
   - `src/app/blog/page.tsx`
   - `src/app/blog/[slug]/page.tsx`

2. Set the `date` field to your desired publish date in `YYYY-MM-DD` format:

```typescript
const allBlogPosts = [
  {
    id: 1,
    title: 'My New Post',
    excerpt: 'This post will publish on December 25, 2025',
    date: '2025-12-25', // Publish date
    category: 'Spaans leren',
    author: 'Author Name',
    slug: 'my-new-post',
    content: `<p>Post content here...</p>`,
  },
];
```

3. The post will automatically become visible on December 25, 2025 (Amsterdam time)

## Testing

Unit tests are included to verify the date filtering logic:

```bash
npm test src/lib/__tests__/dateUtils.test.ts
```

Tests cover:
- Amsterdam timezone date retrieval
- Past date detection
- Future date detection
- Array filtering
- Edge cases (today's date, empty arrays, etc.)

## Important Notes

⚠️ **Timezone Consistency**: All dates use Amsterdam timezone to ensure consistent behavior regardless of server location

⚠️ **Date Format**: Always use `YYYY-MM-DD` format for post dates (e.g., `2025-12-25`)

⚠️ **Build Time**: Static pages are generated at build time. For future posts to appear, you need to rebuild the site after their publish date passes

⚠️ **SEO**: Future posts are not indexed by search engines since they're not included in the JSON-LD schema

## Troubleshooting

**Q: My post isn't showing up even though the date is today**  
A: Check that your server/build environment is in the correct timezone or using Amsterdam time. The `getAmsterdamToday()` function handles this automatically.

**Q: Can I schedule posts to publish at a specific time of day?**  
A: Currently, the system only checks the date (not time). All posts publish at midnight Amsterdam time. To add time-based publishing, modify the `isPostPublished` function.

**Q: Future posts are still accessible via direct URL**  
A: Make sure you've updated both blog files (`page.tsx` and `[slug]/page.tsx`) and that the site has been rebuilt after the changes.

## Future Enhancements

Potential improvements to consider:

- 🕐 Time-based publishing (publish at specific hours, not just dates)
- 📅 Post scheduling interface for content managers
- 🔔 Notification system when posts go live
- 📊 Preview mode for viewing future posts (for admins/editors)
- 🗄️ Move blog data to a CMS or database for easier management

