import ExpenseItem from './ExpenseItem'

import './Expenses.css'

function Expenses(props) {
  const expenses = props.expenseData;

  return (
    <div>
      <ExpenseItem key={expenses[0].id} expense={expenses[0]}></ExpenseItem>
      <ExpenseItem key={expenses[1].id} expense={expenses[1]}></ExpenseItem>
      <ExpenseItem key={expenses[2].id} expense={expenses[2]}></ExpenseItem>
      <ExpenseItem key={expenses[3].id} expense={expenses[3]}></ExpenseItem>
    </div>
  )
}

export default Expenses