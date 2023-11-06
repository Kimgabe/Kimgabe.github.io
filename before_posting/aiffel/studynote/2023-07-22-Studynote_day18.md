---
layout : single
title:  "[스터디노트] Day18 자료구조/알고리즘"
categories: studynote
toc: true
highlight: false
header:
  teaser: /assets/images/unsplash/study_note.jpg
  overlay_image: /assets/images/unsplash/study_note.jpg
  overlay_filter: 0.5
  caption: "Photo credit: [**Unsplash**](https://unsplash.com/photos/842ofHC6MaI)"
tags:
  - 자료구조
  - Data Structures
  - 리스트
  - Lists
  - 리스트 아이템 조회
  - List Item Access
  - 리스트 길이
  - List Length
  - 리스트와 for 문
  - Lists and for Loops
  - 리스트와 while문
  - Lists and while Loops
  - enumerate()함수
  - enumerate() Function
  - 리스트에 아이템 추가
  - Adding Items to Lists
  - 리스트의 특정 위치에 아이템 추가
  - Adding Items at Specific Positions in Lists
  - 리스트의 아이템 삭제
  - Deleting Items from Lists
  - 리스트의 특정 아이템 삭제
  - Deleting Specific Items from Lists
  - 리스트 연결
  - Concatenating Lists
  - 리스트 아이템 정렬
  - Sorting List Items
  - 리스트 아이템 순서 뒤집기
  - Reversing List Item Order
  - 리스트 슬라이싱
  - List Slicing
  - 리스트 곱셈 연산
  - List Multiplication Operation
  - 리스트 내에서 아이템 위치 찾기(index)
  - Finding Item Index in a List (index)
  - 리스트내 특정 아이템 개수 파악하기(count)
  - Counting Specific Items in a List (count)
  - 리스트내 특정 아이템 삭제(del)
  - Deleting Specific Items from a List (del)
  - 튜플
  - Tuples
  - 튜플 아이템 조회
  - Tuple Item Access
  - in과 not in 키워드
  - in and not in Keywords
  - 튜플 길이
  - Tuple Length
  - 튜플 결합
  - Combining Tuples
  - 튜플 슬라이싱
  - Tuple Slicing
  - 리스트와 튜플 차이
  - Differences Between Lists and Tuples
---


# 💡공부한 내용

---

- 자료구조
- 리스트
- 리스트 아이템 조회
- 리스트 길이
- 리스트와 for 문
- 리스트와 while문
- enumerate()함수
- 리스트에 아이템 추가
- 리스트의 특정 위치에 아이템 추가
- 리스트의 아이템 삭제
- 리스트의 특정 아이템 삭제
- 리스트 연결
- 리스트 아이템 정렬
- 리스트 아이템 순서 뒤집기
- 리스트 슬라이싱
- 리스트 곱셈 연산
- 리스트 내에서 아이템 위치 찾기(index)
- 리스트내 특정 아이템 개수 파악하기(count)
- 리스트내 특정 아이템 삭제(del)
- 튜플
- 튜플 아이템 조회
- in과 not in 키워드
- 튜플 길이
- 튜플 결합
- 튜플 슬라이싱
- 리스트와 튜플 차이

# 📝 오늘의 하이라이트

---

- **자료구조**: 자료구조는 데이터를 효율적으로 저장하고 처리하는 방식을 말한다. 데이터를 효율적으로 다루기 위해 필수적이다.
- **리스트**: 파이썬에서 사용하는 가장 기본적인 자료구조 중 하나로, 여러 개의 데이터를 연속적으로 담을 수 있다.
    
    ```python
    my_list = [1, 2, 3, 4]
    ```
    
- **리스트 아이템 조회**: 리스트의 특정 위치의 데이터를 조회할 수 있다.
    
    ```python
    first_item = my_list[0]  # 첫 번째 아이템 조회
    ```
    
- **리스트 길이**: **`len()`** 함수를 사용해 리스트의 길이를 알 수 있다.
    
    ```python
    length = len(my_list)
    ```
    
- **리스트와 for 문**: for 문을 사용해 리스트의 모든 아이템을 순회할 수 있다.
    
    ```python
    for item in my_list:
        print(item) # 각 아이템을 출력
    ```
    
- **리스트와 while문**: while문을 사용해 리스트를 순회하는 것도 가능하다.
    
    ```python
    i = 0
    while i < len(my_list):
        print(my_list[i])
        i += 1
    ```
    
- **enumerate()함수**: 리스트의 인덱스와 값을 함께 반환한다.
    
    ```python
    for idx, value in enumerate(my_list):
        print(idx, value) # 인덱스와 값을 함께 출력
    ```
    
- **리스트에 아이템 추가**: **`append()`** 메서드를 사용해 아이템을 추가한다.
    
    ```python
    my_list.append(5) # 5를 리스트에 추가
    ```
    
