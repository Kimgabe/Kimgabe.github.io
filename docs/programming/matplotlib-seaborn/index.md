---
title: "Matplotlib & Seaborn"
layout: category
taxonomy: matplotlib-seaborn
entries_layout: grid
permalink: /programming/matplotlib-seaborn/---

Master data visualization with Matplotlib and Seaborn. Learn to create compelling charts, plots, and statistical visualizations to effectively communicate data insights.

{% assign posts = site.posts | where: "categories", "matplotlib-seaborn" %}
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