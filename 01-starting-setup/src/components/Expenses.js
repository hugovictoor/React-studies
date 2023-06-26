import ExpenseItem from "./ExpenseItem";
import React from "react";
import "./Expenses.css"

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem expense={props.items[0]} />
      <ExpenseItem expense={props.items[1]} />
      <ExpenseItem expense={props.items[2]} />
      <ExpenseItem expense={props.items[3]} />
    </div>
  );
}

export default Expenses;
