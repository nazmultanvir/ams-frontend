import React from 'react';
import Analytics from './Analytics';
import { getDashboardStats } from '../services/dataService';
import './Dashboard.css';

function Dashboard() {
  const stats = getDashboardStats();
  
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-content">
        <div className="dashboard-overview">
          <div className="stat-card">
            <h3>Total Assignments</h3>
            <p className="stat-value">{stats.totalAssignments}</p>
          </div>
          <div className="stat-card">
            <h3>Completed</h3>
            <p className="stat-value">{stats.completed}</p>
          </div>
          <div className="stat-card">
            <h3>Pending</h3>
            <p className="stat-value">{stats.pending}</p>
          </div>
          <div className="stat-card">
            <h3>Overdue</h3>
            <p className="stat-value">{stats.overdue}</p>
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
