---
title: "Machine Learning"
layout: category
taxonomy: machine-learning
entries_layout: grid
permalink: /ai-ml/machine-learning/---

Master machine learning fundamentals and advanced algorithms. Explore supervised learning, unsupervised learning, reinforcement learning, and modern ML techniques.

{% assign posts = site.posts | where: "categories", "machine-learning" %}
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

