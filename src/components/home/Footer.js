import { RiseAtSevenLogo } from "@/components/common/Logo";

const OFFICES = [
  { label: "Sheffield", href: "https://g.co/kgs/n5aUKqX" },
  { label: "Manchester", href: "https://g.co/kgs/aRLHXB9" },
  { label: "London", href: "https://g.co/kgs/JujFaqC" },
  { label: "New York", href: "https://g.co/kgs/NxzhAKU" },
  { label: "Contact", href: "https://riseatseven.com/contact/" },
];

const SERVICES = [
  { label: "Search & Growth Strategy", href: "https://riseatseven.com/services/strategy-growth/" },
  { label: "Onsite SEO", href: "https://riseatseven.com/services/onsite-seo/" },
  { label: "Content Experience", href: "https://riseatseven.com/services/content-experience/" },
  { label: "Digital PR", href: "https://riseatseven.com/services/digital-pr/" },
  { label: "Social Media & Campaigns", href: "https://riseatseven.com/services/social/" },
  { label: "Data & Insights", href: "https://riseatseven.com/services/data-insights/" },
];

const COMPANY = [
  { label: "About Us", href: "https://riseatseven.com/about/" },
  { label: "Meet The Risers", href: "https://riseatseven.com/meet-the-team/" },
  { label: "Culture", href: "https://riseatseven.com/culture/" },
  { label: "Careers", href: "https://riseatseven.com/careers/" },
  { label: "Work", href: "https://riseatseven.com/work/" },
  { label: "Blog", href: "https://riseatseven.com/blog/" },
];

export default function Footer() {
  return (
    <footer className="bg-grey-900 text-white">
      <div className="w-full px-4 md:px-7 py-16 xl:py-24">
        <div className="grid grid-cols-12 gap-y-10 md:gap-y-16 gap-x-5">

          {/* Top row: CTA + offices */}
          <div className="col-span-12 grid grid-cols-12 gap-y-10 md:gap-y-0 gap-x-5 border-b border-white/10 pb-10 md:pb-16">
            {/* CTA */}
            <div className="col-span-12 md:col-span-6 xl:col-span-5">
              <a
                href="https://riseatseven.com/connect-with-us/"
                className="group inline-flex items-baseline gap-x-4"
              >
                <span className="text-white font-medium tracking-tight leading-none text-5xl lg:text-6xl xl:text-7xl font-sans-primary transition-colors group-hover:text-mint">
                  Get in touch
                </span>
                <i className="fa-regular fa-sharp fa-arrow-up-right text-xl text-white/60 group-hover:text-mint transition-colors" aria-hidden="true" />
              </a>
            </div>

            {/* Offices */}
            <div className="col-span-12 md:col-span-6 xl:col-span-7 flex flex-col justify-end">
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {OFFICES.map((o) => (
                  <a
                    key={o.label}
                    href={o.href}
                    className="group text-white font-medium tracking-tight leading-tight text-lg lg:text-xl hover:text-mint transition-colors"
                  >
                    <div className="relative overflow-hidden">
                      <div className="transition group-hover:-translate-y-6 duration-300">{o.label}</div>
                      <div className="transition absolute top-0 left-0 translate-y-6 group-hover:translate-y-0 duration-300">{o.label}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links columns */}
          <div className="col-span-12 grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-5">
            <div>
              <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-4">Services</p>
              <ul className="flex flex-col gap-y-2">
                {SERVICES.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} className="text-white/70 hover:text-white text-sm transition-colors">{s.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-4">Company</p>
              <ul className="flex flex-col gap-y-2">
                {COMPANY.map((c) => (
                  <li key={c.label}>
                    <a href={c.href} className="text-white/70 hover:text-white text-sm transition-colors">{c.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-4">Connect</p>
              <ul className="flex flex-col gap-y-2">
                <li><a href="https://riseatseven.com/connect-with-us/" className="text-white/70 hover:text-white text-sm transition-colors">Get in Touch</a></li>
                <li><a href="https://riseatseven.com/privacy-policy/" className="text-white/70 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
                <li><a href="https://riseatseven.com/terms-conditions/" className="text-white/70 hover:text-white text-sm transition-colors">Terms &amp; Conditions</a></li>
              </ul>
            </div>
          </div>

          {/* Large logo */}
          <div className="col-span-12 mt-10 lg:mt-32">
            <div className="text-white">
              <RiseAtSevenLogo className="w-full fill-current" />
            </div>
          </div>

          {/* Bottom legal row */}
          <div className="col-span-12 flex justify-between flex-col mt-4 items-end md:flex-row lg:items-center lg:mt-0">
            <div className="flex gap-x-2 gap-y-2 flex-wrap items-center md:gap-3">
              <span className="text-white font-light leading-tight text-xs">© 2025 Rise at Seven Ltd. All rights reserved</span>
              <span className="w-1 h-1 rounded-full bg-white inline-flex" aria-hidden="true" />
              <span className="text-white font-light leading-tight text-xs">Company Number 11955187</span>
              <span className="w-1 h-1 rounded-full bg-white inline-flex" aria-hidden="true" />
              <span className="text-white font-light leading-tight text-xs">VAT Registered GB 322402945</span>
            </div>
            <div className="w-full mt-1 md:ml-auto md:text-right lg:mt-0 lg:w-auto">
              <a href="https://madebyshape.co.uk" target="_blank" rel="noopener noreferrer" className="text-white font-light leading-tight text-xs hover:underline">
                Website MadeByShape
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
