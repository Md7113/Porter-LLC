import React from 'react';
import homeInfo from '../../utils/homeContent';
import CardContainer from '../CardsContainer';
import '../../css/home/HomeContent.css';
import TextLink from '../CardTextLink';
import TextCard from '../CardText';
import TextTitle from '../CardTitleText';
import Fade from 'react-reveal/Fade';

const HomeContent = () => {
	const homeContent = homeInfo();
	const line1 = homeContent[0];
	const line2 = homeContent[1];
	
	return (
		<section className="displayRows">
			<Fade bottom>
			<CardContainer className="borderTop cardPadding">
				<TextCard className="lineSpacing" content={line1.section1} />
                <TextTitle className="fontTitle"
					title={line1.section2[0]}
					content={line1.section2[1]}/>
                <TextTitle className="fontTitle"
					title={line1.section3[0]}
					content={line1.section3[1]}/>
			</CardContainer>
			<hr className='hr'/>
			<CardContainer className="cardPadding cardHeight">
				<TextLink
					className="lineSpacing"
					title={line2.section1[0]}
					content={line2.section1[1]}
					linkContent={line2.section1[2]}
				/>
				<TextLink
					className="lineSpacing"
					title={line2.section2[0]}
					content={line2.section2[1]}
					linkContent={line2.section2[2]}
				/>
				<TextLink
					className="lineSpacing contrastCard"
					title={line2.section3[0]}
					content={line2.section3[1]}
					linkContent={line2.section3[2]}
				/>
			</CardContainer >
			</Fade>
		</section>
	);
};

export default HomeContent;
