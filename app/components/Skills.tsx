"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    icon: string;
    proficiency: number;
  }[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: "⚛️", proficiency: 90 },
      { name: "Next.js", icon: "▲", proficiency: 85 },
      { name: "TypeScript", icon: "TS", proficiency: 85 },
      { name: "Tailwind CSS", icon: "🎨", proficiency: 90 },
      { name: "HTML/CSS", icon: "🎨", proficiency: 95 },
      { name: "JavaScript", icon: "JS", proficiency: 90 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: "🟢", proficiency: 85 },
      { name: "Express", icon: "🚂", proficiency: 85 },
      { name: "MongoDB", icon: "🍃", proficiency: 80 },
      { name: "PostgreSQL", icon: "🐘", proficiency: 75 },
      { name: "REST APIs", icon: "🔌", proficiency: 90 },
      { name: "GraphQL", icon: "◈", proficiency: 75 },
    ],
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git", icon: "🔄", proficiency: 90 },
      { name: "Docker", icon: "🐳", proficiency: 80 },
      { name: "AWS", icon: "☁️", proficiency: 75 },
      { name: "Linux", icon: "🐧", proficiency: 85 },
      { name: "CI/CD", icon: "🔄", proficiency: 80 },
      { name: "Jest", icon: "🃏", proficiency: 85 },
    ],
  },
];

const SkillBar = ({
  name,
  icon,
  proficiency,
}: {
  name: string;
  icon: string;
  proficiency: number;
}) => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xl">{icon}</span>
          <span className="text-neutral-200 font-medium">{name}</span>
          <span className="ml-auto text-neutral-400 text-sm">
            {proficiency}%
          </span>
        </div>
      </motion.div>
      <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            height: "100%",
            background:
              "linear-gradient(to right, rgb(59, 130, 246), rgb(168, 85, 247))",
            borderRadius: "9999px",
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <div className="relative">
            <div className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Skills & Technologies
              </motion.span>
            </div>
            <div className="absolute -bottom-4 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => (
            <BackgroundGradient key={idx} className="rounded-[22px] p-1">
              <div className="bg-slate-900 rounded-[20px] p-6 h-full">
                <h3 className="text-xl font-bold text-neutral-200 mb-6 text-center">
                  {category.name}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <SkillBar
                      key={skillIdx}
                      name={skill.name}
                      icon={skill.icon}
                      proficiency={skill.proficiency}
                    />
                  ))}
                </div>
              </div>
            </BackgroundGradient>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ textAlign: "center", color: "rgb(163 163 163)" }}
        >
          <p>
            Always learning and exploring new technologies to stay at the
            cutting edge of web development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
