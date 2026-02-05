---
title: "Fully Differentiable Adaptive Informative Path Planning"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Srinivas Akella

date: '2025-02-01T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2024-09-01T00:00:00Z'
hide_date: true
reading_time: false

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *IEEE International Conference on Robotics and Automation (IEEE ICRA 2025)*
publication_short: In *IEEE ICRA 2025*

abstract: Autonomous robots can survey and monitor large environments. However, these robots often have limited computational and power resources, making it crucial to develop an efficient and adaptive informative path planning (IPP) algorithm. Such an algorithm must quickly adapt to environmental data to maximize the information collected while accommodating path constraints, such as distance budgets and boundary limitations. <p><br></p>Current approaches to this problem often rely on maximizing mutual information using methods such as greedy algorithms, Bayesian optimization, and genetic algorithms. These methods can be slow and do not scale well to large or 3D environments. We present an adaptive IPP approach that is fully differentiable, significantly faster than previous methods, and scalable to 3D spaces. Our approach also supports continuous sensing robots, which collect data continuously along the entire path, by leveraging streaming sparse Gaussian processes.<p><br></p>Benchmark results on two real-world datasets demonstrate that our approach yields solutions that are on par with or better than baseline methods while being up to two orders of magnitude faster. Additionally, we showcase our adaptive IPP approach in a 3D space using a system-on-chip embedded computer with minimal computational resources. Our code is available in the SGP-Tools Python library, complete with extensive documentation, and includes a companion ROS2 package for deployment on ArduPilot-based robots.

tags: []

# Display this page in the Featured widget?
featured: true

links:
url_pdf: 'https://openreview.net/pdf?id=f7Op01TROT'
url_code: 'https://www.sgp-tools.com/'
---
