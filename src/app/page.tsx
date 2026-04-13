import Link from 'next/link';
import ArtistCard from '@/components/ArtistCard';
import AlbumMarquee from '@/components/AlbumMarquee';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import { NDL_DATA } from '@/data/mockData';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  // Get featured artists (first 3)
  const featuredArtists = NDL_DATA.artists.slice(0, 3);
  const latestAlbum = NDL_DATA.albums[0];

  return (
    <main className="bg-background min-h-screen text-foreground">
      {/* Hero Section - Full screen with video/image background */}
      <section className="relative h-screen flex items-end pb-20 px-6 md:px-12 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/NDL-1.jpg"
            alt="NDL Records"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <p className="text-muted text-sm tracking-[0.3em] uppercase mb-4">
                Ulaanbaatar, Mongolia
              </p>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[-0.05em] leading-[0.85] mb-6">
                NDL
                <span className="block text-muted-foreground">RECORDS</span>
              </h1>
              <p className="text-lg text-muted max-w-md leading-relaxed">
                A visual identity, uniting music fans from all over the world by allowing them to share moments together through music.
              </p>
            </div>
            
            {/* Latest Release Card */}
            <div className="hidden lg:block">
              <p className="text-xs text-muted tracking-[0.3em] uppercase mb-4">Latest Release</p>
              <Link href={`/albums`} className="group block">
                <div className="relative aspect-square w-72 overflow-hidden">
                  <img 
                    src={latestAlbum.cover}
                    alt={latestAlbum.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-bold text-lg">{latestAlbum.title}</h3>
                    <p className="text-sm text-muted">{latestAlbum.artist}</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-muted tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted to-transparent" />
        </div>
      </section>

      {/* Featured Artists Section */}
      <section id="artists" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
            <div>
              <p className="text-xs text-muted tracking-[0.3em] uppercase mb-3">The Roster</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter">
                Artists
              </h2>
            </div>
            <Link 
              href="/#artists" 
              className="group flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
            >
              View all artists
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Artist Grid - Asymmetric layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {NDL_DATA.artists.map((artist, index) => (
              <ArtistCard 
                key={artist.id} 
                artist={artist} 
                featured={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Album Marquee */}
      <AlbumMarquee />

      {/* Process Section */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <p className="text-xs text-muted tracking-[0.3em] uppercase mb-3">Our Process</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter max-w-3xl mx-auto text-balance">
              The Sound That Begins and Ends With Culture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Discover", desc: "We dig deep into culture, your business goals and needs." },
              { num: "02", title: "Create", desc: "We bring the brand to life visually and sonically." },
              { num: "03", title: "Impact", desc: "We set you up for success and lasting results." },
            ].map((step) => (
              <div key={step.num} className="group p-8 border border-border hover:border-muted transition-colors duration-300">
                <span className="text-6xl font-black text-muted-foreground group-hover:text-muted transition-colors">
                  {step.num}
                </span>
                <h3 className="text-2xl font-bold mt-6 mb-3">{step.title}</h3>
                <p className="text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter">
                Merch
              </h2>
            </div>
          </div>
          <Gallery />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-8 text-balance">
            Ready to Move Culture?
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto mb-12">
            We work with artists and brands who are ready to make an impact. Let&apos;s create something unforgettable.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm font-medium tracking-wide hover:bg-muted transition-colors duration-300"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
