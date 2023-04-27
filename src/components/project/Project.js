import React from 'react';
import '../../css/pages/Project.css';

export default function Project({ currentProject }) {

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
						
						<p className="project_details project_description_section ">
							{currentProject.description}
						</p>
					</div>
					<p>
						
					<p className="project_details">Location: {currentProject.location}</p>
						<div className="project_details">
							<span>Size: </span>
							{currentProject.size} SF
						</div>
					
					</p>
				</div>
				<div className="project_img_container">
					<img className="project_main_img" src={currentProject.img} alt="Placeholder" />
				</div>
			</div>
		</section>
	);
}
