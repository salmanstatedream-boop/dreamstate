# Deployment Guide

This folder contains all the production-ready files for deploying the Property AI Chatbot to Vercel.

## Files Included

- `src/` - React frontend source code
- `api/` - Vercel serverless functions
- `public/` - Static assets (favicon, logo)
- `index.html` - Main HTML file
- `package.json` - Dependencies and scripts
- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `vercel.json` - Vercel deployment configuration
- `.gitignore` - Git ignore rules
- `README.md` - Project documentation
- `.env.example` - Environment variables template (with your credentials)

## Quick Deployment Steps

### 1. Push to GitHub

```bash
cd deploy
git init
git add .
git commit -m "Initial commit: Property AI Chatbot"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 2. Deploy to Vercel

#### Option A: Via Vercel Dashboard (Recommended)

1. Go to [https://vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect the settings from `vercel.json`
5. **IMPORTANT**: Add environment variables in Vercel Dashboard:
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.example`:
     - `GROQ_API_KEY`
     - `GROQ_MODEL`
     - `GOOGLE_SHEET_ID`
     - `GOOGLE_CLIENT_EMAIL`
     - `GOOGLE_PRIVATE_KEY` (paste the full key with `\n` for newlines)
     - `GCLOUD_PROJECT_ID`
6. Click "Deploy"

#### Option B: Via Vercel CLI

```bash
npm install -g vercel
cd deploy
vercel
```

When prompted:
- Set up and deploy? **Yes**
- Which scope? (Select your account)
- Link to existing project? **No**
- Project name? (Enter a name or press Enter)
- Directory? **./**
- Override settings? **No**

Then add environment variables:
```bash
vercel env add GROQ_API_KEY
vercel env add GOOGLE_SHEET_ID
vercel env add GOOGLE_CLIENT_EMAIL
vercel env add GOOGLE_PRIVATE_KEY
vercel env add GCLOUD_PROJECT_ID
vercel env add GROQ_MODEL
```

Finally, deploy to production:
```bash
vercel --prod
```

## Environment Variables

Copy the values from `.env.example` and add them in Vercel Dashboard:


## Testing Locally Before Deployment

1. Install dependencies:
```bash
cd deploy
npm install
```

2. Create `.env` file (copy from `.env.example`):
```bash
copy .env.example .env
```

3. Run with Vercel dev:
```bash
npx vercel dev
```

4. Open `http://localhost:3000` and test the chatbot

## Post-Deployment Checklist

- [ ] Verify the site loads at your Vercel URL
- [ ] Test a property query (e.g., "What's the WiFi password at Unit 5?")
- [ ] Test a dataset query (e.g., "Which properties have pools?")
- [ ] Check Vercel function logs for any errors
- [ ] Verify Google Sheets access (service account has read permissions)

## Troubleshooting

### Build Fails

- Check that all dependencies are in `package.json`
- Verify Node.js version (18+) in Vercel settings

### API Returns 404

- Ensure `api/` folder is in the root of the deploy folder
- Check `vercel.json` has correct rewrites

### Google Sheets Access Denied

- Share your Google Sheet with: `netlify@n8nlocal-476717.iam.gserviceaccount.com`
- Verify the service account has "Viewer" access

### Environment Variables Not Working

- Make sure variables are set for "Production" environment in Vercel
- Redeploy after adding new variables
- Check variable names match exactly (case-sensitive)

## Support

For issues, check:
1. Vercel function logs: `vercel logs`
2. Browser console for frontend errors
3. Network tab for API call failures

