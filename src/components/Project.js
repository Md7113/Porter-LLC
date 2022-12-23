import React from 'react';
import '../css/Project.css';

export default function Project({ currentProject }) {

	return (
		<section className='project_section'>
			<hr />
			<div className="project_container">
				<div className="project_content">
                    <div className="project_title_content">
					<h2 className='project_name_section'>{currentProject.businessName}</h2>
					<hr />
					<p className='project_details'>{currentProject.location}</p>
					<p className='project_details project_description_section '>{currentProject.description}</p>
                    </div>
					<p>
						<div className='project_details'>
							<span>SQUARE FEET: </span>
							{currentProject.size}
						</div>
						<div className='project_details'>
							<span>OWNER'S BUDGE: </span>
							{currentProject.budget}
						</div>
						<div className='project_details'>
							<span>OWNER: </span>
							{currentProject.owner}
						</div>
						<div className='project_details'>
							<span>ARCHITECT OF RECORD: </span>
							{currentProject.architectRecord}
						</div>
						<div className='project_details'>
							<span>GENERAL CONTRACTOR: </span>
							{currentProject.generalContractor}
						</div>
						<div className='project_details'>
							<span>RELEVANCE: </span>
							{currentProject.relevance}
						</div>
						<div className='project_details'>
							<span>SERVICES PROVIDED: </span>
							{currentProject.serviceProvided}
						</div>
					</p>
				</div>
				<div className="project_img_container">
					<img
						className="project_main_img"
						src="https://via.placeholder.com/200"
						alt="Placeholder"
					/>
					<div className="project_small_img">
						<img
							className=""
							src="https://via.placeholder.com/200"
							alt="Placeholder"
						/>
						<img
							className=""
							src="https://via.placeholder.com/200"
							alt="Placeholder"
						/>
						<img
							className=""
							src="https://via.placeholder.com/200"
							alt="Placeholder"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
