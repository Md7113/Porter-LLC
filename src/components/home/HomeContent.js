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
		<section className="display_rows">
			<Fade bottom>
			<CardContainer className="border_top card_padding">
				<TextCard className="line_spacing" content={line1.section1} />
                <TextTitle className="font_title"
					title={line1.section2[0]}
					content={line1.section2[1]}/>
                <TextTitle className="font_title"
					title={line1.section3[0]}
					content={line1.section3[1]}/>
			</CardContainer>
			<hr className='hr'/>
			<CardContainer className="card_padding">
				<TextLink
					className="line_spacing"
					title={line2.section1[0]}
					content={line2.section1[1]}
				/>
				<TextLink
					className="line_spacing"
					title={line2.section2[0]}
					content={line2.section2[1]}
				/>
				<TextLink
					className="line_spacing contrast_card"
					title={line2.section3[0]}
					content={line2.section3[1]}
				/>
			</CardContainer >
			</Fade>
		</section>
	);
};

export default HomeContent;
