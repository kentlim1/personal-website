import { useState, useEffect, useRef } from "react";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";

const NAV_ITEMS = [
  { id: 'about',      label: 'about' },
  { id: 'education',  label: 'education' },
  { id: 'experience', label: 'experience' },
  { id: 'projects',   label: 'projects' },
  { id: 'skills',     label: 'skills' },
];

const EDUCATION = [
  {
    title: "University of California, Santa Barbara",
    meta: "B.S. Computer Science  ·  Sep 2024 – Jun 2028",
    bullets: [
      "GPA: 3.74/4.0 — Dean's Honors (2024–2026)",
      "Coursework: Data Structures & Algorithms, Machine Learning, Computer Networking, Computer Architecture",
    ],
  },
  {
    title: "Newport Harbor High School",
    meta: "Aug 2020 – Jun 2024",
    bullets: [],
  },
];

const EXPERIENCE = [
  {
    title: "Treasury Intern — Association for Computing Machinery (ACM)",
    meta: "Apr 2026 – Present",
    bullets: [
      "Coordinate end-to-end event funding logistics, including room sourcing, quote collection, funding request submission, finance board presentation, and post-event reimbursement processing.",
      "Collaborate with leadership in weekly officer meetings to optimize club operations and align programming with emerging industry trends.",
    ],
  },
  {
    title: "AI Data Trainer — DataAnnotation",
    meta: "May 2025 – Aug 2025",
    bullets: [
      "Evaluated and scored 500+ LLM-generated outputs against accuracy, safety, and coherence rubrics, directly informing reinforcement learning fine-tuning pipelines.",
      "Labeled and validated 100+ datasets spanning NLP and classification tasks, improving training data quality for production ML models.",
      "Identified recurring hallucination patterns and logic failures across model outputs, documenting findings that shaped updated evaluation and prompting guidelines.",
    ],
  },
];

const PROJECTS = [
  {
    title: "DripChain",
    meta: "TypeScript · Next.js · Supabase · PyTorch · Flask · PostgreSQL · Pinata  ·  SB Hacks 2026",
    bullets: [
      "Built and demoed a full-stack decentralized fashion marketplace on Solana at SB Hacks 2026, using Next.js for wallet-based authentication and peer-to-peer crypto transactions.",
      "Engineered a PyTorch recommendation engine using EfficientNet-V2 and KNN over image feature vectors, personalizing user feeds based on interaction history with 65% Top-5 retrieval accuracy.",
      "Designed a Flask REST API + Supabase backend with PostgreSQL for data management and Pinata for decentralized image storage, automating the full listing-to-sale lifecycle.",
    ],
  },
  {
    title: "Agentic Travel Planner",
    meta: "Next.js · FastAPI · AWS (Bedrock, DynamoDB, S3) · LangGraph · ChromaDB",
    bullets: [
      "Built a full-stack chat UI with Next.js and FastAPI, persisting preferences in DynamoDB, archiving itineraries to S3, and validating live plans via OpenWeatherMap.",
      "Architected a self-correcting LangGraph agent in Python that autonomously resolves budget and weather constraint violations via iterative re-drafting loops over Claude Haiku 4.5 (AWS Bedrock) API calls.",
      "Built a RAG pipeline using ChromaDB and semantic embeddings to ground LLM recommendations in curated travel data, ensuring high-fidelity, location-specific outputs.",
    ],
  },
  {
    title: "GridMetrics",
    meta: "TypeScript · React.js · Supabase · Tailwind CSS",
    bullets: [
      "Built and deployed a real-time Formula 1 statistics dashboard on Vercel with interactive Recharts visualizations, displaying driver performance, race results, and championship point progression from the Jolpica F1 REST API.",
      "Implemented Google OAuth via Supabase Auth with a custom profiles layer supporting unique usernames and role-based access controls.",
    ],
    github: "https://github.com/kentlim1/f1-driver-profiles",
  },
];

const SKILLS = [
  { label: "Languages",  items: ["C++", "Python", "JavaScript", "TypeScript", "HTML/CSS", "Java", "SQL"] },
  { label: "Frameworks", items: ["Next.js", "React.js", "Node.js", "Flask", "FastAPI", "PyTorch", "Tailwind", "Recharts"] },
  { label: "Tools",      items: ["AWS (Bedrock, DynamoDB, S3)", "Git", "Bash", "VS Code", "Figma", "Supabase", "Claude Code"] },
  { label: "Libraries",  items: ["LangGraph", "Anthropic API", "Boto3", "ChromaDB", "Pandas", "Numpy", "Matplotlib", "Scikit-learn"] },
];

const GithubIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const PdfIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM8.5 16.5v-5h1.5v1.75h1.25V16H9.75v-.75H8.5zm3.5 0v-5h1.75c.97 0 1.75.78 1.75 1.75v1.5c0 .97-.78 1.75-1.75 1.75H12zm1.5-1.5h.25c.14 0 .25-.11.25-.25v-1.5c0-.14-.11-.25-.25-.25H13.5V15zm2.5 1.5v-5h3v1.5H17.5V14h1.25v1.5H17.5V16.5H16z" />
  </svg>
);

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Entry({ title, meta, bullets, github, delay = 0 }) {
  const [open, setOpen] = useState(false);
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`entry reveal${visible ? ' visible' : ''}${open ? ' expanded' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="entry-header" onClick={() => setOpen(o => !o)}>
        <div className="entry-left">
          <div className="entry-title">{title}</div>
          <div className="entry-meta">{meta}</div>
        </div>
        <div className="entry-right">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="entry-gh-link"
              onClick={e => e.stopPropagation()}
              title="View on GitHub"
            >
              <GithubIcon />
            </a>
          )}
          {bullets.length > 0 && (
            <div className="entry-toggle">{open ? '−' : '+'}</div>
          )}
        </div>
      </div>
      {bullets.length > 0 && (
        <div className={`entry-body${open ? ' open' : ''}`}>
          <div className="entry-body-inner">
            <ul className="entry-bullets">
              {bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

function SectionHeader({ title }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`section-header reveal${visible ? ' visible' : ''}`}>
      <span className="section-prompt">~/</span>
      <span className="section-title">{title}</span>
      <div className="section-line"></div>
    </div>
  );
}

function SkillGroup({ group, delay }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`skill-group reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="skill-group-label">{group.label}</div>
      <div className="skill-chips">
        {group.items.map(item => (
          <span key={item} className="skill-chip">{item}</span>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_ITEMS.map(n => document.getElementById(n.id));
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    sections.forEach(s => s && obs.observe(s));

    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection(NAV_ITEMS[NAV_ITEMS.length - 1].id);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      obs.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setSidebarOpen(false);
  };

  return (
    <>
      <button className="hamburger" onClick={() => setSidebarOpen(o => !o)}>☰</button>

      <aside className={`sidebar${sidebarOpen ? ' open' : ''}`}>
        <div className="sidebar-brand">
          <div className="sidebar-name">kent lim</div>
          <div className="sidebar-title">// cs @ ucsb</div>
        </div>

        <nav className="sidebar-nav">
          {NAV_ITEMS.map(item => (
            <a
              key={item.id}
              className={`nav-item${activeSection === item.id ? ' active' : ''}`}
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
            >
              <span className="prompt">&gt;</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="social-links">
            <a className="social-link" href="https://www.linkedin.com/in/k3ntlim" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <LinkedinIcon />
            </a>
            <a className="social-link" href="https://github.com/kentlim1" target="_blank" rel="noopener noreferrer" title="GitHub">
              <GithubIcon />
            </a>
            <a className="social-link" href="/Kent_Lim_Resume.pdf" target="_blank" rel="noopener noreferrer" title="Resume">
              <PdfIcon />
            </a>
          </div>
        </div>
      </aside>

      <main className="main">
        <section className="hero">
          <div className="hero-eyebrow">COMPUTER SCIENCE STUDENT</div>
          <h1 className="hero-name">
            Kent Lim<span className="cursor"></span>
          </h1>
          <p className="hero-sub">
            Second-year CS major at <strong>UC Santa Barbara</strong> interested in software engineering and AI/ML.
            Born and raised in the Philippines 🇵🇭, based in California.
          </p>
          <div className="hero-tags">
            {["React", "TypeScript", "Python", "C++", "F1 fan"].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </section>

        <section id="about" className="section">
          <SectionHeader title="about" />
          <div className="about-text">
            <p>Hello! I am a second-year Computer Science major at UC Santa Barbara interested in software engineering and AI/ML systems. I was born and raised in the Philippines <em>(kamusta po!)</em> and moved to the United States in 2015.</p>
            <p>When I'm not coding, I love visiting new places, watching <strong>Formula 1</strong> (go Charles Leclerc!), and taking care of my dog Milo.</p>
          </div>
        </section>

        <section id="education" className="section">
          <SectionHeader title="education" />
          {EDUCATION.map((e, i) => (
            <Entry key={i} {...e} delay={i * 80} />
          ))}
        </section>

        <section id="experience" className="section">
          <SectionHeader title="experience" />
          {EXPERIENCE.map((e, i) => (
            <Entry key={i} {...e} delay={i * 80} />
          ))}
        </section>

        <section id="projects" className="section">
          <SectionHeader title="projects" />
          {PROJECTS.map((p, i) => (
            <Entry key={i} {...p} delay={i * 80} />
          ))}
        </section>

        <section id="skills" className="section">
          <SectionHeader title="skills" />
          <div className="skills-grid">
            {SKILLS.map((group, i) => (
              <SkillGroup key={group.label} group={group} delay={i * 60} />
            ))}
          </div>
        </section>

        <footer className="footer">
          <span className="footer-text">© 2026 Kent Lim — Built with React</span>
          <div className="footer-status">
            <div className="status-dot"></div>
            available for opportunities
          </div>
        </footer>
      </main>

      <Analytics />
    </>
  );
}

export default App;
