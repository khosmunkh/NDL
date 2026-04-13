"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Play } from 'lucide-react';
import { NDL_DATA } from '@/data/mockData';

export default function AlbumMarquee() {
  // Duplicate albums for seamless infinite scroll
  const albums = [...NDL_DATA.albums, ...NDL_DATA.albums];

  return (
    <section className="py-24 md:py-32 bg-card overflow-hidden border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
        <div>
          <p className="text-xs text-muted tracking-[0.3em] uppercase mb-3">Latest Releases</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
            Discography
          </h2>
        </div>
        <Link 
          href="/albums"
          className="text-sm text-muted hover:text-foreground transition-colors underline underline-offset-4"
        >
          View all albums
        </Link>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <motion.div
          className="flex gap-6 md:gap-8"
          animate={{
            x: [0, -50 * NDL_DATA.albums.length * 16],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50,
              ease: "linear",
            },
          }}
        >
          {albums.map((album, index) => (
            <div
              key={`${album.id}-${index}`}
              className="flex-shrink-0 w-44 md:w-56 group cursor-pointer"
            >
              <div className="relative aspect-square mb-4 overflow-hidden bg-background">
                <img
                  src={album.cover}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  alt={album.title}
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <div className="bg-foreground text-background p-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Play className="w-5 h-5" fill="currentColor" />
                  </div>
                </div>
              </div>
              <h4 className="font-bold text-sm truncate group-hover:text-muted transition-colors">{album.title}</h4>
              <p className="text-xs text-muted">{album.artist} • {album.year}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
