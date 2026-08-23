"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import skyhypeLogo from "@/public/images/skyhype.png";
import upcredLogo from "@/public/images/upcred_logo.jpeg";
import wisfluxLogo from "@/public/images/wisflux.png";
import optimeleonLogo from "@/public/images/optimeleon-logo.png";
import eximietasLogo from "@/public/images/eximietas_design_logo.jpeg";

interface ExperienceItem {
  title: string;
  company: string;
  companyLogo: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[]
  highlightTag: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Software Engineer",
    company: "Eximietas Desgin",
    duration: "June 2026 - Present",
    location: "Banglore, India",
    companyLogo: eximietasLogo.src,
    highlightTag: "Gen AI & RAG Infrastructure",
    description: [
      "Lead design and delivery of an enterprise-grade RAG (Retrieval-Augmented Generation) platform, seamlessly integrating LangChain and OpenAI APIs to provide AI-powered analytics.",
      "Developed multi-modal input processing pipelines enabling structured data extraction and semantic search across diverse document formats including text, images, and PDFs.",
      "Engineered advanced monitoring and evaluation frameworks to continuously measure model accuracy, latency, and token efficiency, ensuring deterministic and reliable AI responses.",
      "Optimized cloud resource utilization through intelligent data chunking strategies and hybrid caching mechanisms, reducing operational costs by over 40%.",
    ],
    technologies: [
      "Next.js", "React", "Node.js", "TypeScript", "Python",
      "PostgreSQL", "Docker", "Kubernetes", "Azure",
      "Redis", "LangChain", "OpenAI API", "Playwright", "ClickHouse", "PostHog"
    ],

  },
  {
    title: "Full Stack Software Engineer",
    company: "Optimeleon AI Pvt. Limited",
    companyLogo: optimeleonLogo.src,
    duration: "Mar 2025 - June 2026",
    location: "Remote / Hybrid",
    highlightTag: "AI & Scraping Infrastructure",
    description: [
      "Architected scalable web application integrated with AI and LLMs, enabling automated content generation and dynamic data retrieval.",
      "Engineered automated client web scraping system extracting rich DOM datasets, reducing manual setup effort by 75%.",
      "Implemented background job queues and processing pipelines for data-intensive calculations, boosting real-time conversion event tracking by 100%.",
      "Designed real-time analytics dashboard presenting actionable user metrics, elevating platform user engagement by 30%.",
    ],
    technologies: [
      "Next.js", "React", "Node.js", "TypeScript", "Python",
      "Prisma", "PostgreSQL", "Docker", "Kubernetes", "Azure",
      "Inngest", "Redis", "LangChain", "OpenAI API", "Playwright", "ClickHouse", "PostHog"
    ],
  },
  {
    title: "Software Engineer - Full Stack",
    company: "Wisflux Private Limited",
    companyLogo: wisfluxLogo.src,
    duration: "Sep 2022 - Feb 2025",
    location: "Noida, India",
    highlightTag: "AdTech Microservices & DOOH",
    description: [
      "Led end-to-end development of high-throughput full-stack software systems utilizing Angular, React, Node.js, and TypeScript.",
      "Engineered Demand Side Platform (DSP) and Supply Side Platform (SSP) engines for Digital Out-Of-Home (DOOH) advertising screens.",
      "Designed microservices architecture and interactive planner module enabling automated ad campaign scheduling, saving hundreds of admin hours.",
    ],
    technologies: [
      "Angular", "React", "Node.js", "TypeScript", "NestJS",
      "Sequelize", "PostgreSQL", "Docker", "Kubernetes", "AWS"
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "UPCRED",
    companyLogo: upcredLogo.src,
    duration: "Oct 2021 - Dec 2021",
    location: "Remote",
    highlightTag: "Influencer Marketing Platform",
    description: [
      "Built responsive frontend modules for influencer marketing web platforms using React and modern JavaScript.",
      "Integrated smooth scroll-triggered animations and UI components, increasing user retention and interactivity.",
    ],
    technologies: ["JavaScript", "TypeScript", "React", "CSS3", "Git", "AOS"],
  },
  {
    title: "Full Stack Developer Intern",
    company: "SkyHype",
    companyLogo: skyhypeLogo.src,
    duration: "Jun 2021 - Sep 2021",
    location: "Remote",
    highlightTag: "Web App Performance",
    description: [
      "Developed web features and modular UI interfaces using React.",
      "Optimized web performance, eliminated frontend bugs, and streamlined client application load speeds.",
    ],
    technologies: ["JavaScript", "React", "CSS3", "Git"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#060913] relative overflow-hidden">
      {/* Background neon ambient blur */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-purple-400 text-xs font-mono font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30">
              Career Evolution
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 tracking-tight">
              <span className="gradient-text-silver">Professional </span>
              <span className="gradient-text-cyan-purple">Journey</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg mt-3">
              4+ years of engineering robust software systems, leading AI workflows, and crafting high-scale applications.
            </p>
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Glowing central vertical timeline bar */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 transform -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.5)]" />

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.company + index}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""
                    }`}
                >
                  {/* Timeline Glowing Beacon Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-[#060913] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.8)]">
                      <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                    </div>
                  </div>

                  {/* Experience Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? "md:pl-12" : "md:pr-12"
                      } w-full`}
                  >
                    <div className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 border border-white/10 relative group">

                      {/* Top Header: Logo + Role */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700/80 p-2 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] shrink-0">
                            <div className="relative w-full h-full">
                              <Image
                                src={exp.companyLogo}
                                alt={exp.company}
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                              {exp.title}
                            </h3>
                            <p className="text-cyan-400 font-medium text-sm">
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        <div className="text-left sm:text-right">
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold text-purple-300 bg-purple-950/60 border border-purple-500/30">
                            {exp.duration}
                          </span>
                        </div>
                      </div>

                      {/* Highlight Tag */}
                      <div className="mb-4">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-300 bg-cyan-950/80 border border-cyan-500/40 px-3 py-1 rounded-full">
                          🎯 {exp.highlightTag}
                        </span>
                      </div>

                      {/* Description Bullet points */}
                      <ul className="space-y-2.5 text-slate-300 text-sm leading-relaxed mb-6">
                        {exp.description.map((desc, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5">
                            <span className="text-cyan-400 font-bold mt-0.5">›</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies Stack */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-900/80 text-slate-300 border border-slate-700/60 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;

