import React from 'react';
import '../css/components/Carousel.css';
import arrow from '../images/rightArrow.svg';
import { descriptionShort } from '../utils/helpers';
import { Link } from 'react-router-dom';

function CarouselCard({project}) {
	return (
		<div className="carouselProjectCard">
			<hr className="headLineBreak" />
			<div className="projectTitle">
				<h2 className="projectName">{project.businessName}</h2>
				<p className="projectLocation">{project.location}</p>
			</div>
			<hr className="LowerLineBreak "></hr>
			<p className="carouselPadding projectDescription">
				{(descriptionShort(project.description))}
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
