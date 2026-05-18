---
layout: page
title: Scalable, Communication-Constrained Control
description: Online and adaptive distributed control with locality, delay, and communication constraints.
img: assets/img/projects/02-scalable-control.svg
importance: 2
category: Foundations
related_publications: true
---

As networked systems grow and operating conditions change, centralized coordination becomes impractical. This project advances **system level synthesis (SLS)**, a framework that reformulates controller design in terms of closed-loop responses, enabling convex and scalable synthesis under locality, communication, and delay constraints that are otherwise difficult to handle.

We develop state-space and infinite-horizon SLS theory, removing the finite-horizon approximations that limited earlier SLS-based designs. We also extend SLS to nonlinear systems with saturation, sparse actuation, disturbance localization, and communication delays, and study joint control-communication synthesis where the communication protocol is optimized together with the controller for online, adaptive operation.

This system-level perspective enables distributed controllers that respect implementation limits while providing provable performance and stability guarantees. In recent work on safe multi-agent systems, joint synthesis reduces inter-agent messaging by 48-90% compared with benchmark methods in many settings of interest.

We are currently working with the Brazilian Synchrotron Light Laboratory (LNLS) on implementing SLS for orbit beam control in particle accelerators, with a focus on systematically mitigating data transmission delays among subsystems.

**Selected outcomes.** State-space theory of SLS for distributed H₂ control {% cite yu2021localized %} and its infinite-horizon extension {% cite kjellqvist2022sls %}; nonlinear SLS for systems with saturation, locality, and delay {% cite yu2020saturation %}; and joint synthesis of control and communication for safe multi-agent systems with minimal messaging {% cite yang2025safe %}. The rapid development of SLS theory led to a full-day workshop at CDC 2022, which I co-organized.

**Timeline.** 2020 – present.
