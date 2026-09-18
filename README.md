# T.C. Carpentry — Website Project

## Project Title
T.C. Carpentry Website (WEDE5020 POE — Part 2)

## Student Information
- Name & Surname: Sinakhokonke S'phelele Msibi
- Student Number: ST10508054
- Group: 5

## Project Overview
A five-page website for T.C. Carpentry, a family-run carpentry business
based in Sandton, Gauteng. The site introduces the business, showcases
its services, and allows visitors to request a quote or get in touch.

## Website Goals and Objectives
- Generate leads through an online quote request form.
- Present the business and its services clearly to potential clients.
- Provide easy-to-find contact information and location details.
- KPI: number of quote form submissions per month.
- KPI: contact form conversion rate.

## Key Features and Functionality
- Homepage with hero introduction and services preview.
- About Us page with company history, mission, vision, and team.
- Services page detailing all four core services.
- Enquiry page with a quote request form (name, email, phone, service, message).
- Contact page with two business locations (embedded maps) and a native
  contact form (name, email, message).
- Consistent navigation menu across all five pages.

## Timeline and Milestones
| Milestone | Target |
|---|---|
| Website Project Proposal | 10 August 2026|
| HTML structure (all 5 pages) | 14 August 2026 |
| CSS styling and responsive design | 18 September 2026 |
| JavaScript functionality and SEO | 22 October 2026 |

## Part 1 Details
This submission (Part 1) includes:
- The initial HTML structure for all 5 required pages.
- Basic CSS styling (colour scheme and typography from the proposal).
- Folder structure: root HTML files, with `css/`, `js/`, and `images/` subfolders.
- A simple SVG logo mark.

## Part 2 Details
This submission (Part 2) includes:
- Corrections made from Part 1 feedback (see Changelog below).
- A single external stylesheet (`css/style.css`) linked from every page.
- A CSS reset (`*`), base typography, and colour scheme applied site-wide.
- The navigation menu restructured to a standard `nav > ul > li > a`
  pattern (previously plain `<a>` tags directly inside `<nav>`), styled
  with `nav ul` (flexbox) and `nav ul li a` (link) selectors.
- A reusable `.container` / `.container div` grid pattern used for the
  service cards, team cards, and product highlights — each `.container`
  is a CSS Grid with three auto columns on desktop, and any `div` placed
  inside it is styled automatically without needing an extra class.
- A `.responsive-image` utility class applied to standalone images, plus
  a global `img` rule so every image scales to its container.
- Decorative, typographic, and layout styling for the desktop solution,
  using CSS Grid for the homepage hero and the `.container` grids.
- Interactive states (`:hover`, `:focus`, `:active`) on links, buttons,
  and form fields, plus `box-shadow` for depth on cards, images, and buttons.
- Full responsive design: two breakpoints — `@media screen and
  (max-width: 768px)` for tablet and `@media screen and (max-width:
  480px)` for mobile — switching the hero/`.container` grids from
  3 columns → 2 columns → 1 column as the screen narrows, stacking the
  navigation vertically, and scaling down heading/paragraph font sizes
  at each breakpoint.
- Consistent pixel-based sizing used throughout for type, spacing, and
  layout, alongside `%` units for layout and image sizing (e.g.
  `.hero-images img { width: 100%; }`, `img { max-width: 100%; }`).
- Responsive images: `srcset`/`sizes` used on all homepage hero photos so
  the browser loads an appropriately sized file (480w/800w/1200w) per
  screen size, and a `<picture>` element with art-directed sources used
  for the Services page banner image.
- Screenshot evidence of the desktop, tablet, and mobile views has been
  added to `/screenshots` and is referenced below.

### Screenshot Evidence
| Page | Desktop | Tablet | Mobile |
|---|---|---|---|
| Home | `screenshots/home-desktop.png` | `screenshots/home-tablet.png` | `screenshots/home-mobile.png` |
| About | `screenshots/about-desktop.png` | `screenshots/about-tablet.png` | `screenshots/about-mobile.png` |
| Services | `screenshots/services-desktop.png` | `screenshots/services-tablet.png` | `screenshots/services-mobile.png` |
| Get a Quote | `screenshots/enquiry-desktop.png` | `screenshots/enquiry-tablet.png` | `screenshots/enquiry-mobile.png` |
| Contact | `screenshots/contact-desktop.png` | `screenshots/contact-tablet.png` | `screenshots/contact-mobile.png` |

Part 3 (JavaScript functionality and SEO) will follow in a future
submission/edit.

