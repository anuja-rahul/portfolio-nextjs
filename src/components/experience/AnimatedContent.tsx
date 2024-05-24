"use client";

import { Experiences } from "./content";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AnimatedContent() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      ".load",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power2.inOut",
        duration: 1.2,
        stagger: 0.05,

        scrollTrigger: {
          trigger: ".experience-container",
          start: "top bottom-=25%",
          toggleActions: "play pause resume reverse",
        },
      },
    );
  }, [".experience-container"]);

  return (
    <div className="experience-container mb-6 w-[60%] border-b border-[#ffcb74] pb-4">
      <div>
        {Experiences.map((experience, index) => (
          <div
            key={index}
            className="load mb-10 flex flex-wrap lg:justify-center"
          >
            <div className="w-full lg:w-1/4">
              <p className="load mb-2 text-sm text-neutral-200">
                {experience.year}
              </p>
            </div>
            <div className="role-description w-full max-w-xl text-center text-[0.75rem] sm:text-[1rem] lg:w-3/4 lg:text-left">
              <h6 className="load role mb-2">
                {experience.role} -{" "}
                <span className="load text-[0.75rem] sm:text-[1rem]">
                  {experience.Institution}
                </span>
              </h6>
              <p className="load tech-description mb-3 text-[0.65rem] sm:text-[0.9rem]">
                {experience.description}
              </p>
              <div className="load ml-2 flex max-w-xl flex-wrap items-center justify-center sm:ml-0 lg:justify-start">
                {experience.tecnologies.map((tech, idx) => (
                  <span
                    className={clsx(
                      tech,
                      " load tech-icons mr-2 mt-2 rounded-lg px-2 py-1 text-[0.7rem] font-medium sm:text-[0.8rem]",
                    )}
                    key={idx}
                  >
                    {tech}
                    {idx % 4 === 3 ? <br></br> : null}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
