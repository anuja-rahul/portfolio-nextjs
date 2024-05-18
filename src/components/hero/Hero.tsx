import "./../index.scss";

export default function Hero() {
  return (
    <section id="Hero" className="min-h-screen">
      <div className="section-container flex flex-col flex-wrap items-center justify-center">
        <h1 className="title text-balance text-center font-bold text-white">
          Hello👋 I{"'"}m <span className="cool-letters">A</span>
          nuja Rahul
          <br />
          Web developer
        </h1>
      </div>
    </section>
  );
}