## Sitemap
```
Home (index.html)
├── About Us (about.html)
├── Services (services.html)
├── Get a Quote (enquiry.html)
└── Contact (contact.html)
```
All pages are on the same level and are reachable from the main
navigation menu on every page.

## Changelog

### Part 1
- 6 August 2026 — Initial HTML structure created for all 5 pages.
- 9 August 2026 — Basic CSS styling applied (colour palette, typography, layout).
- 12 August 2026 — Logo created and added to header on all pages.

### Part 2
- 5 September 2026 — Reviewed Part 1 feedback (92/100). No major corrections were
  required; only small refinements were carried into Part 2 alongside
  the new CSS/responsive work below.
- 6 September 2026 — Removed a duplicate `.hero` rule block in `style.css` and
  merged it into a single, consolidated rule.
- 6 September 2026 — Restructured the navigation markup to a `nav > ul > li > a`
  pattern on all 5 pages, and restyled it with `nav ul`/`nav ul li a`
  selectors (previously plain `<a>` tags with no list structure).
- 8 September 2026 — Replaced the `.cards`/`.card` classes with a reusable
  `.container`/`.container div` grid pattern (three-column grid on
  desktop; any `div` placed inside is styled automatically). Applied
  this to the service cards on Home and Services, and to the team cards
  on About (which were previously unwrapped and just stacked vertically).
- 8 September 2026— Added a `.responsive-image` utility class to standalone page.
  images (logo, workbench photo, furniture assembly photo).
- 8 September 2026 — Added `box-shadow` to cards, hero images, and the primary
  button for visual depth.
- 10 September 2026 — Added `:focus` and `:active` states to nav links, the
  button, and form inputs (previously only `:hover` was styled) for
  better accessibility and interactivity feedback.
- 10 September 2026 — Added `letter-spacing` to header/nav text and the button for
  refined typography, and `background-color` to `h2` headings for a
  consistent section-heading style.
- 12 September 2026 — Wrapped the two Contact page map embeds in `.map-box`
  containers so the existing `.map-box` CSS rule actually applies.
- 12 September 2026 — Implemented responsive design: added `@media screen and
  (max-width: ...)` breakpoints at 768px (tablet) and 480px (mobile);
  hero/`.container` grids collapse from 3 → 2 → 1 columns; navigation
  stacks vertically; heading and paragraph font sizes scale down at
  each breakpoint.
- 12 September 2026 — Generated multiple image resolutions (480w/800w/1200w) and
  added `srcset`/`sizes` to all homepage hero images for responsive,
  bandwidth-friendly image loading; updated the `sizes` breakpoints to
  match the CSS breakpoints (480px/768px).
- 15 September 2026 — Added a `<picture>` element with art-directed sources for
  the Services page banner image (smaller crop served on mobile),
  updated to the 480px/768px breakpoints.
- 15 September 2026 — Added screenshot evidence of desktop/tablet/mobile views to
  the README.
- 18 September 2026 — Added a native contact form (name, email, message, `.btn`
  submit button) to the Contact page, so the existing `form`, `label`,
  `input`/`textarea`, and `.btn` styling in `style.css` is now actually
  used on the live site.
- 18 September 2026 — Converted the one remaining `rem` value (`.icon` font size)
  to `px`, so sizing is consistent px throughout the stylesheet.

## Photo Credits
All photography used on this site is sourced from Pexels and unSplash (free-to-use
licence, no attribution legally required, credited here as good practice):
- Wardrobe/kitchen fitting photo (homepage, logo crop) — Photo by Artbovich, Pexels.
- Workbench tools photo (Services page banner) — Photo by Ron Lach, Pexels.
- Sketching plans photo (About page) — Photo by Tima Miroshnichenko, Pexels.
- Furniture assembly photo (Services page) — Photo by Athena, Pexels.
- Staircase photo (homepage) - photo by zac gudakov, unsplash 
- CEO photo (About page) - photo by sinakhokonke msibi edited on chatgbt 

## References
- Colour palette and typography based on the approved Website Project
  Proposal for T.C. Carpentry.
- Google Maps embed used on the Contact page: https://www.google.com/maps
  (no API key required for basic `output=embed` iframes).
- Photography: Pexels (https://www.pexels.com) — see Photo Credits above.
- MDN Web Docs — CSS Grid Layout: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
- MDN Web Docs — Using media queries: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries
- MDN Web Docs — Responsive images (`srcset`/`sizes`/`picture`):
  https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images
- MDN Web Docs — CSS pseudo-classes (`:hover`, `:focus`, `:active`):
  https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
