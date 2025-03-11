"use client";

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Cards } from "./Cards";

export function CarouselDemo({ plans }: { plans: any[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollState = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", updateScrollState);
    emblaApi.on("reInit", updateScrollState);

    updateScrollState(); // Ensure state updates on mount
  }, [emblaApi, updateScrollState]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Carousel Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {plans.map((plan, index) => (
            <div key={index} className="min-w-full flex justify-center items-center">
              <Cards plan={plan} />
            </div>
          ))}
        </div>
      </div>

      {/* Previous Button */}
      <Button variant= "outline"
        className="absolute left-2 top-1/2 -translate-y-1/2"
        onClick={() => emblaApi && emblaApi.scrollPrev()}
        disabled={!canScrollPrev}
      >
        <ArrowLeft />
      </Button>

      {/* Next Button */}
      <Button 
        className="absolute right-2 top-1/2 -translate-y-1/2"
        onClick={() => emblaApi && emblaApi.scrollNext()}
        disabled={!canScrollNext}
      >
        <ArrowRight />
      </Button>
    </div>
  );
}
