import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import NavBar from './Navbar';
// import logo from '../../images/logo_porter_black.svg';
import logoVideo from '../../images/porter-cropped.mp4';
import '../../css/header/Header.css'

function Header() {
	const [dropDown, setDropdown] = useState(false);
	const [activeState, setActiveState] = useState('');
	const handleDropDown = () => {
		setDropdown((dropDown) => !dropDown);
		if (activeState === 'active') {
			setActiveState('');
		} else {
			setActiveState('active');
		}
	};
    return(
        <header className="header_container">
			<Link to="/" className="logo_link">
				<div className="logoVid">
				<video src={logoVideo} autoPlay muted preload="auto"/>
				</div>
				{/* <img
					className="logo_img"
					src={logo}
					alt="Porter logo"
				/> */}
			</Link>
			<nav className="nav_container">
				<ul className="navbar_nav">
					<NavBar/>
				</ul>
			</nav>
			<div className={`hamburger nav_container ${activeState}`} onClick={handleDropDown}>
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
					{dropDown ? (
						<ul className="navbarDropdown">
							<NavBar	/>
						</ul>
					) : (
						<span></span>
					)}
				</div>
		</header>
    )

}

export default Header;