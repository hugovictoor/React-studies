import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [year, setYear] = useState("2021");

  // let infoText = "2019, 2020 & 2021";

  // if (year === "2019") {
  //   infoText = "2020, 2021, 2022";
  // } else if (year === "2020") {
  //   infoText = "2019, 2021, 2022";
  // } else if (year === "2021") {
  //   infoText = "2019, 2020, 2022";
  // } else if (year === "2022") {
  //   infoText = "2019, 2020, 2021";
  // }

  const yearChoiceHandler = (enteredYear) => {
    setYear(enteredYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onYearChoice={yearChoiceHandler} />
      {/* <p>Data from {infoText} is Hidden</p> */}
      <ExpenseItem expense={props.items[0]} />
      <ExpenseItem expense={props.items[1]} />
      <ExpenseItem expense={props.items[2]} />
      <ExpenseItem expense={props.items[3]} />
    </Card>
  );
}

export default Expenses;
