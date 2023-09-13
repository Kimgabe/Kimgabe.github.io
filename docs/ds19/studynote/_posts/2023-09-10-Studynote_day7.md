---
layout : single
title:  "[스터디노트] Day7 파이썬 기초"
categories: studynote
toc: true
highlight: false
header:
  teaser: /assets/images/unsplash/study_note.jpg
  overlay_image: /assets/images/unsplash/study_note.jpg
  overlay_filter: 0.5
  caption: "Photo credit: [**Unsplash**](https://unsplash.com/photos/842ofHC6MaI)"
tags:
  - 함수
  - Function
  - 함수 선언과 호출
  - Function Declaration and Invocation
  - 함수 내에서 또 다른 함수 호출
  - Calling Another Function Inside a Function
  - 인수와 매개변수
  - Arguments and Parameters
  - 데이터 반환
  - Returning Data
  - 지역변수와 전역변수
  - Local Variables and Global Variables
  - 중첩함수
  - Nested Functions
  - lambda 함수
  - Lambda Function
  - 모듈
  - Module
  - 모듈 제작
  - Creating Modules
---

함수의 기본개념, 인수, 매개변수, lambda함수, 모듈생성 등에 대해 학습했습니다.


# 💡공부한 내용

---

- **함수** : 함수의 개념과 필요성
- **함수 선언과 호출**: 함수 선언 방법과 호출하는 방법
- **함수 내에서 또 다른 함수 호출**: 함수 내부에서 다른 함수 호출 방법
- **인수와 매개변수**: 함수에 데이터 전달 방법
- **데이터 반환**: 함수를 통한 데이터 반환 방법
- **지역변수와 전역변수**: 변수의 범위에 대한 이해
- **중첩함수**: 함수 내부에 함수 정의
- **lambda 함수**: 익명 함수 선언
- **모듈**: 기존 함수의 재사용 방법
- **모듈 제작**: 사용자 지정 모듈 제작 방법

# 📝 오늘의 하이라이트

---

<aside>
💡 복습을 위해 예제 코드는 가급적 강의에서 들은 내용이 아닌 직접 만들어서 작성

</aside>

- **함수란?**: 코드의 재사용과 모듈화를 위한 기능. 특정 기능을 수행하는 코드 블록을 의미한다.
    
    예제 코드:
    
    ```python
    def greet():  # 함수 선언
        print("안녕하세요!")
    
    greet()  # 함수 호출
    ```
    
- **함수 선언과 호출**: 함수를 선언하고 호출하는 방법을 학습. **`def`** 키워드로 함수를 선언하고, 함수 이름으로 호출한다.
- **함수 내에서 또 다른 함수 호출**: 하나의 함수 내에서 다른 함수를 호출하는 방법을 익혔다.
    
    예제 코드:
    
    ```python
    def func1():
        print("함수1 실행")
        func2()  # 다른 함수 호출
    
    def func2():
        print("함수2 실행")
    
    func1()
    ```
    
- **인수와 매개변수**: 인수는 함수를 호출할 때 전달하는 값, 매개변수는 함수에서 받아 사용하는 변수를 의미한다.
    
    예제 코드:
    
    ```python
    def add(x, y):  # x, y는 매개변수
        return x + y
    
    result = add(3, 4)  # 3, 4는 인수
    print(result)  # 결과 출력
    ```
    
- **데이터 반환**: **`return`** 키워드를 사용하여 함수에서 값을 반환하는 방법을 학습했다.
- **지역변수와 전역변수**: 지역변수는 함수 내에서만 사용되는 변수, 전역변수는 프로그램 전체에서 사용할 수 있는 변수를 의미한다.
- **중첩함수**: 함수 내부에 또 다른 함수를 선언하는 것을 중첩함수라고 한다.
    
    예제 코드:
    
    ```python
    def outer():
        print("외부 함수 실행")
        def inner():
            print("내부 함수 실행")
        inner()
    
    outer()
    ```
    
- **lambda 함수**: 파이썬에서는 간단한 함수를 익명으로 선언할 수 있는데, 이를 lambda 함수라고 한다. lambda 함수는 일반 함수와 동일한 기능을 수행하지만, 이름을 정의하지 않고 간결한 문법으로 표현할 수 있다. 따라서 코드가 간결해지며, 일회성으로 사용할 작은 함수를 정의할 때 편리하다.
    
    예제 코드:
    
    ```python
    # 일반 함수 선언
    def add(x, y):
        return x + y
    
    # lambda 함수 선언
    add_lambda = lambda x, y: x + y
    
    print(add(3, 4))        # 일반 함수 호출
    print(add_lambda(3, 4)) # lambda 함수 호출
    ```
    
- lambda 함수는 **`def`** 키워드 없이도 함수를 선언할 수 있어 코드가 더 간결해진다. 특히 map, filter, reduce와 같은 함수와 함께 사용될때 효용이 극대화 될 수 있다.
    - **map**: 리스트의 각 요소에 대해 특정 함수를 적용하고자 할 때 사용한다.
    - **filter**: 리스트에서 특정 조건을 만족하는 요소만 추출하고자 할 때 사용한다.
    - **reduce**: 리스트의 요소들을 순차적으로 특정 함수로 처리하여 단일 값으로 축약하고자 할 때 사용한다.

```python
from functools import reduce

numbers = [1, 2, 3, 4, 5]

# map과 lambda를 이용해 각 요소의 제곱 계산
squares = map(lambda x: x**2, numbers)
print(list(squares))  # 출력: [1, 4, 9, 16, 25]

# filter와 lambda를 이용해 짝수만 추출
evens = filter(lambda x: x % 2 == 0, numbers)
print(list(evens))  # 출력: [2, 4]

# reduce와 lambda를 이용해 모든 요소의 곱 계산
product = reduce(lambda x, y: x * y, numbers)
print(product)  # 출력: 120
```

- **모듈**: 코드의 재사용을 위해 함수나 변수 등을 모아 놓은 파일을 의미한다.
- **모듈 제작**: 자신만의 모듈을 만드는 방법을 익혔다.

# ✍️ 오늘의 혼잣말

---

- 오늘은 함수와 관련된 많은 내용을 집중적으로 학습했다. 특히 중첩함수나 lambda 함수는 나중에 제대로 응용하려면 여러번 코드를 작성해보고 예제들을 사용해봐야겠다고 생각했다.
- 실제로 이전에 배우고 업무에 응용할때도 함수에 대한 개념이나 활용방법은 알고 있었지만, lambda 함수를 잘 적용하지 못해서 중첩함수를 여러번 사용해 함수를 만들었던 적이 많다.
- 처음에 작성할때는 중첩함수로 작성하는 것이 더 직관적이고 쉬워 보일 수 있으나, 나중에 코드 리뷰를 하거나 보완을 해야 할때 보면 코드가 너무 길고, 여러개의 함수를 어디서 가져와서 적용하는지 알기 어려워서 힘들었던 기억이 있다.
- 아직도 코드 작성을 하면 대체로 이렇게 하는 편인데, 이참에 lambda함수를 응용해서(효과적으로 쓸 수 있는 부분만) 코드를 짜는 연습을 해두어야 할 것 같다.