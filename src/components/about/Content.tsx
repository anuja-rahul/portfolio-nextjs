"use client";

import "./../home.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Content() {


  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      ".about-text",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power2.inOut",
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".about-text",
          start: "top bottom-=30%",
          toggleActions: "play pause resume reverse",
        },
      },
    );
  }, [".about-text"]);


  return (
    <div className="paragraphs flex flex-col flex-wrap justify-center text-balance pt-4  before:text-[0.6rem] after:text-[0.6rem] before:md:text-[1rem] after:md:text-[1rem]">
      <p className="about-text text-2 text-balance pt-4 text-center text-[0.5rem] sm:text-[0.7rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.3rem]">
        Hi there! 👋 I{"'"}m a passionate junior frontend web developer, a
        Python enthusiast, and a computer science undergraduate student.
        {/* My
            journey in the tech world began with curiosity and a love for
            problem-solving. Whether it{"'"}s crafting pixel-perfect designs or
            diving into backend logic, I thrive on turning ideas into elegant
            code. */}
      </p>
      <p className="about-text text-2 text-balance text-center text-[0.5rem] sm:text-[0.7rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.3rem]">
        {/* bg-gradient-to-r from-white via-blue-700 to-white bg-clip-text tracking-tight text-transparent */}
        {/* Frontend Magic 🌐 :  */}
        🌐 I specialize in creating delightful user experiences using HTML, CSS,
        and JavaScript/TypeScript.
        {/* From responsive layouts
            to interactive animations, I{"'"}m all about making the web come
            alive. */}
      </p>
      <p className="about-text text-3 text-balance text-center text-[0.5rem] sm:text-[0.7rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.3rem]">
        {/* Pythonic Adventures 🐍 :  */}
        🐍 Python is my first language. I{"'"}ve tinkered with everything from
        web scraping to cryptography.
        {/* and I
            {"'"}m always eager to explore more. */}
      </p>
      <p className="about-text text-4 text-balance text-center text-[0.5rem] sm:text-[0.7rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.3rem]">
        {/* Learning Never Stops 🎓 :  */}
        🎓 As a CS undergrad, I{"'"}m constantly learning and growing.
        Algorithms, databases, software engineering, I devour it all like a
        code-hungry bookworm.
        {/* Algorithms, databases, software engineering, I
            devour it all like a code-hungry bookworm. */}
      </p>
      <p className="about-text text-5 text-balance text-center text-[0.5rem] sm:text-[0.7rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.3rem]">
        {/* Let{"'"}s Collaborate 🚀 :  */}
        🚀 Whether it{"'"}s a cool project, a challenging problem, or just a
        chat about tech trends, I{"'"}m all ears. Let{"'"}s build something
        awesome together!
      </p>
    </div>
  );
}
