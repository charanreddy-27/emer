# Vercel Deployment Configuration

## Root Directory
Set: `frontend`

## Build Settings
- **Framework Preset**: Create React App
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Install Command**: `npm install`

## Environment Variables
If you need to connect to the backend API, add:
- `REACT_APP_BACKEND_URL`: Your backend API URL (e.g., https://your-backend.vercel.app)

## Important Notes
1. The `vercel.json` file in the frontend directory handles SPA routing
2. The `_redirects` file ensures all routes go to index.html
3. Make sure to deploy from the `frontend` directory

## Deployment Steps

### Option 1: Vercel Dashboard
1. Go to https://vercel.com
2. Import your GitHub repository
3. Set **Root Directory** to `frontend`
4. Framework should auto-detect as "Create React App"
5. Click Deploy

### Option 2: Vercel CLI
```bash
cd frontend
vercel
```

## Troubleshooting
- If you see a blank page, check browser console for errors
- Ensure all environment variables are set in Vercel dashboard
- Check that the build completed successfully in Vercel deployment logs
