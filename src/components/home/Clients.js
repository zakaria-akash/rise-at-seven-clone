import { Section } from "@/components/common/Section";
import { Container } from "@/components/common/Container";

// Clients: renders a responsive grid of client logos using the existing public resources.
export default function Clients() {
  const logos = [
    "/resources/logo-1.png",
    "/resources/logo-2.png",
    "/resources/logo-3.png",
    "/resources/logo-4.png",
  ];

  return (
    <Section tight eyebrow="Clients" title="Trusted by" description="A selection of clients we've helped to discover and grow.">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
          {logos.map((src, i) => (
            <div key={i} className="flex items-center justify-center p-4">
              <img src={src} alt={`Client ${i + 1}`} className="max-h-12 object-contain" />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
