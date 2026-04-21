"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function UIOnlyToast() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(true);
    window.addEventListener("ui-only-click", handler);
    return () => window.removeEventListener("ui-only-click", handler);
  }, []);

  if (!visible) return null;

  return (
    <div
      onClick={() => setVisible(false)}
      style={{
        position: "fixed", inset: 0, zIndex: 99999,
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
        animation: "modalBgIn 0.25s ease"
      }}
    >
      {/* Panel — stop propagation so clicking inside doesn't close */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: "relative",
          background: "#070707",
          border: "1px solid #1e1e1e",
          width: "100%", maxWidth: "520px",
          clipPath: "polygon(0 0, 97% 0, 100% 3%, 100% 100%, 3% 100%, 0 97%)",
          animation: "modalPanelIn 0.35s cubic-bezier(0.16,1,0.3,1)",
          overflow: "hidden"
        }}
      >
        {/* Top red glow bar */}
        <div style={{ height: "2px", background: "linear-gradient(90deg, transparent, #ef4444, #ef444488, transparent)" }} />

        {/* Ambient inner glow */}
        <div style={{ position: "absolute", top: "-40%", left: "50%", transform: "translateX(-50%)", width: "300px", height: "200px", background: "radial-gradient(circle, rgba(239,68,68,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Corner deco */}
        <div style={{ position: "absolute", top: "14px", left: "14px", width: "14px", height: "14px", borderTop: "1px solid #ef444455", borderLeft: "1px solid #ef444455" }} />
        <div style={{ position: "absolute", bottom: "14px", right: "14px", width: "14px", height: "14px", borderBottom: "1px solid #ef444455", borderRight: "1px solid #ef444455" }} />

        {/* Close button */}
        <button
          onClick={() => setVisible(false)}
          style={{
            position: "absolute", top: "16px", right: "16px",
            width: "32px", height: "32px",
            background: "#111", border: "1px solid #222",
            color: "#555", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "16px", fontWeight: 300, lineHeight: 1,
            transition: "all 0.2s",
            clipPath: "polygon(15% 0,100% 0,85% 100%,0 100%)"
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "#ef4444"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#ef4444"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "#111"; e.currentTarget.style.color = "#555"; e.currentTarget.style.borderColor = "#222"; }}
        >
          ✕
        </button>

        {/* Content */}
        <div style={{ padding: "48px 44px 44px" }}>
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", padding: "5px 14px", marginBottom: "28px" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ef4444", boxShadow: "0 0 8px #ef4444", animation: "uiPulse 1.4s infinite" }} />
            <span style={{ fontSize: "9px", fontWeight: 900, color: "#ef4444", letterSpacing: "0.35em", textTransform: "uppercase" }}>UI Demo Only</span>
          </div>

          {/* Heading */}
          <h2 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 950, textTransform: "uppercase", letterSpacing: "-0.02em", color: "#fff", lineHeight: 1, marginBottom: "16px" }}>
            Interaction<br /><span style={{ color: "transparent", WebkitTextStroke: "1px #ef4444" }}>Disabled</span>
          </h2>

          {/* Divider */}
          <div style={{ height: "1px", background: "linear-gradient(90deg, #ef444433, transparent)", marginBottom: "20px" }} />

          {/* Message */}
          <p style={{ fontSize: "13px", color: "#777", lineHeight: "1.75", marginBottom: "32px" }}>
            This is a <span style={{ color: "#bbb", fontWeight: 700 }}>visual design prototype</span>. Buttons and interactions are non-functional by design. Contact the developer to commission a fully working build.
          </p>

          {/* Dev card */}
          <div style={{ background: "#0d0d0d", border: "1px solid #161616", padding: "20px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
            <div>
              <p style={{ fontSize: "9px", color: "#ef4444", fontWeight: 900, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "5px" }}>Developer</p>
              <p style={{ fontSize: "15px", fontWeight: 950, color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em" }}>Shubham Panghal</p>
              <p style={{ fontSize: "10px", color: "#444", fontWeight: 700, marginTop: "3px" }}>Frontend Engineer &amp; UI Designer</p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <a
                href="https://github.com/shubh791"
                target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "8px", background: "#0a0a0a", border: "1px solid #1e1e1e", padding: "10px 16px", color: "#888", textDecoration: "none", fontSize: "10px", fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", transition: "all 0.25s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#ef4444"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e1e1e"; e.currentTarget.style.color = "#888"; }}
              >
                <FaGithub size={13} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/shubham-panghal/"
                target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "8px", background: "#0a0a0a", border: "1px solid #1e1e1e", padding: "10px 16px", color: "#888", textDecoration: "none", fontSize: "10px", fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", transition: "all 0.25s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#ef4444"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e1e1e"; e.currentTarget.style.color = "#888"; }}
              >
                <FaLinkedinIn size={13} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Dismiss hint */}
          <p style={{ fontSize: "10px", color: "#333", textAlign: "center", marginTop: "20px", letterSpacing: "0.1em" }}>
            CLICK OUTSIDE OR ✕ TO CLOSE
          </p>
        </div>

        {/* Bottom red glow bar */}
        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #ef444433, transparent)" }} />
      </div>

      <style jsx global>{`
        @keyframes modalBgIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modalPanelIn {
          from { opacity: 0; transform: scale(0.92) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes uiPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px #ef4444; }
          50%       { opacity: 0.3; box-shadow: 0 0 2px #ef4444; }
        }
      `}</style>
    </div>
  );
}
