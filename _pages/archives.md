---
title: "Archives"
layout: archive-with-chart
permalink: /archives/
author_profile: true
---

## 📅 Posts by Year

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% assign year_counts = "" | split: "," %}
{% assign year_labels = "" | split: "," %}

{% for year_group in posts_by_year %}
  {% assign year_counts = year_counts | push: year_group.items.size %}
  {% assign year_labels = year_labels | push: year_group.name %}
{% endfor %}

<div class="archive-chart-container">
  <canvas id="yearChart" width="400" height="200"></canvas>
</div>

<div class="archive-content">
  {% for year_group in posts_by_year %}
  <div class="archive-year">
    <h3 class="archive-year-title">
      <i class="fas fa-calendar-alt"></i> 
      {{ year_group.name }} 
      <span class="post-count">({{ year_group.items.size }} posts)</span>
    </h3>
    
    {% assign posts_by_month = year_group.items | group_by_exp: "post", "post.date | date: '%B'" %}
    {% for month_group in posts_by_month %}
    <div class="archive-month">
      <h4 class="archive-month-title">
        <i class="fas fa-chevron-right"></i> 
        {{ month_group.name }} 
        <span class="post-count">({{ month_group.items.size }})</span>
      </h4>
      
      <div class="archive-posts">
        {% for post in month_group.items %}
        <div class="archive-post-item">
          <div class="archive-post-meta">
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%m-%d" }}</time>
            {% if post.categories.size > 0 %}
            <div class="archive-post-categories">
              {% for category in post.categories limit:2 %}
              <span class="archive-category">{{ category }}</span>
              {% endfor %}
            </div>
            {% endif %}
          </div>
          <h5 class="archive-post-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h5>
        </div>
        {% endfor %}
      </div>
    </div>
    {% endfor %}
  </div>
  {% endfor %}
</div>

<script>
// Chart.js for year statistics
document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('yearChart').getContext('2d');
  const yearChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: {{ year_labels | jsonify }},
      datasets: [{
        label: 'Posts per Year',
        data: {{ year_counts | jsonify }},
        backgroundColor: 'rgba(233, 84, 107, 0.8)',
        borderColor: 'rgba(233, 84, 107, 1)',
        borderWidth: 2,
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Posts Distribution by Year',
          font: {
            size: 16,
            family: 'var(--font-heading)'
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          }
        }
      }
    }
  });
});
</script>