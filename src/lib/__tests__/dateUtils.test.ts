import { getAmsterdamToday, isPostPublished, filterPublishedPosts } from '../dateUtils';

describe('dateUtils', () => {
  describe('getAmsterdamToday', () => {
    it('should return a date at midnight', () => {
      const today = getAmsterdamToday();
      expect(today.getHours()).toBe(0);
      expect(today.getMinutes()).toBe(0);
      expect(today.getSeconds()).toBe(0);
      expect(today.getMilliseconds()).toBe(0);
    });

    it('should return a valid date object', () => {
      const today = getAmsterdamToday();
      expect(today).toBeInstanceOf(Date);
      expect(isNaN(today.getTime())).toBe(false);
    });
  });

  describe('isPostPublished', () => {
    it('should return true for past dates', () => {
      const pastDate = '2024-01-01';
      expect(isPostPublished(pastDate)).toBe(true);
    });

    it('should return false for future dates', () => {
      const futureDate = '2030-12-31';
      expect(isPostPublished(futureDate)).toBe(false);
    });

    it('should handle today correctly', () => {
      const today = getAmsterdamToday();
      const todayString = today.toISOString().split('T')[0];
      expect(isPostPublished(todayString)).toBe(true);
    });
  });

  describe('filterPublishedPosts', () => {
    const testPosts = [
      { id: 1, title: 'Past Post', date: '2024-01-01' },
      { id: 2, title: 'Future Post', date: '2030-12-31' },
      { id: 3, title: 'Another Past Post', date: '2023-06-15' },
    ];

    it('should filter out future posts', () => {
      const published = filterPublishedPosts(testPosts);
      expect(published).toHaveLength(2);
      expect(published.map(p => p.id)).toEqual([1, 3]);
    });

    it('should return empty array if no published posts', () => {
      const futurePosts = [
        { id: 1, title: 'Future Post 1', date: '2030-01-01' },
        { id: 2, title: 'Future Post 2', date: '2031-12-31' },
      ];
      const published = filterPublishedPosts(futurePosts);
      expect(published).toHaveLength(0);
    });

    it('should return all posts if all are published', () => {
      const pastPosts = [
        { id: 1, title: 'Past Post 1', date: '2024-01-01' },
        { id: 2, title: 'Past Post 2', date: '2023-06-15' },
      ];
      const published = filterPublishedPosts(pastPosts);
      expect(published).toHaveLength(2);
    });
  });
});


