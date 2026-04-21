"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Shield, Zap, Cpu, Radio, Activity, Terminal } from "lucide-react";

const WEAPONS = [
  {
    name: "Iron Staff",
    type: "Divine Melee",
    desc: "A legendary staff carved from sacred mountain iron. Channels divine energy through every strike.",
    stats: { ATK: 94, SPD: 72, RNG: 45, DMG: 98 },
    accent: "#f59e0b",
    weaponImg: "/weapons/staff.png",
    wielder: "Wukong",
  },
  {
    name: "Shadow Blade",
    type: "Dual Wield",
    desc: "Twin blades forged in shadow realms. Silent on approach, devastating on impact.",
    stats: { ATK: 88, SPD: 100, RNG: 38, DMG: 82 },
    accent: "#a855f7",
    weaponImg: "/weapons/blades.png",
    wielder: "Shadow",
  },
  {
    name: "Chaos Hammer",
    type: "Heavy Impact",
    desc: "Raw destruction compressed into steel. Each swing unleashes a shockwave that sunders the earth.",
    stats: { ATK: 100, SPD: 55, RNG: 42, DMG: 100 },
    accent: "#ef4444",
    weaponImg: "/weapons/hammeri.png",
    wielder: "Storm",
  },
  {
    name: "Arc Blade",
    type: "Energy Ranged",
    desc: "A celestial construct that fires bolts of pure energy. Precision at any distance.",
    stats: { ATK: 82, SPD: 88, RNG: 100, DMG: 79 },
    accent: "#3b82f6",
    weaponImg: "/weapons/arc-gun.png",
    wielder: "Celestial",
  },
];

export default function WeaponsLab() {
  return (
    <section id="weapons" style={{ background: "#000", padding: "120px 0", overflow: "hidden", position: "relative" }}>
      
      {/* Background Static Grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(#1a1a1a 1px, transparent 1px)`, backgroundSize: "50px 50px", opacity: 0.3 }} />

      <div style={{ maxWidth: "1500px", margin: "0 auto", padding: "0 5%", position: "relative", zIndex: 10 }}>
        
        {/* Header Section */}
        <div style={{ marginBottom: "80px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#ef4444", marginBottom: "10px" }}>
              <Activity size={16} className="animate-pulse" />
              <span style={{ fontSize: "10px", fontWeight: 900, letterSpacing: "0.4em", textTransform: "uppercase" }}>Containment Stable</span>
            </div>
            <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 950, color: "white", lineHeight: 1, textTransform: "uppercase" }}>
              ELITE <br /> <span style={{ color: "#ef4444" }}>ARSENAL</span>
            </h2>
          </div>
          <div style={{ textAlign: "right", color: "#333", fontSize: "11px", fontWeight: 800 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "flex-end", color: "#666" }}>
                <Terminal size={12} /> SYNC_COMPLETE
            </div>
            <p>X-REF: 8829-B</p>
          </div>
        </div>

        {/* The Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "25px" }}>
          {WEAPONS.map((w) => (
            <div
              key={w.name}
              style={{
                position: "relative", height: "700px", background: "#050505", overflow: "hidden",
                border: `1px solid ${w.accent}44`,
                cursor: "default" // Removed custom mouse pointer
              }}
            >
              {/* ── PERMANENT LIGHTING EFFECTS ── */}
              
              {/* Background Energy Beam (Always Glowing) */}
              <div style={{ 
                position: "absolute", left: "50%", top: "0", bottom: "0", width: "80px",
                background: `linear-gradient(to bottom, transparent, ${w.accent}22, transparent)`,
                transform: "translateX(-50%)", filter: "blur(40px)",
              }} />

              {/* Top & Bottom Glowing Caps (Always On) */}
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "3px", background: w.accent, boxShadow: `0 0 15px ${w.accent}` }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "3px", background: w.accent, boxShadow: `0 0 15px ${w.accent}` }} />

              {/* Decorative Tech Corners */}
              <div style={{ position: "absolute", top: "15px", left: "15px", width: "20px", height: "20px", borderTop: `2px solid ${w.accent}`, borderLeft: `2px solid ${w.accent}` }} />
              <div style={{ position: "absolute", bottom: "15px", right: "15px", width: "20px", height: "20px", borderBottom: `2px solid ${w.accent}`, borderRight: `2px solid ${w.accent}` }} />

              {/* ── FLOATING WEAPON (Full Height) ── */}
              <div style={{ 
                position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center",
                padding: "60px", zIndex: 5,
              }} className="weapon-float">
                <div style={{ 
                  position: "relative", width: "100%", height: "100%", 
                  filter: `drop-shadow(0 0 40px ${w.accent}55)`
                }}>
                  <Image src={w.weaponImg} alt={w.name} fill style={{ objectFit: "contain" }} />
                </div>
              </div>

              {/* ── UI HUD DATA ── */}
              <div style={{ position: "absolute", inset: 0, zIndex: 10, padding: "40px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                
                {/* Stats Row */}
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", gap: "20px" }}>
                     <div style={{ borderLeft: `2px solid ${w.accent}`, paddingLeft: "10px" }}>
                        <p style={{ fontSize: "22px", fontWeight: 900, color: "white" }}>{w.stats.ATK}</p>
                        <p style={{ fontSize: "8px", fontWeight: 800, color: "#666", letterSpacing: "0.1em" }}>ATTACK</p>
                     </div>
                     <div style={{ borderLeft: `2px solid ${w.accent}`, paddingLeft: "10px" }}>
                        <p style={{ fontSize: "22px", fontWeight: 900, color: "white" }}>{w.stats.SPD}</p>
                        <p style={{ fontSize: "8px", fontWeight: 800, color: "#666", letterSpacing: "0.1em" }}>SPEED</p>
                     </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ background: `${w.accent}22`, padding: "4px 10px", border: `1px solid ${w.accent}44` }}>
                        <span style={{ fontSize: "10px", fontWeight: 900, color: w.accent, textTransform: "uppercase" }}>{w.type}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Weapon Detail */}
                <div style={{ background: "linear-gradient(to top, rgba(0,0,0,0.95) 40%, transparent 100%)", margin: "-40px", padding: "40px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                     <Cpu size={14} color={w.accent} />
                     <div style={{ height: "1px", flex: 1, background: `${w.accent}22` }} />
                  </div>
                  
                  <h3 style={{ fontSize: "2.2rem", fontWeight: 950, textTransform: "uppercase", color: "white", marginBottom: "8px", letterSpacing: "-0.02em" }}>
                    {w.name}
                  </h3>
                  
                  <p style={{ fontSize: "13px", color: "#888", lineHeight: "1.6", marginBottom: "25px", fontWeight: 500 }}>
                    {w.desc}
                  </p>
                  
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #111", paddingTop: "20px" }}>
                     <span style={{ fontSize: "9px", fontWeight: 800, color: "#444" }}>WIELDER: {w.wielder.toUpperCase()}</span>
                     <Zap size={14} color={w.accent} fill={w.accent} />
                  </div>
                </div>
              </div>

              {/* Static Scanline Overlays */}
              <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%)", backgroundSize: "100% 4px", zIndex: 15, pointerEvents: "none" }} />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes weaponFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.02); }
        }
        .weapon-float {
          animation: weaponFloat 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}