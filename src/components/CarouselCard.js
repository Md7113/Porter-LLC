import React from 'react';
import '../css/components/Carousel.css';
import arrow from '../images/rightArrow.svg';
import { Link } from 'react-router-dom';

function CarouselCard({project}) {
	const pattern =/(^(?:\S+\s+\n?){1,20})/;
	console.log(project.description.match(pattern))
	return (
		<div className="carouselProjectCard">
			<hr className="headLineBreak" />
			<div className="projectTitle">
				<h2 className="projectName">{project.businessName}</h2>
				<p className="projectLocation">{project.location}</p>
			</div>
			<hr className="LowerLineBreak "></hr>
			<p className="carouselPadding projectDescription">
				{(project.description.match(pattern)[0] + "...")}
			</p>
			<hr className="LowerLineBreak"></hr>
			<Link className="projectLink" to={`project/${project.id}`}>
				<div className="carouselPadding">
					<img src={project.img} alt={project.alt}/>
				</div>
				<div className="projectLink arrow">
					<span>VIEW PROJECT</span>
					<img className="arrowLink" src={arrow} alt="right arrow" />
				</div>
			</Link>
			<hr className="LowerLineBreak"></hr>
		</div>
	);
}

export default CarouselCard;
