import { useEffect } from "react";
import "./Resume.css";

const data = {
  name: "Md. Israfil Mia",
  title: "Lecturer (ICT) & CS Professional",
  email: "ahmisrafilcse@gmail.com",
  phone: "+880 1770-099768",
  github: "github.com/ahmisrafil",
  summary:
    "Dynamic academic professional with a solid foundation in Computer Science and a strong passion for teaching. Skilled in lesson planning, student engagement, and delivering impactful, engaging lectures. Committed to fostering a collaborative academic environment that encourages critical thinking, innovation, and lifelong learning.",
  education: [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Sheikh Fazilatunnesa Mujib University",
      cgpa: "3.82 / 4.00",
      year: "2019",
      thesis:
        "EEG-Based Mental Emotion Classification Using LSTM-Based Recurrent Neural Network",
    },
    {
      degree: "Higher Secondary Certificate (H.S.C)",
      institution: "Royal Media College, Dhaka",
      cgpa: "5.00 / 5.00",
      year: "2016",
      thesis: null,
    },
    {
      degree: "Secondary School Certificate (S.S.C)",
      institution: "Jamalpur Zilla School, Dhaka",
      cgpa: "5.00 / 5.00",
      year: "2014",
      thesis: null,
    },
  ],
  experience: [
    {
      role: "Lecturer (ICT)",
      org: "Professor Shahjahan Ali School and College",
      period: "September 2024 – Present",
      desc: "Teaching ICT subjects, designing lesson plans, and fostering a collaborative learning environment.",
    },
  ],
  skills: {
    languages: ["C", "C++", "Python", "SQL", "HTML", "CSS", "JavaScript"],
    tools: ["VS Code", "Git", "Codeblocks", "Google Colab", "Jupyter Notebook"],
  },
  research: ["AI", "Machine Learning", "Neural Networks"],
  certifications: [
    {
      name: "JavaScript Algorithms and Data Structures",
      provider: "freeCodeCamp",
      date: "December 2024",
    },
    {
      name: "Responsive Web Design",
      provider: "freeCodeCamp",
      date: "September 2024",
    },
  ],
  reference: {
    name: "Ferdous Anam Jibon",
    title: "Assistant Professor, IUBAT",
    phone: "+8801716798120",
  },
};

function Section({ title, icon, eyebrow, children, className = "" }) {
  return (
    <section className={`resume-section reveal ${className}`}>
      <div className="section-heading">
        <span className="section-icon" aria-hidden="true">{icon}</span>
        <div>
          <span className="section-eyebrow">{eyebrow || "PROFILE"}</span>
          <h2>{title}</h2>
        </div>
        <span className="section-rule" aria-hidden="true" />
      </div>
      {children}
    </section>
  );
}

function SkillTag({ children, tone = "violet" }) {
  return <span className={`skill-tag skill-tag--${tone}`}>{children}</span>;
}

