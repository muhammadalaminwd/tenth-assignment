import React from 'react';
import myImage from '../../images/images/My-Professional-Photo.jpg'

const About = () => {
    return (
        <div>
            <img src={myImage} alt="" width={300} />
            <h2 className='mt-4'>Muhammad Al Amin</h2>
            <div>
            <p className='text-start m-4'>Assalamu Alaikum! My aim is to become a self-taught software Engineer. I will work on it until I get there. Currently, I'm learning web development at Programming Hero. It's a very good place to learn web development. They are very caring. So my 1st helping hand is Programming Hero to become a software Engineer. Insha Allah I will learn consistently to fulfil my dream. Though it's not an easy job, I will try my best. I got a learning habit from Programming Hero and I will keep it until I fulfil my dream. I will Code, Practice, Practice and Practice. Maybe It will make me perfect and give me energy to learn something new. That's all. Please keep me in your prayer.</p>
            </div>
        </div>
    );
};

export default About;