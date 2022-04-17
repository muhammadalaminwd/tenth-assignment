import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center m-5 bg-black d-flex align-items-center justify-content-center'>
        <div className='conatiner d-flex justify-content-between align-items-center'>
        <div className='copyright'>
        <p><small className='text-white'>copyright @{year}</small></p>
        </div>
        <div className='app-link'>
        <h4 className='text-white text-muted'>Get the app</h4>
        <div className='border border-white rounded-3 d-flex align-items-center'>

        </div>
        </div>
        
        </div>
        </footer>
    );
};

export default Footer;