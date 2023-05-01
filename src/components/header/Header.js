import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './Navbar';
import logo from '../../images/logo_porter_black.svg';
import logoVideo from '../../images/Porter_Logo_Video.mp4';
import '../../css/header/Header.css';

function Header() {
	const [dropDown, setDropdown] = useState(false);
	const [activeState, setActiveState] = useState('');
	const [endVideo, setEndVideo] = useState('logoVid');
	const [showLogo, setShowLogo] = useState('displayNone');

	const handleVideoEnd = () => {
		if (endVideo === 'logoVid') {
			setEndVideo('displayNone');
			setShowLogo('logoImg');
		} else {
			setEndVideo('logoVid');
			setShowLogo('displayNone');
		}
	};

	const handleDropDown = () => {
		setDropdown((dropDown) => !dropDown);
		if (activeState === 'active') {
			setActiveState('');
		} else {
			setActiveState('active');
		}
	};
	return (
		<header className="headerContainer">
			<Link to="/" className="logoLink">
				<div className={`${endVideo}`}>
					<video
						src={logoVideo}
						onEnded={handleVideoEnd}
						autoPlay
						muted
						preload="auto"
					/>
				</div>
				<img className={`${showLogo}`} src={logo} alt="Porter logo" />
			</Link>
			<nav className="navContainer">
				<ul className="navbarNav">
					<NavBar />
				</ul>
			</nav>
			<div
				className={`hamburger navContainer ${activeState}`}
				onClick={handleDropDown}
			>
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
				{dropDown ? (
					<ul className="navbarDropdown">
						<NavBar />
					</ul>
				) : (
					<span></span>
				)}
			</div>
		</header>
	);
}

export default Header;
