// =============================================================
// Central content source for the portfolio.
// Edit values here to update the website — no component changes needed.
// =============================================================

export const profile = {
  name: 'Ashish Prasad',
  role: 'Engineering Manager (AI/ML) · Microsoft Turing',
  tagline: 'I build enterprise-grade AI systems — and help others build them too.',
  intro:
    'AI/ML engineering leader at Microsoft Turing working on Microsoft 365 Copilot. Beyond my full-time role, I consult, mentor, freelance, and guide teams building real-world products at the intersection of AI, backend engineering, and retrieval.',
  location: 'Greater Bengaluru Area, India',
  email: 'ashishprasad@outlook.com',
  phone: '+91 99855 22167',
  social: {
    linkedin: 'https://www.linkedin.com/in/ashishnitk',
    github: 'https://github.com/ashishnitk',
  },
  // Replace with your scheduling link (Calendly, etc.) when available.
  bookingUrl: 'mailto:ashishprasad@outlook.com?subject=Consultation%20Request',
}

export const stats = [
  { value: '12+', label: 'Years in software' },
  { value: '30+', label: 'Cross-functional team' },
  { value: '#1', label: 'MS Global Hackathon' },
  { value: '7+ Years', label: 'At Microsoft' },
]

export const achievement = {
  badge: 'Featured Achievement',
  title: 'Microsoft Global Hackathon 2024 — Grand Prize Winner',
  issuer: 'Issued by The Microsoft Garage',
  description:
    'Out of 73,000 participants and 20,000+ projects, our team came out on top — earning the chance to present our work to Satya Nadella himself.',
  highlights: [
    { value: '73,000', label: 'Participants' },
    { value: '20,000+', label: 'Projects' },
    { value: 'Grand Prize', label: 'Winner' },
  ],
  link: 'https://www.credly.com/badges/5c386788-32a4-4015-ab81-bc3b1929ba27',
  linkLabel: 'View credential on Credly',
}

export const about = {
  heading: 'About me',
  paragraphs: [
    'I’m an AI/ML engineer on Team Turing, building and integrating AI capabilities for Microsoft 365 Copilot. My work sits at the intersection of backend engineering, AI reasoning, and retrieval — making sure Copilot delivers contextual, reliable, and high-performance assistance at enterprise scale.',
    'I contributed to integrating GPT-5 and GPT-5.2 into Microsoft 365 Copilot, working with a 30+ member cross-functional team. I helped build model switching, chain-of-thought reasoning support, retrieval quality improvements (ChatFTR LTR), and a low-latency “Escape Hatch” routing mechanism.',
    'Alongside my full-time role, I work as a consultant, mentor, and freelance engineer — guiding teams on architecture, helping developers grow, and shaping real-world projects from idea to production.',
  ],
  roles: [
    { title: 'Full-time', detail: 'Engineering Manager (AI/ML) at Microsoft Turing' },
    { title: 'Consulting', detail: 'AI/ML strategy, architecture, and system design' },
    { title: 'Teaching & Mentoring', detail: 'Helping engineers level up in AI and full-stack' },
    { title: 'Freelance & Projects', detail: 'Building and guiding production-grade products' },
  ],
}

export const skills = [
  {
    group: 'AI / ML',
    featured: true,
    items: ['LLM Integration', 'Retrieval (RAG)', 'Learning-to-Rank', 'Chain-of-Thought', 'Agentic Systems', 'Azure ML'],
  },
  {
    group: 'Full-Stack',
    items: ['React', 'TypeScript', 'JavaScript', 'Angular', 'C# / .NET', 'ASP.NET Web API', 'Node.js', 'Python', 'REST APIs', 'HTML5 & CSS3'],
  },
  {
    group: 'Cloud & Data',
    items: ['Microsoft Azure', 'SQL Server', 'Oracle', 'Azure Static Web Apps'],
  },
  {
    group: 'Tools & Practices',
    items: ['Git & GitHub', 'CI/CD', 'Agile / SDLC', 'System Design', 'Mentoring'],
  },
]

