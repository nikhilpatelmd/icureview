---
pagination:
  data: collections
  size: 1
  alias: tag
  filter:
    - all
    - post
    - posts
    - tagList
  addAllPagesToCollections: true
layout: 'tags'
eleventyComputed:
  title: '{{ tag }}'
permalink: /tag/{{ tag | slugify }}/
---

{% set postslist = collections[ tag ]%}
{% include "partials/post-list.njk" %}
