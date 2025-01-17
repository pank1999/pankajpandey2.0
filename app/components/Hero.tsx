"use client";
import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { MovingBorderBtn } from "@/components/ui/moving-border";
import "./../../public/pankaj.png"

const profileImg = "https://media.licdn.com/dms/image/v2/D4D03AQGfFuY7HFlZRw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1664300536397?e=2147483647&v=beta&t=MeZFnnYIMkZk6dHUF4P9T5hIqX5OZf5BwlnhJnF1qIU"

const Hero = () => {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "passion.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="h-[85vh] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:34px_34px]">
        <div className="absolute inset-0 bg-slate-900/90" />
      </div>
      
      <div className="relative z-10 text-center space-y-8">
        {/* Profile Photo Section */}
        <div className="relative mx-auto w-40 h-40 md:w-48 md:h-48">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-spin-slow" />
          <div className="absolute inset-[3px] rounded-full bg-slate-900" />
          <Image
            src={profileImg} // Make sure to add your profile image to the public folder
            alt="Pankaj Pandey"
            width={192}
            height={192}
            className="rounded-full relative z-10 p-1 hover:scale-105 transition-transform duration-300 ease-in-out"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Pankaj Pandey
        </h1>
        
        <TypewriterEffect words={words} />
        
        <p className="text-neutral-300 max-w-lg mx-auto text-base md:text-lg">
          A dedicated Full Stack Developer with 2.5+ years of professional experience in designing, developing, and deploying scalable digital solutions. Proficient in crafting seamless user experiences and robust backend systems for diverse applications
        </p>

        <div className="flex items-center justify-center gap-4">
          <MovingBorderBtn
            borderRadius="0.5rem"
            className="bg-slate-900 text-white border-neutral-200 dark:border-slate-800"
          >
            Contact Me
          </MovingBorderBtn>

          <BackgroundGradient className="rounded-[22px] p-1 dark:bg-slate-800">
            <button className="px-8 py-4 rounded-[20px] bg-slate-900 text-white">
              Download Resume
            </button>
          </BackgroundGradient>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[40rem] h-[40rem] bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),transparent)] animate-pulse" />
      </div>
    </div>
  );
};

export default Hero; 