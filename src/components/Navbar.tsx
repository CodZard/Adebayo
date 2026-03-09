import React, { useState } from "react";

interface NavbarProps {
  scrollY: number;
}

const Navbar: React.FC<NavbarProps> = ({ scrollY }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["About", "Skills", "Projects", "Contact"];

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: "1.2rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: scrollY > 50 ? "rgba(10,10,10,0.95)" : "transparent",
    borderBottom: scrollY > 50 ? "1px solid #1f1f1f" : "none",
    transition: "all 0.3s ease",
  };

  return (
    <nav style={navStyle}>
      <span
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  style={{ fontWeight: 700, fontSize: "1.1rem", color: "#fff", letterSpacing: "0.05em", cursor: "pointer" }}
>
  Adebayo<span style={{ color: "#6366f1" }}>.</span>
</span>

      {/* Desktop links */}
      <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }} className="desktop-nav">
        {links.map((link) => (
          <li key={link}>
            <button
              onClick={() => scrollTo(link)}
              style={{
                background: "none", border: "none", color: "#a3a3a3",
                cursor: "pointer", fontSize: "0.9rem", letterSpacing: "0.05em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#a3a3a3")}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "#fff", fontSize: "1.4rem" }}
        className="hamburger"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: "#111", padding: "1rem 2rem", display: "flex",
          flexDirection: "column", gap: "1rem", borderBottom: "1px solid #1f1f1f"
        }}>
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{ background: "none", border: "none", color: "#a3a3a3", cursor: "pointer", fontSize: "1rem", textAlign: "left" }}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
