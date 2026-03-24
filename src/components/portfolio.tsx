"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const filters = ["ALL", "WEB", "POS", "SAAS", "UI/UX"] as const;
type FilterType = (typeof filters)[number];

type ProjectCategory = Exclude<FilterType, "ALL">;
type MockupType =
  | "analytics"
  | "exchange"
  | "pos"
  | "crm"
  | "security"
  | "uikit";

type Project = {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  href: string;
  mockup: MockupType;
  icon: "chart" | "sync" | "store" | "nodes" | "shield" | "spark";
};

const projects: Project[] = [
  {
    id: 1,
    title: "Neural Analytics",
    description:
      "Real-time predictive modeling engine for enterprise data ecosystems.",
    category: "WEB",
    href: "#",
    mockup: "analytics",
    icon: "chart",
  },
  {
    id: 2,
    title: "Lumina Exchange",
    description:
      "Next-gen decentralized trading platform with fluid micro-interactions.",
    category: "SAAS",
    href: "#",
    mockup: "exchange",
    icon: "sync",
  },
  {
    id: 3,
    title: "SwiftPOS Elite",
    description:
      "Cloud-native retail ecosystem for high-volume hospitality venues.",
    category: "POS",
    href: "#",
    mockup: "pos",
    icon: "store",
  },
  {
    id: 4,
    title: "Vertex CRM",
    description:
      "Automated relationship management for distributed global teams.",
    category: "SAAS",
    href: "#",
    mockup: "crm",
    icon: "nodes",
  },
  {
    id: 5,
    title: "Cipher Sentinel",
    description:
      "AI-driven cybersecurity shield for cloud infrastructure protection.",
    category: "WEB",
    href: "#",
    mockup: "security",
    icon: "shield",
  },
  {
    id: 6,
    title: "Aether UI Kit",
    description:
      "The design system behind the world's most intuitive AI interfaces.",
    category: "UI/UX",
    href: "#",
    mockup: "uikit",
    icon: "spark",
  },
];

function ChartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 18V12M12 18V8M18 18V5"
        stroke="#26FEDC"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4 20H20"
        stroke="#26FEDC"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SyncIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 7V11H16"
        stroke="#26FEDC"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 17V13H8"
        stroke="#26FEDC"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 10C8.1 7.7 10.3 6.2 12.9 6.05C15.5 5.9 17.9 7.1 19.3 9.2"
        stroke="#26FEDC"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M16.9 14C15.8 16.3 13.6 17.8 11 17.95C8.4 18.1 6 16.9 4.6 14.8"
        stroke="#26FEDC"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 9H17V19H7V9Z"
        stroke="#26FEDC"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M6 9L7.5 5H16.5L18 9"
        stroke="#26FEDC"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10 13H14"
        stroke="#26FEDC"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function NodesIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="6" cy="12" r="2" fill="#26FEDC" />
      <circle cx="12" cy="6" r="2" fill="#26FEDC" />
      <circle cx="12" cy="18" r="2" fill="#26FEDC" />
      <circle cx="18" cy="12" r="2" fill="#26FEDC" />
      <path
        d="M7.8 10.8L10.2 7.2M13.8 7.2L16.2 10.8M7.8 13.2L10.2 16.8M13.8 16.8L16.2 13.2"
        stroke="#26FEDC"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 4L18 6.5V11C18 15 15.7 18.2 12 20C8.3 18.2 6 15 6 11V6.5L12 4Z"
        stroke="#26FEDC"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3L13.7 7.3L18 9L13.7 10.7L12 15L10.3 10.7L6 9L10.3 7.3L12 3Z"
        fill="#26FEDC"
      />
      <path
        d="M19 15L19.9 17.1L22 18L19.9 18.9L19 21L18.1 18.9L16 18L18.1 17.1L19 15Z"
        fill="#26FEDC"
      />
    </svg>
  );
}

function ProjectIcon({ icon }: { icon: Project["icon"] }) {
  const map = {
    chart: <ChartIcon />,
    sync: <SyncIcon />,
    store: <StoreIcon />,
    nodes: <NodesIcon />,
    shield: <ShieldIcon />,
    spark: <SparkIcon />,
  };

  return (
    <div
      style={{
        width: 34,
        height: 34,
        borderRadius: "50%",
        border: "1px solid rgba(38,254,220,0.22)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(1, 24, 66, 0.7)",
        flexShrink: 0,
      }}
    >
      {map[icon]}
    </div>
  );
}

function PortfolioLabel() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 26,
      }}
    >
      <span
        style={{
          width: 34,
          height: 2,
          background: "#26FEDC",
          display: "block",
          borderRadius: 999,
        }}
      />
      <span
        style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.34em",
          textTransform: "uppercase",
          color: "#26FEDC",
        }}
      >
        Showcase of Excellence
      </span>
    </div>
  );
}

