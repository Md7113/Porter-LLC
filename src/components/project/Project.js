import React from 'react';
import '../../css/pages/Project.css';

export default function Project({ currentProject }) {

	return (
		<section className="projectSection">
			<hr />
			<div className="projectContainer">
				<div className="projectContent">
					<div className="projectTitleContent">
						<h2 className="projectNameSection">
							{currentProject.businessName}
						</h2>
						<hr />
						
						<p className="projectDetails projectDescriptionSection ">
							{currentProject.description}
						</p>
					</div>
					<p>
						
					<p className="projectDetails"><span>Location:</span> {currentProject.location}</p>
						<div className="projectDetails">
							<span>Size: </span>
							{currentProject.size} SF
						</div>
					
					</p>
				</div>
				<div className="projectImgContainer">
					<img className="projectMainImg" src={currentProject.img} alt="Placeholder" />
				</div>
			</div>
		</section>
	);
}
