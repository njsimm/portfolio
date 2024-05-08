import React from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";
import picture from "./assets/pic-port.png";

const AboutMe = () => {
  return (
    <section id="AboutMe" className="AboutMe">
      <Box sx={{ flexGrow: 1, margin: 3, mx: 15 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <img
              src={picture}
              alt="Nicolas Simmonds"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={8}>
            <Typography
              variant="h4"
              component="h1"
              style={{ marginBottom: 0, lineHeight: "1.1" }}
            >
              Nicolas Simmonds
            </Typography>
            <Typography
              variant="subtitle1"
              component="h2"
              style={{ color: "gray", marginTop: 0, lineHeight: "1.1" }}
            >
              Software Engineer | Full Stack Developer
            </Typography>
            <Divider />
            <Typography variant="body1" paragraph marginTop=".5rem">
              Hello, my name is Nick! I am a full stack developer with
              experience using the JavaScript and Python programming languages,
              RDBMSystems such as PostgreSQL, and the technologies in their
              respective ecosystems. My time in software engineering has
              provided me with experience in working hands-on with existing
              codebases, refactoring legacy code to new modern standards,
              developing and implementing new features, creating and maintaining
              RESTful APIs, developing database schemas, writing unit tests and
              integration tests, and debugging.
            </Typography>
            <Typography variant="body1" paragraph>
              I genuinely enjoy learning new technologies and am always looking
              for ways to improve my skills. As someone who worked as a physical
              therapist prior to transitioning into software engineering, I
              bring a unique perspective to team collaboration and
              interprofessional communication. This has allowed me to work
              effectively with team members from various backgrounds and
              disciplines, and to communicate effectively with stakeholders to
              ensure that the outcome meets the needs of the client.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default AboutMe;
