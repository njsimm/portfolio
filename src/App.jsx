import "./App.css";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import SkillsList from "./SkillsList";
import ProjectsList from "./ProjectsList";
import Contact from "./Contact";
import Box from "@mui/material/Box";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar links={["About Me", "Skills", "Projects", "Contact"]} />
      </header>
      <Box component="main" sx={{ mt: 10 }}>
        <AboutMe />
        <SkillsList />
        <ProjectsList />
        <Contact />
      </Box>
    </div>
  );
}

export default App;
