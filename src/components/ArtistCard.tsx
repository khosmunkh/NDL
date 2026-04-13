"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Artist } from '@/data/mockData';

interface ArtistCardProps {
  artist: Artist;
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <Link href={`/artists/${artist.id}`}>
      <motion.div 
        whileHover={{ y: -10 }}
        className="relative group overflow-hidden bg-zinc-900 rounded-lg aspect-[3/4] cursor-pointer"
      >
        <img 
          src={artist.image} 
          alt={artist.name}
          className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-0 left-0 w-full p-6">
          <h3 className="text-xl font-bold text-white uppercase">{artist.name}</h3>
          <p className="text-zinc-400 text-sm">{artist.role}</p>
          <span className="inline-block mt-3 text-xs uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">
            View Profile
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
