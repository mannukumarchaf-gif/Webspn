import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, GraduationCap, Laptop, Microscope, BookOpen, Trophy, Fan, Zap } from "lucide-react";

const featurePoints = [
  {
    title: "L.K.G. से इण्टरमीडिएट",
    desc: "कुशल एवं प्रशिक्षित अध्यापकों द्वारा गुणवत्तापूर्ण शिक्षण कार्य।",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    title: "स्मार्ट एवं प्रोजेक्टर क्लास",
    desc: "आधुनिक तकनीक के माध्यम से विषयों को समझने की बेहतर व्यवस्था।",
    icon: <Laptop className="w-6 h-6" />,
  },
  {
    title: "मासिक परीक्षा व्यवस्था",
    desc: "छात्रों की प्रगति की निगरानी के लिए प्रत्येक माह के अंत में परीक्षा।",
    icon: <CheckCircle2 className="w-6 h-6" />,
  },
  {
    title: "विज्ञान प्रयोगशाला",
    desc: "विज्ञान वर्ग के छात्रों के लिए प्रयोगात्मक ज्ञान हेतु सुसज्जित लैब।",
    icon: <Microscope className="w-6 h-6" />,
  },
  {
    title: "कम्प्यूटर शिक्षण",
    desc: "आज की आधुनिकता को ध्यान में रखते हुए विशेष कम्प्यूटर शिक्षा।",
    icon: <Laptop className="w-6 h-6" />,
  },
  {
    title: "छात्रवृत्ति की व्यवस्था",
    desc: "योग्य और मेधावी छात्र/छात्राओं के लिए विशेष छात्रवृत्ति सुविधा।",
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    title: "प्रतियोगी परीक्षाओं की तैयारी",
    desc: "सैनिक स्कूल, नवोदय विद्यालय आदि परीक्षाओं के लिए विशेष तैयारी।",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    title: "सुविधाजनक वातावरण",
    desc: "प्रत्येक कमरे में पंखे और निर्बाध बिजली हेतु जनरेटर की सुविधा।",
    icon: <Zap className="w-6 h-6" />,
  },
];

export default function KeyFeatures() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-emerald-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-emerald-600 font-bold tracking-widest uppercase text-xs"
          >
            हमारी विशेषताएं
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-emerald-950 mt-4 font-serif"
          >
            हम क्यों हैं सबसे अलग?
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featurePoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-4 md:p-6 bg-white rounded-2xl md:rounded-3xl border border-emerald-100 shadow-xl shadow-emerald-100/20 flex flex-col items-start group hover:border-emerald-500 transition-all duration-300"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-100 rounded-xl md:rounded-2xl flex items-center justify-center text-emerald-600 mb-4 md:mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                {React.cloneElement(point.icon as React.ReactElement, { className: "w-5 h-5 md:w-6 md:h-6" })}
              </div>
              <h3 className="text-sm md:text-lg font-bold text-emerald-950 mb-2 md:mb-3 leading-tight">{point.title}</h3>
              <p className="text-emerald-800/60 text-[10px] md:text-sm leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
