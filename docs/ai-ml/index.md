---
title: "AI & Machine Learning"
layout: category
taxonomy: ai-ml
entries_layout: grid
permalink: /ai-ml/---

Explore the fascinating world of artificial intelligence and machine learning. This category covers everything from foundational machine learning concepts to cutting-edge deep learning techniques, computer vision applications, and AI agents.

{% assign posts = site.posts | where: "categories", "ai-ml" %}
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