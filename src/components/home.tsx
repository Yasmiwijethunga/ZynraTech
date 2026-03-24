"use client";

import React, { useState } from "react";

// ── SVG Icons ────────────────────────────────────────────────────────────────

function IconNeural() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="3" width="6" height="6" rx="1.5" stroke="var(--cyan)" strokeWidth="1.5" />
      <rect x="16" y="3" width="6" height="6" rx="1.5" stroke="var(--cyan)" strokeWidth="1.5" />
      <rect x="9" y="15" width="6" height="6" rx="1.5" stroke="var(--cyan)" strokeWidth="1.5" />
      <line x1="8" y1="6" x2="16" y2="6" stroke="var(--cyan)" strokeWidth="1.5" />
      <line x1="5" y1="9" x2="12" y2="15" stroke="var(--cyan)" strokeWidth="1.5" />
      <line x1="19" y1="9" x2="12" y2="15" stroke="var(--cyan)" strokeWidth="1.5" />
    </svg>
  );
}

function IconFlow() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 12h16M12 4l8 8-8 8" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconLock() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="var(--cyan)" strokeWidth="1.5" />
      <path d="M8 11V7a4 4 0 018 0v4" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="16" r="1.5" fill="var(--cyan)" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2 5l2.5 2.5L8 3" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────

const competencies = [
  {
    id: 1,
    icon: <IconNeural />,
    title: "Neural Systems",
    desc: "Deep-level backends designed for extreme concurrency and millisecond latency in neural data processing.",
    tag: "EXPLORE TECH →",
  },
  {
    id: 2,
    icon: <IconFlow />,
    title: "Interface Flow",
    desc: "User interfaces that feel like natural extensions of the human mind. Fluid, responsive, and predictive.",
    tag: "INTEGRA SYSTEMS →",
    active: true,
  },
  {
    id: 3,
    icon: <IconLock />,
    title: "Quantum Encryption",
    desc: "Securing the next era of data with post-quantum cryptographic layers integrated at the core level.",
    tag: "SECURITY GRID →",
  },
];

const portfolio = [
  {
    id: 1,
    tag: "FIRST ARTIFACT",
    title: "Project Aegis-9",
    bg: "linear-gradient(135deg, #0d2240 0%, #051525 100%)",
    accent: "#00d4ff",
  },
  {
    id: 2,
    tag: "ENTERPRISE",
    title: "Omni-Link Core",
    bg: "linear-gradient(135deg, #1a2a1a 0%, #0a1a0a 100%)",
    accent: "#22c55e",
  },
  {
    id: 3,
    tag: "INTERFACE",
    title: "Vortex UI",
    bg: "linear-gradient(135deg, #1a1a2e 0%, #0a0a1e 100%)",
    accent: "#a855f7",
  },
];

