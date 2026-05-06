import { cn } from "@/lib/cn";

// Decorative icon wrapper keeps icon alignment and accessibility consistent.
export function Icon({ as: Component = "span", className, children, ...props }) {
  return (
    <Component aria-hidden="true" className={cn("inline-flex shrink-0 items-center justify-center", className)} {...props}>
      {children}
    </Component>
  );
}