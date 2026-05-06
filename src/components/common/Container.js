import { cn } from "@/lib/cn";

// Shared page-width wrapper used by every section to keep horizontal rhythm consistent.
export function Container({ as: Component = "div", className, children, ...props }) {
  return (
    <Component className={cn("page-shell__inner", className)} {...props}>
      {children}
    </Component>
  );
}