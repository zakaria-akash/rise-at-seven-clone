# Phase 0 - Discovery, Audit, and Baseline

Status: Completed
Date: 2026-05-06

## Scope and Evidence Sources
- Resource HTML: public/resources/ExistingHomePgae.html
- Resource CSS: public/resources/ExistingStyles.css
- Resource JS bundle: public/resources/ExistingJSCodes.js
- Live homepage reference: https://riseatseven.com/

## Deliverable 1: Component and Section Inventory

### A) Global Shell and Wrapper Architecture
- Root shell: `body` uses `bg-grey-100`, `scroll-smooth`, `data-barba="wrapper"`.
- Page container: `main` uses `data-barba="container"`, namespace `home`.
- Transition overlays:
  - Enter mask: `.js-enter-mask`, `#circle-reveal-mask`, `.js-reveal-ellipse`.
  - Leave mask: `.js-leave-mask`, `.js-leave-ellipse`, `.js-leave-svg`.
- Cursor systems:
  - Icon cursor custom event target: `@component-cursor.window`.
  - Button cursor custom event target: `@component-cursor-button.window`.
- Header shell:
  - Announcement bar + sticky/floating header states.
  - Desktop nav with mega menus.
  - Mobile full-screen menu overlay.
- Backdrop/overlay system for mega-menu state.

### B) Inventory in Render Order
| Order | Block | Key Hooks / Classes | Complexity |
|---|---|---|---|
| 1 | Enter transition mask | `.js-enter-mask`, `.js-reveal-ellipse` | High |
| 2 | Leave transition mask | `.js-leave-mask`, `.js-leave-ellipse` | High |
| 3 | Custom cursor (icon) | `@component-cursor.window`, `x-ref="cursor"` | High |
| 4 | Custom cursor (button) | `@component-cursor-button.window`, `scale-0/scale-100` | High |
| 5 | Announcement bar | mint bar with animated text link | Medium |
| 6 | Sticky header | scroll hide/show states, background state | High |
| 7 | Mobile menu modal | `mobileMenu` state, `lg:hidden`, full-height overlay | Medium |
| 8 | Desktop navigation | top-level links + hover background | Medium |
| 9 | Services mega menu | `data-menu-id="102"`, animated container | High |
| 10 | Industries mega menu | `data-menu-id="23929"` | Medium |
| 11 | International mega menu | `data-menu-id="103"` | Medium |
| 12 | Mobile collapsible nav groups | `x-collapse`, `active` toggles | Medium |
| 13 | Mega menu service preview rail | image swap by active service ID | High |
| 14 | Backdrop layer | close/hover/escape close logic | Medium |
| 15 | Content sections below header | hero, client logos, work, services, legacy, insights, footer | High |

## Deliverable 2: Style Token Inventory

### A) Typography Tokens
- Primary family: `--font-sans-primary: "saans", ui-sans-serif, system-ui, sans-serif`.
- Font files loaded with weights 300/400/500/600/700 (Saans Light to Bold).
- Weight tokens:
  - `--font-weight-light: 300`
  - `--font-weight-normal: 400`
  - `--font-weight-medium: 500`
  - `--font-weight-semibold: 600`
  - `--font-weight-bold: 700`
- Notable scale tokens:
  - `--text-2xs` to `--text-10xl`
  - Includes custom steps (`--text-7.5xl`, `--text-8.5xl`, `--text-9.5xl`)
- Tracking and leading:
  - `--tracking-tightish`, `--tracking-tight`, `--tracking-normal`
  - `--leading-0.9`, `--leading-tight`, `--leading-normal`, `--leading-relaxed`

### B) Color Tokens
- Primary accent:
  - `--color-mint: #b2f6e3`
  - `--mask-colour: #b2f6e3`
- Neutral greys:
  - `--color-grey-50: #f7f7f7`
  - `--color-grey-100: #efeeec`
  - `--color-grey-150: #e9e9e9`
  - `--color-grey-200: #bebebe`
  - `--color-grey-300: #6a6a6a`
  - `--color-grey-400: #282828`
  - `--color-grey-500: #1f1f1f`
  - `--color-grey-600: #1a1a1a`
  - `--color-grey-800: #121212`
  - `--color-grey-900: #111212`
- Utility constants used globally:
  - `--color-white: #fff`
  - `--color-black: #000`

### C) Spacing and Layout Tokens
- Base spacing: `--spacing: .25rem`.
- Container sizes: `--container-xs` to `--container-5xl`.
- Viewport fixes:
  - `--spacing-screen-fix: calc(var(--vh, 1vh) * 100)`
  - `--spacing-screen-fix-110: calc(var(--vh, 1vh) * 110)`
