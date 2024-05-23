import "./../index.scss";
import "./../home.scss";

import SectionTitles from "../sectionTitles/SectionTitles";
import Glow from "../Glow";
import Carousel from "./carousel/Carousel";

// import ProjectsCarousel from "./ProjectsCarousel";

export default function Projects() {
  const letterArray = ["P", "r", "o", "j", "e", "c", "t", "s"];

  return (
    <section id="Projects" className="ml-10 min-h-[60vh] pt-12">
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
        {/* <h4 className="pt-6 text-xl">Coming soon...</h4> */}
        <div className="mb-8" />
        <Carousel />
        <div className="mb-8" />
      </div>
    </section>
  );
}
