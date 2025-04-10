import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = (props) => {
    //const month = props.date.toLocaleString('en-US', { month: 'long' });
    //const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    //const year = props.date.getFullYear();

    const date2 = new Date(props.date);

    const month = date2.getMonth();
    const year = date2.getFullYear();
    const day = date2.getDate();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
};

export default ExpenseDate;