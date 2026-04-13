"use client"
import { motion } from 'framer-motion';

export default function ArtistCard({ artist }: { artist: any }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="relative group overflow-hidden bg-zinc-900 rounded-lg aspect-[3/4]"
    >
      <img 
        src={artist.image} 
        alt={artist.name}
        className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition duration-500"
      />
      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-xl font-bold text-white uppercase">{artist.name}</h3>
        <p className="text-gray-400 text-sm">{artist.role}</p>
      </div>
    </motion.div>
  );
}