---
title: "Data Analysis"
layout: category
taxonomy: data-analysis
entries_layout: grid
permalink: /portfolio/data-analysis/---

Comprehensive data analysis projects demonstrating end-to-end analytical workflows from data collection to insights and recommendations.

{% assign posts = site.posts | where: "categories", "data-analysis" %}
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