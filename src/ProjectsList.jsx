import React from "react";
import "./ProjectsList.css";
import projects from "./Projects";

const ProjectsList = () => {
  return (
    <section className="ProjectsList">
      <header className="ProjectsList-header">
        <h2>Projects</h2>
      </header>

      {projects.map((project) => {
        return (
          <div key={project.name}>
            <h3>{project.name}</h3>
            <div>
              <p>{project.description}</p>
            </div>
            {/* <img src={project.image} alt={project.name} /> */}
            {/* <video /> */}
            <ul>
              {project.skillsUsed.map((skill) => {
                return <li key={skill}>{skill}</li>;
              })}
            </ul>
            <div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProjectsList;
