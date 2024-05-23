import "./carousel.scss";

import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

export default function Carousel() {
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

  //   const SLIDE_COUNT = 5;
  //   const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const SLIDES = ["https://anuja-rahul-portfolio.vercel.app", "2", "3"];

  return <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
}
