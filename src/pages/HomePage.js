import React from 'react';
import '../css/home/Home.css';
import Carousel from '../components/Carousel';
import '../css/components/Carousel.css';
import HomeHero from '../components/home/HomeHero';

const HomePage = ({handleCurrentProject}) => {
	return (
		<>
		<div className="home_page">
			<div className="home_content">
				<h1 className = "title1">build a legacy</h1>
				<div className="carousel_container">
					<Carousel  handleCurrentProject= {handleCurrentProject} />
				</div>
		
			</div>
			<svg
				width="44"
				height="22"
				viewBox="0 0 44 22"
				fill="none"
				className="downArrow"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M44.0009 3.86481L22.2785 21.9082L0.556091 3.86481L4.41182 0.66211L22.2785 15.5028L40.1452 0.66211L44.0009 3.86481Z"
					fill="#ff4622"
				/>
			</svg>
		</div>
		<HomeHero/>
		</>
	);
};

export default HomePage;
