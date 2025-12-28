# Vercel Deployment Guide

## Why Vercel?

GitHub Pages only serves static files and **cannot run Next.js API routes**. This is why your chatbot API returns 405 errors in production but works locally.

**Vercel** is the best platform for Next.js because:

- ✅ Built by the Next.js team
- ✅ Full support for API routes (serverless functions)
- ✅ Automatic deployments from GitHub
- ✅ Free tier with generous limits
- ✅ Easy environment variable management
- ✅ Edge functions support
- ✅ Automatic HTTPS

## Quick Setup (5 minutes)

### Step 1: Sign Up & Import

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" and choose "Continue with GitHub"
3. Authorize Vercel to access your repositories
4. Click "Import Project"
5. Find and select `pank1999/pankajpandey2.0`
6. Click "Import"

### Step 2: Configure Build Settings

Vercel will auto-detect Next.js. The default settings are perfect:

- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

Click "Deploy" (but it will fail without the API key - that's okay!)

### Step 3: Add Environment Variable

1. After the first deployment attempt, go to your project dashboard
2. Click "Settings" tab
3. Click "Environment Variables" in the sidebar
4. Add your variable:
   - **Name:** `OPENAI_API_KEY`
   - **Value:** Your OpenAI API key (starts with `sk-`)
   - **Environments:** Check all (Production, Preview, Development)
5. Click "Save"

### Step 4: Redeploy

1. Go to "Deployments" tab
2. Click the three dots (...) on the latest deployment
3. Click "Redeploy"
4. Your chatbot will now work! 🎉

## Custom Domain (Optional)

If you want to keep using `pankajpandey.dev`:

1. In Vercel project settings, go to "Domains"
2. Add your custom domain: `pankajpandey.dev`
3. Follow Vercel's instructions to update your DNS records
4. Vercel will automatically provision SSL certificate

## Automatic Deployments

Once set up, Vercel automatically:

- ✅ Deploys every push to `main` branch (production)
- ✅ Creates preview deployments for pull requests
- ✅ Provides unique URLs for each deployment
- ✅ Runs your API routes as serverless functions

## What About GitHub Pages?

You have two options:

### Option 1: Use Vercel Only (Recommended)

- Remove GitHub Pages workflow
- All deployments via Vercel
- Point your domain to Vercel

### Option 2: Dual Deployment

- Keep GitHub Pages for static content
- Use Vercel subdomain for the full app with chatbot
- Example: `app.pankajpandey.dev` on Vercel

## After Deployment

Test your chatbot:

1. Visit your Vercel deployment URL
2. Click the chat button
3. Ask a question - it should work!

## Troubleshooting

**"Module not found" errors:**

- Vercel auto-installs dependencies, should work fine

**API still not working:**

- Check Environment Variables are set for all environments
- Redeploy after adding variables
- Check deployment logs for errors

**Build fails:**

- Check the build logs in Vercel dashboard
- Usually related to TypeScript errors or missing dependencies

## Benefits Over GitHub Pages

| Feature               | GitHub Pages | Vercel         |
| --------------------- | ------------ | -------------- |
| Static hosting        | ✅           | ✅             |
| API routes            | ❌           | ✅             |
| Serverless functions  | ❌           | ✅             |
| Edge runtime          | ❌           | ✅             |
| Auto deployments      | ✅           | ✅             |
| Preview deployments   | ❌           | ✅             |
| Environment variables | ❌           | ✅             |
| Analytics             | ❌           | ✅ (free tier) |

## Cost

**Vercel Free Tier includes:**

- Unlimited deployments
- 100GB bandwidth/month
- Serverless function execution
- Custom domains
- Automatic SSL

**More than enough for a portfolio site!**

## Next Steps

1. Deploy to Vercel (5 minutes)
2. Add `OPENAI_API_KEY` environment variable
3. Test the chatbot
4. Optionally point your custom domain to Vercel
5. Remove or disable GitHub Pages workflow

Need help with any step? Let me know!
