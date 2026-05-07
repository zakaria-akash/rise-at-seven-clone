"use client";

import { useEffect, useRef } from "react";
import { RiseAtSevenLogo, HugeRiseLogo } from "@/components/common/Logo";
import { gsap, ScrollTrigger } from "@/lib/animation";

const OFFICES = [
  { label: "Sheffield", href: "https://g.co/kgs/n5aUKqX" },
  { label: "Manchester", href: "https://g.co/kgs/aRLHXB9" },
  { label: "London", href: "https://g.co/kgs/JujFaqC" },
  { label: "New York", href: "https://g.co/kgs/NxzhAKU" },
  { label: "Contact", href: "https://riseatseven.com/contact/" },
];

const SERVICES = [
  { label: "Services", href: "https://riseatseven.com/services/" },
  { label: "Work", href: "https://riseatseven.com/work/" },
  { label: "About", href: "https://riseatseven.com/about/" },
  { label: "Meet The Risers", href: "https://riseatseven.com/meet-the-team/" },
  { label: "Careers", href: "https://riseatseven.com/careers/" },
  { label: "Blog", href: "https://riseatseven.com/blog/" },
  { label: "Culture", href: "https://riseatseven.com/culture/" },
];

export default function Footer() {
  const footerRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!footerRef.current || !bgRef.current || !contentRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(pointer: fine)", () => {
      // Background growth animation
      ScrollTrigger.create({
        trigger: footerRef.current,
        start: "top 100%",
        end: "bottom bottom",
        onUpdate: (self) => {
          gsap.set(bgRef.current, { height: `${self.progress * 100}%` });
        },
      });

      // Content fade in
      gsap.fromTo(contentRef.current, 
        { opacity: 0 },
        {
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            end: "bottom 110%",
            scrub: 1,
          },
        }
      );
    });

    mm.add("(pointer: coarse)", () => {
      gsap.set(bgRef.current, { height: "100%" });
      gsap.set(contentRef.current, { opacity: 1 });
    });

    return () => mm.revert();
  }, []);

  return (
    <footer ref={footerRef} className="w-full py-0 relative" id="footer">
      <div className="w-full px-0">
        <div className="p-2 grid relative mt-8 lg:mt-0">
          {/* Background Reveal Layer */}
          <div
            ref={bgRef}
            className="absolute top-0 left-0 w-full p-2 flex overflow-hidden pointer-events-none"
            style={{ height: "0%" }}
          >
            <div className="w-full h-full bg-grey-900 rounded-3xl"></div>
          </div>

          {/* Content Layer */}
          <div
            ref={contentRef}
            className="col-start-1 row-start-1 grid grid-cols-12 pt-14 pb-6 relative z-20 lg:py-10 px-4 md:px-7 gap-x-3 md:gap-x-5 gap-y-3 md:gap-y-7"
          >
            {/* Newsletter & Socials */}
            <div className="flex flex-col items-start justify-start col-span-12 mb-10 lg:mb-0 lg:col-span-4 gap-y-3 md:gap-y-5">
              <h2 className="text-white text-2xl xl:text-3xl font-sans-primary font-medium tracking-tight">
                Stay updated with Rise news
              </h2>
              
              <div className="w-full relative">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="appearance-none transition bg-grey-400 rounded-full w-full text-white font-medium tracking-tight leading-none text-lg px-5 py-4 lg:text-xl lg:px-6 lg:py-5 placeholder:text-white/50 focus:outline-none focus:ring-3 focus:ring-white/15"
                />
                <div className="absolute top-0 right-0 p-2">
                  <button className="size-9 lg:size-13 bg-mint text-grey-900 rounded-full flex items-center justify-center cursor-pointer transition hover:bg-white hover:rotate-90">
                    <i className="fa-regular fa-sharp fa-arrow-up-right"></i>
                  </button>
                </div>
              </div>

              <div className="flex gap-1">
                {['facebook-f', 'x-twitter', 'linkedin-in', 'youtube', 'tiktok', 'instagram'].map((icon) => (
                  <a
                    key={icon}
                    href="#"
                    className="inline-flex items-center gap-x-2.5 rounded-xl text-xs px-2 py-1 transition bg-white text-grey-900 hover:rounded-sm"
                  >
                    <i className={`fa-brands fa-${icon}`}></i>
                    <i className="fa-regular fa-sharp fa-arrow-up-right"></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="flex justify-between col-span-12 flex-wrap md:flex-row md:col-span-11 lg:col-span-6 lg:col-start-6 gap-y-10">
              <div className="flex flex-col items-start gap-y-1.5 border-l border-white/20 pl-3 w-1/2 md:w-auto">
                {SERVICES.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group inline-flex text-white font-medium tracking-tight leading-tight text-lg lg:text-xl hover:text-mint transition-colors"
                  >
                    <div className="relative overflow-hidden">
                      <div className="transition group-hover:-translate-y-7">{link.label}</div>
                      <div className="transition absolute top-0 left-0 translate-y-7 group-hover:translate-y-0">{link.label}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex flex-col items-start gap-y-1.5 border-l border-white/20 pl-3 w-1/2 md:w-auto">
                <span className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-2">Offices</span>
                {OFFICES.map((office) => (
                  <a
                    key={office.label}
                    href={office.href}
                    className="group inline-flex text-white font-medium tracking-tight leading-tight text-lg lg:text-xl hover:text-mint transition-colors"
                  >
                    <div className="relative overflow-hidden">
                      <div className="transition group-hover:-translate-y-7">{office.label}</div>
                      <div className="transition absolute top-0 left-0 translate-y-7 group-hover:translate-y-0">{office.label}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Huge Logo */}
            <div className="col-span-12 mt-10 lg:mt-24">
              <HugeRiseLogo className="w-full fill-white" />
            </div>

            {/* Legal Bottom */}
            <div className="col-span-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-y-4 pt-10 border-t border-white/10 mt-10">
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] lg:text-xs text-white/60">
                <span>© 2025 Rise at Seven Ltd.</span>
                <span>Company Number 11955187</span>
                <span>VAT Registered GB 322402945</span>
              </div>
              <div className="text-[10px] lg:text-xs text-white/60">
                Website by <a href="#" className="hover:text-white underline">MadeByShape</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
