import React, { useEffect, useState } from 'react';
import '../App.css';
import logo from '../assets/logo.png';
import { fetchProjects } from '../api'; // ✅ Make sure ../api.js exists

const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  // Fetch projects on mount
  useEffect(() => {
    fetchProjects().then(setProjects).catch(console.error);
  }, []);

  // Set tab title
  useEffect(() => {
    document.title = 'Construction Tracker';
  }, []);

  return (
    <div className="container">
      <h2>Dashboard</h2>

      {/* Display fetched projects */}
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project.name}</li>
        ))}
      </ul>

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
