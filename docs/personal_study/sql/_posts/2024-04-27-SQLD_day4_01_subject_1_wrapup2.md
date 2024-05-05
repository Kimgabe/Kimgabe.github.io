---
layout: single
title: '"[SQLD] 4일차 : 데이터모델과 SQL Wrap up 및 예상문제 풀이"'
categories:
  - sql
tags:
  - sql
  - SQLD
  - 노트정리
  - wrap_up
  - 예상문제
  - 오답노트
toc: true
highlight: false
use_math: true
header:
  teaser: /assets/images/SQL/sql_teaser.png
  overlay_image: /assets/images/SQL/sql_teaser.png
  overlay_filter: 0.5
  caption: "Photo credit: [**Unsplash**](https://unsplash.com/ko/%EC%82%AC%EC%A7%84/XJXWbfSo2f0)"
---
## 🚦 Summary
- 정규화의 개념과 제1정규형, 제2정규형, 제3정규형의 위반 사례 및 해결 방안을 설명
- NULL 값의 특성과 NULL을 포함한 연산 및 집계 함수의 동작 방식을 소개
- NULL 값을 비교하는 방법과 관련 기출 문제 유형을 분석하여 NULL 처리의 중요성 강조

---

## 📌 Intro.
- 이번 포스팅에서는 데이터 모델링과 SQL에 대한 핵심 내용을 종합적으로 정리해보겠습니다.
- 먼저 정규화의 개념과 제1정규형, 제2정규형, 제3정규형의 위반 사례 및 해결 방안에 대해 알아볼 것입니다.
- 또한 NULL 값의 특성과 NULL을 포함한 연산 및 집계 함수의 동작 방식, 그리고 NULL 값을 비교하는 방법과 관련 기출 문제 유형을 분석하여 NULL 처리의 중요성을 강조하겠습니다.

---

