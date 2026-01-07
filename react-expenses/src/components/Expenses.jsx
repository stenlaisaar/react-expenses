import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
    return(
        <div>
            <ExpenseItem data={expenses[0]}/>
            <ExpenseItem data={expenses[1]}/>
        </div>
    )
}


export default Expenses