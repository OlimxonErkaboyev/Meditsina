# 🎯 Ayollar Sog'ligi Seminari - Development Guidelines

## 📋 Loyiha Maqsadi

Bu loyiha ayollar sog'ligi bo'yicha 3 kunlik bepul webinar uchun ro'yxatdan o'tish formasi. Loyiha professional darajada yaratilgan va production-ready.

## 🏗️ Arxitektura

### Frontend Stack
- **React 18** + **TypeScript** - Modern React features
- **Vite** - Tez build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible komponentlar

### Backend Integration
- **Supabase** - Database va serverless functions
- **Hono** - Edge runtime uchun API framework

## 📁 Loyiha Strukturasi

```
src/
├── components/          # React komponentlari
│   ├── ui/             # UI komponentlar (Radix UI)
│   ├── sections/       # Landing page sections
│   └── ...             # Boshqa komponentlar
├── utils/              # Utility funksiyalar
├── config/             # Konfiguratsiya fayllari
├── constants/          # Static ma'lumotlar
├── supabase/           # Backend funksiyalar
├── styles/             # CSS fayllar
├── workflows/          # CI/CD workflows
└── guidelines/         # Development guidelines
```

## 🎨 Dizayn Prinsiplari

### Ranglar
- **Asosiy ranglar:** Pink va Rose gradient
- **Accent ranglar:** Purple, Orange
- **Neutral ranglar:** Gray scale

### Typography
- **Font family:** Inter (system font)
- **Font sizes:** Tailwind default scale
- **Font weights:** 400 (normal), 500 (medium), 600 (semibold)

### Spacing
- **Container:** max-w-6xl mx-auto
- **Section spacing:** py-12, py-16, py-20
- **Component spacing:** gap-4, gap-6, gap-8

## 🧩 Komponent Arxitekturasi

### UI Komponentlar
- **button.tsx** - Barcha tugmalar uchun
- **card.tsx** - Kartalar uchun
- **input.tsx** - Input maydonlari uchun
- **label.tsx** - Label uchun
- **badge.tsx** - Badge uchun

### Page Komponentlar
- **LandingPage** - Asosiy sahifa
- **RegistrationForm** - Ro'yxatdan o'tish formasi
- **SuccessPage** - Muvaffaqiyatli ro'yxatdan o'tish
- **AdminPanel** - Admin panel

### Section Komponentlar
- **HeroSection** - Asosiy banner
- **BenefitsSection** - 4 ta asosiy foyda
- **Testimonials** - Mijozlar sharhlari
- **FAQSection** - Savol-javoblar

## 📱 Responsive Design

### Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

### Mobile First Approach
- Barcha komponentlar mobile-first yozilgan
- Progressive enhancement desktop uchun

## 🔧 Development Workflow

### Development Commands
```bash
# Development server
npm run dev

# Production build
npm run build

# Preview build
npm run preview

# Linting
npm run lint
```

### Code Standards
- **TypeScript** - Strict mode
- **ESLint** - Code quality
- **Prettier** - Code formatting
- **Conventional Commits** - Git commit messages

## 🚀 Deployment

### Platforms
- **Vercel** (Tavsiya qilinadi)
- **Netlify**
- **GitHub Pages**

### CI/CD
- **GitHub Actions** - Automatic deployment
- **Environment Variables** - Secure configuration
- **Build Optimization** - Performance optimization

## �� Performance

### Optimization
- **Code Splitting** - Lazy loading
- **Bundle Optimization** - Tree shaking
- **Image Optimization** - WebP format
- **Caching Strategy** - Static assets

### Metrics
- **Lighthouse Score** - > 90
- **Bundle Size** - < 500KB gzipped
- **Load Time** - < 3 seconds

## 🛡️ Security

### Best Practices
- **Input Validation** - XSS protection
- **Environment Variables** - Secure configuration
- **HTTPS** - Secure communication
- **Error Handling** - Information leakage prevention

## 🌐 Internationalization

### Language Support
- **Uzbek Language** - Asosiy til
- **Unicode Support** - To'liq UTF-8
- **Locale Formatting** - Sana va vaqt

## 📈 Analytics

### Tracking
- **Google Analytics** - User behavior
- **Yandex Metrica** - Additional analytics
- **Event Tracking** - User interactions
- **Conversion Tracking** - Registration funnel

## 🔍 SEO

### Optimization
- **Meta Tags** - Title, description, keywords
- **Open Graph** - Social media sharing
- **Structured Data** - JSON-LD schema
- **Sitemap** - Search engine indexing

## 🧪 Testing

### Testing Strategy
- **Unit Tests** - Component testing
- **Integration Tests** - Feature testing
- **E2E Tests** - User journey testing
- **Performance Tests** - Load testing

## 📚 Documentation

### Code Documentation
- **JSDoc** - Function documentation
- **README** - Project overview
- **API Docs** - Backend documentation
- **Component Docs** - Storybook

## 🤝 Contributing

### Git Workflow
- **Feature Branches** - New features
- **Pull Requests** - Code review
- **Code Review** - Quality assurance
- **Testing** - Before merge

### Code Review Checklist
- [ ] Code follows style guidelines
- [ ] Tests are written and passing
- [ ] Documentation is updated
- [ ] Performance is optimized
- [ ] Security is considered

## 🐛 Bug Reports

### Bug Report Template
- **Description** - What happened
- **Steps to Reproduce** - How to reproduce
- **Expected Behavior** - What should happen
- **Actual Behavior** - What actually happened
- **Environment** - Browser, OS, etc.

## 📞 Support

### Contact Information
- **Email** - support@soglik-seminari.uz
- **Telegram** - @soglik_seminari_support
- **Phone** - +998901234567

---

**Bu guidelines loyihani professional darajada ishlab chiqish va saqlash uchun yaratilgan.**
