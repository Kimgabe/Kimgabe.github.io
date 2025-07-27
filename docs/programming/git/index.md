---
title: "Git"
layout: category
taxonomy: git
entries_layout: grid
permalink: /programming/git/---

Master Git version control system fundamentals. Learn essential commands, branching strategies, collaboration workflows, and best practices for effective source code management.

{% assign posts = site.posts | where: "categories", "git" %}
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


