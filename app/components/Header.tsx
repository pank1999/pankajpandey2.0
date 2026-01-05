"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Link from "next/link";

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
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
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
    setIsMobileMenuOpen(false); // Close mobile menu first
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 300); // Wait for menu to close
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-xl bg-slate-900/80" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link
              href="/"
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
            >
              PP
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "text-blue-500"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Resume Download Button */}
          <div className="hidden md:flex items-center">
            <BackgroundGradient className="rounded-full p-[1px]">
              <a
                href="https://drive.google.com/file/d/1afIMKyOHxI9Og34-R9-HNFgjOGbKN7h4/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                download={true}
                className="relative inline-flex items-center px-4 py-2 rounded-full bg-slate-900 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
              >
                <span className="relative z-10">Download Resume</span>
              </a>
            </BackgroundGradient>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-neutral-400 hover:text-neutral-200 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
          style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-xl bg-slate-900/95 rounded-lg mb-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20,
                }}
                transition={{ delay: index * 0.05 }}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "text-blue-500 bg-slate-800/50"
                    : "text-neutral-400 hover:text-neutral-200 hover:bg-slate-800/30"
                }`}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : -20,
              }}
              transition={{ delay: navItems.length * 0.05 }}
              className="pt-2"
            >
              <BackgroundGradient className="rounded-full p-[1px]">
                <a
                  href="/resume.pdf"
                  download
                  className="block text-center px-4 py-2 rounded-full bg-slate-900 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
                >
                  Download Resume
                </a>
              </BackgroundGradient>
            </motion.div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;
