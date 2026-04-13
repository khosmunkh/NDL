"use client"
import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
  "https://images.unsplash.com/photo-1493225255756-d9584f8606e9",
  "https://images.unsplash.com/photo-1514525253361-bee8a4874093",
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
  "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad",
];

export default function Gallery() {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 p-4">
      {images.map((src, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="break-inside-avoid"
        >
          <img 
            src={`${src}?q=80&w=1000`} 
            alt="NDL Session" 
            className="w-full h-auto rounded-lg hover:scale-[1.02] transition-transform duration-300"
          />
        </motion.div>
      ))}
    </div>
  );
}