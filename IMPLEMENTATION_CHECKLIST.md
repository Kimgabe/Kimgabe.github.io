# Jekyll Blog Fix Implementation Checklist

**Project**: Kim Gabe's DS Blog  
**Total Issues**: 8 documented  
**Estimated Time**: 2-4 weeks  

---

## 🚨 CRITICAL FIXES (Do First)

### ✅ Liquid Syntax Errors
**Timeline**: Day 1  
**Estimated Time**: 2-3 hours  

- [ ] **Find affected files**
  ```bash
  grep -r "{{분야}}" . --include="*.md" --include="*.html"
  grep -r "{{핵심키워드}}" . --include="*.md" --include="*.html"  
  grep -r "{{연도}}" . --include="*.md" --include="*.html"
  grep -r "{{중요도}}" . --include="*.md" --include="*.html"
  grep -r "{{date:" . --include="*.md" --include="*.html"
  ```

- [ ] **Replace Korean variables with English**
  - `{{분야}}` → `{{category}}`
  - `{{핵심키워드}}` → `{{keywords}}`
  - `{{연도}}` → `{{year}}`
  - `{{중요도}}` → `{{importance}}`

- [ ] **Fix date formatting**
  - `{{date:YYYY-MM-DD}}` → `{{ page.date | date: "%Y-%m-%d" }}`

- [ ] **Test build after changes**
  ```bash
  bundle exec jekyll build --verbose
  ```

### ✅ Missing Analytics File
**Timeline**: Day 1  
**Estimated Time**: 30 minutes  

- [ ] **Create `_includes/analytics.html`**
  ```bash
  touch _includes/analytics.html
  ```

- [ ] **Add Google Analytics code** (copy from MISSING_FILES_FIX.md)

- [ ] **Test include file**
  ```bash
  bundle exec jekyll build --verbose | grep analytics
  ```

- [ ] **Verify no more missing file errors**

---

## 🟠 HIGH PRIORITY (Week 1)

### ✅ Empty Posts Directory  
**Timeline**: Day 2-3  
**Estimated Time**: 1-2 hours  

- [ ] **Create sample welcome post**
  ```bash
  touch _posts/2025-08-01-welcome-to-blog.md
  ```

- [ ] **Add proper front matter and content** (template in MISSING_FILES_FIX.md)

- [ ] **Test post rendering**
  ```bash
  bundle exec jekyll serve --host 0.0.0.0
  # Visit http://localhost:4000
  ```

- [ ] **Verify post appears on homepage**

### ✅ Profile Image Duplicates
**Timeline**: Day 3  
**Estimated Time**: 45 minutes  

- [ ] **Audit current image files**
  ```bash
  find . -name "*gabe_profile*" -type f
  ```

- [ ] **Choose primary image format** (PNG recommended)

- [ ] **Update `_config.yml` avatar path**
  ```yaml
  author:
    avatar: "/assets/images/gabe_profile.png"
  ```

- [ ] **Remove duplicate files**
  ```bash
  rm assets/image/gabe_profile.jpg
  # Keep only: assets/images/gabe_profile.png
  ```

- [ ] **Test profile image display**

---

## 🟡 MEDIUM PRIORITY (Week 2)

### ✅ Log File Cleanup
**Timeline**: Day 4-5  
**Estimated Time**: 30 minutes  

- [ ] **Update `.gitignore`**
  ```gitignore
  # Add these lines
  latest_error*.txt
  *.log
  debug_*.txt
  debug_*.bat
  debug_*.ps1
  ```

- [ ] **Remove log files from repository**
  ```bash
  git rm latest_error*.txt debug_build.*
  git commit -m "Remove error log files and debug scripts"
  ```

- [ ] **Clean up root directory**

### ✅ Performance Optimization (Phase 1)
**Timeline**: Week 2  
**Estimated Time**: 3-4 hours  

- [ ] **Add resource hints to head.html**
  ```html
  <link rel="dns-prefetch" href="//fonts.googleapis.com">
  <link rel="dns-prefetch" href="//cdnjs.cloudflare.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  ```

- [ ] **Optimize font loading**
  - [ ] Reduce font variants
  - [ ] Add font-display: swap (already done ✅)

- [ ] **Compress images**
  ```bash
  # Install optimization tools if available
  find assets/images -name "*.jpg" -exec jpegoptim --max=85 {} \;
  find assets/images -name "*.png" -exec optipng -o5 {} \;
  ```

- [ ] **Test performance improvements**
  - [ ] Run Lighthouse audit
  - [ ] Check Core Web Vitals

