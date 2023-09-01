---
layout : single
title:  "[스터디노트] Day3 파이썬 기초"
categories: studynote
toc: true
highlight: false
header:
  teaser: /assets/images/unsplash/study_note.jpg
  overlay_image: /assets/images/unsplash/study_note.jpg
  overlay_filter: 0.5
  caption: "Photo credit: [**Unsplash**](https://unsplash.com/photos/842ofHC6MaI)"
tags:
  - python
  - 데이터 입력
  - 데이터 출력
  - format()
  - 형식문자
  - 산술연산자
---


# 💡공부한 내용

---

- **데이터 입력 및 출력**: 사용자로부터 데이터를 입력받고 결과를 출력하는 방법.
- **format()과 형식문자**: 문자열 내에 변수 값을 삽입하여 출력하는 방법.
- **산술연산자(덧셈, 뺄셈)**: 기본적인 수학 연산을 수행하는 방법.

# 📝 오늘의 하이라이트

---

<aside>
💡 복습을 위해 예제 코드는 가급적 강의에서 들은 내용이 아닌 직접 만들어서 작성

</aside>

- **데이터 입력 및 출력**: 사용자로부터 입력을 받고 그 결과를 출력하는 것은 프로그램의 기본적인 상호작용이다. 이를 통해 사용자가 원하는 작업을 수행할 수 있게 한다.
    
    예제 코드:
    
    ```python
    user_name = input("이름을 입력하세요: ")  # 사용자로부터 이름 입력
    print("환영합니다, {}님!".format(user_name))  # 입력받은 이름 출력
    ```
    
- **format()과 형식문자**: 문자열 내에 변수 값을 삽입하여 출력하는 기능은 코드의 가독성과 재사용성을 높인다. **`format()`**을 사용하면 변수를 원하는 형식에 맞게 쉽게 출력할 수 있다.
    
    예제 코드:
    
    ```python
    name = "홍길동"
    age = 30
    print("{}님의 나이는 {}살입니다.".format(name, age))  # 변수를 사용한 문자열 포매팅
    ```
    
- **산술연산자(덧셈, 뺄셈)**: 덧셈과 뺄셈은 프로그래밍에서 기본적인 수학 연산으로 사용된다. 이를 활용하면 다양한 계산과 데이터 처리가 가능하다.
    
    예제 코드:
    
    ```python
    num1 = 10
    num2 = 5
    addition = num1 + num2  # 덧셈
    subtraction = num1 - num2  # 뺄셈
    
    print("덧셈 결과:", addition)  # 덧셈 결과 출력
    print("뺄셈 결과:", subtraction)  # 뺄셈 결과 출력
    ```
    

# ✍️ 오늘의 혼잣말

---

- 프로그래밍의 기본 중의 기본을 다져가고 있다. 특히 문자열 포매팅(fstring)은 얼마나 코드가 깔끔해지는지를 체감할 수 있어 좋았다. 예전에 배울때는 fstring을 적용하는 것도 순서나 문법을 헷갈려 했었는데, 그간 여러번 사용해서 그런지 조금은 익숙한 기분이다.