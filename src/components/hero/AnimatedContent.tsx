"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import DefaultButton from "../DefaultButton";

export default function AnimatedContent() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      ".explore-btn",
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: 1.5,
        ease: "power2.inOut",
        duration: 1,

        // scrollTrigger: {
        //   trigger: ".explore-btn",
        //   start: "top bottom-=50%",
        //   toggleActions: "play pause resume reverse",
        // },
      },
    );
  }, [".explore-btn"]);

  return (
    <DefaultButton
      href="#About"
      className="explore-btn hover:after:content-['_➤'] opacity-0"
    >
      Explore
    </DefaultButton>
  );
}
