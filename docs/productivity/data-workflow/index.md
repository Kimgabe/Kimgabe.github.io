---
title: "Data Workflow"
layout: category
taxonomy: data-workflow
entries_layout: grid
permalink: /productivity/data-workflow/---

Optimize your data workflows with efficient pipelines, automation, and best practices for data processing, transformation, and analysis.

{% assign posts = site.posts | where: "categories", "data-workflow" %}
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