# 🚀 Property AI Chatbot - Deployment Package

This folder contains **all production-ready files** for deploying to Vercel via GitHub.

## ✅ What's Included

- ✅ Complete React frontend (`src/`)
- ✅ Vercel serverless API functions (`api/`)
- ✅ All configuration files (Vite, Tailwind, PostCSS, Vercel)
- ✅ Static assets (favicon, logo)
- ✅ Documentation (README, DEPLOYMENT guide, ENV setup)
- ✅ Environment variables template

## 📋 Quick Start

### Step 1: Test Locally

```bash
cd deploy
npm install
npx vercel dev
```

Open `http://localhost:3000` and test the chatbot.

### Step 2: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Property AI Chatbot"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. **Add Environment Variables** (see `ENV_SETUP.md`)
5. Click "Deploy"

## 📁 File Structure

```
deploy/
├── api/                    # Serverless functions
│   ├── proxyWebhook.js     # Main endpoint
│   ├── intentExtractor.js  # AI intent classification
│   ├── fieldTypeResolver.js # Field mapping
│   ├── propertyHandler.js  # Google Sheets queries
│   └── generalReply.js     # Fallback responses
├── src/                    # React frontend
│   ├── components/         # UI components
│   ├── hooks/             # React hooks
│   ├── styles/            # CSS
│   └── utils/            # Utilities
├── public/               # Static assets
├── index.html           # Entry HTML
├── package.json         # Dependencies
├── vite.config.js      # Vite config
├── tailwind.config.js  # Tailwind config
├── postcss.config.js   # PostCSS config
├── vercel.json         # Vercel config
├── .gitignore         # Git ignore rules
├── README.md          # Main documentation
├── DEPLOYMENT.md      # Deployment guide
└── ENV_SETUP.md       # Environment setup
```

## 🔑 Environment Variables

**Required for deployment:**

- `GROQ_API_KEY` - Your Groq API key
- `GOOGLE_SHEET_ID` - Google Sheet ID
- `GOOGLE_CLIENT_EMAIL` - Service account email
- `GOOGLE_PRIVATE_KEY` - Service account private key
- `GCLOUD_PROJECT_ID` - Google Cloud project ID
- `GROQ_MODEL` - Model name (default: `llama-3.1-70b-versatile`)

See `ENV_SETUP.md` for detailed setup instructions.

## 🧪 Testing

After deployment, test these queries:

**Property Queries:**
- "What's the WiFi password at Unit 5?"
- "Does Unit 3 have parking?"
- "What's the door lock code?"

**Dataset Queries:**
- "Which properties have pools?"
- "Who owns the most properties?"
- "Show properties above $200 per night"

## 📚 Documentation

- `README.md` - Full project documentation
- `DEPLOYMENT.md` - Step-by-step deployment guide
- `ENV_SETUP.md` - Environment variables setup

## ⚠️ Important Notes

1. **Never commit `.env` file** - It's in `.gitignore`
2. **Share Google Sheet** with service account: `netlify@n8nlocal-476717.iam.gserviceaccount.com`
3. **Add all environment variables** in Vercel Dashboard before deploying
4. **Redeploy** after adding new environment variables

## 🆘 Troubleshooting

See `DEPLOYMENT.md` for troubleshooting guide.

## ✨ Ready to Deploy!

Everything is configured and ready. Just push to GitHub and deploy on Vercel!

