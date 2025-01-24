"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";
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
    degree: "Bachelor of Technology in Computer Science",
    duration: "2018 - 2022",
    location: "Satna,Madhya Pradesh",
    gpa: "8.59 CGPA",
    logo: rgpvLogo.src,
    courses: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management",
      "Computer Networks",
      "Web Development",
      "Software Engineering",
    ],
  },
  {
    institution: "Blooms Academy",
    degree: "High Secondary",
    duration: "2017 - 2018",
    location: "Satna, Madhya Pradesh",
    gpa: "61% GPA",
    logo: bloomsLogo.src,
    courses: ["Mathematics", "Physics", "Chemistry", "Computer", "English"],
  },
  {
    institution: "Blooms Academy",
    degree: "High School",
    duration: "2015 - 2016",
    location: "Satna, Madhya Pradesh",
    gpa: "71% GPA",
    logo: bloomsLogo.src,
    courses: ["Mathematics", "Hindi", "Social Science", "Computer", "English"],
  },
];

// Fixed positions for particles to avoid hydration mismatch
const particlePositions = [
  { top: "20%", left: "20%" },
  { top: "60%", left: "50%" },
  { top: "30%", left: "80%" },
];

const Education = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center mb-16">
          <div className="relative">
            <div className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Education
              </motion.span>
            </div>
            <div className="absolute -bottom-4 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {educationData.map((edu, index) => (
            <div key={index} className="relative group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <BackgroundGradient className="rounded-[22px]">
                  <div className="relative bg-slate-900 backdrop-blur-xl rounded-[20px] p-8 overflow-hidden border border-slate-800">
                    {/* Floating Particles Background */}
                    <div className="absolute inset-0 overflow-hidden">
                      {particlePositions.map((pos, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-blue-500/10 rounded-full animate-float"
                          style={{
                            top: pos.top,
                            left: pos.left,
                            animationDelay: `${i * 2}s`,
                          }}
                        />
                      ))}
                    </div>

                    <div className="grid md:grid-cols-[1fr_2fr] gap-8">
                      {/* Left Column - Logo and Basic Info */}
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="relative w-32 h-32 rounded-2xl bg-slate-800 p-4 ring-2 ring-blue-500/20 group-hover:ring-blue-500/50 transition-all duration-300">
                          <Image
                            src={edu.logo}
                            alt={`${edu.institution} logo`}
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-blue-400 mb-1">
                            {edu.institution}
                          </h3>
                          <p className="text-neutral-300">{edu.location}</p>
                          <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm">
                            {edu.gpa}
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Degree and Courses */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-semibold text-neutral-200 mb-2">
                            {edu.degree}
                          </h4>
                          <p className="text-neutral-400">{edu.duration}</p>
                        </div>

                        <div>
                          <h5 className="text-sm font-semibold text-blue-400 mb-3">
                            Key Courses
                          </h5>
                          <div className="grid grid-cols-2 gap-2">
                            {edu.courses.map((course, idx) => (
                              <div
                                key={idx}
                                className="px-4 py-2 bg-slate-800/50 rounded-xl text-sm text-neutral-300 border border-slate-700/50 hover:border-blue-500/50 transition-colors backdrop-blur-sm group-hover:bg-slate-800/70"
                              >
                                {course}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </BackgroundGradient>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(0) translateX(10px);
          }
          75% {
            transform: translateY(10px) translateX(5px);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Education;
