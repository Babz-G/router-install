import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Work from "./Pages/Work";
import Resume from "./Pages/Resume";
import Skills from "./Pages/Skills";
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/work" element={<Work />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
