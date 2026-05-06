// Minimal className combiner for the shared primitives and section wrappers.
export function cn(...parts) {
  return parts
    .flatMap((part) => {
      if (!part) {
        return [];
      }

      if (typeof part === "string") {
        return [part];
      }

      if (Array.isArray(part)) {
        return part;
      }

      return Object.entries(part)
        .filter(([, isEnabled]) => Boolean(isEnabled))
        .map(([className]) => className);
    })
    .filter(Boolean)
    .join(" ");
}