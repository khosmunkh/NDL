import type { Metadata } from 'next';
import Link from 'next/link';
import { NDL_DATA } from '@/data/mockData';
import Footer from '@/components/Footer';
import AlbumCard from '@/components/AlbumCard';

export const metadata: Metadata = {
  title: 'Albums | NDL Records',
  description: 'Explore the complete discography from NDL Records - featuring albums, EPs, and singles from our roster.',
  openGraph: {
    title: 'Albums | NDL Records',
    description: 'Explore the complete discography from NDL Records.',
  },
};

export default function AlbumsPage() {
  // Group albums by year
  const albumsByYear = NDL_DATA.albums.reduce((acc, album) => {
    const year = album.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(album);
    return acc;
  }, {} as Record<number, typeof NDL_DATA.albums>);

  // Sort years in descending order
  const sortedYears = Object.keys(albumsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <main className="bg-background min-h-screen text-foreground pt-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-xs text-muted tracking-[0.3em] uppercase mb-4">Discography</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6">
            Albums
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            A collection of sounds that define the NDL movement. From hard-hitting rap to soulful R&B, 
            explore the complete catalog of releases from our artists.
          </p>
        </div>
      </section>

      {/* Filter Stats */}
      <section className="border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-8 text-sm">
            <span className="text-muted">
              <span className="text-foreground font-medium">{NDL_DATA.albums.length}</span> Releases
            </span>
            <span className="text-muted">
              <span className="text-foreground font-medium">{NDL_DATA.artists.length}</span> Artists
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted">
            <span>Sort by:</span>
            <span className="text-foreground font-medium">Latest</span>
          </div>
        </div>
      </section>

      {/* Albums by Year */}
      {sortedYears.map((year) => (
        <section key={year} className="border-b border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
            <div className="flex items-baseline gap-4 mb-12">
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-muted-foreground/30">
                {year}
              </h2>
              <span className="text-sm text-muted">
                {albumsByYear[year].length} {albumsByYear[year].length === 1 ? 'release' : 'releases'}
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {albumsByYear[year].map((album) => (
                <AlbumCard key={album.id} album={album} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">
            Want to hear more?
          </h2>
          <p className="text-muted mb-8 max-w-md mx-auto">
            Follow us on Spotify to stay updated with our latest releases and exclusive content.
          </p>
          <a
            href="https://open.spotify.com/artist/6T4u6bZDlwUfEU2bSCC86g"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1DB954] text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-[#1ed760] transition-colors duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            Listen on Spotify
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
