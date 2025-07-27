---
title: "Computer Vision"
layout: category
taxonomy: computer-vision
entries_layout: grid
permalink: /ai-ml/computer-vision/---

Explore computer vision techniques and applications. From image processing fundamentals to advanced deep learning models for object detection, image segmentation, and visual recognition.

{% assign posts = site.posts | where: "categories", "computer-vision" %}
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