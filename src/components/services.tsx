"use client";

import React, { useState, useEffect, useRef } from "react";

interface Service {
    title: string;
    description: string;
    colorHex: string;
    shadowHex: string;
    icon: React.ReactNode;
    capabilities: string[];
    impact: string;
    tag: string;
}

/* ── Glassmorphism ─────────────────────────────────────────────────────── */
const glass = (extra?: React.CSSProperties): React.CSSProperties => ({
    background: "rgba(8, 15, 36, 0.75)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(255,255,255,0.07)",
    ...extra,
});

/* ── Counter hook ──────────────────────────────────────────────────────── */
function useCounter(target: number, duration = 2000, start = false) {
    const [value, setValue] = useState(0);
    useEffect(() => {
        if (!start) return;
        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setValue(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [start, target, duration]);
    return value;
}

/* ── Stat Item ─────────────────────────────────────────────────────────── */
function StatItem({ target, suffix, label, started }: { target: number; suffix: string; label: string; started: boolean }) {
    const val = useCounter(target, 1800, started);
    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900, color: "#00d4ff", letterSpacing: "-1px" }}>
                {val}{suffix}
            </div>
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginTop: "6px" }}>
                {label}
            </div>
        </div>
    );
}

/* ── Modal ─────────────────────────────────────────────────────────────── */
const ServiceDetailModal = ({
    isOpen, onClose, service,
}: { isOpen: boolean; onClose: () => void; service: Service | null }) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    if (!isOpen || !service) return null;

    return (
        <div style={{ position: "fixed", inset: 0, zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", background: "rgba(0,0,0,0.7)", backdropFilter: "blur(12px)" }}>
            <div style={{ ...glass(), width: "100%", maxWidth: "860px", maxHeight: "90vh", overflowY: "auto", borderRadius: "28px", position: "relative", boxShadow: `0 0 80px ${service.shadowHex}30` }}>
                {/* Glow top */}
                <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: "2px", background: `linear-gradient(90deg, transparent, ${service.colorHex}, transparent)`, borderRadius: "99px" }} />

                {/* Close */}
                <button onClick={onClose} style={{ position: "absolute", top: "20px", right: "20px", width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="18" height="18">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div style={{ padding: "clamp(32px, 5vw, 64px)" }}>
                    <div className="svc-modal-grid">
                        {/* Left */}
                        <div>
                            <div style={{ width: "72px", height: "72px", borderRadius: "18px", background: `${service.colorHex}18`, border: `1px solid ${service.colorHex}40`, display: "flex", alignItems: "center", justifyContent: "center", color: service.colorHex, marginBottom: "24px", boxShadow: `0 0 24px ${service.colorHex}20` }}>
                                {service.icon}
                            </div>
                            <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: service.colorHex, textTransform: "uppercase", marginBottom: "10px" }}>{service.tag}</div>
                            <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "16px" }}>{service.title}</h2>
                            <div style={{ width: "40px", height: "3px", background: service.colorHex, borderRadius: "99px", marginBottom: "20px" }} />
                            <p style={{ fontSize: "14px", lineHeight: 1.85, color: "rgba(255,255,255,0.5)", marginBottom: "0" }}>{service.description}</p>
                        </div>

                        {/* Right */}
                        <div>
                            <h3 style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "2.5px", color: service.colorHex, textTransform: "uppercase", marginBottom: "20px" }}>Core Capabilities</h3>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "32px" }}>
                                {service.capabilities.map((cap, i) => (
                                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 14px", borderRadius: "12px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                        <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: `${service.colorHex}20`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                            <svg fill="none" stroke={service.colorHex} viewBox="0 0 24 24" width="12" height="12">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>{cap}</span>
                                    </div>
                                ))}
                            </div>

                            <h3 style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "2.5px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "14px" }}>Strategic Impact</h3>
                            <p style={{ fontSize: "14px", lineHeight: 1.85, color: "rgba(255,255,255,0.55)", padding: "18px 20px", borderRadius: "14px", background: "rgba(255,255,255,0.03)", borderLeft: `3px solid ${service.colorHex}`, marginBottom: "28px" }}>
                                {service.impact}
                            </p>

                            <button className="consult-btn">
                                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Book a Consultation
                                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* ── Main Page ─────────────────────────────────────────────────────────── */
