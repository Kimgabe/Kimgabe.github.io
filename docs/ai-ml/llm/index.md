---
title: "Large Language Models"
layout: category
taxonomy: llm
entries_layout: grid
permalink: /ai-ml/llm/---

Dive into the world of Large Language Models (LLMs). Learn about transformer architectures, fine-tuning techniques, prompt engineering, and the latest developments in natural language processing.

{% assign posts = site.posts | where: "categories", "llm" %}
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