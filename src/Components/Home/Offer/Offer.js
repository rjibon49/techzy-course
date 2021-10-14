import React from 'react';
import './Offer.css'

const Offer = () => {
    return (
        <div className="sm:w-full md:w-full xl:container:xl my-20">

            {/* Title Section  */}

            <div className="offer-title text-center mb-10">
                <h5 className="text-2xl text-green-900">Guaranteed Success</h5>
                <h2 className="sm:text-2xl md:text-3xl xl:text-5xl font-bold"> What We Offer </h2>
                <p className="sm:text-sm sm:px-2 md:text-base xl:text-base ">
                Teachzy offers students the best of education and entertainment opportunities available in the area.
                <p> We are glad to take care of every student and university entrant.</p>
                </p>
            </div>

            {/* Body Section  */}

            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

                <div className="offer-details text-center px-5  ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="offer-icon"
                        fill="none" viewBox="0 0 24 24" 
                        stroke="currentColor">
                        <path strokeLinecap="round" 
                        strokeLinejoin="round" strokeWidth={2} 
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h2 className="text-3xl">
                        Online Education
                    </h2>
                    <p className="text-base">
                        Teachzy provides online education services with all learning materials and lectures available to you.
                    </p>
                </div>

                <div className="offer-details text-center px-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="offer-icon" 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                    <h2 className="text-2xl">
                        Programs & Courses
                    </h2>
                    <p className="text-base">
                        We offer a wide range of courses and programs that encompass lots of knowledge spheres.
                    </p>
                </div>
                
                <div className="offer-details text-center px-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="offer-icon" 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" 
                        strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                    <h2 className="text-3xl">
                        Campus Events
                    </h2>
                    <p className="text-base">
                        Our campus is the hub to a talented and diverse student community that turns opportunities into success.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Offer;