export default function Services() {
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [statsVisible, setStatsVisible] = useState(false);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.3 });
        if (statsRef.current) observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, []);

    const services: Service[] = [
        {
            title: "Web Development",
            description: "Crafting high-performance, responsive digital experiences using bleeding-edge frameworks for modern browser compatibility.",
            colorHex: "#00d4ff", shadowHex: "#00d4ff",
            tag: "01 — FRONTEND",
            icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" /></svg>),
            capabilities: ["Technology-Agnostic Development", "Responsive SEO Architecture", "Performance Optimization", "Web3 Integration"],
            impact: "We deliver lightning-fast digital storefronts that convert visitors into loyal customers through seamless user flows and robust infrastructure.",
        },
        {
            title: "Full Stack Applications",
            description: "End-to-end architecture development combining robust back-end logic with intuitive, high-velocity front-end systems.",
            colorHex: "#818cf8", shadowHex: "#818cf8",
            tag: "02 — FULLSTACK",
            icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>),
            capabilities: ["Microservices Design", "Cloud Native Back-Ends", "Real-time Data Systems", "Legacy Modernization"],
            impact: "Eliminate technical debt and scale effortlessly with architectures designed for the modern cloud landscape.",
        },
        {
            title: "POS Systems",
            description: "Bespoke point-of-sale solutions designed for retail fluidity, real-time inventory tracking, and secure payment processing.",
            colorHex: "#22d3ee", shadowHex: "#22d3ee",
            tag: "03 — RETAIL TECH",
            icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>),
            capabilities: ["Omnichannel Integration", "Biometric Authentication", "IoT Sensor Connectivity", "Real-time Inventory"],
            impact: "Transform your retail experience with hardware-software synergy that simplifies complex business operations.",
        },
        {
            title: "SaaS Solutions",
            description: "Scalable multi-tenant architectures designed for high availability, automated deployments, and global user reach.",
            colorHex: "#00d4ff", shadowHex: "#00d4ff",
            tag: "04 — CLOUD",
            icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>),
            capabilities: ["Multi-tenant Security", "Global CDN Distribution", "Automated DevOps CI/CD", "Subscription Economics"],
            impact: "Launch your product globally within weeks, backed by infrastructure that scales from 10 to 10 million users.",
        },
        {
            title: "UI/UX Design",
            description: "Human-centric interface design that marries geometric precision with fluid motion for unparalleled user engagement.",
            colorHex: "#34d399", shadowHex: "#34d399",
            tag: "05 — DESIGN",
            icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>),
            capabilities: ["Neuromorphic Interfaces", "Motion Design Systems", "Accessibility Compliance", "Design-to-Code Parity"],
            impact: "Emotional engineering meets functional excellence to create products that users don't just use, but love.",
        },
        {
            title: "Cyber Security",
            description: "Hardened infrastructure protocols and threat intelligence integration to shield your digital assets from emergent risks.",
            colorHex: "#f87171", shadowHex: "#f87171",
            tag: "06 — SECURITY",
            icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>),
            capabilities: ["Zero-Trust Integration", "AI Threat Detection", "End-to-End Encryption", "Incident Remediation"],
            impact: "Sleep soundly knowing your digital ecosystem is protected by pro-active, military-grade security protocols.",
        },
    ];

    const processSteps = [
        { num: "01", title: "Discovery & Audit", desc: "We deep-dive into your stack, goals, and competitive landscape to craft a precision-fit strategy.", icon: "🔍" },
        { num: "02", title: "Architecture & Design", desc: "Our engineers blueprint scalable systems while designers craft pixel-perfect interfaces.", icon: "⚙️" },
        { num: "03", title: "Build & Deploy", desc: "Agile delivery with continuous integration — your product ships fast and iterates faster.", icon: "🚀" },
    ];

    return (
        <>
            <style>{`
                @keyframes svc-float {
                    0%, 100% { transform: translateY(0px); }
                    50%       { transform: translateY(-8px); }
                }
                .svc-float { animation: svc-float 5s ease-in-out infinite; }

                @keyframes grid-drift {
                    0%   { transform: translateY(0px); }
                    100% { transform: translateY(60px); }
                }
                .grid-bg {
                    position: absolute; inset: 0; pointer-events: none;
                    background-image:
                        linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px);
                    background-size: 60px 60px;
                    animation: grid-drift 12s linear infinite alternate;
                }

                @keyframes shimmer {
                    0%   { transform: translateX(-100%) skewX(-12deg); }
                    100% { transform: translateX(200%) skewX(-12deg); }
                }
                @keyframes pulse-ring {
                    0%   { transform: scale(1); opacity: 0.5; }
                    100% { transform: scale(1.1); opacity: 0; }
                }
                .consult-btn {
                    position: relative; width: 100%; padding: 18px 32px;
                    border-radius: 16px; border: none; cursor: pointer;
                    font-size: 15px; font-weight: 800; letter-spacing: 0.05em;
                    color: #ffffff;
                    background: linear-gradient(135deg, #00d4ff 0%, #0052ff 50%, #7c3aed 100%);
                    box-shadow: 0 0 32px rgba(0,212,255,0.3), 0 4px 24px rgba(0,0,0,0.4);
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                    overflow: hidden; display: flex; align-items: center;
                    justify-content: center; gap: 10px;
                }
                .consult-btn::before {
                    content: ''; position: absolute; inset: 0;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
                    animation: shimmer 2.8s ease-in-out infinite;
                }
                .consult-btn::after {
                    content: ''; position: absolute; inset: -2px; border-radius: 18px;
                    background: linear-gradient(135deg, #00d4ff, #7c3aed);
                    z-index: -1; animation: pulse-ring 2s ease-out infinite;
                }
                .consult-btn:hover { transform: translateY(-2px) scale(1.02); box-shadow: 0 0 48px rgba(0,212,255,0.5), 0 8px 32px rgba(0,0,0,0.5); }
                .consult-btn:active { transform: scale(0.98); }

                .svc-card {
                    position: relative; padding: 32px; border-radius: 20px; cursor: pointer;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    display: flex; flex-direction: column;
                }
                .svc-card:hover { transform: translateY(-6px); }

                .svc-modal-grid {
                    display: grid; grid-template-columns: 1fr 1.6fr; gap: 48px; align-items: start;
                }
                @media (max-width: 700px) {
                    .svc-modal-grid { grid-template-columns: 1fr; gap: 32px; }
                }
                .svc-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                }
                @media (max-width: 900px) { .svc-grid { grid-template-columns: repeat(2, 1fr); } }
                @media (max-width: 580px) { .svc-grid { grid-template-columns: 1fr; } }
                .process-grid {
                    display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
                }
                @media (max-width: 700px) { .process-grid { grid-template-columns: 1fr; } }
                .stats-grid {
                    display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
                }
                @media (max-width: 700px) { .stats-grid { grid-template-columns: repeat(2, 1fr); } }
            `}</style>

            <div style={{ minHeight: "100vh", background: "var(--background)", color: "#fff" }}>

                {/* ── Hero ────────────────────────────────────────────── */}
                <section style={{ position: "relative", paddingTop: "140px", paddingBottom: "80px", overflow: "hidden" }}>
                    {/* Animated grid */}
                    <div className="grid-bg" />

                    {/* Glow orbs */}
                    <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
                    <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(129,140,248,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

                    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1, textAlign: "center" }}>
                        {/* Badge */}
                        <div className="svc-float" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 18px", borderRadius: "99px", background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.2)", marginBottom: "36px" }}>
                            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#00d4ff", display: "inline-block", boxShadow: "0 0 8px #00d4ff" }} />
                            <span style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "2.5px", color: "#00d4ff", textTransform: "uppercase" }}>Neural Systems Architecture</span>
                        </div>

                        {/* Heading */}
                        <h1 style={{ fontSize: "clamp(48px, 8vw, 88px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-3px", marginBottom: "28px", color: "#fff" }}>
                            Digital{" "}
                            <span style={{ background: "linear-gradient(90deg, #00d4ff, #818cf8, #f472b6)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", fontStyle: "italic" }}>
                                Ecosystems
                            </span>
                        </h1>

                        <p style={{ maxWidth: "580px", margin: "0 auto 48px", fontSize: "17px", lineHeight: 1.8, color: "rgba(255,255,255,0.5)", fontWeight: 400 }}>
                            Engineering next-generation interfaces and scalable architectures that push the boundaries of technical possibility.
                        </p>

                        {/* Hero CTAs */}
                        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                            <button
                                onClick={() => { if (services[0]) { setSelectedService(services[0]); setIsModalOpen(true); } }}
                                style={{ display: "flex", alignItems: "center", gap: "8px", padding: "14px 32px", borderRadius: "12px", border: "none", cursor: "pointer", fontWeight: 700, fontSize: "14px", background: "linear-gradient(135deg, #00d4ff, #0052ff)", color: "#fff", boxShadow: "0 0 32px rgba(0,212,255,0.25)" }}
                            >
                                Explore Services
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                            </button>
                            <a href="/#contact" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "14px 32px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.12)", cursor: "pointer", fontWeight: 700, fontSize: "14px", color: "rgba(255,255,255,0.8)", background: "rgba(255,255,255,0.04)", textDecoration: "none" }}>
                                Contact Us
                            </a>
                        </div>
                    </div>
                </section>

                {/* ── Stats Bar ───────────────────────────────────────── */}
                <section ref={statsRef} style={{ padding: "60px 24px", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(0,212,255,0.02)" }}>
                    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                        <div className="stats-grid">
                            <StatItem target={120} suffix="+" label="Projects Delivered" started={statsVisible} />
                            <StatItem target={98}  suffix="%" label="Client Satisfaction" started={statsVisible} />
                            <StatItem target={12}  suffix="+"  label="Years Experience"   started={statsVisible} />
                            <StatItem target={40}  suffix="+"  label="Tech Experts"        started={statsVisible} />
                        </div>
                    </div>
                </section>

                {/* ── Services Grid ────────────────────────────────────── */}
                <section style={{ padding: "100px 24px" }}>
                    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                        {/* Section header */}
                        <div style={{ marginBottom: "64px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                                <div style={{ width: "32px", height: "2px", background: "#00d4ff" }} />
                                <span style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "2.5px", color: "#00d4ff", textTransform: "uppercase" }}>What We Do</span>
                            </div>
                            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, color: "#fff", letterSpacing: "-1px", maxWidth: "520px", lineHeight: 1.2 }}>
                                Six pillars of{" "}
                                <span style={{ background: "linear-gradient(90deg, #00d4ff, #818cf8)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                    digital excellence
                                </span>
                            </h2>
                        </div>

                        <div className="svc-grid">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="svc-card"
                                    style={{
                                        background: "rgba(8,15,36,0.8)",
                                        border: `1px solid ${service.colorHex}22`,
                                        boxShadow: `0 4px 32px ${service.shadowHex}08`,
                                    }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 48px ${service.shadowHex}25`;
                                        (e.currentTarget as HTMLDivElement).style.borderColor = `${service.colorHex}55`;
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 4px 32px ${service.shadowHex}08`;
                                        (e.currentTarget as HTMLDivElement).style.borderColor = `${service.colorHex}22`;
                                    }}
                                    onClick={() => { setSelectedService(service); setIsModalOpen(true); }}
                                >
                                    {/* Top line accent */}
                                    <div style={{ position: "absolute", top: 0, left: "24px", right: "24px", height: "2px", background: `linear-gradient(90deg, transparent, ${service.colorHex}60, transparent)`, borderRadius: "99px" }} />

                                    {/* Tag + Index */}
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
                                        <span style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "2px", color: service.colorHex, textTransform: "uppercase" }}>{service.tag}</span>
                                        <span style={{ fontSize: "32px", fontWeight: 900, color: `${service.colorHex}15`, lineHeight: 1 }}>{String(index + 1).padStart(2, "0")}</span>
                                    </div>

                                    {/* Icon */}
                                    <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: `${service.colorHex}12`, border: `1px solid ${service.colorHex}30`, display: "flex", alignItems: "center", justifyContent: "center", color: service.colorHex, marginBottom: "20px" }}>
                                        {service.icon}
                                    </div>

                                    <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#fff", marginBottom: "12px", lineHeight: 1.3 }}>{service.title}</h3>
                                    <p style={{ fontSize: "13px", lineHeight: 1.8, color: "rgba(255,255,255,0.45)", marginBottom: "28px", flexGrow: 1 }}>{service.description}</p>

                                    {/* Learn More */}
                                    <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", fontWeight: 800, letterSpacing: "1.5px", color: service.colorHex, textTransform: "uppercase" }}>
                                        Learn More
                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="14" height="14">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── How We Work ─────────────────────────────────────── */}
                <section style={{ padding: "80px 24px", background: "rgba(0,212,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                        <div style={{ textAlign: "center", marginBottom: "64px" }}>
                            <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                                <div style={{ width: "32px", height: "2px", background: "#818cf8" }} />
                                <span style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "2.5px", color: "#818cf8", textTransform: "uppercase" }}>Our Process</span>
                                <div style={{ width: "32px", height: "2px", background: "#818cf8" }} />
                            </div>
                            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 900, color: "#fff", letterSpacing: "-1px" }}>
                                How we turn ideas into{" "}
                                <span style={{ background: "linear-gradient(90deg, #818cf8, #f472b6)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                    reality
                                </span>
                            </h2>
                        </div>

                        <div className="process-grid">
                            {processSteps.map((step, i) => (
                                <div key={i} style={{ position: "relative" }}>
                                    {/* Connector line */}
                                    {i < processSteps.length - 1 && (
                                        <div style={{ position: "absolute", top: "36px", left: "calc(100% - 12px)", width: "24px", height: "1px", background: "linear-gradient(90deg, rgba(129,140,248,0.4), transparent)", zIndex: 1, display: "none" }} className="process-connector" />
                                    )}
                                    <div style={{ ...glass(), padding: "32px", borderRadius: "20px", height: "100%" }}>
                                        <div style={{ fontSize: "28px", marginBottom: "16px" }}>{step.icon}</div>
                                        <div style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "2px", color: "#818cf8", marginBottom: "10px" }}>{step.num}</div>
                                        <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#fff", marginBottom: "12px" }}>{step.title}</h3>
                                        <p style={{ fontSize: "13px", lineHeight: 1.8, color: "rgba(255,255,255,0.45)" }}>{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ─────────────────────────────────────────────── */}
                <section style={{ padding: "100px 24px" }}>
                    <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
                        {/* Outer glow */}
                        <div style={{ position: "absolute", inset: "-1px", borderRadius: "28px", background: "linear-gradient(135deg, #00d4ff40, #818cf840, #f472b640)", zIndex: 0 }} />
                        <div style={{ ...glass({ borderRadius: "28px", padding: "clamp(48px, 6vw, 80px)" }), position: "relative", zIndex: 1, textAlign: "center", overflow: "hidden" }}>
                            {/* Background decoration */}
                            <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "240px", height: "240px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
                            <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, rgba(129,140,248,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

                            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "99px", background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.2)", marginBottom: "28px" }}>
                                <span style={{ fontSize: "16px" }}>⚡</span>
                                <span style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "2px", color: "#00d4ff", textTransform: "uppercase" }}>Let&apos;s Build Together</span>
                            </div>

                            <h2 style={{ fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 900, color: "#fff", letterSpacing: "-1.5px", lineHeight: 1.1, marginBottom: "20px", position: "relative", zIndex: 1 }}>
                                Ready to build the{" "}
                                <span style={{ background: "linear-gradient(90deg, #00d4ff, #818cf8)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                    future?
                                </span>
                            </h2>
                            <p style={{ fontSize: "16px", lineHeight: 1.7, color: "rgba(255,255,255,0.45)", maxWidth: "520px", margin: "0 auto 40px", position: "relative", zIndex: 1 }}>
                                Our consultants are standing by to audit your current stack and propose a migration to ZynraTech&apos;s neural architecture.
                            </p>
                            <div style={{ maxWidth: "380px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                                <button className="consult-btn">
                                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Schedule a Consultation
                                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Modal */}
                <ServiceDetailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} service={selectedService} />
            </div>
        </>
    );
}
