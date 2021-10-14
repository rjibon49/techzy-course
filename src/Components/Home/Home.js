import React from 'react';
import Service from '../Service';
import Teacher from '../Teacher';
import Header from './Header';
import Offer from './Offer/Offer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="px-5">
                <Offer></Offer>
                <Service></Service>
                <Teacher></Teacher>
            </div>
        </div>
    );
};

export default Home;