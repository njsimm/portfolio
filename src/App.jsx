import "./App.css";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import SkillsList from "./SkillsList";
import skills from "./Skills";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar
          links={["About Me", "Skills", "Projects", "Education", "Contact"]}
        />
      </header>
      <main>
        <AboutMe />
        <SkillsList skills={skills} />
      </main>
    </div>
  );
}

export default App;
