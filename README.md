# Moth Mode - Website

First version of the Moth Mode parent company website.

## How to Run Locally

1. Make sure you have Node.js installed.
2. Open a terminal in the project directory.
3. Run `npm install` to install dependencies (if not already done).
4. Run `npm run dev` to start the local development server.
5. Open your browser and navigate to `http://localhost:5173`.

## How to Build

To build the site for production, run:
```bash
npm run build
```
The output will be in the `dist` folder.

## Where to Update Content

- **Hero & Global:** `src/components/Hero.jsx` and `src/components/Header.jsx`
- **Product Offerings (Cards):** `src/components/SoftwareSection.jsx`
- **VST Info (MixMemora):** `src/components/VSTSection.jsx`
- **Cloud Apps:** `src/components/CloudApps.jsx`
- **About Copy:** `src/components/About.jsx`
- **Contact Details:** `src/components/Footer.jsx`

All styling uses Tailwind CSS v4 logic and plain React. No databases or backends are connected yet.

## How to Deploy to Vercel

1. Push this code to a new GitHub repository.
2. Log into your Vercel account (https://vercel.com).
3. Click **Add New** > **Project** and import your GitHub repository.
4. The default settings for Vite will be auto-detected (Framework: Vite, Build Command: `npm run build`, Output Directory: `dist`).
5. Click **Deploy**. Vercel will automatically build and publish your site, assigning it a URL. You can then attach the `mothmode.net` domain in the Project Settings -> Domains.
