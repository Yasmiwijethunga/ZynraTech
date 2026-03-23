"use client";

import Link from "next/link";

const footerLinks = {
  ECOSYSTEM: ["Team Model", "Neural Grid", "Sponsored AI"],
  NETWORK: ["Global Services", "Gateway Nodes", "White Nodes"],
  PROTOCOL: ["Privacy Policy", "Terms of Service", "Cookie Settings"],
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
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
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
              ZYNRA<span style={{ color: "var(--cyan)" }}>TECH</span>
            </div>
            <p
              style={{
                fontSize: "13px",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.4)",
                maxWidth: "240px",
                marginBottom: "24px",
              }}
            >
              Building neural interface systems and scalable software ecosystems for the next generation.
            </p>
            {/* Social Icons */}
            <div style={{ display: "flex", gap: "12px" }}>
              {["X", "in", "gh"].map((s) => (
                <Link
                  key={s}
                  href="#"
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "8px",
                    background: "rgba(0,212,255,0.06)",
                    border: "1px solid rgba(0,212,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "12px",
                    fontWeight: 700,
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "2.5px",
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                {title}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.45)",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "var(--cyan)")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color =
                          "rgba(255,255,255,0.45)")
                      }
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
            © {new Date().getFullYear()} ZynraTech. All systems operational.
          </p>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>
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