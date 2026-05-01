import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "./anjali5.jpeg",
    "./anjali6.jpeg",
    "./anjali8.jpeg",
    "./anjalia.jpeg",
    "./anjalib.jpeg",
    "./anjalic.jpeg",
];

export default function MemoryGallery() {
    const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0f0f1a] to-black text-white px-6 py-16">
      
      {/* Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent"
      >
        Beautiful Memories 💫
      </motion.h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.05 }}
            className="relative cursor-pointer group"
            onClick={() => setSelected(img)}
          >
            <img
              src={img}
              alt=""
              className="rounded-2xl shadow-lg object-cover w-full h-60 transition duration-300 group-hover:brightness-75"
            />

            {/* Overlay Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

            {/* Text on hover */}
            <p className="absolute bottom-4 left-4 text-sm opacity-0 group-hover:opacity-100 transition">
              Tap to relive 💖
            </p>
          </motion.div>
        ))}
      </div>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              alt=""
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-2xl"
            />

            {/* Close hint */}
            <p className="absolute bottom-10 text-gray-300 text-sm">
              Click anywhere to close ✨
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}