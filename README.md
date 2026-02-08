# Nebula Web - The Store 🌐

**Type:** Next.js Landing Page (Public Repository)

**Purpose:** Marketing website and download portal for Nebula.

## Features

- **Modern Landing Page**: Clean, responsive design with Tailwind CSS
- **Download Links**: Direct APK download for Android
- **Feature Showcase**: Highlights encryption, chunking, and privacy features
- **Docker Ready**: Production-optimized container build

## Tech Stack

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Docker**: Containerized deployment

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

### Docker

```bash
# Build image
docker build -t nebula-web .

# Run container
docker run -p 3000:3000 nebula-web
```

### Vercel

```bash
# Deploy to Vercel
vercel --prod
```

## File Structure

```
nebula_web/
├── app/
│   ├── page.tsx          # Landing page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── DownloadButton.tsx
│   └── FeatureCard.tsx
├── public/               # Static assets
├── Dockerfile
└── package.json
```

## SEO

- Optimized metadata in layout.tsx
- Server-side rendering for better performance
- Semantic HTML structure

## License

MIT License - See LICENSE file
