# Dorbar — Webflow to Astro Conversion

## Project Overview

Convert the **dorbar-webflow** Webflow HTML export into a clean, performant **Astro** static site called **dorbar-astro**.

- **Source:** `dorbar-webflow/` (Webflow export — HTML + CSS + images)
- **Target:** `dorbar-astro/` (Astro project)
- **Project name:** `dorbar`
- **Build:** 36 pages, 0 errors
- **Live reference:** dorbar.webflow.io

---

## Current Status

### Completed

- [x] Project setup (Astro, GSAP, Swiper)
- [x] BaseLayout.astro — pure HTML shell (head, fonts, GSAP script, global.css)
- [x] PageLayout.astro — wraps BaseLayout with Navbar, Footer, skip-link, page-wrapper
- [x] Navbar.astro — desktop + mobile slide-in menu with JS toggle
- [x] Footer.astro — 4-column footer with newsletter form
- [x] All 15 data files extracted
- [x] All reusable components (ui, cards, sections, icons)
- [x] global.css — 6990+ lines with all design tokens & responsive breakpoints
- [x] Homepage (index.astro) — all 10 sections
- [x] 6 inner pages: about, attorneys, services, consultation, contact, 404
- [x] 9 service detail pages (services/[slug].astro) — dynamic routes
- [x] Blog listing page (blog.astro)
- [x] 8 blog post pages (blog-post/[slug].astro) — dynamic routes
- [x] 4 blog category pages (blog-categories/[slug].astro) — dynamic routes
- [x] 3 utility pages: 401 (BaseLayout only), 404 (BaseLayout + Navbar), licenses, style-guide
- [x] Unused files cleanup (components, data files, images)
- [x] Header CSS — property-by-property match with Webflow (all breakpoints)
- [x] GSAP animation fix — gsap.to() with explicit opacity:1 targets (gsap.from was broken)
- [x] Webflow CSS variable cleanup — all `--color--*`, `--gap--*`, `--font-size--*`, `--font-family--*`, `--font-weight--*` converted to project variables
- [x] Blog post detail page (`blog-post/[slug].astro`) — complete CSS matching with Webflow
- [x] Blog post data fields: `heroImage`, `detailSummary`, `contentTwo` added to `BlogPost` interface
- [x] RelatedPostsSection extracted as reusable component with GSAP scroll animations
- [x] Service detail page sections — all 7 sections CSS-matched with Webflow (hero, stat, services, protect, why-choose, FAQ, CTA)
- [x] ServiceDetailCtaSection.astro — dedicated CTA component for service pages (replaces generic CtaBanner)
- [x] FAQ accordion smooth animation — GSAP height 0→auto with `power2.inOut` easing
- [x] Service detail page data — all 9 services content populated in `serviceDetails.ts`
- [x] Case study detail pages (case-study/[slug].astro) — 3 dynamic routes, 8 section components CSS-matched with Webflow
- [x] Case study data — `caseStudyDetails.ts` with `CaseStudyDetail` interface, 3 case studies with full content
- [x] Licenses page — extracted inline sections to LicensesHeroSection + LicensesContentSection components
- [x] LicensesHeroSection CSS matched — background image via `--bg-image`, gradient overlay, responsive rules, GSAP slideInBottom
- [x] LicensesContentSection CSS matched — `#Licenses-Section`, GSAP slideInBottom with Webflow IX2 delays (600ms/800ms/200ms), responsive fixes
- [x] Footer social icons — changed from fill-based to stroke-based SVGs matching Webflow (`stroke="currentColor"`)
- [x] ContactFormSection social icons — added missing `contact-social-info-block` with LinkedIn/Facebook/Instagram SVGs
- [x] CtaBanner button icon removed — `showIcon={false}` on "Book Free Consultation" ButtonPrimary
- [x] AboutHeroSection button icon removed — `showIcon={false}` on ButtonPrimary
- [x] HomeContactSection padding-top: 0 — scoped to index.astro only via `#Contact-Us-Two .section-gap-two.top { padding-top: 0 }`
- [x] All case study section GSAP imports fixed — all 8 sections were missing `import { gsap }` / `import { ScrollTrigger }` (Astro bundles each script as separate ES module)
- [x] CaseStudyHeroSection subtitle fixed — hardcoded "Case Study" (matching Webflow) instead of dynamic `{practiceArea}`
- [x] CaseStudyDetailSection animations fixed — matched Webflow IX2 (heading delay 200ms, text delay 300ms, image slideInBottom not scale, liner scaleY delay 800ms)
- [x] Removed all "webflow" references from dorbar-astro code comments

### Marketplace Readiness (Completed)

- [x] Removed unused files — deleted `src/data/faqs.ts`, `src/data/navigation.ts`, `src/data/trackRecord.ts`, `src/scripts/` (empty dir)
- [x] Project name rebranding — changed `package.json` name from `dorbar-astro` to `dorbar`, updated all internal references (README, comments) without changing folder names
- [x] Astro v5 → v6 upgrade — upgraded to Astro 6.0.8 + `@astrojs/sitemap` latest compatible
- [x] Logo clipping fix — removed forced `width={200} height={40}` from Navbar/Footer `<Image>`, added `.brand-logo { width: 100%; height: auto; }` CSS
- [x] Blog images migrated to asset pipeline — moved all blog images from `public/images/blog/` to `src/assets/images/blog/`, updated `blog-post/[slug].astro` with `resolveImage()` for heroImage + inline content image replacement
- [x] Source images converted to WebP — all JPG/PNG source images in `src/assets/images/` converted via `cwebp -q 80` (12MB → 3.4MB), updated all `.jpg`/`.png` references across 20+ files to `.webp`
- [x] HomeHeroSection image fix — removed forced `width={940} height={700}` from `<Image>` that conflicted with CSS `object-fit: cover` on `100vh` parent
- [x] Duplicate images cleanup — removed 4 duplicate images (`hero/about-hero-image-min.jpg`, `backgrounds/consultation-hero-bg-min.jpg`, `about/team-section-bg-min.jpg`, `password-protector.png` root) + 3 unused variants
- [x] Old template names replaced — "Margaret Sterling" → "Richard Dorbar", "Sterling & Associates" → "Dorbar & Associates", "Advocix Template" → "Dorbar Template" across 13 files (blogPosts.ts, about.ts, journeyTimeline.ts, consultation.ts, caseStudyDetails.ts, attorneys.ts, AttorneyQuoteSection.astro, AboutHeroSection.astro, ChangelogHeroSection.astro, about.astro)
- [x] README.md updated — Astro 5 → 6, data file count 18 → 15, stale file refs removed

