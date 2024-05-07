import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import skills from "./Skills";

const SkillList = () => {
  return (
    <section id="Skills" className="SkillsList">
      <Box sx={{ flexGrow: 1, margin: 3, mx: 15 }}>
        <header className="SkillsList-header">
          <h2
            style={{
              textAlign: "center",
            }}
          >
            Technical Skills
          </h2>
        </header>

        <Grid container spacing={2} alignItems="stretch">
          {skills.map((skillObj) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={skillObj.type}>
                <Box
                  sx={{
                    border: 1,
                    padding: 0,
                    borderRadius: "16px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <h3
                    className="SkillsList-type-header"
                    style={{ marginBottom: 0 }}
                  >
                    {skillObj.type}
                  </h3>

                  <ul
                    className="SkillsList-ul"
                    style={{
                      width: "100%",
                      padding: 0,
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginTop: 0,
                    }}
                  >
                    {skillObj.skills.map((skill) => {
                      return (
                        <li
                          key={skill}
                          className="SkillsList-li"
                          style={{ textAlign: "center", width: "100%" }}
                        >
                          {skill}
                        </li>
                      );
                    })}
                  </ul>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </section>
  );
};

export default SkillList;
