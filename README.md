# Asma Gannar — Portfolio

Personal portfolio for **Asma Gannar**, a final-year Software Engineering student at MedTech, South Mediterranean University (SMU), Tunisia. Built to target PFE / capstone internship opportunities in Europe for 2027.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Contact form**: Web3Forms (free tier, no backend required)
- **Deployment**: Vercel (recommended) or GitHub Pages

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles & Tailwind directives
│   ├── layout.tsx           # Root layout with SEO metadata
│   └── page.tsx             # Main page — assembles all sections
├── components/
│   ├── Navigation.tsx       # Sticky navbar + mobile drawer
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About me + education card
│   ├── Experience.tsx       # Sopra HR Software internship timeline
│   ├── Projects.tsx         # Project grid cards
│   ├── Skills.tsx           # Categorised skill groups
│   ├── Education.tsx        # Education section + coursework
│   ├── Certifications.tsx   # Certifications badges
│   ├── Languages.tsx        # Language proficiency
│   ├── CaseStudy.tsx        # Sopra HR expandable case study
│   ├── GitHubSection.tsx    # GitHub profile section
│   ├── Contact.tsx          # Contact form + direct links
│   ├── RecruiterCTA.tsx     # Recruiter call-to-action banner
│   └── Footer.tsx           # Footer
└── lib/
    └── utils.ts             # cn() utility (clsx + tailwind-merge)
public/
└── Asma-Gannar-CV.pdf       # ← Replace with your real CV
```

## Installation

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher

### Clone and install

```bash
git clone https://github.com/Gannar21/portfolio.git
cd portfolio
npm install
```

## Environment Variables

Create a `.env.local` file in the project root (never commit this file):

```bash
cp .env.example .env.local
```

Then fill in your values:

```
# Contact form (Web3Forms — https://web3forms.com, free tier)
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here

# Your public contact email
NEXT_PUBLIC_CONTACT_EMAIL=your.email@example.com

# Production URL (used for SEO metadata)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Setting up Web3Forms (contact form)

1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter your email to receive form submissions
3. Copy the **Access Key** you receive
4. Paste it as `NEXT_PUBLIC_WEB3FORMS_KEY` in `.env.local`

The form will then send submissions directly to your email. No backend required.

## Local Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Type-check

```bash
npm run type-check   # TypeScript check
npm run lint         # ESLint
npm run build        # Production build
```

## Adding Your CV

Replace the placeholder file with your real CV:

```
public/Asma-Gannar-CV.pdf
```

The download link in the navigation and the recruiter CTA section points to `/Asma-Gannar-CV.pdf` automatically.

## Deployment — GitHub Pages

The project is pre-configured for GitHub Pages. A GitHub Actions workflow
(`.github/workflows/deploy.yml`) handles the full build and deploy automatically
on every push to `main`.

### Step 1 — Push to GitHub

```bash
cd "portfolio"
git init
git add .
git commit -m "feat: initial portfolio build"
git branch -M main
git remote add origin https://github.com/Gannar21/portfolio.git
git push -u origin main
```

### Step 2 — Enable GitHub Pages

1. Open your repository on GitHub: `github.com/Gannar21/portfolio`
2. Go to **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. Save

### Step 3 — Add repository secrets

Go to **Settings → Secrets and variables → Actions → New repository secret** and add:

| Secret name | Value |
|-------------|-------|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Your key from [web3forms.com](https://web3forms.com) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Your real email address |

These are baked into the static build at deploy time. They are **never committed to the repository**.

### Step 4 — Trigger the first deploy

Push any change to `main` (or go to **Actions → Deploy to GitHub Pages → Run workflow**).

The workflow will:
- Install dependencies
- Run lint + type-check
- Build the static site (into `./out/`)
- Deploy to GitHub Pages

### Live URL

```
https://gannar21.github.io/portfolio/
```

### Custom domain (optional)

1. Add a `CNAME` file to `public/` containing your domain, e.g. `portfolio.asmag.dev`
2. In GitHub → Settings → Pages → Custom domain — enter your domain
3. Update `NEXT_PUBLIC_BASE_PATH` to `''` (empty) in `deploy.yml` and update `NEXT_PUBLIC_SITE_URL` to your domain
4. Configure DNS at your registrar (A records or CNAME pointing to GitHub Pages IPs)

## GitHub Actions CI

A CI workflow is included at `.github/workflows/ci.yml`. It runs on every push and pull request to `main`:

- ESLint
- TypeScript type-check
- Production build

## Pushing to GitHub

```bash
# Inside the portfolio directory
git init
git add .
git commit -m "feat: initial portfolio build"
git branch -M main
git remote add origin https://github.com/Gannar21/portfolio.git
git push -u origin main
```

## Final Publish Checklist

- [ ] Replace `public/Asma-Gannar-CV.pdf` with your real CV
- [ ] Create `.env.local` with `NEXT_PUBLIC_WEB3FORMS_KEY` and `NEXT_PUBLIC_CONTACT_EMAIL`
- [ ] Run `npm run build` locally — confirm zero errors
- [ ] Push to GitHub
- [ ] Import project in Vercel, add environment variables
- [ ] Verify live deployment
- [ ] Test contact form end-to-end (check your inbox)
- [ ] Add custom domain in Vercel (optional)
- [ ] Update `NEXT_PUBLIC_SITE_URL` to your final domain for correct OG metadata

## Contact

**Asma Gannar**
- GitHub: [github.com/Gannar21](https://github.com/Gannar21)
- LinkedIn: [linkedin.com/in/asma-gannar-036421273](https://www.linkedin.com/in/asma-gannar-036421273/)