### Homepage Section CSS Matching (Completed)

- [x] **HomeTestimonialSection** — Swiper slider with pagination (white dots), `.testimonial-gt-liner-block` hover animation (width 0→100%), `rewind: true` for smooth sliding, 5 testimonials for 3 pagination dots, slideInBottom GSAP animations
- [x] **HomeContactSection** — Full CSS rewrite (20+ property fixes), inline heading HTML, GSAP scroll animations (heading + form + info blocks + form liner marquee), SVG icons matched exactly, contact map fallback
- [x] **BlogSection** — Complete rewrite with desktop 2-row layout (Row 1: 2-col grid with left card spanning 2 rows + 2 stacked right cards; Row 2: 3-col `is-3` grid), mobile Swiper slider, category links, GSAP staggered card animations
- [x] **HomeFaqSection** — CSS matched, GSAP slideInBottom animations for heading elements + staggered FAQ items, FaqAccordion SVG updated to match Webflow (18x19), `data-animate` removed in favor of inline GSAP

### About Page Section CSS Matching (Completed)

- [x] **AboutHeroSection** — `#About-Hero-Section`, background image via `--bg-image`, GSAP text slideInBottom + image reveal (overlay height 100%→0%, scale 1.4→1), responsive padding at all breakpoints
- [x] **WhoWeAreSection** — `#Who-We-Are-Section`, changed `<h2>` to `<h1>` to match Webflow (52px/1.1), GSAP slideInBottom for title + text
- [x] **OurPurposeSection** — `#Our-Purpose-Section`, 3-card layout (Mission/Vision/Values), responsive grid (3-col → 2-col → 1-col), GSAP staggered slideInBottom
- [x] **JourneySection** — `#Journey-Section`, timeline with left/right blocks + vertical liner, scroll-linked `scrub: true` animation for `.journey-color-liner` (scaleY grows/shrinks with scroll)
- [x] **LeadershipSection** — `#Leadership-Section`, attorney cards with `flex: none` on image block, Image width=300 height=375, GSAP staggered slideInBottom
- [x] **AwardsSection** — `#Award-Section`, 6 unique SVG icons (layers/star/checkmark/shield/medal/tag), GSAP text elements + staggered cards
- [x] **AboutStatisticsSection** — `#About-Stat-Section`, count-up animation (GSAP counter 0→target with suffix), `power2.out` easing over 2s, scroll-triggered
- [x] **AboutTestimonialsSection** — `#About-Testimonial-Section`, 2-card testimonial layout, flex→column at ≤991px, GSAP title + staggered cards

### Attorney Page Section CSS Matching (Completed)

- [x] **AttorneyHeroSection** — `#Attorney-Hero-Section`, background image via `--bg-image`, `.page-intro.middle { text-align: center }`, GSAP slideInBottom (h1 delay 0.1, p delay 0.3)
- [x] **AttorneyQuoteSection** — `#Attorney-Quote-Section`, `.attorney-qoute-liner` scaleY 0→1 (delay 0.4, duration 0.6), quote text slideInBottom (delay 0.6), attorney name slideInBottom (delay 0.8)
- [x] **AttorneyGridSection** — `#Attorney-Grid-Section`, GSAP staggered cards `delay = ((i % 3) + 1) * 0.2` (200, 400, 600ms per row of 3)
- [x] **FeaturedAttorneySection** — `#Featured-Attorney-Section`, image reveal (a-33 pattern: overlay height 100%→0%, scale 1.4→1), staggered content slideInBottom (100-400ms), `.attorney-details-quote-icon` typography, `showIcon={false}` on button, `.attorney-details-name { font-size: 48px }` at ≥1280px
- [x] **RecognitionSection** — `#Recognition-Section`, 11 new CSS rules (`.recognize-*`), 3-col grid (→2-col→1-col), card hover border-color + icon scale(1.1) (600ms ease), GSAP heading + staggered cards
- [x] **AttorneyStatisticsSection** — `#Attorney-Statistics-Section`, `.statistics-section` + `.statistics-wrapper` (4-col grid), Webflow number-chain HTML structure (`.stat-number-chain.upper-movement`/`.lower-movement`), GSAP wrapper slideInBottom (delay 0.2) + counter animation (yPercent 200/-400→0, 2.5s, power4.inOut)
- [x] **TeamCtaSection** — `#Team-CTA-Section`, `.team-cta-section` + `.team-cta-section-gap` + `.team-cta-content-block` + `.team-cta-text-block` + `.team-cta-button-block`, responsive padding (128px→100px→80px→60px), `showIcon={false}` on button, GSAP slideInBottom

### Services Page Section CSS Matching (In Progress)

- [x] **ServiceHeroSection** — `#Service-Hero-Section`, background image via `--bg-image` (team-section-bg-min.jpg), gradient overlay, centered text + button (no icon), responsive padding, GSAP slideInBottom
- [x] **AreasOfPracticeSection** — `#Areas-Of-Practice-Section`, `.service-heading-block-service-page`, 3-col grid (→2-col→1-col), `.service-item-liner` hover scaleX(0→1), GSAP heading + staggered cards
- [ ] **FeaturedPracticeSection** — CSS matching with Webflow
- [ ] **WhyTrustSection** — CSS matching with Webflow
- [ ] **CaseStudiesSection** — CSS matching with Webflow

### Service Detail Page Section CSS Matching (Completed)

- [x] **ServiceDetailHeroSection** — `showIcon={false}` on ButtonPrimary, matched Webflow layout
- [x] **ServiceDetailStatSection** — `#Service-Stat-Section`, restructured HTML (description inside `.service-stat-heading`, h2 for stat values matching Webflow rich text), inline GSAP slideInBottom, ≥1280px rules (gap 80px, heading-block 537px, content-block 552px, h2 48px, p margin 24px, block padding 32px), ≤479px flex-flow column
- [x] **ServiceDetailServicesSection** — `#Services-Section`, removed extra classes, plain `<p>` inside `.services-heading-text`, ≥1280px (heading p margin-top 16px, card padding 50px 32px), ≤767px card padding 16px, 1-col grid at ≤479px, GSAP heading + staggered cards
- [x] **ServiceDetailProtectSection** — `#Protect-Section`, changed to Webflow's `<strong>...<p>...` pattern (not custom divs), gold left border spans both title AND description via `border-left` + `padding-left` on both `.protect-content strong` and `.protect-content p`, ≥1280px (h2 margin-bottom 48px font-size 48px, strong margin-top 32px), GSAP image reveal + content slideInBottom
- [x] **ServiceDetailWhyChooseSection** — `#Why-Choose-Section`, value as `<h3>`, title as `<h4>` (matching Webflow), ≥1280px (card padding 50px, h3 48px, h4 margins 16px), ≥1440px (card padding 56px), ≤991px padding 8px, ≤767px 2-col grid, ≤479px 1-col grid, GSAP heading + staggered cards
- [x] **ServiceDetailFaqSection** — `#Service-FAQ-Section`, combined GSAP scroll animation + smooth accordion toggle, GSAP height animation `fromTo(height:0 → height:auto, 0.4s, power2.inOut)` for open, `to(height:0)` with `onComplete` display:none for close, removed duplicate CSS rules
- [x] **ServiceDetailCtaSection** — `#Service-CTA-Section`, dedicated component (not CtaBanner), `.service-cta-section`/`.service-cta-wrapper`/`.service-cta-text-block`/`.service-cta-button-block`, single centered button with `showIcon={false}`, GSAP slideInBottom

