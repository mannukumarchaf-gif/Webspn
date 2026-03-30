import React from "react";
import { motion } from "motion/react";
import { Download, ZoomIn, Eye } from "lucide-react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=2070",
    title: "स्कूल कैंपस",
    category: "परिसर",
  },
  {
    url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2070",
    title: "कक्षा गतिविधियाँ",
    category: "शिक्षा",
  },
  {
    url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=2070",
    title: "खेल का मैदान",
    category: "खेल",
  },
  {
    url: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&q=80&w=2070",
    title: "प्रयोगशाला",
    category: "विज्ञान",
  },
  {
    url: "https://images.unsplash.com/photo-1577891721396-227427a6a943?auto=format&fit=crop&q=80&w=2070",
    title: "सांस्कृतिक कार्यक्रम",
    category: "कार्यक्रम",
  },
  {
    url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=2070",
    title: "लाइब्रेरी",
    category: "अध्ययन",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-emerald-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 gap-6">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-emerald-600 font-bold tracking-widest uppercase text-xs"
            >
              हमारी झलकियां
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-emerald-950 mt-4 font-serif"
            >
              विशेष क्षण
            </motion.h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-emerald-600 border border-emerald-100 px-8 py-3 rounded-2xl font-bold shadow-lg shadow-emerald-100 hover:bg-emerald-600 hover:text-white transition-all flex flex-col items-center"
          >
            <span>सभी देखें</span>
          </motion.button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {images.map((img, i) => (
            <GalleryItem key={img.url} img={img} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const GalleryItem: React.FC<{ img: any; index: number }> = ({ img, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative h-48 md:h-80 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl shadow-emerald-100/50"
    >
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6 }}
        src={img.url}
        alt={img.title}
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4 md:p-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="flex items-center justify-between"
        >
          <div>
            <span className="text-emerald-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 md:mb-2 block">
              {img.category}
            </span>
            <h3 className="text-white text-sm md:text-xl font-bold">{img.title}</h3>
          </div>
          <div className="hidden md:flex gap-3">
            <motion.button
              whileHover={{ scale: 1.1, background: "rgba(255,255,255,1)" }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/20 backdrop-blur-md rounded-xl text-white hover:text-emerald-900 transition-colors"
            >
              <Eye className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, background: "rgba(255,255,255,1)" }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/20 backdrop-blur-md rounded-xl text-white hover:text-emerald-900 transition-colors"
            >
              <Download className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
