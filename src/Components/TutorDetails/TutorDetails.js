import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const TutorDetails = () => {
    const {tutorId} = useParams();
    const [tutorDetails, setTutorDetails] = useState({})

    useEffect(() => {
        const url = `https://api.npoint.io/dc133d9617140fe783aa/${tutorId}`;
        fetch(url)
        .then ( res => res.json())
        .then ( data => setTutorDetails(data));
    }, []);

    const {name, jobTitle, email, Number, picture } = tutorDetails;


    return (
        <div className="sm:w-full md:w-full xl:container px-20 my-20 mx-auto">
            <div className="pb-3">
                <h1>{name}</h1>
                <h5>{jobTitle}</h5>
            </div>
            <div className="sm:flex wrap flex gap-5  ">
                <img src={picture} className="w-3/5 object-fill h-80 rounded-lg" alt="" />
                <div className="w-2/5 px-10 bg-gray-400 rounded-lg">
                    <h3 className="text-center my-4 pb-3">Profile Details</h3>
                    <div className="flex justify-between ">
                        <div><h5>Position: </h5></div> 
                        <div className=""><h6> {jobTitle}</h6></div>
                    </div>
                    <div className="flex justify-between">
                        <div><h5>Experience: </h5></div> 
                        <div className=""><h6> {Number}</h6></div>
                    </div>
                    <div className="flex justify-between">
                        <div><h5>E-mail: </h5></div> 
                        <div className=""><h6> {email}</h6></div>
                    </div>
                    <div className="flex justify-between">
                        <div><h5>Phone: </h5></div> 
                        <div className=""><h6> {Number}</h6></div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default TutorDetails;