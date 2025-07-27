---
title: "Pandas"
layout: category
taxonomy: pandas
entries_layout: grid
permalink: /data-science/pandas/---

Master Pandas, the powerful data manipulation and analysis library for Python. Learn data structures, data cleaning, transformation, and analysis techniques.

{% assign posts = site.posts | where: "categories", "pandas" %}
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