import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses }) => {
  return (
    <ul>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
      ))}
    </ul>
  );
};

export default ExpenseList;