export const services = [
  {
    icon: '🧠',
    title: 'AI/ML Consulting',
    description:
      'Strategy and architecture for LLM-powered features — retrieval, reasoning, latency, and production readiness.',
  },
  {
    icon: '💻',
    title: 'Freelance Development',
    description:
      'Full-stack development of web apps and AI integrations using React, .NET, and modern cloud tooling.',
  },
  {
    icon: '🏗️',
    title: 'Architecture & Guidance',
    description:
      'Project architecture reviews and hands-on guidance to take real-world products from idea to launch.',
  },
  {
    icon: '🎓',
    title: 'Teaching & Mentoring',
    description:
      'One-on-one mentoring and team workshops on AI engineering, full-stack development, and career growth.',
  },
  {
    icon: '🔍',
    title: 'Code Review',
    description:
      'In-depth code and design reviews to improve quality, performance, and maintainability.',
  },
  {
    icon: '🛠️',
    title: 'Technical Support',
    description:
      'Ongoing technical partnership for teams that need senior engineering expertise on demand.',
  },
]

export const projects = [
  {
    title: 'Analyst Agent — AI Data Scientist',
    description:
      'First-party Microsoft 365 Copilot agent built on OpenAI’s o3-mini reasoning model. Combines chain-of-thought reasoning with live Python execution to turn raw data into actionable insights.',
    tech: ['OpenAI o3-mini', 'Python', 'C# .NET', 'Azure ML'],
    links: { demo: 'https://www.microsoft.com/en-us/research/project/project-turing/', github: '' },
  },
  {
    title: 'Copilot Model Switching & Escape Hatch',
    description:
      'Model switcher enabling GPT-4 / GPT-5 toggling plus a low-latency routing mechanism that skips reasoning to faster models when responsiveness matters.',
    tech: ['LLM Integration', 'C# .NET', 'Distributed Systems'],
    links: { demo: '', github: '' },
  },
  {
    title: 'ScitrakUltra — Supply Chain Automation',
    description:
      'Next-generation sorting and inventory automation product for lottery operations, including an NLP layer converting natural-language questions into SQL.',
    tech: ['C# ASP.NET', 'AngularJS', 'Stanford NLP', 'SQL Server'],
    links: { demo: '', github: '' },
  },
]

