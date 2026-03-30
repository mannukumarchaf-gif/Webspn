import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "motion/react";
import { Trophy, Award, Star, Users, Calendar, CheckCircle2 } from "lucide-react";
import { cn } from "@/src/lib/utils";

const stats = [
  { label: "वर्षों का अनुभव", value: 15, suffix: "+", icon: <Calendar className="w-6 h-6" /> },
  { label: "संतुष्ट छात्र", value: 2500, suffix: "+", icon: <Users className="w-6 h-6" /> },
  { label: "सफलता दर", value: 98, suffix: "%", icon: <CheckCircle2 className="w-6 h-6" /> },
  { label: "कुल पुरस्कार", value: 50, suffix: "+", icon: <Trophy className="w-6 h-6" /> },
];

const awards = [
  {
    title: "सर्वश्रेष्ठ विद्यालय पुरस्कार",
    year: "2024",
    org: "शिक्षा विभाग, उत्तर प्रदेश",
    icon: <Award className="w-10 h-10 text-yellow-500" />,
  },
  {
    title: "खेल रत्न सम्मान",
    year: "2023",
    org: "क्षेत्रीय खेल परिषद",
    icon: <Star className="w-10 h-10 text-blue-500" />,
  },
  {
    title: "विज्ञान गौरव पुरस्कार",
    year: "2022",
    org: "राज्य विज्ञान संस्थान",
    icon: <Trophy className="w-10 h-10 text-emerald-500" />,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-emerald-600 font-bold tracking-widest uppercase text-xs"
          >
            हमारी उपलब्धियां
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-emerald-950 mt-4 mb-6 font-serif"
          >
            गर्व के क्षण और आंकड़े
          </motion.h2>
        </div>

        {/* Stats Counter Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, i) => (
            <AwardCard key={award.title} award={award} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const StatCard: React.FC<{ stat: any; index: number }> = ({ stat, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
  });

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      springValue.set(stat.value);
    }
  }, [isInView, stat.value, springValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-8 rounded-[2.5rem] bg-emerald-50/50 border border-emerald-100/50 backdrop-blur-sm text-center group hover:bg-white hover:shadow-2xl hover:shadow-emerald-100 transition-all duration-500"
    >
      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-600 shadow-lg shadow-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
        {stat.icon}
      </div>
      <div className="text-4xl md:text-5xl font-black text-emerald-950 mb-2 flex items-center justify-center">
        <motion.span>{displayValue}</motion.span>
        <span className="text-emerald-500 ml-1">{stat.suffix}</span>
      </div>
      <p className="text-emerald-800/60 font-medium">{stat.label}</p>
    </motion.div>
  );
};

const AwardCard: React.FC<{ award: any; index: number }> = ({ award, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 + 0.4 }}
      whileHover={{ y: -10 }}
      className="p-8 rounded-3xl bg-white border border-emerald-50 shadow-xl shadow-emerald-100/20 flex flex-col items-center text-center group"
    >
      <motion.div
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="mb-6"
      >
        {award.icon}
      </motion.div>
      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold mb-4">
        {award.year}
      </span>
      <h3 className="text-xl font-bold text-emerald-950 mb-2">{award.title}</h3>
      <p className="text-emerald-800/60 text-sm">{award.org}</p>
    </motion.div>
  );
};
