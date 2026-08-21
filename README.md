# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Image optimization

After adding new images to `src/assets/`, run `npm run optimize:images` to resize and convert them to right-sized WebP files. The script (`scripts/optimize-images.mjs`) is a one-time, re-runnable pass — it is not part of the build, and optimized output is committed to the repo. It also requantizes the name-locked logo/favicon PNGs in `public/` in place, without renaming them. New source images need a matching entry added to the `ASSET_JOBS`/`PUBLIC_JOBS` list in the script.
