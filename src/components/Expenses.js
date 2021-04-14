import ExpenseItem from './ExpenseItem'
import './Expenses.css'

function Expenses(props) {
  const expenses = props.expenseData;
  const expenseItems = expenses.map(item => (
    <ExpenseItem className="expenses" key={item.id} expense={item} />
  ))

  return (
    <div>
      {expenseItems}
    </div>
  )
}

export default Expenses