---
layout : single
title:  "[스터디노트] Day5 파이썬 기초"
categories: studynote
toc: true
highlight: false
header:
  teaser: /assets/images/unsplash/study_note.jpg
  overlay_image: /assets/images/unsplash/study_note.jpg
  overlay_filter: 0.5
  caption: "Photo credit: [**Unsplash**](https://unsplash.com/photos/842ofHC6MaI)"
tags:
  - 조건식
  - Condition Evaluation
  - 조건식(if문)
  - Conditional Statement (if)
  - 양자택일 조건문 (if~else문)
  - Binary Conditional Statement (if~else)
  - if~else문과 조건식
  - Conditional Structure with if~else
  - 다자택일 조건문(if~elif문)
  - Multiple Choice Conditional Statement (if~elif)
  - 중첩 조건문
  - Nested Conditional Statement
  - 반복문
  - Loop or Iteration
  - for loop
  - while loop
---


# 💡공부한 내용

---

- **조건식**: 조건을 평가하여 참/거짓을 판별
- **조건식(if문)**: 특정 조건이 참일 때 코드 실행
- **양자택일 조건문 (if~else문)**: 두 가지 중 하나를 선택하여 실행
- **if~else문과 조건식**: 조건에 따라 다르게 실행되는 구조
- **다자택일 조건문(if~elif문)**: 여러 조건 중 하나를 선택
- **다자택일 조건문 사용시 주의할 점**: 조건의 순서와 중복
- **중첩 조건문**: 조건문 내의 조건문
- **반복문**: 코드를 반복 실행

# 📝 오늘의 하이라이트

---

<aside>
💡 복습을 위해 예제 코드는 가급적 강의에서 들은 내용이 아닌 직접 만들어서 작성

</aside>

- **건식**: 조건식은 참과 거짓을 판별하는 식으로, 프로그램의 흐름을 제어하는 기초이다.
- **조건식(if문)**: 특정 조건이 참일 때만 코드를 실행한다. 이를 통해 상황에 맞는 처리가 가능하다.
    
    예제 코드:
    
    ```python
    age = 20
    if age >= 20:
        print("성인입니다.")  # 조건이 참일 때 출력
    ```
    
- **양자택일 조건문 (if~else문)**: 두 가지 중 하나를 선택하여 실행하는 구조로, 상황에 따른 선택이 필요할 때 사용한다.
    
    예제 코드:
    
    ```python
    rain = True
    if rain:
        print("우산을 챙기세요.")  # 비가 오면 실행
    else:
        print("우산을 놓으세요.")  # 비가 오지 않으면 실행
    ```
    
- **다자택일 조건문(if~elif문)**: 여러 조건 중 하나를 선택해 실행한다. 복잡한 조건 판별에 사용한다.
    
    예제 코드:
    
    ```python
    score = 85
    if score >= 90:
        print("A등급")
    elif score >= 80:
        print("B등급")  # 여러 조건 중 하나를 선택하여 실행
    ```
    
- **다자택일 조건문 사용시 주의할 점**: 조건의 순서와 중복에 주의해야 하며, 첫 번째로 참인 조건이 실행된다.
- **중첩 조건문**: 조건문 안에 다른 조건문이 있는 구조로, 더 세밀한 제어가 가능하다.
    
    예제 코드:
    
    ```python
    age = 25
    if age >= 20:
        if age < 30:
            print("20대입니다.")  # 중첩된 조건문을 통한 판별
    ```
    
- **반복문**: 동일한 코드를 여러 번 실행하게 하는 구조로, 일련의 작업을 자동화한다.
    
    예제 코드:
    
    ```python
    for i in range(5):
        print(i)  # 0부터 4까지 숫자를 출력
    ```
    

# ✍️ 오늘의 혼잣말

---

- 오늘 배운 조건문과 반복문은 프로그래밍의 중심이다. 복잡한 로직을 구현하기 위해 이러한 제어 구조는 필수적이다. 중첩 조건문과 같은 복잡한 구조는 단순 개념은 이해가 어렵지 않으나 실제 코드 구현이 되면 엄청 복잡해져서 이해가 어려울 것 같다.
- 아무래도 여러번 반복하고 예제를 만들어 보면서 숙달 시켜야 할 것 같다.