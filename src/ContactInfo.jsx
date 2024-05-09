import React from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import resumePdf from "./assets/Resume_Nicolas_Simmonds.pdf";

const contactInfo = [
  {
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/njsimm/",
  },
  { icon: <GitHubIcon />, label: "GitHub", link: "https://github.com/njsimm" },
  {
    icon: <EmailIcon />,
    label: "Email",
    link: "mailto:simmonds.nicolas@gmail.com",
  },
  { icon: <PictureAsPdfIcon />, label: "Resume", link: resumePdf },
];

export default contactInfo;
