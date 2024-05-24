"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import DefaultButton from "../DefaultButton";
import Image from "next/image";

export default function ContactButtons() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      ".contact-item",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: 1,
        ease: "power2.inOut",
        duration: 1,
        stagger: 0.1,

        scrollTrigger: {
          trigger: "#Contact",
          start: "top bottom-=15%",
          toggleActions: "play pause resume reverse",
        },
      },
    );
  }, [".contact-item"]);

  return (
    <>
      <DefaultButton
        href="mailto:a.r.gunasinghe@gmail.com"
        className="common-button mb-4 contact-item"
      >
        Contact me ✉️
      </DefaultButton>

      <DefaultButton
        href="https://www.linkedin.com/in/anuja-rahul-gunasinghe-83b589266"
        className="common-button mb-4 contact-item"
      >
        <span className="flex flex-row items-center justify-center">
          Find me on
          <Image
            src={"/linkedin-logo-white.png"}
            alt="Github"
            width={20}
            height={20}
            className="ml-3"
          />
        </span>
      </DefaultButton>

      <p className="mb-3 text-base text-white contact-item">or</p>

      <DefaultButton
        href="https://github.com/anuja-rahul?tab=repositories"
        className="common-button mb-4 contact-item"
      >
        <span className="flex flex-row items-center justify-center">
          Check out my projects
          <Image
            src={"/github-mark-white.png"}
            alt="Github"
            width={20}
            height={20}
            className="ml-3"
          />
        </span>
      </DefaultButton>
    </>
  );
}
