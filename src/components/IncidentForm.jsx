import { useState, useEffect } from 'react';
import './IncidentForm.css';

const IncidentForm = ({ incident, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'open',
    priority: 'medium',
    category: '',
    assignedTo: '',
    reportedBy: ''
  });

  useEffect(() => {
    if (incident) {
      setFormData({
        title: incident.title || '',
        description: incident.description || '',
        status: incident.status || 'open',
        priority: incident.priority || 'medium',
        category: incident.category || '',
        assignedTo: incident.assignedTo || '',
        reportedBy: incident.reportedBy || ''
      });
    }
  }, [incident]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="incident-form-container">
      <h2>{incident ? 'Edit Incident' : 'Create New Incident'}</h2>
      <form onSubmit={handleSubmit} className="incident-form">
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Brief description of the incident"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Detailed description of the incident"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="open">Open</option>
              <option value="in-progress">In Progress</option>
              <option value="resolved">Resolved</option>
              <option value="closed">Closed</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="e.g., Infrastructure, Database"
            />
          </div>

          <div className="form-group">
            <label htmlFor="assignedTo">Assigned To</label>
            <input
              type="text"
              id="assignedTo"
              name="assignedTo"
              value={formData.assignedTo}
              onChange={handleChange}
              placeholder="Name of assignee"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="reportedBy">Reported By</label>
          <input
            type="text"
            id="reportedBy"
            name="reportedBy"
            value={formData.reportedBy}
            onChange={handleChange}
            placeholder="Name of reporter"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary">
            {incident ? 'Update Incident' : 'Create Incident'}
          </button>
          <button type="button" className="btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default IncidentForm;
