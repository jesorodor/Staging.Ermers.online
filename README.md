# ERMERS Studio — GitHub Pages Deployment

A modern, premium web experience featuring cinematic scroll animations, 3D interactive elements, and refined typography. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Deployed to GitHub Pages.

## 🌐 Live Site

Your site will be available at: **https://jesorodor.github.io/Staging.Ermers.online**

## 🚀 Quick Deployment Guide

### Step 1: Upload Files to GitHub

1. **Download and extract** this ZIP file to your computer

2. **Navigate to your repository** on GitHub:
   https://github.com/jesorodor/Staging.Ermers.online

3. **Upload all files**:
   - Click "Add file" → "Upload files"
   - Drag ALL files and folders from the extracted ZIP
   - Scroll down and click "Commit changes"

   OR use Git command line:
   ```bash
   cd path/to/extracted/folder
   git init
   git add .
   git commit -m "Initial commit: ERMERS Studio site"
   git branch -M main
   git remote add origin https://github.com/jesorodor/Staging.Ermers.online.git
   git push -u origin main
   ```

### Step 2: Enable GitHub Pages

1. Go to your repository: https://github.com/jesorodor/Staging.Ermers.online
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select `GitHub Actions`
5. Save (if prompted)

### Step 3: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see a "Deploy to GitHub Pages" workflow running
3. Wait 3-5 minutes for it to complete (green checkmark ✓)
4. Your site is now live!

### Step 4: Visit Your Site

Open: **https://jesorodor.github.io/Staging.Ermers.online**

---

## ✨ Features

- 🎨 Premium minimal design with strong typography
- ✨ Interactive 3D hero with React Three Fiber
- 🌓 Dark/Light theme toggle with localStorage
- 📱 Fully responsive and accessible
- ⚡ Optimized performance with lazy loading
- 🎭 Smooth scroll animations with Framer Motion
- ♿ WCAG-compliant accessibility features
- 🎯 SEO-ready with OpenGraph metadata

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **3D**: React Three Fiber + Drei + Three.js
- **Hosting**: GitHub Pages

## 📁 Project Structure

```
Staging.Ermers.online/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deployment workflow
├── app/
│   ├── globals.css            # Global styles & CSS variables
│   ├── layout.tsx             # Root layout
│   ├── metadata.ts            # SEO metadata
│   └── page.tsx               # Home page
├── components/
│   ├── Navigation.tsx         # Main navigation
│   ├── ThemeToggle.tsx        # Dark/Light mode toggle
│   ├── ScrollProgress.tsx     # Scroll indicator
│   ├── Hero.tsx               # Hero section
│   ├── Hero3D.tsx             # 3D "E" monogram
│   ├── NewsSection.tsx        # News items
│   ├── WorksSection.tsx       # Portfolio works
│   ├── AboutSection.tsx       # About content
│   ├── VisionSection.tsx      # Vision statement
│   ├── ServicesSection.tsx    # Services offered
│   ├── ContactSection.tsx     # Contact form
│   └── Footer.tsx             # Footer
├── public/
│   └── .nojekyll              # GitHub Pages config
├── .gitignore
├── .nojekyll
├── next.config.js             # Next.js config (GitHub Pages)
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Customization

### Update Content

Edit these files to change content:

- **News items**: `components/NewsSection.tsx`
- **Works/Portfolio**: `components/WorksSection.tsx`
- **Services**: `components/ServicesSection.tsx`
- **About copy**: `components/AboutSection.tsx`
- **Vision statement**: `components/VisionSection.tsx`
- **Contact info**: `components/ContactSection.tsx`
- **SEO/Meta**: `app/metadata.ts`

### Change Theme Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --color-bg: #ffffff;
  --color-fg: #0a0a0a;
  --color-accent: #3b82f6;  /* Change this for different accent color */
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
}

.dark {
  --color-bg: #0a0a0a;
  --color-fg: #ffffff;
  --color-accent: #60a5fa;  /* Dark mode accent */
  /* ... */
}
```

### Modify 3D Element

Edit `components/Hero3D.tsx` to change the 3D "E" monogram:
- Adjust colors, materials, or geometry
- Replace with your own 3D model
- Change rotation speed or mouse parallax sensitivity

## 🔄 Making Updates

After editing any files:

1. **Save your changes**
2. **Commit and push to GitHub**:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
3. **Automatic deployment** will start
4. **Check Actions tab** to monitor progress
5. **Site updates** in 2-3 minutes

## 🧪 Local Development (Optional)

To run the site locally for development:

### Prerequisites
- Node.js 18 or higher
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build

# Output will be in the 'out/' folder
```

## 🔧 Troubleshooting

### Site Not Loading?

1. Check **Settings → Pages** - ensure Source is set to "GitHub Actions"
2. Check **Actions tab** - ensure workflow completed successfully (green ✓)
3. Wait 5 minutes - first deployment can take a bit longer
4. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)

### 3D Element Not Showing?

- Ensure WebGL is enabled in your browser
- Check browser console (F12) for errors
- A gradient fallback will display if WebGL is unavailable

### Deployment Failing?

- Check the **Actions** tab for error logs
- Ensure all files were uploaded correctly
- Verify `package.json` dependencies are correct

### Changes Not Appearing?

- Clear browser cache (Ctrl+Shift+Delete)
- Check that changes were pushed to the `main` branch
- Wait for the deployment workflow to complete (Actions tab)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**Note**: 3D features require WebGL support. Graceful fallback provided.

## ♿ Accessibility

- Semantic HTML5 throughout
- Skip-to-content link for keyboard navigation
- ARIA labels on interactive elements
- Focus-visible styles for keyboard users
- Respects `prefers-reduced-motion` preference
- High contrast ratios (WCAG AA compliant)

## 📄 License

This is a demonstration project. Feel free to customize for your own use.

---

## 🆘 Need Help?

If you encounter issues:

1. Check this README's Troubleshooting section
2. Review the Actions tab for deployment logs
3. Open an issue on GitHub

---

**Built with care by ERMERS Studio**

Enjoy your new website! 🎉