export const experience = [
  {
    org: 'Microsoft',
    logoDomain: 'microsoft.com',
    type: 'Full-time',
    duration: '6 yrs 11 mos',
    location: 'India',
    roles: [
      {
        title: 'Senior Software Engineer Manager (AI/ML)',
        period: 'Sep 2025 – Present · 10 mos',
        summary:
          'Contributed to the integration of GPT-5 / 5.2 / 5.3 Codex / Claude into Microsoft 365 Copilot, partnering with a 30+ member cross-functional team across engineering, research, and product to deliver scalable, compliant AI capabilities.',
        tags: ['Large Language Models (LLM)', 'Machine Learning'],
      },
      {
        title: 'Senior Software Engineer (AI/ML)',
        period: 'Sep 2023 – Aug 2025 · 2 yrs',
        location: 'Bengaluru, Karnataka, India · On-site',
        summary:
          'Analyst — AI Data Scientist. Collaborated with a team of 30+ to build an AI agent that thinks like a skilled data scientist, combining chain-of-thought reasoning with live Python execution.',
        tags: ['Large Language Models (LLM)', 'Algorithms', '+6 skills'],
      },
      {
        title: 'Software Engineer 2 — Machine Learning',
        period: 'Jul 2020 – Aug 2023 · 3 yrs 2 mos',
        location: 'Hyderabad, Telangana, India · Remote',
        summary:
          'Team: Access under Microsoft Digital. Contributed to large-scale digital workplace initiatives powering Microsoft’s internal platforms.',
        tags: ['Large Language Models (LLM)', 'React.js', '+4 skills'],
      },
      {
        title: 'Software Engineer',
        period: 'Aug 2019 – Jun 2020 · 11 mos',
        location: 'Hyderabad, Telangana, India · Remote',
        summary:
          'Level 60 · Microsoft Digital / Access Team. Built and supported enterprise systems within the digital workplace organization.',
        tags: ['C#', 'Serverless Computing'],
      },
    ],
  },
  {
    org: 'Scientific Games',
    logoDomain: 'scientificgames.com',
    type: 'Full-time',
    duration: '2 yrs 6 mos',
    location: 'Bengaluru, Karnataka, India',
    roles: [
      {
        title: 'Senior Software Engineer - I | NLP',
        period: 'Feb 2018 – Oct 2018 · 9 mos',
        summary:
          'Lottery Systems — R&D Center. Built an NLP-to-SQL capability converting natural-language questions into queries using Stanford NLP.',
        tags: ['Natural Language Processing (NLP)', 'Angular', '+4 skills'],
      },
      {
        title: 'Software Engineer',
        period: 'May 2016 – Jan 2018 · 1 yr 9 mos',
        summary:
          'Lottery Systems — R&D Center. Developed ScitrakUltra from scratch — a sorting automation system combining software and hardware for supply-chain and inventory operations, using C# ASP.NET, AngularJS, and SQL Server.',
        tags: ['C# ASP.NET', 'AngularJS', 'SQL Server'],
      },
    ],
  },
  {
    org: 'Hexagon AB',
    logoDomain: 'hexagon.com',
    logoSrc: '/hexagon.png',
    logoText: 'HX',
    type: 'Full-time',
    duration: '2 yrs 7 mos',
    location: 'Greater Hyderabad Area',
    roles: [
      {
        title: 'Senior Software Analyst',
        period: 'Oct 2015 – Apr 2016 · 7 mos',
        summary:
          'Hexagon Safety & Infrastructure. Built and maintained enterprise systems with a C# .NET, SQL Server, and Oracle stack.',
        tags: ['C# .NET', 'SQL Server', 'Oracle'],
      },
      {
        title: 'Software Analyst',
        period: 'Oct 2013 – Sep 2015 · 2 yrs',
        summary:
          'Delivered safety and infrastructure software, earning multiple Spot Awards for engineering contributions.',
        tags: ['C# .NET', 'SQL Server'],
      },
    ],
  },
  {
    org: 'CSIR - National Aerospace Laboratories (NAL)',
    logoDomain: 'nal.res.in',
    logoSrc: '/csir-nal.png',
    logoText: 'NAL',
    type: 'Internship',
    duration: '8 mos',
    location: 'Bengaluru, Karnataka, India',
    roles: [
      {
        title: 'Research Intern',
        period: 'Dec 2012 – Jul 2013 · 8 mos',
        summary:
          'Final-year major project at NITK Surathkal, carried out at CSIR-NAL. Achieved a perfect 10/10 CGPA for the project.',
        tags: ['Research', 'Engineering'],
      },
    ],
  },
]

export const education = [
  {
    institution: 'National Institute of Technology Karnataka, Surathkal',
    logoDomain: 'nitk.ac.in',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science & Engineering',
    period: '',
  },
]

