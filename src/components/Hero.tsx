import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 1rem", // 🔥 reduced padding
        maxWidth: "100%", // 🔥 remove hard cap
        margin: "0 auto",
        overflow: "hidden", // 🔥 prevent child overflow
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.8s ease",
      }}
    >
      <div style={{ maxWidth: "900px", width: "100%", margin: "0 auto" }}>
        <p
          style={{
            color: "#6366f1",
            fontSize: "0.9rem",
            letterSpacing: "0.15em",
            marginBottom: "1rem",
            fontWeight: 500,
          }}
        >
          HI, I'M
        </p>

        <h1
          style={{
            fontSize: "clamp(2.2rem, 8vw, 4.5rem)", // 🔥 slightly safer max
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            margin: "0 0 1rem 0",
          }}
        >
          Adebayo
        </h1>

        <h2
          style={{
            fontSize: "clamp(1.1rem, 4vw, 2rem)",
            fontWeight: 400,
            color: "#6b7280",
            margin: "0 0 1.5rem 0",
            lineHeight: 1.5,
            overflowWrap: "anywhere", // 🔥 CRITICAL
          }}
        >
          Frontend Developer • React • TypeScript
        </h2>

        <p
          style={{
            fontSize: "1rem",
            color: "#737373",
            maxWidth: "520px",
            lineHeight: 1.8,
            marginBottom: "2.5rem",
            overflowWrap: "anywhere", // 🔥 prevents push
          }}
        >
          I build scalable web applications and AI-powered products, combining clean frontend architecture with real backend systems and API integrations.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap", // ✅ already good
          }}
        >
          <button
            onClick={() => scrollTo("projects")}
            style={{
              padding: "0.8rem 2rem",
              background: "#6366f1",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "0.95rem",
              fontWeight: 600,
            }}
          >
            View My Work
          </button>

          <button
            onClick={() => scrollTo("contact")}
            style={{
              padding: "0.8rem 2rem",
              background: "transparent",
              color: "#e5e5e5",
              border: "1px solid #333",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "0.95rem",
              fontWeight: 600,
            }}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;