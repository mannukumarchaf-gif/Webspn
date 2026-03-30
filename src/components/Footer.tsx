import { motion } from "motion/react";
import React, { ReactNode, useState } from "react";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer id="contact" className="bg-emerald-950 text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                {!logoError ? (
                  <img 
                    src="/logo.png" 
                    alt="" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <GraduationCap className="w-10 h-10 text-emerald-400" />
                )}
              </div>
              <span className="font-bold text-2xl tracking-tight">
                SPN COLLEGE
              </span>
            </div>
            <p className="text-emerald-100/60 leading-relaxed text-lg">
              शिक्षा के माध्यम से समाज में सकारात्मक परिवर्तन लाना हमारा मुख्य उद्देश्य है।
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Facebook />} />
              <SocialIcon icon={<Twitter />} />
              <SocialIcon icon={<Instagram />} />
              <SocialIcon icon={<Youtube />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-emerald-400">त्वरित लिंक</h4>
            <ul className="space-y-4">
              <FooterLink href="#home">होम</FooterLink>
              <FooterLink href="#facilities">सुविधाएं</FooterLink>
              <FooterLink href="#achievements">उपलब्धियां</FooterLink>
              <FooterLink href="#gallery">गैलरी</FooterLink>
              <FooterLink href="#testimonials">प्रशंसापत्र</FooterLink>
              <FooterLink href="#contact">संपर्क</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-emerald-400">संपर्क करें</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="p-3 bg-emerald-900/50 rounded-xl text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-emerald-100/80 leading-relaxed">
                  बांसगांव जमुआन, दुदही-कुशीनगर <br /> (उत्तर प्रदेश) - 274302
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-3 bg-emerald-900/50 rounded-xl text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-emerald-100/80">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-3 bg-emerald-900/50 rounded-xl text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-emerald-100/80">info@spncollege.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-emerald-400">न्यूज़लेटर</h4>
            <p className="text-emerald-100/60 mb-6">नवीनतम अपडेट प्राप्त करने के लिए सदस्यता लें।</p>
            <div className="relative">
              <input
                type="email"
                placeholder="ईमेल दर्ज करें"
                className="w-full bg-emerald-900/50 border border-emerald-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 rounded-xl font-bold transition-colors">
                भेजें
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-emerald-900 flex flex-col md:flex-row items-center justify-between gap-6 text-emerald-100/40 text-sm">
          <p>© 2026 श्री प्रताप नारायण इंटरमीडिएट कॉलेज। सर्वाधिकार सुरक्षित।</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-emerald-400 transition-colors">गोपनीयता नीति</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">नियम और शर्तें</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: ReactNode }) {
  return (
    <motion.a
      href="#"
      whileHover={{ scale: 1.2, rotate: 10, backgroundColor: "rgba(16, 185, 129, 1)" }}
      whileTap={{ scale: 0.9 }}
      className="w-12 h-12 bg-emerald-900/50 rounded-xl flex items-center justify-center text-emerald-400 hover:text-white transition-all"
    >
      {icon}
    </motion.a>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="text-emerald-100/60 hover:text-emerald-400 hover:translate-x-2 transition-all inline-block"
      >
        {children}
      </a>
    </li>
  );
}
