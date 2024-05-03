import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="AboutMe">
      <header>
        <h1 className="AboutMe-Name">Nicolas Simmonds</h1>
        <p className="AboutMe-details">
          Software Engineer | Full Stack Developer
        </p>
      </header>

      <div className="AboutMe-paragraph-container">
        <p className="AboutMe-paragraph">
          Hello, my name is Nick! I am a full stack developer with experience
          using the JavaScript and Python programming languages, RDBMSystems
          such as PostgreSQL, and the technologies in their respective
          ecosystems. My time in software engineering has provided me with
          experience in working hands-on with existing codebases, refactoring
          legacy code to new modern standards, devloping and implementing new
          features, creating and maintaining RESTful APIs, developing database
          schemas, writing unit tests and integration tests, and debugging.{" "}
        </p>

        <p>
          I genuinely enjoy learning new technologies and am always looking for
          ways to improve my skills. As someone who worked as a physical
          therapist prior to transitioning into software engineering, I bring a
          unique perspective to team collaboration and interprofessional
          communication. This has allowed me to work effectively with team
          members from various backgrounds and disciplines, and to communicate
          effectively with stakeholders to ensure that the outcome meets the
          needs of the client.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
