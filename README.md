# SocialFlow Bulk Website

> Official public website and developer portal compliance documentation for **SocialFlow Bulk** — the Windows desktop bulk video scheduling and multi-platform publishing application for creators.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel Ready](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

---

## 1. Overview

**SocialFlow Bulk** is a Windows desktop application that empowers digital creators, media agencies, and video producers to import, organize, schedule, and publish creator-owned videos to **TikTok**, **Facebook Pages**, and **YouTube** using official platform APIs.

This web repository hosts the official marketing website, platform transparency documentation, privacy policy, terms of service, and data deletion instructions required for:
- Public creator discovery and software downloads.
- TikTok Developer Portal application review (Login Kit & Content Posting API).
- Meta Graph API & Google API developer compliance audits.

---

## 2. Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components & Client Hooks)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom glassmorphism and luminous gradients
- **Icons**: [Lucide React](https://lucide.dev/)
- **Image Generation & Optimization**: [Sharp](https://sharp.pixelplumbing.com/) & `next/image`
- **Hosting Target**: [Vercel](https://vercel.com/)
- **Database / Auth / Paid APIs**: None required (Zero operational external dependencies)

---

## 3. Requirements

- **Node.js**: `v18.17.0` or later (tested on Node v20 & Node v22)
- **npm**: `v9.0.0` or later
- **Operating System**: Windows, macOS, or Linux

---

## 4. Installation & Commands

Clone the repository and install dependencies:

```bash
git clone https://github.com/vijaygaming475-arch/Socialflow-Bulk.git
cd Socialflow-Bulk
npm install
```

### Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start local development server at `http://localhost:3000` |
| `npm run build` | Compile and bundle production-ready static assets |
| `npm run start` | Run production server locally after building |
| `npm run lint` | Execute ESLint checks across codebase |

---

## 5. Production Build & Verification

To verify the website builds cleanly for Vercel deployment:

```bash
npm run build
```

This compiles all routes (`/`, `/privacy`, `/terms`, `/contact`, `/404`, `sitemap.xml`, `robots.txt`) with zero errors.

---

## 6. Vercel Deployment

Deploying to Vercel is instantaneous:

1. Push your changes to GitHub on the `main` branch.
2. Sign in to [Vercel](https://vercel.com).
3. Click **Add New Project** and import `Socialflow-Bulk`.
4. Keep the default settings (Framework: Next.js, Build: `npm run build`, Output: `.next`).
5. Set environment variable (optional):
   ```env
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```
6. Click **Deploy**.

---

## 7. Folder Structure

```text
Socialflow-Bulk/
├── app/
│   ├── contact/
│   │   └── page.tsx           # Contact & Data Deletion request page
│   ├── privacy/
│   │   └── page.tsx           # 19-section Privacy Policy
│   ├── terms/
│   │   └── page.tsx           # 20-section Terms of Service
│   ├── globals.css            # Tailwind directives & glassmorphic utilities
│   ├── layout.tsx             # Root layout with SEO metadata & navbar/footer
│   ├── not-found.tsx          # Custom dark 404 page
│   ├── page.tsx               # Main landing page
│   ├── robots.ts              # Search engine robots configuration
│   └── sitemap.ts             # Dynamic XML sitemap
├── components/
│   ├── ContactForm.tsx        # Client-side mailto form with copy button
│   ├── FaqSection.tsx         # Interactive accessible accordion FAQ
│   ├── Features.tsx           # 10 core desktop application features
│   ├── Footer.tsx             # Universal footer with trademark disclaimers
│   ├── Hero.tsx               # Hero header & animated 250-video queue mockup
│   ├── HowItWorks.tsx         # 4-step workflow (Connect, Import, Schedule, Publish)
│   ├── Navbar.tsx             # Sticky glass navbar with mobile menu
│   ├── Platforms.tsx          # TikTok, Facebook Pages, YouTube API cards
│   ├── SecuritySection.tsx    # OAuth security & local-first data architecture
│   └── TikTokTransparency.tsx # Developer API review disclosure
├── public/
│   ├── app-icon-1024.png      # 1024×1024 official square PNG icon (< 5MB)
│   ├── app-icon-1024.svg      # Vector master for app icon
│   ├── favicon.ico            # Fallback 32x32 favicon
│   ├── favicon.svg            # Modern SVG browser favicon
│   ├── logo.svg               # Full horizontal logo with typography
│   └── logo-mark.svg          # Original stylized SF + play + calendar mark
├── TIKTOK_REVIEW_INFO.md      # Reviewer notes & <=120 character app summary
├── tailwind.config.ts         # Dark-first theme palette and extensions
├── tsconfig.json              # Strict TypeScript configuration
└── README.md                  # Project documentation
```

---

## 8. Customization & Maintenance

### Editing Privacy Policy
Navigate to `app/privacy/page.tsx`. All 19 sections are written in clear, structured JSX without external markdown dependencies. To update retention periods, token policies, or legal definitions, edit the respective section.

### Editing Terms of Service
Navigate to `app/terms/page.tsx`. Sections 1 through 20 cover acceptable use, intellectual property, API dependencies, and limitation of liability.

### Changing Support Email
The primary support email `socialflowbulk@gmail.com` is configured across:
- `components/ContactForm.tsx` (variable `supportEmail`)
- `components/Footer.tsx`
- `app/contact/page.tsx`
- `app/privacy/page.tsx` (Data Deletion section)
- `app/terms/page.tsx`
- `TIKTOK_REVIEW_INFO.md`

### Updating Branding & Assets
All SVG and icon assets are housed in `/public`:
- **App Icon**: `public/app-icon-1024.png` (Keep 1024×1024 square, under 5 MB, no text).
- **Logo Mark**: `public/logo-mark.svg` (SF monogram with calendar dots and play triangle).
- **Horizontal Logo**: `public/logo.svg`.
- **Favicon**: `public/favicon.svg`.

---

## 9. TikTok Developer Portal URLs

Once deployed to Vercel, copy and paste the following verified URLs into your TikTok Developer submission:

| Portal Requirement | Production URL |
| :--- | :--- |
| **Website URL** | `https://socialflow-bulk.vercel.app/` |
| **Terms of Service URL** | `https://socialflow-bulk.vercel.app/terms` |
| **Privacy Policy URL** | `https://socialflow-bulk.vercel.app/privacy` |
| **Data Deletion Instructions** | `https://socialflow-bulk.vercel.app/privacy#data-deletion` |
| **Support Email** | `socialflowbulk@gmail.com` |
| **App Icon (1024x1024)** | Upload `/public/app-icon-1024.png` |

---

## 10. License & Disclaimers

&copy; 2026 SocialFlow Bulk. All rights reserved.

*TikTok, Facebook, and YouTube are trademarks of their respective owners. SocialFlow Bulk is an independent application and is not affiliated with or endorsed by ByteDance, Meta Platforms, or Google.*

TikTok URL verification deployment refresh.
