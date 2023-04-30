import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<Link to="/about" className="navLink">
				About Us
			</Link>
			<Link to="/projects" className="navLink">
				Projects
			</Link>
			<Link to="/services" className="navLink">
				Services
			</Link>
			<Link to="/team" className="navLink">
				Our Team
			</Link>
			<Link to="/contact" className="navLink">
				Contact
			</Link>
		</>
	);
};

export default Navbar;
