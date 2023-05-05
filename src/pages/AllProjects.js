import projectFile from '../utils/projectFile';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import '../css/pages/AllProjects.css';

const AllProjects = ({ handleCurrentProject }) => {
	// returns an array of projects
	let projects = projectFile();

	return (
		<div className="allProjectsContainer">
			<h2>PROJECTS</h2>
			<hr />
			<div className="allProjects">
				{projects.map((project) => (
					<Slide bottom key={project.id}>
						<Link to={`/project/${project.id}`}>
							<div
								className="imageCard"
							>
								<img
									className="projectImg"
									src={project.img}
									alt={project.alt}
								/>
								<p className="projectTitle">{project.businessName}</p>
							</div>
						</Link>
					</Slide>
				))}
			</div>
		</div>
	);
};

export default AllProjects;
