import React from 'react';
import Analytics from './Analytics';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-content">
        <div className="dashboard-overview">
          <div className="stat-card">
            <h3>Total Assignments</h3>
            <p className="stat-value">24</p>
          </div>
          <div className="stat-card">
            <h3>Completed</h3>
            <p className="stat-value">18</p>
          </div>
          <div className="stat-card">
            <h3>Pending</h3>
            <p className="stat-value">6</p>
          </div>
          <div className="stat-card">
            <h3>Overdue</h3>
            <p className="stat-value">2</p>
          </div>
        </div>
        <div className="dashboard-analytics">
          <Analytics />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
