---
layout: post
title: YARC Events
permalink: /events/
---

{% for post in site.categories.events %}
<article class="post">
Event on {{ post.event-date | date: "%B %e, %Y" }} -
{{ post.categories | uniq | sort | join: ', ' | remove: ', events' | upcase }}
<h2><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>
</article>
{% endfor %}

