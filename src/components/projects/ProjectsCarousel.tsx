"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function ProjectsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 2000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla bg-slate-700 block">
      <div
        className="embla__viewport z-25 mx-auto mt-12 h-56 max-w-lg border text-lg text-white"
        ref={emblaRef}
      >
        <div className="embla__container">
          <div className="embla__slide flex items-center justify-center">
            Slide 1
          </div>
          <div className="embla__slide flex items-center justify-center">
            Slide 2
          </div>
          <div className="embla__slide flex items-center justify-center">
            Slide 3
          </div>
        </div>
      </div>

      <button
        className="embla__prev relative bottom-0 mr-4 text-lg text-white"
        onClick={scrollPrev}
      >
        Prev
      </button>
      <button
        className="embla__next relative bottom-0 ml-4 text-lg text-white"
        onClick={scrollNext}
      >
        Next
      </button>
    </div>
    //     <div class="embla z-25 mx-auto mt-12 h-56 max-w-lg border text-lg text-white" ref={emblaRef}>
    //     <div class="embla__viewport">
    //       <div class="embla__container">
    //         <div class="embla__slide flex items-center justify-center">Slide 1</div>
    //         <div class="embla__slide flex items-center justify-center">Slide 2</div>
    //         <div class="embla__slide flex items-center justify-center">Slide 3</div>
    //       </div>
    //     </div>
    //     <button class="embla__prev">Prev</button>
    //     <button class="embla__next">Next</button>
    //   </div>
  );
}
