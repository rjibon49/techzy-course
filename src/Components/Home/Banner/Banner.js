import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="sm:w-full md:w-full xl:container:xl h-screen -mt-24 banner-bg ">
            <div className="text-center text-white banner-text banner-text">
                <div></div>
                <div>
                <h1 className="sm:text-2xl md:text-3xl lg:text-6xl xl:text-7xl">
                    Inspiration, Innovation and DIscovery
                </h1>
                <p className="sm:text-xs md:text-sm xl:text-base">
                    Any successful career starts with good education. Together with us you will have deeper knowledge of the subjects that will be especially useful for you when climbing the career ladder.
                </p>
                </div>
                <div></div>
                
            </div>
        </div>
    );
};

export default Banner;