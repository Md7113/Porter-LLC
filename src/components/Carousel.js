import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProjectCard from "./Carousel_Card";
import projectFile from '../utils/project_file';

let projects = projectFile();
export default function MultiCarousel() {
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
				{projects.map((project) => (
					<ProjectCard key= "project.id" project = {project}/>
				))}
			</Carousel>
		</div>
	);
}
