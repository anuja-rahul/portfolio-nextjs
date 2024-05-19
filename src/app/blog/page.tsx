"use client";
import AnimatedHero from "@/components/AnimatedHero";
import { useEffect, useState } from "react";

// export const metadata = {
//   title: "Anuja Rahul - Blog",
// };

export default function Blog() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const letterArray = ["B", "l", "o", "g", " ", "P", "a", "g", "e"];
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2500);

    // Return a cleanup function to clear the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section id="About" className="min-h-screen">
      <div className="section-container text-balance text-center">
        <h1 className="title z-40 text-4xl sm:text-5xl lg:text-6xl">
          <AnimatedHero
            letterClass={letterClass}
            strArray={letterArray}
            idx={11}
          />
        </h1>
        <h4 className="pt-2 text-xl">Coming soon...</h4>
      </div>
    </section>
  );
}
