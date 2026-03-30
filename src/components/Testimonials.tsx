import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "राजेश कुमार",
    role: "अभिभावक",
    text: "मेरे बच्चों के लिए यह स्कूल सबसे अच्छा निर्णय था। यहाँ की शिक्षा और अनुशासन सराहनीय है।",
    avatar: "https://i.pravatar.cc/150?u=rajesh",
  },
  {
    name: "सुनीता सिंह",
    role: "अभिभावक",
    text: "स्मार्ट क्लास और आधुनिक लैब ने बच्चों के सीखने के तरीके को पूरी तरह बदल दिया है।",
    avatar: "https://i.pravatar.cc/150?u=sunita",
  },
  {
    name: "अमित वर्मा",
    role: "पूर्व छात्र",
    text: "इस कॉलेज ने मुझे न केवल शिक्षा दी, बल्कि जीवन की चुनौतियों के लिए भी तैयार किया।",
    avatar: "https://i.pravatar.cc/150?u=amit",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-emerald-600 font-bold tracking-widest uppercase text-xs"
          >
            अभिभावकों की राय
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-emerald-950 mt-4 font-serif"
          >
            क्या कहते हैं लोग
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-emerald-50/50 backdrop-blur-md p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] border border-emerald-100 shadow-2xl shadow-emerald-100/30 relative"
            >
              <Quote className="absolute top-10 left-10 w-16 h-16 text-emerald-200/50 -z-10" />
              
              <div className="flex flex-col items-center text-center">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-2xl md:text-3xl font-medium text-emerald-900 mb-10 leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-emerald-950">
                      {testimonials[currentIndex].name}
                    </h4>
                    <span className="text-emerald-600 font-medium">
                      {testimonials[currentIndex].role}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="p-4 bg-white border border-emerald-100 rounded-full text-emerald-600 shadow-lg hover:bg-emerald-600 hover:text-white transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="p-4 bg-white border border-emerald-100 rounded-full text-emerald-600 shadow-lg hover:bg-emerald-600 hover:text-white transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
