---
title: "Fully Differentiable Sensor Placement and Informative Path Planning"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Srinivas Akella

date: '2025-11-19T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2025-11-19T00:00:00Z'
hide_date: true
reading_time: false

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['article-journal']

# Publication name and optional abbreviated publication name.
publication: In *The International Journal of Robotics Research (IJRR)*
publication_short: In *IJRR 2025*

abstract: Sensor placement~(SP) and informative path planning~(IPP) problems are prevalent in environmental monitoring. These problems require gathering the most informative data from a limited number of sensing locations, but existing solutions face a difficult trade-off. Existing methods are often either computationally efficient but less informative, or more informative but too computationally expensive for practical use, especially on resource-constrained robots. Furthermore, many approaches are limited by requiring discretization of environment or relying on slow, derivative-free optimization techniques. <p><br></p>This paper introduces a novel, computationally efficient variational formulation for the SP problem. Our approach is differentiable with respect to the sensing locations, enabling fast gradient-based optimization in continuous spaces and delivering performance comparable to MI-based methods at a fraction of the computational cost. We establish our formulation as a special case of sparse Gaussian processes~(SGPs). This connection allows us to generalize the method to solve the IPP problem for single and multi-robot systems, efficiently incorporating differentiable path constraints and diverse sensor types. The approach is validated through extensive benchmarks and field experiments with an Autonomous Surface Vehicle~(ASV) and an Autonomous Underwater Vehicle~(AUV). We also provide SGP-Tools—an open-source Python library—and a companion ROS~2 package for Ardupilot-based mobile robots.

tags: []

# Display this page in the Featured widget?
featured: true

links:
url_pdf: 'https://journals.sagepub.com/doi/10.1177/02783649251384993'
url_code: 'https://www.sgp-tools.com/'

---
