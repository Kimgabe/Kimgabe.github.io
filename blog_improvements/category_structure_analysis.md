# 실제 카테고리 구조 분석

## 작성일: 2025-01-19

---

## 1. 실제 게시물 카테고리 구조

### 1.1 확인된 카테고리 패턴

#### A. Personal Study 계열
```yaml
categories:
  - [personal-study, numpy]     # NumPy 관련 글
  - [personal-study, pandas]   # Pandas 관련 글
  - [personal-study, python]   # Python 관련 글
  - [personal-study, preprocessing] # 전처리 관련 글
  - [personal-study, cheat-sheet]   # 치트시트
```

#### B. AI Journey 계열
```yaml
categories:
  - [gabe-ai-journey, reviews]      # 리뷰 및 후기
  - [gabe-ai-journey, retrospective] # 회고록
```

#### C. Portfolio 계열
```yaml
categories:
  - [portfolio]     # 단일 카테고리
```

### 1.2 현재 메뉴 vs 실제 구조 비교

#### 현재 메뉴 설정 (_config.yml)
```yaml
posts:
  Programming: /categories/personal-study/ || code
  Data Science: /categories/personal-study/ || chart-bar  
  AI Journey: /categories/gabe-ai-journey/ || brain
  Career: /categories/personal-study/ || briefcase
  Portfolio: /categories/portfolio/ || folder-open
```

#### 문제점
1. **Programming, Data Science, Career**가 모두 같은 URL로 연결됨
2. **실제 하위 카테고리 구조가 반영되지 않음**
3. **URL 구조와 표시명이 불일치**

---

## 2. 올바른 카테고리 구조 설계

### 2.1 논리적 구조
```
Personal Study
├── Programming
│   ├── Python (/categories/personal-study/python/)
│   ├── NumPy (/categories/personal-study/numpy/)
│   └── Pandas (/categories/personal-study/pandas/)
├── Data Science
│   ├── Preprocessing (/categories/personal-study/preprocessing/)
│   ├── Visualization (/categories/personal-study/visualization/)
│   └── Deep Learning (/categories/personal-study/deep-learning/)
└── Resources
    └── Cheat Sheet (/categories/personal-study/cheat-sheet/)

AI Journey
├── Reviews (/categories/gabe-ai-journey/reviews/)
└── Retrospective (/categories/gabe-ai-journey/retrospective/)

Portfolio (/categories/portfolio/)
```

### 2.2 수정이 필요한 메뉴 구조
```yaml
posts:
  default: / || feather
  archives: /archives/ || list-alt
  categories: /categories/ || th
  programming:
    default: /categories/personal-study/ || code
    python: /categories/personal-study/python/ || code
    numpy: /categories/personal-study/numpy/ || code
    pandas: /categories/personal-study/pandas/ || code
  data-science:
    default: /categories/personal-study/ || chart-bar
    preprocessing: /categories/personal-study/preprocessing/ || filter
    visualization: /categories/personal-study/visualization/ || chart-line
    deep-learning: /categories/personal-study/deep-learning/ || brain
  ai-journey:
    default: /categories/gabe-ai-journey/ || rocket
    reviews: /categories/gabe-ai-journey/reviews/ || star
    retrospective: /categories/gabe-ai-journey/retrospective/ || clock
  portfolio: /categories/portfolio/ || folder-open
  tags: /tags/ || tags
```

---

## 3. 템플릿 파일 분석

### 3.1 category.pug 문제점
- **시간순 정렬만 지원**: 카테고리별 그룹핑 없음
- **단순 리스트 형태**: 카드 형태 썸네일 미지원
- **스타일링 부족**: 시각적 위계 표현 부족

### 3.2 필요한 개선사항
1. **카드 형태 레이아웃** 적용
2. **하위 카테고리별 그룹핑** 구현
3. **썸네일 이미지** 표시
4. **브레드크럼 개선**

---

## 4. 다음 작업 단계

### 4.1 메뉴 구조 수정
- [ ] `_config.yml` 메뉴 구조 재설계
- [ ] `themes/shokax/_config.yml` 동기화

### 4.2 카테고리 페이지 개선
- [ ] categories 목록 페이지 생성/수정
- [ ] category 개별 페이지 개선
- [ ] CSS 스타일링 추가

### 4.3 테스트 및 검증
- [ ] 빌드 테스트
- [ ] 네비게이션 테스트
- [ ] 반응형 테스트

---

*이 문서는 수정 작업 진행에 따라 업데이트됩니다.* 