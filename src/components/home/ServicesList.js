"use client";

import { useState } from "react";

const SERVICES = [
  {
    id: "digital-pr",
    title: "Digital PR",
    href: "https://riseatseven.com/services/digital-pr/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-22.39.35.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=6d24f03cd6433d18ffdc18236cf7a648",
  },
  {
    id: "organic-social",
    title: "Organic Social & Content",
    href: "https://riseatseven.com/services/social/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-01-at-20.31.18.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751398338&s=3015fd51b8e01339805f2d2c04aed3cb",
  },
  {
    id: "content-experience",
    title: "Content Experience",
    href: "https://riseatseven.com/services/content-experience/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7499.jpg?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846496&s=f06af03bd1b7577056129b56b67c0ad2",
  },
  {
    id: "search-growth",
    title: "Search & Growth Strategy",
    href: "https://riseatseven.com/services/strategy-growth/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.37.50.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750858763&s=942bb2a9f226a995cdd5b25d64509705",
  },
  {
    id: "data-insights",
    title: "Data & Insights",
    href: "https://riseatseven.com/services/data-insights/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/e34acc13-be9a-4862-a3bd-95aa2738aeb3.JPG?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751398487&s=91982a1f6ee17fb2964a4bc7a76167f0",
  },
  {
    id: "onsite-seo",
    title: "Onsite SEO",
    href: "https://riseatseven.com/services/onsite-seo/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-24-at-00.20.47.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847627&s=146948423396731ebd58e4755e3d773a",
  },
];

export default function ServicesList() {
  const [activeId, setActiveId] = useState(SERVICES[0].id);

  return (
    <section className="w-full py-14 md:py-18 xl:py-24">
      <div className="w-full px-4 md:px-7">
        <div className="flex flex-col gap-y-6 md:gap-y-7 xl:gap-y-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
            <h2 className="flex flex-wrap items-end gap-x-3 text-grey-900 text-[clamp(3.6rem,7vw,6.7rem)] font-medium tracking-tight leading-[0.88] font-sans-primary">
              <span>Our</span>
              <span
                className="inline-flex shrink-0 overflow-hidden rounded-2xl bg-grey-200"
                style={{ width: "0.9em", height: "0.9em" }}
                aria-hidden="true"
              >
                <img
                  src="/images/OurServiceLogo.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </span>
              <span>Services</span>
            </h2>

            <a href="https://riseatseven.com/services/" className="btn btn--white flex-row-reverse self-start">
              <span>View All Services</span>
              <i className="fa-regular fa-sharp fa-arrow-up-right text-xs" aria-hidden="true" />
            </a>
          </div>

          <div className="h-px w-full bg-grey-200" />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                active={activeId === service.id}
                onActivate={() => setActiveId(service.id)}
              />
            ))}
          </div>

          <div className="flex justify-center pt-2">
            <a href="https://riseatseven.com/services/" className="btn btn--white flex-row-reverse w-full sm:w-auto">
              <span>View All Services</span>
              <i className="fa-regular fa-sharp fa-arrow-up-right text-xs" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, active, onActivate }) {
  return (
    <a
      href={service.href}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className="group block overflow-hidden rounded-[1.75rem] border border-grey-200 bg-white text-grey-900"
    >
      <div className="relative aspect-[16/10] min-h-[16rem] overflow-hidden bg-grey-900 sm:aspect-[4/3] lg:min-h-[20rem]">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/80" />

        <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-5 xl:p-6">
          <div className="flex items-start justify-between gap-4 text-white">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 md:h-12 md:w-12">
              <i className="fa-regular fa-sharp fa-arrow-up-right text-sm md:text-base" aria-hidden="true" />
            </div>
            <div className="text-right text-[0.65rem] font-medium uppercase tracking-[0.22em] text-white/75 font-sans-primary">
              {service.title}
            </div>
          </div>

          <div className="flex items-end justify-between gap-4 text-white">
            <div className="max-w-[12rem] md:max-w-[15rem] xl:max-w-[17rem]">
              <div className="text-[clamp(1.9rem,3vw,3.7rem)] font-medium tracking-tight leading-[0.92] font-sans-primary text-balance">
                {service.title}
              </div>
              <div className="mt-3 h-px w-full bg-white/30" />
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-medium text-white/90 backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-1">
              <span>Hover</span>
              <i className="fa-regular fa-sharp fa-arrow-up-right text-[0.65rem]" aria-hidden="true" />
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-grey-200 p-4 md:p-5 xl:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-medium tracking-[0.18em] uppercase text-grey-400 font-sans-primary">
              Service
            </div>
            <div className="mt-2 text-[clamp(1.45rem,2.1vw,2.3rem)] font-medium tracking-tight leading-[0.95] font-sans-primary">
              {service.title}
            </div>
          </div>
          <i className="fa-regular fa-sharp fa-arrow-up-right text-sm text-grey-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
        </div>
      </div>
    </a>
  );
}
