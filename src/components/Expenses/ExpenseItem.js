import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  
  const clickHandle = ()=>{
    alert("clicked")
  }

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick = {clickHandle}>change title</button>
    </div>
  );
}

export default ExpenseItem;