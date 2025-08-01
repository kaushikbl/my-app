import React from 'react';
import Dashboard from './components/Dashboard';
import TaskForm from './components/TaskForm';
import MaterialForm from './components/MaterialForm';
import ExpenseForm from './components/ExpenseForm';

function App() {
  return (
    <div className="App">
      <h1>🏠 House Construction Manager</h1>
      <Dashboard />
      <hr />
      <TaskForm />
      <MaterialForm />
      <ExpenseForm />
    </div>
  );
}

export default App;
