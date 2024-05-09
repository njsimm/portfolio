import React from "react";
import { Box, Typography, Grid, Button, IconButton } from "@mui/material";
import contactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <Box
      component="section"
      id="Contact"
      className="Contact"
      sx={{
        flexGrow: 1,
        margin: 3,
        mx: 15,
        marginTop: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "250px",
        justifyContent: "center",
      }}
    >
      <Box component="header" className="Contact-header">
        <Typography component="h2" sx={{ textAlign: "center" }}>
          Contact
        </Typography>
      </Box>
      <Grid container spacing={2} justifyContent="center">
        {contactInfo.map((item) => (
          <Grid item key={item.label}>
            <Button
              startIcon={<IconButton>{item.icon}</IconButton>}
              href={item.link}
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
              {item.label}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Contact;
