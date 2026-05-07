import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  "About",
  "Skills",
  "Projects",
  "Certificates",
  "Experience",
  "Contact",
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-slate-950/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold tracking-wide text-white"
          >
            Ram.dev
          </motion.h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase()}`}
                className="text-slate-300 hover:text-white transition duration-300"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Desktop Resume Button */}
          <div className="hidden md:block">
            <a
              href="https://drive.google.com/file/d/1fS3A7ZoKGTAwv_ss9Z9I7WdZTN7Kpsjr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-white text-black font-medium hover:scale-105 transition duration-300 inline-block"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-900 border-t border-white/10"
        >
          <div className="flex flex-col px-6 py-6 gap-5">

            {navLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase()}`}
                className="text-slate-300 hover:text-white transition"
                onClick={() => setMobileMenu(false)}
              >
                {link}
              </a>
            ))}

            {/* Mobile Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-5 py-3 rounded-full bg-white text-black font-medium inline-block text-center"
            >
              Resume
            </a>

          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;