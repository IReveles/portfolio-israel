import React from "react";
import "./Project.css";
import Image from "../assets/img.JPEG";
import { SiGithub } from "react-icons/si";

export default function Project({
  projectImg,
  title,
  description,
  techStack,
  repo,
  frontend,
  backend,
}) {
  return (
    <div className="card">
      <div className="image">
        <img src={projectImg} alt={`${title} screenshot`} />
      </div>

      <h2>{title}</h2>

      <p>{description}</p>

      <div className="stack">
        {techStack.map((tech, index) => (
          <span key={index} className="tech-chip">
            {tech}
          </span>
        ))}
      </div>

      <div className="repos">
        {repo && (
          <a
            href={repo}
            className="repo-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub
              size={18}
              style={{ marginRight: "6px", verticalAlign: "middle" }}
            />
            Repository
          </a>
        )}

        {!repo && frontend && backend && (
          <>
            <a href={frontend} target="_blank" rel="noopener noreferrer">
              <SiGithub
                size={18}
                style={{ marginRight: "6px", verticalAlign: "middle" }}
              />
              Frontend
            </a>
            <a href={backend} target="_blank" rel="noopener noreferrer">
              <SiGithub
                size={18}
                style={{ marginRight: "6px", verticalAlign: "middle" }}
              />
              Backend
            </a>
          </>
        )}
      </div>
    </div>
  );
}
