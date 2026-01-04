import { useState } from 'react';
import './IncidentFilters.css';

const IncidentFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    status: '',
    priority: '',
    category: '',
    assignedTo: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const resetFilters = {
      status: '',
      priority: '',
      category: '',
      assignedTo: ''
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="filters-container">
      <h3>Filter Incidents</h3>
      <div className="filters-grid">
        <div className="filter-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            name="priority"
            value={filters.priority}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="critical">Critical</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            placeholder="e.g., Infrastructure"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="assignedTo">Assigned To</label>
          <input
            type="text"
            id="assignedTo"
            name="assignedTo"
            value={filters.assignedTo}
            onChange={handleFilterChange}
            placeholder="e.g., John Doe"
          />
        </div>
      </div>

      <button className="btn-reset" onClick={handleReset}>
        Reset Filters
      </button>
    </div>
  );
};

export default IncidentFilters;
