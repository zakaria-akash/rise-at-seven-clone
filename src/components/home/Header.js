import { Container } from "@/components/common/Container";
import { cn } from "@/lib/cn";

// Header: static structure for desktop and mobile. Interactive behaviors (mega menus, mobile toggle)
// will be implemented in Phase 3. For Phase 2 we provide markup, responsive classes and ARIA skeleton.
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent" aria-hidden={false}>
      <div className="backdrop-blur-sm/0 transition-all duration-300">
        <Container className="flex items-center justify-between py-4">
          {/* Logo area: use existing public/logo or site text until asset replaced */}
          <div className="flex items-center gap-4">
            <a href="/" aria-label="Rise at Seven" className="text-[color:var(--color-grey-900)] font-semibold text-xl">
              Rise at Seven
            </a>
          </div>

          {/* Desktop nav links: static list for Phase 2 */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
            <a href="/services" className="text-[color:var(--color-grey-900)] hover:underline">Services</a>
            <a href="/services/b2b-marketing" className="text-[color:var(--color-grey-900)] hover:underline">Industries</a>
            <a href="/international" className="text-[color:var(--color-grey-900)] hover:underline">International</a>
            <a href="/work" className="text-[color:var(--color-grey-900)] hover:underline">Work</a>
            <a href="/about" className="text-[color:var(--color-grey-900)] hover:underline">About</a>
          </nav>

          {/* Mobile menu button (non-functional in Phase 2) */}
          <div className="lg:hidden">
            <button aria-label="Open menu" className="p-2 rounded-md bg-[color:var(--color-mint)] text-[color:var(--color-grey-900)]">
              Menu
            </button>
          </div>
        </Container>
      </div>
    </header>
  );
}
