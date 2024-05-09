import resumePdf from "./assets/Resume_Nicolas_Simmonds.pdf";

const navbarLinks = [
  { name: "About Me", path: "AboutMe", type: "internal" },
  { name: "Skills", path: "Skills", type: "internal" },
  { name: "Projects", path: "Projects", type: "internal" },
  { name: "Contact", path: "Contact", type: "internal" },
  { name: "Resume", path: resumePdf, type: "external" },
];

export default navbarLinks;
