import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Experience", "Education", "Contact"];

const SKILLS = {
  "Backend": [
    { name: "Node.js", icon: "⬡" }, { name: "Express.js", icon: "⬡" },
    { name: "REST APIs", icon: "⬡" }, { name: "JWT Auth", icon: "⬡" },
    { name: "Redis", icon: "⬡" }, { name: "Docker", icon: "⬡" },
  ],
  "Frontend": [
    { name: "React.js", icon: "⬡" }, { name: "Redux", icon: "⬡" },
    { name: "Tailwind CSS", icon: "⬡" }, { name: "HTML/CSS", icon: "⬡" },
  ],
  "Databases": [
    { name: "PostgreSQL", icon: "⬡" }, { name: "MongoDB", icon: "⬡" },
    { name: "MySQL", icon: "⬡" }, { name: "Sequelize ORM", icon: "⬡" },
    { name: "Mongoose", icon: "⬡" },
  ],
  "Tools": [
    { name: "Git", icon: "⬡" }, { name: "GitHub", icon: "⬡" },
    { name: "AWS", icon: "⬡" }, { name: "Postman", icon: "⬡" },
  ],
};

const PROJECTS = [
  {
    title: "Nestfin",
    subtitle: "Property Rental Management System",
    description: "A full-stack platform enabling landlords to list properties and manage tenants, bookings, and payments seamlessly.",
    stack: ["Node.js", "Express.js", "PostgreSQL", "Sequelize", "React.js", "JWT"],
    features: ["Multi-role auth (Landlord/Tenant)", "Property listing & search", "Booking management", "Payment integration"],
    color: "#7C3AED",
    github: "https://github.com/ranjeetkumar",
  },
  {
    title: "HRMS",
    subtitle: "Human Resource Management System",
    description: "Enterprise-grade HR platform for managing employees, payroll, leave, and attendance with admin dashboard.",
    stack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "React.js", "Redux"],
    features: ["Employee onboarding", "Leave & attendance tracking", "Payroll processing", "Role-based access control"],
    color: "#0EA5E9",
    github: "https://github.com/ranjeetkumar",
  },
];

const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    company: "Bizclock Infotech Pvt Ltd",
    period: "Dec 2024 – Present",
    responsibilities: [
      "Designed and developed scalable REST APIs with Node.js & Express.js",
      "Implemented JWT-based authentication and authorization systems",
      "Architected backend systems with PostgreSQL and Sequelize ORM",
      "Optimized database queries, reducing response times by 40%",
      "Collaborated with frontend teams to deliver seamless user experiences",
      "Conducted code reviews and maintained clean coding standards",
    ],
  },
];

