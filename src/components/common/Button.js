import { cn } from "@/lib/cn";

// Button variants stay token-driven so the homepage can reuse the same visual language everywhere.
const variants = {
  primary: "bg-[color:var(--color-grey-900)] text-[color:var(--color-white)] shadow-[0_16px_40px_rgba(17,18,18,0.15)] hover:-translate-y-0.5 hover:bg-[color:var(--color-grey-800)]",
  secondary: "border border-[color:rgba(17,18,18,0.12)] bg-[color:rgba(255,255,255,0.7)] text-[color:var(--color-grey-900)] hover:bg-white",
  mint: "bg-[color:var(--color-mint)] text-[color:var(--color-grey-900)] shadow-[0_16px_40px_rgba(178,246,227,0.35)] hover:-translate-y-0.5",
};

// Size presets keep CTA spacing consistent across future homepage sections.
const sizes = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-5 py-3 text-base",
  lg: "px-6 py-3.5 text-base",
};

// A single polymorphic button primitive avoids duplicated CTA markup later in the build.
export function Button({ as: Component = "button", variant = "primary", size = "md", className, children, ...props }) {
  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tightish transition duration-300 ease-[var(--transition-smooth)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-grey-900)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-grey-100)]",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}