# Changemaker Map

A beautiful, modern website for USD students to discover and engage with sustainability events in San Diego.

**Tagline:** "Discover where change happens."

## Features

- 🗺️ **Interactive Map** - Explore sustainability events across San Diego with an interactive map
- 📸 **Event Gallery** - Browse photos from past events organized by event
- 👤 **User Profiles** - Track your points, badges, events attended, and hours logged
- 🏆 **Leaderboards** - Compete with friends and see global rankings
- 🎁 **Rewards Store** - Redeem points for campus cash, dining dollars, and merch
- 📱 **Fully Responsive** - Beautiful design on mobile, tablet, and desktop

## Tech Stack

- **React 18** with **TypeScript**
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Leaflet** for interactive maps
- **React Leaflet** for React integration

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd changemaker_map
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment to Railway

### Option 1: Deploy via Railway CLI

1. Install Railway CLI:
```bash
npm i -g @railway/cli
```

2. Login to Railway:
```bash
railway login
```

3. Initialize Railway in your project:
```bash
railway init
```

4. Deploy:
```bash
railway up
```

### Option 2: Deploy via Railway Dashboard

1. Go to [railway.app](https://railway.app) and sign in
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Connect your GitHub account and select the `changemaker_map` repository
5. Railway will automatically detect the project and deploy it

### Railway Configuration

The project includes a `railway.json` configuration file that:
- Builds the project using `npm run build`
- Serves the static files using `npm run serve` (Vite preview server)

### Environment Variables

Currently, no environment variables are required. If you need to add API keys or other configuration later, you can add them in the Railway dashboard under your project's settings.

### Custom Domain

After deployment, Railway will provide a default URL. You can add a custom domain in the Railway dashboard under your project's settings.

## Project Structure

```
changemaker_map/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable React components
│   ├── pages/       # Page components
│   ├── data/        # Mock data (replace with API calls later)
│   ├── App.tsx      # Main app component with routing
│   ├── main.tsx     # Entry point
│   └── index.css    # Global styles
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── railway.json     # Railway deployment config
```

## Development Notes

- All data is currently mock/placeholder data in `src/data/mockData.ts`
- The map uses Leaflet with OpenStreetMap tiles
- Replace mock data with API calls when backend is ready
- Authentication is currently simulated (frontend only)

## Contact

For questions, email: changemakermap@gmail.com

## License

This project is for USD Changemaker Hub partnership.

