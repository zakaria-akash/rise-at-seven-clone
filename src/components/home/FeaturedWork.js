import { Section } from "@/components/common/Section";
import { Container } from "@/components/common/Container";

// FeaturedWork: static grid of case study teasers. Links point to canonical pages.
export default function FeaturedWork() {
  const items = new Array(6).fill(0).map((_, i) => ({
    title: `Case Study ${i + 1}`,
    href: "/work",
    image: `/resources/work-${i + 1}.jpg`,
  }));

  return (
    <Section eyebrow="Featured Work" title="Featured Work" description="Selected case studies showcasing measurable outcomes.">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <a key={idx} href={it.href} className="group block overflow-hidden rounded-xl">
              <div className="h-48 bg-[color:var(--color-grey-200)]">
                <img src={it.image} alt={it.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-semibold text-[color:var(--color-grey-900)]">{it.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