function Thumbnail({ type }: { type: MockupType }) {
  const shellStyle: React.CSSProperties = {
    position: "relative",
    height: 228,
    overflow: "hidden",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    background:
      "linear-gradient(180deg, #dbe6ea 0%, #c6d5df 18%, #7f9db3 48%, #153969 74%, #082b5f 100%)",
  };

  return (
    <div style={shellStyle}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 5%, rgba(255,255,255,0.3), transparent 38%)",
          pointerEvents: "none",
        }}
      />

      {type === "analytics" && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 28,
            transform: "translateX(-50%)",
            width: "73%",
            height: 136,
            borderRadius: 14,
            background: "rgba(255,255,255,0.82)",
            border: "1px solid rgba(255,255,255,0.65)",
            boxShadow: "0 24px 40px rgba(0,0,0,0.18)",
            overflow: "hidden",
            backdropFilter: "blur(14px)",
          }}
        >
          <div
            style={{
              height: 20,
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "10px 14px",
              borderBottom: "1px solid rgba(160,174,192,0.35)",
            }}
          >
            <span style={dotStyle} />
            <span style={dotStyle} />
            <span style={dotStyle} />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "82px 1fr",
              gap: 16,
              padding: "14px 16px 10px",
            }}
          >
            <div
              style={{
                width: 62,
                height: 62,
                borderRadius: "50%",
                margin: "0 auto",
                background:
                  "conic-gradient(#31c8ff 0deg 120deg, #d4e8f5 120deg 360deg)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 11,
                  borderRadius: "50%",
                  background: "#ffffff",
                }}
              />
            </div>

            <div style={{ paddingTop: 4 }}>
              <div style={barLineStyle("92%")} />
              <div style={barLineStyle("82%")} />
              <div style={barLineStyle("65%")} />
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 8,
              padding: "0 16px 14px",
            }}
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                style={{
                  height: 24,
                  borderRadius: 6,
                  background: "rgba(183, 223, 244, 0.75)",
                }}
              />
            ))}
          </div>
        </div>
      )}

      {type === "exchange" && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 28,
            transform: "translateX(-50%)",
            width: "73%",
            height: 136,
            borderRadius: 14,
            background: "rgba(255,255,255,0.82)",
            border: "1px solid rgba(255,255,255,0.65)",
            boxShadow: "0 24px 40px rgba(0,0,0,0.18)",
            overflow: "hidden",
            backdropFilter: "blur(14px)",
          }}
        >
          <div
            style={{
              height: 28,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px 14px 8px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: "#86d6f5",
                }}
              />
              <div>
                <div style={barLineStyle("84px", 7)} />
                <div style={barLineStyle("54px", 6)} />
              </div>
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              <div style={pillMiniStyle} />
              <div style={pillMiniStyle} />
              <div style={pillMiniStyle} />
            </div>
          </div>

          <div
            style={{
              height: 30,
              borderRadius: 8,
              margin: "0 14px 12px",
              background: "#9ddcf7",
            }}
          />

          <div style={{ padding: "0 14px" }}>
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 72px",
                  gap: 12,
                  marginBottom: 8,
                }}
              >
                <div style={barLineStyle("100%", 10)} />
                <div style={barLineStyle("100%", 10)} />
              </div>
            ))}
          </div>
        </div>
      )}

      {type === "pos" && (
        <>
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 34,
              transform: "translateX(-50%)",
              width: 92,
              height: 132,
              borderRadius: 7,
              background: "rgba(255,255,255,0.22)",
              border: "1px solid rgba(255,255,255,0.35)",
              boxShadow: "0 24px 40px rgba(0,0,0,0.18)",
              backdropFilter: "blur(12px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 88,
              transform: "translateX(-50%)",
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "rgba(82, 118, 141, 0.85)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "inset 0 1px 10px rgba(0,0,0,0.18)",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M8 6H16C17.1 6 18 6.9 18 8V16C18 17.1 17.1 18 16 18H8C6.9 18 6 17.1 6 16V8C6 6.9 6.9 6 8 6Z"
                fill="rgba(255,255,255,0.25)"
              />
              <path
                d="M10 9L15 12L10 15V9Z"
                fill="rgba(255,255,255,0.72)"
              />
            </svg>
          </div>
        </>
      )}

      {type === "crm" && (
        <>
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 36,
              transform: "translateX(-50%)",
              width: "78%",
              height: 114,
              borderRadius: 14,
              background:
                "linear-gradient(180deg, #d9edf1 0%, #8ca7ba 100%)",
              border: "5px solid rgba(38,48,67,0.8)",
              boxShadow: "0 24px 40px rgba(0,0,0,0.18)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 154,
              transform: "translateX(-50%)",
              width: "84%",
              height: 6,
              borderRadius: 999,
              background: "#536992",
            }}
          />
        </>
      )}

      {type === "security" && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 18,
            transform: "translateX(-50%)",
            width: 92,
            height: 160,
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.34)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03))",
            boxShadow: "0 24px 40px rgba(0,0,0,0.18)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            style={{
              width: 32,
              height: 6,
              borderRadius: 999,
              background: "rgba(255,255,255,0.35)",
              margin: "10px auto 0",
            }}
          />
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: "50%",
              background: "rgba(56, 177, 232, 0.6)",
              margin: "34px auto 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 4L18 6.5V11C18 15 15.7 18.2 12 20C8.3 18.2 6 15 6 11V6.5L12 4Z"
                stroke="#d6f6ff"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M10 12.5L11.5 14L14.5 10.5"
                stroke="#d6f6ff"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 12,
              left: "50%",
              transform: "translateX(-50%)",
              width: 36,
              height: 6,
              borderRadius: 999,
              background: "rgba(255,255,255,0.2)",
            }}
          />
        </div>
      )}

      {type === "uikit" && (
        <>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, #8ca394 0%, #163a59 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: -8,
              top: 0,
              width: 144,
              height: 228,
              transform: "rotate(6deg)",
              borderBottomLeftRadius: 120,
              borderBottomRightRadius: 120,
              background:
                "linear-gradient(180deg, #96aa99 0%, #274b69 100%)",
              opacity: 0.86,
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 58,
              top: 2,
              width: 112,
              height: 228,
              transform: "rotate(10deg)",
              borderBottomLeftRadius: 100,
              borderBottomRightRadius: 100,
              background:
                "linear-gradient(180deg, #80998a 0%, #1f4260 100%)",
              opacity: 0.9,
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 112,
              top: 0,
              width: 96,
              height: 224,
              transform: "rotate(13deg)",
              borderBottomLeftRadius: 90,
              borderBottomRightRadius: 90,
              background:
                "linear-gradient(180deg, #647c6b 0%, #173653 100%)",
              opacity: 0.9,
            }}
          />
        </>
      )}

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 70,
          background:
            "linear-gradient(180deg, rgba(0,18,51,0) 0%, rgba(0,18,51,0.92) 100%)",
        }}
      />
    </div>
  );
}