### Service Detail Page Data (Completed)

- [x] **Corporate Law** — original content (was already populated)
- [x] **Family Law** — original content (was already populated)
- [x] **Real Estate Law** — original content (was already populated)
- [x] **Criminal Defense** — stats (400+/97%/100%), 6 service cards (DUI, Drug, White Collar, Assault, Theft, Expungement), protect (Early Intervention/Trial/Post-Conviction), why choose (20+ Years/Mediation/24-7)
- [x] **Intellectual Property** — stats (500+/92%/100%), 6 service cards (Patent/Trademark/Copyright/Trade Secret/IP Litigation/Licensing), protect (Brand Protection/Patent Portfolio/IP Dispute), why choose (30+ Years/Mediation/24-7)
- [x] **Employment Law** — stats (480+/92%/100%), 6 service cards (Wrongful Termination/Workplace Policies/Contracts/Discrimination/Wage/Mediation), protect (Employee Rights/Employer Defense/Labor Compliance), why choose (24+ Years/Mediation/24-7)
- [x] **Tax Law** — stats (850+/98%/100%), 6 service cards (Planning/Corporate/Personal/Dispute/International/Fraud Defense), protect (Proactive Planning/Audit Representation/Transparent Communication), why choose (no values, title-only cards)
- [x] **Immigration Law** — stats (1,000+/97%/100%), 6 service cards (Visa/Residency/Family/Deportation/Citizenship/Business), protect (Global Mobility/Document Prep/Legal Representation), why choose (no values, title-only cards)
- [x] **Civil Litigation** — stats (700+/96%/100%), 6 service cards (Contract/Commercial/Employment/Property/Debt/Mediation), protect (Court Representation/Dispute Resolution/Client Advocacy), why choose (32+ Litigators/Negotiation/24-7)

### Case Study Detail Page CSS Matching (Completed)

