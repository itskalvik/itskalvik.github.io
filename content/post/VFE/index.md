---
title: Tutorial on variational sparse Gaussian processes
subtitle: 

## Summary for listings and search engines
summary: Walkthrough of the derivation of the variational sparse Gaussian processes [Titsias 2009]

## Date published
date: '2022-05-31T00:00:00Z'

## Date updated
lastmod: '2022-05-31T00:00:00Z'

## Is this an unpublished draft?
draft: false

## Show this page in the Featured widget?
featured: false

## Featured image
## Place an image named `featured.jpg/png` in this page's folder and customize its options here.
image:
  caption: ''
  focal_point: ''
  placement: 2
  preview_only: true

authors:
  - Kalvik

tags:
  - Bayesian learning
  - Gaussian processes

---

{{< toc >}}

## Gaussian processes
[Gaussian processes]({{< ref "GPs/index.md" >}}) are one of the most mathematically beautiful and elegant machine learning methods. We can use them for classification, regression, or generative problems. Also, the best part, they are probabilistic, so we can quantify the uncertainty in our predictions and have a lower risk of overfitting. 

Given a regression task's training set $\mathcal{D} = \{(\mathbf{x}_i, y_i), i = 1,...,n\}$ with $n$ data samples consisting of inputs $\mathbf{x}_i \in \mathbb{R}^d$ and noisy outputs $y_i \in \mathbb{R}$, we can use Gaussian processes to predict the noise-free outputs $f_*$ (or noisy $y_*$) at test locations $\mathbf{x}_*$. The approach assumes that the relationship between the inputs $\mathbf{x}_i$ and outputs  $y_i$ is given by

$$
y_i = f(\mathbf{x}_i) + \epsilon_i \quad \quad \text{where} \ \ \epsilon_i \sim \mathcal{N}(0, \sigma^2_{\text{noise}}) \\
$$

Here $\sigma^2_{\text{noise}}$ is the variance of the independent additive Gaussian noise in the observed outputs $y_i$. The latent function $f(\mathbf{x})$ models the noise-free function of interest that explains the regression dataset. 

Gaussian processes (GP) model datasets formulated as shown above by assuming a GP prior over the space of functions that could be used to explain the dataset, i.e., they assume the following prior distribution over the function

$$
p(\mathbf{f} | \mathbf{X}) = \mathcal{N}(0, \mathbf{K}) \\
$$

where $\mathbf{f} = [f_1, f_2,...,f_n]^\top$ is a vector of latent function values, $f_i = f(\mathbf{x_i})$, $\mathbf{X} = [\mathbf{x}_1, \mathbf{x}_2,...,\mathbf{x}_n]^\top$ is a vector (or matrix) of inputs, and $\mathbf{K} \in \mathbb{R}^{n \times n}$ is a covariance matrix, whose entries $\mathbf{K}_{ij}$ are given by the kernel function $k(x_i, x_j)$. 

GPs use the kernel function to index and order the inputs $\mathbf{x_i}$ so that points closer to each other (i.e., have a high covariance value from the kernel function) have similar labels and vice versa. The kernel function parameters are tuned using Type II maximum likelihood so that the GP accurately models the latent function of trainig data. Inference in GPs to get the output predictions $\mathbf{y}$, for the training set input samples $\mathbf{X}$, entails marginalizing the latent function values $\mathbf{f}$

$$
p(\mathbf{y, f} | \mathbf{X}) = p(\mathbf{y} | \mathbf{f}) p(\mathbf{f} | \mathbf{X}) \\
p(\mathbf{y} | \mathbf{X}) = \int p(\mathbf{y, f} | \mathbf{X}) d\mathbf{f}
$$

I will drop the explicit conditioning on the inputs $\mathbf{X}$ from here on to reduce the notational complexity and assume that the corresponding inputs are always in the conditioning set.

