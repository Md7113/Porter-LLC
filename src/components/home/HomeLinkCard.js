import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/home/HomeLinkCard.css';

const HomeTextLinkCard = (props) => {
	let classes = 'textLinkFormat ' + props.className;
	const navigate = useNavigate();

	const handleLink = (e) => {
		switch (e.target.textContent) {
			case 'VIEW ALL PROJECTS':
				navigate('/projects');
				break;
			case 'VIEW OUR TEAM':
				navigate('/team');
				break;
			case 'VIEW ALL SERVICES':
				navigate('/services');
				break;
			default:
				break;
		}
	};

	return (
		<div className={classes}>
			<h3>{props.title}</h3>
			<p>{props.content}</p>
			<span onClick={handleLink}>{props.linkContent}</span>
		</div>
	);
};

export default HomeTextLinkCard;
