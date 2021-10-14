import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Tutor.css'

const Tutor = (props) => {

    const {id,name, quate, jobTitle, picture } = props.tutor;
    
    return (
        <div className='tutor-details my-auto grid grid-cols-2 border rounded-md p-2 '>
            <div className="my-auto mx-auto">
                    <img  className=" rounded-full" src={picture} alt="Profile-Pic" />
            </div>               
            <div className="col-start-2">
                <Link to={`/tutors/${id}`} className="no-underline">
                     <h4><FontAwesomeIcon icon={faUser}/> {name}</h4> </Link>
                <h6>{jobTitle}</h6>
                <div className="">
                    <p><small>{quate}</small></p>
                </div>
                <span className=" -mt-3 pb-3">
                    <a href="/notfound"><i className="fab fa-facebook me-3"></i></a>
                    <a href="/notfound"><i className="fab fa-twitter me-3"></i></a>
                    <a href="/notfound"><i className="fab fa-linkedin me-3"></i></a>
                    <Link to={`/tutors/${id}`}>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-3">
                            Profile
                        </button>
                </Link>
                </span> 
            </div>
        </div>
    );
};

export default Tutor;