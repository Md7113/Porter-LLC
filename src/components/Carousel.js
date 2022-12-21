import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProjectCard from "./Carousel_Card";
import projectFile from '../utils/project_file';
import img1 from '../images/shriners.png';
import img2 from '../images/kaiser_project2.png';
import img3 from '../images/ucsfParking_project3.png';
import img4 from '../images/ucDavisCancer_project4.png';


let projects = projectFile();
export default function MultiCarousel() {
	const images = [img1, img2, img3, img4];
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
	return (
		<div className="carousel">
			<Carousel
				responsive={responsive}
				infinite={true}
			>
				{projects.map((project, index) => (
					<ProjectCard key= "project.id" project = {project} image = {images[index]}/>
				))}
			</Carousel>
		</div>
	);
}
