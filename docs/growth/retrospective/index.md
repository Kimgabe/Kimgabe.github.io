---
title: "Retrospective"
layout: category
taxonomy: retrospective
entries_layout: grid
permalink: /growth/retrospective/---

Reflective insights and lessons learned from various projects, experiences, and learning journeys. Documenting growth through retrospective analysis.

{% assign posts = site.posts | where: "categories", "retrospective" %}
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
