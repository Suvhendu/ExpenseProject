import React, { useState } from 'react'
import './Expenseform.css'

function Expenseform(props) {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')  
    const [date, setDate] = useState('')

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
        const expenseData = {
            title: title,
            amount: amount,
            date: date
        }
        props.onSaveExpenseData(expenseData)
        
        console.log(expenseData)
        setTitle('')
        setAmount('')
        setDate('')
    }


    return (
        <div className="expense-form-container">
            <form className="expense-form" onSubmit={SubmitHandler}>
                <div className="expense-form__controls">
                    <div className="expense-form__control">
                        <label>Title</label>
                        <input type="text" value={title} onChange={titleChangeHandler} />
                    </div>
                    <div className="expense-form__control">
                        <label>Amount</label>
                        <input type="number" value={amount} onChange={amountChangeHandler}/>
                    </div>
                    <div className="expense-form__control">
                        <label>Date</label>
                        <input type="date" value={date} onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className="expense-form__actions">
                    <button type="button" className="cancel-button">Cancel</button>
                    <button type="submit" className="submit-button">Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default Expenseform