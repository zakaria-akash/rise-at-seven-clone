"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/animation";

export default function ReadyToRise() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !headingRef.current) return;

    const heading = headingRef.current;
    const trigger = containerRef.current;
    
    // Initial state
    const headingWidth = heading.offsetWidth;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    let yStart = 150;
    let yEnd = 400;
    
    if (windowWidth < 1024) {
      yStart = 100;
      yEnd = 200;
    }

    gsap.set(heading, {
      y: yStart,
      x: headingWidth - windowWidth + windowWidth * 0.5,
    });

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Horizontal slide + Y movement
      gsap.to(heading, {
        x: () => -(headingWidth - window.innerWidth + 1000),
        y: yEnd,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top 70%",
          end: () => `+=${headingWidth - windowWidth + windowHeight * 0.35}`,
          scrub: true,
        },
      });

      // Character reveal (SplitText alternative since we might not have it)
      // We can manually split or just use the whole heading if SplitText isn't available.
      // The original uses SplitText. For now, let's just do the slide.
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden hidden lg:block"
    >
      <div className="flex h-[35vh] lg:h-[100vh]">
        <div
          ref={headingRef}
          className="shrink-0 text-[30vw] font-medium tracking-tight leading-tight lg:text-[16vw] 4xl:text-[14vw] whitespace-nowrap"
        >
          Ready to Rise at Seven?
        </div>
      </div>
    </div>
  );
}
