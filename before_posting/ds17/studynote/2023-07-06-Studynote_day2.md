---
layout : single
title:  "[스터디노트] Day2 파이썬 기초"
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
  - install
  - pycharm
  - data
  - memory
  - variables
  - 변수
  - datatype
  - 자료형
  - 자료형변환
---


# 💡공부한 내용

---
- **Pycharm 설치**: 설치 방법을 학습하고 실습.
- **데이터와 메모리**: 데이터 저장 원리 이해.
- **변수**: 변수 선언 및 할당 방법.
- **변수를 사용하는 이유**: 코드의 재사용성 및 가독성 향상.
- **변수명을 지정하는 방법과 규칙**: 규칙에 맞는 변수명 지정 방법.
- **자료형**: 문자열, 숫자, 리스트 등 다양한 자료형에 대한 이해.
- **자료형 변환(문자/숫자/그외 데이터)**: 다양한 데이터 타입 간 변환 방법.

# 📝 오늘의 하이라이트

---

- **변수를 사용하는 이유**: 변수의 필요성을 이해하게 되면서 프로그래밍의 기본적인 부분을 다시 한 번 느꼈다.
- **자료형 변환**: 이 부분은 꽤 중요한데, 데이터 처리하면서 자주 마주치게 되는 내용이다. 예를 들어, 문자열을 숫자로 변환하거나, 숫자를 문자열로 변환할 때 사용한다.

```python
# 문자열을 정수와 실수로 변환
num_str = "123"
num_int = int(num_str)
num_float = float(num_str)

# 숫자를 문자열로 변환
num = 456
str_num = str(num)

# 리스트와 튜플 간 변환
my_list = [1, 2, 3]
my_tuple = tuple(my_list)
new_list = list(my_tuple)
```

# ✍️ 오늘의 혼잣말

---

- 기본적인 내용을 다시 한 번 되짚어보는 시간이었지만, 그 기본이 얼마나 중요한지 다시 한 번 느낄 수 있었다. 변수와 자료형 변환은 실무에서도 매우 중요한 부분이니, 오늘 배운 내용을 잘 응용할 수 있도록 개념을 명확히 잡고 반복해서 숙달되도록 해야 겠다. 내일도 이런 기분 좋은 학습을 이어나가고 싶다!