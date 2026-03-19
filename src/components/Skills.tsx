import React from "react";
import { useInView } from "../hooks/useInView";

interface SkillGroup {
  title: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    title: "Database & BaaS",
    items: ["Supabase"],
  },
  {
    title: "APIs & AI",
    items: ["REST APIs", "OpenAI API", "Groq API"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Netlify", "Vite", "VS Code", "Render"],
  },
];

const Skills: React.FC = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: "6rem 2rem",
        background: "#0d0d0d",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.7s ease",
      }}
    >
      <div style={{ maxWidth: "950px", margin: "0 auto" }}>
        <p
          style={{
            color: "#6366f1",
            fontSize: "0.85rem",
            letterSpacing: "0.2em",
            fontWeight: 600,
            marginBottom: "0.5rem",
          }}
        >
          TECH STACK
        </p>

        <h2
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "1rem",
          }}
        >
          Technologies I Use
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
          Technologies I use to build responsive interfaces, full-stack applications,
          and AI-powered products.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              style={{
                padding: "1.5rem",
                background: "#111",
                borderRadius: "12px",
                border: "1px solid #1f1f1f",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.5s ease ${i * 0.1}s`,
              }}
            >
              <h3
                style={{
                  color: "#fff",
                  fontSize: "1rem",
                  fontWeight: 600,
                  marginBottom: "1rem",
                }}
              >
                {group.title}
              </h3>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.7rem",
                }}
              >
                {group.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      padding: "0.55rem 0.85rem",
                      borderRadius: "999px",
                      background: "#181818",
                      border: "1px solid #2a2a2a",
                      color: "#d4d4d4",
                      fontSize: "0.88rem",
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;