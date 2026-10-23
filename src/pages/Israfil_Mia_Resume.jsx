import { useState, useEffect } from "react";

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

const Tag = ({ label }) => (
  <span
    style={{
      display: "inline-block",
      padding: "4px 14px",
      borderRadius: "999px",
      fontSize: "0.78rem",
      fontWeight: 600,
      letterSpacing: "0.04em",
      background: "rgba(99,209,160,0.13)",
      color: "#63d1a0",
      border: "1px solid rgba(99,209,160,0.28)",
      margin: "3px 4px 3px 0",
    }}
  >
    {label}
  </span>
);

const Section = ({ title, icon, children }) => (
  <div style={{ marginBottom: "2.4rem" }}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "1.1rem",
      }}
    >
      <span style={{ fontSize: "1.25rem" }}>{icon}</span>
      <h2
        style={{
          margin: 0,
          fontSize: "0.78rem",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#63d1a0",
          fontFamily: "'DM Mono', monospace",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          flex: 1,
          height: "1px",
          background: "linear-gradient(90deg, rgba(99,209,160,0.35) 0%, transparent 100%)",
        }}
      />
    </div>
    {children}
  </div>
);

export default function Resume() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const cardStyle = {
    background: "rgba(255,255,255,0.035)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px",
    padding: "1.1rem 1.3rem",
    marginBottom: "0.9rem",
    backdropFilter: "blur(4px)",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0000cc 0%, #991e63 100%)",
        color: "#e2e8f0",
        fontFamily: "'Lora', Georgia, serif",
        padding: "2rem 1rem 4rem",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: "opacity 0.65s ease, transform 0.65s ease",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500;600&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');
        * { box-sizing: border-box; }
        a { color: #63d1a0; text-decoration: none; }
        a:hover { text-decoration: underline; }
        .dl-btn:hover { background: rgba(99,209,160,0.22) !important; transform: translateY(-1px); }
        .edu-card:hover { border-color: rgba(99,209,160,0.3) !important; background: rgba(99,209,160,0.05) !important; }
      `}</style>

      <div style={{ maxWidth: "820px", margin: "0 auto" }}>

        {/* ── HERO ── */}
        <header
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            alignItems: "flex-start",
            marginBottom: "2.8rem",
            paddingBottom: "2rem",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Avatar placeholder */}
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #1e3a2f 0%, #0d2b20 100%)",
              border: "2px solid rgba(99,209,160,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
              flexShrink: 0,
            }}
          >
            🎓
          </div>

          <div style={{ flex: 1, minWidth: "240px" }}>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.72rem",
                color: "#63d1a0",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "6px",
              }}
            >
              Portfolio · Resume
            </div>
            <h1
              style={{
                margin: "0 0 6px",
                fontSize: "clamp(1.9rem, 5vw, 2.8rem)",
                fontWeight: 600,
                fontFamily: "'Lora', serif",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "#f0f6f3",
              }}
            >
              {data.name}
            </h1>
            <p
              style={{
                margin: "0 0 14px",
                fontSize: "0.95rem",
                color: "#8fa8a0",
                fontStyle: "italic",
              }}
            >
              {data.title}
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                fontSize: "0.82rem",
                color: "#8fa8a0",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              <a href={`mailto:${data.email}`}>✉ {data.email}</a>
              <span>📞 {data.phone}</span>
              <a href={`https://${data.github}`} target="_blank" rel="noreferrer">
                ⌥ {data.github}
              </a>
            </div>
          </div>

          {/* Download button */}
          <a
            href="/mnt/user-data/uploads/Md_Israfil_Mia_Resume.pdf"
            download="Md_Israfil_Mia_Resume.pdf"
            className="dl-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              padding: "9px 18px",
              borderRadius: "8px",
              background: "rgba(99,209,160,0.12)",
              border: "1px solid rgba(99,209,160,0.35)",
              color: "#63d1a0",
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              cursor: "pointer",
              transition: "all 0.2s ease",
              textDecoration: "none",
              alignSelf: "flex-start",
              marginTop: "4px",
            }}
          >
            ↓ Download CV
          </a>
        </header>

        {/* ── SUMMARY ── */}
        <Section title="About" icon="◈">
          <p
            style={{
              margin: 0,
              lineHeight: 1.8,
              color: "#b0c4bc",
              fontSize: "0.97rem",
              borderLeft: "2px solid rgba(99,209,160,0.4)",
              paddingLeft: "1rem",
              fontStyle: "italic",
            }}
          >
            {data.summary}
          </p>
        </Section>

        {/* ── EXPERIENCE ── */}
        <Section title="Experience" icon="◉">
          {data.experience.map((e, i) => (
            <div key={i} className="edu-card" style={{ ...cardStyle, transition: "all 0.2s" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "4px" }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "1rem", color: "#e8f5ef" }}>
                    {e.role}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#8fa8a0", marginTop: "2px" }}>
                    {e.org}
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.72rem",
                    color: "#63d1a0",
                    background: "rgba(99,209,160,0.1)",
                    padding: "3px 10px",
                    borderRadius: "6px",
                    alignSelf: "flex-start",
                    whiteSpace: "nowrap",
                  }}
                >
                  {e.period}
                </span>
              </div>
              <p style={{ margin: "8px 0 0", fontSize: "0.85rem", color: "#8fa8a0", lineHeight: 1.6 }}>
                {e.desc}
              </p>
            </div>
          ))}
        </Section>

        {/* ── EDUCATION ── */}
        <Section title="Education" icon="◇">
          {data.education.map((e, i) => (
            <div
              key={i}
              className="edu-card"
              style={{
                ...cardStyle,
                transition: "all 0.2s",
                borderLeft: i === 0 ? "3px solid rgba(99,209,160,0.5)" : cardStyle.border,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "4px" }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.97rem", color: "#e8f5ef" }}>
                    {e.degree}
                  </div>
                  <div style={{ fontSize: "0.83rem", color: "#8fa8a0", marginTop: "2px" }}>
                    {e.institution}
                  </div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.72rem",
                      color: "#63d1a0",
                      background: "rgba(99,209,160,0.1)",
                      padding: "3px 10px",
                      borderRadius: "6px",
                      marginBottom: "4px",
                    }}
                  >
                    {e.year}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.7rem",
                      color: "#8fa8a0",
                    }}
                  >
                    CGPA {e.cgpa}
                  </div>
                </div>
              </div>
              {e.thesis && (
                <p
                  style={{
                    margin: "8px 0 0",
                    fontSize: "0.8rem",
                    color: "#7a9e94",
                    lineHeight: 1.55,
                    fontStyle: "italic",
                  }}
                >
                  Thesis: {e.thesis}
                </p>
              )}
            </div>
          ))}
        </Section>

        {/* ── SKILLS ── */}
        <Section title="Skills" icon="◆">
          <div style={cardStyle}>
            <div style={{ marginBottom: "0.9rem" }}>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.7rem",
                  color: "#5a7a72",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                }}
              >
                Languages & Technologies
              </div>
              <div>{data.skills.languages.map((s) => <Tag key={s} label={s} />)}</div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.7rem",
                  color: "#5a7a72",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                }}
              >
                Tools & Environments
              </div>
              <div>
                {data.skills.tools.map((s) => (
                  <span
                    key={s}
                    style={{
                      display: "inline-block",
                      padding: "4px 14px",
                      borderRadius: "999px",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      background: "rgba(120,150,200,0.1)",
                      color: "#8ab4d8",
                      border: "1px solid rgba(120,150,200,0.22)",
                      margin: "3px 4px 3px 0",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ── RESEARCH ── */}
        <Section title="Research Interests" icon="◎">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {data.research.map((r) => (
              <span
                key={r}
                style={{
                  padding: "6px 18px",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  background: "rgba(99,209,160,0.07)",
                  border: "1px solid rgba(99,209,160,0.2)",
                  color: "#a8dfc8",
                }}
              >
                {r}
              </span>
            ))}
          </div>
        </Section>

        {/* ── CERTIFICATIONS ── */}
        <Section title="Certifications" icon="◈">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "0.8rem" }}>
            {data.certifications.map((c, i) => (
              <div key={i} style={cardStyle}>
                <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#e8f5ef", marginBottom: "4px" }}>
                  {c.name}
                </div>
                <div style={{ fontSize: "0.78rem", color: "#8fa8a0", display: "flex", justifyContent: "space-between" }}>
                  <span>{c.provider}</span>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      color: "#63d1a0",
                      fontSize: "0.72rem",
                    }}
                  >
                    {c.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── REFERENCE ── */}
        <Section title="Reference" icon="◑">
          <div style={{ ...cardStyle, display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(99,209,160,0.1)",
                border: "1px solid rgba(99,209,160,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.1rem",
                flexShrink: 0,
              }}
            >
              👤
            </div>
            <div>
              <div style={{ fontWeight: 600, color: "#e8f5ef", fontSize: "0.95rem" }}>
                {data.reference.name}
              </div>
              <div style={{ fontSize: "0.82rem", color: "#8fa8a0" }}>{data.reference.title}</div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "#63d1a0",
                  fontFamily: "'DM Mono', monospace",
                  marginTop: "2px",
                }}
              >
                {data.reference.phone}
              </div>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer
          style={{
            marginTop: "3rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            textAlign: "center",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.7rem",
            color: "#aaaaaa",
            letterSpacing: "0.1em",
          }}
        >
          MD. ISRAFIL MIA · PORTFOLIO RESUME · {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}
