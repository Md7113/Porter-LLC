import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProjectCard from './Carousel_Card';
import projectFile from '../utils/project_file';
import img1 from '../images/shriners.png';
import img2 from '../images/kaiser_project2.png';
import img3 from '../images/ucsfParking_project3.png';
import img4 from '../images/ucDavisCancer_project4.png';
import rightArrow from '../images/right-arrow.png';
import leftArrow from '../images/left-arrow.png';

let projects = projectFile();
export default function MultiCarousel({ handleCurrentProject }) {
	const images = [{image: img1, alt:''}, {image: img2, alt: ''}, {image: img3, alt: ''}, {image: img4, alt:''}];
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

	const CustomButtonGroupAsArrows = ({ next, previous }) => {
		return (
			<div className="carousel_arrows">
				<img className="arrows" onClick={previous} src={leftArrow} alt= "left arrow" />
				<img className="arrows" onClick={next} src={rightArrow} alt= "right arrow" />
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
				keyBoardControl={true}
				containerClass="container"
				renderButtonGroupOutside={true}
				customButtonGroup={<CustomButtonGroupAsArrows />}
				// customRightArrow={<CustomRight />}
				// customLeftArrow={<CustomLeft />}
			>
				{projects.map((project, index) => (
					<ProjectCard
						handleCurrentProject={handleCurrentProject}
						key="project.id"
						project={project}
						image={images[index]}
					/>
				))}
			</Carousel>
		</div>
	);
}

// save
// const CustomRight = ({ onClick }) => (
// 	<button className="arrow right" onClick={onClick}>
// 		right
// 	</button>
// );
// const CustomLeft = ({ onClick }) => (
// 	<button className="arrow left" onClick={onClick}>
// 		left
// 	</button>
// );