## 과목범위
![](https://i.imgur.com/cVTTkwF.png)


<br>


# 정규화(Normalization)
![](https://i.imgur.com/LBxQsuV.png)

- 이전 포스팅의 정규화를 정리한 파트 에서는 3정규화 까지만 다뤘지만, 실제 정규화는 5정규화 까지 있습니다.
- 하지만, 실제 SQLD 시험에는 주로 3 정규화 까지 많이 출제된 편이라 이 3가지 정규화에 대해서만 다뤘습니다.

## 제 1 정규화
> 1 정규화 : 각 속성이 원자값(Atomic Value)을 갖도록 하는 것입니다. 

- 원자값이란 더 이상 쪼갤 수 없는 단일값을 의미합니다. 
- 즉, <font color="#4f81bd">하나의 속성에 여러개의 값이 저장되지 않아야 하며, 반복되는 속성 그룹이 있어서도 안됩니다. </font>
- 이를 만족시키지 못할 경우 데이터의 중복, 이상 현상 등의 문제가 발생할 수 있습니다.

- 예시 이미지와 함께 1 정규화를 위반한 사례와 해결책에 대해 살펴보겠습니다.

![](https://i.imgur.com/cTVr4YS.png)

- 제시된 사례는 고객 정보를 저장하는 테이블입니다. 

> 문제 상황
- Case 1을 보면 고객ID, 이름, 전화번호를 속성으로 가지고 있는데, <font color="#4f81bd">전화번호 속성에 복수의 값(집 전화, 핸드폰 등)이 콤마로 구분</font>되어 있습니다. 이는 <font color="#4f81bd">원자성을 위배</font>하므로 1정규형에 만족하지 않습니다.
- 반면 Case 2는 <font color="#4f81bd">전화번호를 전화번호1, 전화번호2와 같이 별도의 컬럼으로 나누어 저장</font>하고 있습니다. 하지만 이 경우에도 이런 식으로 계속 전화번호3, 전화번호4 등의 컬럼이 추가되어야 한다는 문제가 있습니다. 뿐만 아니라 <font color="#4f81bd">어떤 고객은 2개의 전화번호를, 어떤 고객은 1개의 전화번호만 가질 수도 있어서 NULL 값이 많이 발생</font>하게 됩니다. 따라서 이 방식 역시 1정규형을 완전히 만족했다고 보기는 어렵습니다.

> 해결 방안
- 1 정규형을 만족시키기 위해서는 우선 고객 테이블에서 전화번호 속성을 분리해야 합니다. 
- 대신 전화번호 테이블을 별도로 생성하고 각 전화번호 레코드는 고객 테이블의 기본키(PK)를 참조하는 외래키(FK)를 가지도록 합니다. 
- 이렇게 함으로써 한 명의 고객이 복수의 전화번호를 가질 수 있게 됩니다.
- 이 경우 고객과 전화번호는 1:N 관계를 가지게 되고, 고객 레코드 입장에서는 전화번호 테이블에 자신과 관련된 전화번호 레코드들이 N개 존재하게 되는 것입니다. 
- 또한 전화번호 테이블 레코드의 입장에서는 자신이 참조하는 고객 레코드가 1개 존재하게 되므로 N:1 관계라고도 할 수 있습니다.

> 이렇게 1:N / N:1 관계로 재설계함으로써 원자성을 확보하여 1정규형을 충족시킬 수 있게 됩니다. 이는 데이터 무결성 유지와 이상 현상 방지에 기여하며 효과적인 데이터 관리를 가능케 합니다.


---

<br>

## 제 2 정규화
> 제 2 정규화 : 1정규화를 만족하면서 부분 종속 속성을 분리해 부분 함수 종속(Partial Functional Dependency)이 없는 상태를 말합니다.

> 부분 함수 종속(Partial Functional Dependency) : 합성키(Composite Key)에 대해 키를 구성하는 속성 중 일부만으로 결정되는 비키 속성이 있는 경우를 의미

-  예를 들어 (학번, 강의코드) 가 합성키인 수강 테이블에서 강의명 속성은 강의코드에 의해 결정되므로 부분 함수 종속입니다.

- 예시 이미지와 함께 2 정규화를 위반한 사례와 해결책에 대해 살펴보겠습니다.

![](https://i.imgur.com/jcuoqE8.png)

> 문제 상황
- 주문상품 테이블은 <font color="#4f81bd">주문ID와 상품ID를 합성키로 사용</font>하고 있습니다. 
- 그런데 <font color="#4f81bd">상품명, 상품카테고리 속성의 값은 상품ID에 의해 결정</font>됩니다. 
	- 주문ID와는 무관하게 상품ID가 같으면 언제나 동일한 상품명, 상품카테고리 값을 가질 것이기 때문입니다. 
- 이는 <font color="#4f81bd">부분 함수 종속에 해당되므로 2정규형을 위배</font>하는 상황입니다.


> 해결책

- 이 경우 종속되는 속성(상품명, 상품카테고리)를 분리하여 상품ID를 기본키로 하는 독립된 상품 테이블을 만들어야 합니다. 
- 그리고 주문상품 테이블은 주문ID와 상품ID만을 속성으로 가지고 상품ID는 상품 테이블을 참조하는 외래키가 됩니다. 이렇게 함으로써 부분 종속을 제거하고 2정규형을 만족시킬 수 있습니다.

>  💡2 정규형 위반의 문제

- 2정규형 위반은 데이터의 중복과 이상 현상을 유발할 수 있습니다. 
- 예를 들어 어떤 상품의 카테고리를 변경하려면 그 상품이 포함된 모든 주문 레코드에서 일일이 변경해주어야 하는 번거로움이 있습니다. 
- 하지만 2정규형을 만족시킨 설계에서는 상품 테이블의 해당 레코드만 변경하면 되므로 데이터 관리가 용이해집니다. 
- 또한 상품ID는 유일하므로 카테고리 정보가 불일치하는 문제도 원천 차단됩니다.

- 제시된 팁처럼 <font color="#4f81bd">함수적 종속성 판별 시에는 식별자가 단일 속성인지 복합 속성인지를 먼저 파악</font>해야 합니다. 
- 단일 속성으로는 부분 종속이 발생할 수 없기 때문입니다. 그리고 복합키라면 구성 속성 각각에 대해 개별적으로 함수 종속 여부를 판단해 보아야 합니다.

---

<br>

### 제 3 정규화

>  제 3 정규화 :  3정규형은 2정규형을 만족하면서 이행적 함수 종속(Transitive Functional Dependency)이 존재하지 않는 상태를 말합니다.

> 이행적 함수 종속(Transitive Functional Dependency)
- A, B, C 속성이 있을 때 A → B 이고 B → C 이면 A → C 인 경우를 의미합니다. 
- 즉 A 속성에 의해 B 속성이 결정되고, B 속성에 의해 C 속성이 결정되면 A 속성은 C 속성을 이행적으로 결정한다고 볼 수 있습니다. 
- 이때 B는 A의 종속자이면서 동시에 C의 결정자 역할을 합니다.

- 예시 이미지와 함께 3 정규화를 위반한 사례와 해결책에 대해 살펴보겠습니다.

![](https://i.imgur.com/TS99anZ.png)

> 문제상황

- 주문상품 테이블을 보면 주문상품ID → 상품ID 이고 상품ID → 상품카테고리 입니다. 
- 따라서 주문상품ID → 상품카테고리 의 이행적 함수 종속 관계가 성립합니다. 
- 즉, 주문상품ID는 상품카테고리를 결정하게 되는데 이는 직접적인 관계가 아니라 상품ID를 매개로한 간접적인 관계입니다. 
- 이런 경우 상품카테고리 정보가 주문상품 테이블에 함께 있으면 데이터 중복이 발생하므로 3정규형에 위배됩니다.

> 해결방안

- 3정규형을 만족시키기 위해서는 이행적 함수 종속 관계에 있는 속성을 분리하여 새로운 테이블을 만들어야 합니다. 
- 주어진 예시에서는 상품ID와 상품카테고리 속성이 분리되어 상품 테이블로 독립되었습니다. 
- 그리고 주문상품 테이블에서는 상품ID를 외래키로 참조하도록 변경되었습니다. 이렇게 함으로써 이행적 종속을 제거할 수 있습니다.

>  💡3 정규형 위반의 문제
- 이행적 종속이 존재할 경우 데이터의 중복뿐만 아니라 이상 현상이 발생할 수 있습니다. 
- 예를 들어 상품의 카테고리를 변경하고자 할 때 주문상품 테이블의 모든 해당 상품 레코드를 찾아 변경해주어야 하므로 일관성 유지가 어렵고 관리 비용이 증가하게 됩니다. 
- 하지만 3정규형 설계에서는 상품 테이블만 변경하면 되므로 훨씬 간편해집니다.

- 제시된 팁처럼 <font color="#4f81bd">단일 식별자를 갖는 테이블에서 3정규형 위반이 발생할 가능성이 높습니다. </font>
- 왜냐하면 단일키는 부분 종속(2정규형 위반)을 유발하지 않으므로 대신 이행적 종속 가능성을 염두에 두어야 하기 때문입니다.

---

<br>

# Null 속성의 이해 (feat. Null값의 연산)

> Null 값

- "현재 알 수 없는 값" 또는 "해당사항 없음"을 나타내기 위한 특수한 값입니다. 
- 즉, NULL은 <font color="#4f81bd">0이나 공백과는 다른 의미</font>를 갖습니다.

## Null 값의 사칙연산
![](https://i.imgur.com/jqdmFgZ.png)

- NULL은 산술 연산, 비교 연산 시 주의해서 다뤄야 할 값입니다. 
- NULL과 숫자형 데이터의 사칙연산 결과는 언제나 NULL이 됩니다. 
- 즉, `5 + NULL`, `10 - NULL`, `30 * NULL`, `20 / NULL` 등은 모두 NULL이 됩니다. 
- <font color="#4f81bd">NULL은 어떤 값인지 알 수 없으므로 연산 결과도 알 수 없기 때문</font>입니다. 
- 위 이미지속  NULL과 사칙연산 예시 쿼리를 보면 피<font color="#4f81bd">연산자가 매우 큰 수여도 결과는 NULL</font>임을 알 수 있습니다.

> 이처럼 NULL은 값의 부재 자체를 나타내는 특수한 값이므로 데이터베이스를 설계하고 쿼리를 작성할 때 유의해야 할 대상입니다. 
> NULL로 인한 연산 오류, 비교 조건 오류 등을 방지하기 위한 처리가 필요합니다.


---

<br>

## Null 값과 집계 함수
> 집계 함수

- 일반적으로 SUM, AVG, COUNT 같은 집계 함수는 NULL 값을 제외하고 연산을 수행합니다. 

![](https://i.imgur.com/GjHSBmi.png)

- 주어진 학생 점수 테이블에서 평균 점수를 구하면 78점으로 나옵니다. 
- 총 8명 중 3명이 NULL 점수이지만 NULL을 제외한 5명의 점수 합계를 인원수 5로 나누어 계산한 결과입니다. 
- 마찬가지로 점수 합계를 구해도 NULL을 제외한 390점, 카운트 함수 역시 5명으로 집계됩니다.

- 하지만 예외적으로 `COUNT(*)` 처럼 필드를 특정하지 않고 레코드 건수만 세는 경우에는 NULL 값이 포함됩니다. 이 쿼리를 학생 테이블에 적용하면 8이 반환될 것입니다.
- 이처럼 <font color="#4f81bd">일반적인 집계 연산 시에는 NULL을 고려하지 않습니다</font>. 
- 따라서 데이터에 NULL이 많은 경우 집계 결과가 편향되거나 잘못 해석될 수 있으므로 유의해야 합니다. 
- NULL에 대한 사전 처리나 COALESCE, NVL 같은 NULL 대체 함수를 활용하는 것이 좋은 방법 입니다.

---

<br>

### Null 값을 조회 하는 방법
![](https://i.imgur.com/YYCahaF.png)

> Null값에서 비교연산자가 수행되지 않는 이유

- 조건절에서 NULL을 비교하는 방법을 알아봅니다. <font color="#4f81bd">NULL은 알 수 없는 값이므로 일반적인 비교 연산자로는 NULL 비교가 불가능</font>합니다.
- 예를 들어 `COLUMN = NULL` 이나 `COLUMN <> NULL` 같은 조건은 항상 거짓(false)이 됩니다. 
- 사칙연산 파트에서도 NULL은 연산 시 그 결과가 NULL이 된다고 정리했습니다. 비교 연산도 마찬가지입니다. 따라서 등호나 부등호로 비교 연산을 수행하면 `NULL = NULL → NULL`, `NULL <> NULL → NULL` 이 되어버립니다. 
- <font color="#4f81bd">조건절에서 NULL은 거짓으로 처리되므로 원하는 NULL 값을 조회/비교할 수 없게 되는 것</font>입니다.

> Null값에 비교연산자 사용하기

- NULL을 비교하기 위해서는 반드시 `IS NULL` 이나 `IS NOT NULL` 을 사용해야 합니다. 
- `COLUMN IS NULL` 은 해당 컬럼 값이 NULL인지 확인하고, `COLUMN IS NOT NULL` 은 NULL이 아닌지를 확인합니다.
- 이미지속 테이블 TAB1의 COL1 컬럼에서 NULL이 아닌 값들만 조회하려면 `WHERE COL1 IS NOT NULL`을 사용할 수 있습니다. 
- 반대로 NULL인 값들만 조회하려면 `WHERE COL1 IS NULL` 을 사용하면 됩니다.

> 따라서 데이터에 NULL이 존재할 가능성이 있다면 IS NULL, IS NOT NULL을 사용하여 명시적으로 NULL 값을 확인하고 처리해야 합니다. 
> 일반 비교 연산자로는 NULL을 조건절에 사용할 수 없다는 점을 기억해 두는 것이 중요합니다.


## Null 과 관련해 나올 수 있는 문제 유형들(feat. 기출문제)

- 아래의 테이블을 주고, 각각의 SQL 쿼리문의 결과를 물어보는 문제가 나올 수 있습니다.

![](https://i.imgur.com/r1VDARP.png)

```sql
SELECT COL1 + COL4 FROM TAB1
```

> QUERY 문 의미
 👉TAB1 테이블에서 COL1과 COL4의 값을 합한 결과를 출력해라.

> 결과 및 해석

![](https://i.imgur.com/8L5jxyf.png)

- 첫 번째 행: 40 + 0 = 40
- 두 번째 행: NULL + 30 = NULL (NULL과의 연산 결과는 NULL)
- 세 번째 행: 50 + NULL = NULL (NULL과의 연산 결과는 NULL)


```SQL
SELECT SUM(COL1) + SUM(COL3) FROM TAB1
```

> QUERY 문 의미

👉 TAB1 테이블의 COL1의 합과 COL3의 합을 더한 결과를 출력해라.

> 결과 및 해석

![](https://i.imgur.com/TvDMyfI.png)

- SUM(COL1) = 40 + 0 + 50 = 90
- SUM(COL3) = 0 + 10 + 20 = 30
- 결과: 90 + 30 = 120
	- 💡 NULL 값은 SUM에서 0으로 처리됩니다.




```SQL
SELECT SUM(COL2 + COL3 ) FROM TAB1
```

> QUERY 문 의미
👉 TAB1 테이블에서 COL2와 COL3의 값을 합한 후 그 합들의 총합을 출력해라.


> 결과 및 해석

![](https://i.imgur.com/wo04zfi.png)

- 첫 번째 행: NULL + NULL = NULL
- 두 번째 행: 10 + 10 = 20
- 세 번째 행: NULL + 20 = NULL
- 결과: SUM(20) = 20 (NULL은 무시됩니다.)


```SQL
SELECT AVG(COL3) FROM TAB1 VS SELECT AVG(COL4) FROM TAB1
```

> QUERY 문 의미

👉 TAB1 테이블의 COL3의 평균과 COL4의 평균을 각각 계산해 결과를 출력해라.

> 결과 및 해석

![](https://i.imgur.com/iptKEEZ.png)

- AVG(COL3) = (10 + 20) / 2 = 15
- AVG(COL4) = (0 + 30) / 2 = 15 (3개 중 2개의 값만 계산됩니다.)
- <font color="#4f81bd">NULL 값은 AVG 계산에서 제외됩니다.</font>



```SQL
SELECT AVG(COL4) FROM TAB1 WHERE COL4 IS NOT NULL VS SELECT AVG(COL4) FROM TAB1
```

> QUERY 문 의미

👉 TAB1 테이블에서 COL4가 NULL이 아닌 경우의 평균과 전체 COL4의 평균을 각각 계산해서 결과를 출력해라

> 결과 및 해석

![](https://i.imgur.com/KLi4lXh.png)

- AVG(COL4) WHERE NOT NULL = (0 + 30) / 2 = 15
- AVG(COL4) 전체 = (0 + 30) / 2 = 15 




```SQL
SELECT COUNT(COL1 + COL2 + COL3 + COL4) FROM TA1 VS SELECT COUNT(COL1) + COUNT(COL2) + COUNT(COL3) + COUNT(COL4) FROM TA1
```

> QUERY 문 의미

 👉TAB1 테이블에서 모든 컬럼 값이 합쳐진 경우의 개수와 각 컬럼의 값이 있는 경우의 개수의 합을 비교해서 결과를 출력해라.

> 결과 및 해석

![](https://i.imgur.com/3540EYd.png)

- COUNT(COL1 + COL2 + COL3 + COL4): 합산 시 하나라도 NULL이 있으면 결과는 NULL이 되므로, 카운트되지 않습니다. 결과는 0입니다.

![](https://i.imgur.com/BBDlP7Q.png)

- COUNT(COL1) + COUNT(COL2) + COUNT(COL3) + COUNT(COL4): 각 컬럼마다 NULL이 아닌 값의 개수를 합합니다.
    - COUNT(COL1) = 2
    - COUNT(COL2) = 1
    - COUNT(COL3) = 2
    - COUNT(COL4) = 2
    - 결과: 2 + 1 + 2 + 2 = 7
- NULL 값을 포함하여 합산하지 않습니다.


> 2024년 1회차 부터 SQLD 시험에서 주관식이 사라져서 객관식으로 답을 선택하는 식으로 변형이 되어서라도 나올 수 있는 문제 같습니다.



---

## 🎈 Outro.
- 정규화는 데이터의 중복을 제거하고 무결성을 유지하기 위한 중요한 과정으로, 제1정규형부터 제3정규형까지의 개념과 위반 사례를 이해하는 것이 핵심입니다.
- NULL 값은 데이터베이스에서 특별한 취급을 받는 값으로, 연산 및 집계 함수 사용 시 주의가 필요하며, IS NULL과 IS NOT NULL을 사용하여 명시적으로 비교해야 합니다.
- 데이터 모델링과 SQL 작성 시 정규화와 NULL 처리를 염두에 두는 것이 데이터 무결성 유지와 효율적인 데이터베이스 관리에 도움이 될 것입니다.
- 이번 포스팅을 통해 정규화와 NULL 처리에 대한 이해도를 높이고, 실제 데이터베이스 설계 및 SQL 작성에 활용할 수 있기를 바랍니다.
- 이 포스팅이 SQLD 자격증을 준비하는 분들께 도움이 되었으면 좋겠습니다.
