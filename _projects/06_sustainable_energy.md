---
layout: page
title: Learning-Enabled Control for Sustainable Energy Systems
description: Online, adaptive, uncertainty-aware control for power grids and buildings.
img: assets/img/projects/06-sustainable-energy.svg
importance: 1
category: Applications
related_publications: true
---

Modern energy systems face deep uncertainty in renewable generation, network structure, and load dynamics. This project develops **online** and **adaptive** learning-augmented control methods built around data-driven uncertainty sets, with provable convergence, performance, and stability guarantees that generalize across structurally similar systems.

For power distribution networks, we combine online system uncertainty estimation with model predictive control to maintain voltage safety under unknown topology and uncertain load and generation variations. The algorithm adaptively prioritizes learning only what is needed to enforce voltage safety, rather than identifying a full accurate model. This task-driven perspective yields the first finite mistake bound for safe online voltage control under uncertain grid topology, with experiments in nonlinear, high-fidelity simulators calibrated with real-world models from Southern California Edison.

For building HVAC, we develop a control-oriented policy transfer algorithm that safeguards black-box reinforcement-learning policies during online deployment. Instead of identifying full building dynamics, the method adaptively updates nonlinear basis functions and maintains an uncertainty set that is used directly to enforce thermal comfort constraints. In EnergyPlus simulations across 19 climate zones and seasons, it reduces comfort constraint violations by over 80% on average compared with state-of-the-art transfer-learning methods.

**Selected outcomes.** First finite mistake bound for safe online voltage control under uncertain grid topology and adversarial load/generation variations {% cite yeh2024voltctrl %}, whose preliminary conference version received the Best Paper Award Finalist at ACM e-Energy {% cite yeh2022voltctrl %} and seeded a proposal that won the Amazon AI4Science Fellowship. Building on the set-based ideas from the foundations theme, an uncertainty-aware transfer-learning algorithm for building HVAC reduces thermal-comfort constraint violations by over 80% on U.S. Department of Energy high-fidelity simulators compared with state-of-the-art transfer methods {% cite yu2025hvac %}.

**Timeline.** 2022 – present.
