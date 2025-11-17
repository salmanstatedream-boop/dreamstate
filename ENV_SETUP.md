# Environment Variables Setup

## For Local Development

Create a `.env` file in the `deploy/` folder with these values:


```

## For Vercel Deployment

Add these same variables in Vercel Dashboard:
1. Go to your project → Settings → Environment Variables
2. Add each variable one by one
3. **Important**: For `GOOGLE_PRIVATE_KEY`, paste the entire key including the `\n` characters (Vercel will handle them correctly)
4. Make sure to set them for "Production" environment
5. Redeploy after adding variables

## Notes

- The `.env` file should NOT be committed to Git (it's in `.gitignore`)
- For production, always use Vercel's environment variables, never commit secrets
- The Google Sheet must be shared with the service account email: `netlify@n8nlocal-476717.iam.gserviceaccount.com`

