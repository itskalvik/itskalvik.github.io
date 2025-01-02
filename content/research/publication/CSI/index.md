---
title: "Deep CSI Learning for Gait Biometric Sensing and Recognition"
layout: "publication-post"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Arupjyoti Bhuyan
  - Zhi Sun
  - Pu Wang
  - Zhuo Cheng
  
date: '2019-06-01T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2019-06-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *Third International Balkan Conference on Communications and Networking (BalkanCom 2019)*
publication_short: In *BalkanCom 2019*

abstract: Gait is a person's natural walking style and a complex biological process that is unique to each person. Recently, the channel state information (CSI) of WiFi devices have been exploited to capture human gait biometrics for user identification. However, the performance of existing CSI-based gait identification systems is far from satisfactory. They can only achieve limited identification accuracy (maximum 93%) only for a very small group of people (i.e., between 2 to 10). To address such challenge, an end-to-end deep CSI learning system is developed, which exploits deep neural networks to automatically learn the salient gait features in CSI data that are discriminative enough to distinguish different people Firstly, the raw CSI data are sanitized through window-based denoising, mean centering and normalization. The sanitized data is then passed to a residual deep convolutional neural network (DCNN), which automatically extracts the hierarchical features of gait-signatures embedded in the CSI data. Finally, a softmax classifier utilizes the extracted features to make the final prediction about the identity of the user. In a typical indoor environment, a top-1 accuracy of 97.12±1.13% is achieved for a dataset of 30 people.

tags: []

# Display this page in the Featured widget?
featured: false

url_pdf: 'https://arxiv.org/pdf/1902.02300.pdf'
url_code: 'https://github.com/kdkalvik/WiFi-user-recognition'

---
