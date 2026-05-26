import { useState } from 'react'
import NewExpense from './NewExpense'
import ExpensesFilter from './ExpensesFilter'
import ExpenseItem from './ExpenseItem'
import './UI/Expenses.css'

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2025')

  const filterChangeHandler = (year) => {
    setSelectedYear(year)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear
  })

  console.log('Expenses -> filteredExpenses:', filteredExpenses.length, 'items found for year', selectedYear)

  return (
    <div className='expenses'>
      <NewExpense onAddExpense={props.onAddExpense} />
      <ExpensesFilter selected={selectedYear} onChangeFilter={filterChangeHandler} />
      {filteredExpenses.map((expense, index) => (
        <ExpenseItem key={index} data={expense} />
      ))}
    </div>
  )
}

export default Expenses