// ── Main Component ────────────────────────────────────────────────────────────

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div style={{ background: "var(--background)" }}>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="hero-bg"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "780px", position: "relative", zIndex: 1 }}>
          {/* Status badge */}
          <div style={{ marginBottom: "32px" }}>
            <span className="status-badge">
              <span className="status-dot" />
              System Status: Optimal
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(42px, 7vw, 80px)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-2px",
              marginBottom: "24px",
              color: "#ffffff",
            }}
          >
            Engineering the{" "}
            <span style={{ color: "var(--cyan)", display: "block" }}>
              Future of Tech
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.55)",
              maxWidth: "540px",
              margin: "0 auto 40px",
            }}
          >
            Architecting high-performance digital neural interfaces and scalable
            software ecosystems for the next generation of global industry.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#contact" className="btn-cyan">
              Get Started
            </a>
            <a href="#services" className="btn-outline">
              View Services
            </a>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "120px",
            background: "linear-gradient(to top, var(--background), transparent)",
            pointerEvents: "none",
          }}
        />
      </section>

      {/* ── CORE COMPETENCIES ───────────────────────────────────────────── */}
      <section
        id="services"
        style={{
          padding: "100px 24px",
          background: "var(--background)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Header row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "56px",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 800,
                  color: "#ffffff",
                  letterSpacing: "-1px",
                  marginBottom: "12px",
                }}
              >
                Core Competencies
              </h2>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)" }}>
                We bridge the gap between complex hardware requirements and fluid user experiences.
              </p>
            </div>
            <span className="section-tag">Expertise / 01</span>
          </div>

          {/* Cards grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
            className="competency-grid"
          >
            {competencies.map((c) => (
              <div key={c.id} className={`card ${c.active ? "active" : ""}`}>
                <div className="icon-box">
                  {c.icon}
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "12px",
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: "24px",
                  }}
                >
                  {c.desc}
                </p>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    color: "var(--cyan)",
                    cursor: "pointer",
                  }}
                >
                  {c.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / MISSION ─────────────────────────────────────────────── */}
      <section
        id="about"
        style={{
          padding: "100px 24px",
          background: "var(--navy)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left: visual */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                aspectRatio: "4/3",
                background: "linear-gradient(135deg, #0a1f3c 0%, #051020 100%)",
                border: "1px solid rgba(0,212,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Globe illustration */}
              <div style={{ position: "relative", width: "200px", height: "200px" }}>
                <div
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle at 35% 35%, #1a4a7a 0%, #051525 60%, #020a15 100%)",
                    border: "1px solid rgba(0,212,255,0.3)",
                    boxShadow: "0 0 60px rgba(0,212,255,0.15), inset 0 0 40px rgba(0,0,100,0.5)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Grid lines on globe */}
                  {[0, 30, 60, 90, 120, 150].map((deg) => (
                    <div
                      key={deg}
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: "100%",
                        height: "1px",
                        background: "rgba(0,212,255,0.15)",
                        transform: `translate(-50%, -50%) rotate(${deg}deg)`,
                      }}
                    />
                  ))}
                  {[0, 30, 60].map((i) => (
                    <div
                      key={i}
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        width: `${60 + i * 40}px`,
                        height: `${60 + i * 40}px`,
                        borderRadius: "50%",
                        border: "1px solid rgba(0,212,255,0.1)",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  ))}
                </div>
                {/* Orbiting dot */}
                <div
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "20px",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "var(--cyan)",
                    boxShadow: "0 0 16px var(--cyan)",
                  }}
                />
              </div>
            </div>

            {/* Stat badge */}
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                left: "24px",
                background: "rgba(6,13,31,0.95)",
                border: "1px solid rgba(0,212,255,0.25)",
                borderRadius: "12px",
                padding: "16px 20px",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: 900,
                  color: "var(--cyan)",
                  letterSpacing: "-1px",
                }}
              >
                12+
              </div>
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  color: "rgba(255,255,255,0.45)",
                  textTransform: "uppercase",
                  maxWidth: "120px",
                  lineHeight: 1.6,
                  marginTop: "4px",
                }}
              >
                Global Patents in Neural Link Tech
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div>
            <span className="section-tag" style={{ marginBottom: "16px", display: "block" }}>
              Our Mission
            </span>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: "-1px",
                color: "#ffffff",
                marginBottom: "20px",
              }}
            >
              We build software that thinks{" "}
              <span style={{ color: "var(--cyan)" }}>ahead</span> of the curve.
            </h2>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.5)",
                marginBottom: "32px",
              }}
            >
              Founded at the intersection of neuroscience and computational physics, ZynraTech develops
              systems that do not just process data — they understand intent. Our mission is to dissolve
              the barrier between human creativity and machine execution.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                "Distributed Decentralized Architectures",
                "Predictive Behavior Modeling",
                "Zero-Latency Cloud Sync",
              ].map((item) => (
                <div key={item} className="check-item">
                  <div className="check-icon">
                    <IconCheck />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NEURAL DEPLOYMENTS (PORTFOLIO) ──────────────────────────────── */}
      <section
        id="portfolio"
        style={{
          padding: "100px 24px",
          background: "var(--background)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-1px",
                marginBottom: "8px",
              }}
              className="heading-line heading-line-center"
            >
              Neural Deployments
            </h2>
          </div>

          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
            }}
            className="portfolio-grid"
          >
            {portfolio.map((project, idx) => (
              <div
                key={project.id}
                className="portfolio-card"
                style={{
                  height: idx === 0 ? "300px" : "280px",
                  background: project.bg,
                  border: "1px solid rgba(255,255,255,0.06)",
                  gridColumn: idx === 2 ? "1" : "auto",
                }}
              >
                {/* Animated circuit lines */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `radial-gradient(circle at 70% 30%, ${project.accent}15 0%, transparent 60%)`,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />
                <div className="overlay" />
                <div className="label">
                  <span
                    style={{
                      display: "block",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      color: project.accent,
                      marginBottom: "6px",
                      textTransform: "uppercase",
                    }}
                  >
                    {project.tag}
                  </span>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#ffffff",
                    }}
                  >
                    {project.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ─────────────────────────────────────────────────── */}
      <section
        style={{
          padding: "100px 24px",
          background: "var(--navy)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div className="quote-mark">&ldquo;</div>
          <p
            style={{
              fontSize: "clamp(18px, 3vw, 26px)",
              fontWeight: 500,
              lineHeight: 1.6,
              color: "#ffffff",
              marginTop: "-20px",
              marginBottom: "36px",
            }}
          >
            &ldquo;ZynraTech did not just build us a platform; they built us a competitive moat. Their
            understanding of neural scalability is unparalleled in the industry today.&rdquo;
          </p>

          {/* Avatar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--cyan), #0040ff)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                fontWeight: 700,
                color: "#ffffff",
                flexShrink: 0,
              }}
            >
              E
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff" }}>
                Elena Vance
              </div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
                CTO at ArcaNova Corp
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────────────── */}
      <section
        id="contact"
        style={{
          padding: "100px 24px",
          background: "var(--background)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left */}
          <div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-1px",
                marginBottom: "12px",
              }}
            >
              Initialize Contact
            </h2>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.45)",
                marginBottom: "40px",
                maxWidth: "300px",
              }}
            >
              Ready to evolve your digital infrastructure? Send us a packet, and our team will
              interface with you shortly.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                {
                  icon: "📍",
                  label: "Global HQ",
                  value: "7722 Silicon Hollow, Neo-Tokyo Node",
                },
                {
                  icon: "✉️",
                  label: "Encrypted Mail",
                  value: "uplink@zynratech.io",
                },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "8px",
                      background: "rgba(0,212,255,0.08)",
                      border: "1px solid rgba(0,212,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "2px",
                        color: "rgba(255,255,255,0.35)",
                        textTransform: "uppercase",
                        marginBottom: "4px",
                      }}
                    >
                      {item.label}
                    </div>
                    <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            style={{
              background: "rgba(13,31,60,0.4)",
              border: "1px solid rgba(0,212,255,0.1)",
              borderRadius: "16px",
              padding: "36px",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "1.5px",
                      color: "rgba(255,255,255,0.4)",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    Ident Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "1.5px",
                      color: "rgba(255,255,255,0.4)",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    Burst Frequency (Email)
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "1.5px",
                      color: "rgba(255,255,255,0.4)",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    Transmission Data
                  </label>
                  <textarea
                    rows={5}
                    placeholder="How can we help you engineer the future?"
                    className="form-input"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    style={{ resize: "vertical" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-cyan"
                  style={{ width: "100%", textAlign: "center", padding: "14px" }}
                >
                  Send Transmission
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .competency-grid { grid-template-columns: 1fr !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
          .portfolio-grid { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 640px) {
          .portfolio-card { height: 240px !important; }
        }
      `}</style>
    </div>
  );
}