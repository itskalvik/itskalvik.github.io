---
title: "Low-Cost Underwater In-Pipe Centering and Inspection Using a Minimal-Sensing Robot"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Jason O'Kane

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

abstract: Autonomous underwater inspection of submerged pipelines is challenging due to confined geometries, turbidity, and the scarcity of reliable localization cues. This paper presents a minimal-sensing strategy that enables a free-swimming underwater robot to center itself and traverse a flooded pipe of known radius using only an IMU, a pressure sensor, and two sonars$:$ a downward-facing single-beam sonar and a rotating 360° sonar. We introduce a computationally efficient method for extracting range estimates from single-beam sonar intensity data, enabling reliable wall detection in noisy and reverberant conditions. A closed-form geometric model leverages the two sonar ranges to estimate the pipe center, and an adaptive, confidence-weighted proportional-derivative (PD) controller maintains alignment during traversal. The system requires no Doppler velocity log, external tracking, or complex multi-sensor arrays. Experiments in a submerged 46 cm-diameter pipe using a Blue Robotics BlueROV2 heavy remotely operated vehicle demonstrate stable centering and successful full-pipe traversal despite ambient flow and structural deformations. These results show that reliable in-pipe navigation and inspection can be achieved with a lightweight, computationally efficient sensing and processing architecture, advancing the practicality of autonomous underwater inspection in confined environments. <p><br></p>{{< rawhtml >}}<p align="center"><div class="video-con"><iframe width="560" height="315" src="https://www.youtube.com/embed/T9OuLdhBZxs?si=-QoTzNKrA66eyZlQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div></p>{{< /rawhtml >}}<p><br></p>{{< rawhtml >}}<p align="center"><div class="video-con"><iframe width="560" height="315" src="https://www.youtube.com/embed/BNLWEDlfLTg?si=6u9WgK67Myt0_Z9T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div></p>{{< /rawhtml >}}

tags: []

# Display this page in the Featured widget?
featured: true

links:
url_pdf: https://arxiv.org/pdf/2602.05265
---
