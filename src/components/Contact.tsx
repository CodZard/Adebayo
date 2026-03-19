import React from "react";
import { useInView } from "../hooks/useInView";

const socials = [
  { label: "GitHub", url: "https://github.com/CodZard", icon: "GH" },
  { label: "X", url: "https://x.com/CodeZard_SMT", icon: "𝕏" },
];

const Contact: React.FC = () => {
  const { ref, inView } = useInView();

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
      <div
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#6366f1",
            fontSize: "0.85rem",
            letterSpacing: "0.2em",
            fontWeight: 600,
            marginBottom: "0.5rem",
          }}
        >
          GET IN TOUCH
        </p>

        <h2
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "1rem",
          }}
        >
          Let’s Build Something Solid
        </h2>

        <p
          style={{
            color: "#a3a3a3",
            lineHeight: 1.8,
            marginBottom: "2.5rem",
            fontSize: "1rem",
            maxWidth: "560px",
            marginInline: "auto",
          }}
        >
          I’m open to internships, junior developer roles, and project opportunities
          where I can contribute to real products, keep improving, and work with
          modern web technologies.
        </p>

        <a
          href="mailto:codezardsmt@gmail.com"
          style={{
            display: "inline-block",
            padding: "0.95rem 2.4rem",
            background: "#6366f1",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.95rem",
            transition: "opacity 0.2s ease",
            marginBottom: "3rem",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.9";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
        >
          Email Me
        </a>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              title={social.label}
              style={{
                minWidth: "52px",
                height: "46px",
                padding: "0 1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#111",
                border: "1px solid #1f1f1f",
                borderRadius: "10px",
                color: "#d4d4d4",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: 700,
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#6366f1";
                e.currentTarget.style.color = "#6366f1";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#1f1f1f";
                e.currentTarget.style.color = "#d4d4d4";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <p
          style={{
            color: "#525252",
            fontSize: "0.82rem",
            marginTop: "4rem",
            lineHeight: 1.6,
          }}
        >
          Built by Adebayo Olayiwola · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
};

export default Contact;