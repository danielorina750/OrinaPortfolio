# Daniel Orina — Portfolio

A responsive, motion-rich personal portfolio built with Next.js, React, TypeScript and Framer Motion. Inspired by the interaction patterns of therishithakor.com, with original design and project-specific content.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Upload the folder to a GitHub repository (do not upload `node_modules` or `.next`).
2. In Vercel, click **Add New → Project** and import the repository.
3. Framework preset: **Next.js**. Build command: `npm run build`. Output directory: default.
4. Click **Deploy**.

## Important before publishing

- In `app/page.tsx`, replace `YOUR_EMAIL@example.com` with your actual public email address. The contact wizard opens a prefilled draft in the visitor's email application; it does not send server-side email.
- Review the project descriptions and publish only content you are authorized to disclose. No proprietary screenshots or internal banking details are included.
- The design uses CSS-generated abstract artwork, not copied graphics or source assets from the reference website.
- Update `app/layout.tsx` SEO metadata if you want to add your own domain.
- If you want actual case study images, replace the `Artwork` component with approved screenshots.

## Project files

- `app/page.tsx` — all content, interaction and portfolio data
- `app/globals.css` — responsive design and visual animations
- `app/layout.tsx` — page metadata and layout
- `package.json` — dependencies and commands
