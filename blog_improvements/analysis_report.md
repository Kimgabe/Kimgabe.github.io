# 블로그 카테고리 구조 개선 분석 보고서

## 작성일: 2025-01-19
## 작성자: Claude Assistant

---

## 1. 현재 상황 분석

### 1.1 발견된 문제점들

#### A. 메뉴 구조 문제
- **현재 설정 (_config.yml)**:
  ```yaml
  menu:
    home: / || home
    posts:
      default: / || feather
      archives: /archives/ || list-alt
      categories: /categories/ || th
      Programming: /categories/personal-study/ || code
      Data Science: /categories/personal-study/ || chart-bar  
      AI Journey: /categories/gabe-ai-journey/ || brain
      Career: /categories/personal-study/ || briefcase
      Portfolio: /categories/portfolio/ || folder-open
      tags: /tags/ || tags
  ```

- **문제점**:
  1. Programming, Data Science, Career가 모두 같은 `/categories/personal-study/`로 링크됨
  2. 실제 하위 카테고리 구조가 반영되지 않음 
  3. 카테고리명이 대문자로 설정되어 있지만 URL은 소문자 구조
  4. 순서가 논리적이지 않음

#### B. 카테고리 페이지 표시 문제
- **현재 템플릿**: `themes/shokax/layout/category.pug`
- **문제점**:
  1. 단순 텍스트 나열 방식
  2. 위계구조 시각화 부족
  3. CSS 스타일링 미흡
  4. 1열 구조로 공간 활용 비효율

#### C. 세부 카테고리 페이지 문제
- **문제점**:
  1. 시간순 정렬로만 표시됨
  2. 하위 카테고리별 그룹핑 없음
  3. 썸네일 카드 형태 미적용
  4. 카테고리 위계 표시 부족

---

## 2. 실제 카테고리 구조 확인

### 2.1 디렉토리 구조
```
source/categories/
├── deep-learning/
├── gabe-ai-journey/
├── numpy/
├── pandas/
├── personal-study/
├── portfolio/
├── preprocessing/
├── python/
├── retrospective/
├── reviews/
└── visualization/
```

### 2.2 논리적 상위-하위 구조 (추정)
```
Personal Study (personal-study)
├── Programming
│   ├── Python (python)
│   ├── NumPy (numpy)
│   └── Pandas (pandas)
├── Data Science
│   ├── Preprocessing (preprocessing)
│   ├── Visualization (visualization)
│   └── Deep Learning (deep-learning)

AI Journey (gabe-ai-journey)
├── Reviews (reviews)
└── Retrospective (retrospective)

Portfolio (portfolio)
```

---

## 3. 수정 필요 사항

### 3.1 메뉴 구조 개선
- [ ] 실제 카테고리 구조에 맞게 메뉴 재구성
- [ ] 대문자 표시 적용
- [ ] 논리적 순서 정렬
- [ ] 하위 카테고리 드롭다운 메뉴 구현

### 3.2 카테고리 페이지 스타일링
- [ ] CSS 그리드 레이아웃 적용 (2-3열)
- [ ] 상위/하위 카테고리 색상 구분
- [ ] 카테고리별 게시글 수 표시 개선
- [ ] 호버 효과 및 인터랙션 추가

### 3.3 세부 카테고리 페이지 개선
- [ ] 하위 카테고리별 그룹핑
- [ ] 카드 형태 썸네일 적용
- [ ] 브레드크럼 개선
- [ ] 정렬 옵션 추가

---

## 4. 기술적 구현 방안

### 4.1 관련 파일들
- `_config.yml` - 메뉴 구조 설정
- `themes/shokax/_config.yml` - 테마별 메뉴 설정
- `themes/shokax/layout/_partials/sidebar/menu.pug` - 메뉴 렌더링
- `themes/shokax/layout/category.pug` - 개별 카테고리 페이지
- `themes/shokax/layout/categories.pug` - 카테고리 목록 페이지
- `themes/shokax/source/css/` - 스타일 파일들

### 4.2 수정 접근법
1. **단계적 접근**: 메뉴 → 카테고리 목록 → 세부 페이지 순서
2. **백업**: 원본 파일 백업 후 수정
3. **테스트**: 각 단계별 빌드 및 확인
4. **문서화**: 모든 변경사항 기록

---

## 5. 다음 단계

1. 현재 카테고리 구조 상세 분석
2. 메뉴 구조 재설계
3. CSS 스타일 개선
4. 템플릿 파일 수정
5. 테스트 및 검증

---

*이 문서는 지속적으로 업데이트됩니다.* 