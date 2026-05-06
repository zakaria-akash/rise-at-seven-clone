import { cn } from "@/lib/cn";
import { Container } from "./Container";

// Section standardizes spacing, headings, and content width for future homepage blocks.
export function Section({
  as: Component = "section",
  className,
  innerClassName,
  eyebrow,
  title,
  description,
  children,
  tight = false,
  ...props
}) {
  return (
    <Component className={cn("section-shell", tight && "section-shell--tight", className)} {...props}>
      {/* Optional section header block mirrors the source site's eyebrow/title/description pattern. */}
      <Container className={innerClassName}>
        {(eyebrow || title || description) && (
          <header className="mb-8 max-w-3xl">
            {eyebrow ? <p className="section-eyebrow mb-4">{eyebrow}</p> : null}
            {title ? <h2 className="text-balance text-4xl font-semibold tracking-tight text-[color:var(--color-grey-900)] md:text-5xl">{title}</h2> : null}
            {description ? <p className="mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--color-grey-300)] md:text-lg">{description}</p> : null}
          </header>
        )}
        {children}
      </Container>
    </Component>
  );
}