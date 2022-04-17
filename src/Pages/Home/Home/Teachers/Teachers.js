import React from 'react';
import './Teachers.css'
import teacher1 from '../../../../images/images/teachers/teacher-1.jpg'
import teacher2 from '../../../../images/images/teachers/teacher-2.jpg'
import teacher3 from '../../../../images/images/teachers/teacher-3.jpg'
import Teacher from '../../Home/Teacher/Teacher';

const teachers = [
    {id: 1, name: 'Muhammad Al Amin', img: teacher1 , aboutme: 'I will be your Math, English and Programming teacher. Teaching is my passion. I love to learn new things and share my knowledge with my students.'},
    {id: 2, name: 'Sagor Islam', img: teacher2, aboutme: 'I am your History and Science teacher. I love to teach history and science. My teaching style will astonished you.'},
    {id: 3, name: 'Chris rock', img: teacher3, aboutme: 'Hey guys, your Accounting teacher is here. My first love is Accounging. Life should be balanced like debit and credit.'}
]

const Teachers = () => {
    return (
        <div id='teachers' className='container'>
            <h2 className='our-teachers text-center mt-5'>OUR TEACHERS</h2>
            <div className="row">
            {
                teachers.map(teacher => <Teacher
                    key={teacher.id}
                    teacher = {teacher}
                    ></Teacher>)
            }
            </div>
        </div>
    );
};

export default Teachers;