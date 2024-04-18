import React from "react";
import "./Skills.css";

const Skills = ({ skillsFront, skillsBack, skillsTools, skillsTesting }) => {
  return (
    <section className="Skills">
      <header className="Skills-header">
        <h2>Technical Skills</h2>
      </header>

      <div className="Skills-category">
        <h3>Front-end</h3>
        <ul>
          {skillsFront.map((skill) => {
            return <li key={skill}>{skill}</li>;
          })}
        </ul>
      </div>

      <div className="Skills-category">
        <h3>Back-end</h3>
        <ul>
          {skillsBack.map((skill) => {
            return <li key={skill}>{skill}</li>;
          })}
        </ul>
      </div>

      <div className="Skills-category">
        <h3>Tools</h3>
        <ul>
          {skillsTools.map((tool) => {
            return <li key={tool}>{tool}</li>;
          })}
        </ul>
      </div>

      <div className="Skills-category">
        <h3>Testing</h3>
        <ul>
          {skillsTesting.map((tool) => {
            return <li key={tool}>{tool}</li>;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
