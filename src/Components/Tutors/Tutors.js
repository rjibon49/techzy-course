import React from 'react';
import useTutors from '../../Hooks/useTutors';
import Tutor from './Tutor/Tutor';

const Tutors = () => {
    const [tutors] = useTutors();

    return (
        <div className="sm:w-full md:w-full xl:container:xl my-20">
            <div className="title text-center mb-5">
                <h5 className="text-2xl text-green-900">People behind our success</h5>
                    <h2 className="sm:text-2xl md:text-3xl xl:text-5xl font-bold"> Our tutors </h2>
                    <p className="sm:text-sm md:text-base xl:text-base">
                    Massa, et porttitor cras sed ultrices ullamcorper mauris semper iaculis.Ornare suscipit purus nulla pharetra velit.
                    <p>leo in Amet nulla nunc vitae viverra pellentesque in eget. Mi ut sit ultrices sed.</p>
                    </p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mx-5">
                {
                    tutors.map( tutor => <Tutor
                        key = {tutor.id}
                        tutor = {tutor}
                        ></Tutor>)
                }
            </div>
            
        </div>
    );
};

export default Tutors;