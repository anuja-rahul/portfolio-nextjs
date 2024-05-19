"use client";
import "./../index.scss";
import "./../home.scss";
import { useEffect, useState } from "react";
import AnimatedHero from "../AnimatedHero";

export default function About() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const letterArray = ["A", "b", "o", "u", "t", " ", "m", "e"];
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
    <section id="About" className="min-h-screen pt-12">
      <div className="section-container text-balance text-center">
        <h1 className="title z-40 text-4xl sm:text-5xl lg:text-6xl">
        <AnimatedHero
            letterClass={letterClass}
            strArray={letterArray}
            idx={21}
          />
        </h1>
        <h4 className="pt-2 text-xl">Coming soon...</h4>
      </div>
    </section>
  );
}
