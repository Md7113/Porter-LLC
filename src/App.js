import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Header from './components/header/Header';
import About from './pages/AboutUs';
import Contact from './pages/Contact';
import Project from './components/project/Project';

function App() {
	const [currentProject, setCurrentProject] = useState({});
	const handleCurrentProject = (project) => setCurrentProject(project);

	return (
		<Router>
			<Header />
			{/* <Navbar /> */}
			<Routes>
				<Route
					path="/"
					element={<Home handleCurrentProject={handleCurrentProject} />}
				/>
				<Route path="/about" element={<About />} />
				{/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/contact" element={<Contact />} />
				<Route
					path="/project"
					element={<Project currentProject={currentProject} />}
				/>
				<Route render={() => <h1 className="display-2">Wrong page!</h1>} />
			</Routes>
		</Router>
	);
}

export default App;
