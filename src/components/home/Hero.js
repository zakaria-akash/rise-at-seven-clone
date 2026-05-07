"use client";

import { useEffect, useRef } from "react";

// Hero background image
const HERO_IMAGES = [
  "/images/HeroBG.png",
];

// Platform logos from the reference site
const PLATFORM_LOGOS = [
  { name: "Google", src: "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/gogle.png?w=400&q=80&auto=format&fit=crop&dm=1750847622" },
  { name: "ChatGPT", src: "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/chat-gpt.png?w=400&q=80&auto=format&fit=crop&dm=1750847621" },
  { name: "Gemini", src: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/gemini.png?w=400&q=80&auto=format&fit=crop&dm=1750847619" },
  { name: "TikTok", src: "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/tiktok.png?w=400&q=80&auto=format&fit=crop&dm=1750847623" },
];

export default function Hero() {
  const bgRef = useRef(null);

  // Pick a random image on mount
  useEffect(() => {
    if (!bgRef.current) return;
    const img = HERO_IMAGES[Math.floor(Math.random() * HERO_IMAGES.length)];
    bgRef.current.style.backgroundImage = `url('${img}')`;
  }, []);

  // GSAP page reveal animation
  useEffect(() => {
    let ctx;
    const load = async () => {
      const { gsap } = await import("gsap");
      const ellipse = document.querySelector(".js-reveal-ellipse");
      if (!ellipse) return;
      ctx = gsap.context(() => {
        gsap.to(ellipse, {
          attr: { rx: 2700, ry: 2150 },
          duration: 1.25,
          ease: "power2.out",
        });
      });
    };
    load();
    return () => ctx?.revert();
  }, []);

  return (
    <>
      {/* ── ELLIPSE REVEAL MASK ── */}
      <div
        className="fixed inset-0 w-screen h-svh z-[100] pointer-events-none hidden pointer-fine:block"
        aria-hidden="true"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="none"
          className="block w-screen h-svh"
        >
          <defs>
            <mask id="circle-reveal-mask">
              <rect width="100%" height="100%" fill="white" />
              <ellipse className="js-reveal-ellipse" cx="960" cy="2000" rx="0" ry="0" fill="black" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="var(--mask-colour)" mask="url(#circle-reveal-mask)" />
        </svg>
      </div>

      {/* ── HERO ── */}
      <section className="w-full h-svh relative p-2">
        {/* Background image */}
        <div
          ref={bgRef}
          className="absolute inset-0 rounded-2xl overflow-hidden bg-grey-900 bg-cover bg-center"
          style={{ filter: "blur(8px)" }}
          aria-hidden="true"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4">
          {/* Main title with embedded image */}
          <h1 className="text-center text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-sans-primary font-medium tracking-tight leading-tight">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              <span>We</span>
              <span>Create</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 mt-2 md:mt-0">
              <span>Category</span>
              <div className="inline-block w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-black/10 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src="/images/HeroBG.png"
                  alt="Hero background"
                  className="w-full h-full object-cover"
                />
              </div>
              <span>Leaders</span>
            </div>
          </h1>

          {/* Subtitle */}
          <div className="mt-4 md:mt-6 text-white text-lg md:text-xl lg:text-2xl font-sans-primary font-medium text-center">
            on every searchable platform
          </div>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 z-30 w-full p-7 flex items-end justify-between gap-4">
          {/* Left tagline */}
          <div className="hidden flex-shrink-0 md:inline max-w-xs">
            <p className="text-sm lg:text-base font-medium leading-normal text-white">
              Organic media planners creating, distributing &amp; optimising search-first content for SEO, Social, PR, AI and LLM search
            </p>
          </div>

          {/* Right text */}
          <div className="hidden flex-shrink-0 md:inline max-w-xs text-right">
            <p className="text-sm lg:text-base font-medium leading-normal text-white">
              4 Global Offices serving<br />UK, USA (New York) &amp; EU
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
