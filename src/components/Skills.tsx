import React from "react";
import { useInView } from "../hooks/useInView";

interface Skill {
  name: string;
  level: number;
  color: string;
}

// ✅ ADD OR REMOVE SKILLS HERE
const skills: Skill[] = [
  { name: "HTML", level: 100, color: "#e34f26" },
  { name: "CSS", level: 95, color: "#264de4" },
  { name: "JavaScript", level: 85, color: "#f7df1e" },
  { name: "React", level: 70, color: "#61dafb" },
  { name: "TypeScript", level: 60, color: "#3178c6" },
  { name: "Node.js", level: 55, color: "#68a063" },
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
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <p style={{ color: "#6366f1", fontSize: "0.85rem", letterSpacing: "0.2em", fontWeight: 600, marginBottom: "0.5rem" }}>
          WHAT I KNOW
        </p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "#fff", marginBottom: "3rem" }}>
          My Skills
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              style={{
                padding: "1.5rem",
                background: "#111",
                borderRadius: "10px",
                border: "1px solid #1f1f1f",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.5s ease ${i * 0.1}s`,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.8rem" }}>
                <span style={{ color: "#e5e5e5", fontWeight: 600, fontSize: "0.95rem" }}>{skill.name}</span>
                <span style={{ color: "#6b7280", fontSize: "0.85rem" }}>{skill.level}%</span>
              </div>
              <div style={{ background: "#1f1f1f", borderRadius: "100px", height: "4px", overflow: "hidden" }}>
                <div
                  style={{
                    height: "100%",
                    width: inView ? `${skill.level}%` : "0%",
                    background: skill.color,
                    borderRadius: "100px",
                    transition: `width 1s ease ${i * 0.1 + 0.3}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
