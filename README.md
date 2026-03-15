# Mohammad Rafique Kuwari Portfolio (GEO + SEO Ready)

Production-ready personal portfolio built with Astro + TypeScript, optimized for fast static deployment on Netlify and strong Generative Engine Optimization (GEO).

## Architecture

### Stack choice
- Astro (static output) + TypeScript
- No heavy UI framework dependency
- Component-based, reusable structure for projects/articles
- Netlify-friendly static deploy (`dist`)

### Folder structure

```txt
.
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ArticleCard.astro
│   │   ├── Breadcrumbs.astro
│   │   ├── FAQ.astro
│   │   ├── Footer.astro
│   │   ├── HeadMeta.astro
│   │   ├── Header.astro
│   │   ├── JsonLd.astro
│   │   └── ProjectCard.astro
│   ├── data/
│   │   ├── articles.ts
│   │   ├── projects.ts
│   │   └── site.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── articles/
│   │   │   ├── [slug].astro
│   │   │   └── index.astro
│   │   ├── projects/
│   │   │   ├── [slug].astro
│   │   │   └── index.astro
│   │   ├── 404.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   └── sitemap.xml.ts
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       ├── schema.ts
│       └── seo.ts
├── astro.config.mjs
├── netlify.toml
├── package.json
└── README.md
```

## Pages
- `/` Home
- `/about`
- `/projects`
- `/projects/[slug]`
- `/articles`
- `/articles/[slug]`
- `/contact`

## GEO and SEO implementation

### Semantic + crawlability
- Semantic heading hierarchy (`h1/h2/h3`) on all pages
- Internal linking between services, projects, articles, and contact
- Fully static, crawl-friendly routes
- Clean URLs with static generation

### Metadata
- Unique title + description per page
- Canonical tags for each page
- Open Graph tags
- Twitter Card tags
- Robots meta defaulting to `index,follow`

### Structured data (JSON-LD)
- `Person`
- `WebSite`
- `ProfessionalService`
- `BreadcrumbList` on secondary/detail pages
- `Article` schema on article detail pages
- `CreativeWork` schema on project detail pages
- `FAQPage` schema on homepage

### Indexing assets
- `public/robots.txt`
- `src/pages/sitemap.xml.ts` generated sitemap endpoint

## Centralized editable content

Update these files to edit identity, links, services, projects, and articles:
- `src/data/site.ts`
- `src/data/projects.ts`
- `src/data/articles.ts`

Replace placeholders in `src/data/site.ts`:
- `siteUrl`
- `email`
- `github`
- `linkedin`

Also update:
- `public/robots.txt` sitemap URL

## Local development

```bash
npm install
npm run dev
```

Open: `http://localhost:4321`

## Production build

```bash
npm run build
npm run preview
```

## Netlify deployment

### Option 1: Connect repository
1. Push this project to GitHub.
2. In Netlify, create a new site from Git.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy.

### Option 2: CLI deploy
```bash
npm install -g netlify-cli
netlify init
netlify deploy --prod --dir=dist
```

## Performance notes
- Lightweight Astro static rendering
- No heavy JS dependencies
- Minimal client-side script (theme toggle only)
- CSS-first responsive design with semantic HTML

## Suggested post-deploy updates
1. Replace `https://example.netlify.app` with your real Netlify domain/custom domain.
2. Add real social profile links.
3. Install `@astrojs/check` and update the lockfile so `npm run check` performs full Astro type checking in CI.
4. Replace the placeholder social preview in `public/social-card.svg` if you want a custom share image.
5. Add project screenshots if needed (optimized web images).
6. Submit sitemap URL to Google Search Console and Bing Webmaster Tools.
# portfolio
