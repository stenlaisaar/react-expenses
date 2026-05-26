import { useState } from 'react'
import './UI/NewExpense.css'

const NewExpense = (props) => {
  const [editForm, setEditForm] = useState(false)
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  const startEditingHandler = () => {
    setEditForm(true)
  }

  const cancelHandler = () => {
    setEditForm(false)
    resetForm()
  }

  const resetForm = () => {
    setTitle('')
    setAmount('')
    setDate('')
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const expenseData = {
      title: title,
      price: +amount,
      date: new Date(date)
    }

    props.onAddExpense(expenseData)
    resetForm()
    setEditForm(false)
  }

  if (!editForm) {
    return (
      <div className='new-expense'>
        <button onClick={startEditingHandler}>Add New Expense</button>
      </div>
    )
  }

  return (
    <div className='new-expense'>
      <div className='new-expense__form'>
        <form onSubmit={submitHandler}>
          <div className='new-expense__control'>
            <label>Title</label>
            <input
              type='text'
              value={title}
              onChange={event => setTitle(event.target.value)}
              placeholder='Expense title'
            />
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input
              type='number'
              value={amount}
              onChange={event => setAmount(event.target.value)}
              placeholder='0.00'
              min='0.01'
              step='0.01'
            />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input
              type='date'
              value={date}
              onChange={event => setDate(event.target.value)}
            />
          </div>
          <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
            <button type='button' onClick={cancelHandler}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewExpense
