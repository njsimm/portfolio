import "./App.css";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import SkillsList from "./SkillsList";
import ProjectsList from "./ProjectsList";
import Box from "@mui/material/Box";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar
          links={["About Me", "Skills", "Projects", "Education", "Contact"]}
        />
      </header>
      <main>
        <Box sx={{ mt: 8 }}>
          <AboutMe />
          <SkillsList />
          <ProjectsList />
        </Box>
      </main>
    </div>
  );
}

export default App;
