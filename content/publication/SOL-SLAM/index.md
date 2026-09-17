---
title: "SOL-SLAM: Inverse Compositional Gauss-Newton Direct Registration for Fast Sonar-Only Local SLAM"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Jason O'Kane

date: '2026-09-01T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2026-09-01T00:00:00Z'
hide_date: true
reading_time: false

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['preprint']

# Publication name and optional abbreviated publication name.
publication: In *Computing Research Repository (CoRR 2026)*
publication_short: In *CoRR 2026*

abstract: Autonomous underwater navigation typically relies on complex and expensive multi-modal sensor suites designed to prioritize global Simultaneous Localization and Mapping (SLAM) accuracy. However, local reactive behaviors such as coarse navigation and obstacle avoidance require only local consistency—a capability that should be feasible using only a Forward-Looking Sonar (FLS), yet remains largely unaddressed, leaving a critical gap in FLS-only local SLAM. <p><br></p>Moreover, existing acoustic SLAM frameworks predominantly rely on sparse feature extraction methods that discard substantial portions of the already information-sparse acoustic returns. To overcome these limitations, this work introduces a dense direct registration approach that aligns full acoustic intensity scans to a recursively updated local map. Real-time execution is achieved via an Inverse Compositional Gauss-Newton optimization strategy that minimizes compute overhead. <p><br></p>Experimental evaluations show that this dense method yields significant improvements on translation error compared to sparse keypoint baselines, maintaining stable sub-meter tracking precision over wide displacement gaps. Moreover, this approach delivers odometry performance comparable to multi-sensor fusion pipelines (FLS, DVL, and IMU), bypassing expensive payload dependencies in feature-rich environments. We validate real-world applicability through AUV field trials, running the full local SLAM approach onboard an embedded, resource-constrained computer.

tags: []

# Display this page in the Featured widget?
featured: true

links:
url_pdf: http://arxiv.org/abs/2609.18893
---
