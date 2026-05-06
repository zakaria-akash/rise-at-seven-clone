import { Section } from "@/components/common/Section";
import { Container } from "@/components/common/Container";

// ServicesList: static list of services offered. Simple tiles for Phase 2.
export default function ServicesList() {
  const services = [
    { title: "SEO & Content", href: "/services/seo" },
    { title: "Paid Media", href: "/services/paid" },
    { title: "Analytics & Data", href: "/services/analytics" },
    { title: "Strategy", href: "/services/strategy" },
  ];

  return (
    <Section eyebrow="Services" title="What we do" description="End-to-end services to increase discovery and conversions.">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <a key={i} href={s.href} className="block rounded-lg p-6 bg-white border">
              <h4 className="text-lg font-semibold text-[color:var(--color-grey-900)]">{s.title}</h4>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
