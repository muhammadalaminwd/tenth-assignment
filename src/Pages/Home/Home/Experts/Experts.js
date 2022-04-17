import React from 'react';
import './Experts.css'
import expert1 from '../../../../images/images/teachers/teacher-1.jpg'
import expert2 from '../../../../images/images/teachers/teacher-2.jpg'
import expert3 from '../../../../images/images/teachers/teacher-3.jpg'
import Expert from '../Expert/Expert';

const teachers = [
    {id: 1, name: 'Muhammad Al Amin', img: expert1 , aboutme: 'I am your Math, English and Programming teacher. Teaching is my passion. I love to learn new things and share my knowledge with my students.'},
    {id: 2, name: 'Sagor Islam', img: expert2, aboutme: 'I am your History and Science teacher. I love to teach history and science. My teaching style will astonished you.'},
    {id: 3, name: 'Chris rock', img: expert3, aboutme: 'Hey guys, your Accounting teacher is here. My first love is Accounging. Life should be balanced like debit and credit.'}
]

const Experts = () => {
    return (
        <div id='experts' className='container'>
            <h2 className='our-teachers text-center mt-5'>OUR TEACHERS</h2>
            <div className="row">
            {
                teachers.map(expert => <Expert
                    key={expert.id}
                    expert = {expert}
                    ></Expert>)
            }
            </div>
        </div>
    );
};

export default Experts;<h2>Our Experts</h2>