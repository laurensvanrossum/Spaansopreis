import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  thumbnail: string;
  author: string;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  // Format date to readable format
  const formattedDate = new Date(post.date).toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
      {/* Thumbnail */}
      <div className="relative h-48 bg-gradient-to-br from-orange-100 to-orange-200 overflow-hidden">
        {/* Placeholder gradient since we don't have actual images */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl opacity-50">
            {post.category === 'Taal' && '💬'}
            {post.category === 'Reistips' && '✈️'}
            {post.category === 'Cultuur' && '🎭'}
            {post.category === 'Leren' && '📚'}
            {post.category === 'Spaans leren' && '📚'}
          </span>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Date and Reading Time */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <time dateTime={post.date} className="flex items-center gap-1">
            <span>📅</span>
            <span>{formattedDate}</span>
          </time>
          <span className="flex items-center gap-1">
            <span>⏱️</span>
            <span>5 min</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Read More Link */}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors group/link"
          aria-label={`Lees meer over ${post.title}`}
        >
          <span>Lees meer</span>
          <span className="group-hover/link:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      {/* Author */}
      <div className="px-6 pb-4 pt-2 border-t border-gray-100">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
            S
          </span>
          <span>{post.author}</span>
        </div>
      </div>
    </article>
  );
}

