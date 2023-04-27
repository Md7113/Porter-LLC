import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProjectCard from './CarouselCard';
import projectFile from '../utils/projectFile';
import rightArrow from '../images/rightArrow.svg';
import leftArrow from '../images/leftArrow.svg';

let projects = projectFile();
export default function MultiCarousel({ handleCurrentProject }) {
	const responsive = {
		desktop: {
			breakpoint: { max: 4000, min: 1024 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 768, min: 0 },
			items: 1,
		},
	};

	projects = projects.filter((project) => project.carousel);

	const CustomButtonGroupAsArrows = ({ next, previous }) => {
		return (
			<div className="carousel_arrows">
				<img
					className="arrows"
					onClick={previous}
					src={leftArrow}
					alt="left arrow"
				/>
				<img
					className="arrows"
					onClick={next}
					src={rightArrow}
					alt="right arrow"
				/>
			</div>
		);
	};

	return (
		<div className="carousel">
			<Carousel
				arrows={false}
				responsive={responsive}
				infinite={true}
				swipeable={true}
				draggable={true}
				autoPlay={true}
				autoPlaySpeed={7000}
				keyBoardControl={true}
				containerClass="container"
				renderButtonGroupOutside={true}
				customButtonGroup={<CustomButtonGroupAsArrows />}
			>
				{projects.map((project, index) => (
					<ProjectCard
						handleCurrentProject={handleCurrentProject}
						key="project.id"
						project={project}
					/>
				))}
			</Carousel>
		</div>
	);
}
