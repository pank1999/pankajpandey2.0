"use client";
import React from "react";
import { motion } from "framer-motion";
import ThreeSkillOrb from "./ThreeSkillOrb";

interface SkillCategory {
  name: string;
  icon: string;
  skills: {
    name: string;
    level: number;
    tag: string;
  }[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Full Stack & Frontend",
    icon: "⚡",
    skills: [
      { name: "React / Next.js 14+", level: 95, tag: "Expert" },
      { name: "TypeScript / JavaScript", level: 92, tag: "Core" },
      { name: "Tailwind CSS & Framer", level: 90, tag: "Styling" },
      { name: "Three.js & Canvas", level: 85, tag: "3D & WebGL" },
      { name: "Angular & Web State", level: 82, tag: "Enterprise" },
    ],
  },
  {
    name: "Backend & Systems",
    icon: "🟢",
    skills: [
      { name: "Node.js & Express / NestJS", level: 92, tag: "Microservices" },
      { name: "Python & Fast API", level: 88, tag: "Automation" },
      { name: "PostgreSQL & Prisma", level: 86, tag: "Relational DB" },
      { name: "Redis & Inngest Jobs", level: 85, tag: "Queues" },
      { name: "ClickHouse & PostHog", level: 80, tag: "Analytics" },
    ],
  },
  {
    name: "AI, Cloud & DevOps",
    icon: "🤖",
    skills: [
      { name: "OpenAI API & LangChain", level: 90, tag: "AI Integration" },
      { name: "Docker & Containerization", level: 85, tag: "DevOps" },
      { name: "Kubernetes & Azure", level: 82, tag: "Orchestration" },
      { name: "AWS Services & CI/CD", level: 80, tag: "Cloud Infrastructure" },
      { name: "Playwright Automation", level: 88, tag: "Scraping" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#060913] relative overflow-hidden">
      {/* Background glow ambient circles */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30">
              Technical Stack
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 tracking-tight">
              <span className="gradient-text-silver">Skills & </span>
              <span className="gradient-text-cyan-purple">Technologies</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg mt-3">
              Hands-on mastery across full stack architecture, AI pipelines, distributed backend microservices, and 3D web experiences.
            </p>
          </motion.div>
        </div>

        {/* 3D Interactive Skill Orb & Grid Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left: 3D WebGL Skill Sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 glass-panel rounded-3xl p-6 border border-cyan-500/30 shadow-[0_0_40px_rgba(0,240,255,0.1)] relative"
          >
            <div className="flex items-center justify-between mb-2 px-2">
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <span className="text-cyan-400">🌐</span> 3D Tech Cosmos
              </h3>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/30">
                Interactive WebGL
              </span>
            </div>
            <ThreeSkillOrb />
          </motion.div>

          {/* Right: Categorized Skill Progress Bars */}
          <div className="lg:col-span-7 space-y-6">
            {skillsData.map((category, catIdx) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIdx * 0.15 }}
                className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-5 border-b border-slate-800/80 pb-3">
                  <span className="text-2xl p-2 rounded-xl bg-slate-900 border border-slate-700/60">
                    {category.icon}
                  </span>
                  <h3 className="text-xl font-bold text-slate-100">
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-sm font-medium">
                        <span className="text-slate-200 flex items-center gap-2">
                          {skill.name}
                          <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/70 border border-cyan-500/30 px-2 py-0.5 rounded-full">
                            {skill.tag}
                          </span>
                        </span>
                        <span className="text-cyan-400 font-mono text-xs">{skill.level}%</span>
                      </div>

                      <div className="h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.2 + skillIdx * 0.1 }}
                          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full shadow-[0_0_10px_rgba(0,240,255,0.5)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;

