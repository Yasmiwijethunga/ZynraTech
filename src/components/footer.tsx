"use client";

import Link from "next/link";

const footerLinks = {
  DIRECTORY: ["Privacy Policy", "Terms of Service"],
  OPERATIONS: ["Cookie Settings", "Global Careers"],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "#040b18",
        borderTop: "1px solid rgba(0,212,255,0.08)",
        padding: "64px 24px 32px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1.2fr",
            gap: "48px",
            paddingBottom: "48px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
          className="footer-grid"
        >
          {/* Brand col */}
          <div>
            <div
              style={{
                fontSize: "22px",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-0.5px",
                marginBottom: "16px",
              }}
            >
              Zynra<span style={{ color: "var(--cyan)" }}>Tech</span>
            </div>
            <p
              style={{
                fontSize: "12px",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.25)",
                maxWidth: "240px",
                marginBottom: "0",
              }}
            >
              © 2024 ZYNRATECH. NEURAL INTERFACE SYSTEMS.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                style={{
                  fontSize: "10px",
                  fontWeight: 800,
                  letterSpacing: "2.5px",
                  color: "rgba(255,255,255,0.4)",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                {title}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.3)",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "var(--cyan)")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color =
                          "rgba(255,255,255,0.3)")
                      }
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Neural Feed col */}
          <div>
            <h4
              style={{
                fontSize: "10px",
                fontWeight: 800,
                letterSpacing: "2.5px",
                color: "rgba(255,255,255,0.4)",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              NEURAL FEED
            </h4>
            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "4px",
              padding: "16px",
              display: "flex",
              alignItems: "center",
              gap: "12px"
            }}>
              <div style={{ width: "24px", height: "24px", borderRadius: "4px", background: "rgba(0, 212, 255, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--cyan)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </div>
              <div style={{ fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "1px" }}>
                V4.0.2 STABLE CORE
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.15)" }}>
            Engineered for the next generation
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}