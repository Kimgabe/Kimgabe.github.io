---
title: "SQL"
layout: category
taxonomy: sql
entries_layout: grid
permalink: /database/sql/---

Master SQL fundamentals and advanced database querying techniques. Learn SELECT, JOIN, GROUP BY, and complex query optimization for effective data management.

{% assign posts = site.posts | where: "categories", "sql" %}
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

