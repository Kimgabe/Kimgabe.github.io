---
title: "Statistics"
layout: category
taxonomy: statistics
entries_layout: grid
permalink: /data-science/statistics/---

Explore statistical concepts and methods essential for data science. From descriptive statistics to inferential statistics, hypothesis testing, and statistical modeling.

{% assign posts = site.posts | where: "categories", "statistics" %}
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