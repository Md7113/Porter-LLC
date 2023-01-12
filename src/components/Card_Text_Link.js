import React from 'react';
import { Link } from 'react-router-dom';

const Card_Title_Text = (props) => {
  let classes = ' ' + props.className;
	return (
		<div classes= {classes}>
			<h3>{props.title}</h3>
			<p>{props.content}</p>
			<Link to="/projects">VIEW ALL PROJECTS</Link>
		</div>
	);
};

export default Card_Title_Text;