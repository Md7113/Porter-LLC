// import { Link } from 'react-router-dom';
import projectFile from '../utils/projectFile';
import { useNavigate } from 'react-router-dom';
import '../css/AllProjects.css';

const AllProjects = ({ handleCurrentProject }) => {
	const navigate = useNavigate();
	function handleProjectNavigate(project) {
		// const project = e.target;
		console.log(project)
		handleCurrentProject(project);
		navigate('/project', { state: { currentProject: { project } } });
	}
	let projects = projectFile();
	return (
		<div className='allProjectsContainer'>
			<h2>PROJECTS</h2>
			<hr />
			<div className="allProjects">
				{projects.map((project) => (
					<div className="imageCard" key={project.id} onClick={() => handleProjectNavigate(project)}>
						<img
							className="projectImg"
							src={project.img}
							alt={project.alt}
						/>
						<p className="projectTitle">{project.businessName}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default AllProjects;