function useScrollSpy() {
  const [active, setActive] = useState("Home");
  useEffect(() => {
    const handler = () => {
      const sections = NAV_LINKS.map(n => document.getElementById(n.toLowerCase()));
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && window.scrollY >= sections[i].offsetTop - 120) {
          setActive(NAV_LINKS[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return active;
}

function scrollTo(id) {
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
}

export default function Portfolio() {
  const active = useScrollSpy();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif", background: "#0A0A0F", color: "#E8E8F0", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0A0A0F; }
        ::-webkit-scrollbar-thumb { background: #7C3AED; border-radius: 2px; }
        .nav-link { cursor: pointer; padding: 6px 14px; border-radius: 20px; font-size: 14px; font-weight: 500; transition: all 0.2s; color: #9090A8; letter-spacing: 0.02em; }
        .nav-link:hover { color: #E8E8F0; background: rgba(124,58,237,0.15); }
        .nav-link.active { color: #E8E8F0; background: rgba(124,58,237,0.25); }
        .btn-primary { background: linear-gradient(135deg, #7C3AED, #5B21B6); color: #fff; padding: 12px 28px; border-radius: 8px; border: none; cursor: pointer; font-size: 15px; font-weight: 600; letter-spacing: 0.02em; transition: all 0.2s; display: inline-flex; align-items: center; gap: 8px; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(124,58,237,0.35); }
        .btn-outline { background: transparent; color: #E8E8F0; padding: 12px 28px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.15); cursor: pointer; font-size: 15px; font-weight: 500; transition: all 0.2s; display: inline-flex; align-items: center; gap: 8px; }
        .btn-outline:hover { border-color: #7C3AED; color: #A78BFA; background: rgba(124,58,237,0.08); }
        .skill-tag { background: rgba(124,58,237,0.12); border: 1px solid rgba(124,58,237,0.25); color: #C4B5FD; padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; transition: all 0.2s; cursor: default; }
        .skill-tag:hover { background: rgba(124,58,237,0.22); border-color: rgba(124,58,237,0.5); transform: translateY(-1px); }
        .project-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 28px; transition: all 0.3s; }
        .project-card:hover { transform: translateY(-4px); border-color: rgba(124,58,237,0.4); background: rgba(124,58,237,0.05); }
        .tech-badge { font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 12px; background: rgba(255,255,255,0.07); color: #9090A8; letter-spacing: 0.03em; }
        .contact-input { width: 100%; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 12px 16px; color: #E8E8F0; font-size: 15px; font-family: inherit; outline: none; transition: border-color 0.2s; }
        .contact-input:focus { border-color: #7C3AED; }
        .section-label { font-size: 12px; font-weight: 600; letter-spacing: 0.12em; color: #7C3AED; text-transform: uppercase; margin-bottom: 12px; }
        .section-title { font-family: 'Space Grotesk', sans-serif; font-size: clamp(28px, 4vw, 42px); font-weight: 700; color: #F0F0F8; line-height: 1.2; }
        .divider { width: 48px; height: 3px; background: linear-gradient(90deg, #7C3AED, #0EA5E9); border-radius: 2px; margin-top: 16px; }
        .timeline-dot { width: 14px; height: 14px; border-radius: 50%; background: #7C3AED; border: 3px solid #0A0A0F; box-shadow: 0 0 0 2px #7C3AED; flex-shrink: 0; margin-top: 4px; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes pulse-ring { 0% { box-shadow: 0 0 0 0 rgba(124,58,237,0.4); } 100% { box-shadow: 0 0 0 20px rgba(124,58,237,0); } }
        .hero-avatar { animation: float 4s ease-in-out infinite; }
        .fade-up { animation: fadeUp 0.6s ease forwards; }
        .glow-dot { width: 6px; height: 6px; border-radius: 50%; background: #22C55E; animation: pulse-ring 1.5s infinite; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        .mobile-menu-btn { display: none; background: none; border: none; cursor: pointer; color: #E8E8F0; padding: 8px; }
        .mobile-nav { position: fixed; inset: 0; background: rgba(10,10,15,0.97); z-index: 999; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 24px; }
        .mobile-nav .nav-link { font-size: 20px; padding: 10px 32px; }
        input:-webkit-autofill { -webkit-box-shadow: 0 0 0 1000px #0A0A0F inset; -webkit-text-fill-color: #E8E8F0; }
      `}</style>

      {/* Navbar */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,10,15,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "0 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div onClick={() => scrollTo("home")} style={{ cursor: "pointer", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 20, background: "linear-gradient(135deg, #A78BFA, #38BDF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            RK.dev
          </div>
          <div className="desktop-nav" style={{ display: "flex", gap: 4 }}>
            {NAV_LINKS.map(l => (
              <span key={l} className={`nav-link${active === l ? " active" : ""}`} onClick={() => scrollTo(l.toLowerCase())}>{l}</span>
            ))}
          </div>
          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? <path d="M6 18L18 6M6 6l12 12"/> : <path d="M3 12h18M3 6h18M3 18h18"/>}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-nav" onClick={() => setMenuOpen(false)}>
          {NAV_LINKS.map(l => (
            <span key={l} className={`nav-link${active === l ? " active" : ""}`} onClick={() => scrollTo(l.toLowerCase())}>{l}</span>
          ))}
        </div>
      )}

      {/* Hero */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 5% 60px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", right: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "10%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", gap: 60, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 280 }} className="fade-up">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
              <div className="glow-dot" />
              <span style={{ fontSize: 13, color: "#9090A8", fontWeight: 500 }}>Available for opportunities</span>
            </div>
            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px, 6vw, 68px)", fontWeight: 700, lineHeight: 1.1, color: "#F0F0F8", marginBottom: 20 }}>
              Hi, I'm<br />
              <span style={{ background: "linear-gradient(135deg, #A78BFA 0%, #38BDF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Ranjeet Kumar</span>
            </h1>
            <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#9090A8", lineHeight: 1.6, marginBottom: 36, maxWidth: 520 }}>
              Backend-Focused MERN Stack Developer building <span style={{ color: "#C4B5FD" }}>scalable</span> and <span style={{ color: "#7DD3FC" }}>secure</span> web applications with clean architecture.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button className="btn-primary" onClick={() => scrollTo("projects")}>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 3l14 9-14 9V3z"/></svg>
                View Projects
              </button>
              <button className="btn-outline" onClick={() => scrollTo("contact")}>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Contact Me
              </button>
              <button className="btn-outline">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Resume
              </button>
            </div>
            <div style={{ display: "flex", gap: 32, marginTop: 52 }}>
              {[["1.5+", "Years Exp."], ["2+", "Projects"], ["10+", "Technologies"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, background: "linear-gradient(135deg, #A78BFA, #38BDF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{n}</div>
                  <div style={{ fontSize: 13, color: "#6060A0", marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-avatar" style={{ flexShrink: 0 }}>
            <div style={{ width: 280, height: 280, borderRadius: "50%", background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(14,165,233,0.3))", border: "1px solid rgba(124,58,237,0.3)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <div style={{ width: 240, height: 240, borderRadius: "50%", background: "linear-gradient(135deg, #1E1030, #0A1628)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="96" height="96" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" fill="#7C3AED" opacity="0.9"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="#5B21B6" opacity="0.8"/></svg>
              </div>
              <div style={{ position: "absolute", top: 16, right: -8, background: "#1E1030", border: "1px solid rgba(124,58,237,0.4)", borderRadius: 10, padding: "8px 14px", fontSize: 12, color: "#C4B5FD", fontWeight: 600 }}>Node.js</div>
              <div style={{ position: "absolute", bottom: 24, left: -16, background: "#081628", border: "1px solid rgba(14,165,233,0.4)", borderRadius: 10, padding: "8px 14px", fontSize: 12, color: "#7DD3FC", fontWeight: 600 }}>PostgreSQL</div>
              <div style={{ position: "absolute", bottom: -8, right: 20, background: "#0F1E10", border: "1px solid rgba(34,197,94,0.4)", borderRadius: 10, padding: "8px 14px", fontSize: 12, color: "#86EFAC", fontWeight: 600 }}>React.js</div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: "100px 5%", background: "rgba(255,255,255,0.015)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p className="section-label">About Me</p>
          <h2 className="section-title">Crafting backends that<br />scale with confidence</h2>
          <div className="divider" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, marginTop: 56 }}>
            <div>
              <p style={{ color: "#9090A8", lineHeight: 1.85, fontSize: 16 }}>
                I'm a MERN Stack Developer with a strong focus on backend architecture, building production-ready systems that are fast, secure, and maintainable.
              </p>
              <p style={{ color: "#9090A8", lineHeight: 1.85, fontSize: 16, marginTop: 20 }}>
                My expertise spans REST API design, JWT-based authentication, database optimization with PostgreSQL and MongoDB, and deploying containerized applications with Docker and AWS.
              </p>
              <p style={{ color: "#9090A8", lineHeight: 1.85, fontSize: 16, marginTop: 20 }}>
                I believe great software starts with clean code and a deep understanding of the problem at hand — not just writing features that work, but architecting systems that last.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: "🏗️", title: "Scalable Architecture", desc: "Designing systems that grow with your product" },
                { icon: "🔐", title: "Security First", desc: "JWT auth, role-based access, and data protection" },
                { icon: "⚡", title: "Performance Tuning", desc: "Optimized queries, caching with Redis, efficient APIs" },
                { icon: "🤝", title: "Team Collaboration", desc: "Working seamlessly with frontend teams and stakeholders" },
              ].map(item => (
                <div key={item.title} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: 20, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12 }}>
                  <div style={{ fontSize: 24, flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#E8E8F0", marginBottom: 4, fontSize: 15 }}>{item.title}</div>
                    <div style={{ color: "#6060A0", fontSize: 13, lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={{ padding: "100px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p className="section-label">Technical Skills</p>
          <h2 className="section-title">Technologies I work with</h2>
          <div className="divider" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 28, marginTop: 56 }}>
            {Object.entries(SKILLS).map(([cat, items]) => (
              <div key={cat} style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: 28 }}>
                <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", color: "#7C3AED", textTransform: "uppercase", marginBottom: 20 }}>{cat}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {items.map(s => (
                    <span key={s.name} className="skill-tag">{s.name}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ padding: "100px 5%", background: "rgba(255,255,255,0.015)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p className="section-label">Featured Projects</p>
          <h2 className="section-title">Things I've built</h2>
          <div className="divider" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28, marginTop: 56 }}>
            {PROJECTS.map(p => (
              <div key={p.title} className="project-card">
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `${p.color}22`, border: `1px solid ${p.color}44`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <svg width="22" height="22" fill="none" stroke={p.color} strokeWidth="1.5" viewBox="0 0 24 24"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 700, color: "#F0F0F8", marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: p.color, fontWeight: 600, marginBottom: 14 }}>{p.subtitle}</p>
                <p style={{ color: "#7070A0", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{p.description}</p>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#5050A0", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Key Features</div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                    {p.features.map(f => (
                      <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#8080B0" }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: p.color, flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
                  {p.stack.map(t => <span key={t} className="tech-badge">{t}</span>)}
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    <button style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "8px 16px", color: "#9090A8", fontSize: 13, cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s" }}>
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
                      GitHub
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" style={{ padding: "100px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I've worked</h2>
          <div className="divider" />
          <div style={{ marginTop: 56 }}>
            {EXPERIENCE.map((e, i) => (
              <div key={i} style={{ display: "flex", gap: 28 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div className="timeline-dot" />
                  <div style={{ width: 2, flex: 1, background: "linear-gradient(180deg, #7C3AED33, transparent)", marginTop: 8 }} />
                </div>
                <div style={{ flex: 1, paddingBottom: 48 }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 700, color: "#F0F0F8" }}>{e.role}</h3>
                    <span style={{ fontSize: 12, fontWeight: 600, background: "rgba(124,58,237,0.18)", color: "#A78BFA", padding: "3px 12px", borderRadius: 20 }}>Current</span>
                  </div>
                  <div style={{ display: "flex", gap: 16, marginBottom: 20, flexWrap: "wrap" }}>
                    <span style={{ color: "#7C3AED", fontWeight: 600, fontSize: 15 }}>{e.company}</span>
                    <span style={{ color: "#5050A0", fontSize: 14 }}>📅 {e.period}</span>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: 24 }}>
                    <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none" }}>
                      {e.responsibilities.map((r, ri) => (
                        <li key={ri} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#7C3AED", marginTop: 7, flexShrink: 0 }} />
                          <span style={{ color: "#8080B0", fontSize: 14, lineHeight: 1.65 }}>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" style={{ padding: "100px 5%", background: "rgba(255,255,255,0.015)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p className="section-label">Education</p>
          <h2 className="section-title">Academic background</h2>
          <div className="divider" />
          <div style={{ marginTop: 56, maxWidth: 640 }}>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(124,58,237,0.2)", borderRadius: 16, padding: 32, display: "flex", gap: 24, alignItems: "flex-start" }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>🎓</div>
              <div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, color: "#F0F0F8", marginBottom: 6 }}>Bachelor of Computer Applications</h3>
                <p style={{ color: "#7C3AED", fontWeight: 600, fontSize: 15, marginBottom: 8 }}>BCA</p>
                <p style={{ color: "#6060A0", fontSize: 14 }}>Vinoba Bhave University — Annada College, Hazaribag</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "100px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let's work together</h2>
          <div className="divider" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, marginTop: 56 }}>
            <div>
              <p style={{ color: "#7070A0", fontSize: 16, lineHeight: 1.8, marginBottom: 36 }}>
                I'm currently open to new opportunities — whether that's a full-time role, freelance project, or just a conversation about tech. Drop me a message!
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { icon: "✉️", label: "Email", val: "ranjeetkumar@email.com" },
                  { icon: "📞", label: "Phone", val: "+91 XXXXX XXXXX" },
                  { icon: "📍", label: "Location", val: "Hazaribag, Jharkhand, India" },
                  { icon: "🔗", label: "GitHub", val: "github.com/ranjeetkumar" },
                  { icon: "💼", label: "LinkedIn", val: "linkedin.com/in/ranjeetkumar" },
                ].map(c => (
                  <div key={c.label} style={{ display: "flex", gap: 14, alignItems: "center" }}>
                    <span style={{ fontSize: 18, width: 28, textAlign: "center" }}>{c.icon}</span>
                    <div>
                      <div style={{ fontSize: 12, color: "#5050A0", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{c.label}</div>
                      <div style={{ color: "#9090A8", fontSize: 14, marginTop: 2 }}>{c.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              {sent && (
                <div style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 10, padding: "14px 18px", color: "#86EFAC", fontSize: 14, marginBottom: 20 }}>
                  ✅ Message sent! I'll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <input className="contact-input" type="text" placeholder="Your Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
                <input className="contact-input" type="email" placeholder="Your Email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
                <textarea className="contact-input" placeholder="Your Message" rows={5} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} required style={{ resize: "vertical" }} />
                <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "32px 5%", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
        <p style={{ color: "#3030A0", fontSize: 13 }}>
          Designed & built by <span style={{ color: "#7C3AED" }}>Ranjeet Kumar</span> · {new Date().getFullYear()}
        </p>
      </footer>

      {/* Scroll to top */}
      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ position: "fixed", bottom: 32, right: 32, width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, #7C3AED, #5B21B6)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(124,58,237,0.4)", zIndex: 50, transition: "transform 0.2s" }} onMouseOver={e => e.target.style.transform="translateY(-2px)"} onMouseOut={e => e.target.style.transform="none"}>
          <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M18 15l-6-6-6 6"/></svg>
        </button>
      )}
    </div>
  );
}