- **리스트의 특정 위치에 아이템 추가**: **`insert()`**를 사용하면 특정 위치에 아이템을 추가할 수 있다.
    
    ```python
    my_list.insert(1, 'a') # 인덱스 1의 위치에 'a' 추가
    ```
    
- **리스트의 아이템 삭제**: **`remove()`**를 사용해 특정 값을 삭제할 수 있다.
    
    ```python
    my_list.remove(3) # 값이 3인 아이템을 삭제
    ```
    
- **리스트의 특정 아이템 삭제**: **`pop()`**을 사용하면 특정 인덱스의 아이템을 삭제할 수 있다.
    
    ```python
    my_list.pop(1) # 인덱스 1의 아이템을 삭제
    ```
    
- **리스트 연결**: **`+`** 연산자를 사용해 두 리스트를 연결할 수 있다.
    
    ```python
    combined = my_list + [5, 6] # 두 리스트 연결
    ```
    
- **리스트 아이템 정렬**: **`sort()`** 메서드를 사용해 리스트를 정렬할 수 있다.
    
    ```python
    my_list.sort() # 오름차순 정렬
    ```
    
- **리스트 아이템 순서 뒤집기**: **`reverse()`** 메서드를 사용해 리스트의 순서를 뒤집을 수 있다.
    
    ```python
    my_list.reverse() # 리스트 뒤집기
    ```
    
- **리스트 슬라이싱**: 리스트의 일부분만 추출할 수 있다.
    
    ```python
    sliced = my_list[1:3] # 인덱스 1부터 2까지 슬라이싱
    ```
    
- **리스트 나머지 기능들**: **`extend()`**, **`count()`** 등의 다양한 기능이 있다.
    
    ```python
    my_list.extend([7,8]) # 리스트 확장
    count_of_two = my_list.count(2) # 값이 2인 아이템 개수 파악
    ```
    
- **리스트 곱셈 연산**: 리스트와 숫자를 곱하면 리스트가 그 숫자만큼 반복된다.
    
    ```python
    repeated = my_list * 3 # 리스트 3배 확장
    ```
    
- **리스트 내에서 아이템 위치 찾기(index)**: **`index()`**를 사용해 특정 값의 위치를 찾을 수 있다.
    
    ```python
    index_of_two = my_list.index(2) # 값이 2인 아이템의 인덱스 찾기
    ```
    
- **리스트 내 특정 아이템 개수 파악하기(count)**: **`count()`**를 사용해 특정 값의 개수를 파악할 수 있다.
    
    ```python
    count_of_two = my_list.count(2) # 값이 2인 아이템 개수 파악
    ```
    
- **리스트 내 특정 아이템 삭제(del)**: **`del`** 키워드를 사용해 특정 인덱스의 아이템을 삭제할 수 있다.
    
    ```python
    del my_list[0] # 인덱스 0의 아이템 삭제
    ```
    
- **튜플**: 리스트와 유사하나, 한 번 생성하면 변경할 수 없는 불변(immutable) 타입이다.
    
    ```python
    my_tuple = (1, 2, 3, 4)
    ```
    
- **튜플 아이템 조회**: 리스트와 동일한 방식으로 특정 위치의 데이터를 조회할 수 있다.
- **in과 not in 키워드**: 아이템의 포함 여부를 확인한다.
    
    ```python
    exists = 3 in my_tuple # 값이 3인 아이템이 있는지 확인
    not_exists = 5 not in my_tuple # 값이 5인 아이템이 없는지 확인
    ```
    
- **튜플 길이**: **`len()`** 함수를 사용해 튜플의 길이를 알 수 있다.
    
    ```python
    my_tuple = (1, 2, 3, 4)
    length = len(my_tuple)
    print(length) # 4 출력
    ```
    
- **튜플 결합**: **`+`** 연산자를 사용해 두 튜플을 연결할 수 있다.
    
    ```python
    another_tuple = (5, 6)
    combined_tuple = my_tuple + another_tuple
    print(combined_tuple) # (1, 2, 3, 4, 5, 6) 출력
    ```
    
- **튜플 슬라이싱**: 리스트와 동일한 방식으로 튜플의 일부분만 추출할 수 있다.
    
    ```python
    sliced = my_tuple[1:3]
    print(sliced) # (2, 3) 출력
    ```
    
