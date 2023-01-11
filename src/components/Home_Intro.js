import React from 'react';
import Home_Info from './Home_Info';
import '../css/Home_Intro.css'

const Home_Intro = () => {
    return (
        <div>
            <h3 className="Title">BUILDING A DIFFERENCE</h3>
            <div>
                <div>
                    Text with a basic description.
                </div>
                <div>
                    <h2 className="Title">56</h2>
                    years of excellence
                </div>
                <div>
                    <h2 className="Title">258</h2>
                    Projects and counting
                </div>
            </div>
            <Home_Info />

        </div>
    )
}

export default Home_Intro;