import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, GraduationCap } from "lucide-react";
import { cn } from "@/src/lib/utils";

const navLinks = [
  { name: "होम", href: "#home" },
  { name: "सुविधाएं", href: "#facilities" },
  { name: "उपलब्धियां", href: "#achievements" },
  { name: "गैलरी", href: "#gallery" },
  { name: "प्रशंसापत्र", href: "#testimonials" },
  { name: "संपर्क", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [logoError, setLogoError] = useState(false);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-lg py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center gap-3 sm:gap-4"
        >
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 flex items-center justify-center">
            {!logoError ? (
              <img 
                src="/logo.png" 
                alt="" 
                className="w-full h-full object-contain drop-shadow-xl"
                referrerPolicy="no-referrer"
                onError={() => setLogoError(true)}
              />
            ) : (
              <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-600" />
            )}
          </div>
          <span className={cn(
            "font-bold text-xl sm:text-2xl tracking-tight whitespace-nowrap",
            isScrolled ? "text-emerald-900" : "text-emerald-900"
          )}>
            SPN COLLEGE
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "text-sm font-medium transition-colors hover:text-emerald-600",
                isScrolled ? "text-emerald-800" : "text-emerald-900"
              )}
            >
              {link.name}
            </motion.a>
          ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-emerald-200 shadow-xl hover:bg-emerald-700 transition-all"
            >
              अभी प्रवेश लें
            </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-emerald-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-emerald-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-emerald-900 hover:text-emerald-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
                अभी प्रवेश लें
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
