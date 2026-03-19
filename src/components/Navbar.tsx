import React, { useState } from "react";

interface NavbarProps {
  scrollY: number;
}

const navLinks = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const Navbar: React.FC<NavbarProps> = ({ scrollY }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: scrollY > 40 ? "rgba(10, 10, 10, 0.92)" : "transparent",
        backdropFilter: scrollY > 40 ? "blur(10px)" : "none",
        borderBottom: scrollY > 40 ? "1px solid #1f1f1f" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          margin: 0,
          fontWeight: 700,
          fontSize: "1.1rem",
          color: "#fff",
          letterSpacing: "0.05em",
          cursor: "pointer",
        }}
      >
        Adebayo<span style={{ color: "#6366f1" }}>.</span>
      </button>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <ul
          className="desktop-nav"
          style={{
            display: "flex",
            gap: "1.5rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
            alignItems: "center",
          }}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#a3a3a3",
                  cursor: "pointer",
                  fontSize: "0.92rem",
                  fontWeight: 500,
                  letterSpacing: "0.03em",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#a3a3a3";
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("projects");
          }}
          className="desktop-nav"
          style={{
            textDecoration: "none",
            padding: "0.7rem 1rem",
            borderRadius: "999px",
            background: "#6366f1",
            color: "#fff",
            fontSize: "0.88rem",
            fontWeight: 600,
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.9";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
        >
          View Projects
        </a>

        <button
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            fontSize: "1.4rem",
            padding: 0,
            lineHeight: 1,
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "#111",
            borderBottom: "1px solid #1f1f1f",
            padding: "1rem 2rem 1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              style={{
                background: "none",
                border: "none",
                color: "#d4d4d4",
                cursor: "pointer",
                fontSize: "1rem",
                textAlign: "left",
                padding: 0,
              }}
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => scrollToSection("projects")}
            style={{
              marginTop: "0.5rem",
              padding: "0.85rem 1rem",
              borderRadius: "999px",
              border: "none",
              background: "#6366f1",
              color: "#fff",
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            View Projects
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;