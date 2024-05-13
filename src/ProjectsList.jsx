import React from "react";
import {
  Typography,
  Button,
  Divider,
  Box,
  Grid,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import projects from "./Projects";

const ProjectsList = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="section"
      id="Projects"
      className="ProjectsList"
      sx={{
        flexGrow: 1,
        margin: 3,
        mx: isSmallScreen ? 3 : 15,
        marginTop: 22,
        paddingTop: 5,
      }}
    >
      <Box component="header" className="ProjectsList-header">
        <Typography
          component="h2"
          variant="h4"
          sx={{ textAlign: "center", marginBottom: 3 }}
        >
          Projects
        </Typography>
      </Box>

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
                  <Typography
                    variant="h6"
                    sx={{ marginBottom: 2, fontWeight: 500 }}
                  >
                    {project.name}
                  </Typography>

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
                        fontWeight: "medium",
                        textAlign: "center",
                        marginBottom: 0,
                      }}
                    >
                      <Divider> Skills Used</Divider>
                    </Typography>
                    {project.skillsUsed.join(" • ")}
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
