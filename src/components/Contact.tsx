import React from "react";
import { useInView } from "../hooks/useInView";

const Contact: React.FC = () => {
  const { ref, inView } = useInView();

  const socials = [
    { label: "GitHub", url: "https://github.com/CodZard", icon: "⌥" },
    { label: "Twitter", url: "https://x.com/CodeZard_SMT", icon: "𝕏" },
    //{ label: "LinkedIn", url: "https://linkedin.com/", icon: "in" },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "6rem 2rem",
        background: "#0d0d0d",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.7s ease",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ color: "#6366f1", fontSize: "0.85rem", letterSpacing: "0.2em", fontWeight: 600, marginBottom: "0.5rem" }}>
          GET IN TOUCH
        </p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "#fff", marginBottom: "1rem" }}>
          Let's Work Together
        </h2>
        <p style={{ color: "#737373", lineHeight: 1.8, marginBottom: "2.5rem", fontSize: "1rem" }}>
          Available for freelance work and collaborations. If you have a project in mind and are looking for a skilled frontend developer, let's connect.
        </p>
        <a
          href="mailto:akinkumi181@gmail.com"
          style={{
            display: "inline-block", padding: "0.9rem 2.5rem",
            background: "#6366f1", color: "#fff", borderRadius: "6px",
            textDecoration: "none", fontWeight: 600, fontSize: "0.95rem",
            transition: "background 0.2s", marginBottom: "3rem",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#4f46e5")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#6366f1")}
        >
          Say Hello ✉️
        </a>
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "44px", height: "44px", display: "flex", alignItems: "center",
                justifyContent: "center", background: "#111", border: "1px solid #1f1f1f",
                borderRadius: "8px", color: "#a3a3a3", textDecoration: "none",
                fontSize: "0.85rem", fontWeight: 700, transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#6366f1"; e.currentTarget.style.color = "#6366f1"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1f1f1f"; e.currentTarget.style.color = "#a3a3a3"; }}
              title={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
        <p style={{ color: "#404040", fontSize: "0.8rem", marginTop: "4rem" }}>
          Built by Adebayo · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
};

export default Contact;
