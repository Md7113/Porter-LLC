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
		<div className="carousel_Project_card">
			<hr className="head_line_break" />
			<div className="carousel_padding project_title">
				<h2 className="project_name">{project.businessName}</h2>
				<p className="project_location">{project.location}</p>
			</div>
			<hr className="Lower_line_break "></hr>
			<p className="carousel_padding">
				{(project.description.match(pattern) + "...")}
			</p>
			<hr className="Lower_line_break"></hr>
			<div className="project_link" onClick={handleProjectSave}>
				<div className="carousel_padding">
					<img src={project.img} />
				</div>
				<div className="project_link arrow">
					<span>VIEW PROJECT</span>
					<img className="arrow_link" src={arrow} alt="right arrow" />
				</div>
			</div>
			<hr className="Lower_line_break"></hr>
		</div>
	);
}

export default CarouselCard;
