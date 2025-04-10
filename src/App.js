import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/New Expense/NewExpense';
import { useState } from 'react';

function App() {
  let manual_Data = [
    {
      title: "School Fees",
      amount: 500,
      date: new Date(2025, 3, 24)
    },
    {
      title: "Car EMI",
      amount: 550,
      date: new Date(2025, 3, 24)
    },
    {
      title: "Grocery",
      amount: 150,
      date: new Date(2025, 3, 24)
    },
    {
      title: "Rent",
      amount: 250,
      date: new Date(2025, 3, 24)
    },
  ];


 
  const [expenses, setExpenses] = useState(manual_Data);

  const addExpenseHandler = (expense) => {  
    
    const final_data = [expense, ...manual_Data];
    setExpenses(final_data);
  }
  return (
    <div className="App">
      <h2>Start adding expenses here....! </h2>
      <NewExpense onSaveData={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
