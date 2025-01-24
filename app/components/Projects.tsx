"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import Link from "next/link";
import fileSVG from "@/public/file.svg";
import marketingSaas from "@/public/images/marketing-saas.png";
import chat from "@/public/images/chat-app.jpg";
import videoTranscoder from "@/public/images/video-trancoding.webp";
import eCommerceApp from "@/public/images/e-commerce-app.jpg";

interface ProjectItem {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  tags: string[];
  featured: boolean;
}

const projectsData: ProjectItem[] = [
  {
    title: "Marketing Saas",
    description:
      "Modern portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion. Features smooth animations, responsive design, and interactive UI components.",
    image: marketingSaas.src,
    link: "https://marketing-saas.pankajpandey.dev",
    github: "https://github.com/pank1999/marketing-saas",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    featured: true,
  },
  {
    title: "E-commerce Dashboard",
    description:
      "Full-stack e-commerce admin dashboard with real-time analytics, inventory management, and order processing capabilities.",
    image: eCommerceApp.src,
    link: "https://github.com/pank1999/Myshop-E-commerce-app",
    github: "https://github.com/pank1999/Myshop-E-commerce-app",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    featured: true,
  },
  {
    title: "Scalable Chat Application",
    description:
      "Real-time chat application powered by AI for smart responses and language translation. Built with WebSocket for instant messaging.",
    image: chat.src,
    link: "https://github.com/pank1999/scaleable-chat-app",
    github: "https://github.com/pank1999/scaleable-chat-app",
    tags: ["WebSocket", "AI", "React", "Node.js", "Socket.io"],
    featured: false,
  },
  {
    title: "Video Transcoder",
    description:
      "Real-time chat application powered by AI for smart responses and language translation. Built with WebSocket for instant messaging.",
    image: videoTranscoder.src,
    link: "https://github.com/pank1999/video-transcoder",
    github: "https://github.com/pank1999/video-transcoder",
    tags: ["WebSocket", "AI", "React", "Node.js", "Socket.io"],
    featured: false,
  },
];

const ProjectCard = ({ project }: { project: ProjectItem }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0 1", "1.5 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <div className="mb-8 last:mb-0">
      <motion.div
        ref={cardRef}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
      >
        <BackgroundGradient className="rounded-[22px] p-1 h-full">
          <div className="bg-slate-900 rounded-[20px] p-6 h-full flex flex-col md:flex-row gap-8">
            {/* Project Image */}
            <div className="relative w-full md:w-1/2 h-[300px] rounded-lg overflow-hidden group">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <Link
                  href={project.link}
                  target="_blank"
                  className="bg-slate-900/80 p-3 rounded-full hover:bg-slate-800 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  className="bg-slate-900/80 p-3 rounded-full hover:bg-slate-800 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Project Info */}
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-neutral-200 mb-3">
                {project.title}
              </h3>
              <p className="text-neutral-400 text-base mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs bg-slate-800 text-blue-400 rounded-full border border-slate-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </BackgroundGradient>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <section
      ref={containerRef}
      className="py-20 bg-slate-900 relative overflow-hidden"
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 opacity-40">
        <motion.div
          style={{
            y: backgroundY,
            position: "absolute",
            inset: 0,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f6,transparent)]" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <motion.div
            style={{
              y: textY,
            }}
          >
            <div className="relative">
              <div className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Featured Projects
                </motion.span>
              </div>
              <div className="absolute -bottom-4 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Projects List */}
        <div className="space-y-24">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
