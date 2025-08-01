import React, { useState } from 'react';

export default function TaskForm() {
  const [task, setTask] = useState({ title: '', dueDate: '', status: 'pending' });

  const handleChange = e => setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Task submitted:', task);
    // Send to backend API later
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Task</h3>
      <input name="title" placeholder="Task Title" onChange={handleChange} />
      <input name="dueDate" type="date" onChange={handleChange} />
      <select name="status" onChange={handleChange}>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}
