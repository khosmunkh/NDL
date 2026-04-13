"use client"

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import type { Album } from '@/data/mockData';

interface AlbumCardProps {
  album: Album;
}

export default function AlbumCard({ album }: AlbumCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer"
    >
      {/* Album Cover */}
      <div className="relative aspect-square mb-4 overflow-hidden bg-card">
        <img
          src={album.cover}
          alt={album.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 bg-foreground text-background rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            aria-label={`Play ${album.title}`}
          >
            <Play className="w-6 h-6 ml-1" fill="currentColor" />
          </motion.button>
        </div>
      </div>

      {/* Album Info */}
      <div>
        <h3 className="font-bold text-sm md:text-base truncate group-hover:text-muted transition-colors">
          {album.title}
        </h3>
        <p className="text-sm text-muted truncate">
          {album.artist}
        </p>
      </div>
    </motion.article>
  );
}