- [x] **CaseStudyHeroSection** — `.case-study-hero-section`, background image via `--bg-image`, `.case-study-hero-overlay` (#0e0e10d9), `.case-study-hero-wrapper` added to match Webflow, subtitle moved inside `.case-study-hero-title-block`, separate `.case-study-hero-summary-block`, info block (4 items: Practice Area/Client Type/Duration/Lead Attorney), responsive (≥1280px max-width 700px, ≥1440px padding-top 250px + max-width 775px, ≤991px padding-top 180px, ≤767px info-block 2-col grid, ≤479px gap 24px), GSAP staggered slideInBottom (subtitle/title/summary/info)
- [x] **CaseStudyDetailSection** — `.challenge-section`, `.challenge-wrapper`/`.challenge-content-block` (flex, gap 40px), `.challenge-text-block` (max-width 670px), `.challenge-image-block` with `.about-liner` reveal, `.challenge-section-text` with h3 + paragraph split, responsive (≥1280px gap 60px, ≤991px flex-column + image order -9999, ≤479px gap 30px), GSAP heading slideInBottom + text slideInBottom + image reveal (scale 1.4→1) + liner scaleY
- [x] **CaseStudyApproachSection** — `.approach-section`, `.approach-wrapper`/`.approach-content-block` (vertical flex with border separators), `.approach-single-content-block` with `.is-1` (no border-top) and `.is-3` (no padding-bottom), `.approach-content-number` (padStart 2 digits), GSAP heading + staggered blocks
- [x] **CaseStudyOutcomesSection** — `.outcome-section`, `.outcome-content-block` (3-col grid, gap 0), `.outcome-single-stat-block` hover bg transition, `.is-2` left/right borders, `.outcome-stat-text h2` (font-size 36px, font-family Times New Roman), responsive (≤767px 1-col grid + `.is-2` border direction change to top/bottom), GSAP heading + content-block slideInBottom
- [x] **CaseStudyTestimonialSection** — `.client-quote-section` (NOT `.case-study-testimonial-*`), `.client-quote-wrapper` (max-width 750px, centered), `.client-quote-text` (font-heading, italic, h5), `.client-qoute-info-block` (typo preserved from Webflow), `.client-name` (primary, sm), `.client-designation` (xsm), GSAP icon fade + quote/name/designation staggered slideInBottom
- [x] **CaseStudyTakeawaysSection** — `.key-takeaways-*` (NOT `.case-study-takeaway*`), `.key-takeaways-content-block` (2-col grid, 16px gap), `.key-takeaway-card-block` (border primary-01, bg-color, flex with 30x30 checkmark SVG), `.key-takeaway-card-text h3` (body-lg), `.key-takeaway-card-text p` (sm, margin-top xxxsm), responsive (≥1280px 4-col grid, ≥1440px card padding 28px, ≤767px flex-column, ≤479px 1-col grid), GSAP heading + staggered cards
- [x] **CaseStudyTeamSection** — Reuses existing `.attorney-section`/`.attorney-wrapper`/`.attorney-card-item-block.v-flex` classes (NOT custom `.case-study-team-*`), `.section-gap-two.bottom`, `.attorney-heading-block` with `.section-title-two`, GSAP heading + staggered cards
- [x] **CaseStudyRelatedSection** — Reuses existing `.case-study-section`/`.case-study-wrapper`/`.case-study-collection-list`/`.case-study-item-block` classes, heading "More Success Stories", `.case-study-section-liner.is-1` and `.is-2` decorative gradient liners, GSAP heading + staggered items
- [x] **Case study data** — `CaseStudyDetail` interface with `challenges?`, `testimonial.company?`, `takeaways` as `{title, description}[]`, `teamHeading`, `teamAttorneys` array. 3 case studies in `caseStudyDetails.ts`

### Blog Post Detail Page CSS Matching (Completed)

- [x] **Blog Details Hero** — `.blog-details-hero-section` with inline `background-image` via `post.heroImage`, `.blog-details-hero-gap` dark overlay (padding 180px, 230px at ≥1440px), `.blog-details-hero-wrapper` (max-width 800px, 1000px at ≥1440px), `.blog-category-text.blog-details` (border outline style), meta info with User/Clock/Book icons (20px)
- [x] **Blog Details Content** — `#Blog-Details-Section`, `.details-hero-text-block` (border-left 2px, position absolute top -90px, static at ≤991px), `.blog-details-text-one` (max-width 736px, rich text with left-border blockquotes), `.blog-details-text-two` (max-width 736px, centered blockquotes with bg, no border)
- [x] **Key Takeaways** — `#Takeaway-Section`, `.takeaway-section`/`.takeaway-wrapper`/`.takeaway-content-block`/`.takeaway-point-block` (border primary-04, bg primary-01), `price-point-icon.svg` (25x25 checkmark)
- [x] **Author Bio** — `#Blog-Author-Section`, `.attorney-wrapper.blog`/`.attorney-card-item-block.blog` (padding 40px, flex row), `.attorney-item-image.blog` (border-radius 100%, 116x116px), social links (LinkedIn/Facebook/Instagram SVGs)
- [x] **Related Posts** — `#Blog-Related-Section`, extracted to `RelatedPostsSection.astro` component, `.bog-section.bottom-gap`, `.section-gap.bottom`, 3-col `is-3 blog-page` grid (→2-col at ≤991px→1-col at ≤767px), GSAP staggered card animations, card hover image zoom
- [x] **Blog CTA form overflow fix** — `min-width: min(500px, 100%)` prevents viewport overflow on small devices
- [x] **Data structure** — `BlogPost` interface extended: `heroImage` (hero bg separate from thumbnail), `detailSummary` (detail intro separate from card summary), `contentTwo` (second rich text block with different blockquote styling)
- [x] **GSAP animations** — Hero (category/title/info staggered), content (hero-text/text-one scroll-triggered), takeaways (heading + staggered points), author (card slideInBottom), related (heading + staggered cards)
- [x] **Responsive** — ≥1440px (hero padding 230px, wrapper 1000px, hero-text top -110px), ≥1280px (figure margin 64px, blockquote padding 50px), ≤991px (hero-text static, wrapper margin-top 0, attorney column), ≤479px (hero-text padding 20px, takeaway column)

### Licenses Page CSS Matching (Completed)

- [x] **LicensesHeroSection** — `.hero-section.info`, background image via `--bg-image` (team-section-bg-min.jpg), gradient overlay `linear-gradient(#0e0e10f2, #0e0e10f2)`, `.hero-wrapper` responsive padding (≤991px 160px, ≤767px 160px/80px), `.hero-content-wrap` (≥1280px max-width 700px, ≤479px max-width 480px), GSAP slideInBottom (subtitle 200ms, title 400ms, summary 600ms)
- [x] **LicensesContentSection** — `#Licenses-Section`, `.licenses-section` (margin-bottom spacer-xxl), `.license-wrapper` (2-col grid, max-width 1170px), `.license-content` (border primary-01, bg-color, padding 30px → 40px at ≥1280px), `.template-info-link-wrapper` (flex column, 10px gap), `.link-button-block` hover liner scaleX(0→1), responsive (≥1280px padding 40px, ≤767px 1-col grid + link-button-text line-height 20px), GSAP slideInBottom with IX2 delays (Images: 600ms, Icons: 800ms, Font: 200ms)

### Utility Pages CSS Matching (Completed)

- [x] **404 page** — `#Utility-404-Section`, uses `BaseLayout` + `Navbar` (no footer), `.utility-page-section` (100vh centered flex), `._404-text` (250px→200px→160px→136px), `._404-highlight-text` (white), GSAP slideInBottom, `showIcon={false}` on button, responsive `.utility-page-content` (500px→460px→280px)
- [x] **401 page** — `#Utility-401-Section`, uses `BaseLayout` only (no header/footer), `.utility-page-wrap` (100vw/100vh centered), password-protector.png image, `.form-button` scoped override (`background-image: none`, `color: white`, `text-transform: none`), GSAP staggered slideInBottom, responsive width cascade fixed

### Other Fixes (Completed)

- [x] **Primary button hover glow** — GSAP-based (not CSS transitions) in BaseLayout.astro, `gsap.killTweensOf()` prevents conflicts, scale 0.3→10 with opacity 0→1
- [x] **Mobile nav gap fix** — `.nav-menu-block` at ≤991px: reset `grid-column-gap: 0; grid-row-gap: 0` (was inheriting 100px from desktop)
- [x] **Footer contact info typography** — Added `.contact-info-text-two.footer` (color: white-06, font-size: xsm), `.footer:hover` (color: white), `.footer.text` variant, `.contact-info-icon-two.footer` (transparent bg, margin-top: 5px). Changed address `<p>` to `<div>` to match Webflow.
- [x] **Footer 401/404 links** — Added `404 Page` and `401 Page` links to Company column in Footer.astro
- [x] **CSS cascade fix** — Removed duplicate `.utility-page-content` and `.utility-page-title` rules that appeared after responsive media queries, causing responsive widths to be overridden back to desktop values
- [x] **Webflow variable fix** — `var(--gap--spacer-lg)` → `var(--spacer-lg)` in blog-details-wrapper ≥1440px rule
- [x] **`.section-gap` CSS added** — `padding-top/bottom: var(--section-gap)` + `.section-gap.bottom { padding-top: 0 }` (was missing, only `.section-gap-two` existed)
- [x] **Blog card image hover** — Changed from `.blog-item-image-block:hover` to `.blog-item-card-block:hover` so hovering anywhere on card triggers image zoom
- [x] **Service detail CTA component** — Created `ServiceDetailCtaSection.astro` replacing generic `CtaBanner` on service detail pages. Webflow uses `.service-cta-section` (simple centered layout, single button) not `.cta-section-two` (two buttons + hover spotlight)
- [x] **Service detail protect section border** — Gold left border spans both `<strong>` title AND `<p>` description via `border-left` + `padding-left` on both elements, `margin-bottom: 0` on strong + `padding-top: 8px` on p for continuous border
- [x] **Service detail FAQ duplicate CSS** — Removed first incomplete set of `.service-faq-*` rules, kept second complete set with `.is-open` rotation
- [x] **Service detail data population** — All 9 services (Corporate Law, Family Law, Real Estate Law, Criminal Defense, Intellectual Property, Employment Law, Tax Law, Immigration Law, Civil Litigation) fully populated with unique content
- [x] **Footer social icons stroke fix** — Changed LinkedIn/Facebook/Instagram SVGs from `fill="currentColor"` (solid) to `stroke="currentColor"` (outlined) matching Webflow. HTML structure changed to `<div class="contact-social-icon"><svg>`.
- [x] **ContactFormSection social block** — Added missing `contact-social-info-block` with 3 social icons (LinkedIn/Facebook/Instagram) after contact info items, matching Webflow contact.html
- [x] **CtaBanner button icon** — Added `showIcon={false}` to "Book Free Consultation" ButtonPrimary (no phone icon)
- [x] **AboutHeroSection button icon** — Added `showIcon={false}` to ButtonPrimary
- [x] **HomeContactSection index-only padding** — `#Contact-Us-Two .section-gap-two.top { padding-top: 0 }` scoped rule for homepage only
- [x] **Case study GSAP imports** — All 8 case study section `<script>` blocks were missing `import { gsap }` and `import { ScrollTrigger }`. Astro bundles each script as separate ES module, so GSAP from BaseLayout is not accessible.
- [x] **CaseStudyHeroSection subtitle** — Changed from dynamic `{practiceArea}` to hardcoded "Case Study" matching Webflow HTML
- [x] **CaseStudyDetailSection animation types** — Image animation was `scale: 1.4→1` but Webflow uses `slideInBottom y: 100→0`. Fixed all 4 element animations to match IX2 delays.
- [x] **Case study CtaBanner content** — Updated props to match Webflow: title="Need Strategic Legal Representation?", summary="Contact our team today..."
- [x] **Webflow references cleanup** — Removed all "webflow" text from code comments in dorbar-astro project
- [x] **Licenses page component extraction** — Extracted inline sections from licenses.astro into LicensesHeroSection.astro + LicensesContentSection.astro
- [x] **License wrapper breakpoint fix** — `.license-wrapper { grid-template-columns: 1fr }` was at ≤991px (wrong), moved to ≤767px (matching Webflow)

### Remaining / TODO

#### Homepage Section CSS Matching (Not Yet Done)
- [ ] HomeHeroSection — CSS matching with Webflow
- [ ] HomeAboutSection — CSS matching with Webflow
- [ ] HomeServicesSection — CSS matching with Webflow
- [ ] TrackRecordSection — CSS matching with Webflow
- [ ] CtaBanner — CSS matching with Webflow

#### Inner Page Section CSS Matching
- [ ] Services page: FeaturedPracticeSection, WhyTrustSection, CaseStudiesSection
- [ ] All Consultation page sections
- [ ] All Contact page sections
- [ ] Blog listing page sections
- [ ] Blog category page sections
- [ ] Style guide page sections

#### Footer & Other
- [ ] Footer CSS matching with Webflow (contact-info-block typography + social icons done, rest pending)

#### Interactive Components
- [ ] Contact form validation & submission handling
- [ ] Newsletter form handling

#### Optimization & Polish
- [ ] SEO: JSON-LD schema, OG tags, canonical URLs (sitemap already added via @astrojs/sitemap)
- [ ] Accessibility audit (focus styles, ARIA, color contrast)
- [ ] Performance optimization (lazy loading, async scripts)
- [ ] README.md preview image path — `public/images/hero/home-hero-image-min.jpg` no longer exists (images moved to src/assets/ and converted to WebP)

---

## Architecture

### Layout Pattern

```
BaseLayout.astro        — Pure HTML shell: <!DOCTYPE>, <head>, fonts, GSAP, global.css
  └── PageLayout.astro  — Wraps BaseLayout + Navbar + Footer + skip-link + page-wrapper
        └── [page].astro — Each page uses PageLayout
  └── 404.astro          — Uses BaseLayout + Navbar only (no footer)
  └── 401.astro          — Uses BaseLayout only (no header/footer)
```

### Key Technical Details

- **GSAP Animation System (dual approach):**
  - **Generic:** `[data-animate]` attributes + CSS `opacity: 0` base state. BaseLayout runs `gsap.to()` with `opacity: 1` targets on scroll. Uses `fade-up` (y:30→0), `fade-in`, `scale-in`.
  - **Section-specific (Webflow-matched):** Inline `<script>` in each section component with explicit GSAP. Uses `slideInBottom` pattern: `y:100→0, opacity:0→1, duration:1, ease:'power3.out'`. Section scoped via `#Section-ID .class` selectors. Matched sections use this approach (Testimonial, Contact, Blog, FAQ).
- **Swiper.js:** Used for testimonial slider (`rewind: true`, Pagination module) and blog mobile slider. Testimonial: 3 slides visible at 1024px+, pagination with white dots. Blog: single slide mobile only.
- **FAQ Accordion:** Click-driven open/close with GSAP height animation (0→auto). Icon rotates 45deg on open. Uses `.is-open` class on parent.
- **Mobile Nav:** JS in Navbar.astro creates overlay dynamically, toggles `.is-open` class on `.nav-menu-block`, uses `transform: translateX(100%)` slide-in.
- **Dynamic Routes:** `getStaticPaths()` for services/[slug], blog-post/[slug], blog-categories/[slug]
- **All styles in global.css:** No scoped `<style>` blocks in components (header CSS was consolidated from scoped to global).

---

## File & Folder Structure (Actual)

```
dorbar-astro/
├── public/
│   ├── images/                     — Static images (SVG icons only, served as-is)
│   │   └── icons/                  — SVG icons (17 files)
│   ├── favicon.png
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── images/                 — Optimized images (Astro asset pipeline)
│   │       ├── about/              — About page images
│   │       ├── attorneys/          — Attorney photos (8 files)
│   │       ├── backgrounds/        — Section backgrounds (3 files)
│   │       ├── blog/               — Blog images (thumbnails + hero + detail)
│   │       ├── case-studies/       — Case study images
│   │       ├── hero/               — Hero images (3 files)
│   │       ├── icons/              — Icon images (SVG/WebP)
│   │       ├── testimonials/       — Avatar images (3 files)
│   │       ├── track-record/       — Case images (6 files)
│   │       └── vector.webp         — Logo
│   ├── layouts/
│   │   ├── BaseLayout.astro        — HTML shell, <head>, fonts, GSAP, global.css
│   │   └── PageLayout.astro        — BaseLayout + Navbar + Footer wrapper
│   ├── components/
│   │   ├── Navbar.astro            — Site navigation (desktop + mobile)
│   │   ├── Footer.astro            — Site footer with 4 columns
│   │   ├── ui/
│   │   │   ├── ButtonPrimary.astro
│   │   │   ├── ButtonSecondary.astro
│   │   │   ├── ButtonLink.astro
│   │   │   └── SectionHeading.astro
│   │   ├── cards/
│   │   │   ├── ServiceCard.astro
│   │   │   ├── TestimonialCard.astro
│   │   │   └── TrackRecordCard.astro
│   │   ├── icons/
│   │   │   ├── ArrowIcon.astro
│   │   │   └── PhoneIcon.astro
│   │   └── sections/               — Section components
│   │       ├── HomeHeroSection.astro
│   │       ├── HomeAboutSection.astro
│   │       ├── HomeServicesSection.astro
│   │       ├── HomeContactSection.astro
│   │       ├── HomeFaqSection.astro
│   │       ├── HomeTestimonialSection.astro
│   │       ├── BlogSection.astro
│   │       ├── TrackRecordSection.astro
│   │       ├── CtaBanner.astro
│   │       ├── FaqAccordion.astro
│   │       ├── RelatedPostsSection.astro
│   │       ├── ServiceDetailCtaSection.astro
│   │       ├── CaseStudyHeroSection.astro
│   │       ├── CaseStudyDetailSection.astro
│   │       ├── CaseStudyApproachSection.astro
│   │       ├── CaseStudyOutcomesSection.astro
│   │       ├── CaseStudyTestimonialSection.astro
│   │       ├── CaseStudyTakeawaysSection.astro
│   │       ├── CaseStudyTeamSection.astro
│   │       ├── CaseStudyRelatedSection.astro
│   │       ├── LicensesHeroSection.astro
│   │       ├── LicensesContentSection.astro
│   │       └── ... (more inner page sections)
│   ├── data/
│   │   ├── siteConfig.ts           — Site name, URLs, contact info
│   │   ├── home.ts                 — Homepage section data (5 testimonials)
│   │   ├── about.ts                — About page data
│   │   ├── attorneys.ts            — 6 attorney profiles
│   │   ├── attorneys-page.ts       — Attorneys page specific data
│   │   ├── services.ts             — 6 practice areas (listing)
│   │   ├── serviceDetails.ts       — 9 service detail pages (full content)
│   │   ├── services-page.ts        — Services listing page data
│   │   ├── blogPosts.ts            — 8 blog posts + 4 categories (heroImage, detailSummary, contentTwo fields)
│   │   ├── testimonials.ts         — Client testimonials
│   │   ├── pricingPlans.ts         — Consultation pricing
│   │   ├── officeLocations.ts      — 3 office addresses
│   │   ├── awards.ts               — Awards/recognitions
│   │   ├── journeyTimeline.ts      — About page timeline
│   │   ├── consultation.ts         — Consultation page data
│   │   ├── contact.ts              — Contact page data
│   │   └── caseStudyDetails.ts     — 3 case study detail pages (full content)
│   ├── pages/
│   │   ├── index.astro             — Homepage (10 sections)
│   │   ├── about.astro
│   │   ├── attorneys.astro
│   │   ├── services.astro
│   │   ├── services/[slug].astro   — 9 dynamic service detail pages
│   │   ├── case-study/[slug].astro — 3 dynamic case study detail pages
│   │   ├── blog.astro
│   │   ├── blog-post/[slug].astro  — 8 dynamic blog post pages
│   │   ├── blog-categories/[slug].astro — 4 dynamic category pages
│   │   ├── consultation.astro
│   │   ├── contact.astro
│   │   ├── 404.astro
│   │   ├── 401.astro               — Uses BaseLayout directly (no nav/footer)
│   │   ├── licenses.astro
│   │   └── style-guide.astro
│   ├── styles/
│   │   └── global.css              — All styles (6990+ lines)
│   └── utils/
│       └── resolveImage.ts         — Image path resolver (/images/* → /src/assets/images/*)
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## Design Tokens (CSS Custom Properties)

```css
:root {
  /* Colors */
  --color-dark: #0e0e10;
  --color-bg: #191719;
  --color-primary: #c5a46e;
  --color-primary-04: #c5a46e66;
  --color-primary-02: #c5a46e33;
  --color-primary-01: #c5a46e1a;
  --color-white: #ffffff;
  --color-white-06: #ffffff99;
  --color-gray: #8c8c8e;
  --color-light-gray: #b9b9bd;
  --color-stroke: #e5e7eb;

  /* Font Families */
  --font-body: 'Inter', sans-serif;
  --font-heading: 'Playfair Display', sans-serif;

  /* Font Sizes */
  --fs-h1: 52px;  --fs-h2: 48px;  --fs-h3: 32px;  --fs-h4: 28px;
  --fs-h5: 24px;  --fs-body-lg: 20px;  --fs-body-md: 18px;
  --fs-body-sm: 16px;  --fs-body-xsm: 14px;  --fs-button: 14px;

  /* Font Weights */
  --fw-bold: 700;  --fw-semibold: 600;  --fw-medium: 500;  --fw-regular: 400;

  /* Transitions */
  --transition-fast: 0.3s ease;
  --transition-normal: 0.4s ease;
}
```

### Webflow → Astro Variable Mapping

| Webflow Variable | Astro Variable |
|---|---|
| `--color--primary-color` | `--color-primary` |
| `--color--bg-color` | `--color-bg` |
| `--color--white-color` | `--color-white` |
| `--color--white-color-0-6` | `--color-white-06` |
| `--color--primary-color-0-4` | `--color-primary-04` |
| `--color--primary-color-0-1` | `--color-primary-01` |
| `--gap--spacer-*` | `--spacer-*` |
| `--font-size--heading-*` | `--fs-h*` |
| `--font-size--body-text-*` | `--fs-body-*` |
| `--font-size--button-text` | `--fs-button` |
| `--font-size--subtitle-text` | `--fs-subtitle` |
| `--font-family--heading-font-family` | `--font-heading` |
| `--font-family--body-font-family` | `--font-body` |
| `--font-weight--bold-700` | `--fw-bold` |
| `--font-weight--normal-400` | `--fw-regular` |

### Responsive Breakpoints

| Breakpoint | Type | Usage |
|---|---|---|
| ≥1280px | min-width | Large desktop: bigger fonts, wider spacing |
| ≥1440px | min-width | Wide desktop: max font sizes |
| ≤991px | max-width | Tablet: mobile nav, stacked layouts |
| ≤767px | max-width | Mobile landscape: smaller fonts |
| ≤479px | max-width | Mobile portrait: minimum sizes |

---

## Gradients Reference

| Name | Value | Used On |
|------|-------|---------|
| Hero overlay | `linear-gradient(#0e0e10f2, #0e0e10f2)` | Hero sections |
| Button gradient | `linear-gradient(135deg, var(--color-primary), #e8d5b7)` | Primary button |
| Card glass | `linear-gradient(135deg, #19171966, #19171933)` | Service cards |
| Corner accent | `linear-gradient(135deg, #c5a46e4d, transparent 18%)` | Card corner |
| Liner fade | `linear-gradient(90deg, transparent, var(--color-primary))` | Subtitle liners |
| Stat block | `linear-gradient(90deg, #c5a46e1a, #1e1c21)` | Track record |
| CTA hover | `linear-gradient(70deg, transparent, #c5a46e33 51%, transparent)` | CTA spotlight |

---

## Animation & Interaction Plan

### GSAP Scroll Animations

**Section-specific (Webflow-matched):** Inline `<script>` per section with explicit GSAP:
- `slideInBottom`: `y:100→0, opacity:0→1, duration:1, ease:'power3.out'`
- Scoped via `#Section-ID .class` selectors
- Sections using this: `#Testimonial-Section`, `#Contact-Us-Two`, `#Blog-Section`, `#FAQ-Section`, `#About-Hero-Section`, `#Who-We-Are-Section`, `#Our-Purpose-Section`, `#Journey-Section`, `#Leadership-Section`, `#Award-Section`, `#About-Stat-Section`, `#About-Testimonial-Section`, `#Service-Hero-Section`, `#Areas-Of-Practice-Section`, `#Attorney-Hero-Section`, `#Attorney-Quote-Section`, `#Attorney-Grid-Section`, `#Featured-Attorney-Section`, `#Recognition-Section`, `#Attorney-Statistics-Section`, `#Team-CTA-Section`, `#Utility-404-Section`, `#Utility-401-Section`, `#Blog-Details-Section`, `#Takeaway-Section`, `#Blog-Author-Section`, `#Blog-Related-Section`, `#Service-Stat-Section`, `#Services-Section`, `#Protect-Section`, `#Why-Choose-Section`, `#Service-FAQ-Section`, `#Service-CTA-Section`, `#Licenses-Section`, `.hero-section.info` (LicensesHero), `.case-study-hero-section`, `.challenge-section`, `.approach-section`, `.outcome-section`, `.client-quote-section`, `.key-takeaways-section`, `.attorney-section` (CaseStudyTeam), `.case-study-section` (CaseStudyRelated)

**Generic fallback:** `data-animate` attribute + CSS `[data-animate] { opacity: 0; }`:
- `fade-up`: opacity 0→1, y 30→0
- `fade-in`: opacity 0→1
- `scale-in`: opacity 0→1, scale 0.9→1
- BaseLayout runs `gsap.to()` with explicit `opacity: 1` target, NOT `gsap.from()`.

### Interactive Components

| Component | Status | Implementation |
|-----------|--------|---------------|
| Mobile navbar | Done | JS toggle + CSS transform slide-in |
| FAQ accordion | Done | GSAP smooth height animation (fromTo 0→auto, 0.4s, power2.inOut), icon rotation 45deg, `.is-open` class |
| Testimonial slider | Done | Swiper.js with Pagination, `rewind: true`, 3 visible at 1024px+ |
| Blog mobile slider | Done | Swiper.js (hidden desktop, shown at ≤991px) |
| Stat counter | Done | GSAP count-up animation (0→target, power2.out, 2s, scroll-triggered) |
| Primary button glow | Done | GSAP in BaseLayout: opacity 0→1, scale 0.3→10, `gsap.killTweensOf()` prevents conflicts |
| Service card liner | Done | CSS hover: `.service-item-liner` scaleX(0→1) on `.service-item-block:hover` |
| Contact form | TODO | HTML5 validation + JS handler |
| Newsletter form | TODO | JS handler |

### Hover Effects (CSS)

| Element | Effect |
|---------|--------|
| Nav link | Color → primary, transition 0.4s |
| Nav CTA button | Lift up -3px + glow shadow |
| Service card | Border glow, corner gradient, icon scale |
| Primary button | Glow circle follows cursor |
| Link button | Underline slides in from left |
| Blog/Attorney card | Border glow + shadow + image zoom on card hover |
| Testimonial liner | Width 0→100% on card hover |

---

## Section CSS Matching Progress

### Methodology
1. Extract Webflow HTML structure (from `dorbar-webflow/index.html`)
2. Extract all CSS properties (from `dorbar-webflow/css/dorbar.webflow.css`)
3. Extract IX2 animation data (from `dorbar-webflow/js/webflow.js`)
4. Compare with current Astro CSS in `global.css`
5. Fix property-by-property mismatches
6. Replace `data-animate` with inline GSAP matching IX2 triggers/delays
7. Verify responsive at all breakpoints
8. Build and verify (36 pages, 0 errors)

### Homepage Sections

| # | Section | Component | ID | Status |
|---|---------|-----------|-----|--------|
| 1 | Hero | HomeHeroSection.astro | — | Not started |
| 2 | About | HomeAboutSection.astro | — | Not started |
| 3 | Services | HomeServicesSection.astro | — | Not started |
| 4 | Testimonials | HomeTestimonialSection.astro | `#Testimonial-Section` | Done |
| 5 | Track Record | TrackRecordSection.astro | — | Not started |
| 6 | Contact | HomeContactSection.astro | `#Contact-Us-Two` | Done |
| 7 | FAQ | HomeFaqSection.astro | `#FAQ-Section` | Done |
| 8 | Blog | BlogSection.astro | `#Blog-Section` | Done |
| 9 | CTA Banner | CtaBanner.astro | — | Not started |

### About Page Sections

| # | Section | Component | ID | Status |
|---|---------|-----------|-----|--------|
| 1 | Hero | AboutHeroSection.astro | `#About-Hero-Section` | Done |
| 2 | Who We Are | WhoWeAreSection.astro | `#Who-We-Are-Section` | Done |
| 3 | Our Purpose | OurPurposeSection.astro | `#Our-Purpose-Section` | Done |
| 4 | Journey | JourneySection.astro | `#Journey-Section` | Done |
| 5 | Leadership | LeadershipSection.astro | `#Leadership-Section` | Done |
| 6 | Awards | AwardsSection.astro | `#Award-Section` | Done |
| 7 | Statistics | AboutStatisticsSection.astro | `#About-Stat-Section` | Done |
| 8 | Testimonials | AboutTestimonialsSection.astro | `#About-Testimonial-Section` | Done |
| 9 | CTA Banner | CtaBanner.astro | — | Not started |

### Attorney Page Sections

| # | Section | Component | ID | Status |
|---|---------|-----------|-----|--------|
| 1 | Hero | AttorneyHeroSection.astro | `#Attorney-Hero-Section` | Done |
| 2 | Quote | AttorneyQuoteSection.astro | `#Attorney-Quote-Section` | Done |
| 3 | Grid | AttorneyGridSection.astro | `#Attorney-Grid-Section` | Done |
| 4 | Featured Attorney | FeaturedAttorneySection.astro | `#Featured-Attorney-Section` | Done |
| 5 | Recognition | RecognitionSection.astro | `#Recognition-Section` | Done |
| 6 | Statistics | AttorneyStatisticsSection.astro | `#Attorney-Statistics-Section` | Done |
| 7 | Team CTA | TeamCtaSection.astro | `#Team-CTA-Section` | Done |

### Services Page Sections

| # | Section | Component | ID | Status |
|---|---------|-----------|-----|--------|
| 1 | Hero | ServiceHeroSection.astro | `#Service-Hero-Section` | Done |
| 2 | Areas of Practice | AreasOfPracticeSection.astro | `#Areas-Of-Practice-Section` | Done |
| 3 | Featured Practice | FeaturedPracticeSection.astro | — | Not started |
| 4 | Why Trust | WhyTrustSection.astro | — | Not started |
| 5 | Case Studies | CaseStudiesSection.astro | — | Not started |
| 6 | CTA Banner | CtaBanner.astro | — | Not started |

### Service Detail Page Sections

| # | Section | Component | ID | Status |
|---|---------|-----------|-----|--------|
| 1 | Hero | ServiceDetailHeroSection.astro | — | Done |
| 2 | Stats | ServiceDetailStatSection.astro | `#Service-Stat-Section` | Done |
| 3 | Services | ServiceDetailServicesSection.astro | `#Services-Section` | Done |
| 4 | Protect | ServiceDetailProtectSection.astro | `#Protect-Section` | Done |
| 5 | Why Choose | ServiceDetailWhyChooseSection.astro | `#Why-Choose-Section` | Done |
| 6 | FAQ | ServiceDetailFaqSection.astro | `#Service-FAQ-Section` | Done |
| 7 | CTA | ServiceDetailCtaSection.astro | `#Service-CTA-Section` | Done |

### Case Study Detail Page Sections

| # | Section | Component | ID | Status |
|---|---------|-----------|-----|--------|
| 1 | Hero | CaseStudyHeroSection.astro | — | Done |
| 2 | Detail | CaseStudyDetailSection.astro | — | Done |
| 3 | Approach | CaseStudyApproachSection.astro | — | Done |
| 4 | Outcomes | CaseStudyOutcomesSection.astro | — | Done |
| 5 | Testimonial | CaseStudyTestimonialSection.astro | — | Done |
| 6 | Takeaways | CaseStudyTakeawaysSection.astro | — | Done |
| 7 | Team | CaseStudyTeamSection.astro | — | Done |
| 8 | Related | CaseStudyRelatedSection.astro | — | Done |
| 9 | CTA | CtaBanner.astro | — | Not started |

### Licenses Page Sections

| # | Section | Component | ID | Status |
|---|---------|-----------|-----|--------|
| 1 | Hero | LicensesHeroSection.astro | `.hero-section.info` | Done |
| 2 | Content | LicensesContentSection.astro | `#Licenses-Section` | Done |

### Utility Pages

| # | Page | File | ID | Status |
|---|------|------|-----|--------|
| 1 | 404 | 404.astro | `#Utility-404-Section` | Done |
| 2 | 401 | 401.astro | `#Utility-401-Section` | Done |

---

## Header CSS Matching (Completed)

All header CSS properties matched property-by-property with Webflow source. Key fixes applied:

| Property | Before | After (Webflow match) |
|---|---|---|
| `.header` z-index | 100 | 999 |
| `.navbar` border | missing | 1px solid primary-01 |
| `.navbar` backdrop-filter | missing | blur(20px) |
| `.nav-menu-block` gap | 270px | 100px (270px at ≥1280px) |
| `.nav-link-block` gap | 10px | 32px |
| `.nav-link` color | white-06 | white |
| `.nav-link` font-weight | regular | medium |
| `.nav-button` padding | 10px 24px | 10px 16px |
| `.nav-button:hover` transform | missing | translate(0, -3px) |
| `.nav-button-block` display | none (broken!) | flex |
| Menu button + icon | scoped styles | moved to global.css |

Responsive: 991px (mobile slide-in), 767px (min-width 400px), 479px (min-width 250px, padding 16px)

---

## Known Typos from Webflow (preserved in CSS to match)

- `secondaey-button-two` → kept as-is (matches Webflow CSS)
- `bog-section` → kept as-is (used as class name in BlogSection)
- `testimoial-left-overlay` → kept as-is (matches Webflow CSS)
- `utiliity-image-block` → kept as-is
- `style-gulde-link-wrapper` → kept as-is
- `attorney-details-designetion` → kept as-is
- `attorney-qoute-section` → kept as-is
- `client-qoute-info-block` → kept as-is (case study testimonial section)
- "Get Direntions" → "Get Directions" (text content fix needed)

---

## Execution Rules

1. **One section at a time** — complete layout, styling, responsive, animations before moving on
2. **Reuse CSS variables** — never introduce new color/spacing/font values
3. **Extract components** — if a pattern appears twice, make it a component
4. **Test responsive** — 479px, 767px, 991px, 1280px, 1440px
5. **No Webflow artifacts** — zero `w-*` classes, zero `data-w-*` attributes
6. **Clean HTML** — semantic elements, minimal nesting
7. **All styles in global.css** — no scoped `<style>` blocks for layout CSS
8. **CSS matching workflow** — read Webflow CSS → compare with Astro CSS → fix property-by-property
9. **GSAP pattern** — use inline `<script>` with `#Section-ID` scoping, `slideInBottom` (y:100, opacity:0 → y:0, opacity:1), `power3.out` easing, `once: true` on ScrollTrigger
10. **Webflow typo classes** — keep typo class names (e.g., `bog-section`) to match existing CSS
