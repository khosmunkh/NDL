import { NDL_DATA } from '@/data/mockData';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import SpotifyEmbed from '@/components/SpotifyEmbed';

// Dynamic metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const artist = NDL_DATA.artists.find(a => a.id === id);
  
  if (!artist) {
    return { title: 'Artist Not Found | NDL Records' };
  }

  return {
    title: `${artist.name} | NDL Records`,
    description: artist.bio,
    openGraph: {
      title: `${artist.name} | NDL Records`,
      description: artist.bio,
      images: [artist.image],
    },
  };
}

// Next.js 15+ дээр params нь Promise байдаг тул async ашиглана
export default async function ArtistProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const artist = NDL_DATA.artists.find(a => a.id === id);
  
  if (!artist) {
    return notFound();
  }

  const artistAlbums = NDL_DATA.albums.filter(album => album.artist === artist.name);

  return (
    <main className="bg-black min-h-screen text-white pt-20">
      {/* Artist Hero */}
      <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <img 
          src={artist.image} 
          className="w-full h-full object-cover opacity-60" 
          alt={artist.name} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12 z-10">
          <span className="bg-white text-black px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 inline-block">
            NDL Artist
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            {artist.name}
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mt-2 font-light tracking-widest">
            {artist.role}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
        <div className="lg:col-span-4">
          <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.4em] mb-6 border-b border-white/10 pb-2">
            Biography
          </h2>
          <p className="text-zinc-300 leading-relaxed text-base md:text-lg font-light">
            {artist.bio}
          </p>
        </div>

        <div className="lg:col-span-8">
          <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.4em] mb-6 border-b border-white/10 pb-2">
            Featured Music
          </h2>
          {artist.spotifyArtistId ? (
            <SpotifyEmbed spotifyId={artist.spotifyArtistId} type="artist" />
          ) : (
            <div className="aspect-video w-full bg-zinc-900 rounded-xl flex items-center justify-center border border-white/5">
              <p className="text-zinc-600 italic">No Spotify content available</p>
            </div>
          )}
        </div>
      </section>

      {/* Artist Albums */}
      {artistAlbums.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-16">
          <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.4em] mb-6 border-b border-white/10 pb-2">
            Discography
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {artistAlbums.map((album) => (
              <div key={album.id} className="group cursor-pointer">
                <div className="relative aspect-square mb-3 overflow-hidden rounded-md">
                  <img 
                    src={album.cover} 
                    className="object-cover w-full h-full group-hover:scale-110 transition duration-500" 
                    alt={album.title}
                  />
                </div>
                <h4 className="font-bold text-sm truncate uppercase">{album.title}</h4>
                <p className="text-xs text-zinc-500">{album.year}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
