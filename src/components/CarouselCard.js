import React from 'react';
import '../css/Carousel.css';
import arrow from '../images/rightArrow.svg';
import { useNavigate } from 'react-router-dom';

function CarouselCard({ project, image, handleCurrentProject }) {
	const navigate = useNavigate();
	function handleProjectSave(){
		handleCurrentProject(project)
		navigate('/project',  {state: {currentProject: {project}}, image: {image}});
	}

	return (
		<div className="carousel_Project_card">
			<hr className="head_line_break" />
			<div className="carousel_padding project_title">
				<h2 className="project_name">{project.businessName}</h2>
				<p className="project_location">{project.location}</p>
			</div>
			<hr className="Lower_line_break "></hr>
			<p className="carousel_padding">{project.description_short}</p>
			<hr className="Lower_line_break"></hr>
			<div className="project_link" onClick = {handleProjectSave} >
				<div className="carousel_padding">
					<img src={image.image} alt= {image.alt}/>
				</div>
				<div className="project_link arrow">
					<span>VIEW PROJECT</span>
					<img className='arrow_link' src={arrow} alt="right arrow" />
				</div>
			</div>
			<hr className="Lower_line_break"></hr>
		</div>
	);
}

export default CarouselCard;
