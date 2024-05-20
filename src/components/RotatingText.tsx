"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitTextJS from "split-text-js";
import "./home.scss";

export default function RotatingText() {
  useGSAP(() => {
    const titles = gsap.utils.toArray(".title-items");
    const tl = gsap.timeline({ repeat: -1, delay: 2.4 });

    titles.forEach((letter) => {
      const splitTitles = new SplitTextJS(letter);

      tl.from(
        splitTitles.chars,
        {
          opacity: 0,
          y: 15,
          rotateX: -90,
          stagger: 0.05,
          duration: 0.6,
          ease: "bounce.out",
        },
        "<",
      ).to(
        splitTitles.chars,
        {
          opacity: 0,
          y: -15,
          rotateX: 90,
          stagger: 0.05,
          delay: 1.5,
        },
        "<1",
      );
    });
  }, []);

  return (
    <div className="roll-container">
      <div className="text-wrapper pt-4 font-['Coolvetica'] text-[0.8rem] sm:pt-3 sm:text-[1.4rem] md:pt-2 lg:text-[2rem]">
        <span className="title-items absolute">Frontend Developer</span>
        <span className="title-items absolute">Python Developer</span>
        {/* <span className="title-items absolute">Content Creator</span> */}
        <span className="title-items absolute">Graphic Designer</span>
        <span className="title-items absolute">CS Undergraduate</span>
      </div>
    </div>
  );
}
