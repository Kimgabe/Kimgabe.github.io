---
title: "EDA Methods"
layout: category
taxonomy: eda-methods
entries_layout: grid
permalink: /data-science/eda-methods/---

Master exploratory data analysis (EDA) methods and techniques. Learn how to effectively explore, understand, and summarize datasets through various analytical and visual approaches.

{% assign posts = site.posts | where: "categories", "eda-methods" %}
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