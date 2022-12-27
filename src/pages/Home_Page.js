import React from 'react';
import '../css/Home.css';
import Carousel from '../components/Carousel';
import '../css/Carousel.css';
import HomeInfo from '../components/Home_Info';

const Home_Page = ({handleCurrentProject}) => {
	return (
		<>
		<div className="home_page">
			<div className="home_content">
				<h1 className = "title1">build a legacy</h1>
				<div className="carousel_container">
					<Carousel  handleCurrentProject= {handleCurrentProject} />
				</div>
			</div>
		</div>
		<HomeInfo/>
		</>
	);
};

export default Home_Page;
