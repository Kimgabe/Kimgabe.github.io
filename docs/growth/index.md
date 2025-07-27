---
title: "Growth"
layout: category
taxonomy: growth
entries_layout: grid
permalink: /growth/---

Personal and professional growth resources. Explore career development, reviews of tools and methodologies, and retrospective insights from various projects and experiences.

{% assign posts = site.posts | where: "categories", "growth" %}
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