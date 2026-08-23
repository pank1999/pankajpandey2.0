"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import marketingSaas from "@/public/images/marketing-saas.png";
import chat from "@/public/images/chat-app.jpg";
import videoTranscoder from "@/public/images/video-trancoding.webp";
import eCommerceApp from "@/public/images/e-commerce-app.jpg";

interface ProjectItem {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  github: string;
  tags: string[];
  featured: boolean;
}

const projectsData: ProjectItem[] = [
  {
    title: "Marketing SaaS Automation",
    subtitle: "AI Web Scraping & Variant Generation Platform",
    description:
      "Full-stack AI marketing suite that automatically scrapes client websites, generates optimized content variants using OpenAI LLMs, and schedules campaign delivery with Background Inngest queues.",
    image: marketingSaas.src,
    link: "https://marketing-saas.pankajpandey.dev",
    github: "https://github.com/pank1999/marketing-saas",
    tags: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Inngest", "OpenAI", "Playwright"],
    featured: true,
  },
  {
    title: "E-Commerce Admin Dashboard",
    subtitle: "Real-Time Inventory & Analytics Hub",
    description:
      "Enterprise e-commerce portal with real-time sales reporting, revenue analytics charts, order processing workflows, and comprehensive inventory management.",
    image: eCommerceApp.src,
    link: "https://github.com/pank1999/Myshop-E-commerce-app",
    github: "https://github.com/pank1999/Myshop-E-commerce-app",
    tags: ["React", "Node.js", "Express", "MongoDB", "Redux", "Tailwind CSS"],
    featured: true,
  },
  {
    title: "Scalable Real-Time Chat System",
    subtitle: "AI Translation & Low-Latency WebSockets",
    description:
      "Distributed instant messaging engine powered by WebSockets, Redis message brokers, and automated multilingual AI translation.",
    image: chat.src,
    link: "https://github.com/pank1999/scaleable-chat-app",
    github: "https://github.com/pank1999/scaleable-chat-app",
    tags: ["WebSocket", "Socket.io", "AI", "Node.js", "Redis", "React"],
    featured: false,
  },
  {
    title: "Cloud Video Transcoding Engine",
    subtitle: "Distributed Microservices Video Transcoder",
    description:
      "Asynchronous video processing service converting user video uploads into adaptive HLS streaming formats with queue management and cloud storage.",
    image: videoTranscoder.src,
    link: "https://github.com/pank1999/video-transcoder",
    github: "https://github.com/pank1999/video-transcoder",
    tags: ["Node.js", "FFmpeg", "AWS S3", "Docker", "Express", "Redis"],
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#060913] relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 via-purple-600/10 to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 tracking-tight">
              <span className="gradient-text-silver">Crafted </span>
              <span className="gradient-text-cyan-purple">Projects</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg mt-3">
              Explore high-performance web apps, AI automation systems, and microservice architectures built for scale.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col group"
            >
              {/* Image Preview Container */}
              <div className="relative w-full h-64 overflow-hidden bg-slate-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-[#060913]/30 to-transparent" />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 text-xs font-mono font-bold shadow-[0_0_10px_rgba(0,240,255,0.4)] backdrop-blur-md">
                    ⭐ Featured Project
                  </div>
                )}

                {/* Hover Quick Buttons */}
                <div className="absolute inset-0 bg-[#060913]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex items-center justify-center gap-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="px-4 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all flex items-center gap-1.5"
                  >
                    Live Demo 🚀
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    className="px-4 py-2.5 rounded-xl glass-panel text-slate-200 border border-purple-500/50 font-bold text-xs uppercase tracking-wider hover:border-cyan-400 hover:text-cyan-300 transition-all flex items-center gap-1.5"
                  >
                    GitHub 💻
                  </Link>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-cyan-400 font-mono text-xs mt-1 font-medium">
                    {project.subtitle}
                  </p>
                  <p className="text-slate-300 text-sm mt-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-800">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full text-xs font-mono text-cyan-300 bg-cyan-950/50 border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;