function PortfolioCard({ project }: { project: Project }) {
  return (
    <article
      className="portfolio-item-card"
      style={{
        borderRadius: 22,
        overflow: "hidden",
        border: "1px solid rgba(23,58,115,0.95)",
        background:
          "linear-gradient(180deg, rgba(2,25,77,0.86) 0%, rgba(0,18,60,0.97) 100%)",
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.02), 0 12px 30px rgba(0,0,0,0.24)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Thumbnail type={project.mockup} />

      <div
        style={{
          padding: "24px 24px 26px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 12,
            marginBottom: 14,
          }}
        >
          <h3
            style={{
              fontSize: "clamp(22px, 2vw, 24px)",
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#DDE5FF",
              margin: 0,
              letterSpacing: "-0.6px",
            }}
          >
            {project.title}
          </h3>

          <ProjectIcon icon={project.icon} />
        </div>

        <p
          style={{
            fontSize: 15,
            lineHeight: 1.85,
            color: "#99ABD7",
            margin: 0,
            maxWidth: "92%",
          }}
        >
          {project.description}
        </p>

        <Link
          href={project.href}
          style={{
            marginTop: 24,
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#26FEDC",
            textDecoration: "none",
          }}
        >
          View case study <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

const dotStyle: React.CSSProperties = {
  width: 8,
  height: 8,
  borderRadius: "50%",
  background: "#c5ced8",
};

const pillMiniStyle: React.CSSProperties = {
  width: 30,
  height: 8,
  borderRadius: 999,
  background: "#c6cfda",
};

function barLineStyle(width: string | number, height = 8): React.CSSProperties {
  return {
    width,
    height,
    borderRadius: 999,
    background: "#d8e0ea",
    marginBottom: 8,
  };
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("ALL");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "ALL") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div style={{ background: "var(--background)" }}>
      <Navbar />

      <main
        style={{
          background: "var(--background)",
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          paddingTop: "118px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "-120px",
              top: "80px",
              width: 280,
              height: 280,
              borderRadius: "50%",
              background: "rgba(14,121,255,0.08)",
              filter: "blur(80px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "-90px",
              top: "10px",
              width: 320,
              height: 320,
              borderRadius: "50%",
              background: "rgba(38,254,220,0.07)",
              filter: "blur(90px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "52%",
              top: "680px",
              transform: "translateX(-50%)",
              width: 280,
              height: 280,
              borderRadius: "50%",
              background: "rgba(42,133,255,0.07)",
              filter: "blur(90px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "-60px",
              bottom: "220px",
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: "rgba(38,254,220,0.06)",
              filter: "blur(95px)",
            }}
          />
        </div>

        <section
          style={{
            padding: "36px 24px 40px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
            }}
          >
            <div style={{ maxWidth: 710 }}>
              <PortfolioLabel />

              <h1
                style={{
                  fontSize: "clamp(58px, 7vw, 92px)",
                  fontWeight: 800,
                  lineHeight: 0.94,
                  letterSpacing: "-0.06em",
                  color: "#DDE5FF",
                  margin: 0,
                }}
              >
                Our <span
  style={{
    background: "linear-gradient(90deg, #99ABD7 0%, #5FE4F3 35%, #26FEDC 72%, #7BFFE7 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
    display: "inline-block",
  }}
>
  Portfolio
</span>
              </h1>

              <p
                style={{
                  maxWidth: 650,
                  marginTop: 26,
                  marginBottom: 0,
                  fontSize: 17,
                  lineHeight: 1.8,
                  color: "#99ABD7",
                }}
              >
                Exploring the intersection of neural design and digital fluidity.
                Each project represents a leap forward in interface intelligence
                and user-centric architecture.
              </p>
            </div>

            <div
              style={{
                marginTop: 50,
                overflowX: "auto",
                paddingBottom: 4,
              }}
            >
              <div
                className="portfolio-filter-row"
                style={{
                  display: "inline-flex",
                  minWidth: "max-content",
                  alignItems: "center",
                  gap: 4,
                  padding: 4,
                  borderRadius: 999,
                  border: "1px solid rgba(23,59,118,0.95)",
                  background: "rgba(0,29,75,0.36)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)",
                }}
              >
                {filters.map((filter) => {
                  const isActive = activeFilter === filter;

                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setActiveFilter(filter)}
                      style={{
                        border: "none",
                        outline: "none",
                        cursor: "pointer",
                        borderRadius: 999,
                        padding: "11px 28px",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.24em",
                        textTransform: "uppercase",
                        color: isActive ? "#EAFBFF" : "#99ABD7",
                        background: isActive
                          ? "linear-gradient(90deg, #0d58a8 0%, #1f87ff 48%, #26FEDC 100%)"
                          : "transparent",
                        boxShadow: isActive
                          ? "0 0 20px rgba(38,254,220,0.18)"
                          : "none",
                        transition: "all 0.25s ease",
                      }}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              className="portfolio-page-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 26,
                marginTop: 42,
              }}
            >
              {filteredProjects.map((project) => (
                <PortfolioCard key={project.id} project={project} />
              ))}
            </div>

            <section
              style={{
                marginTop: 72,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  borderRadius: 28,
                  padding: "66px 28px",
                  position: "relative",
                  overflow: "hidden",
                  border: "1px solid rgba(16,48,109,0.95)",
                  background:
                    "linear-gradient(90deg, #0a265f 0%, #031a4d 52%, #0a3458 100%)",
                  boxShadow: "0 18px 50px rgba(0,0,0,0.22)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: "35%",
                      height: "100%",
                      background:
                        "radial-gradient(circle at left, rgba(114,170,255,0.16), transparent 58%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      right: 0,
                      bottom: 0,
                      width: "35%",
                      height: "100%",
                      background:
                        "radial-gradient(circle at right, rgba(38,254,220,0.13), transparent 58%)",
                    }}
                  />
                </div>

                <div
                  style={{
                    position: "relative",
                    maxWidth: 760,
                    margin: "0 auto",
                    textAlign: "center",
                  }}
                >
                  <h2
                    style={{
                      margin: 0,
                      fontSize: "clamp(42px, 5vw, 58px)",
                      fontWeight: 800,
                      lineHeight: 1.05,
                      letterSpacing: "-0.04em",
                      color: "#DDE5FF",
                    }}
                  >
                    Have a project in mind?
                  </h2>

                  <p
                    style={{
                      maxWidth: 560,
                      margin: "18px auto 0",
                      fontSize: 16,
                      lineHeight: 1.8,
                      color: "#99ABD7",
                    }}
                  >
                    Let&apos;s build the future of your digital identity together
                    using our neural interface framework.
                  </p>

                  <Link
                    href="/contact"
                    style={{
                      marginTop: 30,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minWidth: 230,
                      padding: "14px 28px",
                      borderRadius: 10,
                      background:
                        "linear-gradient(90deg, #7AB8FF 0%, #26FEDC 100%)",
                      color: "#05214C",
                      fontSize: 12,
                      fontWeight: 800,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      boxShadow: "0 8px 24px rgba(93,175,255,0.35)",
                    }}
                  >
                    Start a conversation
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </section>

        <Footer />
      </main>

      
    </div>
  );
}