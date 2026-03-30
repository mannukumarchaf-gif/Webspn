import React from "react";
import { motion } from "motion/react";
import { Monitor, Cpu, ShieldCheck, Droplets, Bus, BookOpen, Music, Trophy } from "lucide-react";
import { cn } from "@/src/lib/utils";

const facilities = [
  {
    title: "स्मार्ट क्लास",
    description: "आधुनिक डिजिटल बोर्ड और इंटरैक्टिव शिक्षण सामग्री के साथ शिक्षा।",
    icon: <Monitor className="w-8 h-8" />,
    color: "bg-blue-500",
    animation: "glow",
  },
  {
    title: "कंप्यूटर लैब",
    description: "हाई-स्पीड इंटरनेट और नवीनतम सॉफ्टवेयर के साथ सुसज्जित लैब।",
    icon: <Cpu className="w-8 h-8" />,
    color: "bg-emerald-500",
    animation: "typing",
  },
  {
    title: "CCTV सुरक्षा",
    description: "पूरे परिसर में 24/7 सीसीटीवी निगरानी और सुरक्षा गार्ड।",
    icon: <ShieldCheck className="w-8 h-8" />,
    color: "bg-red-500",
    animation: "pulse",
  },
  {
    title: "RO पानी",
    description: "छात्रों के लिए शुद्ध और शीतल पेयजल की व्यवस्था।",
    icon: <Droplets className="w-8 h-8" />,
    color: "bg-sky-500",
    animation: "flow",
  },
  {
    title: "परिवहन",
    description: "सुरक्षित और समयबद्ध स्कूल बस सेवा की सुविधा।",
    icon: <Bus className="w-8 h-8" />,
    color: "bg-orange-500",
    animation: "moving",
  },
  {
    title: "पुस्तकालय",
    description: "हजारों पुस्तकों और पत्रिकाओं के साथ शांत अध्ययन कक्ष।",
    icon: <BookOpen className="w-8 h-8" />,
    color: "bg-purple-500",
    animation: "flip",
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-600 font-bold tracking-widest uppercase text-xs"
          >
            हमारी सुविधाएं
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-emerald-950 mt-4 mb-6 font-serif"
          >
            आधुनिक सुविधाएं
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, i) => (
            <FacilityCard key={facility.title} facility={facility} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const FacilityCard: React.FC<{ facility: any; index: number }> = ({ facility, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative p-8 rounded-3xl bg-white border border-emerald-50 shadow-xl shadow-emerald-100/20 hover:shadow-2xl hover:shadow-emerald-200/40 transition-all duration-500 overflow-hidden"
    >
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-emerald-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated Icon Container */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className={cn(
          "relative w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500",
          facility.color,
          "text-white shadow-lg shadow-emerald-200"
        )}
      >
        <div className="relative z-10">
          {facility.icon}
        </div>
        {/* Icon Glow Animation */}
        {facility.animation === "glow" && (
          <motion.div
            animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-white rounded-2xl blur-md"
          />
        )}
        {/* Icon Pulse Animation */}
        {facility.animation === "pulse" && (
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 bg-red-400 rounded-2xl"
          />
        )}
      </motion.div>

      <h3 className="text-2xl font-bold text-emerald-950 mb-4 relative z-10">
        {facility.title}
      </h3>
      <p className="text-emerald-800/60 leading-relaxed relative z-10">
        {facility.description}
      </p>

      {/* Hover Line */}
      <div className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-emerald-500 to-blue-500 w-0 group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}
