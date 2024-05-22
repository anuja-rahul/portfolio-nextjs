import "./../index.scss";
import "./../home.scss";

import SectionTitles from "../sectionTitles/SectionTitles";
import Glow from "../Glow";
import Content from "./Content";

export default function About() {
  const letterArray = ["A", "b", "o", "u", "t", " ", "m", "e"];

  return (
    <section id="About" className="min-h-[80vh] pt-12 ml-12">
      <div className="section-container text-balance text-center">
        <h1 className="title z-40 text-4xl sm:text-5xl lg:text-6xl">
          {/* <AnimatedHero
            letterClass={letterClass}
            strArray={letterArray}
            idx={21}
          /> */}
          
          <SectionTitles
            letterArray={letterArray}
            idx={21}
            btn={false}
            href="#"
          />
          
        </h1>
        <Glow />
        {/* <h4 className="pt-2 text-xl">Coming soon...</h4> */}
        <Content />
      </div>
    </section>
  );
}
