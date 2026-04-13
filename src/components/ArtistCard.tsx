"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Artist } from '@/data/mockData';

interface ArtistCardProps {
  artist: Artist;
  featured?: boolean;
}

export default function ArtistCard({ artist, featured = false }: ArtistCardProps) {
  return (
    <Link href={`/artists/${artist.id}`}>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className={`group relative overflow-hidden bg-card ${
          featured ? 'md:row-span-2' : ''
        }`}
      >
        {/* Image Container */}
        <div className={`relative overflow-hidden ${featured ? 'aspect-[3/4]' : 'aspect-square'}`}>
          <img
            src={artist.image}
            alt={artist.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <span className="inline-block text-[10px] font-medium tracking-[0.3em] uppercase text-muted mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                NDL Artist
              </span>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-1">
                {artist.name}
              </h3>
              <p className="text-sm text-muted">
                {artist.role}
              </p>
            </div>
            
            {/* View Profile Link */}
            <div className="mt-4 overflow-hidden">
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-wide opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 delay-100">
                View Profile
                <svg 
                  className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
