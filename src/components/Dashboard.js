import React, { useEffect } from 'react';
import '../App.css';
import logo from '../assets/logo.png';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Construction Tracker'; // Sets tab title
  }, []);

  return (
    <div className="container">
      {/* Header with logo */}
      <header className="dashboard-header">
        <img src={logo} alt="My Build Tracker Logo" className="logo" />
        <h2>My Build Tracker</h2>
        </header>
      <h2>Dashboard</h2>

      <form>
        <label>Construction Tracker</label>

        <input type="text" placeholder="e.g. New Villa" />

        <label>Budget (₹)</label>
        <input type="number" placeholder="e.g. 1000000" />

        <label>Construction Type</label>
        <select>
          <option>Residential</option>
          <option>Commercial</option>
        </select>

        <label>Description</label>
        <textarea rows="4" placeholder="Project details..." />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Dashboard;
