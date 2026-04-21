"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronRight, Zap } from "lucide-react";
import { gsap } from "@/src/lib/gsap";
import { uiOnly } from "@/src/lib/uiOnly";

const NAV_LINKS = [
  { label: "Home",      href: "#home"      },
  { label: "Champions", href: "#champions" },
  { label: "Weapons",   href: "#weapons"   },
  { label: "Battles",   href: "#battles"   },
  { label: "Store",     href: "#store"     },
  { label: "Contact",   href: "#contact"   },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const check = () => {
      setIsDesktop(window.innerWidth >= 1024);
      if (window.innerWidth >= 1024) setOpen(false);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Entrance Animation
  useEffect(() => {
    gsap.from(headerRef.current, { 
      y: -100, 
      opacity: 0, 
      duration: 1.2, 
      ease: "expo.out" 
    });
  }, []);

  // Mobile Menu Stagger
  useEffect(() => {
    if (open) {
      gsap.fromTo(".mobile-link", 
        { x: 50, opacity: 0 }, 
        { x: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power4.out", delay: 0.2 }
      );
    }
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        ref={headerRef}
        style={{
          position: "fixed",
          inset: "0 0 auto 0",
          zIndex: 1000,
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          background: scrolled ? "rgba(2,2,2,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(15px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(15px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.1)" : "1px solid transparent",
          height: scrolled ? "70px" : "90px",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(1.5rem, 5vw, 6rem)",
        }}>

          {/* Tactical Logo */}
          <a
            href="#home"
            style={{
              display: "flex", alignItems: "center", gap: "12px",
              textDecoration: "none", fontWeight: 950,
              fontSize: "14px", letterSpacing: "0.4em", textTransform: "uppercase",
            }}
          >
            <div style={{ background: "#ef4444", padding: "4px 8px", borderRadius: "2px" }}>
              <Zap size={16} color="white" fill="white" />
            </div>
            <span style={{ color: "#ffffff", display: isDesktop ? "block" : "none" }}>GAMING ARENA</span>
          </a>

          {/* Desktop HUD Nav */}
          {isDesktop && (
            <nav style={{ display: "flex", alignItems: "center", gap: "3.5rem" }}>
              <ul style={{ display: "flex", alignItems: "center", gap: "2.5rem", listStyle: "none", margin: 0, padding: 0 }}>
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      style={{
                        position: "relative",
                        fontSize: "11px", fontWeight: 800,
                        letterSpacing: "0.25em", textTransform: "uppercase",
                        color: "rgba(255,255,255,0.5)", textDecoration: "none",
                        padding: "8px 0", transition: "all 0.3s ease",
                        display: "block",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = "#ef4444";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Unique Skewed Button */}
              <button
                onClick={uiOnly}
                style={{
                  position: "relative",
                  background: "transparent",
                  color: "#ffffff",
                  border: "1px solid #ef4444",
                  padding: "12px 30px",
                  fontSize: "11px", fontWeight: 900,
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  cursor: "pointer",
                  overflow: "hidden",
                  transition: "all 0.3s",
                  clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "#ef4444";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(239,68,68,0.4)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Launch Protocol
              </button>
            </nav>
          )}

          {/* Mobile Menu Trigger */}
          {!isDesktop && (
            <button
              onClick={() => setOpen(v => !v)}
              style={{
                background: "none", border: "none", color: "#ffffff", cursor: "pointer",
                padding: "8px"
              }}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          )}
        </div>
      </header>

      {/* ── Ultra Mobile Overlay ── */}
      <div
        ref={menuRef}
        style={{
          position: "fixed", inset: 0, zIndex: 900,
          background: "#000000",
          display: isDesktop ? "none" : "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 10%",
          transition: "transform 0.6s cubic-bezier(0.85, 0, 0.15, 1)",
          transform: open ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Background Decorative Text */}
        <div style={{ 
          position: "absolute", top: "10%", left: "-10%", fontSize: "30vw", 
          fontWeight: 900, color: "rgba(239,68,68,0.03)", pointerEvents: "none" 
        }}>
          MENU
        </div>

        <nav style={{ position: "relative", zIndex: 10 }}>
          {NAV_LINKS.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              onClick={close}
              className="mobile-link"
              style={{
                display: "block",
                fontSize: "12vw",
                fontWeight: 950,
                textTransform: "uppercase",
                color: "white",
                textDecoration: "none",
                margin: "10px 0",
                lineHeight: 1,
                letterSpacing: "-0.02em"
              }}
            >
              <span style={{ color: "#ef4444", fontSize: "4vw", marginRight: "10px", verticalAlign: "middle" }}>0{i + 1}</span>
              {label}
            </a>
          ))}
          
          <button
            onClick={uiOnly}
            style={{
              marginTop: "40px",
              width: "100%",
              padding: "20px",
              background: "#ef4444",
              color: "white",
              fontWeight: 900,
              fontSize: "14px",
              textTransform: "uppercase",
              border: "none",
              cursor: "pointer",
              clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)"
            }}
          >
            Start Mission
          </button>
        </nav>
      </div>
    </>
  );
}