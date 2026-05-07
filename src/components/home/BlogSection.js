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
    image: "/images/whats-new/whats-new-card1.jpg",
  },
  {
    href: "https://riseatseven.com/blog/coneys-chooses-riseatseven-for-demand-brief-2/",
    category: "Food/Hospitality/Drink",
    author: "Ray Saddiq",
    authorImg: "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/WhatsApp-Image-2025-06-23-at-22.50.52.jpeg?w=80&h=80&q=100&auto=format&fit=crop&dm=1750949501",
    readTime: "2 mins",
    title: "Rise at Seven Appointed by Coneys to Drive Demand and Retail Growth",
    image: "/images/whats-new/whats-new-card2.jpg",
  },
  {
    href: "https://riseatseven.com/blog/noomz-chooses-riseatseven-for-demand-brief/",
    category: "Food/Hospitality/Drink",
    author: "Ray Saddiq",
    authorImg: "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/WhatsApp-Image-2025-06-23-at-22.50.52.jpeg?w=80&h=80&q=100&auto=format&fit=crop&dm=1750949501",
    readTime: "2 mins",
    title: "Noomz Chooses Rise at Seven for Demand Strategy",
    image: "/images/whats-new/whats-new-card3.jpg",
  },
];

function BlogCard({ post }) {
  return (
    <a
      href={post.href}
      className="w-full flex flex-col items-start gap-y-5 transition hover:-translate-y-2 circle-mask-container"
    >
      {/* Image Stacking */}
      <div className="w-full grid">
        {/* Blurred background layer (revealed on hover via circle mask) */}
        <div className="col-start-1 row-start-1 z-10 relative rounded-2xl lg:rounded-3xl overflow-hidden aspect-square">
          <div className="w-full h-full transition-all duration-700 ease-out blur-md scale-110 circle-mask">
            <img
              src={post.image}
              alt=""
              className="h-full w-full object-cover absolute top-0 left-0"
              loading="eager"
              decoding="async"
              fetchPriority="low"
            />
          </div>
        </div>
        {/* Base image layer */}
        <div className="col-start-1 row-start-1 aspect-square relative rounded-2xl lg:rounded-3xl overflow-hidden">
          <div className="col-start-1 row-start-1 z-20 p-3 absolute top-0 left-0">
            <div className="flex flex-wrap gap-1">
              <div className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 text-white bg-white/20 backdrop-blur-sm">
                {post.category}
              </div>
            </div>
          </div>
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover absolute top-0 left-0 transition-opacity duration-700 ease-out"
            loading="eager"
            decoding="async"
            fetchPriority="low"
            style={{ opacity: 1 }}
          />
        </div>
      </div>

      {/* Meta Content */}
      <div className="flex flex-col items-start gap-y-3">
        <div className="flex items-center gap-1 mt-1">
          <div className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 text-grey-300 bg-white">
            <i className="fa-sharp fa-regular fa-circle-user text-xs" aria-hidden="true" />
            <span>{post.author}</span>
          </div>
          <div className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 text-grey-300 bg-white">
            <i className="fa-sharp fa-regular fa-clock text-xs" aria-hidden="true" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <h2 className="text-grey-900 text-2xl xl:text-3xl font-medium tracking-tight font-sans-primary leading-tight text-balance">
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
        pagination: {
          el: ".blog-pagination",
          type: "progressbar"
        },
      });
    };
    init();
    return () => sw?.destroy(true, true);
  }, []);

  return (
    <section className="w-full pb-12 xl:pb-24">
      <div className="w-full px-0">
        <div className="grid grid-cols-12 gap-y-3 md:gap-y-7 gap-x-3 md:gap-x-5">
          {/* Header Row */}
          <div className="col-span-12 px-4 md:px-7 border-b border-grey-200 pb-5 mb-5">
            <div className="flex items-end justify-between">
              <h2 className="text-grey-900 text-6xl md:text-7xl lg:text-7xl font-medium tracking-tight font-sans-primary leading-[0.9] flex items-center flex-wrap gap-x-3">
                <span>What&apos;s</span>
                <span
                  className="inline-block shrink-0 relative overflow-hidden rounded-sm bg-black/10 mx-1"
                  style={{ width: "0.7em", height: "0.85em" }}
                >
                  <img
                    src="/images/whats-new/whats-new-title-logo.jpg"
                    alt=""
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </span>
                <span>New</span>
              </h2>
              <div className="hidden md:block">
                <a href="https://riseatseven.com/blog/" className="btn btn--white flex-row-reverse group">
                  <div className="relative overflow-hidden">
                    <div className="transition group-hover:-translate-y-6 flex items-center gap-x-2">
                      <span>Explore More Thoughts</span>
                      <i className="fa-regular fa-sharp fa-arrow-up-right text-xs" />
                    </div>
                    <div className="transition absolute top-0 left-0 translate-y-6 group-hover:translate-y-0 flex items-center gap-x-2">
                      <span>Explore More Thoughts</span>
                      <i className="fa-regular fa-sharp fa-arrow-up-right text-xs" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile list */}
          <div className="col-span-12 px-4 md:px-7 lg:hidden">
            <div className="flex flex-col gap-y-6">
              {POSTS.map((post) => (
                <BlogCard key={post.title} post={post} />
              ))}
            </div>
          </div>

          {/* Carousel */}
          <div className="col-span-12 lg:px-7 hidden lg:block">
            <div ref={swiperRef} className="swiper w-full">
              <div className="swiper-wrapper">
                {POSTS.map((post, i) => (
                  <div key={i} className="py-2 swiper-slide">
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            </div>
            {/* Pagination Progress Bar */}
            <div className="px-4 md:px-0 mt-8">
              <div className="blog-pagination swiper-pagination !relative !w-full" />
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="col-span-12 px-4 md:hidden">
            <a href="https://riseatseven.com/blog/" className="btn btn--white w-full justify-center">
              Explore More Thoughts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
