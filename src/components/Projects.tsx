import React, { useState } from "react";
import { useInView } from "../hooks/useInView";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
}

// ✅ TO ADD A NEW PROJECT — just add a new object below, copy the format
const projects: Project[] = [
  {
    title: "Zard Smart Chart",
    description: "A trading discipline platform built for Smart Money Concepts forex traders. Features AI-powered analysis, community posts, and market sentiment tools.",
    tech: ["React", "Supabase", "TypeScript", "Gemini AI"],
    link: "https://zardchart.lovable.app",
    github: "",
  },
  {
    title: "LuxeZard",
    description: "A fashion and beauty dropshipping store targeting US/UK markets. Clean minimal aesthetic with seamless checkout and product management.",
    tech: ["React", "Tailwind", "Flutterwave"],
    link: "",
    github: "",
  },
  // ADD YOUR NEXT PROJECT HERE 👇
  // {
  //   title: "Project Name",
  //   description: "What it does",
  //   tech: ["React", "Node.js"],
  //   link: "https://...",
  //   github: "https://...",
  // },
];

const Projects: React.FC = () => {
  const { ref, inView } = useInView();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="projects"
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
        WHAT I'VE BUILT
      </p>
      <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "#fff", marginBottom: "3rem" }}>
        Projects
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
        {projects.map((project, i) => (
          <div
            key={project.title}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              padding: "1.8rem",
              background: "#111",
              borderRadius: "12px",
              border: `1px solid ${hovered === i ? "#6366f1" : "#1f1f1f"}`,
              transition: "all 0.3s ease",
              transform: hovered === i ? "translateY(-4px)" : "translateY(0)",
              cursor: "default",
              opacity: inView ? 1 : 0,
              transitionDelay: `${i * 0.1}s`,
            }}
          >
            <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.8rem" }}>
              {project.title}
            </h3>
            <p style={{ color: "#737373", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
              {project.description}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {project.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    padding: "0.25rem 0.7rem", background: "#1a1a2e",
                    color: "#6366f1", borderRadius: "100px", fontSize: "0.75rem", fontWeight: 500,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#6366f1", fontSize: "0.85rem", textDecoration: "none", fontWeight: 600 }}
                >
                  Live ↗
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#a3a3a3", fontSize: "0.85rem", textDecoration: "none" }}
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
