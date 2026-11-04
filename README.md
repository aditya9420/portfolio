# Aditya Chavan — Cinematic Editorial Portfolio

A VOX-inspired interactive documentary portfolio engineered with **React 18, TypeScript, GSAP (ScrollTrigger & useGSAP), Framer Motion, and Tailwind CSS**.

---

## 🚀 Live Deployment to GitHub Pages

This project is configured to deploy to **GitHub Pages** seamlessly using any of the following 3 standard methods:

### Method 1: Automatic GitHub Actions (Recommended)
This repository includes a production-ready workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Upgrade portfolio with editorial experience"
   git push origin main
   ```
2. On GitHub, go to your repository **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. GitHub will automatically run the build workflow and publish your site at `https://<your-username>.github.io/<repo-name>/`.

---

### Method 2: Deploy using `npm run deploy` (`gh-pages`)
If you prefer deploying directly from your terminal to the `gh-pages` branch:

1. Run:
   ```bash
   npm run deploy
   ```
2. In your repository **Settings** → **Pages**, select **Deploy from a branch** and choose the `gh-pages` branch with `/ (root)` folder.

---

### Method 3: Deploy using `/docs` Folder
Every time you run `npm run build`, production assets are automatically bundled into `dist/` and synchronized to the `docs/` folder:

1. Push your repository to GitHub.
2. Go to repository **Settings** → **Pages**.
3. Under **Source**, select **Deploy from a branch**.
4. Select `main` (or `master`) branch and set folder to `/docs`. Click **Save**.

---

## 💻 Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Build production bundle and sync `docs/`:
   ```bash
   npm run build
   ```

4. Preview the production build locally:
   ```bash
   npm run preview
   ```

5. Run TypeScript type checks:
   ```bash
   npm run type-check
   ```

---

## 🎨 Architectural & Motion Features
- **Dual Motion Stack**: GSAP + ScrollTrigger for macroscopic scroll timelines and string tension; Framer Motion for tactile button physics, glossy 3D tilt, and modals.
- **Flashlight Reveal**: 60fps GPU-accelerated cursor torchlight using `requestAnimationFrame` and CSS custom variables.
- **Interactive "Let's Collaborate" Section**: Standalone warm ivory canvas (`#EAE8E2`) with an authentic inline SVG hand pulling a glossy jet-black pill button with physical string tension.
- **Case Studies**: Deep-dive architecture and relational schema breakdowns for *e-Agri Portal* and *Portfolio System*.
- **Verified Credentials**: In-browser document inspector for certificates and simulations.
- **Accessibility**: Full semantic landmarks, keyboard navigation, accessible modals with Escape key support, and `prefers-reduced-motion` compliance.
