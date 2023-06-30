import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";

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
      {filteredItems.length === 0 && <p>No expenses found.</p>}
      {filteredItems.length > 0 &&
        filteredItems.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      }
    </Card>
  );
}

export default Expenses;
