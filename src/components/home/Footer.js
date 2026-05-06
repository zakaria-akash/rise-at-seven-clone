import { Container } from "@/components/common/Container";

export default function Footer() {
  return (
    <footer className="border-t py-12 mt-20 bg-[color:var(--color-grey-50)]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <a href="/" className="font-semibold text-[color:var(--color-grey-900)]">Rise at Seven</a>
            <p className="mt-2 text-sm text-[color:var(--color-grey-500)]">© {new Date().getFullYear()} Rise at Seven. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-4">
            <a href="/privacy" className="text-sm text-[color:var(--color-grey-500)]">Privacy</a>
            <a href="/terms" className="text-sm text-[color:var(--color-grey-500)]">Terms</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
