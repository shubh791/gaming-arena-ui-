"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/src/lib/gsap";
import { Mail, MapPin, ChevronRight, Share2, Video, Tv, MessageCircle, Terminal, ShieldCheck, Cpu, Zap } from "lucide-react";
import { uiOnly } from "@/src/lib/uiOnly";

const SOCIALS = [
  { icon: Share2,        label: "Twitter" },
  { icon: Video,         label: "YouTube" },
  { icon: Tv,            label: "Twitch"  },
  { icon: MessageCircle, label: "Discord" },
];

const CONTACT_INFO = [
  { icon: Mail,   label: "UPLINK@GAMINGARENA.GG", tag: "EMAIL_COMMS" },
  { icon: MapPin, label: "SECTOR 7, SAN FRANCISCO, CA", tag: "GRID_LOC" },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [focused, setFocused] = useState(null);

  useEffect(() => {
    setMounted(true);
    const ctx = gsap.context(() => {
      gsap.from(".contact-shard", {
        y: 50, opacity: 0, duration: 0.9, stagger: 0.2, ease: "power4.out",
        clearProps: "all",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => { e.preventDefault(); uiOnly(); };

  if (!mounted) return null;

  return (
    <section ref={sectionRef} id="contact" style={{ background: "#020202", padding: "120px 0 100px", position: "relative", overflow: "hidden" }}>

      {/* Scanline texture */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.008) 3px, rgba(255,255,255,0.008) 4px)", pointerEvents: "none", zIndex: 1 }} />

      {/* Top accent line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent 0%, #ef4444 30%, #ef444466 70%, transparent 100%)", opacity: 0.5 }} />

      {/* Ambient glow */}
      <div style={{ position: "absolute", bottom: "-10%", right: "-5%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(239,68,68,0.06) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "20%", left: "-10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(239,68,68,0.04) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1350px", margin: "0 auto", padding: "0 5%", position: "relative", zIndex: 10 }}>

        {/* Section header */}
        <div style={{ marginBottom: "70px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#ef4444", marginBottom: "16px" }}>
            <div style={{ width: "30px", height: "1px", background: "#ef4444" }} />
            <Cpu size={14} />
            <span style={{ fontSize: "9px", fontWeight: 900, letterSpacing: "0.5em", textTransform: "uppercase" }}>Establishing Uplink</span>
          </div>
          <h2 style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", fontWeight: 950, lineHeight: 0.85, textTransform: "uppercase", color: "#fff", letterSpacing: "-0.02em" }}>
            Get In<br /><span style={{ color: "transparent", WebkitTextStroke: "1px #ef4444" }}>Touch</span>
          </h2>
        </div>

        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px,100%), 1fr))", gap: "60px", alignItems: "start" }}>

          {/* ── LEFT: INFO PANEL ── */}
          <div className="contact-shard" style={{ display: "flex", flexDirection: "column", gap: "0" }}>

            <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.85", maxWidth: "380px", marginBottom: "40px" }}>
              Report bugs, discuss tactical partnerships, or request hardware support via the secure encrypted transmission form.
            </p>

            {/* Contact info cards */}
            <div style={{ display: "grid", gap: "14px", marginBottom: "40px" }}>
              {CONTACT_INFO.map((info) => (
                <div key={info.label} style={{ display: "flex", alignItems: "center", gap: "18px", background: "rgba(12,12,12,0.8)", padding: "18px 22px", borderLeft: "2px solid #ef4444", backdropFilter: "blur(8px)", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(239,68,68,0.04) 0%, transparent 50%)", pointerEvents: "none" }} />
                  <div style={{ width: "36px", height: "36px", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <info.icon size={15} color="#ef4444" />
                  </div>
                  <div>
                    <div style={{ fontSize: "8px", color: "#ef4444", fontWeight: 900, letterSpacing: "0.2em", marginBottom: "4px" }}>{info.tag}</div>
                    <div style={{ color: "#ccc", fontWeight: 700, fontSize: "13px" }}>{info.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div style={{ height: "1px", background: "linear-gradient(90deg, #1a1a1a, transparent)", marginBottom: "30px" }} />

            {/* Social label */}
            <div style={{ fontSize: "9px", fontWeight: 900, color: "#333", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "16px" }}>Broadcast Channels</div>

            <div style={{ display: "flex", gap: "10px" }}>
              {SOCIALS.map((soc) => (
                <button
                  key={soc.label}
                  onClick={uiOnly}
                  title={soc.label}
                  style={{ width: "44px", height: "44px", background: "#0a0a0a", border: "1px solid #1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", color: "#444", cursor: "pointer", transition: "all 0.3s", clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#ef4444"; e.currentTarget.style.borderColor = "#ef4444"; e.currentTarget.style.background = "rgba(239,68,68,0.08)"; e.currentTarget.style.boxShadow = "0 0 15px rgba(239,68,68,0.25)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "#444"; e.currentTarget.style.borderColor = "#1a1a1a"; e.currentTarget.style.background = "#0a0a0a"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <soc.icon size={16} />
                </button>
              ))}
            </div>

            {/* Status indicator */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "40px", padding: "14px 18px", background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.12)" }}>
              <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#ef4444", boxShadow: "0 0 8px #ef4444", animation: "contactPulse 2s infinite", flexShrink: 0 }} />
              <span style={{ fontSize: "9px", fontWeight: 900, color: "#ef4444", letterSpacing: "0.25em", textTransform: "uppercase" }}>System Online — Response &lt; 24h</span>
            </div>
          </div>

          {/* ── RIGHT: FORM ── */}
          <div className="contact-shard">
            <div className="glowing-form-card">
              {/* Form header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "36px" }}>
                <div>
                  <div style={{ fontSize: "9px", fontWeight: 900, color: "#ef4444", letterSpacing: "0.4em", marginBottom: "6px" }}>SECURE CHANNEL</div>
                  <h3 style={{ fontSize: "18px", fontWeight: 950, color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em" }}>Transmission Form</h3>
                </div>
                <Terminal size={28} color="#ef4444" style={{ opacity: 0.25 }} />
              </div>

              {/* Top accent */}
              <div style={{ height: "1px", background: "linear-gradient(90deg, #ef4444, #ef444433, transparent)", marginBottom: "32px" }} />

              {sent ? (
                <div style={{ textAlign: "center", padding: "60px 20px" }}>
                  <div style={{ width: "70px", height: "70px", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                    <ShieldCheck size={34} color="#ef4444" />
                  </div>
                  <h3 style={{ fontWeight: 950, fontSize: "20px", color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>Transmission Sent</h3>
                  <p style={{ color: "#555", fontSize: "13px", lineHeight: "1.7" }}>Identity confirmed.<br />Operator will respond within 24 hours.</p>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "24px", padding: "6px 16px", background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)" }}>
                    <Zap size={10} color="#ef4444" />
                    <span style={{ fontSize: "9px", fontWeight: 900, color: "#ef4444", letterSpacing: "0.2em" }}>ENCRYPTED_OK</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "grid", gap: "22px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "18px" }}>
                    <div className="input-field-group">
                      <label>User_Name</label>
                      <input type="text" placeholder="REQUIRED" required
                        onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                        onChange={(e) => setForm({...form, name: e.target.value})} />
                    </div>
                    <div className="input-field-group">
                      <label>Net_Address</label>
                      <input type="email" placeholder="REQUIRED" required
                        onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                        onChange={(e) => setForm({...form, email: e.target.value})} />
                    </div>
                  </div>

                  <div className="input-field-group">
                    <label>Subject_Protocol</label>
                    <input type="text" placeholder="OPTIONAL"
                      onFocus={() => setFocused("subject")} onBlur={() => setFocused(null)}
                      onChange={(e) => setForm({...form, subject: e.target.value})} />
                  </div>

                  <div className="input-field-group">
                    <label>Data_String</label>
                    <textarea rows={5} placeholder="ENTER MESSAGE..." required
                      onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                      onChange={(e) => setForm({...form, message: e.target.value})} />
                  </div>

                  <button className="neon-submit-btn" type="submit">
                    Execute_Send <ChevronRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .glowing-form-card {
          background: #070707;
          padding: 44px 36px;
          position: relative;
          border: 1px solid #141414;
          clip-path: polygon(3% 0, 100% 0, 100% 97%, 97% 100%, 0 100%, 0 3%);
          overflow: hidden;
        }
        .glowing-form-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at top right, rgba(239,68,68,0.04) 0%, transparent 60%);
          pointer-events: none;
        }

        .input-field-group label {
          display: block;
          font-size: 8px;
          font-weight: 900;
          color: #333;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          margin-bottom: 8px;
          transition: color 0.2s;
        }
        .input-field-group:focus-within label { color: #ef4444; }

        .input-field-group input,
        .input-field-group textarea {
          width: 100%;
          background: #0b0b0b;
          border: 1px solid #181818;
          border-bottom: 1px solid #252525;
          padding: 14px 16px;
          color: #ddd;
          font-family: monospace;
          font-size: 13px;
          outline: none;
          transition: all 0.3s ease;
          box-sizing: border-box;
          resize: none;
        }
        .input-field-group input:focus,
        .input-field-group textarea:focus {
          border-color: #ef4444;
          border-bottom-color: #ef4444;
          background: rgba(239,68,68,0.025);
          box-shadow: 0 0 20px rgba(239,68,68,0.15), inset 0 -2px 0 #ef4444;
        }
        .input-field-group input::placeholder,
        .input-field-group textarea::placeholder { color: #2a2a2a; font-size: 11px; letter-spacing: 0.1em; }

        .neon-submit-btn {
          background: #ef4444;
          color: white;
          border: none;
          padding: 18px;
          font-weight: 900;
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          clip-path: polygon(0 0, 100% 0, 96% 100%, 4% 100%);
          position: relative;
          overflow: hidden;
        }
        .neon-submit-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
          transform: translateX(-100%);
          transition: transform 0.5s ease;
        }
        .neon-submit-btn:hover { background: #fff; color: #000; box-shadow: 0 0 30px rgba(255,255,255,0.2); }
        .neon-submit-btn:hover::before { transform: translateX(100%); }

        .social-hex-btn {
          width: 44px; height: 44px;
          background: #0a0a0a;
          border: 1px solid #1a1a1a;
          display: flex; align-items: center; justify-content: center;
          color: #444;
          cursor: pointer;
          transition: all 0.3s;
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }
        .social-hex-btn:hover {
          color: #ef4444; border-color: #ef4444;
          background: rgba(239,68,68,0.08);
          box-shadow: 0 0 15px rgba(239,68,68,0.3);
        }

        @keyframes contactPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px #ef4444; }
          50%       { opacity: 0.3; box-shadow: 0 0 2px #ef4444; }
        }

        @media (max-width: 768px) {
          .contact-grid { gap: 40px !important; }
          .glowing-form-card { padding: 28px 20px !important; }
        }
      `}</style>
    </section>
  );
}
