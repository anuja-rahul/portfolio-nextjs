import "./../index.scss";
import "./../home.scss";

import SectionTitles from "../sectionTitles/SectionTitles";
import Glow from "../Glow";
import ContactButtons from "./ContactButtons";

export default function Contact() {
  const letterArray = ["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"];

  return (
    <section id="Contact" className="ml-10 mb-12 pt-12">
      <div className="section-container text-balance text-center">
        <h1 className="title z-40 text-4xl sm:text-5xl lg:text-6xl mb-8">
          <SectionTitles
            letterArray={letterArray}
            idx={21}
            btn={false}
            href="#"
          />
        </h1>
        <Glow />
        {/* <h4 className="mb-8 pt-2 text-xl">Coming soon...</h4> */}
        <ContactButtons />
      </div>
    </section>
  );
}
