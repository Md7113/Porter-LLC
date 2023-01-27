import React from 'react';
import { Link } from 'react-router-dom';

const CardTitleText = (props) => {
  let classes = 'text_link_format ' + props.className;
	return (
		<div className= {classes}>
			<h3>{props.title}</h3>
			<p>{props.content}</p>
			<Link to="/projects">VIEW ALL PROJECTS</Link>
		</div>
	);
};

export default CardTitleText;