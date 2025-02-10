---
title: "NeuralWave: Gait-Based User Identification Through Commodity WiFi and Deep Learning"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Akarsh Pokkunuru
  - admin
  - Arupjyoti Bhuyan
  - Pu Wang
  - Zhi Sun

date: '2018-10-01T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2018-10-01T00:00:00Z'
hide_date: true
reading_time: false

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *44th Annual Conference of the IEEE Industrial Electronics Society (IEEE IECON 2018)*
publication_short: In *IEEE IECON 2018*

abstract: This paper proposes NeuralWave, an intelligent and non-intrusive user identification system based on human gait biometrics extracted from WiFi signals. In particular, the channel state information (CSI)measurements are first collected from commodity WiFi devices. Then, a collection of data preprocessing schemes are applied to sanitize and calibrate the noisy and erroneous CSI data samples to manifest and augment the gait-induced radio-frequency (RF)signatures. Next, a 23-layer deep convolutional neural network, namely RadioNet, is developed to automatically learn the salient features from the preprocessed CSI data samples. The extracted features constitute a latent representation for the gait biometric that is discriminative enough to distinguish one person from another. Using the latent biometric representation, a softmax multi-class classifier is adopted to achieve accurate user identification. Extensive experiments in a typical indoor environment are conducted to show the effectiveness of our system. In particular, NeuralWave can achieve 87.76 ± 2.14% user identification accuracy for a group of 24 people. To the best of our knowledge, NeuralWave is the first in the literature to exploit deep learning for feature extraction and classification of physiological and behavioral gait biometrics embedded in CSI signals from commodity WiFi.

tags: []

# Display this page in the Featured widget?
featured: false

url_pdf: 'https://ieeexplore.ieee.org/document/8591820'
url_code: 'https://github.com/kdkalvik/WiFi-user-recognition'

---
