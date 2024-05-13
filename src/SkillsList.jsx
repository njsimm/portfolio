import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import skills from "./Skills";

const SkillList = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="section"
      id="Skills"
      className="SkillsList"
      sx={{
        flexGrow: 1,
        margin: 3,
        mx: isSmallScreen ? 3 : 15,
        marginTop: 20,
        paddingTop: 5,
      }}
    >
      <Box component="header" className="SkillsList-header">
        <Typography
          component="h2"
          variant="h4"
          sx={{ textAlign: "center", marginBottom: 3 }}
        >
          Technical Skills
        </Typography>
      </Box>

      <Grid container spacing={2} alignItems="stretch">
        {skills.map((skillObj) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={skillObj.type}>
              <Paper
                elevation={5}
                sx={{
                  padding: 0,
                  borderRadius: "16px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  component="h3"
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    paddingTop: 1,
                    fontWeight: "bold",
                  }}
                >
                  {skillObj.type}
                </Typography>
                <List
                  sx={{
                    width: "100%",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: 0,
                  }}
                >
                  {skillObj.skills.map((skill) => {
                    return (
                      <ListItem
                        key={skill}
                        className="SkillsList-li"
                        sx={{
                          textAlign: "center",
                          width: "100%",
                          paddingBottom: 0.5,
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{ textAlign: "center" }}
                        >
                          {skill}
                        </Typography>
                      </ListItem>
                    );
                  })}
                </List>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default SkillList;
