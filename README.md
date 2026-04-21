# Gaming Arena — Premium Gaming UI Concept

> A high-fidelity, dark-theme gaming platform landing page built with Next.js, GSAP, and Tailwind CSS. This is a **UI design prototype** — all interactions are visual only.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Animations | GSAP 3 + ScrollTrigger |
| Styling | Tailwind CSS v4 + Inline Styles |
| Icons | Lucide React + React Icons |
| Font | Geist Sans / Geist Mono |
| Language | JavaScript (JSX) |

---

## Sections

- **Navbar** — Fixed HUD-style nav with glassmorphism on scroll, animated mobile overlay
- **Hero** — Auto-cycling character showcase with GSAP flash/slide transitions
- **Champions** — Interactive 3-panel selector with glass cylinder, warp-in animation, thumbnail carousel
- **Weapons** — Arsenal showcase cards with permanent glow effects and floating character art
- **Battles** — Live combat feed section with stats shards and battle mode cards
- **Store** — Tier pricing cards with clip-path polygons and hover glow
- **Contact** — Encrypted transmission form with focus glow effects
- **Footer** — Developer credit, nav links, back-to-top

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/shubh791/gaming-arena.git
cd gaming-arena

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
gaming-arena/
├── app/
│   ├── layout.js            # Root layout with fonts and metadata
│   ├── page.js              # Page entry — renders all sections
│   ├── globals.css          # Tailwind v4 + design tokens
│   └── icon.svg             # Favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Champions.jsx
│   │   ├── Weapons.jsx
│   │   ├── Battles.jsx
│   │   ├── Store.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── UIOnlyToast.jsx  # Modal shown on non-functional button clicks
│   └── lib/
│       ├── gsap.js           # GSAP + ScrollTrigger setup
│       └── uiOnly.js         # CustomEvent dispatcher for UI-only interactions
└── public/
    └── hero/                 # Character images
```

---

## Design Notes

- All colors, spacing, and clip-paths are applied via inline `style` props for render-critical reliability
- GSAP animations use `clearProps: "all"` after entrance animations to prevent stale opacity/transform values
- `UIOnlyToast` listens for a global `ui-only-click` CustomEvent — any component can trigger the modal by calling `uiOnly()` without prop-drilling
- The project uses `"use client"` on all interactive components; the root layout stays as a Server Component

---

## Author

**Shubham Panghal**
Frontend Engineer & UI Designer

- GitHub: [github.com/shubh791](https://github.com/shubh791)
- LinkedIn: [linkedin.com/in/shubham-panghal](https://www.linkedin.com/in/shubham-panghal/)
- Email: shubhampanghal.work@gmail.com

---

## License

MIT — free to use for inspiration or learning. If you want a custom version built for your brand, reach out.
