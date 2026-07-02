---
layout: page
title: System Identification Under Bounded Noise
description: Online system identification with finite-time, minimax-optimal rates under bounded disturbances.
img: assets/img/projects/04-sysid-bounded-noise.svg
importance: 1
category: Foundations
related_publications: true
---

In many physical systems, disturbances are not Gaussian, but they are bounded. This project asks how much that boundedness can improve finite-time system identification when adaptive controllers need uncertainty bounds that hold during online operation in changing environments.

Classical analyses often adopt Gaussian noise assumptions for tractability, leading to the familiar $$\tilde{\mathcal{O}}(1/\sqrt{T})$$ convergence rate of least squares. We instead study physically grounded bounded disturbances and develop an online set-membership identification algorithm that leverages this structure to achieve an $$\tilde{\mathcal{O}}(1/T)$$ convergence rate, meaning estimation error decreases linearly with the number of samples.

We then prove that $$\tilde{\mathcal{O}}(1/T)$$ is the **minimax-optimal** rate under bounded disturbances, while least squares remains fundamentally limited to the slower $$\tilde{\mathcal{O}}(1/\sqrt{T})$$ rate. Together, these results give a finite-time foundation for online and adaptive system identification beyond classical least-squares-based approaches.

**Selected outcomes.** Non-asymptotic analysis of set-membership uncertainty learning {% cite li2024uncertainty %}; and a matching minimax lower bound {% cite xiong2025sysid %}.

**Timeline.** 2024 – present.
