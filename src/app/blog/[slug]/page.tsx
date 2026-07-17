import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '../../components/navbar';
import { Footer } from '../../components/footer';
import { StickyCTAButton } from '../../components/sticky-cta-button';
import { getAllSlugs, getPostBySlug, getSortedPosts, type ContentBlock } from '../posts';
import { Phone, Mail, Calendar, Clock, Tag, ExternalLink, ArrowLeft, ChevronRight } from 'lucide-react';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post not found' };

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url: `https://gatuckerpi.com/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

function formatDate(iso: string): string {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Parse markdown-style [text](url) into JSX with correct link styling
function renderInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const [, label, href] = match;
    const isExternal = /^https?:\/\//.test(href);
    parts.push(
      isExternal ? (
        <a
          key={key++}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#CEA53D] underline decoration-[#CEA53D]/50 underline-offset-4 hover:decoration-[#CEA53D] transition-colors"
        >
          {label}
        </a>
      ) : (
        <Link
          key={key++}
          href={href}
          className="text-[#CEA53D] underline decoration-[#CEA53D]/50 underline-offset-4 hover:decoration-[#CEA53D] transition-colors"
        >
          {label}
        </Link>
      )
    );
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.substring(lastIndex));
  return parts;
}

function renderBlock(block: ContentBlock, idx: number): React.ReactNode {
  switch (block.type) {
    case 'h2':
      return (
        <h2
          key={idx}
          className="text-2xl md:text-3xl font-black uppercase text-[#CEA53D] mt-12 mb-5 leading-tight"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {block.text}
        </h2>
      );
    case 'h3':
      return (
        <h3
          key={idx}
          className="text-xl md:text-2xl font-bold uppercase text-[#EDEDED] mt-8 mb-3 leading-tight"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {block.text}
        </h3>
      );
    case 'p':
      return (
        <p
          key={idx}
          className="text-[#EDEDED]/80 leading-relaxed mb-5 text-base md:text-lg"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {renderInline(block.text)}
        </p>
      );
    case 'ul':
      return (
        <ul key={idx} className="space-y-3 mb-6 ml-2">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[#EDEDED]/80 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <ChevronRight className="w-5 h-5 text-[#CEA53D] flex-shrink-0 mt-1" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol key={idx} className="space-y-3 mb-6 ml-2 counter-reset-list">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[#EDEDED]/80 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span
                className="flex-shrink-0 w-7 h-7 rounded-full bg-[#CEA53D]/20 border border-[#CEA53D]/50 text-[#CEA53D] flex items-center justify-center text-sm font-bold"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {i + 1}
              </span>
              <span className="mt-0.5">{renderInline(item)}</span>
            </li>
          ))}
        </ol>
      );
    case 'quote':
      return (
        <blockquote
          key={idx}
          className="border-l-4 border-[#CEA53D] bg-black/40 pl-6 pr-4 py-4 my-6 italic text-[#EDEDED]/90"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <p className="text-lg leading-relaxed">&ldquo;{block.text}&rdquo;</p>
          {block.author && (
            <footer className="mt-2 text-sm text-[#CEA53D] not-italic">— {block.author}</footer>
          )}
        </blockquote>
      );
    case 'callout':
      return (
        <div
          key={idx}
          className="my-8 p-6 border-2 border-[#CEA53D]/40 bg-gradient-to-br from-[#CEA53D]/10 to-black/40 rounded-lg"
        >
          <h4
            className="text-lg font-black uppercase text-[#CEA53D] mb-3"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {block.title}
          </h4>
          <p
            className="text-[#EDEDED]/85 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {renderInline(block.text)}
          </p>
        </div>
      );
  }
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getSortedPosts();
  const currentIdx = allPosts.findIndex((p) => p.slug === post.slug);
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);
  const prev = currentIdx > 0 ? allPosts[currentIdx - 1] : null;
  const next = currentIdx < allPosts.length - 1 ? allPosts[currentIdx + 1] : null;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: `https://gatuckerpi.com${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Greg A. Tucker',
      url: 'https://gatuckerpi.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'G.A. Tucker PI',
      logo: {
        '@type': 'ImageObject',
        url: 'https://gatuckerpi.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://gatuckerpi.com/blog/${post.slug}`,
    },
    keywords: post.keywords.join(', '),
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-[#0D0D0D]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D] to-transparent" />

        <div className="relative max-w-7xl mx-auto pt-16 grid lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#CEA53D] hover:text-[#CEA53D]/80 text-sm uppercase tracking-widest mb-8 transition-colors"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="bg-[#CEA53D] text-black px-3 py-1 text-xs font-black uppercase tracking-wider"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <Tag className="w-3 h-3 inline mr-1" />
              {post.category}
            </span>
            <span
              className="text-[#EDEDED]/70 text-sm inline-flex items-center gap-1"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <Calendar className="w-3.5 h-3.5" /> {formatDate(post.date)}
            </span>
            <span
              className="text-[#EDEDED]/70 text-sm inline-flex items-center gap-1"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#EDEDED] leading-tight mb-6"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              textShadow: '0 0 40px rgba(206, 165, 61, 0.3)',
            }}
          >
            {post.title}
          </h1>
          <p
            className="text-lg md:text-xl text-[#EDEDED]/85 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {post.excerpt}
          </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10">
          {/* Article */}
          <article className="lg:col-span-8">
            <div className="max-w-none">
              {post.content.map((block, i) => renderBlock(block, i))}
            </div>

            {/* External Source Card */}
            <div className="mt-12 p-6 border-2 border-[#CEA53D]/30 bg-black/40 rounded-lg">
              <p
                className="text-xs uppercase tracking-widest text-[#CEA53D] mb-2"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Reference
              </p>
              <a
                href={post.externalLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-start gap-3 text-[#EDEDED] hover:text-[#CEA53D] transition-colors"
              >
                <ExternalLink className="w-5 h-5 mt-1 text-[#CEA53D] flex-shrink-0" />
                <span style={{ fontFamily: "'Inter', sans-serif" }}>
                  <span className="font-bold group-hover:underline">{post.externalLink.label}</span>
                  <span className="block text-sm text-[#EDEDED]/60 mt-1">
                    {post.externalLink.publisher}
                  </span>
                </span>
              </a>
            </div>

            {/* CTA */}
            <div className="mt-10 p-8 border-2 border-[#CEA53D]/40 bg-gradient-to-br from-[#CEA53D]/10 to-black/40 rounded-lg text-center">
              <h3
                className="text-2xl md:text-3xl font-black uppercase text-[#EDEDED] mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Ready to Speak Confidentially?
              </h3>
              <p
                className="text-[#EDEDED]/80 mb-6"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Every case is different. Call for a private consultation with a licensed
                California investigator.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:909-964-8976"
                  className="bg-[#CEA53D] text-black px-6 py-3 font-black uppercase text-sm tracking-wider transition-all hover:bg-[#CEA53D]/90 active:scale-95 inline-flex items-center justify-center gap-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <Phone className="w-4 h-4" /> 909-964-8976
                </a>
                <Link
                  href="/contact"
                  className="bg-black border-2 border-[#CEA53D] text-[#CEA53D] px-6 py-3 font-black uppercase text-sm tracking-wider transition-all hover:bg-[#CEA53D] hover:text-black active:scale-95 inline-flex items-center justify-center gap-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <Mail className="w-4 h-4" /> Contact Form
                </Link>
              </div>
            </div>

            {/* Prev/Next */}
            <div className="mt-12 grid sm:grid-cols-2 gap-4">
              {prev && (
                <Link
                  href={`/blog/${prev.slug}`}
                  className="group p-5 border-2 border-[#CEA53D]/20 hover:border-[#CEA53D]/60 rounded-lg bg-black/40 transition-all"
                >
                  <p
                    className="text-xs uppercase tracking-widest text-[#CEA53D] mb-2"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    ← Newer Post
                  </p>
                  <p
                    className="text-[#EDEDED] group-hover:text-[#CEA53D] font-bold transition-colors"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {prev.title}
                  </p>
                </Link>
              )}
              {next && (
                <Link
                  href={`/blog/${next.slug}`}
                  className="group p-5 border-2 border-[#CEA53D]/20 hover:border-[#CEA53D]/60 rounded-lg bg-black/40 transition-all sm:text-right"
                >
                  <p
                    className="text-xs uppercase tracking-widest text-[#CEA53D] mb-2"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    Older Post →
                  </p>
                  <p
                    className="text-[#EDEDED] group-hover:text-[#CEA53D] font-bold transition-colors"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {next.title}
                  </p>
                </Link>
              )}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Related Services */}
              <div className="bg-black/60 border-2 border-[#CEA53D]/30 rounded-lg p-5">
                <h3
                  className="text-xl font-black uppercase text-[#CEA53D] mb-4 pb-3 border-b border-[#CEA53D]/30"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Related Services
                </h3>
                <nav className="space-y-1">
                  {post.internalLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="block px-4 py-2.5 rounded transition-all text-sm text-[#EDEDED]/70 hover:text-[#CEA53D] hover:bg-[#CEA53D]/5 border-l-3 border-transparent hover:border-[#CEA53D]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {l.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Quick Contact */}
              <div className="bg-black/60 border-2 border-[#CEA53D]/30 rounded-lg p-5">
                <h3
                  className="text-xl font-black uppercase text-[#CEA53D] mb-4 pb-3 border-b border-[#CEA53D]/30"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Quick Contact
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:909-964-8976"
                    className="flex items-center gap-3 text-[#EDEDED]/80 hover:text-[#CEA53D] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#CEA53D]" />
                    <span className="text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                      909-964-8976
                    </span>
                  </a>
                  <a
                    href="mailto:gatuckerpi@gmail.com"
                    className="flex items-center gap-3 text-[#EDEDED]/80 hover:text-[#CEA53D] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#CEA53D]" />
                    <span className="text-sm break-all" style={{ fontFamily: "'Inter', sans-serif" }}>
                      gatuckerpi@gmail.com
                    </span>
                  </a>
                </div>
                <Link
                  href="/request-service"
                  className="mt-6 w-full bg-[#CEA53D] text-black px-4 py-3 font-black uppercase text-sm tracking-wider transition-all hover:bg-[#CEA53D]/90 active:scale-95 flex items-center justify-center gap-2"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    boxShadow: '0 0 20px rgba(206, 165, 61, 0.3)',
                  }}
                >
                  Request Service
                </Link>
              </div>

              {/* Keywords / Topics */}
              <div className="bg-black/60 border-2 border-[#CEA53D]/30 rounded-lg p-5">
                <h3
                  className="text-xl font-black uppercase text-[#CEA53D] mb-4 pb-3 border-b border-[#CEA53D]/30"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.keywords.map((k) => (
                    <span
                      key={k}
                      className="text-xs text-[#EDEDED]/70 border border-[#CEA53D]/30 px-2 py-1 rounded"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Posts */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] border-t border-[#CEA53D]/20">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-black uppercase text-[#EDEDED] mb-8"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            More From the Blog
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((rp) => (
              <Link
                key={rp.slug}
                href={`/blog/${rp.slug}`}
                className="group bg-black/40 border-2 border-[#CEA53D]/20 hover:border-[#CEA53D]/60 rounded-lg overflow-hidden transition-all flex flex-col"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={rp.image}
                    alt={rp.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <p
                    className="text-xs uppercase tracking-widest text-[#CEA53D] mb-2"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {rp.category}
                  </p>
                  <h3
                    className="text-lg font-black uppercase text-[#EDEDED] group-hover:text-[#CEA53D] transition-colors leading-snug"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {rp.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTAButton />
    </div>
  );
}
