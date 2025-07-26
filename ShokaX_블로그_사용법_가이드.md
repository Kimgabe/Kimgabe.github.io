# 📝 **ShokaX 블로그 사용법 가이드**

## **🎯 개요**

이 문서는 ShokaX Hexo 테마 기반 블로그의 기본 사용법을 정리한 가이드입니다.
새로운 포스트 작성부터 이미지 관리까지 블로그 운영에 필요한 모든 내용을 다룹니다.

---

## **📁 1. 블로그 디렉토리 구조**

```
Kimgabe-shokax-new/
├── 📁 source/              # 소스 파일들
│   ├── 📁 _posts/          # 블로그 포스트들 (여기에 새 글 작성!)
│   ├── 📁 images/          # 이미지 파일들
│   ├── 📁 _data/           # 데이터 파일들
│   ├── 📄 ads.txt          # AdSense 설정
│   └── 📄 robots.txt       # SEO 설정
├── 📁 themes/shokax/       # ShokaX 테마
├── 📁 scaffolds/           # 포스트 템플릿
├── 📄 _config.yml          # Hexo 기본 설정
├── 📄 package.json         # 프로젝트 의존성
└── 📁 node_modules/        # 설치된 패키지들
```

---

## **✍️ 2. 새 포스트 작성하기**

### **🔥 방법 1: Hexo 명령어 사용 (추천)**

```bash
# 프로젝트 디렉토리로 이동
cd F:\OneDrive\kimgabe\Kimgabe-shokax-blog\Kimgabe-shokax-new

# 새 포스트 생성
hexo new "포스트 제목"

# 특정 카테고리로 생성
hexo new post "포스트 제목" --path categories/personal-study/python/new-post
```

### **🔧 방법 2: 직접 파일 생성**

**위치:** `source/_posts/` 폴더에 직접 `.md` 파일 생성

---

## **📝 3. 파일명 규칙**

### **✅ 권장 파일명 패턴**
```
YYYY-MM-DD-제목.md
```

### **📋 실제 예시**
```bash
2023-11-22-판다스에서_axis_톺아보기.md
2023-09-07-매일 코딩 테스트 Day 1.md
2023-12-04-Convolution_알아보기.md
```

### **🎯 파일명 작성 팁**
- **날짜 형식**: `YYYY-MM-DD-` (필수)
- **제목**: 한글, 영문, 숫자 모두 가능
- **특수문자**: 언더스코어(`_`), 하이픈(`-`), 공백 사용 가능
- **확장자**: 반드시 `.md`

---

## **🏷️ 4. 메타데이터 (Front Matter) 구조**

### **📌 기본 구조**
```yaml
---
title: "포스트 제목"
cover: "이미지 URL 또는 경로"
date: YYYY-MM-DD
categories:
  - [대분류, 소분류]
tags:
  - 태그1
  - 태그2
toc: true
---

여기에 포스트 내용을 작성합니다.
```

### **🎨 실제 예시**
```yaml
---
title: "[Pandas] 예제코드로 보는 axis 옵션 톺아보기"
cover: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1920&h=1080&fit=crop"
date: 2023-11-22
categories:
  - [programming, pandas]
tags:
  - pandas
  - axis
  - 라이브러리
toc: true
---

## 포스트 내용 시작
```

### **📋 메타데이터 필드 설명**

| 필드 | 필수여부 | 설명 | 예시 |
|------|----------|------|------|
| `title` | ✅ 필수 | 포스트 제목 | `"[Python] 기초 문법 정리"` |
| `cover` | 🔶 선택 | 커버 이미지 URL | `"https://example.com/image.jpg"` |
| `date` | ✅ 필수 | 작성 날짜 | `2023-11-22` |
| `categories` | 🔶 권장 | 카테고리 계층 | `- [personal-study, python]` |
| `tags` | 🔶 선택 | 태그 목록 | `- python`, `- 기초` |
| `toc` | 🔶 선택 | 목차 표시 여부 | `true` 또는 `false` |

---

## **🎯 5. 카테고리 구조 가이드**

