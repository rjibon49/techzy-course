import React from 'react';
import { Link } from 'react-router-dom';
import useTutors from '../Hooks/useTutors';

const Teacher = () => {

    const [tutors] = useTutors();
    
    return (
        <div className="sm:w-full md:w-full xl:container:xl my-20">
            <div className="title text-center ">
                <h5 className="text-2xl text-green-900">People behind our success</h5>
                <h2 className="sm:text-2xl md:text-3xl xl:text-5xl font-bold"> Our tutors </h2>
                <p className="sm:text-sm md:text-base xl:text-base">
                Massa, et porttitor cras sed ultrices ullamcorper mauris semper iaculis.
                    Ornare suscipit purus nulla pharetra 
                    <p>velit, leo in Amet nulla nunc vitae
                    viverra pellentesque in eget. Mi ut sit ultrices sed.</p>
                </p>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-1 mx-1">
                    
                    {
                        tutors.map( t => 
                            <div className="">
                                <div className="m-2 ">
                                    <div className="bg-blue-700 rounded-md">
                                        <div>
                                            <img className="title-img" src={t.picture} alt="" />
                                        </div>
                                        <div className="text-center text-white ">
                                             <h4 className="text-2xl text-bold pt-2 ">{t.name}</h4>
                                            <p className="text-base mt-2">{t.jobTitle}</p>
                                            <Link to={`/tutors/${t.id}`}>
                                                <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-3 "> Profile
                                                </button>
                                            </Link>
                                        </div>
                                    </div> 
                                </div>
                            </div>).slice(1,5)
                    }
                </div>
 
                <Link to="/tutors">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-3">
                            More Tutors
                        </button>
                </Link>
                
            </div>   
        </div>
    );
};

export default Teacher;