- Aspect utilities:
  - `--aspect-20/9`, `--aspect-16/9`, `--aspect-9/16`, `--aspect-4/3`, `--aspect-1/1`

### D) Motion Tokens
- Default duration/easing:
  - `--default-transition-duration: .6s`
  - `--default-transition-timing-function: cubic-bezier(.135, .9, .15, 1)`
- Explicit easing tokens:
  - `--ease-smooth: cubic-bezier(.135, .9, .15, 1)`
  - `--ease-in: cubic-bezier(.4, 0, 1, 1)`
  - `--ease-out: cubic-bezier(0, 0, .2, 1)`

## Deliverable 3: Interaction and Event Map

### A) Core Runtime Libraries Detected
- Alpine.js component state/directive system (`x-data`, `x-show`, `x-bind`, `x-collapse`).
- GSAP for transform/opacity transitions (`gsap.set`, `gsap.to`).
- Swiper runtime present in JS bundle.
- Barba container attributes present in HTML (`data-barba` wrappers).

### B) Event Map
| Event Source | Event | Target | Effect |
|---|---|---|---|
| Pointer | `pointermove` | custom cursors (`x-ref="cursor"`) | updates cursor top/left each move |
| Window | `scroll` | header controller state | toggles `hideAnnouncementBar`, `hideHeader`, `hideHeaderBackground`, direction |
| UI click | `x-on:click.prevent` | mobile menu toggle | flips `mobileMenu` state |
| UI hover | `x-on:mouseover` | desktop nav links | sets `megaMenu` and active service preview |
| Overlay click | `x-on:click.prevent` | backdrop | closes mega menu |
| Keyboard | `x-on:keydown.escape.window` | header/mega menu system | closes mega menu and resets hover state |
| Custom event | `component-cursor` | icon cursor component | toggles visibility and icon class |
| Custom event | `component-cursor-button` | button cursor component | toggles visibility and dynamic label text |
| Custom event | `component-header` | header component | applies hide-header override |

### C) Notable Interactive State Variables
- Header/menus: `mobileMenu`, `megaMenu`, `hideHeader`, `hideHeaderBackground`, `hideAnnouncementBar`, `hoveringLink`.
- Scroll system: `scrollPosition`, `previousScrollPosition`, `scrollDirection`.
- Cursor systems: `active`, `text`, `icon`.
- Mega menu transitions: `previousMegaMenuId`, `previousMegaMenuWidth`, `previousMegaMenuHeight`.

## Deliverable 4: Parity Matrix and Baseline Checklist

### A) Must-Match (Exact)
- Color palette and token mapping (especially mint + grey scale).
- Font family/weight/rendering behavior for Saans.
- Header states and timings (announcement collapse and sticky/hide behavior).
- Mega menu open/close mechanics, scaling feel, and service preview transitions.
- Cursor behavior on pointer-fine devices.
- Enter/leave mask transition behavior and look.

### B) Tolerance Allowed (Low)
- Minor anti-aliasing differences from browser/font rendering.
- Sub-pixel spacing differences smaller than 2px where computed layout differs by engine.
- Equivalent easing approximations where GSAP internals are replaced by React motion stack.

### C) Baseline Snapshot Checklist (Live Homepage)
The following baseline content/signals were confirmed from the live site and will be used as regression checkpoints:
- Nav labels include Services, Industries, International, About, Work, Careers, Blog, Webinar, Get in Touch.
- Homepage includes blocks similar to:
  - "The agency behind ..."
  - "Driving Demand & Discovery"
  - "Featured Work"
  - "Legacy In The Making"
  - "Pioneers"
  - "Award Winning"
  - "Speed"
  - "Stay updated with Rise news"
- Footer includes legal links and office/location references.

## Migration Risk Register (Phase 0 Output)
| Risk | Level | Why It Matters |
|---|---|---|
| Barba-style container transitions vs Next routing | High | lifecycle mismatch, route transition architecture changes |
| GSAP dynamic scale transitions in mega menu | High | depends on measuring previous/next dimensions for continuity |
| Pointer-tracking custom cursor | High | can cause performance issues if tied to React re-renders |
| Alpine `x-collapse` behavior parity | Medium | React replacement must preserve motion and accessibility |
| Scroll-driven header state timing | Medium | easy to regress due debounce/throttle differences |

## Exit Criteria Validation
- [x] Major visual blocks identified in page order.
- [x] Global shell/wrapper architecture documented.
- [x] Style token inventory extracted (typography, color, spacing, motion).
- [x] Interaction/event map documented with concrete event names and states.
- [x] Parity matrix defined (exact vs tolerance).
- [x] Live-page baseline content checklist captured.
- [x] Critical migration risks identified.

Conclusion: Phase 0 is completed and ready for Phase 1 start.
