import React from 'react';
import '../css/Carousel.css';
import arrow from '../images/side-arrow.png';
// import img1 from '../images/shriners.png';
import { Link } from 'react-router-dom';
// {
//     businessName: '',
//     location: '',
//     description_short: '',
//     description: '',
//     size: '',
//     budget: '',
//     owner:'',
//     architectRecord: '',
//     relevance: '',
//     serviceProvided:''
// }
function Carousel_Card({ project, image }) {
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
			<Link className="project_link">
				<div className="carousel_padding">
					{/* <img src={img1} /> */}
					<img src={image} />
				</div>
				<div className="project_link arrow">
					<span>VIEW PROJECT</span>
					<img src={arrow} alt="arrow" />
				</div>
			</Link>

			<hr className="Lower_line_break"></hr>
		</div>
	);
}

export default Carousel_Card;
