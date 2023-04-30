import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Header from './components/header/Header';
import About from './pages/AboutUs';
import Project from './components/project/Project';
import Team_handle from './components/team/Team';
import Team from './pages/OurTeam';
import Contact from './pages/Contact';
import Projects from './pages/AllProjects';
import Services from './pages/Services';

function App() {
	const [currentProject, setCurrentProject] = useState({});
	const handleCurrentProject = (project) => setCurrentProject(project);

	const [currentTeam, setCurrentTeam] = useState({});
	const handleCurrentTeam = (Team_handle) => setCurrentTeam(Team_handle);

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
				<Route 
					path="/team" 
					element={<Team handleCurrentTeam={handleCurrentTeam}/>} 
					/>
				<Route
					path="/projects"
					element={<Projects handleCurrentProject={handleCurrentProject} />}
				/>
				<Route path="/services" element={<Services />} />
				<Route path="/contact" element={<Contact />} />
				<Route
					path="/project"
					element={<Project currentProject={currentProject} />}
				/>
				<Route
					path="/Bio"
					element={<Team_handle currentTeam={currentTeam} />}
				/>
				<Route render={() => <h1 className="display-2">Wrong page!</h1>} />
			</Routes>
		</Router>
	);
}

export default App;
