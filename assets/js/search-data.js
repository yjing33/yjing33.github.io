// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications in reverse chronological order. * denotes equal contribution.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Research projects organized by theme.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Courses, mentoring, and outreach.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-passed-my-candidacy-exam",
          title: 'Passed my candidacy exam.',
          description: "",
          section: "News",},{id: "news-gave-a-talk-at-the-39th-southern-california-control-workshop",
          title: 'Gave a talk at the 39th Southern California Control Workshop.',
          description: "",
          section: "News",},{id: "news-gave-a-talk-at-prof-jason-marden-s-group-at-uc-santa-barbara",
          title: 'Gave a talk at Prof. Jason Marden’s group at UC Santa Barbara.',
          description: "",
          section: "News",},{id: "news-our-paper-on-robust-online-voltage-control-was-selected-as-a-finalist-for-the-best-paper-award-at-acm-e-energy-2022-check-out-the-presentation-by-chris-yeh",
          title: 'Our paper on robust online voltage control was selected as a finalist for...',
          description: "",
          section: "News",},{id: "news-our-paper-on-infinite-horizon-system-level-synthesis-was-accepted-to-cdc-2022",
          title: 'Our paper On Infinite-Horizon System Level Synthesis was accepted to CDC 2022.',
          description: "",
          section: "News",},{id: "news-co-organized-a-workshop-on-system-level-synthesis-sls-for-cdc-2022",
          title: 'Co-organized a workshop on System Level Synthesis (SLS) for CDC 2022.',
          description: "",
          section: "News",},{id: "news-presented-a-poster-on-online-control-of-unknown-adversarial-systems-at-the-data-driven-decision-processes-d3p-program-at-the-simons-institute",
          title: 'Presented a poster on online control of unknown adversarial systems at the Data-Driven...',
          description: "",
          section: "News",},{id: "news-co-organized-a-workshop-on-system-level-synthesis-sls-at-cdc-2022",
          title: 'Co-organized a workshop on System Level Synthesis (SLS) at CDC 2022.',
          description: "",
          section: "News",},{id: "news-gave-a-talk-at-the-controlx-meeting-hosted-by-prof-mehran-mesbahi-at-the-university-of-washington",
          title: 'Gave a talk at the ControlX meeting hosted by Prof. Mehran Mesbahi at...',
          description: "",
          section: "News",},{id: "news-named-an-amazon-ai4science-fellow-of-the-2023-class",
          title: 'Named an Amazon AI4Science Fellow of the 2023 class.',
          description: "",
          section: "News",},{id: "news-gave-an-invited-talk-at-the-online-optimization-methods-for-data-driven-feedback-control-workshop-at-acc-2023",
          title: 'Gave an invited talk at the Online Optimization Methods for Data-driven Feedback Control...',
          description: "",
          section: "News",},{id: "news-gave-an-invited-poster-presentation-at-the-young-researcher-workshop-hosted-at-cornell-university",
          title: 'Gave an invited poster presentation at the Young Researcher Workshop hosted at Cornell...',
          description: "",
          section: "News",},{id: "news-funded-through-nsf-to-be-a-long-program-participant-in-architecture-of-green-energy-systems-at-the-institute-for-mathematical-and-statistical-innovation-imsi-from-june-23-august-23-2024",
          title: 'Funded through NSF to be a long program participant in Architecture of Green...',
          description: "",
          section: "News",},{id: "news-served-as-a-pc-member-and-registration-chair-for-acm-e-energy-2026-in-banff-canada-co-located-with-acm-sustainability-week",
          title: 'Served as a PC member and registration chair for ACM e-Energy 2026 in...',
          description: "",
          section: "News",},{id: "news-gave-an-invited-talk-at-the-interplay-between-machine-learning-and-set-based-identification-amp-amp-control-workshop-at-acc-2025",
          title: 'Gave an invited talk at the Interplay Between Machine Learning and Set-Based Identification...',
          description: "",
          section: "News",},{id: "news-three-papers-on-statistical-fundamental-limits-of-system-identification-performance-communication-tradeoffs-in-networked-systems-and-multi-agent-control-with-minimal-communication-are-accepted-to-cdc-2025",
          title: 'Three papers on statistical fundamental limits of system identification, performance-communication tradeoffs in networked...',
          description: "",
          section: "News",},{id: "projects-adversarial-stabilization",
          title: 'Adversarial Stabilization',
          description: "Online, adaptive stabilization of unknown dynamics under worst-case, non-stochastic perturbations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/01_adversarial_stabilization/";
            },},{id: "projects-scalable-communication-constrained-control",
          title: 'Scalable, Communication-Constrained Control',
          description: "Online and adaptive distributed control with locality, delay, and communication constraints.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/02_scalable_control/";
            },},{id: "projects-prediction-augmented-control",
          title: 'Prediction-Augmented Control',
          description: "Online, adaptive networked control with unreliable ML-generated forecasts.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/03_prediction_augmented/";
            },},{id: "projects-system-identification-under-bounded-noise",
          title: 'System Identification Under Bounded Noise',
          description: "Online system identification with finite-time, minimax-optimal rates under bounded disturbances.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/04_sysid_bounded_noise/";
            },},{id: "projects-learning-enabled-control-for-sustainable-energy-systems",
          title: 'Learning-Enabled Control for Sustainable Energy Systems',
          description: "Online, adaptive, uncertainty-aware control for power grids and buildings.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/06_sustainable_energy/";
            },},{id: "projects-ml-for-manufacturing",
          title: 'ML for Manufacturing',
          description: "Online, adaptive monitoring and process analytics for industrial manufacturing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/07_manufacturing/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%69%6E%67%35@%75%77.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jy-cds", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=akiDVE8AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
