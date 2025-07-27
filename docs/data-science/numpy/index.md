---
title: "NumPy"
layout: category
taxonomy: numpy
entries_layout: grid
permalink: /data-science/numpy/---

Learn NumPy, the fundamental package for scientific computing in Python. Master array operations, mathematical functions, and efficient numerical computations.

{% assign posts = site.posts | where: "categories", "numpy" %}
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