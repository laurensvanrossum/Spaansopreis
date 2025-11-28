import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Blog posts data with full content
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
    content: `
      <p>Spaans staat al jaren in de top van populairste talen om te leren. Niet alleen omdat het wereldwijd gesproken wordt, maar vooral omdat de taal toegankelijk, levendig en verrassend leuk is. Veel mensen beginnen uit nieuwsgierigheid, maar blijven leren omdat ze merken hoeveel energie het geeft.</p>
      
      <p>In deze blog ontdek je waarom Spaans leren zo'n slimme én plezierige keuze is.</p>

      <h2>1. Reizen wordt rijker als je een paar woorden Spaans spreekt</h2>
      
      <p>Je hoeft geen vloeiende spreker te zijn om verschil te maken. Met een paar eenvoudige zinnen merk je al dat deuren letterlijk en figuurlijk voor je opengaan.</p>
      
      <p><strong>Je ervaart:</strong></p>
      <ul>
        <li>oprechte reacties van locals</li>
        <li>makkelijker contact in restaurants, winkels en op straat</li>
        <li>toegang tot plekken buiten de typische toeristenroutes</li>
      </ul>
      
      <p>Het gevoel dat iemand je begrijpt, ook als je zinnen nog niet perfect zijn, maakt reizen zóveel leuker.</p>

      <h2>2. Spaans leren is een cadeautje voor je brein</h2>
      
      <p>Een nieuwe taal leren prikkelt je hersenen op een positieve manier. Onderzoek laat zien dat taalverwerving:</p>
      <ul>
        <li>je geheugen versterkt</li>
        <li>multitasking verbetert</li>
        <li>verouderingsprocessen in de hersenen vertraagt</li>
        <li>creativiteit vergroot</li>
      </ul>
      
      <p>Spaans is daarbij extra toegankelijk: veel woorden lijken op het Nederlands of Engels, en de grammatica is logischer dan veel mensen vooraf denken.</p>

      <h2>3. De taal voelt warm en muzikaal</h2>
      
      <p>Spaans heeft iets dat mensen meteen aantrekt. De klanken zijn warm, de ritmes melodieus en de expressie voelt natuurlijk. Denk aan de muziek (salsa, bachata, reggaetón), de manier van spreken en zelfs de humor.</p>
      
      <p>Veel cursisten zeggen dat Spaans leren "verslavend leuk" is—je wilt steeds een stapje verder.</p>

      <h2>4. Je kunt al snel echte gesprekken voeren</h2>
      
      <p>Het mooie aan Spaans: je hoeft geen lange grammaticalijsten te kunnen opdreunen om te communiceren. Met basiszinnen kun je in veel situaties prima uit de voeten:</p>
      <ul>
        <li>iets bestellen in een bar</li>
        <li>een route vragen</li>
        <li>je voorstellen</li>
        <li>een kort gesprekje houden</li>
      </ul>
      
      <p>Dat eerste moment waarop iemand je begrijpt, is vaak het moment dat mensen écht gemotiveerd raken om door te gaan.</p>

      <h2>5. Spaans zorgt voor verbinding</h2>
      
      <p>Taal is meer dan woorden. Dankzij Spaans kun je humor, verhalen, cultuur en emoties begrijpen die anders langs je heen zouden gaan. Het maakt gesprekken spontaner en dieper, en het verbindt je met mensen die je anders nooit had leren kennen.</p>
    `,
  },
];

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Blog niet gevonden - Spaans op reis',
    };
  }

  return {
    title: `${post.title} - Spaans op reis Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // JSON-LD Schema for the blog post
  const articleSchema = {
    '@context': 'https://schema.org',
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
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        {/* Back to Blog Link */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors group text-sm sm:text-base"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Terug naar Blog</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="mb-4 sm:mb-6">
            <span className="inline-block bg-orange-600 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base text-gray-600">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-sm sm:text-base">
                S
              </span>
              <span className="font-medium">{post.author}</span>
            </div>
            <time dateTime={post.date} className="flex items-center gap-2">
              <span>📅</span>
              <span className="text-sm sm:text-base">{formattedDate}</span>
            </time>
            <span className="flex items-center gap-2">
              <span>⏱️</span>
              <span className="text-sm sm:text-base">5 min leestijd</span>
            </span>
          </div>
        </header>

        {/* Featured Image Placeholder */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
            <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl opacity-50">
              {post.category === 'Taal' && '💬'}
              {post.category === 'Reistips' && '✈️'}
              {post.category === 'Cultuur' && '🎭'}
              {post.category === 'Leren' && '📚'}
              {post.category === 'Spaans leren' && '📚'}
            </span>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="prose w-full">
            {post.content ? (
              <div className="w-full" dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <>
                {/* Placeholder content */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                  <p className="text-blue-900 font-semibold mb-2">
                    📝 Artikel in ontwikkeling
                  </p>
                  <p className="text-blue-800 text-sm">
                    Dit is een placeholder pagina. De volledige blog content wordt hier weergegeven wanneer het artikel is geschreven.
                  </p>
                </div>

                <section className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Introductie</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    In dit artikel gaan we dieper in op dit onderwerp en delen we praktische tips die je direct kunt toepassen tijdens je reis naar Spanje of Latijns-Amerika.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Waarom is dit belangrijk?</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Of je nu een beginner bent in het Spaans leren of al wat ervaring hebt, deze informatie helpt je om je vaardigheden te verbeteren en met meer zelfvertrouwen te reizen.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Praktische Tips</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Oefen regelmatig met onze interactieve games</li>
                    <li>Leer belangrijke woorden en zinnen uit het dagelijks leven</li>
                    <li>Luister naar native speakers wanneer mogelijk</li>
                    <li>Wees niet bang om fouten te maken - het hoort bij het leerproces!</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Conclusie</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Met deze kennis ben je goed voorbereid op je volgende Spaanse avontuur. Vergeet niet om onze andere tools te gebruiken om je Spaans verder te verbeteren!
                  </p>
                </section>
              </>
            )}
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-2xl shadow-xl max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">🎮 Oefen wat je hebt geleerd!</h3>
            <p className="text-orange-100 mb-6 text-sm sm:text-base">
              Gebruik onze interactieve games om je Spaanse vaardigheden te verbeteren
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
              <Link
                href="/games/flashcards"
                className="px-5 sm:px-6 py-2 sm:py-3 bg-white text-orange-600 rounded-full font-bold hover:bg-orange-50 transition-colors text-sm sm:text-base"
              >
                Flashcards
              </Link>
              <Link
                href="/games/quiz"
                className="px-5 sm:px-6 py-2 sm:py-3 bg-white text-orange-600 rounded-full font-bold hover:bg-orange-50 transition-colors text-sm sm:text-base"
              >
                Quiz
              </Link>
              <Link
                href="/woorden"
                className="px-5 sm:px-6 py-2 sm:py-3 bg-white text-orange-600 rounded-full font-bold hover:bg-orange-50 transition-colors text-sm sm:text-base"
              >
                Woordenlijst
              </Link>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {blogPosts.filter((p) => p.id !== post.id).length > 0 && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">📚 Meer Artikelen</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts
                .filter((p) => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6"
                  >
                    <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full mb-3">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}

