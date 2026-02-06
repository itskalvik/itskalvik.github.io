---
title: "Informative Path Planning with Guaranteed Estimation Uncertainty"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Saurav Agarwal
  - Jason O'Kane
  - Srinivas Akella

date: '2026-01-01T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2026-01-01T00:00:00Z'
hide_date: true
reading_time: false

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['preprint']

# Publication name and optional abbreviated publication name.
publication: In *Computing Research Repository (CoRR 2026)*
publication_short: In *CoRR 2026*

abstract: Environmental monitoring robots often need to reconstruct spatial fields (e.g., salinity, temperature, bathymetry) under tight distance and energy constraints. Classical boustrophedon lawnmower surveys provide geometric coverage guarantees but can waste effort by oversampling predictable regions. In contrast, informative path planning (IPP) methods leverage spatial correlations to reduce oversampling, yet typically offer no guarantees on reconstruction quality. This paper bridges these approaches by addressing *informative path planning with guaranteed estimation uncertainty*$:$ computing the shortest path whose measurements ensure that the Gaussian-process (GP) posterior variance---an intrinsic uncertainty measure that lower-bounds the mean-squared prediction error under the GP model---falls below a user-specified threshold over the monitoring region. <p><br></p>We propose a three-stage approach$:$ (i) learn a GP model from available prior information; (ii) transform the learned GP kernel into binary *coverage maps* for each candidate sensing location, indicating which locations’ uncertainty can be reduced below a specified target; and (iii) plan a near-shortest route whose combined coverage satisfies the global uncertainty constraint. To address heterogeneous phenomena, we incorporate a nonstationary kernel that captures spatially varying correlation structure, and we accommodate non-convex environments with obstacles. Algorithmically, we present methods with provable approximation guarantees for sensing-location selection and for the joint selection-and-routing problem under a travel budget. Experiments on real-world topographic data show that our planners meet the uncertainty target using fewer sensing locations and shorter travel distances than a recent baseline, and field experiments with bathymetry-mapping autonomous surface and underwater vehicles demonstrate real-world feasibility. <p><br></p>{{< rawhtml >}}<p align="center"><div class="video-con"><iframe width="560" height="315" src="https://www.youtube.com/embed/9ghPcQJtmWE?si=3hY1HDSmVkeMkaCA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div></p>{{< /rawhtml >}}<p><br></p>{{< rawhtml >}}<p align="center"><div class="video-con"><iframe width="560" height="315" src="https://www.youtube.com/embed/fwG-EzzaCtk?si=q6ncOec92qXpn6JT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div></p>{{< /rawhtml >}}

tags: []

# Display this page in the Featured widget?
featured: true

links:
url_pdf: https://arxiv.org/pdf/2602.05198
---
