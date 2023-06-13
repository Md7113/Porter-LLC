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
import Footer from './components/Footer';

function App() {
	
	return (
		<Router>
			<Header />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route path="/about" element={<About />} />
				<Route 
					path="/team" 
					element={<Team />} 
					/>
				<Route 
					path="/team/:id" 
					element={<Team_handle />} 
					/>
				<Route
					path="/projects"
					element={<Projects />}
				/>
				<Route path="/services" element={<Services />} />
				<Route path="/contact" element={<Contact />} />
				<Route
					path="/project/:id"
					element={<Project />} 
				/>
				<Route render={() => <h1 className="display-2">Wrong page!</h1>} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
