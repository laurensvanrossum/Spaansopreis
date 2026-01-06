'use client';

import BlogCardLarge from './BlogCardLarge';

interface BlogPost {
  id: number;
  title: string;
  category: string;
  slug: string;
  coverImage: string;
}

interface BlogGridLargeProps {
  posts: BlogPost[];
}

export default function BlogGridLarge({ posts }: BlogGridLargeProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {posts.map((post, index) => (
        <BlogCardLarge
          key={post.id}
          id={post.id}
          title={post.title}
          category={post.category}
          slug={post.slug}
          coverImage={post.coverImage}
          priority={index < 3}
        />
      ))}
    </div>
  );
}

