# 🤖 Quick Start - AI Chatbot Setup

## ⚡ Get Started in 3 Steps

### 1. Get Your OpenAI API Key

Visit [OpenAI Platform](https://platform.openai.com/api-keys) and create a new API key.

### 2. Add the API Key to Your Environment

```bash
# Edit the .env.local file that was created
# Replace 'your_openai_api_key_here' with your actual API key
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 3. Restart the Development Server

```bash
# Stop the current server (Ctrl+C) and restart
npm run dev
```

## 🎉 That's It!

Visit [http://localhost:3000](http://localhost:3000) and click the floating chat button in the bottom-right corner.

## 📝 What You'll See

- **Floating Button**: Blue/purple gradient button with animation in bottom-right
- **Chat Window**: Click to open a 380x600px chat interface
- **AI Assistant**: Powered by GPT-4, knows about your professional background
- **Streaming Responses**: Real-time typing effect as AI responds

## ⚙️ Customization

### Change the AI Model (Lower Costs)

Edit `app/api/chat/route.ts`, line 52:

```typescript
model: 'gpt-3.5-turbo', // Instead of 'gpt-4-turbo-preview'
```

This reduces costs by ~90%!

### Customize the System Prompt

Edit `app/api/chat/route.ts`, lines 13-32 to add more details about yourself.

### Change UI Colors

Edit `app/components/Chatbot.tsx`:

- Line 138: Change button gradient colors
- Line 156: Change header gradient colors

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repo in Vercel
3. Add `OPENAI_API_KEY` in Environment Variables
4. Deploy!

### Other Platforms

Make sure to add `OPENAI_API_KEY` to your environment variables.

## 💰 Cost Estimate

**GPT-4 Turbo:** ~$0.05-0.15 per conversation (10 messages)
**GPT-3.5 Turbo:** ~$0.005-0.015 per conversation (10 messages)

100 conversations/day = $5-15/month (GPT-4) or $0.50-1.50/month (GPT-3.5)

## 📚 Full Documentation

See `CHATBOT_SETUP.md` for complete documentation including:

- Security best practices
- Advanced customization
- Cost management strategies
- Troubleshooting guide
- Enhancement ideas

## ❓ Troubleshooting

**Chat button not appearing?**

- Clear browser cache and refresh
- Check browser console for errors

**API errors?**

- Verify your `OPENAI_API_KEY` is set correctly in `.env.local`
- Make sure you restarted the dev server after adding the key
- Check you have credits in your OpenAI account

**No streaming?**

- Edge runtime is enabled by default
- Check the Network tab in browser DevTools for streaming responses

## 🎨 Features Included

✅ Floating chat button with animations  
✅ Expandable chat window  
✅ Real-time streaming responses  
✅ Markdown formatting support  
✅ Auto-scroll to latest messages  
✅ Loading indicators  
✅ Error handling  
✅ Mobile responsive  
✅ Customizable system prompt  
✅ TypeScript with full type safety

---

**Need help?** Check the full documentation in `CHATBOT_SETUP.md`
