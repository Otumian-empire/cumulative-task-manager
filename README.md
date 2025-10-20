# Cumulative Task Manager

A small React + Vite application for tracking cumulative goals and progress. It provides a simple UI to create goals, add progress entries, and view progress over time. The project is written in TypeScript and uses Vite for development and build.

## Features

-   Create and list goals
-   Add progress entries for goals
-   View goal details and progress
-   Lightweight, minimal UI with React

## Quick start

Requirements

-   Node.js (16+ recommended)
-   npm or yarn

Install dependencies

```bash
npm install
# or
yarn
```

Run development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

Lint the project

```bash
npm run lint
```

## Available npm scripts

-   `dev` — start Vite dev server
-   `build` — compile TypeScript project and build with Vite
-   `preview` — locally preview the production build
-   `lint` — run ESLint over the project

## Project structure (important files)

```
/src
	App.tsx           # application root
	main.tsx          # app entry (ReactDOM render)
	util.ts           # small utilities
	index.css         # global styles
	/Components
		Alert.tsx
		Header.tsx
	/Pages
		GoalForm.tsx
		GoalItem.tsx
		GoalList.tsx
		GoalView.tsx
		ProgressForm.tsx
```

## Notes for contributors

-   TypeScript is used across the project. Please run the type-checker when adding features.
-   ESLint is configured — run `npm run lint` before opening a PR.
-   Keep components small and focused. Tests are welcome but not required for small fixes.

## Troubleshooting

-   If you see type errors during build, run `npx tsc --noEmit` to inspect type issues.
-   If Vite fails to start, ensure your Node.js version is supported and reinstall node_modules.

## License

This repository contains no license file. Add a LICENSE if you intend to make this project open source.

## Contact

If you need help, open an issue in this repository describing the problem and steps to reproduce.

## Persistence / storage

This app persists the in-memory task list to the browser's `localStorage` using `src/storage.ts`.

-   Key used: `database` — the project saves the entire tasks array as JSON under this key.
-   Fallback: on first run or if parsing fails, the app falls back to the example data defined in `src/util.ts` (`_database`). This prevents the app from crashing on malformed stored data.
-   Clearing stored data: `storage.ts` exposes a `clearStorage` function which removes only the `database` key (it does not call `localStorage.clear()`), so other browser data is preserved.

Troubleshooting notes

-   If changes you make in code are not reflected in the app, try clearing the stored `database` key in the browser DevTools (Application → Local Storage → `database`) or call the app's reset button if/when added.
-   If your browser is in private mode or blocks storage, saving may silently fail; you can check for errors in the console.
-   Consider adding export/import buttons if you want to back up or transfer data between devices — exporting is simply `JSON.stringify` the in-memory tasks and offering it as a file download; importing should parse and validate before replacing state.

Developer notes

-   The current storage implementation is intentionally simple. If you plan schema changes, add a small wrapper object when saving (e.g., `{ version: 1, tasks: [...] }`) so you can migrate old saves safely.
-   Saves are debounced in `src/App.tsx` to avoid excessive writes during rapid updates.
