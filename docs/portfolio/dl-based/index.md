---
title: "Deep Learning Based"
layout: category
taxonomy: dl-based
entries_layout: grid
permalink: /portfolio/dl-based/---

Deep learning projects showcasing neural networks, computer vision, natural language processing, and other advanced AI applications.

{% assign posts = site.posts | where: "categories", "dl-based" %}
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