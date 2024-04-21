import React from "react";
import "./SkillsList.css";

const SkillList = ({ skills }) => {
  return (
    <section className="SkillList">
      <header className="SkillList-header">
        <h2>Technical Skills</h2>
      </header>

      {skills.map((skillObj) => {
        return (
          <div key={skillObj.type}>
            <h3>{skillObj.type}</h3>
            <ul>
              {skillObj.skills.map((skill) => {
                return <li key={skill}>{skill}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default SkillList;
