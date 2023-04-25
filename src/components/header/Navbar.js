import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<Link to="/about" className="nav_link">
				About Us
			</Link>
			<Link to="/projects" className="nav_link">
				Projects
			</Link>
			<Link to="/services" className="nav_link">
				Services
			</Link>
			<Link to="/team" className="nav_link">
				Our Team
			</Link>
			<Link to="/contact" className="nav_link">
				Contact
			</Link>
		</>
	);
};

export default Navbar;
