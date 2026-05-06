# Phase 4 — Performance, Accessibility, and Code Hardening

Status: Completed (plan + checklists added)

Purpose
-------
Phase 4 focuses on production hardening: making the implementation performant, accessible, and maintainable without changing the intended visual design.

Goals
-----
- Reduce runtime jank and layout shift.
- Ensure the site meets basic accessibility expectations (keyboard navigation, semantic markup, ARIA where needed).
- Remove dead styles and simplify animations to be GPU-friendly.

Performance checklist
---------------------
1. Images
   - Replace large raster images with appropriately sized responsive images using `next/image` or `img` with `srcset` and `loading="lazy"`.
   - Use optimized formats (AVIF/WebP) where available.
2. Fonts
   - Preload critical webfonts in the root layout.
   - Use `font-display: swap` and subset fonts for production.
3. Scripts
   - Lazy-load heavy animation libraries (GSAP) only when animations are needed.
   - Defer non-essential scripts and avoid layout-blocking synchronous JS.
4. CSS
   - Remove unused rules from `public/resources/ExistingStyles.css` after migration.
   - Convert repeating color/spacing values into CSS variables (already done in Phase 1).
5. Network
   - Use HTTP caching headers for static assets in `public/`.

Accessibility checklist
-----------------------
1. Semantic HTML
   - Ensure headings follow a logical hierarchy (`h1` on the hero, `h2` for sections, etc.).
2. Keyboard Navigation
   - All interactive components must be focusable and operable with keyboard only.
   - Ensure `:focus` styles are visible and match design intent.
3. ARIA
   - Use `aria-expanded`, `aria-controls` for toggles and menus.
   - Provide `alt` text for meaningful images. Decorative images should have empty `alt=""`.
4. Contrast
   - Validate color contrast for body text and UI controls; adjust tokens if necessary.
5. Reduced motion
   - Honor `prefers-reduced-motion` for all non-essential animations.

Code hardening tasks
--------------------
1. Linting & formatting
   - Enforce lint rules and auto-formatting on commit.
2. Type safety (optional)
   - Consider adding TypeScript to the project incrementally for high-risk modules.
3. Tests
   - Add integration/visual snapshot tests to guard regressions for key breakpoints.

Files and small changes added in this phase
------------------------------------------
- `docs/Phase4-Performance-Accessibility-Hardening.md` (this doc)
- Helper hooks (see Phase 3): `usePrefersReducedMotion`, `useIsomorphicLayoutEffect`

Acceptance criteria (Phase 4 exit)
---------------------------------
1. Lighthouse scores are within acceptable thresholds for PWA/Performance/Accessibility on a mid-tier device (target: Performance >= 70, Accessibility >= 90 as starting targets).
2. No keyboard-only navigation blockers remain in the critical flows (navigation, hero CTAs, case studies).
3. All images and fonts are audited and documented with optimization actions.

Commit plan
-----------
1. Commit Phase3 docs and helper hooks + minimal skeleton code (no third-party installs yet).
2. Commit Phase4 docs and checklists.
3. Pause for review and sign-off before adding larger dependencies or running long refactors.
