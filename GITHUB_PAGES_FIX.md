# GitHub Pages 호환성 수정사항

## 수정 내용

### 1. baseurl 설정 변경
```yaml
# 변경 전
baseurl: "/"

# 변경 후  
baseurl: ""
```
- GitHub Pages에서 더 안정적인 링크 생성을 위해 빈 문자열로 변경

### 2. jekyll-algolia 플러그인 제거
```yaml
# 제거된 항목
plugins:
  # - jekyll-algolia  # GitHub Pages에서 지원하지 않음

whitelist:
  # - jekyll-algolia  # 제거
```
- GitHub Pages의 화이트리스트에 포함되지 않은 플러그인 제거
- 검색 기능은 기본 lunr 검색으로 유지

### 3. kramdown block_html 설정 제거
```yaml
# 제거된 설정
# block_html: true
```
- GitHub Pages의 보안 정책에 따라 block_html 설정 제거

## 호환 가능한 플러그인 (유지됨)

✅ **지원되는 플러그인들:**
- jekyll-paginate
- jekyll-sitemap  
- jekyll-gist
- jekyll-feed
- jemoji
- jekyll-include-cache

## 배포 테스트 방법

로컬에서 GitHub Pages와 동일한 환경으로 테스트:

```bash
# GitHub Pages gem 설치
gem install github-pages

# 로컬 서버 실행
bundle exec jekyll serve
```

## 결과

이러한 수정으로 Jekyll 블로그가 GitHub Pages에서 안정적으로 배포될 것으로 예상됩니다. 