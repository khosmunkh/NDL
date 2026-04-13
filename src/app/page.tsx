import ArtistCard from '@/components/ArtistCard';
import AlbumMarquee from '@/components/AlbumMarquee';
import Gallery from '@/components/Gallery';
import { NDL_DATA } from '@/data/mockData';

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="h-[100vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter mb-4">NDL</h1>
        <p className="text-zinc-400 tracking-[0.5em] sm:tracking-[1em] uppercase text-xs sm:text-sm">Next Generation Label</p>
      </section>

      {/* Artists Section */}
      <section id="artists" className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter">The Roster</h2>
          <p className="text-zinc-500 text-xs sm:text-sm">6-10 CURRENT MEMBERS</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {NDL_DATA.artists.map(artist => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </section>

      {/* Album Marquee Section */}
      <AlbumMarquee />

      {/* Pro Gallery Section */}
      <section className="max-w-7xl mx-auto py-12 md:py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 uppercase tracking-tighter text-center">Visuals</h2>
        <Gallery />
      </section>

      <footer className="py-10 text-center border-t border-white/5 text-zinc-600 text-xs">
        © 2026 NDL RECORDS. ALL RIGHTS RESERVED.
      </footer>
    </main>
  );
}
