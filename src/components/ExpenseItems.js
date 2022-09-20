import "../styles/ExpenseItems.css";

function ExpenseItems(props) {
  return (
    <div className="main">
      <div className="item">
        <div className="item-date">
          <p>{props.date.getFullYear()}</p>
          <p>{props.date.toLocaleString('en-US', {month: 'long'})}</p>
          <p>{props.date.getDate()}</p>
        </div>
        <div className="item-title">{props.title}</div>
        <div className="item-price">{props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
