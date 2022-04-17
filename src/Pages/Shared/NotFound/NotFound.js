import React from 'react';
import cat from '../../../images/images/cat.jpg'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Mechanic is sleeping</h2>
            <img src={cat} alt="" />
        </div>
    );
};

export default NotFound;