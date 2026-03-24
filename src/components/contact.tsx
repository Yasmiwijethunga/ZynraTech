"use client";

import React, { useState, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

// ── SVG Icons ────────────────────────────────────────────────────────────────

function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function IconShare() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" y1="2" x2="12" y2="15" />
    </svg>
  );
}

function IconTerminal() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}

// ── Google Map Component ─────────────────────────────────────────────────────

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    
    if (!apiKey) {
      setError("API Key Missing");
      return;
    }

    const loader = new Loader({
      apiKey: apiKey,
      version: "weekly",
    });

    Promise.all([
      // @ts-ignore
      loader.importLibrary("maps"),
      // @ts-ignore
      loader.importLibrary("marker")
    ]).then(([{ Map }, { AdvancedMarkerElement }]) => {
      const position = { lat: 40.758896, lng: -73.985130 }; 

      const map = new Map(mapRef.current as HTMLElement, {
        zoom: 14,
        center: position,
        mapId: "ZYMRA_MAP_ID", 
        disableDefaultUI: true,
        styles: [
          {
            "elementType": "all",
            "stylers": [
              { "saturation": -100 },
              { "lightness": -70 },
              { "visibility": "simplified" }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#4a5a7a" }]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{ "color": "#020817" }]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{ "color": "#0d1f3c" }, { "visibility": "simplified" }]
          }
        ]
      });

      new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "ZYMRA HQ",
      });
    }).catch(e => {
      console.error("Map load error:", e);
      setError("Map Load Failed");
    });
  }, [setError]);

  if (error) {
    return (
      <div style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0d1f3c",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Fallback image style similar to UI */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.05) 0%, transparent 70%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "12px",
          color: "rgba(255,255,255,0.3)",
          fontSize: "13px",
          fontWeight: 500,
          letterSpacing: "1px"
        }}>
          <div style={{ fontSize: "24px" }}>🛰️</div>
          <div>OFFLINE: {error}</div>
          <p style={{ fontSize: "11px", opacity: 0.6 }}>Awaiting Google API Key validation...</p>
        </div>
        
        {/* Decorative elements to mimic a grid map */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none"
        }} />
      </div>
    );
  }

  return <div ref={mapRef} style={{ width: "100%", height: "100%" }} />;
};

// ── Contact Component ────────────────────────────────────────────────────────

// ── ENHANCEMENTS ─────────────────────────────────────────────────────────────

const useTypewriter = (text: string, speed = 100, delay = 0) => {
  const [displayText, setDisplayText] = useState("");
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIdx = 0;

    const startTyping = () => {
      if (currentIdx <= text.length) {
        setDisplayText(text.slice(0, currentIdx));
        currentIdx++;
        timeout = setTimeout(startTyping, speed);
      } else {
        setComplete(true);
      }
    };

    const initialDelay = setTimeout(startTyping, delay);
    return () => {
      clearTimeout(timeout);
      clearTimeout(initialDelay);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed, delay]);

  return { displayText, complete };
};

const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    const particleCount = 60;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(0, 212, 255, 0.2)";
      ctx.strokeStyle = "rgba(0, 212, 255, 0.1)";
      ctx.lineWidth = 0.5;

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    init();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.1, // Reduced for "correctness" vs static UI
      }}
    />
  );
};

