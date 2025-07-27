---
title: "Python"
layout: category
taxonomy: python
entries_layout: grid
permalink: /programming/python/---

Learn Python programming fundamentals and advanced concepts. From basic syntax and data structures to object-oriented programming and advanced Python features.

{% assign posts = site.posts | where: "categories", "python" %}
{% for post in posts %}
  <article class="entry">
    <header class="entry-header">
      <h3 class="entry-title">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>
      <div class="entry-meta">
        <time class="entry-time">{{ post.date | date: "%B %d, %Y" }}</time>
      </div>
    </header>
    <div class="entry-excerpt">
      {{ post.excerpt | markdownify | strip_html | truncate: 160 }}
    </div>
  </article>
{% endfor %}

