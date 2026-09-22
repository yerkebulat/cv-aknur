# Aknur Zhakanova — resume

Personal resume site, same layout as [yerkebulat/cv](https://github.com/yerkebulat/cv).

## Local preview

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## GitHub Pages

Pushing to `main` runs `.github/workflows/pages.yml`, which builds a static site and publishes it.

The site will be at https://yerkebulat.github.io/cv-aknur/ after Pages is turned on once:

1. Open the repository on GitHub.
2. Settings → Pages.
3. Under Build and deployment, set Source to GitHub Actions.

The first push after that setting is saved starts the deploy. Later pushes update the site on their own.
