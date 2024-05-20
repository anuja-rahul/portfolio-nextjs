"use client";
import DefaultButton from "@/components/DefaultButton";
import Glow from "@/components/Glow";
import SectionTitles from "@/components/sectionTitles/SectionTitles";

export default function ErrorPage() {
  const letterArray = [
    "U",
    "n",
    "k",
    "n",
    "o",
    "w",
    "n",
    " ",
    " ",
    "E",
    "r",
    "r",
    "o",
    "r",
    " ",
    "!",
  ];

  return (
    <section id="About" className="min-h-screen">
      <div className="section-container text-balance pt-40 text-center">
        <h1 className="title z-40 text-4xl sm:text-5xl lg:text-6xl">
          <SectionTitles
            letterArray={letterArray}
            idx={21}
            href="#About"
            btn={true}
          />
        </h1>
        <Glow />
        {/* <div className="glow absolute z-10  w-[20%] aspect-square max-w-xl rounded-full blur-3xl filter" /> */}
        <div className="flex flex-col flex-wrap pt-8">
          <DefaultButton href="/#Hero">Go back</DefaultButton>
        </div>
      </div>
    </section>
  );
}
