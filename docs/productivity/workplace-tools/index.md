---
title: "Workplace Tools"
layout: category
taxonomy: workplace-tools
entries_layout: grid
permalink: /productivity/workplace-tools/---

Discover workplace tools and applications that enhance collaboration, communication, and productivity in professional environments.

{% assign posts = site.posts | where: "categories", "workplace-tools" %}
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