---
title: "Efficient Sensor Placement from Regression with Sparse Gaussian Processes in Continuous and Discrete Spaces"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Srinivas Akella

date: '2023-08-01T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2023-08-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['preprint']

# Publication name and optional abbreviated publication name.
publication: In *Computing Research Repository (CoRR 2023)*
publication_short: In *CoRR 2023*

abstract: The sensor placement problem is a common problem that arises when monitoring correlated phenomena, such as temperature, precipitation, and salinity. Existing approaches to this problem typically formulate it as the maximization of information metrics, such as mutual information~(MI), and use optimization methods such as greedy algorithms in discrete domains, and derivative-free optimization methods such as genetic algorithms in continuous domains. However, computing MI for sensor placement requires discretizing the environment, and its computation cost depends on the size of the discretized environment. These limitations restrict these approaches from scaling to large problems. We leverage a connection between the sensor placement problem and sparse Gaussian processes~(SGP) to address this problem. Our approach uses SGPs and optimizes them using gradient descent in a sparsely supervised manner, which allows us to efficiently find solution placements in novel continuous environments. We generalize our method to also handle discrete environments. Our experimental results on four real-world datasets demonstrate that our approach generates sensor placements consistently on par with or better than the prior state-of-the-art approaches in terms of both MI and reconstruction quality, all while being significantly faster. Our computationally efficient approach enables both large-scale sensor placement and fast robotic sensor placement for informative path planning algorithms.

tags: []

# Display this page in the Featured widget?
featured: false

url_pdf: 'https://arxiv.org/pdf/2303.00028.pdf'
url_code: 'https://itskalvik.com/sgp-tools'

---
