import React from 'react';
import homeInfo from '../utils/home_info';
import CardContainer from './Cards_Container';
import '../css/Home_Info.css';
import TextLink from './Card_Text_Link';
import TextCard from './Card_Text';
import TextTitle from './Card_Title_Text';
import '../css/Card_Text.css';

const Home_Info = () => {
	const homeContent = homeInfo();
	const line1 = homeContent[0];
	const line2 = homeContent[1];
	const line3 = homeContent[2];

	return (
		<section className="display_rows">
			<CardContainer className="border_top">
				<TextCard className="" content={line1.section1} />
                <TextTitle className=""
					title={line1.section2[0]}
					content={line1.section2[1]}/>
                <TextTitle className=""
					title={line1.section3[0]}
					content={line1.section3[1]}/>
			</CardContainer>
			<CardContainer >
				<TextLink
					className=""
					title={line2.section1[0]}
					content={line2.section1[1]}
				/>
				<TextLink
					className=""
					title={line2.section2[0]}
					content={line2.section2[1]}
				/>
				<TextLink
					className=""
					title={line2.section2[0]}
					content={line2.section2[1]}
				/>
			</CardContainer>
			<CardContainer>
				<TextCard className="" content={line3.section1} />
				<TextCard className="" content={line3.section2} />
				<TextCard className="" content={line3.section3} />
			</CardContainer>
		</section>
	);
};

export default Home_Info;
