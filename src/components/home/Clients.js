"use client";

import { useEffect, useRef } from "react";

// Client logos row — matching the reference site's Swiper autoplay infinite scroll
const LOGO_ITEMS = [
  { name: "SIXT", text: "SIXT" },
  { name: "Dojo", text: "Dojo" },
  { name: "JD Sports", text: "JD Sports" },
  { name: "Parkdean", text: "Parkdean Resorts" },
  { name: "PLT", text: "PrettyLittleThing" },
  { name: "Lloyds Pharmacy", text: "Lloyds Pharmacy" },
  { name: "Revolution Beauty", text: "Revolution Beauty" },
  { name: "Pooky", text: "Pooky" },
  { name: "eSIM", text: "Leading eSIM Brand" },
  { name: "Red Bull", text: "Red Bull" },
];

export default function Clients() {
  const swiperRef = useRef(null);

  useEffect(() => {
    let swiperInstance;
    const init = async () => {
      const { Swiper } = await import("swiper");
      const { Autoplay } = await import("swiper/modules");
      if (!swiperRef.current) return;
      swiperInstance = new Swiper(swiperRef.current, {
        modules: [Autoplay],
        slidesPerView: "auto",
        spaceBetween: 40,
        loop: true,
        autoplay: { delay: 0, disableOnInteraction: false },
        speed: 5000,
      });
    };
    init();
    return () => swiperInstance?.destroy(true, true);
  }, []);

  const allLogos = [...LOGO_ITEMS, ...LOGO_ITEMS];

  return (
    <div className="w-full relative overflow-hidden py-4">
      {/* Blur edges */}
      <div className="section-blur section-blur--left" aria-hidden="true" />
      <div className="section-blur section-blur--right" aria-hidden="true" />

      <div ref={swiperRef} className="swiper">
        <div className="swiper-wrapper items-center">
          {allLogos.map((logo, i) => (
            <div
              key={i}
              className="swiper-slide !w-auto flex items-center"
            >
              <div className="px-8 py-5 flex items-center">
                <span className="text-grey-900 font-semibold text-lg tracking-tight whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity">
                  {logo.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
