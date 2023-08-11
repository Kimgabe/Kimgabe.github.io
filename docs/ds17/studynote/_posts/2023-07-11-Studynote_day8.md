---
layout : single
title:  "[스터디노트] Day8 파이썬 기초"
categories: studynote
toc: true
highlight: false
header:
  teaser: /assets/images/unsplash/study_note.jpg
  overlay_image: /assets/images/unsplash/study_note.jpg
  overlay_filter: 0.5
  caption: "Photo credit: [**Unsplash**](https://unsplash.com/photos/842ofHC6MaI)"
tags:
  - 모듈 사용 방법
  - Module Usage
  - 실행(메인) 파일
  - Execution (Main) File
  - 패키지
  - Package
  - site-packages
  - site-packages
  - 자주 사용하는 외부 모듈
  - Commonly Used External Modules
  - 객체지향 프로그래밍
  - Object-Oriented Programming
  - 클래스와 객체 생성
  - Class and Object Creation
  - 객체 속성변경
  - Modifying Object Attributes
---


# 💡공부한 내용

---

- **모듈 사용 방법**
- **실행(메인) 파일**
- **패키지**
- **site-packages**
- **자주 사용하는 외부 모듈**
- **객체지향 프로그래밍**
- **클래스와 객체 생성**
- **객체 속성변경**

# 📝 오늘의 하이라이트

---

<aside>
💡 복습을 위해 예제 코드는 가급적 강의에서 들은 내용이 아닌 직접 만들어서 작성

</aside>

- **모듈 사용**: 모듈은 코드를 재사용하기 좋게 만드는 수단으로, 다른 파일에서 작성한 함수나 변수를 가져와 사용할 수 있다.
    
    예제 코드:
    
    ```python
    # my_module.py 파일
    def my_function():
        print("모듈에서 출력")
    
    # main.py 파일
    import my_module
    my_module.my_function()  # "모듈에서 출력" 출력
    ```
    
- **실행(메인) 파일**: 파이썬에서 실행되는 주 파일을 의미하며, **`if __name__ == "__main__":`** 구문을 사용해 구분한다. 이는 해당 파일이 메인 파일로써 실행될 때와 모듈로써 호출될 때를 구분하기 위해 사용된다.
    
    예제 코드:
    
    ```python
    # main.py 파일
    
    def main_function():
        print("메인 함수 실행")
    
    if __name__ == "__main__":
        main_function()  # 파일을 직접 실행할 때만 "메인 함수 실행"이 출력된다.
    ```
    
- **패키지**: 패키지는 여러 모듈을 묶어서 구조화하는 방법으로, 대규모 프로젝트에서 코드 관리를 용이하게 한다.
- **site-packages**: 파이썬의 서드파티 패키지가 설치되는 디렉토리로, 패키지 관리를 위한 중요한 부분이다.
- **자주 사용하는 외부 모듈**: **`requests`**, **`numpy`**, **`pandas`** 등 유용한 외부 패키지를 활용하여 개발의 효율을 높인다.
- **객체지향 프로그래밍**: 코드의 재사용과 유지 보수를 용이하게 하기 위한 프로그래밍 패러다임이다. 이는 프로그램을 객체들의 모임으로 보고, 객체 간의 상호작용을 통해 로직을 구현한다. 객체는 속성(상태)과 메서드(행동)을 가진다.
    
    예제 코드:
    
    ```python
    class Dog:
        def bark(self):
            print("멍멍!")
    
    my_dog = Dog()
    my_dog.bark()  # "멍멍!" 출력
    ```
    
- **클래스와 객체 생성**: 클래스는 객체의 틀을 만드는 것이고, 객체는 클래스를 바탕으로 생성된 실체다.
- **객체 속성변경**: 객체의 속성은 객체의 상태를 나타내며, 이를 변경하면 객체의 현재 상태를 바꿀 수 있다. 예를 들어, 사람 객체의 이름 속성을 변경하면 해당 사람 객체의 이름이 바뀌는 것과 같다.
    
    예제 코드:
    
    ```python
    class Person:
        def __init__(self, name):
            self.name = name
    
    person = Person("홍길동")
    person.name = "이순신"  # 객체의 이름 속성 변경
    print(person.name)  # "이순신" 출력, 객체의 상태가 바뀜
    ```
    

# ✍️ 오늘의 혼잣말

---

- 오늘은 모듈과 패키지, 그리고 객체지향 프로그래밍에 대해 배웠다. 코드의 재사용과 구조화에 대한 중요성을 느꼈다.
- 솔직히 site-packages 들은 적극적으로 많이 활용을 하는데 모듈은 활용을 잘 해보지 않았다. 예전에 Anomaly Detection 샘플 코드를 작성할때 쉐도잉을 하면서 사용했던 것을 불러와서 사용해본 적이 있는데, 모듈 파일을 함께 업로드 해주지 않으면 또는 모듈 파일의 상세 코드를 함께 공유하지 않는다면, 전체 코드 노트에서 내용을 파악할 수 없기 때문에 제 3자가 코드 리뷰를 할때는 조금 장벽이 되는 부분이라 느꼈다.
- 모듈을 사용할때는 주석처리를 반드시 하고, 해당 모듈을 공개해 두는 것이 좋을 것 같다.(핵심 기술이어서 공개 하면 안되는 경우 제외)