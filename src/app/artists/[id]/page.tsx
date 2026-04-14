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

          {/* Socials */}
          {artist.socials && (
            <div className="flex gap-4 mt-5">
              {artist.socials.instagram && (
                <a href={artist.socials.instagram} target="_blank" rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="Instagram">
                  {/* Instagram */}
                  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4.5" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              )}
              {artist.socials.youtube && (
                <a href={artist.socials.youtube} target="_blank" rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="YouTube">
                  {/* YouTube */}
                  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="black" />
                  </svg>
                </a>
              )}
              {artist.socials.tiktok && (
                <a href={artist.socials.tiktok} target="_blank" rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="TikTok">
                  {/* TikTok */}
                  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.87a8.18 8.18 0 0 0 4.78 1.53V6.93a4.85 4.85 0 0 1-1.02-.24z" />
                  </svg>
                </a>
              )}
              {artist.socials.twitter && (
                <a href={artist.socials.twitter} target="_blank" rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="Twitter / X">
                  {/* X / Twitter */}
                  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {artist.socials.facebook && (
                <a href={artist.socials.facebook} target="_blank" rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="Facebook">
                  {/* Facebook */}
                  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              )}
            </div>
          )}
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

      {/* Photo Gallery */}
      {artist.images && artist.images.length > 1 && (
        <section className="max-w-7xl mx-auto px-6 pb-16">
          <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.4em] mb-6 border-b border-white/10 pb-2">
            Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {artist.images.map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-md group">
                <img
                  src={img}
                  alt={`${artist.name} ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </section>
      )}

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
