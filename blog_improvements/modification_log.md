# 블로그 카테고리 구조 개선 - 수정 로그

## 2025-01-19 최종 메뉴 구조 개선

### ✅ **카테고리 재분류 및 메뉴 구조 개편**
**파일**: `_config.yml`, `themes/shokax/_config.yml`
- 전체 카테고리 분석 후 5개 상위 카테고리로 재분류:
  - 💻 **Programming**: python
  - 📊 **Data Science**: pandas, numpy, preprocessing, visualization  
  - 🧠 **AI & ML**: deep-learning
  - 📝 **Growth & Career**: reviews, retrospective
  - 💼 **Portfolio**: portfolio

### ✅ **Posts 하위 메뉴 구조 구현**
**변경사항**:
- **이전**: Posts와 동일한 레벨에 programming, data-science 등이 위치
- **개선**: Posts 하위에 Categories + 상위 카테고리들이 계층적으로 배치
```yaml
Posts
├── Categories
├── Programming
│   └── Python
├── Data Science  
│   ├── Pandas
│   ├── Numpy
│   ├── Preprocessing
│   └── Visualization
├── AI & ML
│   └── Deep Learning
├── Growth & Career
│   ├── Reviews
│   └── Retrospective
├── Portfolio
└── Archives
```

### ✅ **카테고리 페이지 템플릿 재구성**
**파일**: `themes/shokax/layout/page.pug`
- 새로운 5개 섹션으로 재구성
- 각 섹션별 적절한 이모지 적용
- 카테고리별 세분화된 분류 로직

