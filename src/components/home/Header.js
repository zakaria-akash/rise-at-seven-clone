"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/cn";
import { RiseAtSevenLogo } from "@/components/common/Logo";

// ─── Mega menu data ──────────────────────────────────────────────────────────
const MEGA_MENUS = {
  services: {
    id: "services",
    label: "Services",
    href: "https://riseatseven.com/services/",
    hasMegaMenu: true,
    columns: [
      {
        heading: "Core Services",
        links: [
          { label: "Search & Growth Strategy", href: "https://riseatseven.com/services/strategy-growth/" },
          { label: "Onsite SEO", href: "https://riseatseven.com/services/onsite-seo/" },
          { label: "Content Experience", href: "https://riseatseven.com/services/content-experience/" },
          { label: "B2B Marketing", href: "https://riseatseven.com/services/b2b-marketing/" },
          { label: "Digital PR", href: "https://riseatseven.com/services/digital-pr/" },
          { label: "Social Media & Campaigns", href: "https://riseatseven.com/services/social/" },
          { label: "Data & Insights", href: "https://riseatseven.com/services/data-insights/" },
          { label: "Social SEO/Search", href: "https://riseatseven.com/services/social-seo-tiktok-youtube/" },
        ],
      },
    ],
    image: "/images/header-menus-cover/Services.jpg",
  },
  industries: {
    id: "industries",
    label: "Industries",
    href: "https://riseatseven.com/services/b2b-marketing/",
    hasMegaMenu: true,
    columns: [
      {
        heading: "",
        links: [{ label: "B2B Marketing", href: "https://riseatseven.com/services/b2b-marketing/" }],
      },
    ],
    image: "/images/header-menus-cover/Industries.jpg",
  },
  international: {
    id: "international",
    label: "International",
    href: "https://riseatseven.com/international/",
    hasMegaMenu: true,
    columns: [
      {
        heading: "",
        links: [
          { label: "US Digital PR", href: "https://riseatseven.com/international/us-digital-pr/" },
          { label: "Spain Digital PR", href: "https://riseatseven.com/spain-digital-pr/" },
          { label: "Germany Digital PR", href: "https://riseatseven.com/germany-digital-pr/" },
          { label: "Netherlands Digital PR", href: "https://riseatseven.com/netherlands-digital-pr/" },
        ],
      },
    ],
    image: "/images/header-menus-cover/International.jpg",
  },
  about: {
    id: "about",
    label: "About",
    href: "https://riseatseven.com/about/",
    hasMegaMenu: true,
    columns: [
      {
        heading: "",
        links: [
          { label: "About Us", href: "https://riseatseven.com/about/" },
          { label: "Meet The Risers", href: "https://riseatseven.com/meet-the-team/" },
          { label: "Culture", href: "https://riseatseven.com/culture/" },
          { label: "Testimonials", href: "https://riseatseven.com/testimonials/" },
        ],
      },
    ],
    image: "/images/header-menus-cover/About.jpg",
  },
};

const NAV_SIMPLE = [
  { label: "Work", href: "https://riseatseven.com/work/", badge: "25" },
  { label: "Careers", href: "https://riseatseven.com/careers/" },
  { label: "Blog", href: "https://riseatseven.com/blog/" },
  { label: "Webinar", href: "https://riseatseven.com/webinars/" },
];

