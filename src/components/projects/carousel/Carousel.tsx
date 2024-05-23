import "./carousel.scss";

import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

export default function Carousel() {
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

  //   const SLIDE_COUNT = 5;
  //   const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const SLIDES = [
    "https://glisten-ai-remade.vercel.app",
    "https://shop-nextjs-alpha.vercel.app",
    "https://anuja-rahul.github.io/apple-website/",
    "https://anuja-rahul-portfolio.vercel.app",
    "https://iphone-3d-demo-website.vercel.app",
  ];

  return <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
}
