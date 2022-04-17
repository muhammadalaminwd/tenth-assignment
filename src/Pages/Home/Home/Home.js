import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Teachers from './Teachers/Teachers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Teachers></Teachers>
        </div>
    );
};

export default Home;