export const testimonials = [
  {
    quote:
      'I have attended Ashish Prasad’s System Design master class. Clear & well-explained concepts — the instructor broke down complex system design principles in an easy-to-understand manner, with real-world relevance using Hotstar (JIO + Hotstar).',
    name: 'Jagadeesh Manne',
    title: 'System Design Master Class',
    rating: 5,
    source: 'Google Review',
  },
  {
    quote:
      'I loved Ashish Prasad Sir’s way of teaching. A smart person with a lot of knowledge in real-world system design, and an amazing way of teaching while asking questions to the students. Loved the webinar.',
    name: 'Habeeb Hussain',
    title: 'System Design Webinar',
    rating: 5,
    source: 'Google Review',
  },
  {
    quote:
      'I had a session with Ashish on Agentic AI. It was great to be part of the session — his knowledge and ability to make us understand the topics are great.',
    name: 'Debdeep Ghosh',
    title: 'Agentic AI Session',
    rating: 5,
    source: 'Google Review',
  },
  {
    quote:
      'Ashish is a good trainer and good presenter. I attended the master class on microservices and felt really good to be a part of that session and learn a few new things.',
    name: 'Ranjith Kumar',
    title: 'Microservices Master Class',
    rating: 5,
    source: 'Google Review',
  },
  {
    quote:
      'Ashish is a great professional. He explained how JioCinema and streaming platforms work, in depth — simply awesome. Keep doing such webinars.',
    name: 'Ravi Patel',
    title: 'Video Streaming Webinar',
    rating: 5,
    source: 'Google Review',
  },
  {
    quote:
      'Amazing session by Ashish Prasad on system design of Twitter. Well understood, basic concepts well explained — a very effective learning approach.',
    name: 'Kiran Patil',
    title: 'System Design — Twitter',
    rating: 5,
    source: 'Google Review',
  },
  {
    quote:
      'Great session!! Ashish Prasad explained DSA concepts very clearly and clarified all questions.',
    name: 'Vemuri Vyshnavi',
    title: 'DSA Session',
    rating: 5,
    source: 'Google Review',
  },
  {
    quote:
      'Great session by Ashish Prasad. Attended the Hotstar live-streaming session — very informative, with a lot of brainstorming across all levels of experience.',
    name: 'Manik Dhanush',
    title: 'Live Streaming Session',
    rating: 5,
    source: 'Google Review',
  },
  {
    quote:
      'Great session by Ashish Prasad Sir — really enjoyed and learnt about video streaming. Thank you Ashish Prasad Sir and Bosscoder Academy.',
    name: 'Salman Ahmad',
    title: 'Video Streaming Session',
    rating: 5,
    source: 'Google Review',
  },
  {
    quote:
      'I really loved the way Ashish Prasad teaches in his class. Thanks — great job!',
    name: 'Vivek Seth',
    title: 'Live Class',
    rating: 5,
    source: 'Google Review',
  },
  {
    quote:
      'Really loved the presentation and gained knowledge about microservices from Ashish Prasad Sir.',
    name: 'K R Prithviraj',
    title: 'Microservices Session',
    rating: 4,
    source: 'Google Review',
  },
  {
    quote:
      'I attended the Linked List webinar presented by Ashish Prasad. I found it very informative and easy to understand, even though I had no prior knowledge of DSA.',
    name: 'Bangara Raju Kottedi',
    title: 'DSA / Linked List Webinar',
    rating: 4,
    source: 'Google Review',
  },
  {
    quote:
      'Thank you Ashish. Each of your sessions had so much to learn — every 1 hour of your course requires me to do 3–4 hours of self-learning to catch up.',
    name: 'Hari Srivastava',
    title: 'Course Participant',
    rating: 5,
    source: 'Session Feedback',
  },
  {
    quote: 'Thank you Ashish, your sessions were very useful.',
    name: 'Dharati Metra',
    title: 'Course Participant',
    rating: 5,
    source: 'Session Feedback',
  },
]

export const reviewShots = [
  '/reviews/review-1.png',
  '/reviews/review-2.png',
  '/reviews/review-3.png',
  '/reviews/review-4.png',
  '/reviews/review-5.png',
  '/reviews/review-6.png',
  '/reviews/review-7.png',
]

export const talks = [
  {
    title: 'The Anatomy of an AI Agent',
    event: 'MLDS 2026 — Machine Learning Developers Summit',
    audience: '500+ developers & data scientists',
    date: '2026',
    description:
      'Keynote session unpacking how modern AI agents perceive, reason, decide, and act — and the maturity ladder from LLM + retrieval to fully autonomous, multi-agent systems.',
    post: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7442929044888940545?collapsed=1',
    postHeight: 628,
    link: 'https://www.linkedin.com/posts/mlds2026-agenticai-machinelearning-ugcPost-7442929044888940545-aYbb/',
  },
  {
    title: 'Applied NLP',
    event: 'The Manipal Advantage — Industry Interactions · Online Manipal',
    audience: 'Online Manipal learners & professionals',
    date: '2025',
    description:
      'Industry Interactions webinar on Applied NLP — exploring how natural language processing powers real-world AI products, and what it takes to take models from research to production.',
    image: '/manipal-nlp.png',
    link: 'https://www.linkedin.com/posts/industryinteractionwebinar-onlinelearning-share-7320766448920932352-k64G/',
  },
]

