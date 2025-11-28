import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BlogCard from '@/components/BlogCard';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Blog - Spaans op reis | Tips en Lessen voor je Spaanse Reis',
  description: 'Ontdek handige tips, reisadviezen en Spaanse taallessen om je reis naar Spanje en Latijns-Amerika onvergetelijk te maken. Leer de taal en cultuur kennen.',
  keywords: 'Spaans leren, reistips Spanje, Spaanse taal, reisadvies, Latijns-Amerika, taallessen',
  openGraph: {
    title: 'Blog - Spaans op reis',
    description: 'Handige tips en lessen voor je Spaanse reis',
    type: 'website',
    url: 'https://spaansopreis.nl/blog',
  },
};

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Waarom Spaans leren zoveel leuker én handiger is dan je denkt',
    excerpt: 'Spaans staat al jaren in de top van populairste talen om te leren. Ontdek waarom Spaans leren zo\'n slimme én plezierige keuze is.',
    date: '2025-11-28',
    category: 'Spaans leren',
    thumbnail: '/blog/spaans-leren.jpg',
    author: 'Jasmijn de Jong',
    slug: 'waarom-spaans-leren-leuker-en-handiger-is',
  },
];

// JSON-LD Schema.org markup for SEO
const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Spaans op reis Blog',
  description: 'Tips en lessen voor je Spaanse reis',
  url: 'https://spaansopreis.nl/blog',
  blogPost: blogPosts.map(post => ({
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Spaans op reis',
    },
    articleSection: post.category,
  })),
};

export default function BlogPage() {
  // Get unique categories for filtering
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  const totalPosts = blogPosts.length;

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        {/* Header Section */}
        <header className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                📚 Spaans op reis Blog
              </h1>
              <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
                Binnenkort: handige tips, reisadviezen en Spaanse taallessen voor je perfecte reis
              </p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Empty State */}
          {blogPosts.length === 0 ? (
            <section className="text-center py-20">
              <div className="max-w-2xl mx-auto">
                <div className="text-8xl mb-6">📝</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Binnenkort Beschikbaar
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  We zijn hard aan het werk om inspirerende artikelen, tips en reisadviezen voor je te schrijven.
                </p>
                <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 mb-8">
                  <p className="text-gray-700 mb-4">
                    In de tussentijd kun je alvast aan de slag met:
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      href="/woorden"
                      className="px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                    >
                      📚 Woordenlijst
                    </Link>
                    <Link
                      href="/gesprekken"
                      className="px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                    >
                      💬 Gesprekken
                    </Link>
                    <Link
                      href="/games"
                      className="px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                    >
                      🎮 Games
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <>
              {/* Categories Filter */}
              <section aria-label="Blog categorieën" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Ontdek per Categorie
                </h2>
                <div className="flex flex-wrap justify-center gap-3">
                  <button
                    className="px-6 py-2 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-colors"
                    aria-label="Toon alle artikelen"
                  >
                    Alle Artikelen
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      className="px-6 py-2 bg-white text-orange-600 border-2 border-orange-600 rounded-full font-semibold hover:bg-orange-50 transition-colors"
                      aria-label={`Filter op ${category}`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </section>

              {/* Blog Posts Grid */}
              <section aria-label="Blog artikelen" className="mb-12">
                <h2 className="sr-only">Recente Artikelen</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </section>
            </>
          )}

          {/* Newsletter CTA - Only show when there are blog posts */}
          {blogPosts.length > 0 && (
            <section
              aria-labelledby="newsletter-heading"
              className="bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
            >
              <h2 id="newsletter-heading" className="text-3xl font-bold mb-4">
                📬 Blijf op de Hoogte!
              </h2>
              <p className="text-xl text-orange-100 mb-6 max-w-2xl mx-auto">
                Ontvang nieuwe artikelen, tips en exclusieve Spaanse lessen direct in je inbox
              </p>
              <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Je e-mailadres"
                  className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-orange-300"
                  aria-label="E-mailadres voor nieuwsbrief"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-white text-orange-600 rounded-full font-bold hover:bg-orange-50 transition-colors shadow-lg"
                  aria-label="Inschrijven voor nieuwsbrief"
                >
                  Inschrijven
                </button>
              </form>
              <p className="text-sm text-orange-100 mt-4">
                Geen spam, alleen nuttige content. Uitschrijven kan altijd.
              </p>
            </section>
          )}
        </main>

        {/* Footer Info */}
        <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-600">
              <strong>Spaans op reis Blog</strong> - Je bron voor Spaanse taal, cultuur en reistips
            </p>
            <div className="mt-4 flex justify-center gap-6 text-sm text-gray-500">
              <Link href="/" className="hover:text-orange-600 transition-colors">
                Home
              </Link>
              <Link href="/woorden" className="hover:text-orange-600 transition-colors">
                Woorden
              </Link>
              <Link href="/gesprekken" className="hover:text-orange-600 transition-colors">
                Gesprekken
              </Link>
              <Link href="/games" className="hover:text-orange-600 transition-colors">
                Games
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

