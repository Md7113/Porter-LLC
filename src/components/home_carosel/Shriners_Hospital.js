import React from 'react';
import '../../css/Carousel.css'
import arrow from '../../images/side-arrow.png'
//SHRINERS HOSPITALS FOR CHILDREN

//PASADENA, CA

//The Shriners for Children Medical Center project encompasses a new state-of-the-art specialty outpatient medical center with three levels above ground (75,000 SF) and three levels of subterranean parking (90,000 SF - 210 stalls). It includes an ambulatory surgery center comprised of 2 operating rooms and associated support spaces, clinical, diagnostic, compounding pharmacy, orthopedic exam, fitting and fabrication facilities, indoor and outdoor rehabilitation units and administrative office areas. The facility replaces an aging and seismically noncompliant acute care facility on Geneva Street in Los Angeles. It will help carry the legacy of the Shriners into the next century and will bring exceptional specialty pediatric care to millions of children and families across the southwestern United States, regardless of the families’ ability to pay.

// SQUARE FEET: 75,000 (Building); 90,000 (Garage)
// OWNER’S BUDGET: $72M
// OWNER: Shriners Hospitals For Children
// ARCHITECT OF RECORD: SRG Partnership & Co Architects
// GENERAL CONTRACTOR: DPR Construction
// RELEVANCE: Healthcare, OSHOD & State Fire Marshall
// SERVICES PROVIDED: Project Management


function carCard() {
    return(
        <div className='home_caro'>
            <hr className='head_line_break'></hr>
            <div>
                <h2>SHRINERS HOSPITALS FOR CHILDREN</h2>
                <p>Pasadena, CA</p>
            </div>
            <hr className='Lower_line_break'></hr>
            <p>The Shriners for Children Medical Center project encompasses a new state-of-the-art specialty outpatient medical 
                center with three levels above ground (75,000 SF) and three levels of subterranean parking...</p>
            <hr className='Lower_line_break'></hr>
            <div>
                <img></img>
                <div>
                    <h2>CHRIS DUGAS</h2>
                    <p>Vice President / Healthcare</p>
                    <h3>VIEW PROJECT<img src={arrow} alt='arrow'></img></h3>
                </div>
            </div>
            <hr className='Lower_line_break'></hr>
        </div>
    )

}

export default carCard;
