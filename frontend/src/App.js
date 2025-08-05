import React from 'react';
import Dashboard from './components/Dashboard';
import TaskForm from './components/TaskForm';
import MaterialForm from './components/MaterialForm';
import ExpenseForm from './components/ExpenseForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>🏠 House Construction </h1>
      <Dashboard />
      <hr />
      <TaskForm />
      <MaterialForm />
      <ExpenseForm />
    </div>
  );
}

export default App;

import Login from './pages/Login';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;