import "./App.css";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Skills from "./Skills";

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
        <Skills
          skillsFront={["placeholder", "placeholder"]}
          skillsBack={["placeholder", "placeholder"]}
          skillsTools={["placeholder", "placeholder"]}
          skillsTesting={["placeholder", "placeholder"]}
        />
      </main>
    </div>
  );
}

export default App;