Inference on test points $\mathbf{X_*}$ to get the noise free predictions $\mathbf{f}_*$ (or noisy $\mathbf{y}_*$) can be done by considering the joint distribution over the training and test latent values, $\mathbf{f}$ and $\mathbf{f}_*$, and using Gaussian conditioning to marginalize the training set latent variables as shown below

$$
\begin{aligned}
p(\mathbf{f}, \mathbf{f}_* | \mathbf{y}) &= \frac{p(\mathbf{y} | \mathbf{f})p(\mathbf{f}, \mathbf{f}_*)}{p(\mathbf{y})} \\
p(\mathbf{f}_* | \mathbf{y}) &= \int \frac{p(\mathbf{y} | \mathbf{f})p(\mathbf{f}, \mathbf{f}_*)}{p(\mathbf{y})} d\mathbf{f} \\
&= \mathcal{N}(\mathbf{K}_{*f}(\mathbf{K}_{ff} + \sigma_{\text{noise}}^{2}I)^{-1}\mathbf{y}, \\
              &\quad \quad \ \ \ \mathbf{K}_{**}-\mathbf{K}_{*f}(\mathbf{K}_{ff} + \sigma_{\text{noise}}^{2}I)^{-1}\mathbf{K}_{f*})
\end{aligned}
$$

The problem with this approach is that it requires an inversion of a matrix of size $n \times n$, which is a $\mathcal{O}(n^3)$ operation, where $n$ is the number of training set samples. Thus this method can handle at most a few thousand training samples. Checkout my [tutorial on Gaussian processes]({{< ref "GPs/index.md" >}}) for a comprehensive explanation. 

---

## Sparse Gaussian processes
##### Variational free energy (VFE) method [Titsias, 2009]

Sparse Gaussian processes (SGPs) address the computational cost issues of Gaussian processes. Although there are numerous SGP approaches, Titsias's variational free energy (VFE) method is the most well known approach and has had a significant impact on the Gaussian process literature. 

{{< figure src="featured.gif" caption="Illustration of sparse Gaussian processes.">}}

As the name suggests, VFE is a variational approach that we can use to find an approximate posterior distribution. The main idea behind variational methods is to pick a parametric family of distributions (the variational distribution) to model the variables of interest. The distribution is chosen so that it is computationally tractable compared to the true distribution of the variables. 

We use the evidence lower bound (ELBO) as the optimization objective that, when maximized, would result in a variational distribution close to the true distribution when optimized. The ELBO is derived as follows using Jensen's inequality on the log probability of the observed output variables $\mathbf{y}$

{{< spoiler text="Click for details on Jensen's inequality" >}}

---
  Jensen's inequality states that the following holds for concave functions

  $$
  f(\mathbb{E}[\mathbf{X}]) \geq \mathbb{E}[f(\mathbf{X})]
  $$

  The $\log$ operation is a convex function. You can learn more about Jensen's inequality [here](https://en.wikipedia.org/wiki/Jensen%27s_inequality).

---

{{< /spoiler >}}

