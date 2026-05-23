# Vedant Yede — Portfolio

A Next.js 14 portfolio website built with the **Minimalist Monochrome** design system.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Plain CSS (globals.css) with CSS custom properties
- **Fonts**: Playfair Display · Source Serif 4 · JetBrains Mono (via next/font/google)

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
vedant-portfolio/
├── app/
│   ├── layout.tsx      # Root layout with font setup & metadata
│   ├── page.tsx        # Main portfolio page (single page)
│   └── globals.css     # Full design system + all styles
├── public/             # Static assets (add your photo here)
├── package.json
├── tsconfig.json
└── next.config.js
```

## Customisation

All content is in `app/page.tsx`. To update:
- **Contact info**: Update the contact links array near the bottom of page.tsx
- **Projects**: Update the projects array in the projects section
- **Skills**: Update the skills array in the skills section
- **Colors**: All design tokens are in `globals.css` under `:root`

## Deployment

Deploy instantly to Vercel:

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.
