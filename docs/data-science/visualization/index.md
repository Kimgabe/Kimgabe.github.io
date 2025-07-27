---
title: "Data Visualization"
layout: category
taxonomy: visualization
entries_layout: grid
permalink: /data-science/visualization/---

Learn data visualization techniques and tools. Create compelling charts, graphs, and interactive visualizations to communicate insights effectively.

{% assign posts = site.posts | where: "categories", "visualization" %}
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