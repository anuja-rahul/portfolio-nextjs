import DefaultButton from "@/components/DefaultButton";
import Glow from "@/components/Glow";
import SectionTitles from "@/components/sectionTitles/SectionTitles";
import "./../components/index.scss";

export const metadata = {
  title: "Anuja Rahul - 404",
};

export default function NotFoundPage() {
  const letterArray = [
    "4",
    "0",
    "4",
    ":",
    "😵",
    " ",
    "P",
    "a",
    "g",
    "e",
    " ",
    "n",
    "o",
    "t",
    " ",
    "f",
    "o",
    "u",
    "n",
    "d",
    " ",
    "!",
  ];

  return (
    <section id="About" className="min-h-screen">
      <div className="section-container text-balance pt-40 text-center">
        <h1 className="title z-40 text-4xl sm:text-5xl lg:text-6xl">
          <SectionTitles
            letterArray={letterArray}
            idx={21}
            href="#About"
            btn={true}
          />
        </h1>
        <Glow />
        {/* <div className="glow absolute z-10  w-[20%] aspect-square max-w-xl rounded-full blur-3xl filter" /> */}
        <div className="flex flex-col flex-wrap pt-8">
          <DefaultButton href="/#Hero" className="hover:before:content-['👈_']">
            Back to Home
          </DefaultButton>
        </div>
      </div>
    </section>
  );
}
