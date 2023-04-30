import React from 'react';
import '../css/home/Home.css';
import Carousel from '../components/Carousel';
import '../css/components/Carousel.css';
import HomeSections from '../components/home/HomeSections';

const HomePage = ({handleCurrentProject}) => {
	return (
		<>
		<div className="homePage">
			<div className="homeContent">
				<h1 className = "title1">build a legacy</h1>
				<div className="carouselContainer">
					<Carousel  handleCurrentProject= {handleCurrentProject} />
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
				<path
					d="M44.0009 3.86481L22.2785 21.9082L0.556091 3.86481L4.41182 0.66211L22.2785 15.5028L40.1452 0.66211L44.0009 3.86481Z"
				/>
			</svg>
		</div>
		<HomeSections/>
		</>
	);
};

export default HomePage;
