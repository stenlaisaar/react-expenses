import ExpenseItem from './components/ExpenseItem.jsx';
import './components/UI/Expenses.css';


function App(){
  const expenses = [
    {
      date: new Date(2025, 10 ,12),
      title: 'New book',
      price: 30.99
    },
    {
      date: new Date (2025, 10, 12),
      title: 'New jeans.',
      price: 99.99
    }
  ]

  return(
    <div className="App">
      <div className="expenses">
        <ExpenseItem data={expenses[0]}/>
        <ExpenseItem data={expenses[1]}/>
      </div>
    </div>
  );
}

export default App