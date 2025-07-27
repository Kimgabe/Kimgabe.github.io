---
title: "Data Analysis"
layout: category
taxonomy: analysis
entries_layout: grid
permalink: /data-science/analysis/---

Learn comprehensive data analysis techniques and methodologies. From statistical analysis to advanced analytical approaches for extracting insights from complex datasets.

{% assign posts = site.posts | where: "categories", "analysis" %}
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