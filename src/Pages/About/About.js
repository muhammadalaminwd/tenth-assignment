import React from 'react';
import myImage from '../../images/images/My-Professional-Photo.jpg'

const About = () => {
    return (
        <div>
            <img src={myImage} alt="" width={300} />
            <h2>Assalamu Alaikum! My name is Muhammad Al Amin. My aim is to become a self taught software Engineer.</h2>
        </div>
    );
};

export default About;