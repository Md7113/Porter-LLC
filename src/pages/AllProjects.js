import { Link } from 'react-router-dom';
import projectFile from '../utils/projectFile';
import '../css/AllProjects.css';

const AllProjects = () => {
	let projects = projectFile();
	return (
		<div className='allProjectsContainer'>
			<h2>PROJECTS</h2>
			<hr />
			<div className="allProjects">
				{projects.map((project) => (
					<Link className="imageCard" key={project.id} to={`/`}>
						<img
							className="projectImg"
							src={project.img}
							alt={project.alt}
						/>
						<p className="projectTitle">{project.businessName}</p>
					</Link>
				))}
			</div>
		</div>
	);
};

export default AllProjects;
