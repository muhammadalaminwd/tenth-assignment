import React from 'react';
import myImage from '../../images/images/My-Professional-Photo.jpg'

const About = () => {
    return (
        <div>
            <img src={myImage} alt="" width={300} />
            <h2>Muhammad Al Amin</h2>
            <div className=''>
            <p>Assalamu Alaikum! My aim is to become a self-taught software Engineer. I will work on it until I get there. Currently, I'm learning web development at Programming Hero. It's a very good place to learn web development. They are very caring. So my 1st helping hand is Programming Hero to become a software Engineer. Insha Allah I will learn consistently to fulfil my dream. Though it's not an easy job, I will try my best.</p>
            </div>
        </div>
    );
};

export default About;