const TiltCard = ({ children, style = {} }: { children: React.ReactNode, style?: React.CSSProperties }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: "transform 0.1s ease-out",
        transformStyle: "preserve-3d",
        ...style
      }}
    >
      {children}
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Neural Interface Development",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "transmitting" | "received">("idle");
  const [progress, setProgress] = useState(0);

  const [mounted, setMounted] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 500);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { displayText: tagText } = useTypewriter("ESTABLISH CONNECTION", 80);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("transmitting");
    setProgress(0);
    
    // Simulate packet transmission
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatus("received");
          setTimeout(() => setStatus("idle"), 5000);
          return 100;
        }
        return prev + 2;
      });
    }, 40);
  };

  return (
    <section style={{ 
      padding: "100px 24px", 
      background: "var(--background)", 
      minHeight: "calc(100vh - 68px)",
      position: "relative",
      overflow: "hidden"
    }}>
      <NeuralBackground />

      {/* Background Glows */}
      <div style={{
        position: "absolute",
        top: "10%",
        right: "5%",
        width: "500px",
        height: "500px",
        background: "radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 1
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 10 }}>
        
        {/* ── HEADER ─────────────────────────────────────────────────────── */}
        <div style={{ 
          marginBottom: "80px",
          border: "1px dashed rgba(0, 212, 255, 0.3)",
          background: "rgba(6, 13, 31, 0.4)",
          backdropFilter: "blur(4px)",
          padding: "40px",
          position: "relative"
        }}>
          {/* Corner accents */}
          <div style={{ position: "absolute", top: -1, left: -1, width: "10px", height: "10px", borderTop: "2px solid var(--cyan)", borderLeft: "2px solid var(--cyan)" }} />
          <div style={{ position: "absolute", top: -1, right: -1, width: "10px", height: "10px", borderTop: "2px solid var(--cyan)", borderRight: "2px solid var(--cyan)" }} />
          <div style={{ position: "absolute", bottom: -1, left: -1, width: "10px", height: "10px", borderBottom: "2px solid var(--cyan)", borderLeft: "2px solid var(--cyan)" }} />
          <div style={{ position: "absolute", bottom: -1, right: -1, width: "10px", height: "10px", borderBottom: "2px solid var(--cyan)", borderRight: "2px solid var(--cyan)" }} />

          <span style={{ 
            display: "inline-block", 
            fontSize: "11px", 
            fontWeight: 800, 
            color: "var(--cyan)", 
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "24px",
            borderLeft: "2px solid var(--cyan)",
            paddingLeft: "12px",
            minHeight: "14px"
          }}>{tagText}<span style={{ opacity: (mounted && cursorVisible) ? 1 : 0, borderLeft: "2px solid var(--cyan)", marginLeft: "4px" }} /></span>
          
          <h1 style={{ 
            fontSize: "clamp(40px, 8vw, 84px)", 
            fontWeight: 900, 
            lineHeight: 1, 
            color: "#ffffff",
            letterSpacing: "-2px",
            margin: 0
          }}>
            Let&apos;s Build the <span style={{ color: "var(--cyan)", textShadow: "0 0 30px rgba(0, 212, 255, 0.4)" }}>Neural</span><br />
            <span style={{ color: "var(--cyan)", textShadow: "0 0 30px rgba(0, 212, 255, 0.4)" }}>Future</span> Together.
          </h1>
        </div>

        {/* ── MAIN CONTENT ────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-0 mb-16" style={{ border: "1px dashed rgba(0, 212, 255, 0.2)" }}>
          
          {/* Left: Form */}
          <div className="p-8 md:p-14" style={{
            background: "rgba(6, 13, 31, 0.8)",
            borderRight: "1px dashed rgba(0, 212, 255, 0.2)",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            position: "relative"
          }}>
            {status !== "idle" && (
              <div style={{
                position: "absolute",
                top: 0, left: 0, right: 0, bottom: 0,
                background: "rgba(6, 13, 31, 0.9)",
                zIndex: 50,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "24px",
                backdropFilter: "blur(8px)"
              }}>
                {status === "transmitting" ? (
                  <>
                    <div style={{ fontSize: "14px", fontWeight: 800, color: "var(--cyan)", letterSpacing: "4px" }}>TRANSMITTING PACKETS...</div>
                    <div style={{ width: "300px", height: "4px", background: "rgba(255,255,255,0.05)", borderRadius: "2px", overflow: "hidden" }}>
                      <div style={{ height: "100%", background: "var(--cyan)", width: `${progress}%`, transition: "width 0.1s linear" }} />
                    </div>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }}>SECURE UPLINK ESTABLISHED: {progress}%</div>
                  </>
                ) : (
                  <>
                    <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(0, 255, 195, 0.1)", border: "2px solid #00ffc3", display: "flex", alignItems: "center", justifyContent: "center", color: "#00ffc3" }}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "auto" }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div style={{ fontSize: "18px", fontWeight: 900, color: "#ffffff", letterSpacing: "2px" }}>PACKET RECEIVED</div>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", textAlign: "center" }}>Acknowledgment sent to neural network. <br/>Our operators will respond shortly.</div>
                    <button onClick={() => setStatus("idle")} style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.2)", color: "#ffffff", padding: "10px 24px", borderRadius: "4px", fontSize: "11px", cursor: "pointer", marginTop: "12px" }}>RETURN TO INTERFACE</button>
                  </>
                )}
              </div>
            )}

            <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#ffffff", letterSpacing: "1px" }}>Initialize Transmission</h2>
            
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <label style={{ fontSize: "9px", fontWeight: 800, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "2px" }}>Operator Identity</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    style={{ background: "#030816", height: "54px", border: "1px solid rgba(0, 212, 255, 0.1)", color: "#ffffff", padding: "0 16px", borderRadius: "4px", width: "100%", fontSize: "14px", transition: "all 0.3s ease" }}
                    onFocus={(e) => e.target.style.border = "1px solid var(--cyan)"}
                    onBlur={(e) => e.target.style.border = "1px solid rgba(0, 212, 255, 0.1)"}
                    required
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <label style={{ fontSize: "9px", fontWeight: 800, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "2px" }}>Data Protocol</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    style={{ background: "#030816", height: "54px", border: "1px solid rgba(0, 212, 255, 0.1)", color: "#ffffff", padding: "0 16px", borderRadius: "4px", width: "100%", fontSize: "14px", transition: "all 0.3s ease" }}
                    onFocus={(e) => e.target.style.border = "1px solid var(--cyan)"}
                    onBlur={(e) => e.target.style.border = "1px solid rgba(0, 212, 255, 0.1)"}
                    required
                  />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <label style={{ fontSize: "9px", fontWeight: 800, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "2px" }}>Subject Node</label>
                <div style={{ position: "relative" }}>
                  <select 
                    className="form-input"
                    style={{ appearance: "none", background: "#030816", height: "54px", border: "1px solid rgba(0, 212, 255, 0.1)", color: "#ffffff", padding: "0 16px", borderRadius: "4px", width: "100%", fontSize: "14px", transition: "all 0.3s ease" }}
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    onFocus={(e) => e.target.style.border = "1px solid var(--cyan)"}
                    onBlur={(e) => e.target.style.border = "1px solid rgba(0, 212, 255, 0.1)"}
                  >
                    <option>Neural Interface Development</option>
                    <option>Ecosystem Integration</option>
                    <option>Post-Quantum Security</option>
                    <option>Technical Advisory</option>
                  </select>
                  <div style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "rgba(255,255,255,0.3)" }}>▼</div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <label style={{ fontSize: "9px", fontWeight: 800, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "2px" }}>Payload Content</label>
                <textarea 
                  placeholder="Describe your objective..." 
                  className="form-input"
                  rows={5}
                  style={{ resize: "none", background: "#030816", padding: "20px", border: "1px solid rgba(0, 212, 255, 0.1)", color: "#ffffff", borderRadius: "4px", width: "100%", fontSize: "14px", transition: "all 0.3s ease" }}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  onFocus={(e) => e.target.style.border = "1px solid var(--cyan)"}
                  onBlur={(e) => e.target.style.border = "1px solid rgba(0, 212, 255, 0.1)"}
                  required
                />
              </div>

              <button 
                type="submit" 
                style={{ 
                  marginTop: "8px", 
                  background: "linear-gradient(90deg, #5eb5ff, #00d4ff, #5effd4)", 
                  color: "#060d1f",
                  padding: "20px",
                  fontSize: "14px",
                  borderRadius: "6px",
                  fontWeight: 950,
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  border: "none",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 10px 40px rgba(0, 212, 255, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Transmit Data
              </button>
            </form>
          </div>

          {/* Right: Info blocks */}
          <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: "0",
            background: "rgba(4, 11, 24, 1)",
            padding: "0"
          }}>
            
            <TiltCard style={{ borderBottom: "1px dashed rgba(255,255,255,0.05)" }}>
              <div style={{
                padding: "40px 32px",
                display: "flex",
                alignItems: "center",
                gap: "24px",
              }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "8px",
                  background: "rgba(0, 212, 255, 0.08)",
                  border: "1px solid rgba(0, 212, 255, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <IconMail />
                </div>
                <div>
                  <div style={{ fontSize: "9px", fontWeight: 800, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "6px" }}>Neural Link</div>
                  <div style={{ fontSize: "16px", color: "#ffffff", fontWeight: 700 }}>nexus@zynratech.io</div>
                </div>
              </div>
            </TiltCard>

            <TiltCard style={{ borderBottom: "1px dashed rgba(255,255,255,0.05)" }}>
              <div style={{
                padding: "40px 32px",
                display: "flex",
                alignItems: "center",
                gap: "24px",
              }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "8px",
                  background: "rgba(0, 212, 255, 0.08)",
                  border: "1px solid rgba(0, 212, 255, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <IconPhone />
                </div>
                <div>
                  <div style={{ fontSize: "9px", fontWeight: 800, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "6px" }}>Central Uplink</div>
                  <div style={{ fontSize: "16px", color: "#ffffff", fontWeight: 700 }}>+1 (888) 505-ZYNRA</div>
                </div>
              </div>
            </TiltCard>

            <TiltCard style={{ borderBottom: "1px dashed rgba(255,255,255,0.05)" }}>
              <div style={{
                padding: "40px 32px",
                display: "flex",
                alignItems: "center",
                gap: "24px",
              }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "8px",
                  background: "rgba(0, 212, 255, 0.08)",
                  border: "1px solid rgba(0, 212, 255, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <IconMapPin />
                </div>
                <div>
                  <div style={{ fontSize: "9px", fontWeight: 800, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "6px" }}>Base Coordinates</div>
                  <div style={{ fontSize: "15px", color: "#ffffff", fontWeight: 700, lineHeight: 1.5 }}>
                    Floor 92, Cyberia Tower<br />
                    San Francisco, CA 94105
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Global Sync Card */}
            <div style={{
              padding: "40px 32px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              borderTop: "1px dashed rgba(255,255,255,0.05)"
            }}>
              <div style={{ fontSize: "9px", fontWeight: 800, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "2px" }}>Global Sync</div>
              <div style={{ display: "flex", gap: "12px" }}>
                {[IconGlobe, IconGlobe, IconShare].map((Icon, i) => (
                  <div key={i} style={{ 
                    width: "40px", 
                    height: "40px", 
                    borderRadius: "50%", 
                    border: "1px solid rgba(255,255,255,0.1)", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.4)",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(0, 212, 255, 0.1)";
                    el.style.borderColor = "var(--cyan)";
                    el.style.color = "var(--cyan)";
                    el.style.transform = "scale(1.1) translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255,255,255,0.02)";
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.color = "rgba(255,255,255,0.4)";
                    el.style.transform = "scale(1) translateY(0)";
                  }}>
                    <Icon />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ── MAP SECTION ────────────────────────────────────────────────── */}
        <div style={{
          position: "relative",
          borderRadius: "4px",
          overflow: "hidden",
          border: "1px dashed rgba(0, 212, 255, 0.3)",
          height: "480px",
          padding: "16px",
          background: "rgba(6, 13, 31, 1)"
        }}>
          <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "4px", overflow: "hidden" }}>
             <GoogleMap />
          </div>
          
          {/* Overlay elements */}
          <div style={{
            position: "absolute",
            bottom: "32px",
            left: "32px",
            zIndex: 10
          }}>
            <div style={{ 
              background: "#060d1f", 
              border: "1px solid rgba(0, 212, 255, 0.2)", 
              padding: "12px 24px",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
            }}>
              <span 
                className="pulse-neural"
                style={{ 
                  width: "8px", 
                  height: "8px", 
                  background: "#00ffc3", 
                  borderRadius: "50%", 
                  boxShadow: "0 0 10px #00ffc3",
                }} 
              />
              <div style={{ fontSize: "10px", fontWeight: 800, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1px" }}>
                Node Status: <span style={{ color: "#ffffff", marginLeft: "4px" }}>System Fully Operational</span>
              </div>
            </div>
          </div>

          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none"
          }}>
            <div style={{
              background: "rgba(0, 212, 255, 0.15)",
              border: "1px solid var(--cyan)",
              padding: "8px 20px",
              borderRadius: "4px",
              fontSize: "12px",
              fontWeight: 900,
              color: "var(--cyan)",
              letterSpacing: "2px",
              textTransform: "uppercase",
              boxShadow: "0 0 40px rgba(0, 212, 255, 0.4)",
              backdropFilter: "blur(4px)"
            }}>
              ZYNRA HQ DETECTED
            </div>
          </div>

          {/* Corner accents for map */}
          <div style={{ position: "absolute", top: 15, left: 15, width: "15px", height: "15px", borderTop: "2px solid var(--cyan)", borderLeft: "2px solid var(--cyan)", zIndex: 11 }} />
          <div style={{ position: "absolute", top: 15, right: 15, width: "15px", height: "15px", borderTop: "2px solid var(--cyan)", borderRight: "2px solid var(--cyan)", zIndex: 11 }} />
          <div style={{ position: "absolute", bottom: 15, left: 15, width: "15px", height: "15px", borderBottom: "2px solid var(--cyan)", borderLeft: "2px solid var(--cyan)", zIndex: 11 }} />
          <div style={{ position: "absolute", bottom: 15, right: 15, width: "15px", height: "15px", borderBottom: "2px solid var(--cyan)", borderRight: "2px solid var(--cyan)", zIndex: 11 }} />
        </div>

      </div>
    </section>
  );
};

export default Contact;
