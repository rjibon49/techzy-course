import React from 'react';
import './Course.css'

const Course = (props) => {
    const {name, title, picture} = props.course;
    return (
        <div className="m-8 ">
             <div className="bg-blue-700 rounded-md">
                <div>
                    <img className="title-img" src={picture} alt="" />
                </div>
                <div className="text-center text-white ">
                    <h3 className="text-2xl mt-2 pt-2">{title}</h3>
                    <h4 className="text-base text-bold pb-4">{name}</h4>
                </div>
            </div> 
        </div>
    );
};

export default Course;