import { NDL_DATA } from '@/data/mockData';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';

// Next.js 15+ дээр params нь Promise байдаг тул async ашиглана
export default async function ArtistProfile({ params }: { params: Promise<{ id: string }> }) {
  // params-ийг await хийж авна
  const { id } = await params;
  
  const artist = NDL_DATA.artists.find(a => a.id === id);
  
  if (!artist) {
    return notFound();
  }

  const artistAlbums = NDL_DATA.albums.filter(album => album.artist === artist.name);

  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      
      {/* Artist Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img 
          src={artist.image} 
          className="w-full h-full object-cover opacity-60" 
          alt={artist.name} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute bottom-12 left-12 z-10">
          <span className="bg-white text-black px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 inline-block">
            NDL Artist
          </span>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            {artist.name}
          </h1>
          <p className="text-xl text-zinc-400 mt-2 font-light tracking-widest">
            {artist.role}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.4em] mb-6 border-b border-white/10 pb-2">
            Biography
          </h2>
          <p className="text-zinc-300 leading-relaxed text-lg font-light">
            {artist.bio}
          </p>
        </div>

        <div className="lg:col-span-8">
          <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.4em] mb-6 border-b border-white/10 pb-2">
            Featured Content
          </h2>
          <div className="aspect-video w-full bg-zinc-900 rounded-xl flex items-center justify-center border border-white/5">
            <p className="text-zinc-600 italic">Spotify Embed Player will load here</p>
          </div>
        </div>
      </section>
    </main>
  );
}