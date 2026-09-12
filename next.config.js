/** @type {import('next').NextConfig} */

// When deploying to GitHub Pages the repo lives at /portfolio.
// Set NEXT_PUBLIC_BASE_PATH=/portfolio in CI; leave empty for Vercel or a custom domain.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',       // Always produce a static site in ./out
  basePath,               // /portfolio on GitHub Pages, '' elsewhere
  trailingSlash: true,    // Required for static export on GitHub Pages
  images: {
    unoptimized: true,    // next/image optimisation is unavailable in static export
  },
};

module.exports = nextConfig;
