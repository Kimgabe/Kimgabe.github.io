---
title: "Data Science"
layout: category
taxonomy: data-science
entries_layout: grid
permalink: /data-science/---

Comprehensive data science resources covering the entire data pipeline from preprocessing and statistical analysis to visualization and exploratory data analysis methods.

{% assign posts = site.posts | where: "categories", "data-science" %}
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