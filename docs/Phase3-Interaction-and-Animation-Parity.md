# Phase 3 — Interaction and Animation Parity

Status: Completed (implementation plan and skeletons added)

Purpose
-------
This document describes the migration strategy and concrete implementation tasks to reproduce the interaction and animation behavior of the reference homepage (https://riseatseven.com/) using the archived resources in `public/resources/ExistingHomePgae.html`, `public/resources/ExistingStyles.css` and `public/resources/ExistingJSCodes.js`.

Goals
-----
- Reproduce navigation/mega-menu interactions and sticky header behavior.
- Recreate entrance, reveal and hover animations with matching timing and easing.
- Migrate cursor systems (where practical) to a React-friendly implementation.
- Replace global imperative scripts (Alpine/Barba/vanilla) with React primitives + controlled animation hooks (GSAP or Framer Motion where appropriate).
- Respect `prefers-reduced-motion` and provide safe fallbacks.

High-level approach
-------------------
1. Audit `ExistingJSCodes.js` to identify animation timelines, easing values, durations and event hooks (scroll, mousemove, click). Copy the timing tokens into CSS variables or a JS constants file so motion tokens are centralized.
2. Implement animation behaviors in isolated components using `refs` and `useLayoutEffect` (or `useEffect` when safe). Use a lazily-loaded `gsap` wrapper to keep initial JS payload small.
3. Replace global page transition code (Barba) with React Router-aware transitions if the product needs them. For the single-page clone we will recreate the visual transitions on mount/unmount using component-level enter/exit timelines.
4. Implement the cursor system as a purely client-side component that mounts on the client only. Use passive pointer events and CSS transforms to reduce layout thrash.

Resources mapping
-----------------
- Source markup & CSS: `public/resources/ExistingHomePgae.html`, `public/resources/ExistingStyles.css` — use these to extract class names, timing, and keyframe shapes.
- Source JS: `public/resources/ExistingJSCodes.js` — find GSAP timelines, easing (`Power3.easeOut`, durations in ms/seconds), event listeners attached to `document` or `window` and map them to React lifecycle equivalents.

Concrete tasks (component-level)
--------------------------------
- `Header` / `MegaMenu`
  - Recreate open/close timelines with a GSAP timeline attached to the menu `ref`.
  - Use `aria-expanded` and keyboard handlers for accessible interaction.
  - Implement sticky / hide-on-scroll behavior using an efficient scroll listener (IntersectionObserver or throttled handler).

- `Hero`
  - Recreate hero entrance stagger for headline, copy, CTAs and hero media.
  - Use `useLayoutEffect` to run the enter timeline only on client mount.

- `Clients`, `FeaturedWork`, `ServicesList`
  - Implement small reveal-on-scroll animations (intersection observer triggers staggered reveals).

- `Cursor` (optional parity)
  - Implement client-only cursor component that renders a pointer layer on top of the page. Provide simple variants for `hover` and `link` states.

Implementation notes and code skeletons
------------------------------------
- Use `useIsomorphicLayoutEffect` for code that must run synchronously after DOM mutations (important for animations that read layout and write transforms).
- Lazy-import animation libraries to avoid shipping them for users who don't need them immediately. Example pattern:

```js
// src/lib/animation.js (lazy wrapper)
// - Exposes `getGsap()` which returns the GSAP instance via dynamic import.
// - Consumers call `const gsap = await getGsap()` inside effects.
```

- Respect `prefers-reduced-motion` and do not run non-essential motion when set.

Testing and acceptance
----------------------
- Visual comparison screenshots for Key breakpoints (desktop/tablet/mobile) for the following flows:
  - Page load hero entrance
  - Open/close mega menu
  - Scroll reveals for featured work
  - Hover micro-interactions
- Performance: ensure each animation runs at target 60fps on a mid-range device; profile using DevTools.

Files added in this phase
------------------------
- `src/hooks/usePrefersReducedMotion.js` — helper hook for respecting motion preferences.
- `src/hooks/useIsomorphicLayoutEffect.js` — safe hook that resolves to `useLayoutEffect` on the client and `useEffect` on the server.
- `src/lib/animation.js` — lazy wrapper with usage notes (no runtime side-effects).

Acceptance criteria (Phase 3 exit)
--------------------------------
1. Mega menu open/close, header stick/unstick and hero entrance effects match timing/easing within a small tolerance.
2. All animations honor `prefers-reduced-motion`.
3. Interactive elements are keyboard accessible and expose appropriate ARIA states.
4. No blocking runtime errors or long first-contentful-paint regressions introduced by animation code.

Next steps for commit
---------------------
1. Run unit/visual tests for the timelines.
2. Commit the Phase 3 documentation and the small helper files added as part of the migration.
3. Stop for phase sign-off before adding third-party libraries (GSAP) to package.json — do that after approval to keep the diff focused.
