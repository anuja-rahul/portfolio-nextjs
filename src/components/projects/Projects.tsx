import "./../index.scss";
import "./../home.scss";

import SectionTitles from "../sectionTitles/SectionTitles";
import Glow from "../Glow";

export default function Projects() {
  const letterArray = ["P", "r", "o", "j", "e", "c", "t", "s"];

  return (
    <section id="Projects" className="min-h-[60vh] pt-12 ml-10">
      <div className="section-container text-balance text-center">
        <h1 className="title z-40 text-4xl sm:text-5xl lg:text-6xl">
          <SectionTitles
            letterArray={letterArray}
            idx={21}
            btn={false}
            href="#"
          />
        </h1>
        <Glow />
        <h4 className="pt-6 text-xl">Coming soon...</h4>
      </div>
    </section>
  );
}
