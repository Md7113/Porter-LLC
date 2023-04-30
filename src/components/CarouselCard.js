import React from 'react';
import '../css/components/Carousel.css';
import arrow from '../images/rightArrow.svg';
import { useNavigate } from 'react-router-dom';

function CarouselCard({ project, handleCurrentProject }) {
	const navigate = useNavigate();
	function handleProjectSave() {
		handleCurrentProject(project);
		navigate('/project', { state: { currentProject: { project } } });
	}
	const pattern =/(^(?:\S+\s+\n?){1,10})/;
	return (
		<div className="carouselProjectCard">
			<hr className="headLineBreak" />
			<div className="projectTitle">
				<h2 className="projectName">{project.businessName}</h2>
				<p className="projectLocation">{project.location}</p>
			</div>
			<hr className="LowerLineBreak "></hr>
			<p className="carouselPadding projectDescription">
				{(project.description.match(pattern) + "...")}
			</p>
			<hr className="LowerLineBreak"></hr>
			<div className="projectLink" onClick={handleProjectSave}>
				<div className="carouselPadding">
					<img src={project.img} />
				</div>
				<div className="projectLink arrow">
					<span>VIEW PROJECT</span>
					<img className="arrowLink" src={arrow} alt="right arrow" />
				</div>
			</div>
			<hr className="LowerLineBreak"></hr>
		</div>
	);
}

export default CarouselCard;
