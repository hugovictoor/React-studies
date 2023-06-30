import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const[isEditiing, setIsEditing] = useState(false)

  const saveExpanseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false)
  };

  const editingHandler = () => {
    setIsEditing(!isEditiing)
  }

  return (
    <div className="new-expense">
      {!isEditiing && <button onClick={editingHandler}>Add New Expense</button>}
      {isEditiing &&<ExpenseForm onSaveExpenseData={saveExpanseDataHandler} onCancel={editingHandler} />}
    </div>
  );
};

export default NewExpense;
