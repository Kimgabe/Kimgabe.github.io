---
title: "Reviews"
layout: category
taxonomy: reviews
entries_layout: grid
permalink: /growth/reviews/---

Reviews and analysis of papers, articles, tools, and resources in data science and technology. Insights from research, industry posts, webinars, and educational content.

{% assign posts = site.posts | where: "categories", "reviews" %}
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

