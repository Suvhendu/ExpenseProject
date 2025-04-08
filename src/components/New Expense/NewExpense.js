import React from 'react'
import './NewExpense.css'
import Expenseform from './Expenseform'
const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    }

    props.onSaveData(expenseData)
    console.log(expenseData)
  } 

  return (
    <div>
        <Expenseform onSaveExpenseData = {saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense