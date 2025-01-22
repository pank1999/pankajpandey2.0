"use client";
import React from "react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

interface ExperienceItem {
  title: string;
  company: string;
  companyLogo: string;
  duration: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer-Full Stack ",
    company: "Wisflux Private Limited",
    companyLogo: "https://avatars.githubusercontent.com/u/24906873?s=200&v=4",
    duration: "Sep 2022 - Present",
    description: [
      "Led development of multiple full-stack applications using Angular, React, Node.js, and TypeScript",
      "I actively participated in the development of Demand Side Platform (DSP) and Supply Side Platform (SSP) software tailored for Digital Out-Of-Home (DOOH) screens, implementing a micro-services architecture and leveraging various desktop and web technologies for advertising purposes",
      "I conceived and brought to life a planner module with the specific goal of empowering administrators to effortlessly configure campaigns. By streamlining this process, we aimed to maximise efficiency and minimise time spent on manual configuration tasks",
    ],
    technologies: [
      "Angular",
      "React",
      "JavaScript",
      "Node.js",
      "TypeScript",
      "Nest.js",
      "Sequelize",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "AWS",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "UPCRED",
    companyLogo:
      "https://media.licdn.com/dms/image/v2/D4D0BAQFBiPq-JjUUXg/company-logo_200_200/company-logo_200_200/0/1719472961041/upcred_logo?e=2147483647&v=beta&t=ZEOWkAY0CZe12YAO2z79LhPuj07JCK_fR6k1rz1PD1g",
    duration: "Oct 2021 - Dec 2021",
    description: [
      "Developed and maintained web applications using modern JavaScript frameworks",
      "Collaborated seamlessly with development teams on Influencer Marketing projects, leveraging Bitbucket as our central repository and harnessing the power of React for frontend development",
      "Integrated scroll-triggered animations into our User Interface, I elevated user experience to new heights, ensuring seamless interaction and engagement",
    ],
    technologies: ["JavaScript", "TypeScript", "React", "CSS", "Git", "AOS"],
  },
  {
    title: "Full Stack Developer Intern",
    company: "SkyHype",
    companyLogo:
      "https://scontent.fjai10-1.fna.fbcdn.net/v/t39.30808-6/222807320_339955934497038_5176675288617082885_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=cFAlGz_WKiwQ7kNvgECwgWH&_nc_zt=23&_nc_ht=scontent.fjai10-1.fna&_nc_gid=A6Wnh1zqErhWsVg7BeSEUZ4&oh=00_AYD3WGboOnXBcdHS7m5ljBirC4xGWzQXK-h0mXMGZrca0Q&oe=67904C30",
    duration: "Jun 2021 - Sep 2021",
    description: [
      "Developed and maintained web applications using modern JavaScript frameworks",
      "Worked on bug fixing and improving application performance",
    ],
    technologies: ["JavaScript", "React", "CSS", "Git"],
  },
];

const Experience = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-16">
          Professional Journey
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

          {/* Experience items */}
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 transform -translate-x-1/2 mt-6">
                <div className="w-4 h-4 rounded-full bg-blue-500 animate-ping" />
              </div>

              {/* Content */}
              <div className="ml-12 md:ml-0 md:w-1/2">
                <CardContainer className="inter-var">
                  <CardBody className="bg-slate-800 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-800 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                    {/* Company Logo Section */}
                    <CardItem
                      translateZ="100"
                      className="absolute -top-12 left-1/2 transform -translate-x-1/2"
                    >
                      <div className="w-24 h-24 rounded-full bg-slate-900 p-2 shadow-lg border border-slate-600">
                        <div className="relative w-full h-full rounded-full overflow-hidden">
                          <Image
                            src={experience.companyLogo}
                            alt={`${experience.company} logo`}
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                      </div>
                    </CardItem>

                    {/* Main Content with more spacing from top for logo */}
                    <div className="mt-14">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-200 mb-1"
                      >
                        {experience.title}
                      </CardItem>

                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-blue-400 font-semibold mb-2"
                      >
                        {experience.company}
                      </CardItem>

                      <CardItem
                        as="p"
                        translateZ="40"
                        className="text-neutral-400 text-sm mb-4"
                      >
                        {experience.duration}
                      </CardItem>

                      <CardItem
                        translateZ="30"
                        className="text-neutral-300 space-y-2 mb-4"
                      >
                        <ul>
                          {experience.description.map((item, idx) => (
                            <li key={idx} className="flex items-start mb-2">
                              <span className="mr-2 text-blue-500">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardItem>

                      <CardItem translateZ="20" className="mt-auto">
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-sm bg-slate-700/50 text-blue-400 rounded-full 
                                border border-slate-600 hover:border-blue-500 transition-colors
                                backdrop-blur-sm group-hover/card:bg-slate-700/70"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
