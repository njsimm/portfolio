import React from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";
import picture from "./assets/pic-port.png";

const AboutMe = () => {
  return (
    <section id="AboutMe" className="AboutMe">
      <Box sx={{ flexGrow: 1, margin: 3, mx: 15, marginTop: 20 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <img
              src={picture}
              alt="Nicolas Simmonds"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "16px",
                boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.3)",
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
            <Typography variant="body1" paragraph marginTop="1rem">
              I am a full stack developer with experience using the JavaScript
              and Python programming languages, RDBMSystems such as PostgreSQL,
              and the technologies in their respective ecosystems.
            </Typography>
            <Typography variant="body1" paragraph>
              My time in software engineering has provided me with experience in
              refactoring existing codebases to new modern standards, developing
              and implementing new features, creating and maintaining RESTful
              APIs, developing database schemas, writing unit tests and
              integration tests, and debugging.{" "}
            </Typography>
            <Typography variant="body1" paragraph>
              As someone who worked as a physical therapist prior to
              transitioning into software engineering, I bring a unique
              perspective to team collaboration and interprofessional
              communication.
            </Typography>
            <Typography variant="body1" paragraph>
              My prior experiences enable me to excel in both working
              effectively with team members from various backgrounds and
              disciplines, as well as communicate effectively with stakeholders
              to ensure that the outcome meets the needs of the client.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default AboutMe;
