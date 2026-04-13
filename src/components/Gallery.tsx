"use client"
import { motion } from 'framer-motion';

const images = [
  "/images/merch/merch-1.jpg",
  "/images/merch/merch-2.jpg",
  "/images/merch/merch-3.jpg",
  "/images/merch/merch-4.jpg",
  "/images/merch/merch-5.jpg",
  "/images/merch/merch-6.jpg",
  "/images/merch/merch-7.jpg",
  "/images/merch/merch-8.jpg",
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