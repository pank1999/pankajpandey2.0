"use client";
import React from "react";
import { motion } from "framer-motion";
import ThreeCanvasHero from "./ThreeCanvasHero";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#060913] pt-20">
      {/* 3D WebGL Background Canvas */}
      <ThreeCanvasHero />

      {/* Radial Gradient Glow Overlays */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 via-purple-600/20 to-pink-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-12 flex flex-col items-center">

        {/* Status Pill Badge */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-cyan-400/40 shadow-[0_0_20px_rgba(0,240,255,0.2)]"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#00f0ff]" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
            Full Stack Engineer • 4+ Years Exp
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight">
            <span className="gradient-text-silver block">Pankaj</span>
            <span className="gradient-text-cyan-purple block mt-1">Pandey</span>
          </h1>

          <p className="text-xl md:text-2xl font-semibold text-cyan-300 tracking-wide font-mono">
            Architecting Scalable AI & Web Systems 🚀
          </p>
        </motion.div>

        {/* Bio Text */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-slate-300 max-w-2xl text-base sm:text-lg leading-relaxed glass-panel p-6 rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
        >
          Full Stack Software Engineer with <span className="text-cyan-400 font-semibold">4+ years of professional experience</span> building LLM-integrated platforms, real-time distributed microservices, web automation scrapers, and intuitive web user experiences.
        </motion.p>

        {/* Action Buttons & Quick Highlights */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-slate-900 bg-gradient-to-r from-cyan-400 via-cyan-300 to-purple-400 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] hover:scale-105 transition-all duration-300"
          >
            Explore Projects ⚡
          </button>

          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-slate-200 glass-panel border border-purple-500/40 hover:border-cyan-400 hover:text-cyan-300 shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:scale-105 transition-all duration-300"
          >
            Get In Touch 📬
          </button>
        </motion.div>

        {/* Floating Quick Tech Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-3 text-xs font-mono text-slate-400"
        >
          <span className="px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/20 text-cyan-300">
            ⚡ Next.js / React
          </span>
          <span className="px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/20 text-purple-300">
            🤖 LLMs & OpenAI
          </span>
          <span className="px-3.5 py-1.5 rounded-full glass-panel border border-pink-500/20 text-pink-300">
            🐳 Docker & Kubernetes
          </span>
          <span className="px-3.5 py-1.5 rounded-full glass-panel border border-emerald-500/20 text-emerald-300">
            🛢️ PostgreSQL & Redis
          </span>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-70">
        <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-400 animate-pulse">
          Scroll Down
        </span>
        <div className="w-5 h-9 rounded-full border-2 border-cyan-500/40 p-1">
          <div className="w-1.5 h-2.5 bg-cyan-400 rounded-full mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

