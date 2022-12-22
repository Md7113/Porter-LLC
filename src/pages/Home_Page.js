import React from 'react';
import '../css/Home.css';
import Carousel from '../components/Carousel';
import '../css/Carousel.css';

const Home_Page = ({handleCurrentProject}) => {
	return (
		<div className="home_page">
			<div className="home_content">
				<h1>BUILD A LEGACY</h1>
				<div className="carousel_container">
					<Carousel  handleCurrentProject= {handleCurrentProject} />
				</div>
			</div>
		</div>
	);
};

export default Home_Page;
