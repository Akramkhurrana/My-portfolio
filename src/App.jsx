import "./App.css";
import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;