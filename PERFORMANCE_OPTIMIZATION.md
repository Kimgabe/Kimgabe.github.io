# Performance Optimization Guide

## 🚀 Current Performance Issues

### Font Loading Optimization
**Issue**: Multiple external font requests causing render blocking

**Current Implementation**:
```html
<!-- Multiple font requests from head.html -->
<link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700&family=Fredericka+the+Great&family=Noto+Serif+JP:wght@400;700&family=Noto+Serif+SC:wght@400;700&family=Inconsolata:wght@400;700&display=swap" rel="stylesheet">
```

**Optimization Strategy**:
1. **Preload Critical Fonts**:
```html
<link rel="preload" href="fonts/mulish-regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="fonts/mulish-bold.woff2" as="font" type="font/woff2" crossorigin>
```

2. **Font Display Optimization**:
```css
@font-face {
  font-family: 'Mulish';
  font-display: swap; /* Already implemented ✅ */
  src: url('fonts/mulish.woff2') format('woff2');
}
```

3. **Reduce Font Variants**:
```scss
// Current: 5 font families with multiple weights
// Optimized: 2-3 essential families
$font-primary: 'Mulish', -apple-system, sans-serif;
$font-heading: 'Noto Serif SC', serif;
$font-mono: 'Inconsolata', consolas, monospace;
```

### CSS/JS Optimization

**Current Assets Structure**:
```
assets/
├── css/main.scss (uncompressed)
├── js/_main.js 
├── js/main.min.js ✅ (already minified)
└── js/plugins/ (multiple files)
```

**Optimization Recommendations**:

1. **CSS Compression** (Already configured ✅):
```scss
// _config.yml - sass configuration
sass:
  sass_dir: _sass
  style: compressed  # ✅ Already set
```

2. **Critical CSS Inlining**:
```html
<!-- Inline critical CSS for above-the-fold content -->
<style>
  /* Critical path CSS - first 14KB */
  body { font-family: var(--font-primary); }
  .header { /* essential header styles */ }
</style>
```

3. **JavaScript Bundling**:
```javascript
// Combine plugins into single bundle
// plugins/jquery.*.js → bundle.min.js
// Reduce HTTP requests from 6 to 1
```

### Image Optimization

**Current Issues**:
- Mixed image formats (JPG, PNG)
- Large file sizes for teaser images
- No WebP/AVIF support

**Solutions**:

1. **Next-Gen Formats**:
```html
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>
```

2. **Responsive Images**:
```html
<img src="image-800w.jpg" 
     srcset="image-400w.jpg 400w, image-800w.jpg 800w, image-1200w.jpg 1200w"
     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
     alt="Description" loading="lazy">
```

3. **Image Compression Script**:
```bash
# Optimize existing images
find assets/images -name "*.jpg" -exec jpegoptim --max=85 {} \;
find assets/images -name "*.png" -exec optipng -o5 {} \;
```

## 📊 Performance Metrics Goals

### Current Baseline (Estimated)
- **First Contentful Paint**: ~2.5s
- **Largest Contentful Paint**: ~4.0s
- **Cumulative Layout Shift**: ~0.15
- **Bundle Size**: ~500KB (CSS + JS)

### Target Metrics
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **Bundle Size**: <300KB (CSS + JS)

## 🛠️ Implementation Plan

### Phase 1: Quick Wins
1. **Enable Gzip Compression** (GitHub Pages default ✅)
2. **Add resource hints**:
```html
<link rel="dns-prefetch" href="//fonts.googleapis.com">
<link rel="dns-prefetch" href="//cdnjs.cloudflare.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

3. **Optimize Font Loading**:
```html
<!-- Replace current font loading with optimized version -->
<link rel="preload" href="https://fonts.gstatic.com/s/mulish/v12/1Ptyg83HX_SGhgqO0yLc.woff2" as="font" type="font/woff2" crossorigin>
```

### Phase 2: Asset Optimization
1. **Critical CSS Extraction**:
```bash
# Use critical CSS extraction tool
npm install -g critical
critical src/index.html --base src --inline --minify > critical.css
```

2. **Image Processing**:
```bash
# Install imagemin for batch processing
npm install -g imagemin-cli imagemin-webp imagemin-avif
imagemin assets/images/*.jpg --out-dir=assets/images/optimized --plugin=webp
```

### Phase 3: Advanced Optimization
1. **Service Worker Implementation**:
```javascript
// Cache strategy for static assets
const CACHE_NAME = 'blog-v1';
const urlsToCache = [
  '/assets/css/main.css',
  '/assets/js/main.min.js',
  '/assets/images/gabe_profile.png'
];
```

2. **Lazy Loading Enhancement**:
```javascript
// Intersection Observer for images
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy');
      observer.unobserve(img);
    }
  });
});
```

## 🧪 Testing & Monitoring

### Performance Testing Tools
1. **Lighthouse Audit**:
```bash
# CLI audit
lighthouse https://kimgabe.github.io --output html --output-path ./lighthouse-report.html
```

2. **Core Web Vitals Monitoring**:
```javascript
// Real User Monitoring
import {getCLS, getFID, getFCP, getLCP, getTTFB} from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

### Automated Performance Budgets
```json
{
  "budgets": [
    {
      "path": "/*",
      "timings": [
        {"metric": "first-contentful-paint", "budget": 1500}
      ],
      "resourceSizes": [
        {"resourceType": "total", "budget": 300}
      ]
    }
  ]
}
```

## 📈 Expected Improvements

### Performance Gains
- **Page Load Time**: 40-50% improvement
- **Bundle Size**: 30-40% reduction  
- **Core Web Vitals**: All metrics in "Good" range
- **Lighthouse Score**: 90+ across all categories

### User Experience Benefits
- Faster perceived loading
- Reduced data usage
- Better mobile experience
- Improved SEO rankings
- Enhanced accessibility