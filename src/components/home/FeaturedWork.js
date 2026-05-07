"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

const WORKS = [
  {
    id: 8366, label: "Project One", period: "[2023-2025]", colour: "#cb7b3a", category: "Strategy",
    outcome: "Driving significant growth through strategic implementation",
    image: "/images/featured-worked/featured-work-card1.png",
    href: "https://riseatseven.com/work/sixt/",
  },
  {
    id: 7670, label: "Project Two", period: "[2021-2025]", colour: "#fdd8c4", category: "Development",
    outcome: "Building innovative solutions for modern challenges",
    image: "/images/featured-worked/featured-work-card2.png",
    href: "https://riseatseven.com/work/dojo/",
  },
  {
    id: 19708, label: "Project Three", period: "[2023-2024]", colour: "#d8c4fd", category: "Design",
    outcome: "Creating exceptional user experiences and interfaces",
    image: "/images/featured-worked/featured-work-card3.png",
    href: "https://riseatseven.com/work/magnet-trade-b2b/",
  },
  {
    id: 17067, label: "Project Four", period: "[2025]", colour: "#3a8ccb", category: "Marketing",
    outcome: "Amplifying brand presence and market reach",
    image: "/images/featured-worked/featured-work-card4.png",
    href: "https://riseatseven.com/work/jd-sports-/",
  },
  {
    id: 8221, label: "Project Five", period: "[2019-2025]", colour: "#d2b59d", category: "Branding",
    outcome: "Establishing strong brand identity and values",
    image: "/images/featured-worked/featured-work-card5.png",
    href: "https://riseatseven.com/work/parkdean-resorts-easter-breaks/",
  },
  {
    id: 27, label: "Project Six", period: "[2022-2025]", colour: "#fecacc", category: "Analytics",
    outcome: "Measuring impact through data-driven insights",
    image: "/images/featured-worked/featured-work-card6.png",
    href: "https://riseatseven.com/work/revolution-beauty/",
  },
  {
    id: 28, label: "Project Seven", period: "[2023-2025]", colour: "#a8d5ba", category: "SEO",
    outcome: "Optimizing online visibility and search performance",
    image: "/images/featured-worked/featured-work-card7.png",
    href: "#",
  },
  {
    id: 29, label: "Project Eight", period: "[2022-2024]", colour: "#ffb6c1", category: "Content",
    outcome: "Crafting compelling narratives and messaging",
    image: "/images/featured-worked/featured-work-card8.png",
    href: "#",
  },
  {
    id: 30, label: "Project Nine", period: "[2024-2025]", colour: "#87ceeb", category: "Social",
    outcome: "Building engaged communities and social presence",
    image: "/images/featured-worked/featured-work-card9.png",
    href: "#",
  },
  {
    id: 31, label: "Project Ten", period: "[2023-2025]", colour: "#daa520", category: "Automation",
    outcome: "Streamlining processes through intelligent automation",
    image: "/images/featured-worked/featured-work-card10.png",
    href: "#",
  },
  {
    id: 32, label: "Project Eleven", period: "[2024-2025]", colour: "#20b2aa", category: "Integration",
    outcome: "Seamlessly connecting systems and workflows",
    image: "/images/featured-worked/featured-work-card11.png",
    href: "#",
  },
];

