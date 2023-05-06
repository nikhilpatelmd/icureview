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
    - trials
    - trial
  addAllPagesToCollections: true
layout: 'tags'
eleventyComputed:
  title: '{{ tag }}'
permalink: /tag/{{ tag | slugify }}/
---
