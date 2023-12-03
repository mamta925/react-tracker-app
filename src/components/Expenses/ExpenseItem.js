import {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  let [title, setTitle] = useState(props.title)
  
  const clickHandle = ()=>{
    setTitle("Changed")
  }

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick = {clickHandle}>change title</button>
    </div>
  );
}

export default ExpenseItem;