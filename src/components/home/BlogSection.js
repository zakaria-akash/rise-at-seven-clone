"use client";

import { useEffect, useRef } from "react";

const POSTS = [
  {
    href: "https://riseatseven.com/blog/global-operations-director-promotion/",
    category: "News",
    author: "Carrie Rose",
    authorImg: "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/84b3917f166d7feb4c2376f78ce33ae432656999.jpg?w=80&h=80&q=100&auto=format&fit=crop&dm=1750847674",
    readTime: "2 mins",
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7827.jpg?w=600&h=600&q=80&auto=format&fit=crop&dm=1777514348",
  },
  {
    href: "https://riseatseven.com/blog/coneys-chooses-riseatseven-for-demand-brief-2/",
    category: "Food/Hospitality/Drink",
    author: "Ray Saddiq",
    authorImg: "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/WhatsApp-Image-2025-06-23-at-22.50.52.jpeg?w=80&h=80&q=100&auto=format&fit=crop&dm=1750949501",
    readTime: "2 mins",
    title: "Rise at Seven Appointed by Coneys to Drive Demand and Retail Growth",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/3-copy.jpg?w=600&h=600&q=80&auto=format&fit=crop&dm=1776098692",
  },
  {
    href: "https://riseatseven.com/blog/noomz-chooses-riseatseven-for-demand-brief/",
    category: "Food/Hospitality/Drink",
    author: "Ray Saddiq",
    authorImg: "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/WhatsApp-Image-2025-06-23-at-22.50.52.jpeg?w=80&h=80&q=100&auto=format&fit=crop&dm=1750949501",
    readTime: "2 mins",
    title: "Noomz Chooses Rise at Seven for Demand Strategy",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/Noomz1-4.jpg?w=600&h=600&q=80&auto=format&fit=crop&dm=1775034474",
  },
];

function BlogCard({ post }) {
  return (
    <a
      href={post.href}
      className="w-full flex flex-col items-start gap-y-5 transition hover:-translate-y-2 circle-mask-container"
    >
      {/* Image */}
      <div className="w-full grid">
        <div className="col-start-1 row-start-1 z-20 p-3">
          <div className="flex flex-wrap gap-1">
            <div className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 text-white bg-white/20 backdrop-blur-sm">
              {post.category}
            </div>
          </div>
        </div>
        {/* Blurred hover layer */}
        <div className="col-start-1 row-start-1 z-10 relative rounded-2xl lg:rounded-3xl overflow-hidden aspect-square">
          <div className="w-full h-full transition blur-md duration-1000 scale-110 circle-mask">
            <img src={post.image} alt="" className="h-full w-full object-cover absolute top-0 left-0" loading="lazy" style={{ opacity: 0 }} onLoad={(e) => { e.currentTarget.style.opacity = "1"; }} />
          </div>
        </div>
        {/* Base image */}
        <div className="col-start-1 row-start-1 aspect-square relative rounded-2xl lg:rounded-3xl overflow-hidden">
          <img src={post.image} alt={post.title} className="h-full w-full object-cover absolute top-0 left-0" loading="lazy" style={{ opacity: 0 }} onLoad={(e) => { e.currentTarget.style.opacity = "1"; }} />
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-col items-start gap-y-3">
        <div className="flex items-center gap-1 mt-1">
          <div className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 text-grey-300 bg-white">
            <div className="inline-flex items-center justify-center -ml-1.5">
              <div className="rounded-full overflow-hidden -mr-1 w-5 h-5">
                <img src={post.authorImg} alt={post.author} className="w-full h-full object-cover" />
              </div>
            </div>
            <span>{post.author}</span>
          </div>
          <div className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 text-grey-300 bg-white">
            <i className="fa-sharp fa-regular fa-stopwatch" aria-hidden="true" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <h2 className="text-grey-900 text-2xl xl:text-3xl font-medium tracking-tight font-sans-primary leading-tight">
          {post.title}
        </h2>
      </div>
    </a>
  );
}

export default function BlogSection() {
  const swiperRef = useRef(null);

  useEffect(() => {
    let sw;
    const init = async () => {
      const { Swiper } = await import("swiper");
      const { Pagination } = await import("swiper/modules");
      if (!swiperRef.current) return;
      sw = new Swiper(swiperRef.current, {
        modules: [Pagination],
        slidesPerView: 1.15,
        spaceBetween: 15,
        loop: true,
        slidesOffsetBefore: 15,
        speed: 700,
        breakpoints: {
          768: { slidesPerView: 2.15 },
          1024: { loop: false, slidesPerView: 3, spaceBetween: 15, slidesOffsetBefore: 0 },
          1280: { loop: false, slidesPerView: 3, spaceBetween: 20, slidesOffsetBefore: 0 },
        },
        pagination: { el: ".blog-pagination", type: "progressbar" },
      });
    };
    init();
    return () => sw?.destroy(true, true);
  }, []);

  return (
    <section className="w-full pb-12 xl:pb-24">
      <div className="w-full px-0">
        <div className="grid grid-cols-12 gap-y-3 md:gap-y-7 gap-x-3 md:gap-x-5">
          {/* Heading row */}
          <div className="col-span-12 px-4 md:px-7">
            <div className="grid grid-cols-12 md:border-b md:border-grey-200 md:pb-5 gap-y-3 gap-x-3">
              <div className="col-span-11 md:col-span-9 flex items-end">
                <h2 className="text-grey-900 text-6xl md:text-7xl lg:text-7xl font-medium tracking-tight font-sans-primary leading-[0.9] inline-flex flex-wrap gap-x-3 items-baseline">
                  <span>What&apos;s</span>
                  {/* Inline image */}
                  <span
                    className="inline-block shrink-0 relative overflow-hidden rounded-sm bg-black/10"
                    style={{ width: "0.7em", height: "0.85em", verticalAlign: "middle" }}
                    aria-hidden="true"
                  >
                    <img
                      src="https://rise-atseven.transforms.svdcdn.com/production/images/FOS25-3380.jpg?w=200&h=200&q=80&auto=format&fit=crop&dm=1750846499"
                      alt=""
                      className="w-full h-full object-cover absolute inset-0"
                    />
                  </span>
                  <span>New</span>
                </h2>
              </div>
              <div className="col-span-12 md:col-span-3 md:items-center md:justify-end hidden md:flex">
                <a href="https://riseatseven.com/blog/" className="btn btn--white flex-row-reverse">
                  <span>Explore More Thoughts</span>
                  <i className="fa-regular fa-sharp fa-arrow-up-right text-xs" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Swiper */}
          <div className="col-span-12 lg:px-7">
            <div ref={swiperRef} className="swiper">
              <div className="swiper-wrapper">
                {POSTS.map((post, i) => (
                  <div key={i} className="py-2 swiper-slide">
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            </div>
            <div className="blog-pagination swiper-pagination mt-3" />
          </div>
        </div>
      </div>
    </section>
  );
}