const MOBILE_NAV = [
  {
    label: "Services",
    href: "https://riseatseven.com/services/",
    children: [
      "Search & Growth Strategy", "Onsite SEO", "Content Experience",
      "B2B Marketing", "Digital PR", "Social Media & Campaigns",
      "Data & Insights", "Social SEO/Search",
    ],
    childHrefs: [
      "https://riseatseven.com/services/strategy-growth/",
      "https://riseatseven.com/services/onsite-seo/",
      "https://riseatseven.com/services/content-experience/",
      "https://riseatseven.com/services/b2b-marketing/",
      "https://riseatseven.com/services/digital-pr/",
      "https://riseatseven.com/services/social/",
      "https://riseatseven.com/services/data-insights/",
      "https://riseatseven.com/services/social-seo-tiktok-youtube/",
    ],
  },
  { label: "Industries", href: "https://riseatseven.com/services/b2b-marketing/", children: ["B2B Marketing"], childHrefs: ["https://riseatseven.com/services/b2b-marketing/"] },
  { label: "International", href: "https://riseatseven.com/international/", children: ["US Digital PR", "Spain Digital PR", "Germany Digital PR", "Netherlands Digital PR"], childHrefs: ["https://riseatseven.com/international/us-digital-pr/", "https://riseatseven.com/spain-digital-pr/", "https://riseatseven.com/germany-digital-pr/", "https://riseatseven.com/netherlands-digital-pr/"] },
  { label: "About", href: "https://riseatseven.com/about/", children: ["About Us", "Meet The Risers", "Culture", "Testimonials"], childHrefs: ["https://riseatseven.com/about/", "https://riseatseven.com/meet-the-team/", "https://riseatseven.com/culture/", "https://riseatseven.com/testimonials/"] },
  { label: "Work", href: "https://riseatseven.com/work/", children: [], childHrefs: [] },
  { label: "Careers", href: "https://riseatseven.com/careers/", children: [], childHrefs: [] },
  { label: "Blog", href: "https://riseatseven.com/blog/", children: [], childHrefs: [] },
  { label: "Webinar", href: "https://riseatseven.com/webinars/", children: [], childHrefs: [] },
];

