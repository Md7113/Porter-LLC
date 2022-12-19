import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import logo from './logo_porter.png';

function Header() {
    return(
        <header className="header_container">
			<Link to="/" className="logo_link">
				<img
					className="logo_img"
					src={logo}
					alt="Porter logo"
				/>
			</Link>
			<nav className="nav_container">
				<ul className="navbar_nav">
					<Navbar/>
				</ul>
			</nav>
		</header>
    )

}

export default Header;