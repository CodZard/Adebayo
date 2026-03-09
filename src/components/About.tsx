import React from "react";
import { useInView } from "../hooks/useInView";

const About: React.FC = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "6rem 2rem",
        maxWidth: "900px",
        margin: "0 auto",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.7s ease",
      }}
    >
      <p style={{ color: "#6366f1", fontSize: "0.85rem", letterSpacing: "0.2em", fontWeight: 600, marginBottom: "0.5rem" }}>
        ABOUT ME
      </p>
      <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "#fff", marginBottom: "2rem" }}>
        Who I Am
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
        <div>
          <p style={{ color: "#a3a3a3", lineHeight: 1.9, fontSize: "1rem", marginBottom: "1.2rem" }}>
  I'm Adebayo, a frontend developer based in Nigeria with a solid touch of backend experience using Supabase. I build modern, fast and functional web applications with a strong focus on user experience and clean code.
</p>
          <p style={{ color: "#a3a3a3", lineHeight: 1.9, fontSize: "1rem" }}>
  I work independently on multiple self-initiated projects, turning ideas into real products. From crafting pixel-perfect UIs to wiring up databases and authentication and i get it done.
</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            { label: "Location", value: "Nigeria 🇳🇬" },
            { label: "Focus", value: "Frontend Development" },
            { label: "Available", value: "Open to opportunities" },
          ].map((item) => (
            <div key={item.label} style={{ padding: "1rem 1.2rem", background: "#111", borderRadius: "8px", border: "1px solid #1f1f1f" }}>
              <p style={{ color: "#6366f1", fontSize: "0.75rem", letterSpacing: "0.1em", marginBottom: "0.2rem" }}>{item.label}</p>
              <p style={{ color: "#e5e5e5", fontSize: "0.95rem", fontWeight: 500 }}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
