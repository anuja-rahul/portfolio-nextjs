"use client";

import "./../index.scss";
import "./../home.scss";
import RotatingText from "./../RotatingText";
import AnimatedHero from "./../AnimatedHero";
import { useEffect, useState } from "react";

export default function Hero() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const letterArray = [
    "H",
    "e",
    "l",
    "l",
    "o",
    "👋",
    " ",
    "I",
    "'m",
    " ",
    "A",
    "n",
    "u",
    "j",
    "a",
    " ",
    "R",
    "a",
    "h",
    "u",
    "l",
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    // Return a cleanup function to clear the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section id="Hero" className="min-h-[70vh] pt-40">
      <div className="section-container z-10 text-balance text-center">
        <h1 className="title z-40 text-4xl sm:text-5xl lg:text-6xl">
          {/* Hello👋 I{"'"}m <span className="cool-letters">A</span>
          nuja Rahul */}
          <AnimatedHero
            letterClass={letterClass}
            strArray={letterArray}
            idx={11}
          />
        </h1>
        <div className="z-40 flex w-full flex-col flex-wrap justify-evenly pt-1  text-center sm:pt-4">
          <RotatingText />
        </div>

        {/* <h1 className="title absolute">This is content</h1> */}
        {/* lg:pl-[40%] pl-[30%] sm:pl-[25%] */}
      </div>
    </section>
  );
}
