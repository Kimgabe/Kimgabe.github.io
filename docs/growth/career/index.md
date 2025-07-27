---
title: "Career"
layout: category
taxonomy: career
entries_layout: grid
permalink: /growth/career/---

Career development insights and guidance for data science and technology professionals. Job market analysis, skill development, and career transition strategies.

{% assign posts = site.posts | where: "categories", "career" %}
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

