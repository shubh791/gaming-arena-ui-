"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/src/lib/gsap";
import { Check, ChevronRight, Zap, Target, Shield, Crown, Terminal, Box } from "lucide-react";
import { uiOnly } from "@/src/lib/uiOnly";

const TIERS = [
  {
    id: "free",
    name: "Standard",
    price: "0",
    period: "forever",
    tag: "RECRUIT",
    accent: "#71717a",
    icon: Shield,
    features: ["3 starter champions", "Quick Match access", "Basic skins", "Weekly challenges"],
    cta: "Deploy Free",
    featured: false,
    // Adjusted clip-path to be less aggressive for visibility
    clip: "polygon(0 0, 100% 0, 100% 92%, 8% 100%, 0 100%)"
  },
  {
    id: "season",
    name: "Season Pass",
    price: "9.99",
    period: "/ season",
    tag: "ELITE OPS",
    accent: "#ef4444",
    icon: Target,
    features: ["All 150+ champions", "Ranked Mode access", "50 exclusive skins", "Priority matchmaking"],
    cta: "Unlock Access",
    featured: true,
    clip: "polygon(0 8%, 100% 0, 100% 100%, 0 92%)"
  },
  {
    id: "legend",
    name: "Legendary",
    price: "24.99",
    period: "one-time",
    tag: "LEGACY",
    accent: "#f59e0b",
    icon: Crown,
    features: ["Lifetime arena access", "All weapon skins", "Exclusive Legend title", "Early access"],
    cta: "Go Legend",
    featured: false,
    clip: "polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 8%)"
  },
];

export default function Store() {
  const sectionRef = useRef(null);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tier-shard", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: "power4.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          once: true,
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="store" style={{
      background: "#020202",
      padding: "120px 0",
      position: "relative",
      overflow: "visible"
    }}>
      
      {/* ── AMBIENT BACKGROUND GLOW ── */}
      <div style={{ 
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        width: "80%", height: "60%", background: "radial-gradient(circle, rgba(239,68,68,0.05) 0%, transparent 70%)",
        pointerEvents: "none"
      }} />

      <div className="store-container" style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 5%", position: "relative", zIndex: 10 }}>
        
        {/* ── HEADER ── */}
        <div style={{ marginBottom: "80px", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", color: "#ef4444", fontWeight: 900, fontSize: "11px", letterSpacing: "0.5em", textTransform: "uppercase" }}>
            <Box size={14} /> Global_Supply_Drop
          </div>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", fontWeight: 950, textTransform: "uppercase", letterSpacing: "-0.02em", marginTop: "15px" }}>
            SELECT <span style={{ color: "#ef4444" }}>TIER</span>
          </h2>
        </div>

        {/* ── FIXED GRID: Guaranteed Visibility ── */}
        <div style={{ 
          display: "grid", 
          // Min-width 300px ensures they fit on most screens side-by-side
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "25px",
          width: "100%"
        }}>
          {TIERS.map((tier, i) => (
            <div 
              key={tier.id} 
              className="tier-shard"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ 
                position: "relative", 
                padding: "50px 30px", 
                background: "#080808",
                clipPath: tier.clip, 
                border: `1px solid ${hovered === i ? tier.accent : "#1a1a1a"}`,
                transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                transform: hovered === i ? "translateY(-10px)" : "none",
                display: "flex",
                flexDirection: "column"
              }}
            >
              {/* Feature Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
                <tier.icon size={20} color={tier.accent} />
                <span style={{ fontSize: "9px", fontWeight: 900, color: tier.accent, letterSpacing: "0.2em" }}>{tier.tag}</span>
              </div>

              {/* Price Section */}
              <div style={{ marginBottom: "30px" }}>
                <h3 style={{ fontSize: "12px", fontWeight: 800, color: "#555", textTransform: "uppercase", letterSpacing: "0.1em" }}>{tier.name}</h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginTop: "5px" }}>
                  <span style={{ fontSize: "3.5rem", fontWeight: 950, color: "white", lineHeight: 1 }}>
                    {tier.price === "0" ? "FREE" : `$${tier.price}`}
                  </span>
                  <span style={{ fontSize: "11px", color: "#444", fontWeight: 700 }}>{tier.period}</span>
                </div>
              </div>

              {/* List */}
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px 0", flexGrow: 1 }}>
                {tier.features.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "#888", marginBottom: "12px" }}>
                    <Check size={12} color={tier.accent} /> {f}
                  </li>
                ))}
              </ul>

              {/* ACTION BUTTON - Fills color on hover */}
              <button onClick={uiOnly} className="store-btn" style={{ 
                width: "100%", 
                padding: "18px", 
                background: "transparent", 
                color: tier.accent, 
                border: `1px solid ${tier.accent}`,
                fontWeight: 900, 
                fontSize: "11px", 
                textTransform: "uppercase", 
                letterSpacing: "0.2em", 
                cursor: "pointer", 
                transition: "0.3s",
                clipPath: "polygon(0 0, 100% 0, 92% 100%, 0 100%)",
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                gap: "8px"
              }}>
                {tier.cta} <ChevronRight size={14} />
              </button>

              {/* Background Glow */}
              <div style={{ 
                position: "absolute", 
                bottom: "-20px", 
                left: "10%", 
                right: "10%", 
                height: "40px", 
                background: tier.accent, 
                filter: "blur(40px)", 
                opacity: hovered === i ? 0.15 : 0,
                transition: "0.4s",
                zIndex: -1
              }} />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .store-btn:hover {
          background: white !important;
          color: black !important;
          border-color: white !important;
          box-shadow: 0 0 25px rgba(255,255,255,0.3);
        }
        
        @media (max-width: 768px) {
          .store-container { padding: 0 20px; }
          .store-container > div > div { gap: 20px !important; }
        }
      `}</style>
    </section>
  );
}