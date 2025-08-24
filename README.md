# Cybersecurity Portfolio - Trinh Lam Quoc Vinh

A modern, production-ready personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Designed specifically for cybersecurity professionals and students to showcase their Red Team and Blue Team expertise.

## 🌟 Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first, accessible design following WCAG AA guidelines
- **Dark Theme**: Optimized dark theme with glassmorphism effects
- **Performance Optimized**: Image optimization, dynamic imports, prefetching
- **SEO Ready**: Complete metadata, Open Graph, Twitter Cards, structured data
- **Easy Content Management**: Single configuration file for all content
- **Interactive Labs Grid**: Filterable project showcase with modals
- **Contact Form**: Email integration with form validation
- **Smooth Animations**: Framer Motion powered micro-interactions

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0.0 or higher
- npm, yarn, or pnpm

### Installation

1. **Clone or download this repository**
   ```bash
   git clone <repository-url>
   cd newportfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 📝 Content Management

### Edit Your Information

All personal content is managed through a single file: **`siteconfig.ts`**

```typescript
// siteconfig.ts
const config: SiteConfig = {
  name: "Your Name",
  role: "Your Role", 
  email: "your.email@example.com",
  // ... update all fields with your information
}
```

### Key Configuration Sections

1. **Personal Info**
   ```typescript
   name: "Your Full Name"
   role: "Your Professional Title"
   email: "contact@email.com"
   summary: "Your professional summary"
   ```

2. **Social Links**
   ```typescript
   socials: {
     github: "https://github.com/yourusername",
     linkedin: "https://linkedin.com/in/yourprofile",
     tryhackme: "https://tryhackme.com/p/yourusername"
   }
   ```

3. **Skills Organization**
   ```typescript
   skills: {
     red: ["Penetration Testing", "OWASP Top 10", ...],
     blue: ["SIEM Analysis", "Incident Response", ...], 
     core: ["Python", "Linux", "Networking", ...]
   }
   ```

4. **Labs/Projects**
   ```typescript
   labs: [
     {
       title: "Your Lab Name",
       area: "Red", // or "Blue" or "Other"
       tags: ["web", "penetration-testing"],
       blurb: "Description of your lab work",
       featured: true, // shows on homepage
       link: "https://link-to-project" // optional
     }
   ]
   ```

### Adding New Content

**Add a new lab/project:**
```typescript
// In siteconfig.ts, add to the labs array:
{
  title: "Advanced Malware Analysis", 
  area: "Blue",
  tags: ["malware", "reverse-engineering", "dfir"],
  blurb: "Deep dive into malware analysis techniques using static and dynamic analysis tools.",
  featured: true,
  link: "https://github.com/yourusername/malware-analysis-lab"
}
```

**Add new skills:**
```typescript
// Add to appropriate skills category:
skills: {
  red: [...existing, "Advanced Exploitation", "Social Engineering"],
  blue: [...existing, "Threat Hunting", "Digital Forensics"],
  core: [...existing, "Docker", "Kubernetes"]
}
```

## 🎨 Customization

### Styling

The design uses CSS custom properties for easy theming:

```css
/* app/globals.css */
:root {
  --background: 222 84% 5%;
  --foreground: 210 40% 90%;
  --primary: 217 91% 60%;
  /* ... modify colors as needed */
}
```

### Adding New Pages

1. Create a new page in `app/your-page/page.tsx`
2. Add navigation link in `siteconfig.ts`:
   ```typescript
   nav: [
     ...existing,
     { label: "Your Page", href: "/your-page" }
   ]
   ```

### Components

All components are modular and reusable:
- `components/ui/` - Base UI components
- `components/` - Feature-specific components

## 📦 Assets

### Required Files

Replace these placeholder files with your actual content:

1. **`public/avatar.jpg`** - Your professional photo (400x400px recommended)
2. **`public/og.png`** - Social media preview image (1200x630px)
3. **`public/cv.pdf`** - Your CV/resume file
4. **`public/favicon.ico`** - Your website favicon

### Image Optimization

- Use Next.js Image component for optimal loading
- Supported formats: JPEG, PNG, WebP, AVIF
- Images are automatically optimized for different screen sizes

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your repository
   - Vercel will auto-detect Next.js and configure build settings

2. **Configure domain** (optional)
   - Add your custom domain in Vercel dashboard
   - Update `siteconfig.ts` with your domain:
     ```typescript
     seo: {
       url: "https://yourdomain.com"
     }
     ```

3. **Environment Variables** (if needed)
   - Add any environment variables in Vercel dashboard
   - Common variables: `GOOGLE_SITE_VERIFICATION`

### Other Platforms

This Next.js app can be deployed on:
- **Netlify**: Add build command `npm run build` and publish directory `.next`
- **Railway**: Connect repository and deploy
- **DigitalOcean App Platform**: Import from GitHub
- **Self-hosted**: Use `npm run build && npm run start`

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
newportfolio/
├── app/                    # Next.js 14 app directory
│   ├── (site)/            # Route groups
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # Base UI components
│   └── ...               # Feature components
├── lib/                  # Utility functions
├── public/               # Static assets
├── siteconfig.ts         # 🎯 Main configuration file
└── package.json
```

### Customizing Components

All components are built with:
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons

Example component customization:
```tsx
// components/Hero.tsx
// Modify animations, layout, or content as needed
```

## 🔒 Security & Performance

### Built-in Security

- Content Security Policy headers
- XSS protection
- CSRF protection
- Secure headers configuration

### Performance Features

- Image optimization with Next.js Image
- Font optimization with Next.js Fonts
- Code splitting and lazy loading
- Static generation for optimal loading

### Accessibility

- WCAG AA compliant
- Keyboard navigation support  
- Screen reader friendly
- Focus indicators
- Semantic HTML structure

## 🐛 Troubleshooting

### Common Issues

**Build errors:**
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

**Type errors:**
```bash
# Check TypeScript
npx tsc --noEmit
```

**Styling issues:**
```bash
# Rebuild Tailwind
npm run dev
```

### Getting Help

1. Check the browser console for errors
2. Review the siteconfig.ts file for syntax errors
3. Ensure all required files are in place
4. Check that environment variables are set correctly

## 📄 License

This project is open source and available under the MIT License.

## 🎯 Next Steps

After setup:

1. **Replace placeholder content** in `siteconfig.ts`
2. **Add your actual images** to `/public` directory
3. **Update social links** and contact information
4. **Customize colors/styling** if desired
5. **Deploy to Vercel** or your preferred platform
6. **Add Google Analytics** (optional)
7. **Set up contact form backend** (optional)

---

**Built with ❤️ for the cybersecurity community**

*This portfolio template is designed to help cybersecurity professionals and students showcase their Red Team and Blue Team expertise in a modern, professional way.*
