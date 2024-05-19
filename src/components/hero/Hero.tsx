import "./../index.scss";
import "./../home.scss";

export default function Hero() {
  return (
    <section id="Hero" className="min-h-[70vh]">
      <div className="section-container z-10 text-balance text-center">
        <h1 className="title z-40">
          Hello👋 I{"'"}m <span className="cool-letters">A</span>
          nuja Rahul
        </h1>
        <h2 className="text-4xl">Web developer</h2>
        {/* <h1 className="title absolute">This is content</h1> */}
      </div>
    </section>
  );
}
