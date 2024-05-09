import React from "react";
import { Typography, Button, Divider, Box, Grid, Paper } from "@mui/material";
import projects from "./Projects";

const ProjectsList = () => {
  return (
    <Box
      component="section"
      id="Projects"
      className="ProjectsList"
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
                    <Button
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "#000000",
                        "&:hover": {
                          backgroundColor: "#f0f0f0",
                          color: "#333",
                        },
                      }}
                    >
                      GitHub
                    </Button>
                    {project.liveLink && (
                      <Button
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: "#000000",
                          "&:hover": {
                            backgroundColor: "#f0f0f0",
                            color: "#333",
                          },
                        }}
                      >
                        Live
                      </Button>
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

                  <Typography
                    component="div"
                    sx={{ textAlign: "center", marginTop: 0 }}
                  >
                    <Typography
                      component="div"
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
  );
};

export default ProjectsList;
