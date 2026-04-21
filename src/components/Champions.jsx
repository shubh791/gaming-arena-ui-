"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "@/src/lib/gsap";
import { Shield, Zap, ChevronLeft, ChevronRight, BarChart3, Binary, Aperture } from "lucide-react";
import { uiOnly } from "@/src/lib/uiOnly";

const CHARS = [
  { id: "wukong",    src: "/hero/wukong.png",     name: "Wukong",    role: "Monkey King", accent: "#f59e0b", skills: ["Staff Slam", "Nimbus Dash"], power: 98 },
  { id: "phantom",   src: "/hero/crouch.png",     name: "Phantom",   role: "Dual Blade",  accent: "#ec4899", skills: ["Ghost Step", "Blade Dance"], power: 92 },
  { id: "shadow",    src: "/hero/assain.png",     name: "Shadow",    role: "Assassin",    accent: "#a855f7", skills: ["Vanish", "Execution"],       power: 85 },
  { id: "storm",     src: "/hero/down.png",       name: "Storm",     role: "Berserker",   accent: "#ef4444", skills: ["Ground Slam", "Rage"],        power: 99 },
  { id: "celestial", src: "/hero/other-char.png", name: "Celestial", role: "Arc Blade",   accent: "#3b82f6", skills: ["Arc Flash", "Star Fall"],    power: 90 },
];

