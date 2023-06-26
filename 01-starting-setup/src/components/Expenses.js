import ExpenseItem from "./ExpenseItem";
import React from "react";
import "./Expenses.css"
import Card from "./Card"

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem expense={props.items[0]} />
      <ExpenseItem expense={props.items[1]} />
      <ExpenseItem expense={props.items[2]} />
      <ExpenseItem expense={props.items[3]} />
    </Card>
  );
}

export default Expenses;
