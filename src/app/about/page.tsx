import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About | NDL Records',
  description: 'Learn about NDL Records - a Mongolian record label pushing the boundaries of hip-hop and R&B music.',
  openGraph: {
    title: 'About | NDL Records',
    description: 'Learn about NDL Records - pushing the boundaries of hip-hop and R&B.',
  },
};

export default function AboutPage() {
  const stats = [
    { value: '2019', label: 'Founded' },
    { value: '6+', label: 'Artists' },
    { value: '10+', label: 'Albums' },
    { value: '1M+', label: 'Streams' },
  ];

  const values = [
    {
      title: 'Authenticity',
      description: 'We believe in raw, unfiltered expression. Every beat, every lyric, every visual comes from a place of truth.',
    },
    {
      title: 'Culture',
      description: 'We are not just making music - we are building a movement that bridges Mongolian heritage with global sound.',
    },
    {
      title: 'Community',
      description: 'Our artists are family. We grow together, create together, and push each other to be better.',
    },
    {
      title: 'Innovation',
      description: 'We constantly explore new sounds, new visuals, and new ways to connect with our audience.',
    },
  ];

  return (
    <main className="bg-background min-h-screen text-foreground pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end pb-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/ndl-about.jpg"
            alt="Studio"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <p className="text-xs text-muted tracking-[0.3em] uppercase mb-4">About Us</p>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-6 max-w-4xl">
            We Move Culture Through Sound
          </h1>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`py-12 md:py-16 text-center ${
                  index !== stats.length - 1 ? 'border-r border-border' : ''
                }`}
              >
                <p className="text-4xl md:text-5xl font-black tracking-tight mb-2">{stat.value}</p>
                <p className="text-sm text-muted tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            <div>
              <p className="text-xs text-muted tracking-[0.3em] uppercase mb-4">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8">
                Born in Ulaanbaatar
              </h2>
            </div>
            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                NDL Records was founded in 2019 with a simple mission: to give Mongolian artists a platform 
                to share their voice with the world. What started as a small collective of friends making 
                music in a basement studio has grown into one of the most influential independent labels 
                in the region.
              </p>
              <p>
                We believe that great music knows no borders. Our sound blends traditional Mongolian 
                influences with contemporary hip-hop, R&B, and electronic production. The result is 
                something unique - music that honors our roots while pushing into new sonic territories.
              </p>
              <p>
                Today, NDL Records represents a diverse roster of artists, producers, and visual creators. 
                Together, we are building more than a label - we are building a cultural movement that 
                connects Mongolia to the global music community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="relative h-[50vh] md:h-[70vh]">
        <img
          src="/images/ndl-about-2.jpg"
          alt="NDL Studio Session"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40" />
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p className="text-xs text-muted tracking-[0.3em] uppercase mb-4">What We Believe</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group p-8 md:p-12 border border-border hover:border-muted transition-colors duration-300"
              >
                <span className="text-6xl font-black text-muted-foreground/20 group-hover:text-muted-foreground/40 transition-colors">
                  0{index + 1}
                </span>
                <h3 className="text-2xl font-bold mt-4 mb-4">{value.title}</h3>
                <p className="text-muted leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs text-muted tracking-[0.3em] uppercase mb-4">The Team</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
                Built by Creators, for Creators
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                Behind every great release is a team of dedicated professionals who share a passion 
                for music and culture. From A&R to visual direction, our team works tirelessly to 
                ensure every project reaches its full potential.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-sm font-medium hover:text-muted transition-colors group"
              >
                Work with us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative aspect-square">
              <img
                src="/images/ndl-about-3.jpg"
                alt="NDL Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-8 text-balance">
            Ready to Join the Movement?
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto mb-12">
            Whether you are an artist looking for a home or a brand seeking authentic partnerships, 
            we would love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm font-medium tracking-wide hover:bg-muted transition-colors duration-300"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/albums"
              className="inline-flex items-center gap-3 border border-border px-8 py-4 text-sm font-medium tracking-wide hover:border-muted hover:text-muted transition-colors duration-300"
            >
              Explore Our Music
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
