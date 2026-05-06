// animation.js
// Lightweight lazy wrapper for animation libraries.
// - This file intentionally avoids importing heavyweight libraries at module-level.
// - Consumers should call `getGsap()` inside an effect when they need GSAP.

export async function getGsap() {
  // Example lazy-load pattern. Uncomment and install `gsap` when ready:
  // const mod = await import('gsap');
  // return mod.gsap;

  // For now return a minimal shim that exposes a `to` method which no-ops.
  // This prevents runtime errors while keeping the initial bundle small.
  return {
    to: () => ({ kill: () => {} }),
    timeline: () => ({
      to: () => {},
      kill: () => {},
    }),
  };
}

export default getGsap;
