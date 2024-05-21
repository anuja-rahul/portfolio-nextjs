import "./../index.scss";
import "./../home.scss";

import SectionTitles from "../sectionTitles/SectionTitles";
import Glow from "../Glow";
import { Experiences } from "./content";
import clsx from "clsx";

export default function Experience() {
  const letterArray = ["E", "x", "p", "e", "r", "i", "e", "n", "c", "e"];

  return (
    <section id="Experience" className="min-h-screen pt-12">
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

        <div className="experience-container ml-16 w-[60%] border-b border-neutral-900 pb-4">
          <div>
            {Experiences.map((experience, index) => (
              <div
                key={index}
                className="mb-10 flex flex-wrap lg:justify-center"
              >
                <div className="w-full lg:w-1/4">
                  <p className="mb-2 text-sm text-neutral-200">
                    {experience.year}
                  </p>
                </div>
                <div className="role-description w-full max-w-xl text-center lg:w-3/4 lg:text-left">
                  <h6 className="role mb-2">
                    {experience.role} -{" "}
                    <span className="text-sm">{experience.Institution}</span>
                  </h6>
                  <p className="tech-description mb-3">
                    {experience.description}
                  </p>
                  <div className="ml-2 flex flex-wrap items-center justify-center sm:ml-0 sm:block">
                    {experience.tecnologies.map((tech, idx) => (
                      <span
                        className={clsx(
                          tech,
                          " tech-icons mr-2 mt-4 rounded-lg px-2 py-1 font-medium sm:text-sm",
                        )}
                        key={idx}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
