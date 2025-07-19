#!/usr/bin/env python3
import os
import re
import yaml
from pathlib import Path

def extract_frontmatter(content):
    """Extract frontmatter from markdown content"""
    if not content.startswith('---'):
        return None, content
    
    parts = content.split('---', 2)
    if len(parts) < 3:
        return None, content
    
    try:
        frontmatter = yaml.safe_load(parts[1])
        return frontmatter, parts[2]
    except:
        return None, content

def generate_tags_from_categories(categories):
    """Generate tags based on categories"""
    tags = []
    
    if isinstance(categories, list):
        for cat in categories:
            if isinstance(cat, list):
                # Handle nested categories like [personal-study, python]
                for subcat in cat:
                    if subcat == 'personal-study':
                        tags.extend(['python', 'data-science', 'programming', 'learning'])
                    elif subcat == 'python':
                        tags.extend(['python', 'programming', 'coding'])
                    elif subcat == 'numpy':
                        tags.extend(['numpy', 'scientific-computing', 'arrays'])
                    elif subcat == 'pandas':
                        tags.extend(['pandas', 'data-analysis', 'dataframe'])
                    elif subcat == 'visualization':
                        tags.extend(['matplotlib', 'visualization', 'plotting'])
                    elif subcat == 'preprocessing':
                        tags.extend(['preprocessing', 'data-cleaning', 'feature-engineering'])
                    elif subcat == 'deep-learning':
                        tags.extend(['deep-learning', 'neural-networks', 'AI'])
                    elif subcat == 'gabe-ai-journey':
                        tags.extend(['AI-journey', 'learning', 'growth'])
                    elif subcat == 'reviews':
                        tags.extend(['review', 'experience', 'insights'])
                    elif subcat == 'retrospective':
                        tags.extend(['retrospective', 'reflection', 'growth'])
                    elif subcat == 'portfolio':
                        tags.extend(['portfolio', 'project', 'showcase'])
                    elif subcat == 'sql':
                        tags.extend(['sql', 'database', 'query'])
                    elif subcat == 'career':
                        tags.extend(['career', 'development', 'growth'])
            else:
                # Handle single category strings
                if cat == 'personal-study':
                    tags.extend(['study', 'learning', 'personal-development'])
    
    # Remove duplicates and return unique tags
    return list(set(tags))

def generate_tags_from_title(title):
    """Generate tags based on title content"""
    tags = []
    
    # Convert to lowercase for matching
    title_lower = title.lower()
    
    # Common patterns in titles
    if 'numpy' in title_lower:
        tags.extend(['numpy', 'scientific-computing'])
    if 'pandas' in title_lower:
        tags.extend(['pandas', 'data-analysis'])
    if 'matplotlib' in title_lower:
        tags.extend(['matplotlib', 'visualization'])
    if 'python' in title_lower or '파이썬' in title_lower:
        tags.extend(['python', 'programming'])
    if 'sql' in title_lower:
        tags.extend(['sql', 'database'])
    if 'eda' in title_lower:
        tags.extend(['EDA', 'data-analysis', 'exploration'])
    if 'kaggle' in title_lower:
        tags.extend(['kaggle', 'competition', 'data-science'])
    if '회고' in title or 'retrospective' in title_lower:
        tags.extend(['retrospective', 'reflection'])
    if '예측' in title or 'prediction' in title_lower:
        tags.extend(['prediction', 'machine-learning'])
    if '분류' in title or 'classification' in title_lower:
        tags.extend(['classification', 'machine-learning'])
    
    return tags

def process_markdown_file(file_path):
    """Process a single markdown file to add tags"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        frontmatter, body = extract_frontmatter(content)
        if not frontmatter:
            print(f"No frontmatter found in {file_path}")
            return False
        
        # Check if tags exist and are empty
        current_tags = frontmatter.get('tags', [])
        if current_tags and len(current_tags) > 0:
            print(f"Tags already exist in {file_path}, skipping...")
            return False
        
        # Generate tags from categories and title
        categories = frontmatter.get('categories', [])
        title = frontmatter.get('title', '')
        
        new_tags = []
        new_tags.extend(generate_tags_from_categories(categories))
        new_tags.extend(generate_tags_from_title(title))
        
        # Remove duplicates and limit to 10 tags
        new_tags = list(set(new_tags))[:10]
        
        if new_tags:
            frontmatter['tags'] = new_tags
            
            # Reconstruct the file
            new_content = '---\n' + yaml.dump(frontmatter, allow_unicode=True, default_flow_style=False) + '---' + body
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f"✅ Added {len(new_tags)} tags to {file_path}")
            print(f"   Tags: {', '.join(new_tags)}")
            return True
        else:
            print(f"❌ No tags generated for {file_path}")
            return False
            
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all markdown files"""
    posts_dir = Path('source/_posts')
    
    if not posts_dir.exists():
        print("❌ Posts directory not found!")
        return
    
    markdown_files = list(posts_dir.glob('*.md'))
    print(f"🔍 Found {len(markdown_files)} markdown files")
    
    processed = 0
    for file_path in markdown_files:
        if process_markdown_file(file_path):
            processed += 1
    
    print(f"\n✨ Processed {processed} files successfully!")

if __name__ == '__main__':
    main() 