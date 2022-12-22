import "./css/App.css";
import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home_Page";
import Header from "./components/Header";
import About from "./pages/About_Us";
import Project from "./components/Project";

function App() {
  const [currentProject, setCurrentProject] = useState({});
	const handleCurrentProject = (project) => setCurrentProject(project);

  return (
    <Router>
      <Header />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home handleCurrentProject = {handleCurrentProject}/>} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/project" element={<Project currentProject= {currentProject}/>} />
        <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
