---
layout: single
title: '"[SQLD] 3일차 : 정규화(Normalization)"'
categories:
  - sql
tags:
  - sql
  - SQLD
  - 노트정리
  - 데이터모델과SQL
  - 정규화
  - normalization
  - 반정규화
  - denormalization
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
- 이번 포스팅에서는 데이터베이스에서 중요한 개념인 조인에 대해 알아보겠습니다.
- 조인의 기본 개념과 활용 방법, 그리고 계층형 데이터 모델과 자기 참조 관계에 대해 배울 수 있습니다.
- 또한, 상호배타적 관계의 개념과 SQL에서의 처리 방법인 UNION ALL과 LEFT OUTER JOIN에 대해 살펴보겠습니다.

---

## 📌 Intro.
- 이번 포스팅에서는 데이터베이스 설계에서 중요한 개념인 정규화에 대해 알아보겠습니다.
- 정규화의 기본 개념과 제1정규형, 제2정규형, 제3정규형의 정의와 예시를 통해 정규화 과정을 이해할 수 있습니다.
- 또한, 반정규화의 개념과 적용 사례를 살펴보며 정규화와 반정규화의 균형 있는 적용 방법에 대해 배울 수 있습니다.

---
## 과목범위
![](https://i.imgur.com/CxtqkBz.png)

---
<br>

# 제 1 정규형 
> 모든 속성은 반드시 하나의 값을 가져야 한다.

## 제 1 정규형을 위반하는 Case

### case 1. 다중 값 (Multi Value)을 가지는 경우
![](https://i.imgur.com/wF1Qre5.png)

>  🤔왜 위 데이터 모델은 왜 제1정규형을 위반하는 모델인가?
>  - 고객연락처 테이블의 <font color="#4f81bd">연락처 속성이 원자값이 아닌 집전화번호와 핸드폰번호를 같이 포함하는 다중값을 가지고 있기 때문</font>입니다.
>  - <font color="#4f81bd">제1정규형은 각 속성이 원자값만을 포함해야 한다는 조건</font>인데 이를 위반하고 있습니다. 연락처 속성에 여러 개의 전화번호가 콤마로 구분되어 있는 형태는 제1정규형을 만족하지 않습니다.

> 🚫 문제점

- 연락처 정보에서 집전화 번호와 핸드폰번호를 구별하기 어렵다.
- A 고객은 집전화가 여러대이고, B고객은 핸드폰이 여러대라면 혼재된 속성에서 원하는 속성값으 추출하기 어렵다.
- 명확하지 않은 속성은 이메일처럼 다른 유형의 데이터를 포함할 수도 있어 본연의 의미가 퇴색될 수 있다.

> 💡 해결방법
> - 고객연락처 테이블에서 다중값을 허용하던 연락처 속성을 제거하고 연락처구분 속성을 추가하여 연락처구분에 따라 연락처 값이 1:1로 대응되도록 변경 합니다.
> - 이와 같이 수정할 경우 한 사람이 집전화 2개, 핸드폰 1개를 가진 경우라고 해도 3개의 레코드로 나누어 저장하게 됩니다.

![](https://i.imgur.com/ER5y96c.png)

- 위와 같이 수정하면, 고객의 연락처가 많아져도 문제가 되지 않습니다.
- "연락처구분코드" 를 추가해, 집전화 번호 또는 핸드폰 번호를 구분할 수 있게 변경되었습니다.
- 이에 따라 이메일 등의 연락처도 수용이 가능해집니다. 



### case 2. 중복 데이터를 속성으로 분리한 경우
![](https://i.imgur.com/QnTNYlJ.png)

>  🤔왜 위 데이터 모델은 왜 제1정규형을 위반하는 모델인가?
>  - 주문테이블에서 상품번호1, 상품명1, 상품번호2, 상품명2 .. .와 같이 동일한 성격의 데이터가 여러 컬럼으로 분리되어 있습니다.
>  - 즉, 반복되는 속성을 갖고 있는 형태라 제1정규형을 위반하고 있습니다.


> 🚫 문제점

- 현 구조로는 상품을 3개 이상 주문할 수가 없습니다.
- 상품을 3개 이상 주문하기 위해서는 상품번호3, 상품번호4가 추가되어야 합니다.
- 상품1, 상품2 모두 빠르게 조회를 하려면 속성마다 인덱스를 추가해줘야 합니다.
  👉 이 경우 SELECT 속도는 빨라지지만, 입력, 수정, 삭제 속도는 느려집니다. 
  

> 💡 해결방법
> - 아래와 같이 데이터 모델을 수정해 문제를 해결할 수 있습니다.
> - 주문 상세(주문 번호, 상품번호, 상품명) 테이블을 별도로 분리합니다.
> - 이를 통해 주문번호 당 여러개의 상품을 저장할 수 있게 되었습니다. 
> - 주문 테이블은 주문번호, 고객번호, 고객명만 갖도록해 정규화 했습니다.
> - 두 테이블은 주문번호라는 FK를 통해 서로 연결되어 있습니다.

![](https://i.imgur.com/nEPfP5I.png)

- 위와 같이 '상품번호' 라는 속성에 값을 입력하게 지정하면 상품을 몇개를 주문하든 아무런 제약이 없습니다.
- 또한, 추가적인 인덱싱을 하지 않고도 '상품' 에만 인덱싱이 가능해 집니다.

---

<br>

# 제 2 정규형

> 💡 제 2 정규형 : Entity의 일반속성은 주식별자 전체에 (함수적으로) 종속적이어야 한다.


## 제 2 정규형 위반 Case

![](https://i.imgur.com/ZfydVHk.png)


> 🚫 문제점
> 
> 주문상세 테이블의 상품명 속성이 주식별자인 주문번호에 완전 함수적으로 종속되어 있지 않아 제2 정규형 위반입니다.
> 현재, 상품명은 주문번호가 아닌 상품번호에 종속되어 있습니다.
> 제2정규형은 PK의 부분집합에 종속되는 일반속성이 없어야 하는데 이를 위반하고 있는 것 입니다.

- 만약 상품명을 '업무적으로 변경' 해야 한다면, 주문상세의 <font color="#4f81bd">중복된 상품명을 모두 변경</font>해야 합니다.
- 이 경우, 많이 팔린 상품일수록 <font color="#4f81bd">주문상세에서 변경할 대상이 많아</font>집니다.
- 주문상세의 상품명을 변경하면 되지 않을까?! 라고 생각할 수 있으나
	- 특정 시점에는 아직 변경되지 않는 상품명은 여전히 존재할 수 잇고, 이 때 들어온 transaction은 <font color="#4f81bd">일관되지 않은 데이터를 조회</font>하게 됩니다.


> 🤔 함수의 종속성이란 무엇인가?!

![](https://i.imgur.com/nwbzfyl.png)

- 함수 종속성(Funtional Dependency) 는 데이터들이 어떤 기준 값에 의해 종속되는 현상을 지칭합니다.
- 이때, 기준 값을 결정자(Determinant) 라 하며, 종속되는 값을 종속자(Dependent) 라고 합니다.
- 아래의 데이터 구조를는 이런 예시를 잘 보여 줍니다.

![](https://i.imgur.com/w14eT0l.png)

- <font color="#4f81bd">'상품명'은 주문번호와 관계없이 오직 상품번호에 의해서만 결정</font>됩니다.
- 따라서, 상품명은 상품번호에 함수 종속성을 갖고 있다고 할 수 있습니다.


> 💡 해결방법
> 아래와 같이 데이터 모델을 수정한다.


![](https://i.imgur.com/GRUOtch.png)

- 변경된 데이터 모델은 주문상세 테이블에서 '상품명'을 제거하고, <font color="#4f81bd">상품 테이블을 별도로 둬서 상품번호를 기본키로 하고 상품명을 일반속성으로 갖도록</font> 했습니다.
- 이를 통해 기존 데이터모델의 문제점인 '상품명 변경시' 주문 상세에서 중복된 상품명을 모두 변경해야 하는 문제' 와 '데이터 조회결과가 일관적이지 않을 수 있는 문제' 를 해결할 수 있습니다.
- 왜냐하면, <font color="#4f81bd">상품 테이블에서 상품명을 관리하면, 변경이 한 곳에서 이뤄지고 주문상세와 상품은 상품번호로 연결되어 일관성 있는 데이터 조회가 가능</font>해지기 때문입니다.
- 즉, 상품명이 주문상세에서 분리되어 상품 테이블로 옮겨진 것인데, 상품 테이블은 상품번호를 기본키로 하고, <font color="#4f81bd">상품명은 상품번호에 대해 함수적으로 종속된 상태</font>가 됩니다. 
- 따라서, 주문상세의 모든 속성이 기본키인 주문번호, 상품번호 에 대해 함수적으로 종속되어 제2 정규형을 만족하게 됩니다.

<br>

# 제3정규형
> 💡 제 3 정규형 : Entity의 일반속성은 서로 종속적이지 않아야 한다. 

## 제3정규형을 위반하는 케이스

### 이행 종속(Transitive Dependency)
> 이행종속이란 
> - A, B, C 속성이 있을 때, A -> B 이고 B -> C 이면 A -> C 가 성립하는 것을 말합니다. 
> - 즉, A가 B를 결정하고 B가 C를 결정하면 A가 C를 결정하게 되는 종속관계를 이행 종속이라 합니다. 이는 제3정규형을 위반하는 대표적인 사례입니다.


![](https://i.imgur.com/zraNmDC.png)


> 🚫 문제점

- 고객번호 -> 주문번호 -> 주문명, 주문일자, 주문주소, 주문금액 의 종속관계가 있습니다. 
- 이는 주문과 직접 관련없는 고객의 일반속성들이 주문번호에 간접적으로 종속되는 이행종속에 해당합니다.
	- 이런 설계는 고객정보가 중복되어 저장공간 낭비를 초래합니다.
	- 고객정보 변경시 여러 주문에 걸쳐 일관되게 수정해야 하므로 데이터 불일치 문제가 발생할 수 있습니다.

	  

> 💡 해결방법

- 아래와 같이 데이터 모델을 수정함으로써 이행종속을 해결할 수 있습니다.

![](https://i.imgur.com/cg5ya0f.png)

- 고객(고객번호, 상품번호, 상품명) 테이블을 추가해 주문 테이블과 FK로 연결했습니다.
- 이로써 고객정보의 중복제거, 주문정보의 독립성 확보, 데이터 무결성 유지가 가능해졌습니다.
- <font color="#4f81bd">고객, 주문, 주문상세 각 테이블은 PK에만 종속되어 이행종속이 발생하지 않게</font> 됩니다.

---

<br>

# 반정규화 (Denormalization)

> 🤔 반정규화란 무엇인가?!

- 반정규화는 데이터베이스의 성능을 향상시키기 위해 정규화된 구조에서 의도적으로 중복을 허용하는 과정을 말합니다.
- 이를 통해 Join 연산의 비용을 줄이고, Query의 처리속도를 높일 수 있습니다.

## 반정규화를 적용한 모델 성능 향상 예시
### 반정규화 적용 전
![](https://i.imgur.com/sX0L6ei.png)

<br>

- 위 데이터 모델은 '고객'과 '결제' 정보를 가져오려면 아래의 쿼리문과 같이 Join 연산을 사용해야 합니다. 
```sql
SELECT A.결제수단번호
FROM
	(
	SELECT B.결제수단번호
	FROM 주문 A, 결제 B
	WHERE A.주문번호 = B.주문번호
		AND A.고객번호 = 1234
		AND B.고객수단구분코드 = '신용카드'
	ORDER BY B.결제일시 DESC
		) A
WHERE ROWNUM = 1;
```
- 데이터가 적다면 크게 문제가 되지 않을 수 있지만, 데이터의 볼륨이 높아질 수록 성능 저하가 발생할 수 있습니다.
- 이러한 데이터 모델에 반정규화를 적용한다면 성능 개선이 가능합니다.

### 반정규화 적용 후
![](https://i.imgur.com/lh3iFtE.png)

- 위와 같이 반정규화를 적용해 모델을 개선하면 성능 저하 문제를 해결할 수 있습니다.
- '결제수단명', '결제수단코드', '결제일시' 등의 정보를 '결제' Entity 에 직접 포함시켜 반정규화를 적용한 것입니다.
- 이로 인해 '고객' 과 '결제' 사이의 조인 없이도 필요한 정보를 빠르게 조회할 수 있어 Query의 성능이 향상 됩니다.
- Query문을 비교해봐도, 첫번째 Query에 비해 두번째 Query는 '결제' 테이블의 데이터만을 조회하지만 원하는 모든 정보를 확인할 수 있습니다. 

<br>

## 왜 이런 비정규화가 필요한가?!
- <font color="#4f81bd">정규화된 데이터 구조는 데이터 중복을 최소화 하는 것을 목적</font>으로 합니다.
- 따라서, <font color="#4f81bd">여러 테이블에 데이터를 분산</font> 시킵니다.
- 이는 <font color="#4f81bd">데이터 일관성과 무결성 유지에는 도움</font>이 되지만, 종종 <font color="#4f81bd">필요한 정보를 얻기 위해 여러 테이블을 조인해야</font> 합니다.
- 이런 테이블의 데이터가 10개, 100개, 1000개라면 체감되는 성능 저하는 없을 것입니다.
- 하지만 <font color="#4f81bd">조인해야 하는 테이블의 데이터가 10만개, 100만개 씩 된다면?! </font>'조인' 을 하는 것 만으로도 매우 많은 메모리가 사용되어 성능 저하가 필연적으로 발생할 수 밖에 없습니다.
- 이럴 때 해결책으로 등장하는 것이 반정규화 입니다.
- <font color="#4f81bd">사전에 조인된 테이블을 만들어</font> 둔다면 <font color="#4f81bd">단일 쿼리로 필요한 정보를 빠르게 조회</font>할 수 있습니다.
- 따라서, 자주 접근되고, 성능이 중요한 쿼리에 대해서는, 정규화 규칙을 어기면서도 사전에 조인된 결과를 별도의 테이블로 저장하여 성능 향상을 꾀할 수 있습니다. 이 방법은 특히 <font color="#4f81bd">읽기 작업이 많은 애플리케이션에서 유용</font>합니다.


##  반정규화는 만능이 아니다! 
> - 반정규화를 한다고 해서 무조건 성능이 개선되는 것은 아닙니다.
> - 오히려 반정규화를 함으로 인해 모델 성능이 저하될 수도 있습니다.

![](https://i.imgur.com/2mlwtr1.png)

- 위 이미지는 반정규화를 적용함으로서 발생할 수 있는 성능 저하 이슈를 잘 보여주는 데이터 모델입니다.
- 이미지를 보면, 주문 테이블의 송장번호를 반정규화 해서, 배송 테이블을 조인하지 않아도 되도록 반정규화를 해서 조회성능을 향상 시켰습니다.


> 🚫 문제점

- '주문' 테이블의, 주문번호, 고객번호, 주문상태코드가 '배송' 테이블에도 포함되어 있습니다.
- 즉, 두 테이블간에 '중복 데이터' 가 존재합니다. 
- 이는 결국 주문 데이터 변경시 배송 데이터도 변경 해야 하는 '추가 작업' 이 발생해 '쓰기(WRITE)' 작업의 성능이 저하 될 수 있습니다.
- 또한, 주문정보가 중복되어 있으므로, '배송' 정보를 조회하고자 하면, 주문정보가 포함된 더 많은 양의 데이터를 처리해야 해서 읽기(READ) 성능에도 영향을 미칩니다.


> 🤔 왜 위의 케이스가 성능을 저하시키는 것인가?!

- 반정규화된 위 데이터모델에서 송장번호 갱신(UPDATE) 로직이 추가되고, 정규화딘 데이터 모델에 적절한 INDEX가 있다면 반정규화를 적용한 이점이 큰 의미가 없어집니다.
- 즉, 굳이 반정규화를 하지 않고 정규성을 유지하면서도 동일한 성능 향상을 이뤄낼 수 있는 경우, 반정규화는 외려 성능 저하를 만들어 냅니다.


### 반정규화 wrap up!
> - 양날의 검이지만, 무조건 날카로운 검인 것도 아니다!
> - 필요한 경우에만 제한적으로 사용해야 한다!


- 반정규화는 <font color="#4f81bd">조회(SELECT)의 성능을 향상 시킬 수 있는 방법</font>입니다.
- 하지만 <font color="#4f81bd">불필요한</font> 입력(INPUT), 갱신(UPDATE), 삭제(DELETE) 를 <font color="#4f81bd">필요로 할 수</font> 있습니다.
- 이로 인해 데이터 불일치에 의한 정합성, 불필요한 트랜잭션으로 인해 성능저하가 발생할 수 있습니다.
- 즉, <font color="#4f81bd">조회 성능에서 조금 편하자고, 반정규화를 함으로 인해 불필요한 갱신 등을 하게 만들면 외려 성능 저하가 되는 문제</font>가 생길 수 있습니다.
- 따라서 반정규화의 적용은 항상 합리적인 근거를 바탕으로 꼭 필요할때만 적용하는 것이 좋습니다.

<br>

---

## 🎈 Outro.
- 정규화는 데이터베이스 설계에서 중복을 최소화하고 데이터 무결성을 유지하기 위한 중요한 과정입니다.
- 제1정규형, 제2정규형, 제3정규형의 개념을 이해하고 위반 사례를 인지함으로써 정규화의 중요성을 깨달을 수 있습니다.
- 반정규화는 성능 향상을 위해 선택적으로 사용할 수 있는 방법이지만, 데이터 일관성 문제를 유발할 수 있으므로 신중하게 적용해야 합니다.
- 정규화와 반정규화의 균형을 잡는 것이 효과적인 데이터베이스 설계의 핵심이라는 점을 기억하시기 바랍니다.
