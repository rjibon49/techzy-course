import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="sm:w-full md:w-full xl:container:xl h-screen -mt-16 banner-bg ">
            <div className="banner">
                <div className="text-center text-white banner-text w-1/2">
                    <h1 className="sm:-4xl md:text-5xl xl:text-9xl font-black ">
                        404
                    </h1>
                    <h3 className="sm:text-1xl md:text-3xl xl:text-5xl ">
                        The page you’re looking for doesn’t exist :(
                    </h3>
                    <Link to="/Home">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-3">
                            Go To Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;