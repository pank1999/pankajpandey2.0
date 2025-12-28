# Personal AI Chatbot Integration

## Overview

Your portfolio now includes an AI-powered chatbot that uses OpenAI's GPT-4 to answer questions about your professional background, skills, and experience.

## What Was Implemented

## Dependencies Installed

- `openai` - Official OpenAI Node.js SDK (v6.15.0)
- `@ai-sdk/openai` - OpenAI provider for Vercel AI SDK
- `react-markdown` - Markdown rendering for chat messages
- `remark-gfm` - GitHub Flavored Markdown support

**Note:** We're using direct OpenAI API calls with streaming for better compatibility and simpler implementation.

### 2. API Route (`app/api/chat/route.ts`)

- Edge runtime for fast global performance
- Streaming responses for better UX
- Custom system prompt with your professional context
- Error handling and API key validation
- Rate limiting ready (can be enhanced)

### 3. Chatbot Component (`app/components/Chatbot.tsx`)

- Floating chat button (bottom-right corner)
- Animated button with pulse effect
- Expandable chat window (380x600px)
- Message history with auto-scroll
- Markdown support in assistant responses
- Loading indicators and error handling
- Sleek dark theme matching your portfolio

### 4. Integration

- Added to `app/layout.tsx` for global availability
- Accessible on every page of your portfolio
- Persistent across navigation

## Setup Instructions

### 1. Get Your OpenAI API Key

1. Go to https://platform.openai.com/api-keys
2. Sign in with your OpenAI account
3. Click "Create new secret key"
4. Copy the key (you won't see it again!)

### 2. Configure Environment Variables

**For Local Development:**

```bash
# Create .env.local file
cp .env.local.example .env.local

# Edit .env.local and add your key
OPENAI_API_KEY=sk-your-actual-api-key-here
```

**For Production/Deployment:**
Add the environment variable to your hosting platform:

- **Vercel**: Project Settings → Environment Variables
- **Docker/Kubernetes**: Add to your deployment config
- **Other platforms**: Follow their environment variable setup

### 3. Test Locally

```bash
# Start the development server
npm run dev

# Visit http://localhost:3000
# Click the chat button in the bottom-right corner
# Test the chatbot!
```

## Features

### User Experience

- ✅ Floating button with smooth animations
- ✅ Expandable chat window
- ✅ Real-time streaming responses
- ✅ Markdown formatting support
- ✅ Auto-scroll to latest messages
- ✅ Loading indicators
- ✅ Error handling with user-friendly messages
- ✅ Mobile responsive design

### Technical Features

- ✅ Edge runtime for low latency
- ✅ Streaming responses (faster perceived performance)
- ✅ Type-safe TypeScript implementation
- ✅ Custom system prompt with your context
- ✅ Session-based conversation memory
- ✅ Secure API key handling (server-side only)

## Customization Options

### 1. Chatbot Personality

Edit the `SYSTEM_PROMPT` in `app/api/chat/route.ts` to:

- Add more details about your experience
- Include specific project information
- Adjust the tone (more formal/casual)
- Add knowledge about your interests

### 2. UI Styling

Modify `app/components/Chatbot.tsx` to:

- Change colors (currently blue/purple gradient)
- Adjust size (default: 380x600px)
- Move position (currently bottom-right)
- Customize animations

### 3. AI Model Settings

In `app/api/chat/route.ts`, you can adjust:

```typescript
model: 'gpt-4-turbo-preview', // or 'gpt-3.5-turbo' for lower cost
max_tokens: 500,               // Response length limit
temperature: 0.7,              // Creativity (0.0-2.0)
```

### 4. Cost Management

To control OpenAI costs:

**Option 1: Rate Limiting**
Add to `app/api/chat/route.ts`:

```typescript
// Simple rate limiting (can be enhanced with Redis)
const MAX_MESSAGES_PER_SESSION = 20;
```

**Option 2: Use GPT-3.5**
Change model to `gpt-3.5-turbo` for ~10x lower cost

**Option 3: Token Limits**
Reduce `max_tokens` to limit response length

## Production Deployment

### Vercel (Recommended)

```bash
# Push to GitHub
git add .
git commit -m "Add AI chatbot integration"
git push

# In Vercel dashboard:
# 1. Import your repository
# 2. Add OPENAI_API_KEY to environment variables
# 3. Deploy
```

### Docker

```bash
# Build with environment variable
docker build --build-arg OPENAI_API_KEY=your-key -t portfolio .

# Or run with env var at runtime
docker run -e OPENAI_API_KEY=your-key -p 3000:3000 portfolio
```

### Kubernetes

Update your deployment manifest:

```yaml
env:
  - name: OPENAI_API_KEY
    valueFrom:
      secretKeyRef:
        name: openai-secret
        key: api-key
```

## Cost Estimates

**GPT-4 Turbo Pricing (as of Dec 2024):**

- Input: $0.01 per 1K tokens
- Output: $0.03 per 1K tokens
- Average conversation (10 messages): ~$0.05-0.15

**GPT-3.5 Turbo (Budget Option):**

- Input: $0.0005 per 1K tokens
- Output: $0.0015 per 1K tokens
- Average conversation (10 messages): ~$0.005-0.015

**Expected Usage:**
If you get 100 chat sessions/day, budget ~$5-15/month (GPT-4) or $0.50-1.50/month (GPT-3.5)

## Troubleshooting

### Chatbot not appearing?

- Check browser console for errors
- Verify the component is imported in `layout.tsx`
- Clear browser cache and reload

### API errors?

- Verify `OPENAI_API_KEY` is set correctly
- Check OpenAI API status: https://status.openai.com
- Review server logs for detailed error messages

### No streaming?

- Ensure Edge runtime is enabled
- Check if your hosting platform supports streaming
- Verify OpenAI API quota is not exhausted

## Security Notes

⚠️ **Important Security Practices:**

1. **Never commit `.env.local`** - It's gitignored by default
2. **API key is server-side only** - Never exposed to browser
3. **Input validation** - Already implemented in API route
4. **Rate limiting** - Consider adding for production
5. **Monitor usage** - Set up OpenAI usage alerts

## Next Steps

### Enhancements You Can Add:

1. **Conversation History**

   - Store chat history in localStorage
   - Persist across page reloads

2. **Feedback System**

   - Add thumbs up/down for responses
   - Collect feedback for improvement

3. **Advanced Rate Limiting**

   - Use Redis/Upstash for distributed rate limiting
   - Implement per-IP or per-session limits

4. **Analytics**

   - Track popular questions
   - Monitor chat engagement

5. **Multi-language Support**

   - Detect user language
   - Respond in user's preferred language

6. **Voice Input**
   - Add speech-to-text
   - Enable voice conversations

## Support

If you encounter any issues or want to customize further, the code is well-commented and follows Next.js best practices. Feel free to modify according to your needs!

---

**Enjoy your new AI-powered portfolio chatbot! 🚀**
