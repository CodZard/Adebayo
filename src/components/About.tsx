import React from "react";
import { useInView } from "../hooks/useInView";

const aboutItems = [
  { label: "Location", value: "Lagos, Nigeria" },
  { label: "Focus", value: "Frontend & Full-Stack Development" },
  { label: "Status", value: "Available for Internships & Junior Roles" },
];

const About: React.FC = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
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
        ABOUT ME
      </p>

      <h2
        style={{
          fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
          fontWeight: 700,
          color: "#fff",
          marginBottom: "2rem",
        }}
      >
        Who I Am
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          alignItems: "start",
        }}
      >
        <div>
          <p
            style={{
              color: "#a3a3a3",
              lineHeight: 1.9,
              fontSize: "1rem",
              marginBottom: "1.2rem",
            }}
          >
            I’m Adebayo, a frontend-focused developer with full-stack capabilities,
            building modern web applications with React, TypeScript, and Supabase.
            I focus on creating fast, scalable, and user-focused interfaces backed
            by clean architecture.
          </p>

          <p
            style={{
              color: "#a3a3a3",
              lineHeight: 1.9,
              fontSize: "1rem",
            }}
          >
            I’ve built real-world projects including a SaaS analytics dashboard and
            an AI-powered e-commerce platform, combining frontend performance with
            backend logic and API integrations. I’m actively growing my skills and
            looking for opportunities to contribute to real products.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {aboutItems.map((item) => (
            <div
              key={item.label}
              style={{
                padding: "1rem 1.2rem",
                background: "#111",
                borderRadius: "10px",
                border: "1px solid #1f1f1f",
              }}
            >
              <p
                style={{
                  color: "#6366f1",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  marginBottom: "0.25rem",
                  fontWeight: 600,
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  color: "#e5e5e5",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  lineHeight: 1.6,
                }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;