### ✅ **CSS 스타일 추가**
**파일**: `themes/shokax/source/css/categories.styl`
- `.ai-ml-card`: 보라색 테마 (#9b59b6)
- `.growth-card`: 청록색 테마 (#4ecdc4)  
- 기존 스타일들 유지

---

## 2025-01-19 추가 개선사항

### ✅ **카테고리 페이지 이모지 적용**
**파일**: `themes/shokax/layout/page.pug`
- 상위 카테고리 제목에 이모지 추가
  - 📚 Personal Study
  - 🚀 AI Journey  
  - 📂 Other Categories
- 각 카테고리 카드에 적절한 이모지 적용
  - 🐍 Python, 🔢 Numpy, 🐼 Pandas
  - 🔧 Preprocessing, 📊 Visualization, 🧠 Deep Learning
  - ⭐ Reviews, 🔄 Retrospective
  - 💼 Portfolio, 🗄️ SQL

### ✅ **카테고리 페이지 CSS 개선**
**파일**: `themes/shokax/source/css/categories.styl`
- 상위 카테고리 제목 줄바꿈 방지 (`white-space: nowrap`)
- 이모지 스타일링 추가 (`.emoji`, `.card-emoji`)
- 카테고리 카드 이모지 크기 조정

### ✅ **Pug 템플릿 오류 수정**
**파일**: `themes/shokax/layout/category.pug`
- 객체 리터럴 문법 오류 수정
- 개별 변수로 분리하여 이미지 URL 관리
- SQL, Python, Data Science별 썸네일 이미지 자동 설정

### ✅ **타임라인 스타일 완전 제거**
**파일**: `themes/shokax/source/css/category-page.styl`
- `collapse.styl`의 `.item::before`, `.item::after` 스타일 무력화
- 빨간 점과 수직 점선 완전 제거
- 모든 타임라인 관련 시각적 요소 차단

---

## 이전 수정사항 (2025-01-19)

### ✅ **카테고리 메뉴 구조 개선**
**파일**: `_config.yml`, `themes/shokax/_config.yml`
- 계층적 메뉴 구조 적용
- 드롭다운 메뉴로 Programming, Data Science, AI Journey 그룹화

### ✅ **메뉴 템플릿 재작성**
**파일**: `themes/shokax/layout/_partials/sidebar/menu.pug`
- 새로운 계층적 구조 처리 로직
- 하위 메뉴 렌더링 개선

### ✅ **카테고리 페이지 템플릿 생성**
**파일**: `themes/shokax/layout/categories.pug` (삭제됨)
**파일**: `themes/shokax/layout/page.pug` (수정됨)
- 2-3열 카드 그리드 레이아웃
- 상위 카테고리별 섹션 분리
- 카테고리별 색상 코딩

### ✅ **카테고리 페이지 스타일링**
**파일**: `themes/shokax/source/css/categories.styl`
- 카드 기반 그리드 레이아웃
- 호버 효과 및 그라데이션 아이콘
- 반응형 디자인 (데스크톱 3열 → 태블릿 2열 → 모바일 1열)
- 카테고리별 색상 테마:
  - Programming: 파랑 (#007acc)
  - Data Science: 빨강 (#ff6b6b)
  - AI Journey: 청록 (#4ecdc4)
  - Portfolio: 노랑 (#feca57)
  - SQL: 주황 (#e67e22)
  - 기타: 회색 (#95a5a6)

### ✅ **개별 카테고리 페이지 개선**
**파일**: `themes/shokax/layout/category.pug`
- Home 화면과 동일한 카드 형태 적용
- 하위 카테고리별 그룹핑
- 썸네일 이미지 최적화 (object-fit: cover)
- 카드 내용: 썸네일, 제목, 날짜, 카테고리 태그, 요약, 해시태그

### ✅ **개별 카테고리 페이지 스타일링**
**파일**: `themes/shokax/source/css/category-page.styl`
- 모던 카드 디자인
- 이미지 최적화 (고정 높이 200px, object-fit: cover)
- 반응형 그리드 레이아웃
- 태그 및 메타데이터 스타일링

### ✅ **CSS 통합**
**파일**: `themes/shokax/source/css/app.styl`
- 카테고리 관련 CSS 파일들 메인 앱에 포함
- `categories.styl`, `category-page.styl` import 추가

### ✅ **AdSense 연동**
**파일**: `_config.yml`, `themes/shokax/_config.yml`
- Google AdSense 설정 추가
- 테마 설정 오버라이드 방식 적용

---

## 🎯 **최종 결과**

### **메인 카테고리 페이지** (`/categories/`)
- ✅ 📚 Personal Study → 🐍 Python, 🔢 Numpy, 🐼 Pandas, 🔧 Preprocessing, 📊 Visualization, 🧠 Deep Learning
- ✅ 🚀 AI Journey → ⭐ Reviews, 🔄 Retrospective  
- ✅ 📂 Other Categories → 💼 Portfolio, 🗄️ SQL, 기타
- ✅ 2-3열 카드 그리드 레이아웃
- ✅ 색상 코딩 및 호버 효과
- ✅ 이모지 기반 시각적 구분

### **개별 카테고리 페이지** (예: `/categories/python/`)
- ✅ Home 화면과 동일한 모던 카드 형태
- ✅ 썸네일 이미지 자동 최적화
- ✅ 타임라인 스타일 완전 제거
- ✅ 하위 카테고리별 그룹핑
- ✅ 반응형 디자인

### **상단 메뉴**
- ✅ 계층적 드롭다운 구조
- ✅ Programming, Data Science, AI Journey 그룹화
- ✅ 직관적인 네비게이션

---

## 📁 **수정된 파일 목록**

### **설정 파일**
- `_config.yml` - 메인 Hexo 설정, 메뉴 구조, AdSense
- `themes/shokax/_config.yml` - 테마 설정 동기화

### **템플릿 파일**
- `themes/shokax/layout/page.pug` - 카테고리 페이지 템플릿
- `themes/shokax/layout/category.pug` - 개별 카테고리 페이지 템플릿
- `themes/shokax/layout/_partials/sidebar/menu.pug` - 메뉴 템플릿
- `source/categories/index.md` - 카테고리 인덱스 페이지

### **스타일 파일**
- `themes/shokax/source/css/categories.styl` - 메인 카테고리 페이지 스타일
- `themes/shokax/source/css/category-page.styl` - 개별 카테고리 페이지 스타일
- `themes/shokax/source/css/app.styl` - CSS 통합 설정

### **기타**
- `source/ads.txt` - AdSense 인증 파일

---

## 🚀 **접속 방법**

```
메인 카테고리 페이지: http://localhost:5000/categories/
개별 카테고리 예시:
- Programming: http://localhost:5000/categories/python/
- Data Science: http://localhost:5000/categories/pandas/, http://localhost:5000/categories/visualization/
- AI & ML: http://localhost:5000/categories/deep-learning/
- Growth: http://localhost:5000/categories/reviews/, http://localhost:5000/categories/retrospective/
- Portfolio: http://localhost:5000/categories/portfolio/
```

## 🎯 **최종 완성된 메뉴 구조**

### **🖥️ 상단 네비게이션**
```
Home | Posts ▼ | Tags
         ├── Categories
         ├── Programming ▶ Python
         ├── Data Science ▶ Pandas, Numpy, Preprocessing, Visualization  
         ├── AI & ML ▶ Deep Learning
         ├── Growth & Career ▶ Reviews, Retrospective
         ├── Portfolio
         └── Archives
```

### **📄 카테고리 페이지 구조**
```
💻 Programming
└── 🐍 Python

📊 Data Science  
├── 🐼 Pandas
├── 🔢 Numpy
├── 🔧 Preprocessing
└── 📈 Visualization

🧠 AI & Machine Learning
└── 🧠 Deep Learning

📝 Growth & Career
├── ⭐ Reviews  
└── 🔄 Retrospective

💼 Portfolio
└── 💼 Portfolio
``` 