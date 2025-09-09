---
title: "Research"
layout: research
username: admin
design:
  spacing: "3rem"
bio:
  button:
    text: Download CV
    url: /uploads/Kalvik_Jakkala.pdf
collections:
  - id: publications
    content:
      archive:
        enable: true
      title: Featured Publications
      filters:
        section_name: /publication
        featured_only: true
    design:
      view: article-grid
      columns: 2

  - id: projects
    content:
      title: Featured Projects
      filters:
        section_name: /project
        featured_only: false
    design:
      view: article-grid
      fill_image: false
      columns: 2
      
  - id: blog
    content:
      title: Recent Posts
      count: 2
      filters:
        section_name: /blog
        featured_only: false
    design:
      view: article-grid
      fill_image: false
      columns: 2

  - id: recent-publications
    content:
      title: Recent Publications
      filters:
        section_name: /publication
        exclude_featured: true
    design:
      view: citation
---

