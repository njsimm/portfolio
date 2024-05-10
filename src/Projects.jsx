import mcmPic from "./assets/pic-mcm.png";
import warblerPic from "./assets/pic-warbler.png";
import eightballPic from "./assets/pic-eightball.png";
import refactorlPic from "./assets/pic-refactor.png";
import portTwoPic from "./assets/pic-port-2.png";

const projects = [
  {
    name: "MarketCap Metrics",
    description:
      "I developed MarketCap Metrics to provide an easy and efficient solution for individuals seeking to calculate the percentage and multiple-fold differences between asset values. This web app specifically utilizes market capitalization data for comparisons.",
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
      "I worked on Warbler, a Twitter clone, focusing on enhancing the platform by fixing bugs, adding new features, and writing tests. This project demonstrates my skills in extending and refining existing codebases, as well as implementing industry-standard practices to improve functionality and reliability.",
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
      "This project required me to refactor a simple React application that fetches jokes from an API. I was tasked with transitioning it from class-based components to functional components using hooks. This work involved updating legacy code to align with modern React practices, demonstrating my capability to enhance and modernize existing applications.",
    image: refactorlPic,
    skillsUsed: ["React", "JavaScript", "Axios"],
    githubLink: "https://github.com/njsimm/refactoring-react-class-vs-function",
    liveLink: null,
  },
  {
    name: "React Magic Eightball",
    description:
      "This is an interactive React application I developed, which allows users to ask questions and receive responses from a digital version of the classic toy, the Magic Eightball. Feel free to ask any questions you may have!",
    image: eightballPic,
    skillsUsed: ["React", "JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/njsimm/react-magic-eightball",
    liveLink: "https://njsimm.github.io/react-magic-eightball/",
  },
  {
    name: "My Portfolio Page",
    description:
      "This website, which you are currently viewing, is a showcase of my skills in developing responsive, modern websites using React and Material-UI. Designed to highlight my projects and technical abilities, it demonstrates my proficiency in creating user-friendly, visually appealing interfaces.",
    image: portTwoPic,

    skillsUsed: ["React", "Material-UI", "JavaScript", "HTML", "CSS"],
    githubLink: "add when complete",
    liveLink: "add when complete",
  },
];

export default projects;
