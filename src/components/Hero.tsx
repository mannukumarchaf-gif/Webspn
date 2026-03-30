import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Book, Users, Bus, GraduationCap, ArrowRight } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function Hero() {
  const [imageError, setImageError] = React.useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[80vh] flex items-start justify-center overflow-hidden pt-32 pb-20 md:pt-40"
    >
      {/* Background with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/80 via-white to-white z-10" />
        {!imageError ? (
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=2070"
            alt=""
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-emerald-50" />
        )}
      </motion.div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingIcon icon={<Book className="text-emerald-500" />} delay={0} x="10%" y="20%" className="hidden sm:block" />
        <FloatingIcon icon={<Users className="text-blue-500" />} delay={1} x="85%" y="15%" className="hidden md:block" />
        <FloatingIcon icon={<Bus className="text-orange-500" />} delay={2} x="15%" y="70%" className="hidden sm:block" />
        <FloatingIcon icon={<GraduationCap className="text-purple-500" />} delay={1.5} x="80%" y="75%" className="hidden md:block" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 md:mb-8 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          प्रवेश प्रारंभ: सत्र 2026-27
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-emerald-950 leading-tight mb-6 md:mb-8 font-serif"
        >
          श्री प्रताप नारायण <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
            इंटरमीडिएट कॉलेज
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-xl text-emerald-800/70 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed"
        >
          बांसगांव जमुआन, दुदही-कुशीनगर (उत्तर प्रदेश) का एक अग्रणी शिक्षण संस्थान, जहाँ हम छात्रों के उज्ज्वल भविष्य की नींव रखते हैं।
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="group bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-2 transition-all"
          >
            अभी संपर्क करें
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, background: "rgba(255,255,255,1)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/80 backdrop-blur-md border border-emerald-100 text-emerald-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-emerald-100/50"
          >
            हमारा परिचय
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-emerald-500 to-transparent" />
        <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-500">Scroll</span>
      </motion.div>
    </section>
  );
}

function FloatingIcon({ icon, delay, x, y, className }: { icon: ReactNode; delay: number; x: string; y: string; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.4, 0.8, 0.4],
        y: ["-20px", "20px", "-20px"],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        "absolute p-4 bg-white/40 backdrop-blur-md rounded-2xl shadow-xl border border-white/20",
        className
      )}
      style={{ left: x, top: y }}
    >
      {icon}
    </motion.div>
  );
}
