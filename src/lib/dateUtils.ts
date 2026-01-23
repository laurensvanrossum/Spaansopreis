/**
 * Date utility functions for blog post filtering
 * Uses Amsterdam timezone (Europe/Amsterdam) for consistency
 */

/**
 * Gets the current date in Amsterdam timezone (Europe/Amsterdam)
 * Returns the date at midnight (00:00:00) for consistent comparison
 */
export function getAmsterdamToday(): Date {
  const now = new Date();
  
  // Convert to Amsterdam timezone string
  const amsterdamDateString = now.toLocaleString('en-US', {
    timeZone: 'Europe/Amsterdam',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  
  // Parse the date (format: MM/DD/YYYY)
  const [month, day, year] = amsterdamDateString.split('/');
  
  // Return date at midnight for consistent comparison
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day), 0, 0, 0, 0);
}

/**
 * Checks if a post's publish date is today or in the past (Amsterdam timezone)
 * @param postDate - The post's publish date in YYYY-MM-DD format
 * @returns true if the post should be visible, false if it's a future post
 */
export function isPostPublished(postDate: string): boolean {
  const today = getAmsterdamToday();
  const publishDate = new Date(postDate + 'T00:00:00'); // Ensure consistent parsing
  
  return publishDate <= today;
}

/**
 * Filters an array of blog posts to only include published posts
 * @param posts - Array of blog posts with a 'date' property
 * @returns Filtered array of published posts only
 */
export function filterPublishedPosts<T extends { date: string }>(posts: T[]): T[] {
  return posts.filter(post => isPostPublished(post.date));
}



