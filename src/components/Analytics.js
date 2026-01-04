import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Analytics.css';

function Analytics() {
  // Sample analytics data for assignment completion over time
  const completionData = [
    { month: 'Jan', completed: 12, pending: 8, overdue: 2 },
    { month: 'Feb', completed: 15, pending: 6, overdue: 1 },
    { month: 'Mar', completed: 18, pending: 5, overdue: 2 },
    { month: 'Apr', completed: 20, pending: 4, overdue: 1 },
    { month: 'May', completed: 22, pending: 6, overdue: 2 },
    { month: 'Jun', completed: 18, pending: 6, overdue: 2 }
  ];

  // Sample data for assignment distribution by category
  const categoryData = [
    { category: 'Math', count: 8 },
    { category: 'Science', count: 6 },
    { category: 'English', count: 5 },
    { category: 'History', count: 3 },
    { category: 'Programming', count: 2 }
  ];

  return (
    <div className="analytics">
      <h3>Analytics</h3>
      <div className="analytics-content">
        <div className="chart-container">
          <h4>Assignment Completion Trends</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={completionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="completed" stroke="#4CAF50" strokeWidth={2} />
              <Line type="monotone" dataKey="pending" stroke="#FF9800" strokeWidth={2} />
              <Line type="monotone" dataKey="overdue" stroke="#f44336" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h4>Assignments by Category</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#2196F3" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
