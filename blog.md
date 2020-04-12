---
layout: post
title: YARC Updates
permalink: /blog/
---

{% for post in site.posts %}
<article class="post">
Posted on {{ post.date | date: "%B %e, %Y" }} -
{{ post.categories | uniq | sort | join: ', ' | upcase }}
<h2><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>
</article>
{% endfor %}

