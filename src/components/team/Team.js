import React, {useState} from 'react';
import '../../css/pages/TeamInd.css';
import TeamList from '../../utils/team';
import { retrieveObjFromId } from '../../utils/helpers';
import { useParams } from 'react-router-dom';

export default function Team() {
	const [member, setMember] = useState('');
	let {id} = useParams();

	if (!member) {
		const Team = TeamList();
		setMember(retrieveObjFromId(id, Team));
	}


	return (
		<section className="Team_section">
			<hr/>
			<div className="memberContainer">
				<div className="memberImgSection">
					<img
						className="memberMainImg"
						src={member.Img_Color}
						alt="Placeholder"
					></img>
				</div>
				<div class="memberDescSection">
					<h2 className="memberName">{member.Name} </h2>
					<hr/>
					<p className="memberDescription">
						{member.Discription}
					</p>
				</div>
			</div>
		</section>
	);
}