### **📚 현재 카테고리 구조**
```yaml
# Data Science (데이터 분석 방법론)
categories: [data-science, preprocessing]
categories: [data-science, statistics]
categories: [data-science, visualization]
categories: [data-science, eda-methods]

# Programming & Libraries (프로그래밍 & 라이브러리)
categories: [programming, python]
categories: [programming, algorithms]
categories: [programming, numpy]
categories: [programming, pandas]
categories: [programming, matplotlib]

# AI & Machine Learning (AI & 머신러닝)
categories: [ai-ml, ml-basics]
categories: [ai-ml, llm]
categories: [ai-ml, deep-learning]
categories: [ai-ml, computer-vision]
categories: [ai-ml, agents]

# Database (데이터베이스)
categories: [database, sql-basics]
categories: [database, sql-advanced]
categories: [database, nosql]

# Productivity (생산성 & 업무효율화)
categories: [productivity, automation]
categories: [productivity, dev-efficiency]
categories: [productivity, data-workflow]
categories: [productivity, workplace-tools]

# Portfolio (포트폴리오)
categories: [portfolio, ml-based]
categories: [portfolio, dl-based]
categories: [portfolio, data-analysis]

# Growth (성장)
categories: [growth, reviews]
categories: [growth, career]
```

### **✅ 카테고리 작성 예시**
```yaml
# ✅ 좋은 예시
categories:
  - [programming, python]          # Python 기초/고급 학습 포스트
  - [programming, pandas]           # Pandas 라이브러리 사용법
  - [data-science, preprocessing]   # 데이터 전처리 방법론
  - [ai-ml, deep-learning]          # 딥러닝 관련 포스트
  - [productivity, automation]      # 업무 자동화 도구/팁
  - [portfolio, prediction-models]  # 예측 모델 프로젝트

# ❌ 피해야 할 예시  
categories:
  - python                          # 대분류 없음
  - [programming]                   # 소분류 없음
  - [tools, automation]             # 존재하지 않는 구조 (tools → productivity)
```

---

## **🖼️ 6. 이미지 관리 가이드**

### **📁 이미지 저장 위치**
```
source/
├── images/                    # 이미지 메인 폴더
│   ├── 2023/                 # 연도별 폴더 (옵션)
│   │   ├── 11/              # 월별 폴더 (옵션)
│   │   └── 12/
│   ├── covers/              # 커버 이미지 전용
│   ├── posts/               # 포스트 내 이미지
│   └── icons/               # 아이콘 이미지
└── _posts/                   # 포스트 파일들
```

### **🔗 이미지 링크 방법**

#### **방법 1: 로컬 이미지 사용**
```markdown
# 1. 이미지를 source/images/ 폴더에 저장
# 2. 포스트에서 참조
![이미지 설명](/images/2023/11/sample-image.png)
![커버 이미지](/images/covers/python-cover.jpg)
```

#### **방법 2: 외부 이미지 사용 (권장)**
```yaml
# Front Matter에서
cover: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1920&h=1080&fit=crop"

# 포스트 내용에서
![Python Logo](https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg)
```

### **🎨 추천 이미지 소스**
- **Unsplash**: https://unsplash.com/ (무료 고화질)
- **Pixabay**: https://pixabay.com/ (무료)
- **Pexels**: https://www.pexels.com/ (무료)

---

## **⚙️ 7. 블로그 빌드 및 배포**

### **🔧 로컬 개발 서버 실행**
```bash
# 프로젝트 디렉토리로 이동
cd F:\OneDrive\kimgabe\Kimgabe-shokax-blog\Kimgabe-shokax-new

# 캐시 정리
hexo clean

# 로컬 서버 실행
hexo server
# 또는 포트 지정
hexo server --port 4043

# 브라우저에서 http://localhost:4043 접속
```

### **🚀 정적 파일 생성**
```bash
# 정적 파일 생성 (배포용)
hexo generate
# 또는 줄임말
hexo g

# 생성된 파일은 public/ 폴더에 저장됨
```

### **🔄 빠른 명령어 조합**
```bash
# 캐시 정리 → 생성 → 서버 실행
hexo clean && hexo generate && hexo server

# 또는 줄임말
hexo clean && hexo g && hexo s
```

---

## **📝 8. 포스트 작성 워크플로우**

### **🔄 추천 작업 순서**

```bash
# 1. 새 포스트 생성
hexo new "새로운 포스트 제목"

# 2. 생성된 파일 편집
# source/_posts/YYYY-MM-DD-새로운-포스트-제목.md

# 3. 메타데이터 작성
# - title, date, categories, tags 설정
# - cover 이미지 추가 (선택)

# 4. 포스트 내용 작성
# - 마크다운 문법 사용
# - 이미지, 코드 블록 등 추가

# 5. 로컬에서 미리보기
hexo clean && hexo server

# 6. 브라우저에서 확인
# http://localhost:4043

# 7. 최종 빌드 및 배포
hexo clean && hexo generate
```

---

## **🎨 9. 마크다운 작성 팁**

