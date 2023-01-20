import React, { useState } from 'react';
import '../css/Project.css';

export default function Project({ currentProject }) {
	//imgArray
	const imgArray = [
		'https://via.placeholder.com/200',
		'https://via.placeholder.com/200',
		'https://via.placeholder.com/200',
		'https://via.placeholder.com/200',
	];
	const [image1, setImage1] = useState(imgArray[0]);
	const [image2, setImage2] = useState(imgArray[1]);
	const [image3, setImage3] = useState(imgArray[2]);
	const [image4, setImage4] = useState(imgArray[3]);

	const imgSwap = (e) => {
		let tempImg = image1;
		console.log(e.target);
		switch (e.target.src) {
			case image2:
				setImage1(e.target.src);
				setImage2(tempImg);
				break;
			case image3:
				setImage1(e.target.src);
				setImage3(tempImg);
				break;
			case image4:
				setImage1(e.target.src);
				setImage4(tempImg);
				break;
		}
	};

	return (
		<section className="project_section">
			<hr />
			<div className="project_container">
				<div className="project_content">
					<div className="project_title_content">
						<h2 className="project_name_section">
							{currentProject.businessName}
						</h2>
						<hr />
						<p className="project_details">{currentProject.location}</p>
						<p className="project_details project_description_section ">
							{currentProject.description}
						</p>
					</div>
					<p>
						<div className="project_details">
							<span>SQUARE FEET: </span>
							{currentProject.size}
						</div>
						<div className="project_details">
							<span>OWNER'S BUDGE: </span>
							{currentProject.budget}
						</div>
						<div className="project_details">
							<span>OWNER: </span>
							{currentProject.owner}
						</div>
						<div className="project_details">
							<span>ARCHITECT OF RECORD: </span>
							{currentProject.architectRecord}
						</div>
						<div className="project_details">
							<span>GENERAL CONTRACTOR: </span>
							{currentProject.generalContractor}
						</div>
						<div className="project_details">
							<span>RELEVANCE: </span>
							{currentProject.relevance}
						</div>
						<div className="project_details">
							<span>SERVICES PROVIDED: </span>
							{currentProject.serviceProvided}
						</div>
					</p>
				</div>
				<div className="project_img_container">
					<img className="project_main_img" src={image1} alt="Placeholder" />
					<div className="project_small_img">
						<img onClick={imgSwap} src={image2} alt="Placeholder2" />
						<img onClick={imgSwap} src={image3} alt="Placeholder3" />
						<img onClick={imgSwap} src={image4} alt="Placeholder4" />
					</div>
				</div>
			</div>
		</section>
	);
}