export default function Resume() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="resume-page">
      <div className="ambient ambient--one" aria-hidden="true" />
      <div className="ambient ambient--two" aria-hidden="true" />
      <div className="resume-shell">
        <div className="topline">
          <a className="brand-mark" href="/" aria-label="Return to portfolio home">
            <span className="brand-symbol">AHMI.</span>
            <span className="brand-label">PERSONAL PORTFOLIO</span>
          </a>
          <span className="availability"><span /> OPEN TO OPPORTUNITIES</span>
        </div>

        <header className="resume-hero reveal">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> CURRICULUM VITAE</div>
            <h1>
              Md. Israfil <span>Mia.</span>
            </h1>
            <p className="hero-role">{data.title}</p>
            <p className="hero-summary">{data.summary}</p>

            <div className="hero-actions">
              <a
                className="primary-button"
                href="/Md_Israfil_Mia_Resume.pdf"
                download="Md_Israfil_Mia_Resume.pdf"
              >
                <span aria-hidden="true">↓</span> Download CV
              </a>
              <a className="secondary-button" href={`mailto:${data.email}`}>
                Contact me <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="contact-list">
              <a href={`mailto:${data.email}`}><span aria-hidden="true">✉</span>{data.email}</a>
              <a href={`tel:${data.phone.replace(/[^\d+]/g, "")}`}><span aria-hidden="true">⌕</span>{data.phone}</a>
              <a href={`https://${data.github}`} target="_blank" rel="noreferrer">
                <span aria-hidden="true">⌘</span>{data.github}
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Initials IM, representing Israfil Mia">
            <div className="orbit orbit--outer" />
            <div className="orbit orbit--inner" />
            <div className="hero-glow" />
            <div className="monogram-card">
              <span className="monogram-kicker">COMPUTER SCIENCE</span>
              <span className="monogram">AHM<span>.</span></span>
              <span className="monogram-caption">ACADEMIC · TECHNOLOGY · RESEARCH</span>
            </div>
            <span className="floating-chip chip--top">Teaching</span>
            <span className="floating-chip chip--bottom">AI &amp; ML</span>
          </div>
        </header>

        <div className="resume-content">
          <Section title="Professional Experience" icon="↗" eyebrow="CAREER">
            <div className="timeline">
              {data.experience.map((item, index) => (
                <article className="timeline-item glass-card" key={`${item.role}-${index}`}>
                  <span className="timeline-dot" aria-hidden="true" />
                  <div className="card-topline">
                    <div>
                      <span className="card-index">0{index + 1} / EXPERIENCE</span>
                      <h3>{item.role}</h3>
                      <p className="card-subtitle">{item.org}</p>
                    </div>
                    <span className="date-pill">{item.period}</span>
                  </div>
                  <p className="card-description">{item.desc}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section title="Education" icon="⌘" eyebrow="ACADEMIC BACKGROUND">
            <div className="education-grid">
              {data.education.map((item, index) => (
                <article className={`education-card glass-card ${index === 0 ? "education-card--featured" : ""}`} key={item.degree}>
                  <div className="education-card-head">
                    <span className="education-number">0{index + 1}</span>
                    <span className="date-pill">{item.year}</span>
                  </div>
                  <h3>{item.degree}</h3>
                  <p className="card-subtitle">{item.institution}</p>
                  <div className="cgpa"><span>CGPA / GPA</span><strong>{item.cgpa}</strong></div>
                  {item.thesis && (
                    <div className="thesis">
                      <span className="thesis-label">THESIS / RESEARCH</span>
                      <p>{item.thesis}</p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </Section>

          <Section title="Technical Skills" icon="⌘" eyebrow="TOOLS OF THE TRADE">
            <div className="skills-layout glass-card">
              <div className="skill-group">
                <div className="skill-group-heading">
                  <span className="skill-group-icon">{"</>"}</span>
                  <div><h3>Languages &amp; Technologies</h3><p>Core development skills</p></div>
                </div>
                <div className="tag-list">
                  {data.skills.languages.map((skill) => <SkillTag key={skill}>{skill}</SkillTag>)}
                </div>
              </div>
              <div className="skill-divider" />
              <div className="skill-group">
                <div className="skill-group-heading">
                  <span className="skill-group-icon">✳</span>
                  <div><h3>Tools &amp; Environments</h3><p>Development and research workflow</p></div>
                </div>
                <div className="tag-list">
                  {data.skills.tools.map((skill) => <SkillTag key={skill} tone="blue">{skill}</SkillTag>)}
                </div>
              </div>
            </div>
          </Section>

          <Section title="Research Interests" icon="◎" eyebrow="AREAS OF EXPLORATION">
            <div className="research-grid">
              {data.research.map((interest, index) => (
                <article className="research-card glass-card" key={interest}>
                  <span className="research-index">0{index + 1}</span>
                  <span className="research-orb" aria-hidden="true" />
                  <h3>{interest}</h3>
                  <span className="research-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </Section>

          <Section title="Certifications" icon="✳" eyebrow="CONTINUOUS LEARNING">
            <div className="certification-grid">
              {data.certifications.map((certification, index) => (
                <article className="certification-card glass-card" key={certification.name}>
                  <div className="cert-icon" aria-hidden="true">↗</div>
                  <div>
                    <span className="card-index">CERTIFICATION 0{index + 1}</span>
                    <h3>{certification.name}</h3>
                    <p className="card-subtitle">{certification.provider}</p>
                    <span className="cert-date">{certification.date}</span>
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section title="Professional Reference" icon="↗" eyebrow="RECOMMENDATION">
            <article className="reference-card glass-card">
              <div className="reference-avatar">FJ</div>
              <div className="reference-info">
                <h3>{data.reference.name}</h3>
                <p className="card-subtitle">{data.reference.title}</p>
                <a href={`tel:${data.reference.phone.replace(/[^\d+]/g, "")}`}>{data.reference.phone}</a>
              </div>
              <span className="reference-mark" aria-hidden="true">“</span>
            </article>
          </Section>
        </div>

        <footer className="resume-footer">
          <a className="footer-brand" href="/">IM<span>.</span></a>
          <p>Designed with intention. Built for what’s next.</p>
          <span>© {new Date().getFullYear()} MD. ISRAFIL MIA</span>
        </footer>
      </div>
    </main>
  );
}
