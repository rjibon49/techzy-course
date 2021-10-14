import React from 'react';
import { Link } from 'react-router-dom';
import useCourse from '../Hooks/useCourse';

const Service = () => {

    const [courses] = useCourse();
    
    return (
        <div className="sm:w-full md:w-full xl:container:xl my-20">
            <div className="title text-center ">
                <h5 className="text-2xl text-green-900">Guaranteed Success</h5>
                <h2 className="sm:text-2xl md:text-3xl xl:text-5xl font-bold"> What We Offer </h2>
                <p className="sm:text-sm md:text-base xl:text-base">
                Teachzy offers students the best of education and entertainment opportunities available
                <p> in the area. We are glad to take care of every student and university entrant.</p>
                </p>
                
                <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-1 mx-1">
                
                    {
                        courses.map( c => 
                        <div className="">
                            <div className="m-2 ">
                                <div className="bg-blue-700 rounded-md">
                                    <div>
                                        <img className="title-img" src={c.picture} alt="" />
                                    </div>
                                    <div className="text-center text-white ">
                                        <h3 className="text-2xl mt-2 pt-2">{c.title}</h3>
                                        <h4 className="text-base text-bold pb-4">{c.name}</h4>
                                    </div>
                                </div> 
                            </div>
                        </div>).slice(0,4)
                    }

                </div>
 
                <Link to="/Courses">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-3">
                            More Courses
                        </button>
                </Link>
                
            </div>   
        </div>
        
    );
};

export default Service;