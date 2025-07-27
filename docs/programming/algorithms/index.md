---
title: "Algorithms"
layout: category
taxonomy: algorithms
entries_layout: grid
permalink: /programming/algorithms/---

Algorithm practice and coding test solutions. Learn problem-solving techniques, data structures, and algorithmic thinking through various programming challenges.

{% assign posts = site.posts | where: "categories", "algorithms" %}
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
