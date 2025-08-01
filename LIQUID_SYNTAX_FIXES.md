# Liquid Syntax Error Fixes

**Issue**: Critical build failures due to Korean variable names and incorrect date formatting in Liquid templates.

## 🔍 Detected Errors

### Error Pattern 1: Date Format Syntax
```liquid
# ❌ Incorrect (causing build failure)
{{date:YYYY-MM-DD}}

# ✅ Correct 
{{ page.date | date: "%Y-%m-%d" }}
# OR
{{ "now" | date: "%Y-%m-%d" }}
```

### Error Pattern 2: Korean Variable Names
```liquid
# ❌ Incorrect (causing build failure)
{{분야}}
{{핵심키워드}}
{{연도}}
{{중요도}}

# ✅ Correct English equivalents
{{category}}
{{keywords}}
{{year}}
{{importance}}
```

## 🛠️ Fix Implementation

### Step 1: Create Variable Mapping
Create a data file `_data/translations.yml`:
```yaml
# Korean to English variable mapping
category: "분야"
keywords: "핵심키워드" 
year: "연도"
importance: "중요도"
```

### Step 2: Update Front Matter Templates
For any markdown files with Korean variables, update front matter:
```yaml
---
title: "Post Title"
category: "data-science"  # instead of 분야
keywords: ["python", "analysis"]  # instead of 핵심키워드
year: 2024  # instead of 연도
importance: "high"  # instead of 중요도
---
```

### Step 3: Fix Date Formatting
Replace all date format strings:
```liquid
# Find and replace patterns
{{date:YYYY-MM-DD}} → {{ page.date | date: "%Y-%m-%d" }}
{{date:DD/MM/YYYY}} → {{ page.date | date: "%d/%m/%Y" }}
{{date:Month DD, YYYY}} → {{ page.date | date: "%B %d, %Y" }}
```

### Step 4: Search and Replace Commands
Use these commands to find affected files:
```bash
# Find files with Korean Liquid variables
grep -r "{{분야}}" . --include="*.md" --include="*.html"
grep -r "{{핵심키워드}}" . --include="*.md" --include="*.html"
grep -r "{{연도}}" . --include="*.md" --include="*.html"
grep -r "{{중요도}}" . --include="*.md" --include="*.html"

# Find files with incorrect date format
grep -r "{{date:" . --include="*.md" --include="*.html"
```

## ✅ Verification Steps

1. **Build Test**: `bundle exec jekyll build --verbose`
2. **Check for Warnings**: Look for Liquid syntax warnings in output
3. **Local Preview**: `bundle exec jekyll serve`
4. **Validate Output**: Check generated HTML for proper variable substitution