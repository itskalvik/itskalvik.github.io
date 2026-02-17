---
title: "Schur-MI: Fast Mutual Information for Robotic Information Gathering"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
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

abstract: Mutual information~(MI) is a principled and widely used objective for robotic information gathering~(RIG), providing strong theoretical guarantees for sensor placement~(SP) and informative path planning~(IPP). However, its high computational cost—dominated by repeated log-determinant evaluations—has limited its use in real-time planning. This letter presents \emph{Schur-MI}, a Gaussian process~(GP) MI formulation that (i) leverages the iterative structure of RIG to \emph{precompute} and reuse expensive intermediate quantities across planning steps, and (ii) uses a \emph{Schur-complement} factorization to avoid large determinant computations. Together, these methods reduce the per-evaluation cost of MI from $\mathcal{O}(|\mathcal{V}|^3)$ to $\mathcal{O}(|\mathcal{A}|^3)$, where $\mathcal{V}$ and $\mathcal{A}$ denote the candidate and selected sensing locations, respectively. Experiments on real-world bathymetry datasets show that Schur-MI achieves up to a $12.7\times$ speedup over the standard MI formulation. Field trials with an autonomous surface vehicle~(ASV) performing adaptive IPP further demonstrate the method’s practicality. By making MI computation tractable for online planning, Schur-MI helps bridge the gap between information-theoretic objectives and real-time robotic exploration.

tags: []

# Display this page in the Featured widget?
featured: false

links:
url_pdf: https://arxiv.org/pdf/2602.12346
---
