import "./../index.scss";
import "./../home.scss";

import SectionTitles from "../sectionTitles/SectionTitles";
import Glow from "../Glow";
import Carousel from "./carousel/Carousel";

// import ProjectsCarousel from "./ProjectsCarousel";

export default function Projects() {
  const letterArray = ["P", "r", "o", "j", "e", "c", "t", "s"];

  return (
    <section id="Projects" className="ml-10 mb-12 pt-12">
      <div className="section-container text-balance text-center">
        <h1 className="title z-40 text-4xl sm:text-5xl lg:text-6xl mb-2">
          <SectionTitles
            letterArray={letterArray}
            idx={21}
            btn={false}
            href="#"
          />
        </h1>
        <Glow />
        <h4 className="pt-6 text-base md:text-xl mb-6">Some of my recent projects.</h4>
        
        <Carousel />
        
      </div>
    </section>
  );
}
