
## Academic Planner — Marketing Site Plan

A high-conversion, single-page marketing site for school administrators, built in the Binance-inspired fintech aesthetic (yellow #F0B90B as accent only, alternating light/dark sections, clean data-driven cards).

### Design system
- **Colors**: Primary `#F0B90B`, dark surface `#222126`, ink `#1E2026`, muted `#848E9C`, card border `#E6E8EA`, white background.
- **Type**: Inter (clean, fintech). Tight tracking on headlines, generous line-height on body.
- **Components**: Pill buttons (50px radius), 12px cards with subtle 1px border + faint shadow, 8px spacing scale.
- **Motion**: Subtle fade/slide-in on scroll, gentle hover lifts on cards. No bounce, no playful effects.

### Page sections (top → bottom)

1. **Sticky Nav** — Logo "Academic Planner", links (Features, How it works, Pricing-anchor, Contact), yellow "Book a Demo" pill CTA.

2. **Hero (light)** — H1 "Run Your School Like a High-Performance System", subhead, two CTAs (yellow primary "Book a Demo", ghost "See Platform"), right-side hero visual using **Class_Overview.png** in a tilted browser-frame mockup with soft shadow.

3. **Trust / Data strip (dark band)** — 4 large stat tiles: 10 Classes Managed · 18 Sections Tracked · 32.8 Avg Students · 0 Missed Deadlines (Target). Numbers in yellow, labels in muted gray.

4. **Problem section (light)** — 4 pain-point cards in a grid with small monochrome icons: no visibility, teachers behind unnoticed, manual Excel tracking, no accountability.

5. **Features (light, alternating image left/right)** — 7 feature blocks, each with screenshot in a browser frame, short eyebrow label, headline, body copy, and a thin yellow underline accent:
   - Class Overview → `Class_Overview.png`
   - Academic Calendar → `Acedemic_Calendar.png`
   - Alerts System → `Alerts.png`
   - Lesson Tracking → `Lesson_Tracking.png`
   - Completion History → `Completion_History.png`
   - Section Performance → `Section_Performance.png`
   - Timetable Generator → `Time_Table.png`

6. **How It Works (light)** — 4 numbered steps in a horizontal row with connecting line: Setup → Plan → Track → Get insights. Numbers in yellow circles.

7. **Dark pillar section (#222126)** — H2 "Academic Intelligence for Modern Schools", 3 dark cards with yellow icons: Visibility, Accountability, Automation.

8. **Value Proposition (light)** — 4 quick-win bullets in a clean 2×2 grid: reduce delays, save hours, improve accountability, data-driven decisions. Each with a small yellow check.

9. **Final CTA (dark band with yellow accent line)** — "Start Running Your School Like a System" + yellow "Book a Demo" pill button.

10. **Footer (dark)** — Logo, short tagline, link columns (Product, Company, Resources, Legal), copyright.

### Implementation notes
- Update `src/index.css` design tokens to the Binance-inspired palette (HSL).
- Add Inter via Google Fonts in `index.html`.
- Copy the 7 uploaded screenshots into `src/assets/` and import as ES6 modules.
- Build modular section components under `src/components/landing/` (Nav, Hero, StatStrip, Problems, FeatureRow, HowItWorks, Pillars, ValueProps, FinalCTA, Footer).
- Replace `src/pages/Index.tsx` to compose these sections.
- Use `IntersectionObserver` (or a tiny custom hook) for scroll fade-ins — no heavy animation library.
- Fully responsive: feature rows stack on mobile, stat strip becomes 2×2, nav collapses to a sheet menu.
