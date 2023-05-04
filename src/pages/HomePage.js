import React from 'react';
import '../css/home/HomeHero.css';
import Carousel from '../components/Carousel';
import '../css/components/Carousel.css';
import HomeSections from '../components/home/HomeSections';
import homeHero from '../images/Porter_LinkedIn_Cover_Black.png';

const HomePage = ({ handleCurrentProject }) => {
	return (
		<>
			<div className="homePage">
				<div className="homeHeroContainer">
					<img
						src={homeHero}
						className="homeHeroImage"
						alt="black background with zigzag orange lines across the bottom right corner"
					/>
					<div className="homeHeroContent">
						<h1>BUILD A LEGACY</h1>
						<div className="carouselContainer">
							<Carousel handleCurrentProject={handleCurrentProject} />
						</div>
					</div>
				</div>
				<svg
					width="44"
					height="22"
					viewBox="0 0 44 22"
					fill="#ff4622"
					className="downArrow"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M44.0009 3.86481L22.2785 21.9082L0.556091 3.86481L4.41182 0.66211L22.2785 15.5028L40.1452 0.66211L44.0009 3.86481Z" />
				</svg>
			</div>
			<div className="carouselPhone">
				<Carousel handleCurrentProject={handleCurrentProject} />
			</div>
			<HomeSections />
		</>
	);
};

export default HomePage;
