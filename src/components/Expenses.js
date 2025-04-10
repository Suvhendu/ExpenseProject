import React from 'react';
import ExpenseItem from './Expenseitem';
import './Expenses.css';

const Expenses = (props) => {
    return (
        <div className="expenses">

            {
                props.item.map(
                    expense => (
                        <ExpenseItem
                            date={props.item[0].date}
                            title={props.item[0].title}
                            amount={props.item[0].amount}
                        />
                    )
                )
            }



        </div>
    );
};

export default Expenses;