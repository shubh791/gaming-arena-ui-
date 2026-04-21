"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "@/src/lib/gsap";
import { Shield, Zap, Target } from "lucide-react";
import { uiOnly } from "@/src/lib/uiOnly";

const CHARS = [
  { id: "wukong", src: "/hero/wukong.png", name: "Wukong", role: "Monkey King", accent: "#f59e0b" },
  { id: "phantom", src: "/hero/crouch.png", name: "Phantom", role: "Dual Blade", accent: "#ec4899" },
  { id: "shadow", src: "/hero/assain.png", name: "Shadow", role: "Master Assassin", accent: "#a855f7" },
  { id: "storm", src: "/hero/down.png", name: "Storm", role: "Berserker", accent: "#ef4444" },
  { id: "celestial", src: "/hero/other-char.png", name: "Celestial", role: "Arc Blade", accent: "#3b82f6" },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const charRef = useRef(null);
  const titleRef = useRef(null);
  
  const [activeIdx, setActiveIdx] = useState(0);
  const char = CHARS[activeIdx];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % CHARS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    // Character Flash & Slide
    tl.fromTo(charRef.current, 
      { x: 100, opacity: 0, scale: 1.2, filter: "brightness(3) contrast(1.2)" },
      { x: 0, opacity: 1, scale: 1, filter: "brightness(1) contrast(1)", duration: 0.7, ease: "expo.out" }
    );
    // Text Glitch Effect
    gsap.fromTo(titleRef.current,
        { skewX: 20, opacity: 0 },
        { skewX: 0, opacity: 1, duration: 0.4, ease: "power4.out" }
    );
  }, [activeIdx, char.accent]);

  return (
    <section ref={sectionRef} style={{ 
      position: "relative", width: "100%", height: "100vh", background: "#000", 
      overflow: "hidden", display: "flex", alignItems: "center", color: "white"
    }}>
      
      {/* ── INSANE BACKGROUND DECAL ── */}
      <div style={{ 
        position: "absolute", left: "-5%", top: "50%", transform: "translateY(-50%)",
        fontSize: "25vh", fontWeight: 900, color: "rgba(255,255,255,0.02)", 
        whiteSpace: "nowrap", pointerEvents: "none", zIndex: 0, textTransform: "uppercase"
      }}>
        {char.name} {char.name}
      </div>

      {/* ── MAIN CONTENT LAYER ── */}
      <div style={{ 
        position: "relative", zIndex: 10, width: "100%", height: "100%",
        display: "flex", alignItems: "center", padding: "0 clamp(1rem, 6vw, 8rem)"
      }}>
        
        {/* TEXT CONTENT - Pushed to front */}
        <div className="hero-content" style={{ position: "relative", zIndex: 30, flex: "1", maxWidth: "900px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.5rem" }}>
            <Zap size={16} color={char.accent} fill={char.accent} />
            <p style={{ color: char.accent, fontWeight: 900, letterSpacing: "0.8em", fontSize: "10px", textTransform: "uppercase" }}>
              Combat Unit Enabled
            </p>
          </div>

          <h1 ref={titleRef} style={{ 
            fontSize: "clamp(4rem, 15vw, 11rem)", fontWeight: 950, lineHeight: 0.75, 
            textTransform: "uppercase", letterSpacing: "-0.05em", margin: "0 0 2rem 0"
          }}>
            ARENA<br />
            <span style={{ color: "transparent", WebkitTextStroke: "2px white" }}>SUPREME</span><br />
            <span style={{ color: char.accent }}>{char.name}</span>
          </h1>

          <div style={{ display: "flex", gap: "3rem", marginBottom: "3rem" }} className="hidden md:flex">
             <div style={{ borderLeft: `2px solid ${char.accent}`, paddingLeft: "15px" }}>
                <div style={{ fontSize: "11px", fontWeight: 800, color: "#555" }}>VELOCITY</div>
                <div style={{ fontSize: "18px", fontWeight: 900 }}>99.2%</div>
             </div>
             <div style={{ borderLeft: `2px solid ${char.accent}`, paddingLeft: "15px" }}>
                <div style={{ fontSize: "11px", fontWeight: 800, color: "#555" }}>STRENGTH</div>
                <div style={{ fontSize: "18px", fontWeight: 900 }}>MAX_LVL</div>
             </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <button onClick={uiOnly} style={{
              background: char.accent, color: "white", border: "none", padding: "20px 50px",
              fontWeight: 900, textTransform: "uppercase", cursor: "pointer", fontSize: "14px",
              clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)"
            }}>
              Enter Arena
            </button>
          </div>
        </div>

        {/* CHARACTER IMAGE - Layered behind text on mobile, right on PC */}
        <div className="hero-char-img" style={{
          position: "absolute",
          right: "0",
          bottom: "0",
          width: "clamp(300px, 60vw, 900px)",
          height: "90%",
          zIndex: 20,
          pointerEvents: "none",
          opacity: 1
        }}>
          <div ref={charRef} style={{ width: "100%", height: "100%", position: "relative" }}>
            <Image
              src={char.src} alt={char.name} fill priority
              style={{ 
                objectFit: "contain", 
                objectPosition: "bottom right",
                filter: "drop-shadow(-20px 0px 30px rgba(0,0,0,0.8))"
              }}
            />
          </div>
          
          {/* Subtle Shadow to separate character from background text */}
          <div style={{ 
            position: "absolute", inset: 0, 
            background: "linear-gradient(to right, #000 0%, transparent 40%)",
            zIndex: -1 
          }} className="lg:hidden" />
        </div>
      </div>

      {/* ── CINEMATIC OVERLAYS ── */}
      <div style={{ 
        position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
        background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 4px)",
        pointerEvents: "none", zIndex: 100
      }} />
      
      <div style={{ 
        position: "absolute", inset: "20px", 
        border: "1px solid rgba(255,255,255,0.05)", 
        pointerEvents: "none", zIndex: 101 
      }} />

      <style jsx global>{`
        @media (max-width: 768px) {
          .hero-char-img { opacity: 0.55 !important; width: 100% !important; }
          .hero-content { max-width: 100% !important; }
        }
        @media (max-width: 480px) {
          .hero-char-img { opacity: 0.45 !important; }
        }
      `}</style>
    </section>
  );
}