---
title: "STAR: Simultaneous Tracking and Recognition through Millimeter Waves and Deep Learning"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Prabhu Janakaraj
  - Kalvik Jakkala
  - Arupjyoti Bhuyan
  - Zhi Sun
  - Pu Wang
  - Minwoo Lee

date: '2019-11-01T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2019-11-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *12th IFIP Wireless and Mobile Networking Conference (WMNC 2019)*
publication_short: In *WMNC 2019*

abstract: Gait is the human's natural walking style that is a complex biological process unique to each person. This paper aims to exploit millimeter wave (mmWave) to extract fine-grained microdoppler signatures of human movements, which are used as the mmWave gait biometric for user recognition. Towards this goal, a deep microdoppler learning system is proposed, which utilizes deep neural networks to automatically learn and extract the discriminative features in the mmWave gait biometic data to distinguish a large number of people from each other. In particular, our system consists of two subsystems including human target tracking and human target recognition. The tracking subsystem is responsible for detecting the appearance of a human subject, tracking his/her locations and estimating his/her walking velocity. The recognition subsystem utilizes the tracking data to generate the microdoppler signatures as the mmWave biometrics, which are fed into a custom-designed residual deep convolutional neural network (DCNN) for automatic feature extractions. Finally, a softmax classifier utilizes the extracted features for user identification. In a typical indoor environment, a top-1 identification accuracy of 97.45% is achieved for a dataset of 20 people.

tags: []

# Display this page in the Featured widget?
featured: false

url_pdf: 'https://ieeexplore.ieee.org/abstract/document/8881354'
url_code: 'https://github.com/kdkalvik/mmWave-user-recognition'

---
