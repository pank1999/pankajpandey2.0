# 🚀 Quick Vercel Deployment

## The Problem

Your chatbot API returns **405 errors** on GitHub Pages because:

- GitHub Pages only serves **static files**
- Next.js API routes need a **Node.js server**
- The `/api/chat` endpoint can't run on static hosting

## The Solution: Deploy to Vercel

### Step-by-Step (5 minutes)

#### 1. Visit Vercel

Go to: **https://vercel.com/new**

#### 2. Import Repository

- Click "Continue with GitHub"
- Authorize Vercel
- Select `pankajpandey2.0` repository
- Click "Import"

#### 3. Configure (Auto-detected)

Vercel detects Next.js automatically:

```
Framework: Next.js ✅
Build Command: npm run build ✅
Output Directory: .next ✅
```

Click **"Deploy"**

#### 4. Add API Key

After first deployment:

1. Go to **Settings → Environment Variables**
2. Add new variable:
   - Name: `OPENAI_API_KEY`
   - Value: `sk-your-key-here`
   - Environments: ✅ Production ✅ Preview ✅ Development
3. Click **"Save"**

#### 5. Redeploy

1. Go to **Deployments** tab
2. Click **"..."** on latest deployment
3. Click **"Redeploy"**
4. ✅ Done! Your chatbot now works!

## Test It

Visit your Vercel URL and test the chatbot - it should work perfectly! 🎉

## Custom Domain (Optional)

Want to use `pankajpandey.dev`?

1. In Vercel: **Settings → Domains**
2. Add `pankajpandey.dev`
3. Update DNS records as instructed
4. Vercel handles SSL automatically

## Auto Deployments

Vercel now automatically deploys:

- ✅ Every push to `main` → Production
- ✅ Every pull request → Preview URL
- ✅ API routes work as serverless functions

## Files Updated

- ✅ `next.config.js` - Removed `output: "standalone"`
- ✅ `vercel.json` - Added Vercel configuration
- ✅ Ready for deployment!

---

**Need help?** Check `VERCEL_DEPLOYMENT.md` for detailed instructions.
