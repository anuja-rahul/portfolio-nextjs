import "./../index.scss";
import "./../home.scss";

import SectionTitles from "../sectionTitles/SectionTitles";
import Glow from "../Glow";

export default function Contact() {
  const letterArray = ["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"];

  return (
    <section id="Contact" className="min-h-screen pt-12 ml-10">
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
