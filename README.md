# Jasbeer Portfolio

A cinematic, motion-first portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

This project renders portfolio content from a single YAML source and presents it through reusable section components (hero, about, experience, skills, projects, education, and contact).

## Highlights

- Next.js App Router architecture with TypeScript
- Data-driven content using `data/portfolio-content.yaml`
- Motion system powered by `framer-motion` + Lenis smooth scrolling
- Reusable section and animation primitives
- Tailwind CSS v4 styling
- CI pipeline for lint, build, and optional tests

## Tech Stack

- Framework: `next` (App Router)
- Language: `TypeScript`
- UI: `React`, `Tailwind CSS`
- Animation: `framer-motion`, `lenis`
- Data format/parsing: `YAML` via `js-yaml`
- Linting: `ESLint` + `eslint-config-next`

## Getting Started

### Prerequisites

- Node.js `20+` (CI uses Node 20)
- npm `9+` (or latest npm bundled with Node 20)

### Install

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm run start
```

## Available Scripts

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run start` - start production server
- `npm run lint` - run ESLint checks
- `npm run test --if-present` - run tests when a test script exists

## Content Management (YAML-Driven)

All portfolio content is currently managed in:

- `data/portfolio-content.yaml`

The homepage loads this file using:

- `lib/dataLoader.ts` (`loadYamlData`)
- `lib/types.ts` (`PortfolioData` schema)
- `app/page.tsx` (injects parsed data into the portfolio page)

### Typical Content Edits

- Update profile info: `profile` section
- Update social links and nav labels: `socialLinks`, `navigation`
- Update experience/projects/skills/education: corresponding arrays
- Update SEO text for content surfaces: `seo`

After editing YAML, restart the dev server if needed and verify the page renders with no schema/type mismatches.

## Project Structure

```text
app/
  layout.tsx          # Global metadata, providers, global animated layers
  page.tsx            # Loads YAML data and renders PortfolioPage
  globals.css

components/
  animated/           # Reusable motion effects and interaction components
  layout/             # Navigation, loader, cursor glow, smooth scroll helpers
  portfolio/          # Main page composition
  sections/           # Hero/About/Experience/Skills/Projects/Education/Contact/Footer
  ui/                 # Shared section UI shell/title primitives

data/
  portfolio-content.yaml

hooks/                # Motion and interaction hooks
lib/                  # Data loader, theme context, motion tokens, shared types
types/                # Extra TS declarations (e.g., yaml module typing)
.github/workflows/    # CI pipeline
k8s/                  # Kubernetes deployment manifests
  overlays/           # Kustomize environment overlays (dev/prod)
```

## Accessibility and Motion

The UI includes motion-heavy interactions, and the implementation accounts for reduced motion preferences through dedicated hooks and animation primitives.

If you customize animations, ensure behavior remains usable when `prefers-reduced-motion` is enabled.

## CI

GitHub Actions workflow (`.github/workflows/ci.yml`) runs:

- Lint job (`npm run lint`)
- Build job (`npm run build`)
- Test job (`npm run test --if-present`)

It triggers on push to `main`/`master` and on pull requests.

## Deployment

This is a standard Next.js app and can be deployed on platforms like Vercel, Netlify, or any Node-capable host.

For a smooth deployment:

1. Use Node 20 runtime.
2. Run `npm ci` and `npm run build` in CI/CD.
3. Start with `npm run start` (or platform-native Next.js runtime).

### Docker Setup

This repository now includes:

- `Dockerfile`
- `.dockerignore`

Build and run locally:

```bash
docker build -t jasbeer-portfolio:latest .
docker run --rm -p 3000:3000 jasbeer-portfolio:latest
```

Then open [http://localhost:3000](http://localhost:3000).

### Kubernetes Setup

This repository includes a baseline Kubernetes manifest:

- `k8s/portfolio.yaml` (Deployment + Service)
- `k8s/ingress.yaml` (Ingress)

Before applying, update the container image in the manifest:

```yaml
image: ghcr.io/your-org/jasbeer-portfolio:latest
```

Apply to your cluster:

```bash
kubectl apply -f k8s/portfolio.yaml
kubectl get pods,svc -l app=jasbeer-portfolio
```

The service is exposed as `ClusterIP` on port `80` targeting container port `3000`. Add an Ingress or LoadBalancer service depending on your cluster setup.

### Kustomize Overlays (Dev/Prod)

This repository includes `kustomize` overlays:

- `k8s/overlays/dev` - 1 replica, `:dev` image tag
- `k8s/overlays/prod` - 3 replicas, includes Ingress, `:latest` image tag

Apply development overlay:

```bash
kubectl apply -k k8s/overlays/dev
```

Apply production overlay:

```bash
kubectl apply -k k8s/overlays/prod
```

Before applying, update image references and hostnames to your registry/domain.

### Docker Image CI/CD (GHCR)

The repository now includes:

- `.github/workflows/docker-image.yml`

Behavior:

- On pull requests: builds Docker image (no push)
- On pushes to `main`/`master`: builds and pushes image to GHCR
- Manual runs: supported via `workflow_dispatch`

Published image format:

- `ghcr.io/<github-owner>/jasbeer-portfolio:sha-<commit>`
- `ghcr.io/<github-owner>/jasbeer-portfolio:latest` (default branch only)

## Customization Ideas

- Add project links and media previews in the YAML schema and UI cards
- Add a contact form backend/API route (instead of mailto-only workflow)
- Add automated content validation tests for YAML schema integrity
- Introduce dark/light theme mode persistence

## License

No license file is currently included. Add a `LICENSE` file if you plan to open-source redistribution rights.
