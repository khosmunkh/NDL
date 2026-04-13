import { NDL_DATA } from '@/data/mockData';

export default function AlbumList() {
  return (
    <section className="py-20 bg-zinc-950 px-6">
      <h2 className="text-3xl font-bold mb-10 uppercase italic">Discography</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {NDL_DATA.albums.map((album) => (
          <div key={album.id} className="group cursor-pointer">
            <div className="relative aspect-square mb-3 overflow-hidden rounded-md">
              <img 
                src={album.cover} 
                className="object-cover w-full h-full group-hover:scale-110 transition duration-500" 
                alt={album.title}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <button className="bg-white text-black p-3 rounded-full">Play</button>
              </div>
            </div>
            <h4 className="font-bold text-sm truncate uppercase">{album.title}</h4>
            <p className="text-xs text-zinc-500">{album.artist} • {album.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}