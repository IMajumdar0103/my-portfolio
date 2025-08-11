# Deployment Guide

This guide will help you deploy your portfolio to various platforms.

## 🚀 Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js portfolio:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy!

3. **Custom Domain (Optional)**
   - In your Vercel project settings
   - Go to "Domains"
   - Add your custom domain
   - Update DNS records

## 🌐 Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Environment Variables**: Add any needed in Netlify dashboard

## ☁️ AWS Amplify

1. **Connect Repository**: Connect your GitHub repo
2. **Build Settings**: Use default Next.js settings
3. **Deploy**: Amplify will automatically build and deploy

## 📱 Before Deployment

### 1. Update Personal Information
- Replace placeholder images in `public/` folder
- Update contact information in components
- Modify skills, projects, and experience
- Update social media links

### 2. Environment Variables
Create a `.env.local` file:
```bash
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourprofile
NEXT_PUBLIC_EMAIL=your.email@example.com
```

### 3. Test Locally
```bash
npm run build
npm run start
```

### 4. SEO Optimization
- Update meta tags in `layout.tsx`
- Add Open Graph images
- Configure robots.txt and sitemap

## 🔧 Post-Deployment

### 1. Verify Functionality
- Test all navigation links
- Verify contact form works
- Check responsive design
- Test performance with Lighthouse

### 2. Analytics (Optional)
Add Google Analytics or other tracking:
```typescript
// In layout.tsx
export const metadata: Metadata = {
  // ... existing metadata
  other: {
    'google-analytics': 'GA_MEASUREMENT_ID',
  },
};
```

### 3. Monitoring
- Set up error monitoring (Sentry, LogRocket)
- Monitor performance metrics
- Set up uptime monitoring

## 🚨 Common Issues

### Build Errors
- Check TypeScript errors: `npm run type-check`
- Verify all dependencies are installed
- Check for missing environment variables

### Image Issues
- Ensure images are in `public/` folder
- Use Next.js Image component properly
- Optimize image sizes

### Performance Issues
- Run `npm run analyze` to check bundle size
- Optimize images and fonts
- Use dynamic imports for heavy components

## 📊 Performance Tips

1. **Images**: Use WebP/AVIF formats
2. **Fonts**: Use `next/font` for optimization
3. **Code Splitting**: Use dynamic imports
4. **Caching**: Set proper cache headers
5. **CDN**: Use Vercel's edge network or similar

## 🔒 Security

1. **Environment Variables**: Never commit `.env.local`
2. **Dependencies**: Regular security updates
3. **HTTPS**: Always use HTTPS in production
4. **CSP**: Consider Content Security Policy headers

---

Your portfolio should now be live and accessible to the world! 🎉
