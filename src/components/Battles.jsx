"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/src/lib/gsap";
import { Zap, Trophy, Shield, Crosshair, Activity, Terminal, Flame, Target } from "lucide-react";
import { uiOnly } from "@/src/lib/uiOnly";

const STATS = [
  { value: 2400000, label: "TOTAL_OPERATIONS", display: "2.4M+", color: "#ef4444" },
  { value: 850, label: "ZONES_CAPTURED", display: "850+", color: "#f59e0b" },
  { value: 150, label: "ELITE_CHAMPIONS", display: "150+", color: "#a855f7" },
];

const MODES = [
  { 
    title: "BLITZ", 
    tag: "STRIKE", 
    desc: "Neural-linked 5v5 skirmish. Low latency, high fatality.", 
    icon: Zap, 
    accent: "#ef4444",
    clip: "polygon(0 0, 100% 0, 85% 100%, 0 100%)"
  },
  { 
    title: "APEX", 
    tag: "RANKED", 
    desc: "Climb the neural ladder. Global dominance sequence.", 
    icon: Trophy, 
    accent: "#f59e0b",
    clip: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)"
  },
  { 
    title: "SIEGE", 
    tag: "LEGION", 
    desc: "Tactical battalion warfare. Seize the core.", 
    icon: Shield, 
    accent: "#3b82f6",
    clip: "polygon(0 0, 85% 0, 100% 100%, 15% 100%)"
  }
];

export default function HyperTacticalBattles() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Shard Entrance Animation
      gsap.from(".data-shard", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 100,
        opacity: 0,
        rotationX: 45,
        stagger: 0.2,
        duration: 1,
        ease: "expo.out"
      });

      // Kinetic Scroll Text
      gsap.to(".scrolling-log", {
        xPercent: -20,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="battles" style={{
      background: "#050505", minHeight: "120vh", position: "relative",
      overflow: "hidden", color: "white", padding: "150px 0"
    }}>
      
      {/* BACKGROUND ELEMENTS */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0.03, pointerEvents: "none", fontSize: "15rem", fontWeight: 900, whiteSpace: "nowrap", zIndex: 0 }} className="scrolling-log">
        TACTICAL_UPLINK_STABLE // SYSTEM_NOMINAL // BATTLE_READY // 
      </div>

      <div style={{ maxWidth: "1500px", margin: "0 auto", padding: "0 5%", position: "relative", zIndex: 10 }}>
        
        {/* HEADER: NON-LINEAR */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "100px", gap: "40px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#ef4444", marginBottom: "15px" }}>
              <Terminal size={18} />
              <span style={{ fontSize: "11px", fontWeight: 900, letterSpacing: "0.6em" }}>LIVE_COMBAT_FEED</span>
            </div>
            <h2 style={{ fontSize: "clamp(3rem, 8vw, 8rem)", fontWeight: 950, lineHeight: 0.8, textTransform: "uppercase" }}>
              THE <span style={{ color: "transparent", WebkitTextStroke: "1px white" }}>ARENA</span><br />
              <span style={{ color: "#ef4444" }}>DOMINATION</span>
            </h2>
          </div>
          
          {/* STATS SHARDS (Replacement for the old grid) */}
          <div className="stats-shards" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {STATS.map((s, i) => (
              <div key={i} className="data-shard" style={{ 
                background: "#0a0a0a", border: `1px solid ${s.color}40`, padding: "30px",
                clipPath: "polygon(0 20%, 100% 0, 100% 80%, 0 100%)",
                minWidth: "180px", textAlign: "center"
              }}>
                <div style={{ fontSize: "2rem", fontWeight: 950, color: "white" }}>{s.display}</div>
                <div style={{ fontSize: "8px", fontWeight: 900, color: s.color, letterSpacing: "0.2em", marginTop: "5px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* BATTLE MODES: THE SHARD SYSTEM */}
        <div className="battles-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(400px,100%), 1fr))", gap: "30px" }}>
          {MODES.map((mode, i) => (
            <div key={i} className="battle-shard" style={{ 
              position: "relative", height: "500px", background: "#080808",
              clipPath: mode.clip, border: "1px solid #111", overflow: "hidden",
              transition: "0.4s cubic-bezier(0.16, 1, 0.3, 1)"
            }}>
              
              {/* Internal HUD Elements */}
              <div style={{ position: "absolute", top: "30px", right: "40px", opacity: 0.2 }}>
                <Target size={100} color={mode.accent} />
              </div>
              
              <div style={{ position: "absolute", inset: 0, padding: "60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
                   <mode.icon size={24} color={mode.accent} />
                   <span style={{ fontSize: "12px", fontWeight: 900, color: mode.accent, letterSpacing: "0.4em" }}>PROTOCOL_{mode.tag}</span>
                </div>
                
                <h3 style={{ fontSize: "4.5rem", fontWeight: 950, textTransform: "uppercase", marginBottom: "15px", fontStyle: "italic" }}>{mode.title}</h3>
                <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.6", maxWidth: "80%", marginBottom: "40px" }}>{mode.desc}</p>

                {/* Tactical Button: Solid on Hover */}
                <button onClick={uiOnly} className="shard-btn" style={{
                  width: "fit-content", background: "transparent", color: mode.accent,
                  border: `1px solid ${mode.accent}`, padding: "18px 40px", fontWeight: 900,
                  fontSize: "12px", textTransform: "uppercase", cursor: "pointer", transition: "0.3s",
                  clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)"
                }}>
                  INITIALIZE_STRIKE
                </button>
              </div>

              {/* Glowing Corner */}
              <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "4px", background: mode.accent, filter: "blur(10px)", opacity: 0.5 }} />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .stats-shards { justify-content: flex-start; }
          .stats-shards > div { min-width: 130px !important; padding: 20px !important; }
        }
        @media (max-width: 480px) {
          .stats-shards > div { min-width: unset !important; flex: 1; }
        }
        .battle-shard:hover {
          transform: translateY(-10px) scale(1.02);
          background: #0d0d0d;
          border-color: rgba(255,255,255,0.2);
          z-index: 20;
        }
        
        .shard-btn:hover {
          background: white !important;
          color: black !important;
          box-shadow: 0 0 30px white;
        }

        .data-shard {
          transition: 0.3s;
          cursor: crosshair;
        }
        .data-shard:hover {
          background: white;
        }
        .data-shard:hover div {
          color: black !important;
        }
      `}</style>
    </section>
  );
}