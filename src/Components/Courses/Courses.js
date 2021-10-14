import { useEffect, useState } from 'react';
import Course from './Course/Course';
const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./coursesFile.JSON')
        .then ( res => res.json())
        .then ( data => setCourses(data));
    }, []);

    return (
        <div className="sm:w-full md:w-full xl:container:xl my-20">
            <div className="title text-center ">
                <h5 className="text-2xl text-green-900">Guaranteed Success</h5>
                <h2 className="sm:text-2xl md:text-3xl xl:text-5xl font-bold"> What We Offer </h2>
                <p className="sm:text-sm md:text-base xl:text-base">
                Teachzy offers students the best of education and entertainment opportunities available in the area.
                <p>We are glad to take care of every student and university entrant.</p>
                </p>
            
                <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mx-5">
                {
                    courses.map( course => <Course
                        key = {course.id}
                        course = {course}
                        ></Course>)
                }
                 
                </div>
                
            </div>   
        </div>
    );
};

export default Courses;