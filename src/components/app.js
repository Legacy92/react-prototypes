import React from 'react';
import Table from './table.js';

const students = [
    {
        name: 'Hanh Pham',
        course: 'Intro to Psychology',
        grade: 50
    },
    {
        name: 'Mike Jones',
        course: 'Math',
        grade: 75
    },
    {
        name: 'Tony Tran',
        course: 'Science',
        grade: 80
    }
];

export default () => {
    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
};