export default function Champions() {
  const [activeIdx, setActiveIdx] = useState(0);
  const char = CHARS[activeIdx];

  const cylinderRef  = useRef(null);
  const pedestalRef  = useRef(null);
  const charImageRef = useRef(null);
  const [switching, setSwitching] = useState(false);

  // Breathing glow loop
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: "sine.inOut" } });
    tl.to(pedestalRef.current,  { background: `radial-gradient(ellipse, ${char.accent}60 0%, transparent 65%)`, duration: 2.5 })
      .to(cylinderRef.current,  { boxShadow: `0 0 60px ${char.accent}25`, duration: 2.5 }, 0);
    return () => tl.kill();
  }, [activeIdx, char.accent]);

  // Warp-in on character change
  useEffect(() => {
    if (switching) return;
    gsap.timeline()
      .fromTo(charImageRef.current,
        { y: 50, opacity: 0, scale: 0.9, filter: "brightness(4) blur(10px)", skewX: 10 },
        { y: 0,  opacity: 1, scale: 1,   filter: "brightness(1) blur(0px)",  skewX: 0, duration: 0.8, ease: "expo.out" }
      );
    gsap.fromTo([pedestalRef.current, cylinderRef.current],
      { filter: "brightness(2)" },
      { filter: "brightness(1)", duration: 0.3, yoyo: true, repeat: 1, ease: "power2.inOut" }
    );
  }, [activeIdx, switching]);

  const changeIdx = (newIdx) => {
    if (switching || newIdx === activeIdx) return;
    setSwitching(true);
    gsap.to(charImageRef.current, {
      opacity: 0, filter: "blur(5px)", duration: 0.3, ease: "power2.inOut",
      onComplete: () => { setActiveIdx(newIdx); setSwitching(false); }
    });
  };

  const next = () => changeIdx((activeIdx + 1) % CHARS.length);
  const prev = () => changeIdx((activeIdx - 1 + CHARS.length) % CHARS.length);

  return (
    <section id="champions" style={{
      background: "#010101", minHeight: "100vh", color: "white",
      padding: "80px 5% 60px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden"
    }}>
      {/* Background glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        width: "90vw", height: "90vw", background: `radial-gradient(circle, ${char.accent}05 0%, transparent 70%)`,
        filter: "blur(120px)", pointerEvents: "none", transition: "background 0.8s"
      }} />

      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "60px", position: "relative", zIndex: 10 }}>
        <p style={{ color: char.accent, letterSpacing: "0.5em", fontSize: "10px", fontWeight: 900, marginBottom: "10px", textTransform: "uppercase", transition: "color 0.8s" }}>
          DOMINION PROTOCOL v7.0 // Establishing Uplink
        </p>
        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 950, textTransform: "uppercase", letterSpacing: "-0.02em", margin: 0, lineHeight: 1 }}>
          SELECT YOUR <span style={{ color: char.accent, transition: "color 0.8s" }}>OPERATOR</span>
        </h1>
      </div>

      {/* Main 3-panel grid */}
      <div className="champ-grid" style={{
        display: "grid", gridTemplateColumns: "1fr auto 1fr",
        gap: "40px", width: "100%", maxWidth: "1600px", alignItems: "center",
        position: "relative", zIndex: 10
      }}>

        {/* LEFT PANEL */}
        <div className="champ-side-panel" style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div style={panelHeaderStyle}><BarChart3 size={14} style={{ marginRight: "8px" }} /> Intelligence Diagnostics</div>
          <div style={{ ...dataCardStyle, borderLeft: `4px solid ${char.accent}`, transition: "border-color 0.8s" }}>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 4rem)", fontWeight: 950, textTransform: "uppercase", lineHeight: 0.9 }}>{char.name}</h2>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "10px", color: char.accent, fontWeight: 800, textTransform: "uppercase", fontSize: "13px", transition: "color 0.8s" }}>
              <Shield size={14} /> {char.role}
            </div>
          </div>
          <div style={dataCardStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", fontWeight: 900, marginBottom: "10px" }}>
              <span style={{ color: "#666" }}>COMBAT POTENTIAL</span>
              <span style={{ color: char.accent, transition: "color 0.8s" }}>{char.power}%</span>
            </div>
            <div style={{ width: "100%", height: "2px", background: "rgba(255,255,255,0.05)", borderRadius: "1px" }}>
              <div style={{ width: `${char.power}%`, height: "100%", background: char.accent, transition: "width 1s ease, background 0.8s", borderRadius: "1px", boxShadow: `0 0 8px ${char.accent}88` }} />
            </div>
          </div>
        </div>

        {/* CENTER: Cylinder + arrows */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>

          <button onClick={prev} style={navButtonStyle} className="nav-hover champ-nav-left">
            <ChevronLeft size={28} />
          </button>
          <button onClick={next} style={{ ...navButtonStyle, left: "auto", right: "-80px" }} className="nav-hover champ-nav-right">
            <ChevronRight size={28} />
          </button>

          {/* Cylinder */}
          <div ref={cylinderRef} className="champ-cylinder" style={{
            position: "relative",
            width: "clamp(280px, 30vw, 460px)", height: "62vh",
            borderRadius: "100px",
            background: `
              linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,0.8) 100%),
              linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.9) 100%)
            `,
            border: `1px solid ${char.accent}30`,
            display: "flex", alignItems: "center", justifyContent: "center",
            overflow: "hidden", willChange: "box-shadow", transition: "border-color 0.8s, box-shadow 0.8s"
          }}>
            {/* Glass reflections */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, transparent 20%, rgba(255,255,255,0.12) 21%, transparent 22%, transparent 78%, rgba(255,255,255,0.08) 79%, transparent 80%)", filter: "blur(1px)", pointerEvents: "none" }} />

            {/* Character image — centered */}
            <div ref={charImageRef} style={{
              width: "88%", height: "92%",
              position: "relative",
              display: "flex", alignItems: "center", justifyContent: "center",
              willChange: "transform, filter"
            }}>
              <Image src={char.src} alt={char.name} fill priority style={{ objectFit: "contain", objectPosition: "center bottom" }} />
            </div>

            {/* Pedestal glow */}
            <div ref={pedestalRef} style={{
              position: "absolute", bottom: "-20px", width: "100%", height: "80px",
              background: `radial-gradient(ellipse at center, ${char.accent}40 0%, transparent 65%)`,
              filter: "blur(20px)", zIndex: 0, transition: "background 0.8s"
            }} />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="champ-side-panel" style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div style={panelHeaderStyle}><Binary size={14} style={{ marginRight: "8px" }} /> Tactical Loadout</div>
          {char.skills.map((skill) => (
            <div key={skill} style={{ ...dataCardStyle, display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ background: char.accent, padding: "10px", borderRadius: "4px", transition: "background 0.8s", flexShrink: 0 }}>
                <Zap size={16} color="white" fill="white" />
              </div>
              <div>
                <span style={{ fontWeight: 800, fontSize: "15px", textTransform: "uppercase", display: "block" }}>{skill}</span>
                <p style={{ fontSize: "10px", color: "#555", marginTop: "3px" }}>Active combat protocol enabled.</p>
              </div>
            </div>
          ))}
          <button
            onClick={uiOnly}
            className="deploy-btn"
            style={{
              background: "#ef4444", color: "white", padding: "18px", fontWeight: 900,
              textTransform: "uppercase", fontSize: "11px", cursor: "pointer", border: "none",
              borderRadius: "4px", marginTop: "10px", transition: "all 0.3s",
              boxShadow: "0 0 20px rgba(239,68,68,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center", gap: "8px"
            }}
          >
            Deploy Operator <Aperture size={15} />
          </button>
        </div>
      </div>

      {/* ── Thumbnail Carousel ── */}
      <div style={{ display: "flex", gap: "12px", marginTop: "50px", position: "relative", zIndex: 10, flexWrap: "wrap", justifyContent: "center" }}>
        {CHARS.map((c, i) => (
          <button
            key={c.id}
            onClick={() => changeIdx(i)}
            style={{
              width: "60px", height: "74px",
              position: "relative",
              background: i === activeIdx ? `${c.accent}18` : "#0a0a0a",
              border: `1px solid ${i === activeIdx ? c.accent : "#1a1a1a"}`,
              cursor: "pointer",
              transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
              clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)",
              overflow: "hidden",
              flexShrink: 0,
              transform: i === activeIdx ? "translateY(-6px) scale(1.05)" : "none",
              boxShadow: i === activeIdx ? `0 8px 24px ${c.accent}30` : "none",
            }}
            onMouseEnter={e => { if (i !== activeIdx) { e.currentTarget.style.borderColor = c.accent + "88"; e.currentTarget.style.transform = "translateY(-3px)"; } }}
            onMouseLeave={e => { if (i !== activeIdx) { e.currentTarget.style.borderColor = "#1a1a1a"; e.currentTarget.style.transform = "none"; } }}
          >
            <Image src={c.src} alt={c.name} fill style={{ objectFit: "contain", objectPosition: "center bottom", opacity: i === activeIdx ? 1 : 0.4, transition: "opacity 0.3s" }} />
            {/* Active accent bottom bar */}
            {i === activeIdx && (
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: c.accent, boxShadow: `0 0 8px ${c.accent}` }} />
            )}
          </button>
        ))}
      </div>

      {/* Progress dots row */}
      <div style={{ display: "flex", gap: "6px", marginTop: "16px", position: "relative", zIndex: 10 }}>
        {CHARS.map((_, i) => (
          <div
            key={i}
            onClick={() => changeIdx(i)}
            style={{
              width: i === activeIdx ? "32px" : "6px", height: "3px",
              background: i === activeIdx ? char.accent : "#222",
              transition: "all 0.35s", cursor: "pointer", borderRadius: "2px"
            }}
          />
        ))}
      </div>

      <style jsx global>{`
        .deploy-btn:hover { background: #dc2626 !important; box-shadow: 0 0 40px rgba(239,68,68,0.5) !important; }
        .nav-hover:hover { color: ${char.accent} !important; background: rgba(255,255,255,0.05) !important; transform: scale(1.1) translateY(-50%) !important; }

        @media (max-width: 1200px) {
          .champ-grid { grid-template-columns: 1fr !important; }
          .champ-side-panel { order: 2; }
          .champ-grid > div:nth-child(2) { order: 1; margin: 0 auto; }
          .champ-grid > div:nth-child(3) { order: 3; }
          .champ-nav-left  { left: -50px !important; }
          .champ-nav-right { right: -50px !important; }
        }
        @media (max-width: 640px) {
          .champ-nav-left  { left: -36px !important; width: 44px !important; height: 44px !important; }
          .champ-nav-right { right: -36px !important; width: 44px !important; height: 44px !important; }
          .champ-cylinder  { width: clamp(240px, 72vw, 360px) !important; height: 50vh !important; }
        }
      `}</style>
    </section>
  );
}

const panelHeaderStyle = {
  fontSize: "10px", fontWeight: 900, letterSpacing: "0.35em", textTransform: "uppercase",
  color: "#2a2a2a", display: "flex", alignItems: "center", gap: "6px"
};

const dataCardStyle = {
  background: "#050505", border: "1px solid #0e0e0e", padding: "22px", borderRadius: "6px"
};

const navButtonStyle = {
  position: "absolute", left: "-80px", top: "50%", transform: "translateY(-50%)",
  background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
  color: "rgba(255,255,255,0.3)", width: "56px", height: "56px", borderRadius: "50%",
  display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
  zIndex: 100, transition: "all 0.3s ease"
};
