# Favour Chinenye Agbo — Portfolio Website

A clean, responsive, one-page portfolio for an Agricultural Economist and Sustainability Professional. Built with plain HTML, CSS, and minimal JavaScript — no frameworks, no build step required.

---

## 📁 File Structure

```
portfolio/
├── index.html      # Main HTML — all content sections
├── styles.css      # Full responsive stylesheet
├── script.js       # Navigation enhancements & scroll animations
└── README.md       # This file
```

---

## 🚀 Getting Started

### Option 1 — Open directly in browser
Double-click `index.html`. Works in any modern browser without a server.

### Option 2 — Local development server (recommended)

**Using Python (no install needed on macOS/Linux):**
```bash
cd portfolio
python3 -m http.server 8080
# Then visit http://localhost:8080
```

**Using Node.js / npx:**
```bash
npx serve .
```

**Using VS Code:**
Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, then right-click `index.html` → "Open with Live Server".

---

## ✏️ Customisation

### Updating content
All content lives in `index.html`. Sections are clearly commented and structured semantically. To update:
- **Hero stats** → Edit the `.hero__stat` blocks
- **Experience** → Edit `.timeline-item` articles
- **Projects** → Edit `.project-card` articles
- **Certifications** → Edit `.cert-list` lists
- **Contact** → Edit `.contact-links` anchors

### Adding a downloadable CV
To link to a PDF version of the CV:
1. Place your PDF in the portfolio folder (e.g. `Favour_Agbo_CV.pdf`)
2. In `index.html`, find the hero actions section and add:
   ```html
   <a href="Favour_Agbo_CV.pdf" class="btn btn--primary" download aria-label="Download CV as PDF">Download CV</a>
   ```

### Changing the colour palette
All colours are defined as CSS custom properties at the top of `styles.css` under `:root`. Update values there and they cascade across the entire design.

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `--clr-forest` | `#1B3A2D` | Hero bg, headings |
| `--clr-canopy` | `#2C5F3E` | Medium green accent |
| `--clr-harvest` | `#C4882A` | Gold accent, CTAs |
| `--clr-sage` | `#8FAF8B` | Secondary text |
| `--clr-ivory` | `#F5F1E8` | Page background |
| `--font-serif` | DM Serif Display | Display headings |
| `--font-sans` | Inter | Body text |
| `--font-mono` | Space Mono | Labels, dates |

---

## ♿ Accessibility

- Semantic HTML5 landmarks (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`, `<article>`, `<aside>`)
- Skip-to-content link for keyboard users
- All interactive elements are keyboard-navigable with visible focus rings
- ARIA labels on icon-only elements and external links
- `aria-expanded` state on mobile menu toggle
- `role="list"` on styled `<ul>` elements
- `lang="en"` on `<html>` for screen reader language detection
- `prefers-reduced-motion` respected — animations disabled when user requests reduced motion
- Sufficient colour contrast throughout (WCAG AA compliant)

---

## 🖨️ Print

The stylesheet includes `@media print` rules that hide navigation and decorative elements, ensuring a clean printable layout if the page is printed directly.

---

## 🌐 Deployment

This is a fully static site — it can be deployed to:
- **GitHub Pages**: Push to a repo, enable Pages in Settings
- **Netlify**: Drag & drop the folder at netlify.com/drop
- **Vercel**: `vercel` CLI from the project folder
- **Any static host or CDN**

---

*Built with HTML, CSS, and JavaScript — no dependencies, no build step.*
