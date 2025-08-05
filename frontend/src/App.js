import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import TaskForm from './components/TaskForm';
import MaterialForm from './components/MaterialForm';
import ExpenseForm from './components/ExpenseForm';
import Login from './pages/Login.JS';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>🏠 House Construction</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Dashboard />
                <hr />
                <TaskForm />
                <MaterialForm />
                <ExpenseForm />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
