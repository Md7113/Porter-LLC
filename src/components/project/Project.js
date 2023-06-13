import React, {useState} from 'react';
import '../../css/pages/Project.css';
import projectFile from '../../utils/projectFile';
import { retrieveObjFromId } from '../../utils/helpers';
import { useParams } from 'react-router-dom';

export default function Project() {
	const [project, setProject] = useState('');
	let {id} = useParams();

	if (!project) {
		const projects = projectFile();
		setProject(retrieveObjFromId(id, projects));
	}
	
	return (
		<section className="projectSection">
			<hr />
			<div className="projectContainer">
				<div className="projectContent">
					<div className="projectTitleContent">
						<h2 className="projectNameSection">
							{project.businessName}
						</h2>
						<hr />

						<p className="projectDetails projectDescriptionSection ">
							{project.description}
						</p>
					</div>
					<p>
						<p className="projectDetails">
							<span>Location:</span> {project.location}
						</p>
						<div className="projectDetails">
							<span>Size: </span>
							{project.size} SF
						</div>
					</p>
				</div>
				<div className="projectImgContainer">
					<img
						className="projectMainImg"
						src={project.img}
						alt="Placeholder"
					/>
				</div>
			</div>
		</section>
	);
}
