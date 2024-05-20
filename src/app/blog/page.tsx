import Glow from "@/components/Glow";
import SectionTitles from "@/components/sectionTitles/SectionTitles";

export const metadata = {
  title: "Anuja Rahul - Blog",
};

export default function Blog() {
  const letterArray = ["B", "l", "o", "g", " ", "P", "a", "g", "e"];

  return (
    <section id="About" className="min-h-screen">
      <div className="section-container text-balance pt-40 text-center">
        <h1 className="title z-40 text-4xl sm:text-5xl lg:text-6xl">
          
          <SectionTitles letterArray={letterArray} idx={21} href="#About" btn={true} />
        </h1>
        <Glow />
        {/* <div className="glow absolute z-10  w-[20%] aspect-square max-w-xl rounded-full blur-3xl filter" /> */}
        <h4 className="pt-6 text-xl">Coming soon...</h4>
      </div>
      
      {/* <BackToTopButton href="#About" /> */}
    </section>
  );
}
