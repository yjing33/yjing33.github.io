---
layout: page
permalink: /group/
title: Group
description: Mentored students and resources for research life.
nav: true
nav_order: 3
published: true
_styles: |
  .post-header,
  article {
    max-width: 48rem;
  }

  .group-page h2 {
    margin: 3.75rem 0 1.2rem;
  }

  .group-page h3 {
    color: var(--global-text-color);
    font-size: 1.08rem;
    font-weight: 500;
    line-height: 1.35;
    margin: 2.75rem 0 0.7rem;
  }

  .group-page p,
  .group-page li {
    line-height: 1.65;
  }

  .group-page .intro {
    color: var(--global-text-color);
    margin-bottom: 1.5rem;
  }

  .student-roster {
    display: grid;
    gap: 1.6rem 2.4rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 1.45rem 0 2.8rem;
  }

  .student-entry {
    align-items: center;
    display: flex;
    gap: 1.25rem;
    min-width: 0;
  }

  .student-photo {
    background-color: rgba(128, 128, 128, 0.08);
    background-image: url("/assets/img/people/uw-husky-cartoon.png");
    background-position: center;
    background-size: cover;
    border: 1px solid rgba(128, 128, 128, 0.18);
    border-radius: 50%;
    display: block;
    flex: 0 0 9rem;
    height: 9rem;
    overflow: hidden;
    transition: border-color 0.15s ease-in-out;
    width: 9rem;
  }

  a.student-photo:hover,
  a.student-photo:focus {
    border-color: var(--global-theme-color);
    text-decoration: none;
  }

  .student-photo img {
    display: block;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  .student-name {
    color: var(--global-text-color);
    font-weight: 500;
    line-height: 1.4;
  }

  .student-role {
    color: var(--global-text-color-light);
    font-size: 0.93rem;
    line-height: 1.45;
  }

  .resource-list {
    margin-bottom: 1.65rem;
    padding-left: 1.2rem;
  }

  .resource-list li {
    margin: 0.28rem 0;
  }

  .resource-list span {
    color: var(--global-text-color-light);
    font-size: 0.92rem;
  }

  .group-quote {
    background: transparent;
    border: 0;
    color: var(--global-text-color-light);
    font-size: 1.03rem;
    font-style: italic;
    line-height: 1.75;
    margin: 0.95rem 0 2.2rem;
    padding: 0.85rem 0 0.8rem;
    text-align: justify;
    text-align-last: left;
  }

  .group-quote p,
  .group-quote footer {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    font-weight: 300;
    line-height: inherit;
    margin: 0;
  }

  .group-quote p {
    max-width: 100%;
  }

  .group-quote footer {
    margin-top: 0.45rem;
    text-align: right;
    text-align-last: right;
  }

  @media (max-width: 767px) {
    .student-roster {
      grid-template-columns: 1fr;
    }

    .student-photo {
      flex-basis: 7.25rem;
      height: 7.25rem;
      width: 7.25rem;
    }
  }
---

<div class="group-page">
  <div class="student-roster">
    {% for student in site.data.group.students %}
    <div class="student-entry">
      {% if student.website %}
        <a class="student-photo" href="{{ student.website }}" aria-label="{{ student.name }} website">
          {% if student.photo %}
            <img src="{{ student.photo | relative_url }}" alt="{{ student.name }}">
          {% endif %}
        </a>
      {% else %}
        <div class="student-photo" aria-hidden="true">
          {% if student.photo %}
            <img src="{{ student.photo | relative_url }}" alt="">
          {% endif %}
        </div>
      {% endif %}
      <div>
        <div class="student-name">{{ student.name }}</div>
        <div class="student-role">{{ student.role }}</div>
      </div>
    </div>
    {% endfor %}
  </div>

  <h2>Resources and Advice</h2>

  <blockquote class="group-quote">
    <p>&ldquo;If I had an hour to solve a problem I'd spend 55 minutes thinking about the problem and 5 minutes thinking about solutions.&rdquo;</p>
    <footer>&mdash; attributed to Albert Einstein</footer>
  </blockquote>

  <h3>Advising and expectations</h3>
  <ul class="resource-list">
    <li><a href="https://drive.google.com/file/d/1-Iv_hsnln5r3L9sqlXM397wjvvtvMrxr/view">Guidelines for advising relationships between faculty and graduate students</a> <span>(PDF)</span>.</li>
    <li><a href="https://drive.google.com/file/d/1I_dP5aNtJPq7WqhpKyvWdqHYCd5YFaTt/view">Student-advisor expectation scales</a> <span>(PDF)</span>.</li>
    <li><a href="https://www.cs.washington.edu/academics/graduate/phd-program/handbook/advising-guide/building-relationship/">Building a relationship with your advisor</a> <span>(UW Allen School)</span>.</li>
    <li><a href="https://www.cs.washington.edu/academics/graduate/phd-program/handbook/advising-guide/ongoing-conversations/">Ongoing conversations with your advisor</a> <span>(UW Allen School)</span>.</li>
  </ul>

  <h3>UW resources</h3>
  <ul class="resource-list">
    <li><a href="https://www.ece.uw.edu/engage/students/">UW ECE current student resources</a>.</li>
    <li><a href="https://www.ece.uw.edu/academics/advising/">UW ECE graduate advising</a>.</li>
    <li><a href="https://www.ece.uw.edu/academics/grad/requirements-phd/">UW ECE Ph.D. degree requirements</a>.</li>
    <li><a href="https://careers.uw.edu/graduate-students/">UW Career & Internship Center resources for graduate students</a>.</li>
    <li><a href="https://wellbeing.uw.edu/">UW Student Well-Being</a>.</li>
  </ul>

  <h3>Ph.D. and research advice</h3>
  <ul class="resource-list">
    <li><a href="https://medium.com/@krzysztofgeras/a-personal-advice-on-how-to-be-a-successful-phd-student-in-machine-learning-279284e283c8">A personal advice on how to be a successful PhD student in machine learning</a>, by Krzysztof J. Geras.</li>
    <li><a href="https://homes.cs.washington.edu/~mernst/advice/">Advice for researchers and students</a>, by Michael Ernst.</li>
    <li><a href="https://www.cs.princeton.edu/~jrex/teaching/spring2005/fft/azuma.html">So long, and thanks for the Ph.D.!</a>, by Ronald T. Azuma.</li>
    <li><a href="https://gwern.net/doc/science/1986-hamming">You and Your Research</a>, by Richard Hamming.</li>
    <li><a href="https://norvig.com/21-days.html">Teach Yourself Programming in Ten Years</a>, by Peter Norvig.</li>
    <li><a href="https://let-all.com/assets/slides/How-to-ALT22-Sam.pdf">How to Read a Paper</a>, by Sam Hopkins.</li>
  </ul>

  <h3>AI for research</h3>
  <ul class="resource-list">
    <li><a href="https://math.mit.edu/~etingof/aiuse.pdf">Use of AI in mathematical research: A guide for young mathematicians</a>, by Pavel Etingof (MIT Math).</li>
    <li><a href="https://arxiv.org/pdf/2602.03837">Accelerating Scientific Research with Gemini: Case Studies and Common Techniques</a>, by Woodruff et al.</li>
  </ul>
</div>
