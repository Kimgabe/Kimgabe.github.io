---
title: "Programming"
layout: category
taxonomy: programming
entries_layout: grid
permalink: /programming/---

Programming fundamentals and advanced techniques. Explore Python basics, algorithm solutions, essential libraries like NumPy and Pandas, data visualization with Matplotlib/Seaborn, and version control with Git.

{% assign posts = site.posts | where: "categories", "programming" %}
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