import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<Link to="/about" className="navLink">
				ABOUT US
			</Link>
			<Link to="/projects" className="navLink">
				PROJECTS
			</Link>
			<Link to="/services" className="navLink">
				SERVICES
			</Link>
			<Link to="/team" className="navLink">
				OUR TEAM
			</Link>
			<Link to="/contact" className="navLink">
				CONTACT
			</Link>
		</>
	);
};

export default Navbar;
