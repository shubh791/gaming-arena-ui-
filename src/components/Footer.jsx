"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

const NAV_LINKS = [
  { label: "Arena", href: "#" },
  { label: "Champions", href: "#champions" },
  { label: "Weapons", href: "#weapons" },
  { label: "Battles", href: "#battles" },
  { label: "Store", href: "#store" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* ── FOOTER ── */}
      <footer style={{ background: "#020202", position: "relative", overflow: "hidden" }}>

        {/* Top closing bar */}
        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent 0%, #ef4444 30%, #ef444480 60%, transparent 100%)" }} />

        {/* Ambient glow */}
        <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "600px", height: "300px", background: "radial-gradient(circle, rgba(239,68,68,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1350px", margin: "0 auto", padding: "80px 5% 0", position: "relative", zIndex: 10 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "60px", paddingBottom: "60px", borderBottom: "1px solid #111" }}>

            {/* ── COL 1: BRAND ── */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <div style={{ width: "34px", height: "34px", background: "#ef4444", display: "flex", alignItems: "center", justifyContent: "center", padding: "6px", borderRadius: "3px" }}>
                  {/* Zap / lightning bolt SVG matching navbar */}
                  <svg viewBox="0 0 32 32" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="17.5 3 6 17 15 17 14.5 29 26 15 17 15 17.5 3" fill="white"/>
                  </svg>
                </div>
                <span style={{ fontSize: "18px", fontWeight: 950, textTransform: "uppercase", letterSpacing: "0.1em", color: "white" }}>Gaming Arena</span>
              </div>
              <p style={{ fontSize: "13px", color: "#555", lineHeight: "1.8", maxWidth: "260px", marginBottom: "20px" }}>
                A high-fidelity UI concept for a next-gen gaming platform. Crafted with precision and code.
              </p>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", padding: "6px 14px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ef4444", boxShadow: "0 0 6px #ef4444" }} />
                <span style={{ fontSize: "9px", fontWeight: 900, letterSpacing: "0.25em", color: "#ef4444", textTransform: "uppercase" }}>UI Design Only</span>
              </div>
            </div>

            {/* ── COL 2: NAVIGATION ── */}
            <div>
              <h4 style={{ fontSize: "9px", fontWeight: 900, letterSpacing: "0.4em", color: "#444", textTransform: "uppercase", marginBottom: "25px" }}>Navigation</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "14px" }}>
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} style={{ fontSize: "13px", color: "#666", textDecoration: "none", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", transition: "color 0.2s", display: "flex", alignItems: "center", gap: "8px" }}
                      onMouseEnter={e => e.currentTarget.style.color = "#ef4444"}
                      onMouseLeave={e => e.currentTarget.style.color = "#666"}
                    >
                      <span style={{ width: "4px", height: "4px", background: "#ef4444", display: "inline-block", clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── COL 3: DEVELOPER ── */}
            <div>
              <h4 style={{ fontSize: "9px", fontWeight: 900, letterSpacing: "0.4em", color: "#444", textTransform: "uppercase", marginBottom: "25px" }}>Designed & Developed By</h4>
              <div style={{ background: "#080808", border: "1px solid #151515", padding: "30px", position: "relative", clipPath: "polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%)" }}>
                <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "100%", background: "linear-gradient(to bottom, #ef4444, transparent)" }} />
                <p style={{ fontSize: "10px", color: "#ef4444", fontWeight: 900, letterSpacing: "0.4em", marginBottom: "8px", textTransform: "uppercase" }}>Developer</p>
                <h3 style={{ fontSize: "22px", fontWeight: 950, color: "white", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px", lineHeight: 1.1 }}>
                  Shubham<br />Panghal
                </h3>
                <p style={{ fontSize: "11px", color: "#555", fontWeight: 700, marginBottom: "25px", letterSpacing: "0.05em" }}>Frontend Engineer &amp; UI Designer</p>
                <div style={{ display: "flex", gap: "12px" }}>
                  <a
                    href="https://github.com/shubh791"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: "8px", background: "#0a0a0a", border: "1px solid #1a1a1a", padding: "10px 16px", color: "#888", textDecoration: "none", fontSize: "11px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", transition: "all 0.3s" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "#ef4444"; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a1a1a"; e.currentTarget.style.color = "#888"; }}
                  >
                    <FaGithub size={14} /> GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shubham-panghal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: "8px", background: "#0a0a0a", border: "1px solid #1a1a1a", padding: "10px 16px", color: "#888", textDecoration: "none", fontSize: "11px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", transition: "all 0.3s" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "#ef4444"; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a1a1a"; e.currentTarget.style.color = "#888"; }}
                  >
                    <FaLinkedinIn size={14} /> LinkedIn
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* ── BOTTOM STRIP ── */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0", flexWrap: "wrap", gap: "16px" }}>
            <p style={{ fontSize: "11px", color: "#333", fontWeight: 700, letterSpacing: "0.1em" }}>
              © 2026 GAMING ARENA — UI CONCEPT BY{" "}
              <span style={{ color: "#ef4444" }}>SHUBHAM PANGHAL</span>
            </p>
            <button
              onClick={scrollToTop}
              style={{ display: "flex", alignItems: "center", gap: "8px", background: "transparent", border: "1px solid #1a1a1a", color: "#555", padding: "10px 18px", fontSize: "10px", fontWeight: 900, letterSpacing: "0.25em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#ef4444"; e.currentTarget.style.color = "#ef4444"; e.currentTarget.style.boxShadow = "0 0 15px rgba(239,68,68,0.2)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a1a1a"; e.currentTarget.style.color = "#555"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <FiArrowUp size={14} /> Back to Top
            </button>
          </div>
        </div>
      </footer>

    </>
  );
}
