import Navbar from '@/components/Navbar';
import ArtistCard from '@/components/ArtistCard';
import AlbumList from '@/components/AlbumList';
import Gallery from '@/components/Gallery';
import { NDL_DATA } from '@/data/mockData';

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="h-[80vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-9xl font-black tracking-tighter mb-4">NDL</h1>
        <p className="text-zinc-400 tracking-[1em] uppercase text-sm">Next Generation Label</p>
      </section>

      {/* Artists Section */}
      <section id="artists" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-bold uppercase tracking-tighter">The Roster</h2>
          <p className="text-zinc-500 text-sm">6-10 CURRENT MEMBERS</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NDL_DATA.artists.map(artist => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </section>

      {/* Album Section */}
      <AlbumList />

      {/* Pro Gallery Section */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-12 uppercase tracking-tighter text-center">Visuals</h2>
        <Gallery />
      </section>

      <footer className="py-10 text-center border-t border-white/5 text-zinc-600 text-xs">
        © 2026 NDL RECORDS. ALL RIGHTS RESERVED.
      </footer>
    </main>
  );
}