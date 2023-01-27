import React from 'react';
import AboutInfo from '../utils/aboutUsInfo';
import CardContainer from './CardsContainer';
// import TextCard from './CardText';
import TextTitle from './CardTitleText';

const AboutUsInfo = () => {
    const aboutContent = AboutInfo();
    const row1 = aboutContent[0];
    const row2 = aboutContent[1];
    // const row3 = aboutContent[2];

    return (
        <section>
            <CardContainer className="">
                <TextTitle className="" title={row1.section1[0]} content={row1.section1[1]} />
                <TextTitle className="" title={row1.section2[0]} content={row1.section2[1]} />
                <TextTitle className="" title={row1.section3[0]} content={row1.section3[1]} />                   
            </CardContainer>
            <CardContainer className="">
                <TextTitle className="" title={row2.section1[0]} content={row2.section1[1]} />
                <TextTitle className="" title={row2.section2[0]} content={row2.section2[1]} />
                <TextTitle className="" title={row2.section3[0]} content={row2.section3[1]} />                   
            </CardContainer>
        </section>
    )
}

export default AboutUsInfo;