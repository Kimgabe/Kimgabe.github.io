---
title: "Automation"
layout: category
taxonomy: automation
entries_layout: grid
permalink: /productivity/automation/---

Discover automation techniques and tools to streamline repetitive tasks. Learn scripting, workflow automation, and process optimization strategies.

{% assign posts = site.posts | where: "categories", "automation" %}
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