import ExpenseItem from './ExpenseItem'

import './Expenses.css'

function Expenses(props) {
  const expenses = props.expenseData;

  return (
    <div>
      {expenses.map(item => <ExpenseItem key={item.id} expense={item} />)}
    </div>
  )
}

export default Expenses