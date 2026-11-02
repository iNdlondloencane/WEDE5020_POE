# T.C. Carpentry — Website Project

## Project Title
T.C. Carpentry Website (WEDE5020 POE — Part 3)

## Student Information
- Name & Surname: Sinakhokonke S'phelele Msibi
- Student Number: ST10508054
- Group: 5

## Links
- GitHub repository: https://github.com/iNdlondloencane/WEDE5020_POE

- Published site (GitHub Pages): https://indlondloencane.github.io/WEDE5020_POE/

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
- Contact page with an interactive Leaflet map of the two business locations and a native
  contact form (name, email, message).
- Consistent navigation menu across all five pages.

## Timeline and Milestones
| Milestone | Target |
|---|---|
| Website Project Proposal | 14 August 2026 |
| HTML structure (all 5 pages) | 14 August 2026 |
| CSS styling and responsive design | 18 September 2026 |
| JavaScript functionality and SEO | 2 November 2026 |

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
| Home | `ScreenShots/Homepage screenshot.png` | `ScreenShots/Home page- ipad screenshot.png` | `ScreenShots/Home page- mobile screenshot.png` |
| About | `ScreenShots/About Us page Screenshot.png` | `ScreenShots/About us- ipad screenshot.png` | `ScreenShots/About us page - mobile screenshot.png` |
| Services | `ScreenShots/Services page Screenshot.png` | `ScreenShots/Services page-ipad screenshot.png` | `ScreenShots/Services page - mobile screenshot.png` |
| Get a Quote | `ScreenShots/Enquiry page (Get a quote) screenshot.png` | `ScreenShots/Get a Quote : Enquiry- ipad screenshot.png` | `ScreenShots/Get a quote : enquiry page - mobile screenshot.png` |
| Contact | `ScreenShots/Contacts page Screenshot.png` | `ScreenShots/Contacts page - ipad screenshot.png` | `ScreenShots/Contact page - mobile screenshot.png` |

## Part 3 Details
- **Interactive elements:** accordion on the About page (Mission/Vision) and a
  fade-in animation when the page loads (CSS transition + JavaScript) in `js/main.js`.
- **Interactive map:** Leaflet + OpenStreetMap map on the Contact page that zooms to fit
  both locations, with a popup and a "Get directions" link for each marker (`js/map.js`).
- **Gallery lightbox:** clicking a homepage photo opens it full size with a caption and
  previous/next arrows (also the left/right keys); click the dark background, the X or
  press Escape to close (`js/lightbox.js`).
- **Dynamic content and search:** the Services page builds its cards from a
  JavaScript array, with a search box and an A-Z / Z-A sort (`js/services.js`).
- **Enquiry form:** text, email, phone, dropdown, radio buttons, checkboxes,
  date and textarea; JavaScript validation with error messages; shows an
  estimated cost and availability (`js/enquiry.js`).
- **Contact form:** validated, then compiled into an email that the visitor sends
  with the "Send Email" button (a `mailto:` link that opens their email app) to the
  recipient set in `js/contact.js`.
- **SEO:** keyword-based title tags, meta descriptions and meta keywords on every
  page, one `h1` with ordered `h2`/`h3` headings, descriptive alt text, internal
  links between pages, `robots.txt` and `sitemap.xml`, clean lowercase page URLs.
- **Deployment and security:** deployed on GitHub Pages, which serves the site over HTTPS.

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

