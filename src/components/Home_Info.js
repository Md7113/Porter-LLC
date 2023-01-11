import React from 'react';
import homeInfo from '../utils/home_info';
import CardContainer from './Cards_Container';


const Home_Info = () => {
    const homeContent = homeInfo();
    const line1 = homeContent[0];
    const line2 = homeContent[1];
    const line3 = homeContent[2];

    return (<div className="">
        <CardContainer>
            <div className="">
                {line1.section1}
            </div>
            <div className="">
                {line1.section2}
            </div>
            <div className="">
                {line1.section3}
            </div>
        </CardContainer>
        <CardContainer>
            <div className="">
                {line2.section1}
            </div>
            <div className="">
                {line2.section2}
            </div>
            <div className="">
                {line2.section3}
            </div>
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
    </div>)
}

export default Home_Info;