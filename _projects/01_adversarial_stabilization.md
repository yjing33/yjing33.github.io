---
layout: page
title: Adversarial Stabilization
description: Online, adaptive stabilization of unknown dynamics under worst-case, non-stochastic perturbations.
img: assets/img/projects/01-adversarial-stabilization.svg
importance: 1
category: Foundations
related_publications: true
---

Safety-critical systems often need to stabilize unknown dynamics on the fly, without the luxury of an a priori stabilizing controller or stochastic assumptions on disturbances. This project studies **online**, **adaptive** simultaneous exploration and control under non-stochastic, potentially adversarial perturbations, addressing worst-case uncertainty while learning to stabilize the system from scratch in dynamic environments.

The core idea is a modular set-based online control framework: at each step, the controller adaptively either reduces uncertainty about the unknown system or applies inputs that guarantee desirable behavior regardless of adversarial actions. This creates a principled exploration-exploitation tradeoff for closed-loop learning, instead of relying on naive excitation that can be unsafe or too conservative.

The framework extends to unknown time-varying dynamics, safety-constrained systems, and large-scale networked systems under localized and delayed communication. We also develop adversarially robust policy gradient methods that exploit the geometry of the feasible policy space, connecting these guarantees to reinforcement-learning practice.

**Selected outcomes.** Adversarial stability for unknown time-varying systems {% cite yu2023ltv %}; safe online learning with finite mistake bounds for power systems {% cite yeh2022voltctrl %}; networked extensions with localized and delayed communication {% cite yu2023adversarial %}; and constrained game-theoretic robust RL {% cite yu2021robustrl %}.

**Timeline.** 2022 – present.
