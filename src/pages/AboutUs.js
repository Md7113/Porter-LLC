import React from 'react';
import '../css/AboutUs.css';
import About_img from '../images/about-us.png';
import AboutUsInfo from '../components/AboutUsInfo';

const About_Us_Page = () => {
	return (
		<div className="About_Us_page">
			<div className="About_Us_content">
				<h1>ABOUT US</h1>
				<div className="About_div">
					<div className="About_p">
						<p>
							Porter is a team of some of the most adept construction and
							program managers in the industry. We came together in 2006 under a
							common vision to see a future of stronger communities and a world
							built on purpose. Our wealth of expertise is with you every step
							of the way from planning and evaluation, to design and
							engineering, to construction and beyond. From vision to reality,
							we provide seamless integration solutions for complex programs at
							any scale.
						</p>
                        <br />
						<p>
							Our mission is to enrich lives through the relationships we forge
							and the legacy we build together. We see our partners as members
							of our team growing through the challenges we face and the
							victories we achieve. We have the experience to adapt, the vision
							to see change on the horizon, and the courage to make the right
							decisions at the right time
						</p>
                        <br />
						<p>
							Our unmatched decades of experience are brought to bear on every
							program we manage. Whatever stage you\'re in, Porter can deliver
							exceptional results. Partner with us today
						</p>
					</div>
					<img style={{objectFit: 'contain'}} src={About_img} alt= ''/>
				</div>
			</div>
			<div className="Our_Team_content">
				<h1>OUR TEAM/SERVICES</h1>
			</div>
			<AboutUsInfo/>
		</div>
	);
};

export default About_Us_Page;
