"use client";

import { useEffect, useState } from "react";
import AnimatedHero from "../AnimatedHero";
import BackToTopButton from "../BackToTopButton";
import "./../index.scss";
import "./../home.scss";

interface SectionTitlesProps {
  letterArray: string[];
  idx?: number;
  href: string;
  btn: boolean;
}

export default function SectionTitles({
  letterArray,
  idx,
  btn,
  ...rest
}: SectionTitlesProps) {
  const [letterClass, setLetterClass] = useState("text-animate");

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
    <>
      <AnimatedHero
        letterClass={letterClass}
        strArray={letterArray}
        idx={!idx ? 21 : idx}
      />

      {btn ? <BackToTopButton {...rest} /> : ""}
    </>
  );
}
