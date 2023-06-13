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
			<div>{member.Name} </div>
		</section>
	);
}