---

## 🟢 LOW PRIORITY (Week 3-4)

### ✅ Accessibility Enhancements
**Timeline**: Week 3  
**Estimated Time**: 2-3 hours  

- [ ] **Audit current accessibility**
  - [ ] Check alt texts on images
  - [ ] Verify heading structure
  - [ ] Test keyboard navigation

- [ ] **Add missing alt texts**
  ```html
  <img src="image.jpg" alt="Descriptive text here">
  ```

- [ ] **Implement skip navigation links**
  ```html
  <a class="skip-link" href="#main-content">Skip to main content</a>
  ```

- [ ] **Test with screen reader**

### ✅ Code Documentation
**Timeline**: Week 4  
**Estimated Time**: 2-3 hours  

- [ ] **Add comments to SCSS files**
  ```scss
  /* Component: Header Navigation */
  .site-header {
    /* Header styles */
  }
  ```

- [ ] **Document JavaScript functions**
  ```javascript
  /**
   * Toggle dark/light theme
   * @param {string} theme - 'dark' or 'light'
   */
  function toggleTheme(theme) {
    // Function implementation
  }
  ```

- [ ] **Create style guide documentation**
  ```markdown
  # Style Guide
  ## Colors
  ## Typography  
  ## Components
  ```

---

## 🧪 TESTING CHECKLIST

### After Each Major Fix
- [ ] **Local build test**
  ```bash
  bundle exec jekyll build --verbose
  ```

- [ ] **Local serve test**
  ```bash
  bundle exec jekyll serve --host 0.0.0.0 --port 4000
  ```

- [ ] **Check for build warnings/errors**

### Before Deployment
- [ ] **Production build simulation**
  ```bash
  JEKYLL_ENV=production bundle exec jekyll build
  ```

- [ ] **Validate HTML**
  - [ ] W3C Markup Validator
  - [ ] Check for broken links

- [ ] **Test responsive design**
  - [ ] Mobile (375px)
  - [ ] Tablet (768px)  
  - [ ] Desktop (1200px+)

- [ ] **Cross-browser testing**
  - [ ] Chrome/Edge
  - [ ] Firefox
  - [ ] Safari (if available)

### Performance Validation
- [ ] **Lighthouse audit** (target: 90+ scores)
- [ ] **Core Web Vitals check**
  - [ ] LCP < 2.5s
  - [ ] FID < 100ms
  - [ ] CLS < 0.1

---

## 📊 PROGRESS TRACKING

| Task | Priority | Status | Date Started | Date Completed | Notes |
|------|----------|--------|--------------|----------------|-------|
| Liquid Syntax Fix | 🔴 Critical | ⏳ Pending | | | Korean→English variables |
| Analytics Include | 🔴 Critical | ⏳ Pending | | | Create missing file |
| Sample Posts | 🟠 High | ⏳ Pending | | | Add welcome post |
| Image Cleanup | 🟠 High | ⏳ Pending | | | Remove duplicates |
| Log File Cleanup | 🟡 Medium | ⏳ Pending | | | Update .gitignore |
| Performance Opt | 🟡 Medium | ⏳ Pending | | | Phase 1 optimizations |
| Accessibility | 🟢 Low | ⏳ Pending | | | Alt texts, navigation |
| Documentation | 🟢 Low | ⏳ Pending | | | Code comments |

---

## 🚀 DEPLOYMENT PLAN

### Pre-deployment Testing
1. **Local verification** (all tests pass)
2. **Staging branch testing** (optional)
3. **Final performance audit**

### Deployment Steps
1. **Commit all changes to main branch**
2. **Push to GitHub repository**
3. **Monitor GitHub Actions build**
4. **Verify live site deployment**
5. **Post-deployment testing**

### Post-deployment Monitoring
- [ ] **Check site accessibility** (first 24 hours)
- [ ] **Monitor performance metrics** (first week)
- [ ] **Watch for build errors** (ongoing)
- [ ] **User feedback collection** (first month)

---

## 📞 SUPPORT RESOURCES

### Documentation
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Liquid Template Language](https://shopify.github.io/liquid/)

### Testing Tools
- [W3C Markup Validator](https://validator.w3.org/)
- [Lighthouse](https://lighthouse-dot-webdotdevsite.appspot.com//)
- [Web.dev Measure Tool](https://web.dev/measure/)

### Emergency Contacts
- **Backup Plan**: Revert to previous working commit
- **Rollback Command**: `git revert HEAD~1`

---

**Last Updated**: 2025-08-01  
**Next Review**: After each phase completion