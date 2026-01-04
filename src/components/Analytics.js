import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getCompletionTrendsData, getCategoryDistributionData } from '../services/dataService';
import './Analytics.css';

function Analytics() {
  const completionData = getCompletionTrendsData();
  const categoryData = getCategoryDistributionData();

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