- **리스트와 튜플 차이**: 리스트는 가변(mutable)이고 튜플은 불변(immutable)이다.
    
    ```python
    my_list = [1, 2, 3]
    my_tuple = (1, 2, 3)
    my_list[0] = 0  # 가능
    # my_tuple[0] = 0  # 에러 발생, 튜플은 수정 불가능
    ```
    
    <aside>
    💡 배운 내용을 응용한 문제 풀이
    
    </aside>
    
    ### **문제 1: 리스트를 사용한 과일 재고 관리**
    
    - 과일 상점에서 팔고 있는 과일들의 목록을 리스트로 관리하세요.
    - 과일을 추가, 삭제, 재고 수량을 변경하는 기능을 구현하세요.
    - 리스트에서 특정 과일의 재고 수량을 찾는 기능도 구현하세요.
    
    ```python
    # 과일 재고 리스트
    과일_재고 = ['사과', '바나나', '포도']
    
    # 과일 추가
    def 과일_추가(과일):
        과일_재고.append(과일)
        print(f'{과일} 추가됨')
    
    # 과일 삭제
    def 과일_삭제(과일):
        과일_재고.remove(과일)
        print(f'{과일} 삭제됨')
    
    # 과일 조회
    def 과일_조회(과일):
        if 과일 in 과일_재고:
            print(f'{과일} 있음')
        else:
            print(f'{과일} 없음')
    
    과일_추가('딸기')
    과일_삭제('사과')
    과일_조회('바나나')
    ```
    
    ### **문제 2: 튜플을 사용한 학생 성적 관리**
    
    - 학생들의 이름, 수학, 영어, 과학 성적을 튜플로 관리하세요.
    - 특정 학생의 성적을 조회, 추가, 수정, 삭제하는 기능을 구현하세요.
    - 전체 학생의 평균 성적을 구하는 기능도 구현하세요.
    
    ```python
    # 학생 성적 리스트 (튜플 사용)
    학생_성적 = [('홍길동', 90, 80, 70), ('이순신', 85, 75, 65)]
    
    # 학생 성적 조회
    def 성적_조회(이름):
        for 학생 in 학생_성적:
            if 학생[0] == 이름:
                print(f'{이름}의 성적: {학생[1:]}')
    
    # 학생 성적 평균
    def 성적_평균():
        총점 = 0
        for 학생 in 학생_성적:
            총점 += sum(학생[1:])
        평균 = 총점 / (len(학생_성적) * 3)
        print(f'학생 성적 평균: {평균}')
    
    성적_조회('홍길동')
    성적_평균()
    ```
    
    ### **문제 3: 리스트와 튜플을 활용한 도서관 관리 시스템**
    
    - 도서관의 책 목록을 리스트와 튜플로 관리하세요. 책 정보는 (책 제목, 작가, 장르)로 구성됩니다.
    - 책을 검색, 대출, 반납하는 기능을 구현하세요.
    - 책의 총 개수와 특정 장르별 책 개수를 조회하는 기능도 구현하세요.
    
    ```python
    # 도서 목록 (리스트와 튜플 사용)
    도서_목록 = [('해리포터', 'J.K. 롤링', '판타지'), ('나미야 잡화점', '히가시노 게이고', '소설')]
    
    # 도서 검색
    def 도서_검색(제목):
        for 도서 in 도서_목록:
            if 도서[0] == 제목:
                print(f'{제목} 책 정보: {도서[1:]}')
                return
        print(f'{제목} 없음')
    
    # 도서 추가
    def 도서_추가(제목, 작가, 장르):
        도서_목록.append((제목, 작가, 장르))
    
    도서_검색('해리포터')
    도서_추가('1Q84', '무라카미 하루키', '소설')
    ```
    
    ### **문제 4: 리스트 슬라이싱을 활용한 데이터 분석**
    
    - 주어진 데이터 리스트에서 특정 조건을 만족하는 데이터만 슬라이싱하세요.
    - 예를 들어, 특정 범위의 가격을 가진 상품만 조회하거나 특정 날짜에 판매된 상품만 조회하는 기능을 구현하세요.
    - 조회된 데이터를 정렬하거나 뒤집는 기능도 구현하세요.
    
    ```python
    # 상품 데이터
    상품_데이터 = [1000, 2000, 1500, 3000, 2500]
    
    # 특정 범위의 가격 상품 조회
    def 가격_조회(최소가격, 최대가격):
        조회_데이터 = 상품_데이터[최소가격:최대가격]
        print(f'{최소가격} ~ {최대가격} 범위의 상품: {조회_데이터}')
    
    가격_조회(1000, 2500)
    ```
    

# ✍️ 오늘의 혼잣말

---

- 오늘 공부한 내용은 파이썬의 기본적인 자료구조인 리스트와 튜플에 관한 것이었다. 리스트와 튜플은 데이터를 효율적으로 관리하고 다루는데 필수적인 도구이고 실제 프로젝트나 업무 할때도 정말 많이 사용하는 기능이다.
- 아무래도 리스트와 튜플을 활용하면 데이터를 효과적으로 조작하고 저장할 수 있기 때문이다.
- 나중에 별도로 정리를 하겠지만 실무 하면서 제일 어려웠던건 이런 1차원적인 리스트와 튜플이 아니라 nested list 같은 중첩된 개념이었던것 같다.
- 근데 뒤돌아서 생각해보면 그러한 중첩된 내용을 잘 이해하지 못한것 자체가 기본 개념과 활용에 대한 이해가 부족해서가 아니었나 싶다.
- 그래서 리스트와 튜플의 차이를 이해하는 것은 중요하다.