export default function FeaturedWork() {
  const [activeId, setActiveId] = useState(null);
  const triggerRef = useRef(null);
  const imagesRef = useRef(null);
  const headingsRef = useRef(null);

  useEffect(() => {
    let scrollTriggerInstance;
    const load = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const trigger = triggerRef.current;
      const images = imagesRef.current;
      const headingsContainer = headingsRef.current;
      if (!trigger || !images || !headingsContainer) return;

      const headings = headingsContainer.querySelectorAll(".js-heading-item");
      const windowHeight = window.innerHeight;

      ScrollTrigger.matchMedia({
        "(pointer: fine)": () => {
          gsap.set(trigger, { height: `${images.offsetHeight}px` });
          gsap.to(images, {
            y: () => -(images.offsetHeight - windowHeight),
            ease: "none",
            scrollTrigger: { trigger, start: "top top", end: () => `+=${images.offsetHeight - windowHeight}`, scrub: true },
          });

          const tl = gsap.timeline({
            scrollTrigger: { trigger, start: "top top", end: () => `+=${images.offsetHeight - windowHeight}`, scrub: true },
          });
          headings.forEach((h) => {
            tl.fromTo(h, { y: 150 }, { y: (headingsContainer.offsetHeight * -1) + 300, duration: 4, ease: "none" }, 0);
          });
        },
      });
    };
    load();
    return () => { scrollTriggerInstance?.kill(); };
  }, []);

  return (
    <section className="w-full pb-12 xl:pb-24">
      <div className="w-full px-4 md:px-7">
        <div ref={triggerRef} className="w-full relative -my-7 flex overflow-hidden pointer-fine:overflow-visible">
          <div className="w-full py-7 top-0 h-[110svh] pointer-fine:h-svh pointer-fine:sticky">
            <div className="w-full h-full overflow-hidden bg-grey-900 rounded-3xl grid grid-cols-12 px-5 lg:pl-8 xl:pl-10">

              {/* LEFT: scrolling titles (desktop only) */}
              <div className="relative col-span-12 items-start hidden lg:flex lg:flex-row lg:items-center lg:col-span-6" style={{ height: "96svh" }}>
                <div className="flex flex-col items-start relative z-10 h-full pt-24 pb-32 gap-y-20">
                  <h2 className="text-white text-xl font-medium tracking-tight font-sans-primary">Featured Work</h2>
                  <div className="relative flex-1 overflow-hidden hidden pr-5 lg:inline-block">
                    <div className="absolute top-0 left-0 w-full h-1/3 z-20 pointer-events-none bg-gradient-to-b from-grey-900" />
                    <div className="absolute bottom-0 left-0 w-full h-1/3 z-20 pointer-events-none bg-gradient-to-t from-grey-900" />
                    <div ref={headingsRef} className="grid gap-y-2 relative z-10">
                      {WORKS.map((w) => (
                        <div key={w.id} className="relative transition js-heading-item">
                          <a
                            href={w.href}
                            className={cn("flex items-start gap-x-2 transition-transform duration-200", activeId === w.id && "translate-x-3")}
                            onMouseEnter={() => setActiveId(w.id)}
                            onMouseLeave={() => setActiveId(null)}
                          >
                            <span className="text-white text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight font-sans-primary leading-none">{w.label}</span>
                            <span className="text-white text-xs font-medium mt-2">{w.period}</span>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: cards */}
              <div ref={imagesRef} className="col-span-12 grid pt-7 pb-14 lg:col-span-6 lg:col-start-7">
                <div className="mb-5 lg:hidden">
                  <h2 className="text-white text-lg font-medium tracking-tight font-sans-primary">Featured Work</h2>
                </div>
                {WORKS.map((w) => (
                  <WorkCard key={w.id} work={w} isActive={activeId === w.id}
                    onEnter={() => setActiveId(w.id)} onLeave={() => setActiveId(null)} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View Our Work CTA Button */}
      <div className="flex justify-center mt-12 xl:mt-16">
        <a href="https://riseatseven.com/work/" className="btn btn--mint flex-row-reverse">
          <span>View Our Work</span>
          <i className="fa-regular fa-sharp fa-arrow-up-right text-xs" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

function WorkCard({ work, isActive, onEnter, onLeave }) {
  return (
    <a
      href={work.href}
      className={cn("grid group rounded-2xl overflow-hidden mb-5 lg:mb-7 circle-mask-container", isActive && "is-active")}
      onMouseEnter={onEnter} onMouseLeave={onLeave}
    >
      {/* Image */}
      <div className="col-start-1 row-start-1 transition group-hover:scale-105">
        <div className="relative overflow-hidden w-full" style={{ paddingTop: "75%" }}>
          <img src={work.image} alt={work.label}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
            style={{ opacity: 1 }} />
        </div>
      </div>

      {/* Tag */}
      <div className="col-start-1 row-start-1 p-3 z-30 flex justify-end items-end lg:p-5">
        <div className="shrink-0 inline-flex items-center rounded-full tracking-tight font-medium text-white bg-white/20 backdrop-blur-sm text-sm gap-x-3 py-2.5 px-3.5">
          <i className="fa-regular fa-sharp fa-magnifying-glass" aria-hidden="true" />
          <span>{work.category}</span>
          <i className="fa-regular fa-sharp fa-chart-line-up" aria-hidden="true" />
        </div>
      </div>

      {/* Mobile title */}
      <div className="col-start-1 row-start-1 p-3 z-30 relative flex justify-start items-end lg:hidden">
        <div className="grid gap-y-1 relative z-20">
          <div className="text-white text-xs font-medium">{work.period}</div>
          <div className="text-white text-3xl font-medium tracking-tight font-sans-primary leading-none">{work.label}</div>
        </div>
        <div className="absolute w-full bottom-0 left-0 h-32 bg-gradient-to-t from-black z-10 opacity-70" />
      </div>

      {/* Circle mask overlay */}
      <div
        className="col-start-1 row-start-1 flex flex-col items-start justify-between z-40 p-3 lg:p-5 circle-mask"
        style={{ backgroundColor: work.colour, color: "#111212" }}
      >
        <div className="text-current text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight font-sans-primary leading-none">{work.outcome}</div>
        <div className="w-full flex items-end justify-between">
          <div className="w-8 lg:w-24" />
          <div className="shrink-0 inline-flex items-center rounded-full text-current bg-white/15 backdrop-blur-sm text-sm gap-x-3 py-2.5 px-3.5 font-medium">
            <i className="fa-regular fa-sharp fa-magnifying-glass" aria-hidden="true" />
            <span>{work.category}</span>
            <i className="fa-regular fa-sharp fa-chart-line-up" aria-hidden="true" />
          </div>
        </div>
      </div>
    </a>
  );
}
