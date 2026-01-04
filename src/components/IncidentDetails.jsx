import './IncidentDetails.css';

const IncidentDetails = ({ incident, onEdit, onClose }) => {
  if (!incident) {
    return null;
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  const getPriorityClass = (priority) => {
    return `priority-${priority?.toLowerCase()}`;
  };

  const getStatusClass = (status) => {
    return `status-${status?.toLowerCase().replace(' ', '-')}`;
  };

  return (
    <div className="incident-details-overlay" onClick={onClose}>
      <div className="incident-details-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Incident Details</h2>
          <button className="btn-close" onClick={onClose}>×</button>
        </div>

        <div className="modal-content">
          <div className="detail-section">
            <h3>{incident.title}</h3>
            <div className="badges">
              <span className={`status-badge ${getStatusClass(incident.status)}`}>
                {incident.status}
              </span>
              <span className={`priority-badge ${getPriorityClass(incident.priority)}`}>
                {incident.priority}
              </span>
            </div>
          </div>

          <div className="detail-section">
            <h4>Description</h4>
            <p>{incident.description}</p>
          </div>

          <div className="detail-grid">
            <div className="detail-item">
              <label>Category</label>
              <span>{incident.category || 'N/A'}</span>
            </div>
            <div className="detail-item">
              <label>Assigned To</label>
              <span>{incident.assignedTo || 'Unassigned'}</span>
            </div>
            <div className="detail-item">
              <label>Reported By</label>
              <span>{incident.reportedBy || 'N/A'}</span>
            </div>
            <div className="detail-item">
              <label>Created At</label>
              <span>{formatDate(incident.createdAt)}</span>
            </div>
            <div className="detail-item">
              <label>Updated At</label>
              <span>{formatDate(incident.updatedAt)}</span>
            </div>
            <div className="detail-item">
              <label>ID</label>
              <span className="incident-id">{incident._id}</span>
            </div>
          </div>
        </div>

        <div className="modal-actions">
          <button className="btn-primary" onClick={() => onEdit(incident)}>
            Edit Incident
          </button>
          <button className="btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncidentDetails;
