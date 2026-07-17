import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { StickyCTAButton } from '../components/sticky-cta-button';
import { getSortedPosts } from './posts';

export const metadata: Metadata = {
  title: 'Investigator Insights — Private Investigation Blog',
  description:
    'Guides, case perspectives, and expert insights from G.A. Tucker PI. Read about hiring a private investigator, background checks, surveillance law, custody evidence, and more.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Investigator Insights — G.A. Tucker PI Blog',
    description:
      'Expert guidance on private investigations, background checks, infidelity, custody, missing persons, and risk management from a licensed California PI.',
    url: 'https://gatuckerpi.com/blog',
    type: 'website',
  },
};

function formatDate(iso: string): string {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  const posts = getSortedPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A1A1A] via-[#0D0D0D] to-[#1A1A1A]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D] to-transparent" />
        <div className="max-w-7xl mx-auto">
          <p
            className="text-[#CEA53D] uppercase tracking-[0.3em] text-xs mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Investigator Insights
          </p>
          <h1
            className="text-5xl md:text-7xl font-black uppercase text-[#EDEDED] mb-6 leading-none"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              textShadow: '0 0 40px rgba(206, 165, 61, 0.25)',
            }}
          >
            The Blog
          </h1>
          <p
            className="text-[#EDEDED]/70 text-lg max-w-3xl leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Field-tested guidance from 27+ years of California private investigations. Real cases,
            legal boundaries, and practical answers for anyone considering hiring a PI.
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D] to-transparent" />
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]">
          <div className="max-w-7xl mx-auto">
            <p
              className="text-[#CEA53D] uppercase tracking-[0.3em] text-xs mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Featured
            </p>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-black/40 border-2 border-[#CEA53D]/30 hover:border-[#CEA53D]/70 rounded-lg overflow-hidden transition-all"
            >
              <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[280px]">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              <div className="p-6 lg:p-10">
                <div className="flex items-center gap-4 text-xs uppercase tracking-widest mb-4">
                  <span
                    className="text-[#CEA53D] font-bold"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {featured.category}
                  </span>
                  <span className="text-[#EDEDED]/40">•</span>
                  <span
                    className="text-[#EDEDED]/60"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {formatDate(featured.date)}
                  </span>
                  <span className="text-[#EDEDED]/40">•</span>
                  <span
                    className="text-[#EDEDED]/60"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {featured.readTime}
                  </span>
                </div>
                <h2
                  className="text-3xl md:text-4xl font-black uppercase text-[#EDEDED] group-hover:text-[#CEA53D] transition-colors mb-4 leading-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {featured.title}
                </h2>
                <p
                  className="text-[#EDEDED]/70 leading-relaxed mb-6"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {featured.excerpt}
                </p>
                <span
                  className="inline-flex items-center gap-2 text-[#CEA53D] font-black uppercase text-sm tracking-wider group-hover:gap-4 transition-all"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Read the Full Post
                  <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Post Grid */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <p
            className="text-[#CEA53D] uppercase tracking-[0.3em] text-xs mb-6"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            All Articles
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-black/40 border-2 border-[#CEA53D]/20 hover:border-[#CEA53D]/60 rounded-lg overflow-hidden transition-all flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span
                    className="absolute top-4 left-4 bg-[#CEA53D] text-black px-3 py-1 text-xs font-black uppercase tracking-wider"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-[#EDEDED]/50 mb-3">
                    <span style={{ fontFamily: "'Inter', sans-serif" }}>
                      {formatDate(post.date)}
                    </span>
                    <span>•</span>
                    <span style={{ fontFamily: "'Inter', sans-serif" }}>{post.readTime}</span>
                  </div>
                  <h3
                    className="text-xl font-black uppercase text-[#EDEDED] group-hover:text-[#CEA53D] transition-colors mb-3 leading-snug"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="text-[#EDEDED]/60 text-sm leading-relaxed flex-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {post.excerpt}
                  </p>
                  <span
                    className="mt-4 inline-flex items-center gap-2 text-[#CEA53D] text-sm font-black uppercase tracking-wider group-hover:gap-3 transition-all"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    Read Article <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D] border-t border-[#CEA53D]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl sm:text-5xl font-black uppercase text-[#EDEDED] mb-6"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              textShadow: '0 0 30px rgba(206, 165, 61, 0.3)',
            }}
          >
            Need Answers on Your Case?
          </h2>
          <p
            className="text-[#EDEDED]/80 text-lg mb-8 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Reading only goes so far. If you are ready to talk with a licensed California
            investigator confidentially, we are one call away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:909-964-8976"
              className="bg-[#CEA53D] text-black px-8 py-4 font-black uppercase text-sm tracking-wider transition-all hover:bg-[#CEA53D]/90 active:scale-95"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                boxShadow: '0 0 30px rgba(206, 165, 61, 0.4)',
              }}
            >
              Call 909-964-8976
            </a>
            <Link
              href="/contact"
              className="bg-black border-2 border-[#CEA53D] text-[#CEA53D] px-8 py-4 font-black uppercase text-sm tracking-wider transition-all hover:bg-[#CEA53D] hover:text-black active:scale-95"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTAButton />
    </div>
  );
}
