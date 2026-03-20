import React from "react";
import { useInView } from "../hooks/useInView";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "MetricFlow",
    description:
      "A full-stack SaaS analytics dashboard for tracking revenue, sales, and user metrics with secure authentication, real-time data updates, and chart-based reporting.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Supabase"],
    link: "https://metricfl-ow.netlify.app/",
    github: "https://github.com/CodZard/MetricFlow",
  },
  {
    title: "Volt Store",
    description: "AI-powered fashion assistant that generates complete outfit recommendations using real-time product data. Includes authentication, dynamic database queries, and a custom AI backend.",
    tech: ["React", "TypeScript", "Node.js", "Express.js", "Supabase", "Groq API"],
    link: "https://voltst-ore.netlify.app/",
    github: "https://github.com/CodZard/volt-store",
  },
  {
    title: "Sendly Landing Page",
    description:
      "A modern SaaS landing page for an email marketing product with responsive design, pricing sections, and dark/light mode support.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://send-ly.netlify.app/",
    github: "https://github.com/CodZard/sendly",
  },
];

const Projects: React.FC = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: "6rem 2rem",
        maxWidth: "1000px",
        margin: "0 auto",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.7s ease",
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
        SELECTED PROJECTS
      </p>

      <h2
        style={{
          fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
          fontWeight: 700,
          color: "#fff",
          marginBottom: "1rem",
        }}
      >
        Things I’ve Built
      </h2>

      <p
        style={{
          color: "#a3a3a3",
          lineHeight: 1.8,
          fontSize: "1rem",
          maxWidth: "680px",
          marginBottom: "3rem",
        }}
      >
        A selection of frontend and full-stack projects focused on product design,
        real-world functionality, and API-driven experiences.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {projects.map((project, i) => (
          <div
            key={project.title}
            style={{
              padding: "1.6rem",
              background: "#111",
              borderRadius: "14px",
              border: "1px solid #1f1f1f",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              transition: `all 0.5s ease ${i * 0.1}s`,
              display: "flex",
              flexDirection: "column",
              minHeight: "100%",
            }}
          >
            <h3
              style={{
                color: "#fff",
                fontWeight: 700,
                fontSize: "1.1rem",
                marginBottom: "0.9rem",
              }}
            >
              {project.title}
            </h3>

            <p
              style={{
                color: "#9ca3af",
                fontSize: "0.95rem",
                lineHeight: 1.75,
                marginBottom: "1.2rem",
              }}
            >
              {project.description}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.55rem",
                marginBottom: "1.5rem",
              }}
            >
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: "0.38rem 0.75rem",
                    background: "#18181b",
                    color: "#d4d4d8",
                    border: "1px solid #27272a",
                    borderRadius: "999px",
                    fontSize: "0.78rem",
                    fontWeight: 500,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                marginTop: "auto",
              }}
            >
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#6366f1",
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  Live Demo ↗
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#e5e7eb",
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
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