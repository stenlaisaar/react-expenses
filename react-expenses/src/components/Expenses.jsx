import { useState } from 'react'
import ExpensesFilter from './ExpensesFilter'
import ExpenseItem from './ExpenseItem'
import './UI/Expenses.css'

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2025')

  const filterChangeHandler = (year) => {
    console.log('Expenses -> filterChangeHandler:', year)
    setSelectedYear(year)
  }

  console.log('Expenses render - selectedYear:', selectedYear, 'items:', props.items)

  // The selected year is stored in state like a controlled input value.
  const filteredExpenses = props.items

  return (
    <div className='expenses'>
      <ExpensesFilter selected={selectedYear} onChangeFilter={filterChangeHandler} />
      {filteredExpenses.map((expense, index) => (
        <ExpenseItem key={index} data={expense} />
      ))}
    </div>
  )
}

export default Expenses
