import React from 'react';
import homeInfo from '../utils/home_info';
import CardContainer from './Cards_Container';
import '../css/Home_Info.css';
import TextLink from './Card_Text_Link';


const Home_Info = () => {
    const homeContent = homeInfo();
    const line1 = homeContent[0];
    const line2 = homeContent[1];
    const line3 = homeContent[2];

    return (<section className="display_rows">
        <hr />
        <CardContainer className="">
            <div>
                {line1.section1}
            </div>
            <div >
                {line1.section2}
            </div>
            <div >
                {line1.section3}
            </div>
        </CardContainer>
        <CardContainer>
            <TextLink className="" title= {line2.section1[0]} content= {line2.section1[1]}/>
            <TextLink className="" title= {line2.section2[0]} content= {line2.section2[1]}/>
            <TextLink className="" title= {line2.section2[0]} content= {line2.section2[1]}/>
        </CardContainer>
        <CardContainer>
            <div className="">
                {line3.section1}
            </div>
            <div className="">
                {line3.section2}
            </div>
            <div className="">
                {line3.section3}
            </div>
        </CardContainer>
    </section>)
}

export default Home_Info;