$$
\begin{aligned}
\log p(\mathbf{y}) &= \log \int p(\mathbf{y}, \mathbf{f}) d\mathbf{f} \\
&= \log \int p(\mathbf{y}, \mathbf{f}) \frac{q(\mathbf{f})}{q(\mathbf{f})} d\mathbf{f} \\
&= \log \int q(\mathbf{f}) \frac{p(\mathbf{y}, \mathbf{f})}{q(\mathbf{f})} d\mathbf{f} \\
&\geq \int q(\mathbf{f}) \log \frac{p(\mathbf{y, f})}{q(\mathbf{f})} d\mathbf{f} \ \ \ \text{(from Jensen's inequality)}\\
&= \mathbb{E}_q[\log p(\mathbf{y, f})] - \mathbb{E}_q[\log q(\mathbf{f})] \\
&= \mathcal{F}(q)
\end{aligned}
$$

Here $q(\mathbf{f})$ is the variational distribution. We choose a family of variational distributions such that the expectations are computationally efficient (refer to Bishop's [Pattern Recognition and Machine Learning](https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf) book, which has a chapter on this topic for more details).

The bound $\mathcal{F}(q)$ can also be written as the difference between the model log-marginal and the KL divergence between the variational distribution and the true posterior 

$$
\mathcal{F}(q) = \log p(\mathbf{y}) - \text{KL}(q(\mathbf{f}) || p(\mathbf{f|y}))
$$

{{< spoiler text="This follows from an alternate form of the ELBO (click for details)" >}}

---

  From the product rule we know
  $$
  p(\mathbf{f} | \mathbf{y}) = \frac{p(\mathbf{f}, \mathbf{y})}{p(\mathbf{y})}
  $$

  Then using KL divergence we get the following

  $$
  \begin{aligned}
  \text{KL}(q(\mathbf{f}) || p(\mathbf{f|y})) &= \mathbb{E}_q \left[ \log \frac{q({\mathbf{f}})}{p({\mathbf{f|y}})} \right] \\
  &= \mathbb{E}_q \left[ \log q({\mathbf{f}}) \right] - \mathbb{E}_q \left[ \log p({\mathbf{f|y}}) \right] \\
  &= \mathbb{E}_q \left[ \log q({\mathbf{f}}) \right] - \mathbb{E}_q \left[ \log p({\mathbf{f, y}}) \right] + \log p({\mathbf{y}}) \\
  &= -(\mathbb{E}_q \left[ \log p({\mathbf{f, y}}) \right] - \mathbb{E}_q \left[ \log q({\mathbf{f}}) \right]) + \log p({\mathbf{y}}) \\
  \end{aligned}
  $$

  This is the negative ELBO plus the log marginal probability of $\mathbf{y}$.

---

{{< /spoiler >}}

Therefore, the above bound $\mathcal{F}(q)$ will be tight when the variational distribution $q(\mathbf{f})$ is equal to the conditional distribution $p(\mathbf{f} \mid \mathbf{y})$. This is because when the following equality holds, the $\text{KL}$ term in the bound $\mathcal{F}(q)$ vanishes and the log-marginal is independent of the variational distribution $q(\mathbf{f})$. 

$$
q(\mathbf{f}) = p(\mathbf{f|y})
$$

But such a variational distribution is intractable. Therefore, we augment the space of latent variables with a set of inducing variables $\mathbf{u}$. The inducing variables correspond to the inducing input points $\mathbf{x}_u$. The inducing variables are drawn from the same Gaussian prior as the training set latent variables, which has a mean of zero, and the covariance is computed using the kernel function. The augmented set of latent variables is now defined as follows

$$
\hat{\mathbf{f}} = \{ \mathbf{u}, \mathbf{f} \} \\
$$

Here the latent variables $\mathbf{f}$ correspond to the training set inputs $\mathbf{X}$ and the augmented latent variables set $\hat{\mathbf{f}}$ can be factorized as follows

$$
p(\hat{\mathbf{f}}|\mathbf{y}) = p(\mathbf{f} | \mathbf{y}, \mathbf{u}) p(\mathbf{u|y}) \\
$$

We can then leverage the above factorization along with an independence assumption to compute the variational distribution $q(\hat{\mathbf{f}})$ as follows 

$$
\begin{aligned}
q(\hat{\mathbf{f}}) &= q(\mathbf{f}, \mathbf{u}) \\
              &= p(\mathbf{f} | \mathbf{u}) q(\mathbf{u})
\end{aligned}
$$

The above variational distribution is the essence of sparse Gaussian processes. It assumes that the latent variables $\mathbf{f}$ which correspond to the training set inputs $\mathbf{X}$ are independent of the training set outputs $\mathbf{y}$ given the inducing point latent variables $\mathbf{u}$. Given the independence assumption, we can limit the variational distribution to only the inducing variables $\mathbf{u}$. This is because the latent variables $\mathbf{f}$, $\mathbf{u}$ are from a multivariate Gaussian, so we can use the standard Gaussian conditioning rules to evaluate the true conditional analytically. Also, note that our variational distribution $q(\mathbf{u})$ is optimized using the training data, instead of being explicitly conditioned on the training set outputs $\mathbf{y}$. 

Now that we have a variationl distribution, we can substute it into the bound $\mathcal{F}(q)$:

$$
\begin{aligned}
\mathcal{F}(q) &= \int q(\hat{\mathbf{f}}) \log \frac{p(\mathbf{y, \hat{f}})}{q(\hat{\mathbf{f}})} d\hat{\mathbf{f}} \\
&= \int p(\mathbf{f} | \mathbf{u}) q(\mathbf{u}) \log \frac{p(\mathbf{y|f}) \cancel{p(\mathbf{f} | \mathbf{u})} p(\mathbf{u})}{\cancel{p(\mathbf{f} | \mathbf{u})} q(\mathbf{u})} d\hat{\mathbf{f}} \\
&= \int p(\mathbf{f} | \mathbf{u}) q(\mathbf{u}) \log \frac{p(\mathbf{y|f}) p(\mathbf{u})}{q(\mathbf{u})} d\hat{\mathbf{f}}
\end{aligned}
$$

The above cancellation of the conditional term $p(\mathbf{f} \mid \mathbf{u})$ makes it possible to analytically evaluate the bound. To do this, we first split the integral over $\hat{\mathbf{f}}$ into two seperate integrals over $\mathbf{f}$ and $\mathbf{u}$:

$$
\begin{aligned}
\mathcal{F}(q) &= \int p(\mathbf{f|u}) q(\mathbf{u}) \log \frac{p(\mathbf{y|f}) p(\mathbf{u})}{q(\mathbf{u})} d\mathbf{f} d\mathbf{u} \\
&= \int q(\mathbf{u}) \left( \int p(\mathbf{f|u})  \log \frac{p(\mathbf{y|f}) p(\mathbf{u})}{q(\mathbf{u})} d\mathbf{f} \right) d\mathbf{u} \\
&= \int q(\mathbf{u}) \left( \int p(\mathbf{f|u})  \log p(\mathbf{y|f}) d\mathbf{f} + \underbrace{\int p(\mathbf{f|u}) d\mathbf{f}}_{=1} \log \frac{p(\mathbf{u})}{q(\mathbf{u})} \right) d\mathbf{u} \\
&= \int q(\mathbf{u}) \left( \underbrace{\int p(\mathbf{f|u})  \log p(\mathbf{y|f}) d\mathbf{f}}_{G(\mathbf{u, y})} + \log \frac{p(\mathbf{u})}{q(\mathbf{u})} \right) d\mathbf{u}
\end{aligned}
$$

The inner integral over $\mathbf{f}$ can be computed as follows

$$
\begin{aligned}
G(\mathbf{u, y}) &= \int p(\mathbf{f|u})  \log p(\mathbf{y|f}) d\mathbf{f} \\
&= \int p(\mathbf{f|u}) \left( -\frac{n}{2} \log(2\pi \sigma^2) - \frac{1}{2 \sigma^2} Tr \left[ \mathbf{y}\mathbf{y}^\top - 2 \mathbf{y} \mathbf{f}^\top + \mathbf{f}\mathbf{f}^\top \right] \right) d\mathbf{f} \\
&= -\int p(\mathbf{f|u})  \frac{n}{2} \log(2\pi \sigma^2) d\mathbf{f} - \frac{1}{2 \sigma^2} \int p(\mathbf{f|u})  Tr \left[ \mathbf{y}\mathbf{y}^\top - 2 \mathbf{y} \mathbf{f}^\top + \mathbf{f}\mathbf{f}^\top \right] d\mathbf{f} \\
&= -\frac{n}{2} \log(2\pi \sigma^2) - \frac{1}{2 \sigma^2} Tr \left[ \int p(\mathbf{f|u}) \mathbf{y}\mathbf{y}^\top d\mathbf{f} - \int p(\mathbf{f|u}) 2 \mathbf{y} \mathbf{f}^\top d\mathbf{f} + \int p(\mathbf{f|u}) \mathbf{f}\mathbf{f}^\top d\mathbf{f} \right] \\
&= -\frac{n}{2} \log(2\pi \sigma^2) - \frac{1}{2 \sigma^2} Tr \left[ \mathbf{y}\mathbf{y}^\top - 2 \mathbf{y} \boldsymbol{\alpha}^\top + \boldsymbol{\alpha}\boldsymbol{\alpha}^\top + \mathbf{K}_{ff} - \mathbf{Q} \right]  \\
&= \log [\mathcal{N}(\mathbf{y} | \boldsymbol{\alpha}, \sigma^2I)]  - \frac{1}{2 \sigma^2} Tr (\mathbf{K}_{ff} - \mathbf{Q})  \\
\end{aligned} 
$$

{{< spoiler text="Follows from this equation" >}}

---

  * The covariance of a conditional can be written as follows:

    $$
    \begin{aligned}
    \text{cov}[\mathbf{f}|\mathbf{b}] &= \mathbb{E}[\mathbf{f}\mathbf{f}^\top|\mathbf{b}] - \mathbb{E}[\mathbf{f}|\mathbf{b}]\mathbb{E}[\mathbf{f}|\mathbf{b}]^\top \\
    \mathbb{E}[\mathbf{f}\mathbf{f}^\top|\mathbf{b}] &= \mathbb{E}[\mathbf{f}|\mathbf{b}]\mathbb{E}[\mathbf{f}|\mathbf{b}]^\top + \text{cov}[\mathbf{f}|\mathbf{b}]
    \end{aligned} 
    $$

  * The trace operation is linear:

    $$
    \mathbf{x}^\top \mathbf{A} \mathbf{x} = Tr \left[ \mathbf{x}^\top \mathbf{A} \mathbf{x} \right] = Tr \left[ \mathbf{x} \mathbf{x}^\top \mathbf{A} \right]
    $$

---

{{< /spoiler >}}

Here,
 
$$
\begin{aligned}
\boldsymbol{\alpha} &= \mathbb{E}[\mathbf{f} \mid \mathbf{u}] = \mathbf{K}_{fu}\mathbf{K}_{uu}^{-1}\mathbf{u} \\
\mathbf{Q} &= \mathbf{K}_{fu}\mathbf{K}_{uu}^{-1}\mathbf{K}_{uf} \\
\end{aligned}
$$

And $\mathbf{K}$ is the kernel matrix with the subscript denoting the variables used to compute the matrix.


Plugging $G(\mathbf{u, y})$ back into the bound $\mathcal{F}(q)$, we get the following

$$
\begin{aligned}
\mathcal{F}(q) &= \int q(\mathbf{u}) \left( \log[\mathcal{N}(\mathbf{y} | \boldsymbol{\alpha}, \sigma^2I)]  - \frac{1}{2 \sigma^2} Tr (\mathbf{K}_{ff} - \mathbf{Q}) + \log \frac{p(\mathbf{u})}{q(\mathbf{u})} \right) d\mathbf{u}\\
&= \int q(\mathbf{u}) \left( \log[\mathcal{N}(\mathbf{y} | \boldsymbol{\alpha}, \sigma^2I)] + \log \frac{p(\mathbf{u})}{q(\mathbf{u})} \right) d\mathbf{u} - \frac{1}{2 \sigma^2} Tr (\mathbf{K}_{ff} - \mathbf{Q})\\
&= \int q(\mathbf{u}) \log \frac{\mathcal{N}(\mathbf{y} | \boldsymbol{\alpha}, \sigma^2I) p(\mathbf{u})}{q(\mathbf{u})} d\mathbf{u} - \frac{1}{2 \sigma^2} Tr (\mathbf{K}_{ff} - \mathbf{Q}) \\
\end{aligned}
$$

If we reverse the Jensen's inequality in the bound $\mathcal{F}(q)$, it would convert the inequality in the ELBO to an equality. This would give us the optimal bound, which is achieved with the optimal variational distribution $q^*(\mathbf{u})$:

$$
\begin{aligned}
\mathcal{F}^*(q) &= \log \int \cancel{q(\mathbf{u})} \frac{\mathcal{N}(\mathbf{y} | \boldsymbol{\alpha}, \sigma^2I) p(\mathbf{u})}{\cancel{q(\mathbf{u})}} d\mathbf{u} - \frac{1}{2 \sigma^2} Tr (\mathbf{K}_{ff} - \mathbf{Q}) \\
&= \log \int \mathcal{N}(\mathbf{y} | \boldsymbol{\alpha}, \sigma^2I) p(\mathbf{u}) d\mathbf{u} - \frac{1}{2 \sigma^2} Tr (\mathbf{K}_{ff} - \mathbf{Q}) \\
&= \log [\mathcal{N}(\mathbf{y} | 0, \sigma^2I + \mathbf{Q})] - \frac{1}{2 \sigma^2} Tr (\mathbf{K}_{ff} - \mathbf{Q}) \\
\end{aligned}
$$

From the above equation, we know that the optimal distribution $q^*(\mathbf{u})$ that gives us the optimal bound is given by
$$
\begin{aligned}
q^*(\mathbf{u}) &\propto \mathcal{N}(\mathbf{y} | \boldsymbol{\alpha}, \sigma^2I) p(\mathbf{u}) \\
&= c \exp{ \left( -\frac{1}{2\sigma^2} (\mathbf{y}-\mathbf{K}_{fu}\mathbf{K}_{uu}^{-1}\mathbf{u})^\top (\mathbf{y}-\mathbf{K}_{fu}\mathbf{K}_{uu}^{-1}\mathbf{u}) -\frac{1}{2} \mathbf{u}^\top\mathbf{K}_{uu}^{-1}\mathbf{u} \right) } \\
&= c \exp{ \left(-\frac{1}{2} \left[ \frac{1}{\sigma^2} (\underbrace{\mathbf{y}^\top \mathbf{y}}_\text{constant}-2 \mathbf{y}^\top \mathbf{K}_{fu}\mathbf{K}_{uu}^{-1}\mathbf{u} + \mathbf{u}^\top\mathbf{K}_{uu}^{-1}\mathbf{K}_{uf}\mathbf{K}_{fu}\mathbf{K}_{uu}^{-1}\mathbf{u}) + \mathbf{u}^\top\mathbf{K}_{uu}^{-1}\mathbf{u} \right] \right) } \\
&= c \exp{ \left(-\frac{1}{2} \left[ \frac{1}{\sigma^2} (-2 \mathbf{y}^\top \mathbf{K}_{fu}\mathbf{K}_{uu}^{-1}\mathbf{u} + \mathbf{u}^\top\mathbf{K}_{uu}^{-1}\mathbf{K}_{uf}\mathbf{K}_{fu}\mathbf{K}_{uu}^{-1}\mathbf{u}) + \mathbf{u}^\top\mathbf{K}_{uu}^{-1}\mathbf{u} \right] \right) } \\
&= c \exp{ \left(-\frac{1}{2} \left[ -\frac{2}{\sigma^2} \mathbf{y}^\top \mathbf{K}_{fu}\mathbf{K}_{uu}^{-1}\mathbf{u} + \frac{1}{\sigma^2} \mathbf{u}^\top\mathbf{K}_{uu}^{-1}\mathbf{K}_{uf}\mathbf{K}_{fu}\mathbf{K}_{uu}^{-1}\mathbf{u} + \mathbf{u}^\top\mathbf{K}_{uu}^{-1}\mathbf{u} \right] \right) } \\
&= c \exp{ \left(-\frac{1}{2} \left[ -2\frac{1}{\sigma^2} \mathbf{y}^\top \mathbf{K}_{fu}\mathbf{K}_{uu}^{-1}\mathbf{u} + \mathbf{u}^\top(\mathbf{K}_{uu}^{-1} + \frac{1}{\sigma^2}\mathbf{K}_{uu}^{-1}\mathbf{K}_{uf}\mathbf{K}_{fu}\mathbf{K}_{uu}^{-1})\mathbf{u} \right] \right) } \\
&= c \exp{ \left(-\frac{1}{2} \left[ -2\underbrace{\frac{1}{\sigma^2} \mathbf{y}^\top \mathbf{K}_{fu}\mathbf{K}_{uu}^{-1}}_{b^\top}\mathbf{u} + \mathbf{u}^\top\underbrace{\mathbf{K}_{uu}^{-1}(\mathbf{K}_{uu} + \frac{1}{\sigma^2}\mathbf{K}_{uf}\mathbf{K}_{fu})\mathbf{K}_{uu}^{-1}}_{M}\mathbf{u} \right] \right) } \\
\end{aligned}
$$

where $c$ is a constant. [Completing the square](https://davidrosenberg.github.io/mlcourse/Notes/completing-the-square.pdf) form we recognize the Gaussian $q^*(\mathbf{u})$:

{{< spoiler text="Click for more details" >}}

---

Completing the (multivariate) square formula:

$$
\begin{aligned}
x^\top M x - 2b^\top x = (x-M^{-1}b)^\top M (x-M^{-1}b) - b^\top M^{-1} b
\end{aligned}
$$

Here, $b^\top M^{-1} b$ is a constant with respect to our variables of interest $x$. $M^{-1}b$ is the mean and $M$ is the inverse of the covariance matrix (precision matrix) of the Gaussian distribution on the random variable $x$.

---

{{< /spoiler >}}

$$
q^*(\mathbf{u}) = \mathcal{N}(\mathbf{u} | \sigma^{-2} \mathbf{K}_{uu} \mathbf{\Sigma}^{-1} \mathbf{K}_{uf} \mathbf{y}, \mathbf{K}_{uu} \mathbf{\Sigma}^{-1} \mathbf{K}_{uu})
$$

Where $\mathbf{\Sigma} = \mathbf{K}_{uu} + \sigma^{-2}\mathbf{K}_{uf}\mathbf{K}_{fu}$

And **voila!** The above optimal variational distribution can be computed analytically given the training dataset. All that remains is to figure out how to compute the test set labels once the above variational distribution over the inducing variables is learned. We can do that by considering the following factorization

$$
p(\mathbf{f}_* | \mathbf{y}) = \int p(\mathbf{f}_* \mid \mathbf{u}, \mathbf{f}) p(\mathbf{f} \mid \mathbf{y}, \mathbf{u}) p(\mathbf{u} | \mathbf{y}) d\mathbf{f} d\mathbf{u} \\
$$

The above is the factorization of the exact distribution. Now assuming that the inducing variables $\mathbf{u}$ are a sufficient statistic for the training variables $\mathbf{f}$, i.e., $p(\mathbf{f} \| \mathbf{y}, \mathbf{u}) = p(\mathbf{f} \| \mathbf{u})$, which would also imply $p(\mathbf{f}_* \mid \mathbf{u}, \mathbf{f}) = p(\mathbf{f}_* \mid \mathbf{u})$, we get the following 

$$
\begin{aligned}
p(\mathbf{f}_* | \mathbf{y}) &= \int p(\mathbf{f}_* | \mathbf{u}) p(\mathbf{f} | \mathbf{u}) p(\mathbf{u} | \mathbf{y}) d\mathbf{f} d\mathbf{u} \\
&= \int p(\mathbf{f}_* | \mathbf{u}) p(\mathbf{u} | \mathbf{y}) d\mathbf{u} \underbrace{\int p(\mathbf{f} | \mathbf{u}) d\mathbf{f}}_{=1} \\
&= \int p(\mathbf{f}_* | \mathbf{u}) p(\mathbf{u} | \mathbf{y}) d\mathbf{u}
\end{aligned}
$$

Replacing $p(\mathbf{u} \mid \mathbf{y})$ in the above integral with the optimal variational distribution over the inducing points $q^*(\mathbf{u})$, it evaluates to a Gaussian with the following mean and covariance:

{{< spoiler text="Click for more details" >}}

---

If we have a Gaussian distribution for $\mathbf{u}$ and a conditional Gaussian distribution for $\mathbf{f}$ given $\mathbf{u}$ as shown below, the distribution of $\mathbf{f}$ is given as follows (from Bishop, 2006):

$$
\begin{aligned}
p(\mathbf{u}) &= \mathcal{N}(\mathbf{u} | \mathbf{\mu}_u, \mathbf{\Sigma}_u) \\
p(\mathbf{f|u}) &= \mathcal{N}(\mathbf{f} | \mathbf{Mu+m}, \mathbf{\Sigma}_f) \\
p(\mathbf{f}) &= \int p(\mathbf{f|u}) p(\mathbf{u}) d\mathbf{u} \\
&= \mathcal{N}(\mathbf{f} | \mathbf{M}\mathbf{\mu}_u + \mathbf{m}, \mathbf{\Sigma}_f + \mathbf{M}\mathbf{\Sigma}_u \mathbf{M}^\top)
\end{aligned}
$$

---

{{< /spoiler >}}

$$
\begin{aligned}
m(x)_q &= \mathbf{K}_{xu} \mathbf{K}_{uu}^{-1} \boldsymbol{\mu} \\
k(x, x^\prime)_q &= k(x, x^\prime) - \mathbf{K}_{xu} \mathbf{K}_{uu}^{-1} \mathbf{K}_{ux^\prime} + \mathbf{K}_{xu} \mathbf{K}_{uu}^{-1} \mathbf{A} \mathbf{K}_{uu}^{-1} \mathbf{K}_{ux^\prime} \\
\end{aligned}
$$

Where, $\boldsymbol{\mu}$ and $\mathbf{A}$ are the mean and covariance of the variational distribution $q^*(\mathbf{u})$ we derived above. 

---

## References

* [Titsia's original paper](http://proceedings.mlr.press/v5/titsias09a/titsias09a.pdf)
* [Titsia's derivation of VFE](https://www2.aueb.gr/users/mtitsias/papers/sparseGPv2.pdf)
* [ELBO derivation](https://www.cs.princeton.edu/courses/archive/fall11/cos597C/lectures/variational-inference-i.pdf)
* [Bauer et al. paper which studied VFE and how it compares to FITC](https://proceedings.neurips.cc/paper/2016/file/7250eb93b3c18cc9daa29cf58af7a004-Paper.pdf)
* [FITC paper (anothes popular SGP approach)](https://papers.nips.cc/paper/2005/file/4491777b1aa8b5b32c2e8666dbe1a495-Paper.pdf)
* [Matthews et al. paper which showed the KL divergence intrepretation of the VFE derivation](https://arxiv.org/pdf/1504.07027.pdf)
* [Hensman et al. paper which generalized the approach to stochastic variational inference. It allows us to scale the approach to large datasets with millions of data points and non-Gaussian likelihoods](https://arxiv.org/ftp/arxiv/papers/1309/1309.6835.pdf)
* [Andreas Damianou's PhD thesis, really good resource for GPs, SGPs, and deep GPs](https://etheses.whiterose.ac.uk/9968/1/Damianou_Thesis.pdf)
* [Another cool VFE walkthrough](https://tiao.io/post/sparse-variational-gaussian-processes/)
* [A recent survey/approach on SGPs](https://arxiv.org/pdf/1605.07066.pdf)
* [The OG survey on SGPs that mentions FITC and SoD](https://www.jmlr.org/papers/volume6/quinonero-candela05a/quinonero-candela05a.pdf)
* [Completing the square](https://davidrosenberg.github.io/mlcourse/Notes/completing-the-square.pdf)
* [Bishop, 2006](https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf)