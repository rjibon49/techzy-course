import React from 'react';
import img1 from '../../Images/About/about-1.jpg';
import img2 from '../../Images/About/about-2.jpg';
import img3 from '../../Images/About/about-3.jpg';


const About = () => {
    return (
        <div className="sm:w-full md:w-full xl:container:xl my-20">
            <div className="title text-center ">
                <h5 className="text-2xl text-green-900">Academic program</h5>
                    <h2 className="sm:text-2xl md:text-3xl xl:text-5xl font-bold"> Our curriculum </h2>
                    <p className="sm:text-sm md:text-base xl:text-base ">
                    Massa, et porttitor cras sed ultrices ullamcorper mauris semper iaculis Ornare suscipit purus
                    <p>nulla pharetra velit, leo in Amet nulla nunc vitae iverra pellentesque in eget.</p> 
                    </p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mx-5">
                    <img src={img1} className="me-4 rounded-md" alt="" />
                    <img src={img2} className="me-4 rounded-md" alt="" />
                    <img src={img3} className="me-4 rounded-md" alt="" />
            </div>
        </div>
    );
};

export default About;