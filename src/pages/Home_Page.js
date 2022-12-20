import React from "react";
import "../css/Home.css"
import backGround from "../images/Porter_LinkedIn_Cover_Black.png";
import HomeCaro from "../components/home_carosel/Shriners_Hospital.js";

const Home_Page = () => {
  return (
    <>
      <div className="home_page">
        <div className='home_content'>
        <h1>BUILD A LEGACY</h1>
        {/* <img className="main_background" src={backGround} /> */}
        <HomeCaro />
        </div>
      </div>
    </>
  );
};

export default Home_Page;