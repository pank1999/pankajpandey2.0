"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import rgpvLogo from "@/public/images/rgpv_logo.png";
import bloomsLogo from "@/public/images/blooms.jpeg";

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  gpa: string;
  logo: string;
  courses: string[];
}

const educationData: EducationItem[] = [
  {
    institution: "RGPV University Bhopal",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    duration: "2018 - 2022",
    location: "Madhya Pradesh, India",
    gpa: "8.59 CGPA",
    logo: rgpvLogo.src,
    courses: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Web Application Development",
      "Software Engineering",
    ],
  },
  {
    institution: "Blooms Academy",
    degree: "Higher Secondary Certificate (Physics, Math, CS)",
    duration: "2017 - 2018",
    location: "Satna, Madhya Pradesh",
    gpa: "61% Grade",
    logo: bloomsLogo.src,
    courses: ["Mathematics", "Physics", "Chemistry", "Computer Science", "English"],
  },
  {
    institution: "Blooms Academy",
    degree: "High School Secondary Education",
    duration: "2015 - 2016",
    location: "Satna, Madhya Pradesh",
    gpa: "71% Grade",
    logo: bloomsLogo.src,
    courses: ["Mathematics", "Computer Science", "Science", "Social Studies", "English"],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-[#060913] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-purple-400 text-xs font-mono font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30">
              Academic Background
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 tracking-tight">
              <span className="gradient-text-silver">Education & </span>
              <span className="gradient-text-cyan-purple">Credentials</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg mt-3">
              Strong foundation in Computer Science fundamentals, algorithm design, and core software engineering principles.
            </p>
          </motion.div>
        </div>

        {/* Education Cards Stack */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 border border-white/10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Column: Logo & Institution Details */}
                <div className="lg:col-span-5 flex items-center gap-5 border-b lg:border-b-0 lg:border-r border-slate-800 pb-6 lg:pb-0 lg:pr-8">
                  <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-slate-700/80 p-2.5 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.6)] shrink-0">
                    <div className="relative w-full h-full">
                      <Image
                        src={edu.logo}
                        alt={edu.institution}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-100">
                      {edu.institution}
                    </h3>
                    <p className="text-sm text-slate-400 font-medium">
                      📍 {edu.location}
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30">
                        {edu.gpa}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30">
                        {edu.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Degree Name & Courses */}
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-cyan-300">
                      {edu.degree}
                    </h4>
                  </div>

                  <div>
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 font-bold">
                      Key Coursework:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-3 py-1 rounded-lg text-xs font-mono text-slate-300 bg-slate-900 border border-slate-700/60"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;

