import React from 'react';
import '../css/pages/OurTeam.css';
import teamFile from '../utils/team'
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';


const Our_Team_Page = ({ handleCurrentTeam }) => {
	// returns an array of team members
	let Team = teamFile();

	//
	

	return (
		<div className="allTeamContainer">
			<h1>OUR TEAM</h1>
			<hr />
			<div className="allTeam">
				{Team.map((member) => (
					<Slide bottom key={member.id}>
						<Link to={`/team/${member.id}`}>
							<div className="imageCard">
								<img className="Team_img" src={member.Img_Noir} alt={member.alt} />
								<h3 className="Team_Name">{member.Name}</h3>
								<h3 className="Team_Title">{member.Title}</h3>
								{/* <h3 className="teamBioLink">Read Bio</h3> */}
							</div>
						</Link>
					</Slide>
				))}
			</div>
		</div>
	);
};


// const Our_Team_Page = () => {
// 	return (
// 		<div className="Our_Team_page">
// 			<div className="Our_Team_content">
// 				<h1>OUR TEAM</h1>
//                 <div className = 'Team_Grid'>
//                     <div className = 'employee_card'>
//                         <img className='Team_img' src={tyler_davis.Img_Color} alt= 'Color image of CEO Tyler Davis'></img>
//                         <h2 className='Team_Name' >{tyler_davis.Name}</h2>
//                         <h3 className='Team_Title' >{tyler_davis.Title}</h3>
//                         <h4 className='Read_Bio' >Read Bio</h4>
//                     </div>
                    
//                 </div>
// 			</div>
// 		</div>
// 	);
// };

export default Our_Team_Page;