### Part 3
- 30 October 2026 — Reviewed Part 2 feedback (80/100). Three points were raised and fixed below.
- 30 October 2026 — Feedback: "iframe for html form is not acceptable". Removed the embedded Google Form from the enquiry page and built a native HTML form with JavaScript validation (see the enquiry entry below). The Google Maps iframes on the Contact page were also replaced with a Leaflet map.
- 30 October 2026 — Feedback: "mobile responsiveness is not proper". On screens 768px and narrower the navigation is now hidden behind a Menu button (`.menu-toggle`, opened and closed in `js/main.js`) instead of a tall stack of links; header padding and link spacing were reduced so content starts higher on the screen.
- 30 October 2026 — Feedback: references. The four separate MDN entries were merged into one MDN Web Docs entry, and sources that were not used (Google Maps embed) were removed. The list now has one entry per source, in a consistent format.
- 30 October 2026 — Added `js/main.js` features: page-load fade-in animation and an accordion.
- 30 October 2026 — Converted Mission and Vision on the About page into an accordion.
- 30 October 2026 — Added a gallery lightbox to the homepage photos (`js/lightbox.js`).
- 30 October 2026 — Replaced the two Google Maps iframes with one interactive Leaflet map showing both locations (`js/map.js`).
- 30 October 2026 — Services page now loads its cards from JavaScript, with search and sort (`js/services.js`).
- 30 October 2026 — Replaced the Google Form on the enquiry page with a native form, JavaScript validation and a cost/availability response (`js/enquiry.js`).
- 30 October 2026 — Added JavaScript validation and an email-ready response to the contact form (`js/contact.js`; shared helpers in `js/validation.js`).
- 30 October 2026 — SEO: new title tags, meta descriptions and meta keywords on all pages; improved image alt text; renamed the About photo to `founder-photo.png`; added internal links and quote buttons; added `robots.txt` and `sitemap.xml`.
- 30 October 2026 — Converted the `.icon` font size from `rem` to `px` for consistent units.
- 2 November 2026 — Rewrote all JavaScript using the techniques from the WEDE5020 JavaScript notes: `let`/`const`, `===`/`!==`, standard function declarations, `forEach`, `includes`, `push`/`unshift`, `switch` and `return`.
- 2 November 2026 — Added `js/validation.js` with reusable helper functions (`showError`, `clearError`, `isValidEmail`, `isValidPhone`, `addToBox`) shared by both forms; each form now uses a `validateForm()` function that returns an array of errors.
- 2 November 2026 — Fixed the enquiry date check so a chosen weekday is read as a local date, and replaced `innerHTML` with `textContent` for visitor-typed text in the form responses.
- 2 November 2026 — Services search now ignores spaces and capital letters and shows a message when nothing matches; the lightbox also closes with the Escape key; the map shows the two addresses as text if the map library fails to load.
- 2 November 2026 — Added a `<meta name="author">` tag to all five pages.
- 2 November 2026 — Added `isValidName()` to `js/validation.js` so names with numbers are rejected on both forms.
- 2 November 2026 — Lightbox now has previous/next arrows, a caption, keyboard arrow keys, and loads the best-sized image for the screen.
- 2 November 2026 — Map now zooms to fit both locations and each popup has a "Get directions" link.
- 2 November 2026 — README: corrected the title to Part 3, added repository and Pages links, fixed photo credits and reference formatting.
- 2 November 2026 — SEO: renamed the Unsplash photos to descriptive file names (e.g. `spiral-timber-staircase-wrought-iron-balustrade-800w.jpg`) and rewrote the alt text on the homepage, About and Services images so each describes what the picture shows.

## Photo Credits
All photography used on this site is sourced from Pexels and unSplash (free-to-use
licence, no attribution legally required, credited here as good practice):
- Wardrobe/kitchen fitting photo (homepage, logo crop) — Photo by Artbovich, Pexels.
- Workbench tools photo (Services page banner) — Photo by Ron Lach, Pexels.
- Sketching plans photo (About page) — Photo by Tima Miroshnichenko, Pexels.
- Furniture assembly photo (Services page) — Photo by Athena, Pexels.
- Staircase photo (homepage) — Photo by Zac Gudakov, Unsplash.
- Homepage photos — Photos by Jared Brashier, Paul Schnurle, Nayron Toledo and PYX Photography, Unsplash.
- CEO photo (About page) — Photo by Sinakhokonke Msibi, edited with ChatGPT.

## References
Colour palette and typography follow the approved Website Project Proposal for T.C. Carpentry.

- Leaflet (2023) *Leaflet quick start guide*. Available at: https://leafletjs.com/examples/quick-start/ (Accessed: 2 November 2026).
- Mozilla (n.d.) *MDN Web Docs*. Available at: https://developer.mozilla.org (Accessed: 2 November 2026).
- OpenStreetMap contributors (n.d.) *Copyright and licence*. Available at: https://www.openstreetmap.org/copyright (Accessed: 2 November 2026).
- Pexels (n.d.) *Free stock photos*. Available at: https://www.pexels.com (Accessed: 2 November 2026).
- Unsplash (n.d.) *Free photos*. Available at: https://unsplash.com (Accessed: 2 November 2026).
