---
title: "Python"
layout : category-archive
category: Python
permalink: /Personal_Study/python/
author profile : true
sidebar_main : true
---

## Python 카테고리의 포스트 목록

{% for post in site.posts %}
  {% if post.categories contains 'python' %}
- [{{ post.title }}]({{ post.url }})
  {% endif %}
{% endfor %}