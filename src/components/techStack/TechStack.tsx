import "./../index.scss";
import "./../home.scss";

import SectionTitles from "../sectionTitles/SectionTitles";
import Glow from "../Glow";
import {
  SiCss3,
  SiGreensock,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

export default function TechStack() {
  const letterArray = ["T", "e", "c", "h", " ", "S", "t", "a", "c", "k"];

  return (
    <section id="Techstack" className="min-h-screen pt-12">
      <div className="section-container text-balance text-center">
        <h1 className="title z-40 mb-8 text-4xl sm:text-5xl lg:text-6xl">
          <SectionTitles
            letterArray={letterArray}
            idx={21}
            btn={false}
            href="#"
          />
        </h1>
        <Glow />
        {/* <h4 className="pt-2 text-xl">Coming soon...</h4> */}

        <div className="tech-container ml-6 flex w-[60%] flex-wrap items-center justify-center gap-4">
          <div className="rounded-full border-[1px] border-[#ffcb74] p-3 md:p-3 lg:p-4">
            <SiReact className="h-auto w-4 text-7xl text-cyan-400 sm:w-6 md:w-8 lg:w-12" />
          </div>
          <div className="rounded-full border-[1px] border-[#ffcb74] p-3 md:p-3 lg:p-4">
            <SiNextdotjs className="h-auto w-4 text-7xl sm:w-6 md:w-8 lg:w-12" />
          </div>
          <div className="rounded-full border-[1px] border-[#ffcb74] p-3 md:p-3 lg:p-4">
            <SiVite className="h-auto w-4 text-7xl text-blue-400 sm:w-6 md:w-8 lg:w-12" />
          </div>
          <div className="rounded-full border-[1px] border-[#ffcb74] p-3 md:p-3 lg:p-4">
            <SiMongodb className="h-auto w-4 text-7xl text-green-500 sm:w-6 md:w-8 lg:w-12" />
          </div>
          <div className="rounded-full border-[1px] border-[#ffcb74] p-3 md:p-3 lg:p-4">
            <SiTailwindcss className="h-auto w-4 text-7xl text-cyan-400 sm:w-6 md:w-8 lg:w-12" />
          </div>
          <div className="rounded-full border-[1px] border-[#ffcb74] p-3 md:p-3 lg:p-4">
            <SiSass className="h-auto w-4 text-7xl text-pink-500 sm:w-6 md:w-8 lg:w-12" />
          </div>
          <div className="rounded-full border-[1px] border-[#ffcb74] p-3 md:p-3 lg:p-4">
            <SiGreensock className="h-auto w-4 text-7xl text-green-600 sm:w-6 md:w-8 lg:w-12" />
          </div>
          <div className="rounded-full border-[1px] border-[#ffcb74] p-3 md:p-3 lg:p-4">
            <SiPython className="h-auto w-4 text-7xl text-blue-500 sm:w-6 md:w-8 lg:w-12" />
          </div>
          <div className="rounded-full border-[1px] border-[#ffcb74] p-3 md:p-3 lg:p-4">
            <SiTypescript className="h-auto w-4 text-7xl text-blue-400 sm:w-6 md:w-8 lg:w-12" />
          </div>
          <div className="rounded-full border-[1px] border-[#ffcb74] p-3 md:p-3 lg:p-4">
            <SiHtml5 className="h-auto w-4 text-7xl text-orange-600 sm:w-6 md:w-8 lg:w-12" />
          </div>
          <div className="rounded-full border-[1px] border-[#ffcb74] p-3 md:p-3 lg:p-4">
            <SiCss3 className="h-auto w-4 text-7xl text-blue-600 sm:w-6 md:w-8 lg:w-12" />
          </div>
          <div className="rounded-full border-[1px] border-[#ffcb74] p-3 md:p-3 lg:p-4">
            <SiJavascript className="h-auto w-4 text-7xl text-yellow-500 sm:w-6 md:w-8 lg:w-12" />
          </div>
        </div>
      </div>
    </section>
  );
}
