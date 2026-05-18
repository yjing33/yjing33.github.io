---
layout: page
title: Prediction-Augmented Control
description: Online, adaptive networked control with unreliable ML-generated forecasts.
img: assets/img/projects/03-prediction-augmented.svg
importance: 3
category: Foundations
related_publications: true
---

Machine learning has made rich predictive information widely available, but downstream control systems must reason carefully about forecasts that are imperfect, biased, or only intermittently reliable. This project studies how unreliable ML-generated predictions affect the performance of online and adaptive networked control systems in dynamic environments.

The key question is how much information neighboring agents should share when predictions may be wrong. Broader information sharing improves performance when forecasts are accurate, but unreliable information can propagate errors through the network. We develop a system-level predictive control framework that integrates prediction quality, communication topology, and controller synthesis in one closed-loop design problem so the architecture can adapt to forecast reliability.

This framework unifies distributed predictive control approaches that previously imposed communication structures after the fact, and reveals a fundamental **performance-communication tradeoff** induced by imperfect forecasts and network topology. The resulting analysis provides principled guidance for communication design under unreliable ML predictions.

**Selected outcomes.** A unified framework for distributed predictive control with predictions {% cite wu2025pedsls %}; and a system-level characterization of the performance–communication tradeoff under unreliable forecasts {% cite wu2025sls %}.

**Timeline.** 2024 – present.
