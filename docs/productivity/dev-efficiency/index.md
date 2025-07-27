---
title: "Development Efficiency"
layout: category
taxonomy: dev-efficiency
entries_layout: grid
permalink: /productivity/dev-efficiency/---

Enhance your development efficiency with tools, techniques, and best practices for faster coding, debugging, and project management.

{% assign posts = site.posts | where: "categories", "dev-efficiency" %}
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