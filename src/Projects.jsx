import mcmPic from "./assets/pic-mcm.png";
import warblerPic from "./assets/pic-warbler.png";
import eightballPic from "./assets/pic-eightball.png";
import refactorlPic from "./assets/pic-refactor.png";
import portTwoPic from "./assets/pic-port-2.png";

const projects = [
  {
    name: "MarketCap Metrics",
    description:
      "MarketCap Metrics is designed to facilitate the comparison of market capitalization between different asset types.",
    image: mcmPic,
    skillsUsed: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "PostgreSQL",
      "Bcrypt",
      "HTML",
      "CSS",
      "JavaScript",
      "Axios",
    ],
    githubLink: "https://github.com/njsimm/MarketCap-Metrics",
    liveLink: null,
  },
  {
    name: "Warbler",
    description:
      "This project involves working on a somewhat-functioning Twitter clone called Warbler. This project showcases my ability to work with an existing codebase and improve it. The primary objective is to extend the application by fixing bugs, writing tests, and adding new features.",
    image: warblerPic,
    skillsUsed: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "PostgreSQL",
      "Bcrypt",
      "HTML",
    ],
    githubLink: "https://github.com/njsimm/Warbler-Springboard",
    liveLink: null,
  },
  {
    name: "React Refactor: Class vs Functional Components",
    description:
      "This project involves refactoring a React application from using class based components to using functional components. This project showcases my ability to update legacy code to use modern best practices.",
    image: refactorlPic,
    skillsUsed: ["React", "JavaScript", "Axios"],
    githubLink: "https://github.com/njsimm/refactoring-react-class-vs-function",
    liveLink: null,
  },
  {
    name: "React Magic Eightball",
    description:
      "This is a simple React app that simulates a magic eightball. Ask it any questions you have! ",
    image: eightballPic,
    skillsUsed: ["React", "JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/njsimm/react-magic-eightball",
    liveLink: "https://njsimm.github.io/react-magic-eightball/",
  },
  {
    name: "My Portfolio Page",
    description:
      "The website you are currently viewing! This project showcases my ability to create a responsive, modern website using React.",
    image: portTwoPic,

    skillsUsed: ["React", "Material-UI", "JavaScript", "HTML", "CSS"],
    githubLink: "add when complete",
    liveLink: "add when complete",
  },
];

export default projects;
