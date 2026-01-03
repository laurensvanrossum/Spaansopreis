'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface BlogCardLargeProps {
  id: number;
  title: string;
  category: string;
  slug: string;
  coverImage: string;
}

export default function BlogCardLarge({ title, category, slug, coverImage }: BlogCardLargeProps) {
  return (
    <Link href={`/spaans-leren/${slug}`}>
      <motion.article
        className="relative h-96 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Full Image Background */}
        <div className="absolute inset-0">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority
          />
          
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>

        {/* Category Pill - Top Left */}
        <div className="absolute top-6 left-6 z-10">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md text-white text-sm font-semibold rounded-full">
            {category}
          </span>
        </div>

        {/* Title - Bottom Left */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight group-hover:text-orange-300 transition-colors duration-300">
            {title}
          </h3>
        </div>
      </motion.article>
    </Link>
  );
}

