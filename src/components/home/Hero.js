import { Section } from "@/components/common/Section";
import { Container } from "@/components/common/Container";

// Hero: static hero block matching the reference content hierarchy and large display type.
export default function Hero() {
  return (
    <Section as="div" className="pt-24" innerClassName="page-shell__inner">
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <h1 className="text-5xl md:text-7xl font-extrabold text-[color:var(--color-grey-900)] tracking-tight">The agency behind search-first content that drives discovery</h1>
            <p className="mt-6 text-lg text-[color:var(--color-grey-400)] max-w-2xl">We engineer semantic relevancy and category signals that move both the internet and people.</p>
            <div className="mt-8 flex gap-4">
              <a href="/services" className="inline-block rounded-full px-6 py-3 bg-[color:var(--color-mint)] text-[color:var(--color-grey-900)] font-semibold">View All Services</a>
              <a href="/work" className="inline-block rounded-full px-6 py-3 border border-[color:rgba(17,18,18,0.08)] text-[color:var(--color-grey-900)]">Explore Our Work</a>
            </div>
          </div>

          <div className="md:col-span-5">
            {/* Placeholder for hero image; Phase 2 uses static image element from public resources */}
            <img src="/resources/hero-placeholder.jpg" alt="Hero" className="rounded-xl shadow-lg" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
