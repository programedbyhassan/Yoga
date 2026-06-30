# Stillpoint — Yoga & Breathwork Studio

A clean, responsive landing page for a yoga studio, built with plain HTML, CSS, and JavaScript — no frameworks, no build step. Just clone and open.

**Live preview:** [programedbyhassan.github.io/Yoga](https://programedbyhassan.github.io/Yoga) *(enable GitHub Pages to activate this link — see below)*

![Stillpoint preview](preview.png)

## Features

- Fully responsive layout, from desktop down to mobile
- Signature animated "breathing circle" hero element with cycling inhale / hold / exhale states
- Scroll-triggered reveal animations using `IntersectionObserver`
- Infinite-scroll marquee strip for class styles
- Sections for offerings, studio story, stats, testimonials, recognitions table, and a journal/blog grid
- Respects `prefers-reduced-motion` for accessibility
- Real stock photography sourced from [Pexels](https://www.pexels.com)

## Tech stack

- **HTML5** — semantic markup, single page
- **CSS3** — custom properties (CSS variables), CSS Grid & Flexbox, no preprocessor
- **Vanilla JavaScript** — no dependencies, no frameworks
- **Fonts** — [Fraunces](https://fonts.google.com/specimen/Fraunces) (display) and [Inter](https://fonts.google.com/specimen/Inter) (body), loaded via Google Fonts

## Project structure

```
Yoga/
├── index.html      # Page markup
├── styles.css       # All styling
├── script.js        # Breathing animation + scroll reveal logic
└── README.md
```

## Getting started

No installation or build tools required.

```bash
git clone https://github.com/programedbyhassan/Yoga.git
cd Yoga
```

Then just open `index.html` in your browser, or serve it locally:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Visit `http://localhost:8000`.

## Deploying with GitHub Pages

1. Go to **Settings → Pages** in this repository.
2. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
3. Select the `main` branch and `/ (root)` folder, then **Save**.
4. Your site will be live at `https://programedbyhassan.github.io/Yoga/` within a minute or two.

## Customizing

- **Colors & type** — all defined as CSS custom properties at the top of `styles.css` (`:root`), so swapping the palette or fonts only requires editing a handful of variables.
- **Copy** — all text lives directly in `index.html`; no CMS or data file.
- **Images** — replace the `src` URLs in `index.html` (or the background-image in `styles.css`) with your own; current images are linked directly from Pexels.

## License

Free to use for personal or commercial projects. Attribution appreciated but not required.
