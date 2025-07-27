---
title: "Tools"
layout: category
taxonomy: tools
entries_layout: grid
permalink: /productivity/tools/---

Explore essential tools and software for enhanced productivity. From development tools to utility applications that streamline your workflow.

{% assign posts = site.posts | where: "categories", "tools" %}
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