export const bitsPilani = {
  org: 'BITS Pilani Digital',
  logoDomain: 'bits-pilani.ac.in',
  role: 'Faculty / Industry Mentor — AI/ML',
  blurb:
    'Partnering with BITS Pilani Digital to design and deliver industry-grade AI/ML education — from course curriculum to live model-engineering sessions and production-grade capstones.',
  highlights: [
    {
      icon: '🎤',
      title: 'Expert Talk',
      description:
        'The Path to Becoming a Full-Stack AI Expert — a guest expert session for BITS Pilani Digital learners.',
      post: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7408758467106107393?compact=1',
      postHeight: 399,
      link: 'https://www.linkedin.com/posts/bitspilani-digital_the-path-to-becoming-a-full-stack-ai-expert-activity-7408758620152094720-mvUm',
    },
    {
      icon: '📚',
      title: 'Designed AI/ML Courses',
      description:
        'Authored and structured AI/ML course content covering modern model engineering, deployment, and observability.',
    },
    {
      icon: '👨‍🏫',
      title: 'Regular Model Engineering Sessions',
      description:
        'Teaching ongoing classes on ML model engineering — inferencing, serving patterns, monitoring, continuous training, and trade-offs.',
      image: '/bits-course.png',
    },
    {
      icon: '🏗️',
      title: 'Production-Grade Capstones',
      description:
        'Mentoring learners as they build real, production-grade capstone projects end to end.',
    },
    {
      icon: '🎯',
      title: 'Presentation at MLDS',
      description:
        'Featured presentation at the Machine Learning Developers Summit, sharing insights with the wider community.',
      link: 'https://www.linkedin.com/posts/mlds2026-agenticai-machinelearning-ugcPost-7442929044888940545-aYbb/',
    },
  ],
  videos: [
    {
      title: 'BITS Pilani Digital — Feature',
      link: 'https://www.linkedin.com/posts/bitspilani-digital_bitspilanidigital-activity-7454514708503527425-_Gfv',
    },
    {
      title: 'What’s Next in AI — Insights from MLDS 2026',
      link: 'https://www.linkedin.com/posts/bitspilani-digital_whats-next-in-ai-insights-from-mlds-2026-activity-7449421436005527552-ymsK',
    },
  ],
}

export const masai = {
  org: 'Masai School',
  logoDomain: 'masaischool.com',
  role: 'Industry Panelist · Hackathon Judge',
  blurb:
    'Engaging with Masai School’s community — sharing perspective on the future of AI/ML on an industry roundtable, and judging their hackathon while mentoring teams on their builds.',
  highlights: [
    {
      icon: '🗣️',
      title: 'Industry Roundtable — The Future of AI & Agentic Systems',
      description:
        'Joined an expert panel discussing where AI and agentic systems are heading, and how new engineers can build durable, future-proof skills.',
      image: '/MASAI/1776170145580.jpg',
    },
    {
      icon: '🏆',
      title: 'Hackathon Judge & Mentor',
      description:
        'Judged Masai School’s hackathon — reviewing teams’ projects on technical depth, product thinking, and execution, and mentoring them on their solutions.',
      image: '/MASAI/1778698869194.jpg',
    },
  ],
  gallery: [
    '/MASAI/1778698869146.jpg',
    '/MASAI/1776193618850.jpg',
    '/MASAI/1778698869815.jpg',
    '/MASAI/1776170142088.jpg',
    '/MASAI/1777537858048.jpg',
    '/MASAI/1776193631175.jpg',
  ],
  posts: [
    'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7454215035582566400',
    'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7455534213250015232',
  ],
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Education', href: '#education' },
  { label: 'Beyond Work', href: '#beyond' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Speaking', href: '#speaking' },
  { label: 'Contact', href: '#contact' },
]
