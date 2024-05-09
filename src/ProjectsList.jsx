import React from "react";
import { Typography, Link, Divider, Box, Grid, Paper } from "@mui/material";
import "./ProjectsList.css";
import projects from "./Projects";

const ProjectsList = () => {
  return (
    <section id="Projects" className="ProjectsList">
      <Box
        sx={{ flexGrow: 1, margin: 3, mx: 15, marginTop: 22, paddingTop: 5 }}
      >
        <header className="ProjectsList-header">
          <h2
            style={{
              textAlign: "center",
            }}
          >
            Projects
          </h2>
        </header>

        <Grid container spacing={5}>
          {projects.map((project) => (
            <Grid item xs={12} key={project.name}>
              <Grid container spacing={5}>
                <Grid item md={6} xs={12}>
                  <Paper
                    elevation={5}
                    sx={{
                      padding: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "100%",
                      borderRadius: "16px",
                    }}
                  >
                    <Typography variant="h5">{project.name}</Typography>

                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.name}
                        style={{ width: "100%", height: "auto" }}
                      />
                    )}
                    <Box
                      sx={{
                        marginTop: 2,
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="none"
                      >
                        <Typography
                          color="primary"
                          style={{ cursor: "pointer" }}
                        >
                          GitHub
                        </Typography>
                      </Link>
                      {project.liveLink && (
                        <Link
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          underline="none"
                        >
                          <Typography
                            color="secondary"
                            style={{ cursor: "pointer" }}
                          >
                            Live
                          </Typography>
                        </Link>
                      )}
                    </Box>
                  </Paper>
                </Grid>

                <Grid item md={6} xs={12}>
                  <Box
                    sx={{
                      padding: 2,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="body1" paragraph>
                      {project.description}
                    </Typography>

                    <Typography sx={{ textAlign: "center", marginTop: 0 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: "bold",
                          textAlign: "center",
                          marginBottom: 0,
                        }}
                      >
                        <Divider> Skills Used</Divider>
                      </Typography>
                      {project.skillsUsed.join(" | ")}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default ProjectsList;
