"use client"

import { motion } from 'framer-motion';
import { NDL_DATA } from '@/data/mockData';

export default function AlbumMarquee() {
  // Duplicate albums for seamless infinite scroll
  const albums = [...NDL_DATA.albums, ...NDL_DATA.albums];

  return (
    <section className="py-20 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold uppercase italic tracking-tight">
          Discography
        </h2>
        <p className="text-zinc-500 text-sm mt-2 uppercase tracking-widest">
          10+ Albums and Growing
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -50 * NDL_DATA.albums.length * 16],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {albums.map((album, index) => (
            <div
              key={`${album.id}-${index}`}
              className="flex-shrink-0 w-48 md:w-56 group cursor-pointer"
            >
              <div className="relative aspect-square mb-3 overflow-hidden rounded-md">
                <img
                  src={album.cover}
                  className="object-cover w-full h-full group-hover:scale-110 transition duration-500"
                  alt={album.title}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <div className="bg-white text-black p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <h4 className="font-bold text-sm truncate uppercase">{album.title}</h4>
              <p className="text-xs text-zinc-500">{album.artist} • {album.year}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
