import React, { useEffect } from 'react';
import '../App.css';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'My Build Tracker'; // Sets tab title
  }, []);
  return (
    <div className="container">
      <h2>Dashboard</h2>

      <form>
        <label>Project Name</label>

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
