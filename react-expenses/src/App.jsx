import { useState } from 'react'
import Expenses from './components/Expenses.jsx';
import './components/UI/Expenses.css';

function App(){
  const [expenses, setExpenses] = useState([
    {
      date: new Date(2025, 10 ,12),
      title: 'New book',
      price: 30.99
    },
    {
      date: new Date (2024, 10, 12),
      title: 'New jeans.',
      price: 99.99
    },
    {
      date: new Date (2023, 10, 12),
      title: 'New bag.',
      price: 99.99
    }
  ])

  const addExpenseHandler = (enteredExpense) => {
    setExpenses(prevExpenses => [enteredExpense, ...prevExpenses])
  }

  return(
    <div className="App">
      <Expenses items={expenses} onAddExpense={addExpenseHandler} />
    </div>
  );
}

export default App