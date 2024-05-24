"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiCss3,
  SiGreensock,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

export default function TechItems() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      ".tech-logos",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power2.inOut",
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".tech-logos",
          start: "top bottom-=35%",
          toggleActions: "play pause resume reverse",
        },
      },
    );
  }, [".tech-logos"]);

  return (
    <div className="tech-container  flex w-[60%] flex-wrap items-center justify-center gap-2">
      <div className="tech-logos rounded-full border-[0px] border-[#ffcb74] p-2 md:p-3 lg:p-4">
        <SiReact className="h-auto w-5 text-7xl text-cyan-400 sm:w-6 md:w-8 lg:w-12" />
      </div>
      <div className="tech-logos rounded-full border-[0px] border-[#ffcb74] p-2 md:p-3 lg:p-4">
        <SiNextdotjs className="h-auto w-5 text-7xl sm:w-6 md:w-8 lg:w-12" />
      </div>
      <div className="tech-logos rounded-full border-[0px] border-[#ffcb74] p-2 md:p-3 lg:p-4">
        <SiVite className="h-auto w-5 text-7xl text-blue-400 sm:w-6 md:w-8 lg:w-12" />
      </div>
      <div className="tech-logos rounded-full border-[0px] border-[#ffcb74] p-2 md:p-3 lg:p-4">
        <SiMongodb className="h-auto w-5 text-7xl text-green-500 sm:w-6 md:w-8 lg:w-12" />
      </div>
      <div className="tech-logos rounded-full border-[0px] border-[#ffcb74] p-2 md:p-3 lg:p-4">
        <SiTailwindcss className="text77xl h-auto w-5 text-cyan-400 sm:w-6 md:w-8 lg:w-12" />
      </div>
      <div className="tech-logos rounded-full border-[0px] border-[#ffcb74] p-2 md:p-3 lg:p-4">
        <SiSass className="h-auto w-5 text-7xl text-pink-500 sm:w-6 md:w-8 lg:w-12" />
      </div>
      <div className="tech-logos rounded-full border-[0px] border-[#ffcb74] p-2 md:p-3 lg:p-4">
        <SiGreensock className="h-auto w-5 text-7xl text-green-600 sm:w-6 md:w-8 lg:w-12" />
      </div>
      <div className="tech-logos rounded-full border-[0px] border-[#ffcb74] p-2 md:p-3 lg:p-4">
        <SiPython className="h-auto w-5 text-7xl text-blue-500 sm:w-6 md:w-8 lg:w-12" />
      </div>
      <div className="tech-logos rounded-full border-[0px] border-[#ffcb74] p-2 md:p-3 lg:p-4">
        <SiTypescript className="h-auto w-5 text-7xl text-blue-400 sm:w-6 md:w-8 lg:w-12" />
      </div>
      <div className="tech-logos rounded-full border-[0px] border-[#ffcb74] p-2 md:p-3 lg:p-4">
        <SiHtml5 className="h-auto w-5 text-7xl text-orange-600 sm:w-6 md:w-8 lg:w-12" />
      </div>
      <div className="tech-logos rounded-full border-[0px] border-[#ffcb74] p-2 md:p-3 lg:p-4">
        <SiCss3 className="h-auto w-5 text-7xl text-blue-600 sm:w-6 md:w-8 lg:w-12" />
      </div>
      <div className="tech-logos rounded-full border-[0px] border-[#ffcb74] p-2 md:p-3 lg:p-4">
        <SiJavascript className="h-auto w-5 text-7xl text-yellow-500 sm:w-6 md:w-8 lg:w-12" />
      </div>
    </div>
  );
}
