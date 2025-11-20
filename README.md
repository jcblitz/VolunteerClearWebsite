# VolunteerClear Marketing Website

The public-facing marketing website for VolunteerClear, built with Vue 3, TypeScript, and Tailwind CSS.

## Project Setup

### Prerequisites

- Node.js (latest LTS version)
- npm

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build

Build for production:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
marketing/
├── public/
│   └── images/          # Static images and assets
├── src/
│   ├── components/      # Vue components
│   ├── composables/     # Vue composables (reusable logic)
│   ├── types/          # TypeScript type definitions
│   ├── App.vue         # Root component
│   ├── main.ts         # Application entry point
│   └── style.css       # Global styles with Tailwind
├── index.html
├── package.json
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## Technology Stack

- **Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons

## Design System

The marketing site uses a custom design system based on the VolunteerClear brand:

### Colors

- **Primary**: Blue shades (#3b82f6)
- **Secondary**: Purple shades (#8b5cf6)
- **Neutral**: Gray shades

### Typography

- **Font Family**: Inter (with system font fallbacks)

See `tailwind.config.js` for the complete design system configuration.

## Deployment

The marketing website is designed to be deployed as a static site. It can be hosted on various platforms.

### Deployment Options

#### Option 1: Netlify

1. Connect your repository to Netlify
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Deploy automatically on push to main branch

#### Option 2: Vercel

1. Import your repository to Vercel
2. Vercel will auto-detect Vite configuration
3. Deploy automatically on push to main branch

#### Option 3: AWS S3 + CloudFront

1. Build the project: `npm run build`
2. Upload `dist/` contents to S3 bucket
3. Configure S3 bucket for static website hosting
4. Set up CloudFront distribution pointing to S3 bucket
5. Configure custom domain and SSL certificate

#### Option 4: GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add deploy script to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`
4. Configure repository settings to use gh-pages branch

### Pre-Deployment Checklist

- [ ] Update meta tags in `index.html` with production URLs
- [ ] Add real images to `public/images/` directory
- [ ] Update `og-image.jpg` for social media previews
- [ ] Test all links and navigation
- [ ] Verify mobile responsiveness
- [ ] Run accessibility audit
- [ ] Test contact form submission
- [ ] Configure analytics (if needed)
- [ ] Set up custom domain
- [ ] Configure SSL certificate

### Environment Variables

No environment variables are required for the marketing site. All configuration is done at build time.

### Performance Optimization

The build process includes:
- Code splitting (vendor, heroicons, main app)
- CSS minification
- JavaScript minification
- Tree shaking for unused code
- Optimized chunk sizes

### Post-Deployment

After deployment:
1. Test the live site on multiple devices
2. Verify all sections scroll smoothly
3. Test contact form submission
4. Check page load performance with Lighthouse
5. Verify SEO meta tags with social media preview tools

## Contributing

When adding new components or features:

1. Place Vue components in `src/components/`
2. Place reusable logic in `src/composables/`
3. Define TypeScript types in `src/types/`
4. Follow the existing code style and naming conventions
5. Ensure mobile responsiveness
6. Test accessibility with keyboard navigation

## License

Proprietary - VolunteerClear
