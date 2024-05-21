import "./../index.scss";
import "./../home.scss";

import SectionTitles from "../sectionTitles/SectionTitles";
import Glow from "../Glow";

export default function Experience() {
  const letterArray = ["E", "x", "p", "e", "r", "i", "e", "n", "c", "e"];

  return (
    <section id="Experience" className="min-h-screen pt-12">
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
        <h4 className="pt-2 text-xl">Coming soon...</h4>
      </div>
    </section>
  );
}
