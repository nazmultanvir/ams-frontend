import './IncidentList.css';

const IncidentList = ({ incidents, onSelectIncident, onDeleteIncident }) => {
  const getPriorityClass = (priority) => {
    return `priority-${priority?.toLowerCase()}`;
  };

  const getStatusClass = (status) => {
    return `status-${status?.toLowerCase().replace(' ', '-')}`;
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  if (!incidents || incidents.length === 0) {
    return (
      <div className="no-incidents">
        <p>No incidents found. Create a new incident to get started.</p>
      </div>
    );
  }

  return (
    <div className="incident-list">
      <table className="incident-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Category</th>
            <th>Assigned To</th>
            <th>Reported By</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map((incident) => (
            <tr key={incident._id} onClick={() => onSelectIncident(incident)}>
              <td className="incident-title">{incident.title}</td>
              <td>
                <span className={`status-badge ${getStatusClass(incident.status)}`}>
                  {incident.status}
                </span>
              </td>
              <td>
                <span className={`priority-badge ${getPriorityClass(incident.priority)}`}>
                  {incident.priority}
                </span>
              </td>
              <td>{incident.category || 'N/A'}</td>
              <td>{incident.assignedTo || 'Unassigned'}</td>
              <td>{incident.reportedBy || 'N/A'}</td>
              <td className="date-cell">{formatDate(incident.createdAt)}</td>
              <td>
                <button
                  className="btn-delete"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (window.confirm('Are you sure you want to delete this incident?')) {
                      onDeleteIncident(incident._id);
                    }
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncidentList;
