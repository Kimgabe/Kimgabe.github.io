---
layout : single
title:  "[스터디노트] Day14 기초수학"
categories: [DS17_Bootcamp, 기초수학, Study Note]
tag: 스터디노트
header :
    teaser : "/assets/img/studynote/studynote_day14.png"
---

# 💡공부한 내용

---

- **등비수열**
- **등비수열(파이썬)**

# 📝 오늘의 하이라이트

---

<aside>
💡 복습을 위해 예제 코드는 가급적 강의에서 들은 내용이 아닌 직접 만들어서 작성

</aside>

1. **등비수열**
    - **정의**: 등비수열은 연속되는 항 사이의 비가 일정한 수열
    - **왜 필요한가**: 수학적 모델링, 금융, 공학 등 다양한 분야에서 적용되며, 특정 패턴이나 현상을 분석하는 데 사용
    - **예시**: 2, 4, 8, 16, ... 과 같이 이전 항에 일정한 수를 곱하여 다음 항을 구하는 수열
2. **등비수열(파이썬)**
    - **정의**: 등비수열을 파이썬으로 표현하고 계산하는 방법
    - 복잡한 수학적 연산을 간단한 코드로 구현하여 빠르게 해결할 수 있기 때문에 유용하며, 등비수열의 일반항, 합 등을 계산할 때 사용됩니다.
    - **예제 코드**:
        
        ```python
        def geometric_sequence(a, r, n):
            # a: 첫 항, r: 공비, n: 몇 번째 항인지
            return a * (r ** (n - 1))  # 일반항을 계산하여 반환
        
        a = 2
        r = 2
        n = 5
        
        result = geometric_sequence(a, r, n)
        print(f"등비수열의 {n}번째 항은 {result}입니다.")  # 출력: 등비수열의 5번째 항은 16입니다
        ```
        

# ✍️ 오늘의 혼잣말

---

- 수학은 늘 가장 약한 부분이라고 생각해서 부담스럽다고 느끼는데 결국은 피할 수 없는 벽이란 생각이 든다.
- 당장은 조금 이해가 느리고 응용이 힘들어도 계속 보고 쓰면서 내껄로 만들어야 겠다.