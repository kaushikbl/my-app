import React, { useState } from 'react';

export default function ExpenseForm() {
  const [expense, setExpense] = useState({ type: '', amount: '' });

  const handleChange = e => setExpense({ ...expense, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Expense submitted:', expense);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Expense</h3>
      <input name="type" placeholder="Expense Type" onChange={handleChange} />
      <input name="amount" type="number" placeholder="Amount" onChange={handleChange} />
      <button type="submit">Add Expense</button>
    </form>
  );
}
