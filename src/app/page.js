import { Button, Container, Icon, Section } from "@/components/common";

// These cards summarize the Phase 1 foundation work that is now in place.
const foundationTokens = [
  ["Typography", "Saans family, weight ladder, tracking scale, and display sizes extracted from the source styles."],
  ["Colors", "Mint accent plus grey palette aligned to the live homepage visual language."],
  ["Motion", "Transition durations and easing tokens prepared for the eventual GSAP-to-React migration."],
  ["Shell", "App router structure, metadata, and reusable section primitives established."],
];

export default function Home() {
  return (
    <main className="page-shell">
      {/* Foundation hero: communicates that the app structure and shared primitives are ready. */}
      <Section
        eyebrow="Phase 1 Foundation"
        title="Architecture-first setup for the Rise at Seven homepage clone"
        description="This stage establishes the reusable React/Next.js foundation, so later phases can focus on pixel-perfect page composition and motion parity without reworking the project structure."
      >
        <div className="foundation-hero">
          {/* Left panel: the active foundation summary and phase status callout. */}
          <div className="soft-panel rounded-[2rem] p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[color:var(--color-mint)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-grey-900)]">
                Foundation ready
              </span>
              <span className="text-sm text-[color:var(--color-grey-300)]">Phase 1 only, no homepage build yet</span>
            </div>

            <h1 className="mt-6 max-w-3xl text-balance text-5xl font-semibold tracking-tight text-[color:var(--color-grey-900)] md:text-7xl">
              Clean primitives, tokenized styles, and a stable app shell for the clone.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--color-grey-300)] md:text-lg">
              The repo now has shared container, section, button, and icon primitives plus the extracted design tokens needed to build the homepage in later phases.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button as="a" href="/" variant="primary">
                View foundation shell
              </Button>
              <Button as="a" href="/" variant="secondary">
                Continue to Phase 2
              </Button>
            </div>
          </div>

          {/* Right panel: the extracted token categories grouped for quick review. */}
          <aside className="soft-panel rounded-[2rem] p-6 md:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="section-eyebrow">Phase 1 deliverables</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[color:var(--color-grey-900)]">
                  Core foundations
                </h2>
              </div>
              <Icon className="h-12 w-12 rounded-full bg-[color:rgba(178,246,227,0.8)] text-[color:var(--color-grey-900)]">
                ⟡
              </Icon>
            </div>

            <div className="mt-6 space-y-3">
              {foundationTokens.map(([label, value]) => (
                <div key={label} className="token-card">
                  <div className="token-card__label">{label}</div>
                  <div className="token-card__value">{value}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </Section>

      {/* Snapshot section: documents the reusable primitives that Phase 2 will build on. */}
      <Section
        tight
        eyebrow="Architecture snapshot"
        title="Reusable primitives now exist for the rest of the build"
        description="These building blocks are intentionally simple so Phase 2 can assemble the real homepage sections without introducing additional layout debt."
      >
        <div className="token-grid">
          <div className="token-card">
            <div className="token-card__label">Container</div>
            <div className="token-card__value">Centered width wrapper with shared page gutters.</div>
          </div>
          <div className="token-card">
            <div className="token-card__label">Section</div>
            <div className="token-card__value">Standardized section spacing, headings, and eyebrow treatment.</div>
          </div>
          <div className="token-card">
            <div className="token-card__label">Button</div>
            <div className="token-card__value">Primary, secondary, and mint variants aligned to the source palette.</div>
          </div>
          <div className="token-card">
            <div className="token-card__label">Icon</div>
            <div className="token-card__value">Simple presentational wrapper for icons and decorative glyphs.</div>
          </div>
        </div>
      </Section>
    </main>
  );
}
