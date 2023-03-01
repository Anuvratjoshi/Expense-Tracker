import React from "react";

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <li>
      <div>{title}</div>
      <div>${amount}</div>
      <div>{date.toISOString().slice(0, 10)}</div>
    </li>
  );
};

export default ExpenseItem;