// ─── Component ───────────────────────────────────────────────────────────────
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [announcementHidden, setAnnouncementHidden] = useState(false);
  const [megaMenu, setMegaMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  const lastScrollY = useRef(0);
  const hoverBgRef = useRef(null);
  const navRef = useRef(null);
  const megaMenuTimerRef = useRef(null);

  // Scroll handler
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 100);
      setAnnouncementHidden(y > 20);

      if (y > lastScrollY.current && y > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close mega menu on scroll
  useEffect(() => {
    const onScroll = () => setMegaMenu(null);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keyboard escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") { setMegaMenu(null); setMobileOpen(false); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const updateHoverBg = useCallback((el) => {
    if (!hoverBgRef.current || !navRef.current) return;
    const navRect = navRef.current.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    hoverBgRef.current.style.width = `${elRect.width}px`;
    hoverBgRef.current.style.left = `${elRect.left - navRect.left}px`;
    hoverBgRef.current.style.opacity = "1";
  }, []);

  const clearHoverBg = useCallback(() => {
    if (!hoverBgRef.current) return;
    hoverBgRef.current.style.opacity = "0";
  }, []);

  const handleNavEnter = useCallback((menuId, el) => {
    clearTimeout(megaMenuTimerRef.current);
    setMegaMenu(menuId);
    updateHoverBg(el);
  }, [updateHoverBg]);

  const handleNavLeave = useCallback(() => {
    megaMenuTimerRef.current = setTimeout(() => {
      setMegaMenu(null);
      clearHoverBg();
    }, 150);
  }, [clearHoverBg]);

  const handleMegaMenuEnter = useCallback(() => {
    clearTimeout(megaMenuTimerRef.current);
  }, []);

  const handleMegaMenuLeave = useCallback(() => {
    megaMenuTimerRef.current = setTimeout(() => {
      setMegaMenu(null);
      clearHoverBg();
    }, 150);
  }, [clearHoverBg]);

  return (
    <>
      {/* ── ANNOUNCEMENT BAR ──────────────────────────────── */}
      <div
        className={cn(
          "w-full px-2.5 pt-2.5 fixed top-0 left-0 z-[60] transition-all duration-300",
          mobileOpen && "opacity-0 pointer-events-none",
        )}
      >
        <a
          href="https://riseatseven.com/category-leaderboard/"
          className="announcement-bar w-full"
        >
          🚨 The Category Leaderboard - Live Now
        </a>
      </div>

      {/* ── FIXED HEADER ──────────────────────────────────── */}
      <div
        className={cn(
          "w-full fixed left-0 z-50 flex transition-all duration-700",
          "h-[4.5rem] lg:h-[5.5rem] lg:p-3",
          hidden ? "-translate-y-full" : "translate-y-0",
          announcementHidden ? "top-0" : "top-[3rem]",
        )}
      >
        {/* ── MOBILE FULL-SCREEN MENU ── */}
        <div
          className={cn(
            "w-full h-svh fixed top-0 left-0 z-50 transition-all duration-700 p-2 backdrop-blur-sm lg:hidden",
            mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
          )}
        >
          <div className="w-full h-full bg-grey-900/90 rounded-3xl px-4 py-3 flex flex-col items-start justify-between overflow-y-auto">
            <div className="w-full grid gap-y-8">
              {/* mobile top bar */}
              <div className="w-full flex items-center justify-between pt-1">
                <a href="/" className="w-32 md:w-40">
                  <div className="text-white">
                    <RiseAtSevenLogo className="w-full fill-current" />
                  </div>
                </a>
                <button
                  className="w-12 h-8 inline-flex items-center justify-center"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <div className="flex w-5 h-2 flex-col items-start justify-between">
                    <div className="w-full h-0.5 bg-white transition-transform duration-500 rotate-45 translate-y-[5px]" />
                    <div className="w-full h-0.5 bg-white transition-transform duration-500 -rotate-45 -translate-y-[5px]" />
                  </div>
                </button>
              </div>

              {/* mobile nav links */}
              <div className="flex flex-col items-start gap-y-1">
                {MOBILE_NAV.map((item) => (
                  <div key={item.label} className="w-full">
                    <div className="flex items-center justify-between">
                      <a
                        href={item.href}
                        className="text-white text-4xl md:text-5xl tracking-tight font-medium leading-none"
                      >
                        {item.label}
                      </a>
                      {item.children.length > 0 && (
                        <button
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white border border-white border-solid transition-transform duration-300"
                          onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                          aria-label={`Expand ${item.label}`}
                        >
                          {mobileExpanded === item.label ? (
                            <i className="fa-solid fa-chevron-up text-sm leading-none" aria-hidden="true" />
                          ) : (
                            <i className="fa-solid fa-chevron-down text-sm leading-none" aria-hidden="true" />
                          )}
                        </button>
                      )}
                    </div>
                    {item.children.length > 0 && (
                      <div
                        className={cn(
                          "grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-smooth",
                          mobileExpanded === item.label
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0 pointer-events-none",
                        )}
                      >
                        <div className="min-h-0 overflow-hidden pt-4">
                          <div className="grid gap-y-1">
                            {item.children.map((child, i) => (
                              <a
                                key={child}
                                href={item.childHrefs[i]}
                                className="inline-flex tracking-tight leading-tight font-medium text-white text-xl"
                              >
                                {child}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://riseatseven.com/connect-with-us/"
              className="btn btn--white w-full mt-6 flex-row-reverse"
            >
              <span>Get in touch</span>
              <i className="fa-regular fa-sharp fa-arrow-up-right text-xs" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* ── DESKTOP HEADER BAR ── */}
        <div
          className={cn(
            "w-full flex items-center justify-between relative z-20 px-4 lg:px-3 lg:rounded-full transition-all duration-500",
            scrolled ? "bg-white/60 backdrop-blur-lg" : "bg-transparent",
          )}
        >
          {/* Logo */}
          <a
            href="/"
            className={cn(
              "flex w-32 md:w-40 ml-2 transition-colors duration-300",
              scrolled ? "text-black" : "text-white",
            )}
            aria-label="Rise at Seven"
          >
            <div className="aspect-[4/3] text-current">
              <RiseAtSevenLogo className="w-full h-full object-contain fill-current" />
            </div>
          </a>

          {/* Desktop nav */}
          <div
            ref={navRef}
            className="relative ml-10 hidden lg:inline-flex"
            onMouseLeave={handleNavLeave}
          >
            {/* Hover pill background */}
            <div
              ref={hoverBgRef}
              className="absolute h-full rounded-full pointer-events-none bg-grey-50 transition-all duration-300 opacity-0"
              style={{ top: 0 }}
            />

            {/* Mega-menu nav items */}
            {Object.values(MEGA_MENUS).map((menu) => (
              <div key={menu.id} className="z-10 relative">
                <a
                  href={menu.href}
                  className={cn(
                    "inline-flex tracking-tight leading-tight py-1 font-medium relative duration-300 px-4 transition-colors",
                    scrolled || megaMenu
                      ? megaMenu === menu.id ? "text-grey-900" : "text-grey-400"
                      : "text-white hover:text-grey-900",
                  )}
                  onMouseEnter={(e) => handleNavEnter(menu.id, e.currentTarget)}
                >
                  {menu.label}
                  <span className="ml-1 pointer-events-none hidden pointer-fine:inline">+</span>
                </a>
              </div>
            ))}

            {/* Simple nav items */}
            {NAV_SIMPLE.map((item) => (
              <div key={item.label} className="z-10 relative">
                <a
                  href={item.href}
                  className={cn(
                    "inline-flex tracking-tight leading-tight py-1 font-medium relative duration-300 px-4 transition-colors",
                    scrolled ? "text-grey-400 hover:text-grey-900" : "text-white hover:text-grey-900",
                  )}
                  onMouseEnter={(e) => {
                    setMegaMenu(null);
                    updateHoverBg(e.currentTarget);
                  }}
                  onMouseLeave={handleNavLeave}
                >
                  {item.label}
                  {item.badge && (
                    <div className="inline-flex pointer-events-none absolute top-0 right-0 -translate-y-2.5 rounded-full px-1.5 py-0.5 text-[0.5rem] font-thin transition bg-mint text-grey-900">
                      {item.badge}
                    </div>
                  )}
                </a>
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:inline-flex">
            <a
              href="https://riseatseven.com/connect-with-us/"
              className={cn(
                "btn flex-row-reverse",
                scrolled ? "btn--dark" : "btn--white",
              )}
            >
              <span>Get in touch</span>
              <i className="fa-regular fa-sharp fa-arrow-up-right text-xs" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden">
            <button
              className="w-12 h-8 inline-flex items-center justify-center"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <div className="flex w-5 h-2 flex-col items-start justify-between">
                <div className={cn("w-full h-0.5 transition-colors", scrolled ? "bg-grey-900" : "bg-white")} />
                <div className={cn("w-full h-0.5 transition-colors", scrolled ? "bg-grey-900" : "bg-white")} />
              </div>
            </button>
          </div>
        </div>

        {/* ── MEGA MENUS ── */}
        {Object.values(MEGA_MENUS).map((menu) => (
          <div
            key={`mega-${menu.id}`}
            className={cn(
              "flex-shrink-0 absolute z-20 left-1/2 -translate-x-1/2 translate-y-full hidden pt-10 pointer-fine:flex",
              announcementHidden ? "bottom-0" : "bottom-10",
            )}
            style={{
              opacity: megaMenu === menu.id ? 1 : 0,
              pointerEvents: megaMenu === menu.id ? "auto" : "none",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={handleMegaMenuEnter}
            onMouseLeave={handleMegaMenuLeave}
          >
            <div className="bg-white rounded-3xl flex shrink-0 shadow-lg">
              <div className="flex-1 inline-flex items-center justify-center px-12 py-8">
                <div className="flex gap-x-12">
                  {menu.columns.map((col, ci) => (
                    <div key={ci} className="flex-1 -mt-3">
                      <ul className="flex flex-col gap-y-0.5">
                        {col.heading && (
                          <div className="h-8 flex items-end">
                            <span className="text-grey-300 text-base font-medium tracking-tight">{col.heading}</span>
                          </div>
                        )}
                        {col.links.map((link) => (
                          <li key={link.label}>
                            <a
                              href={link.href}
                              className="group inline-flex tracking-tight leading-tight font-medium relative text-xl overflow-hidden"
                            >
                              <div className="relative overflow-hidden">
                                <div className="transition group-hover:-translate-y-8 duration-300">{link.label}</div>
                                <div className="transition absolute top-0 left-0 translate-y-8 group-hover:translate-y-0 duration-300">{link.label}</div>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              {menu.image && (
                <div className="shrink-0 relative p-3 w-64">
                  <div className="relative rounded-2xl overflow-hidden bg-grey-900 aspect-square w-full">
                    <img
                      src={menu.image}
                      alt={menu.label}
                      className="w-full h-full object-cover absolute inset-0"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ── BACKDROP when mega menu open ── */}
      {megaMenu && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-sm"
          onClick={() => { setMegaMenu(null); clearHoverBg(); }}
        />
      )}
    </>
  );
}
