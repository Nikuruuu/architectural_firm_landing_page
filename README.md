# Architectura — Architectural Firm Portfolio

A modern, single-page portfolio website for an architectural firm built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**. Designed with premium aesthetics, responsive layouts, and smooth interactions to showcase architectural services and projects.

🌐 **Live Demo:** [architect.jeremiahdelacruz.com](https://architect.jeremiahdelacruz.com/)

---

## ✨ Features

- **Full-page Landing Experience** — Seamlessly scrollable single-page layout covering all brand touchpoints
- **Responsive Navbar** — Fixed glassmorphism nav with a mobile slide-out sheet drawer
- **7 Page Sections:**
  - **Hero** — Full-screen background with bold italic typography and CTAs
  - **Philosophy** — Brand values and design ethos
  - **Services** — Three-column grid (Residential, Commercial, Urban Planning) with hover micro-animations
  - **Projects** — Portfolio showcase
  - **About Us** — Team and studio background
  - **Methodology** — Design process overview
  - **Contact** — Inquiry form

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| UI Library | [React 19](https://react.dev) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Components | [shadcn/ui](https://ui.shadcn.com) + [Radix UI](https://www.radix-ui.com) |
| Icons | [Lucide React](https://lucide.dev) |
| Font | [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts) |
| Language | TypeScript 5 |

---

## 📁 Project Structure

```
architectural-firm/
├── app/
│   ├── layout.tsx          # Root layout with Navbar & Footer
│   ├── page.tsx            # Main page — composes all sections
│   └── globals.css         # Global styles & design tokens
├── components/
│   ├── marketing/
│   │   ├── Navbar.tsx      # Fixed top nav with mobile sheet drawer
│   │   ├── Footer.tsx      # Site footer
│   │   └── Logo.tsx        # Brand logo component
│   ├── sections/
│   │   ├── Hero.tsx        # Full-screen hero with background image
│   │   ├── Philosophy.tsx  # Design philosophy section
│   │   ├── Services.tsx    # 3-column services grid
│   │   ├── Projects.tsx    # Portfolio/projects grid
│   │   ├── AboutUs.tsx     # About the studio
│   │   ├── Methodology.tsx # Design process steps
│   │   └── Contact.tsx     # Contact form section
│   └── ui/                 # shadcn/ui primitives (Button, Sheet, etc.)
├── public/
│   └── Hero_v1.svg         # Hero background image
└── lib/                    # Shared utilities (cn helper, etc.)
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd architectural-firm

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## 🎨 Design Highlights

- **Glassmorphism Navbar** — `backdrop-blur` with semi-transparent background
- **Uppercase Tracking** — Editorial typographic style with wide letter spacing throughout
- **Hover Micro-animations** — Service cards reveal icons and CTAs on hover with smooth transitions
- **Mobile-first** — Full responsive layout; desktop nav collapses to a `Sheet` drawer on mobile
- **Inter Font** — Loaded via `next/font` for zero layout shift

---

## 📦 Key Dependencies

```json
{
  "next": "16.1.6",
  "react": "19.2.3",
  "tailwindcss": "^4",
  "shadcn": "^3.8.5",
  "radix-ui": "^1.4.3",
  "lucide-react": "^0.575.0",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.5.0"
}
```

---

## 🚢 Deployment

The live site is deployed at **[architect.jeremiahdelacruz.com](https://architect.jeremiahdelacruz.com/)**.

To deploy your own instance via [Vercel](https://vercel.com/new):

1. Push your code to GitHub
2. Import the repository on Vercel
3. Vercel auto-detects Next.js — no configuration needed

See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other options.

---

## 📄 License

This project is for portfolio purposes. Feel free to use it as a reference or template for your own work.
