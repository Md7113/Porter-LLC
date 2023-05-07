import React from 'react';
import homeInfo from '../../utils/homeContent';
import LinkCard from './HomeLinkCard';
import InfoCard from './HomeInfoCard';
import '../../css/home/HomeContent.css';
import Fade from 'react-reveal/Fade';

const HomeContent = () => {
	const homeContent = homeInfo();
	const line1 = homeContent[0];
	const line2 = homeContent[1];

	return (
		<section className=''>
			<Fade bottom>
				<div className="cardInfoRow">
					<div className="firstCard">{line1.section1}</div>
					<InfoCard
						className="infoCard"
						title={line1.section2[0]}
						content={line1.section2[1]}
					/>
					<InfoCard
						className="infoCard"
						title={line1.section3[0]}
						content={line1.section3[1]}
					/>
				</div>
				<hr className="hr" />
				<div className="cardLinkRow">
					<LinkCard
						className=""
						title={line2.section1[0]}
						content={line2.section1[1]}
						linkContent={line2.section1[2]}
					/>
					<LinkCard
						className=""
						title={line2.section2[0]}
						content={line2.section2[1]}
						linkContent={line2.section2[2]}
					/>
					<LinkCard
						className="contrastCard"
						title={line2.section3[0]}
						content={line2.section3[1]}
						linkContent={line2.section3[2]}
					/>
				</div>
			</Fade>
		</section>
	);
};

export default HomeContent;

