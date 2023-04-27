import React from 'react';
import '../css/pages/OurTeam.css';
import Tyler_Davis_func from '../pages/Employees/Tyler_Davis/TD_Page' 
let tyler_davis = Tyler_Davis_func()

const Our_Team_Page = () => {
	return (
		<div className="Our_Team_page">
			<div className="Our_Team_content">
				<h1>OUR TEAM</h1>
                <div className = 'Team_Grid'>
                    <div className = 'employee_card'>
                        <img className='Team_img' src={tyler_davis.Img_Color} alt= 'Color image of CEO Tyler Davis'></img>
                        <h2 className='Team_Name' >{tyler_davis.Name}</h2>
                        <h3 className='Team_Title' >{tyler_davis.Title}</h3>
                        <h4 className='Read_Bio' >Read Bio</h4>
                    </div>
                    
                </div>
			</div>
		</div>
	);
};

export default Our_Team_Page;