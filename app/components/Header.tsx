"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import me from "@/public/images/me.jpeg";

const meImg = me.src;

const navItems = [
  { name: "About", href: "#hero" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 150);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-[#060913]/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,240,255,0.05)]"
          : "bg-transparent"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Status Badge */}
          <div className="flex items-center gap-4">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-[2px] shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.7)] group-hover:scale-105 transition-all duration-300">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#060913] relative">
                  <Image
                    src={meImg}
                    alt="Pankaj Pandey"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    priority
                  />
                </div>
              </div>
              <span className="font-bold text-lg hidden sm:block tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400">
                Pankaj Pandey<span className="text-cyan-400">.dev</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Available for Hire
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 glass-panel px-4 py-1.5 rounded-full border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${isActive
                      ? "text-cyan-300 font-semibold"
                      : "text-slate-400 hover:text-slate-100"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/40 shadow-[0_0_12px_rgba(0,240,255,0.3)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </button>
              );
            })}
          </div>

          {/* CTA Resume Button */}
          <div className="hidden md:flex items-center">
            <a
              href="https://drive.google.com/file/d/1afIMKyOHxI9Og34-R9-HNFgjOGbKN7h4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-100 bg-gradient-to-r from-cyan-500 to-purple-600 p-[1px] shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all duration-300"
            >
              <span className="block px-4 py-1.5 rounded-full bg-[#060913] group-hover:bg-transparent transition-colors duration-300">
                Resume ⚡
              </span>
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl glass-panel text-cyan-400 border border-cyan-500/30"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden glass-panel rounded-2xl p-4 mb-4 border border-cyan-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          >
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${activeSection === item.href.substring(1)
                      ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/40"
                      : "text-slate-300 hover:bg-slate-800/50"
                    }`}
                >
                  {item.name}
                </button>
              ))}
              <a
                href="https://drive.google.com/file/d/1afIMKyOHxI9Og34-R9-HNFgjOGbKN7h4/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-3 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 font-bold text-sm text-white shadow-[0_0_15px_rgba(0,240,255,0.4)]"
              >
                Download Resume 📄
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;

