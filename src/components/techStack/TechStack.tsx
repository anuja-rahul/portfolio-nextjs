import "./../index.scss";
import "./../home.scss";

import SectionTitles from "../sectionTitles/SectionTitles";
import Glow from "../Glow";
import TechItems from "./TechItems";

export default function TechStack() {
  const letterArray = ["T", "e", "c", "h", " ", "S", "t", "a", "c", "k"];

  return (
    <section id="Techstack" className="ml-8 min-h-[60vh] pt-12">
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

        <TechItems />
      </div>
    </section>
  );
}
