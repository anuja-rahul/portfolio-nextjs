import "./../index.scss";
import "./../home.scss";
import RotatingText from "./../RotatingText";
import AnimatedHero from "./../AnimatedHero";
import { useEffect, useState } from "react";
import BackToTopButton from "../BackToTopButton";
import SectionTitles from "../sectionTitles/SectionTitles";
import Glow from "../Glow";
import DefaultButton from "../DefaultButton";

export default function Hero() {
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

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setLetterClass("text-animate-hover");
  //   }, 4000);

  //   // Return a cleanup function to clear the timeout when the component unmounts
  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, []);

  return (
    <section id="Hero" className="min-h-[70vh] pt-40">
      <div className="section-container z-10 text-balance text-center">
        <h1 className="title z-40 text-4xl sm:text-5xl lg:text-6xl">
          {/* Hello👋 I{"'"}m <span className="cool-letters">A</span>
          nuja Rahul */}
          {/* <AnimatedHero
            letterClass={letterClass}
            strArray={letterArray}
            idx={11}
          /> */}

          <SectionTitles
            letterArray={letterArray}
            idx={11}
            href="#Hero"
            btn={true}
          />
        </h1>
        <Glow />
        <div className="z-40 flex w-full flex-col flex-wrap justify-evenly pt-1  text-center sm:pt-4">
          <RotatingText />
        </div>

        <div className="flex flex-col flex-wrap pt-16">
          <DefaultButton href="#About">Explore</DefaultButton>
        </div>

        {/* <h1 className="title absolute">This is content</h1> */}
        {/* <div className="glow absolute z-10  aspect-square w-[40%] max-w-xl rounded-full blur-3xl filter md:w-[30%]" /> */}
        {/* lg:pl-[40%] pl-[30%] sm:pl-[25%] */}
      </div>
      {/* <BackToTopButton href="#hero" /> */}
    </section>
  );
}
