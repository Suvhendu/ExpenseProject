import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/New Expense/NewExpense';

function App() {
  let expenses = [
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

  const addExpenseHandler = (expense) => {
    const expenseData = {
      ...expense
    };
    console.log(expenseData);

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
