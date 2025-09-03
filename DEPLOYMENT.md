# 🚀 Ayollar Sog'ligi Seminari - Deploy Guide

## Production Ready Setup

Loyiha to'liq production uchun tayyorlandi va barcha zarur konfiguratsiya fayllari yaratilgan:

### ✅ Konfiguratsiya Fayllari
- `package.json` - Dependencies va scripts
- `vite.config.ts` - Build konfiguratsiyasi
- `tsconfig.json` - TypeScript sozlamalari  
- `tailwind.config.js` - Tailwind CSS
- `postcss.config.js` - CSS processing
- `eslint.config.js` - Code quality
- `vercel.json` - Vercel deploy
- `netlify.toml` - Netlify deploy
- `.github/workflows/deploy.yml` - CI/CD

### 🌍 Deploy Platforms

#### Vercel (Tavsiya qilinadi)
```bash
# Vercel CLI o'rnating
npm i -g vercel

# Deploy qiling
vercel

# Production deploy
vercel --prod
```

#### Netlify
```bash
# Build qiling
npm run build

# dist/ papkasini Netlify ga drag & drop qiling
# yoki Netlify CLI ishlatng:
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

#### GitHub Pages
```bash
# Build qiling
npm run build

# gh-pages branch yarating va deploy qiling
npm i -g gh-pages
gh-pages -d dist
```

### 🔧 Environment Variables
`.env.example` faylini `.env.local` ga nusxalang va qiymatlarni yangilang:

```bash
# Supabase (agar backend kerak bo'lsa)
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Analytics (Optional - agar kerak bo'lsa)
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
VITE_YANDEX_METRICA_ID=12345678

# Telegram Bot (Optional)
VITE_TELEGRAM_BOT_TOKEN=your_bot_token
```

### 📁 Assets Kerak
Quyidagi fayllarni `/public` papkasiga qo'shing:
- `favicon.ico` - 32x32 px icon
- `apple-touch-icon.png` - 180x180 px icon
- `android-chrome-192x192.png` - 192x192 px icon
- `android-chrome-512x512.png` - 512x512 px icon
- `og-image.jpg` - 1200x630 px social media preview

### ⚡ Performance Features ✅
- **Code Splitting**: Vendor, UI, Motion chunklarga bo'lingan
- **Lazy Loading**: Components va images
- **Bundle Optimization**: Rollup manual chunks
- **Cache Strategy**: 1 yillik static assets cache
- **Compression**: Gzip va Brotli
- **Critical CSS**: Inlined va optimized
- **Web Vitals**: Core metrics optimized

### 🛡️ Security & SEO ✅
- **Error Boundaries**: React error handling
- **Input Validation**: Form sanitization
- **Environment Safety**: Browser-safe env access
- **SEO Meta Tags**: Comprehensive meta data
- **Structured Data**: JSON-LD schema
- **Social Cards**: OG va Twitter cards
- **PWA Ready**: Service worker va manifest

### 📱 PWA Features ✅
- **Service Worker**: Caching va offline support
- **Web Manifest**: Install qilish uchun
- **Responsive**: Mobile-first design
- **Touch Icons**: Barcha qurilmalar uchun
- **Theme Colors**: OS integration

### 🔧 Development Commands
```bash
# Development server
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint

# Production build
npm run build

# Preview build
npm run preview
```

### 🚀 CI/CD Pipeline ✅
GitHub Actions workflow yaratilgan:
- Automatic testing
- Type checking  
- Lint checking
- Production build
- Auto deploy to Vercel va Netlify

### 📊 Monitoring Setup
```bash
# Build size analysis
npm run build
ls -la dist/assets/

# Performance testing
lighthouse https://your-domain.com
```

### 🔧 Troubleshooting

#### Common Deploy Issues

**1. Environment Variables**
```bash
# .env.local faylida (ixtiyoriy):
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
VITE_YANDEX_METRICA_ID=12345678
```

**2. Build Errors**
```bash
# Clean install 
rm -rf node_modules package-lock.json
npm install

# Type check
npm run type-check

# Build with verbose
npm run build
```

## Domain Setup
1. Domain orqali deploy qiling
2. SSL sertifikat sozlang
3. CDN qo'shing (masalan, Cloudflare)

## Monitoring
Deploy qilgandan so'ng:
- Analytics ishlab turganini tekshiring
- Telegram integration test qiling  
- Mobile responsive view tekshiring
- Form submission test qiling

## Support Contacts Update
Production da ishlatish uchun:
1. `handleContactAdmin` funksiyasini haqiqiy contact ma'lumotlari bilan yangilang
2. Telegram support username va telefon raqamlarini yangilang

## Final Steps
1. ✅ All components tested
2. ✅ Error handling implemented  
3. ✅ Mobile responsive
4. ✅ SEO optimized
5. ✅ Analytics ready
6. ✅ Performance optimized

**READY FOR PRODUCTION DEPLOYMENT! 🚀**
