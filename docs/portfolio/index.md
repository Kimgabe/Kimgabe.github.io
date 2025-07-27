---
title: "Portfolio"
layout: category
taxonomy: portfolio
entries_layout: grid
permalink: /portfolio/---

Showcase of data science and machine learning projects. Explore ML-based solutions, deep learning applications, and comprehensive data analysis projects.

{% assign posts = site.posts | where: "categories", "portfolio" %}
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