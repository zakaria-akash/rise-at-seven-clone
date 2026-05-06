"use client";

import { useEffect, useRef } from "react";

// Random pool of hero background images from the reference site
const HERO_IMAGES = [
  "https://rise-atseven.transforms.svdcdn.com/production/images/unnamed-6.png?w=1200&h=1500&q=100&auto=format&fit=crop&dm=1750948726",
  "https://rise-atseven.transforms.svdcdn.com/production/images/RedBull-Instagram-Post-45.png?w=1890&h=2363&q=100&auto=format&fit=crop&dm=1753775231",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Emirates-airpline-in-flight.avif?w=1330&h=700&q=100&auto=format&fit=crop&dm=1750948034",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-01-at-21.36.35.png?w=1198&h=1126&q=100&auto=format&fit=crop&dm=1751402284",
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
          aria-hidden="true"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 z-30 w-full p-7 flex items-end justify-between gap-4">
          {/* Tagline */}
          <div className="hidden flex-shrink-0 md:inline max-w-xs">
            <p className="text-sm lg:text-base font-medium leading-normal text-white">
              Organic media planners creating, distributing &amp; amplifying content that drives demand &amp; discovery
            </p>
          </div>

          {/* Platform logos + CTA */}
          <div className="flex flex-col items-end gap-4 w-full md:w-auto">
            <div className="flex items-center gap-4 flex-wrap justify-end">
              {PLATFORM_LOGOS.map((logo) => (
                <div key={logo.name} className="w-14 lg:w-16 aspect-[20/9] relative opacity-90">
                  <img src={logo.src} alt={logo.name} className="w-full h-full object-contain" loading="lazy" />
                </div>
              ))}
            </div>
            <a href="https://riseatseven.com/work/" className="btn btn--mint flex-row-reverse">
              <span>View Our Work</span>
              <i className="fa-regular fa-sharp fa-arrow-up-right text-xs" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