### **📋 기본 문법**
```markdown
# 제목 1
## 제목 2  
### 제목 3

**굵은 글씨**
*기울임*
~~취소선~~

- 목록 항목 1
- 목록 항목 2

1. 순서 목록 1
2. 순서 목록 2

[링크 텍스트](https://example.com)

![이미지](이미지_URL)
```

### **💻 코드 블록**
````markdown
```python
def hello_world():
    print("Hello, World!")
```
````

### **📊 표 작성**
```markdown
| 항목 | 설명 | 예시 |
|------|------|------|
| 데이터 | 설명 | 예시 |
```

---

## **🚨 10. 주의사항 및 문제해결**

### **⚠️ 피해야 할 것들**
- ❌ 파일명에 특수문자 (`<>:"/\|?*`) 사용 금지
- ❌ 메타데이터에서 YAML 문법 오류
- ❌ 이미지 파일 누락
- ❌ 카테고리 구조 불일치

### **🔧 자주 발생하는 문제**

#### **문제 1: 포스트가 표시되지 않음**
```bash
# 해결책: 캐시 정리 후 재생성
hexo clean && hexo generate && hexo server
```

#### **문제 2: 이미지가 깨져 보임**
```markdown
# 해결책: 절대 경로 사용
![이미지](/images/sample.jpg)  # ✅ 올바름
![이미지](images/sample.jpg)   # ❌ 상대경로
```

#### **문제 3: 카테고리가 잘못 표시됨**
```yaml
# 해결책: 올바른 YAML 배열 형식 사용
categories:
  - [programming, python-basics]  # ✅ 올바름
  - [productivity, automation]    # ✅ 올바름
categories: [python]             # ❌ 대분류 누락
categories: [tools, automation]  # ❌ 구조 변경됨 (tools → productivity)
```

---

## **🎯 11. 빠른 참조 (Quick Reference)**

### **📝 새 포스트 작성 체크리스트**
- [ ] 파일명: `YYYY-MM-DD-제목.md` 형식
- [ ] 위치: `source/_posts/` 폴더
- [ ] 메타데이터: title, date, categories 필수
- [ ] 카테고리: 위 구조에서 선택하여 작성 (대분류/소분류 필수)
- [ ] 커버 이미지: 외부 URL 사용 권장
- [ ] 로컬 테스트: `hexo server`로 확인

### **🎯 카테고리 선택 가이드**
포스트 작성 시 아래 카테고리 중에서 선택하세요:

**📊 Data Science**: `data-science` → `preprocessing`, `statistics`, `visualization`, `eda-methods`
**💻 Programming**: `programming` → `python`, `algorithms`, `numpy`, `pandas`, `matplotlib`
**🤖 AI/ML**: `ai-ml` → `ml-basics`, `llm`, `deep-learning`, `computer-vision`, `agents`  
**🗄️ Database**: `database` → `sql-basics`, `sql-advanced`, `nosql`
**⚡ Productivity**: `productivity` → `automation`, `dev-efficiency`, `data-workflow`, `workplace-tools`
**📁 Portfolio**: `portfolio` → `prediction-models`, `full-stack-projects`, `eda-projects`, `classification`
**📈 Growth**: `growth` → `reviews`, `career`

### **🎯 카테고리 선택 기준**
- **Data Science**: 데이터 분석 방법론, 통계 기법, 시각화 방법
- **Programming**: 프로그래밍 언어 문법, 라이브러리 사용법, 알고리즘
- **Productivity**: 업무 효율화, 자동화 도구, 개발 생산성 향상
- **Portfolio**: 완성된 프로젝트, 실제 구현 결과물

### **⚡ 자주 사용하는 명령어**
```bash
# 새 포스트 생성
hexo new "포스트 제목"

# 로컬 서버 실행  
hexo clean && hexo server --port 4043

# 정적 파일 생성
hexo clean && hexo generate

# 도움말
hexo help
```

### **🔗 유용한 링크**
- **ShokaX 공식 문서**: https://shoka.lostyu.me/
- **Hexo 공식 문서**: https://hexo.io/docs/
- **마크다운 가이드**: https://www.markdownguide.org/

---

## **🎉 완료!**

이제 ShokaX 블로그에서 새로운 포스트를 작성하고 관리할 수 있습니다!

**다음 명령어로 새 포스트를 시작해보세요:**
```bash
cd F:\OneDrive\kimgabe\Kimgabe-shokax-blog\Kimgabe-shokax-new
hexo new "나의 첫 번째 ShokaX 포스트"
```

**Happy Blogging! 🚀** 