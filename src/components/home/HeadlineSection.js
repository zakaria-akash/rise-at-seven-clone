"use client";

// The "Driving Demand & Discovery" section with large heading + inline image
// Mirrors the reference site's about/headline block exactly.
export default function HeadlineSection() {
  return (
    <section className="w-full py-12 xl:py-24">
      <div className="w-full px-4 md:px-7">
        <div className="w-full flex justify-between items-start flex-col-reverse md:flex-row gap-x-3 md:gap-x-5 gap-y-3 md:gap-y-5">

          {/* Left: description */}
          <div className="w-full mb-1 md:mt-2 md:mb-0 max-w-sm xl:max-w-xl">
            <p
              className="text-grey-900 text-lg xl:text-2xl font-medium tracking-tight leading-tight font-sans-primary"
            >
              A global team of search-first content marketers engineering
              semantic relevancy &amp; category signals for both the internet
              and people
            </p>
          </div>

          {/* Right: large heading + CTAs */}
          <div className="w-full grid max-w-[24rem] md:max-w-[40rem] xl:max-w-xl gap-y-3 md:gap-y-7">
            <h2 className="inline-flex flex-wrap text-balance relative flex-col text-left text-grey-900 text-5xl md:text-6xl xl:text-7xl font-medium tracking-tight font-sans-primary leading-none">
              {/* Inline word flow with embedded image */}
              <span className="flex flex-wrap gap-x-3 items-baseline">
                <span>Driving</span>
                <span>Demand</span>
                <span>&amp;</span>
                <span>Discovery</span>
                {/* Inline image — the "human" touch from the reference */}
                <span
                  className="inline-block shrink-0 relative overflow-hidden rounded-sm bg-black/10"
                  style={{ width: "0.7em", height: "0.85em", verticalAlign: "middle" }}
                  aria-hidden="true"
                >
                  <img
                    src="https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=200&h=200&q=90&auto=format&fit=crop&dm=1750847630"
                    alt=""
                    className="w-full h-full object-cover object-center absolute inset-0"
                  />
                </span>
              </span>
            </h2>

            {/* CTAs — hidden on mobile (shown at top in mobile) */}
            <div className="flex flex-wrap gap-4 hidden md:flex">
              <a href="https://riseatseven.com/about/" className="btn btn--white flex-row-reverse">
                <span>Our Story</span>
                <i className="fa-regular fa-sharp fa-arrow-up-right text-xs" aria-hidden="true" />
              </a>
              <a href="https://riseatseven.com/services/" className="btn btn--ghost flex-row-reverse">
                <span>Our Services</span>
                <i className="fa-regular fa-sharp fa-arrow-up-right text-xs" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile CTAs */}
        <div className="flex flex-wrap gap-4 w-full md:hidden mt-4">
          <a href="https://riseatseven.com/about/" className="btn btn--white w-full flex-row-reverse">
            <span>Our Story</span>
            <i className="fa-regular fa-sharp fa-arrow-up-right text-xs" aria-hidden="true" />
          </a>
          <a href="https://riseatseven.com/services/" className="btn btn--ghost w-full flex-row-reverse">
            <span>Our Services</span>
            <i className="fa-regular fa-sharp fa-arrow-up-right text-xs" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
