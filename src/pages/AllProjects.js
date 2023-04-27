import projectFile from '../utils/projectFile';
import { useNavigate } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import '../css/pages/AllProjects.css';

const AllProjects = ({ handleCurrentProject }) => {
	// returns an array of projects
	let projects = projectFile();

	//
	const navigate = useNavigate();

	// Redirects to the current project page
	function handleProjectNavigate(project) {
		handleCurrentProject(project);
		navigate('/project', { state: { currentProject: { project } } });
	}

	return (
		<div className="allProjectsContainer">
			<h2>PROJECTS</h2>
			<hr />
			<div className="allProjects">
				{projects.map((project) => (
					<Slide bottom key={project.id}>
						<div
							className="imageCard"
							onClick={() => handleProjectNavigate(project)}
						>
							<img className="projectImg" src={project.img} alt={project.alt} />
							<p className="projectTitle">{project.businessName}</p>
						</div>
					</Slide>
				))}
			</div>
		</div>
	);
};

export default AllProjects;
