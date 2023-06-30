import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [year, setYear] = useState("2021");

  const yearChoiceHandler = (enteredYear) => {
    setYear(enteredYear);
  };

  const filteredItems = props.items.filter((item) => {
    return item.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onYearChoice={yearChoiceHandler} />
      <ExpensesChart expenses={filteredItems}/>
      <ExpensesList items={filteredItems}/>
    </Card>
  );
}

export default Expenses;
