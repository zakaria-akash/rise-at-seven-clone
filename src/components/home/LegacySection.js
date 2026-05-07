"use client";

import { useEffect, useRef } from "react";

const CARDS = [
  {
    id: "pioneers",
    bg: "bg-black",
    titleColor: "text-white",
    bodyColor: "text-white",
    rotate: 4,
    zIndex: 2,
    title: "Pioneers",
    image: "/images/driving-demand-logo.jpg",
    body: [
      "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.",
      "We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
    ],
  },
  {
    id: "award",
    bg: "bg-mint",
    titleColor: "text-grey-900",
    bodyColor: "text-grey-900",
    rotate: 8,
    zIndex: 1,
    title: "Award Winning",
    image: "/images/driving-demand-logo.jpg",
    body: [
      "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
    ],
  },
  {
    id: "speed",
    bg: "bg-white",
    titleColor: "text-grey-900",
    bodyColor: "text-grey-900",
    rotate: 12,
    zIndex: 0,
    title: "Speed",
    image: "/images/driving-demand-logo.jpg",
    body: [
      "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We've created a service which takes ideas to result within 60 minutes.",
    ],
  },
];

export default function LegacySection() {
  const triggerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    let ctx;
    const load = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const trigger = triggerRef.current;
      const items = itemsRef.current.filter(Boolean);
      if (!trigger || !items.length) return;

      ctx = gsap.context(() => {
        gsap.to(items, {
          yPercent: -100,
          rotate: -50,
          stagger: 1,
          ease: "power2.inOut",
          duration: 3,
          scrollTrigger: {
            trigger,
            start: "top 30%",
            end: "bottom -50%",
            scrub: true,
          },
        });
      });
    };
    load();
    return () => ctx?.revert();
  }, []);

  return (
    <section className="w-full py-0">
      <div className="w-full px-0">

        {/* Mobile: Swiper carousel */}
        <MobileLegacyCarousel />

        {/* Desktop: stacked sticky scroll */}
        <div
          ref={triggerRef}
          className="w-full relative hidden lg:flex"
          style={{ height: "300vh" }}
        >
          <div className="w-full h-svh sticky top-0 left-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full flex justify-center mt-10 3xl:mt-16">
              <h2 className="text-grey-900 text-lg xl:text-xl font-medium tracking-tight font-sans-primary">
                Legacy In The Making
              </h2>
            </div>

            {CARDS.map((card, i) => (
              <div
                key={card.id}
                ref={(el) => { itemsRef.current[i] = el; }}
                className="w-full h-full absolute left-0 flex items-center justify-center top-8"
                style={{ zIndex: card.zIndex, willChange: "transform" }}
              >
                <div
                  className="w-full max-w-lg xl:max-w-xl"
                  style={{ transform: `rotate(${card.rotate}deg)` }}
                >
                  <div className={`w-full flex-col text-center rounded-3xl grid p-7 lg:items-center lg:aspect-square xl:py-10 xl:px-14 ${card.bg}`}>
                    <div className="col-start-1 row-start-1 flex flex-col text-center lg:items-center gap-y-3 md:gap-y-5">
                      <div className="rounded-2xl overflow-hidden w-48 aspect-square relative">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="absolute top-0 left-0 w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-col items-center gap-y-4">
                        <h2 className={`text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight font-sans-primary leading-none ${card.titleColor}`}>
                          {card.title}
                        </h2>
                        <div className="w-full">
                          {card.body.map((p, pi) => (
                            <p key={pi} className={`text-base font-sans-primary leading-normal text-pretty mb-5 last:mb-0 ${card.bodyColor}`}>
                              {p}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Mobile carousel version
function MobileLegacyCarousel() {
  const swiperRef = useRef(null);

  useEffect(() => {
    let sw;
    const init = async () => {
      const { Swiper } = await import("swiper");
      const { Pagination } = await import("swiper/modules");
      if (!swiperRef.current) return;
      sw = new Swiper(swiperRef.current, {
        modules: [Pagination],
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        speed: 700,
        breakpoints: { 640: { slidesPerView: 1.55 } },
        pagination: { el: ".legacy-pagination", type: "progressbar" },
      });
    };
    init();
    return () => sw?.destroy(true, true);
  }, []);

  return (
    <div className="w-full py-10 px-4 md:px-7 gap-y-3 lg:hidden">
      <div className="flex justify-center mb-3">
        <h2 className="text-grey-900 text-lg font-medium tracking-tight font-sans-primary">Legacy In The Making</h2>
      </div>
      <div ref={swiperRef} className="swiper">
        <div className="swiper-wrapper">
          {CARDS.map((card) => (
            <div key={card.id} className="!flex !h-auto swiper-slide">
              <div className={`w-full flex-col text-center rounded-2xl grid p-7 ${card.bg}`}>
                <div className="col-start-1 row-start-1 flex flex-col text-center items-center gap-y-3">
                  <div className="rounded-xl overflow-hidden w-full aspect-[4/3] relative">
                    <img src={card.image} alt={card.title} className="absolute top-0 left-0 w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="flex flex-col items-center gap-y-4">
                    <h2 className={`text-3xl font-medium tracking-tight font-sans-primary leading-none ${card.titleColor}`}>{card.title}</h2>
                    <div className="w-full">
                      {card.body.map((p, i) => (
                        <p key={i} className={`text-sm leading-normal text-pretty mb-5 last:mb-0 ${card.bodyColor}`}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full relative mt-3">
        <div className="w-full swiper-pagination legacy-pagination" />
      </div>
    </div>
  );
}
