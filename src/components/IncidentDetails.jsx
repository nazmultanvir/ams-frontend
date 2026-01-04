import { useState, useEffect } from 'react';
import './IncidentDetails.css';

const IncidentDetails = ({ incident, onEdit, onClose }) => {
    const [assigning, setAssigning] = useState(false);
    const [githubDetails, setGithubDetails] = useState(null);
    const [jiraDetails, setJiraDetails] = useState(null);
    const [loadingIntegrations, setLoadingIntegrations] = useState(true);

    if (!incident) {
        return null;
    }

    useEffect(() => {
        fetchIntegrationDetails();
    }, [incident._id]);

    const fetchIntegrationDetails = async () => {
        setLoadingIntegrations(true);
        try {
            // Fetch incident details which include GitHub and Jira info
            const response = await fetch(`/api/incidents/${incident._id}`);
            if (response.ok) {
                const data = await response.json();
                const incidentData = data.data || data;

                // Check if GitHub integration exists
                if (incidentData.githubIssueNumber) {
                    setGithubDetails({
                        issueId: incidentData.githubIssueId,
                        issueNumber: incidentData.githubIssueNumber,
                        url: incidentData.githubIssueUrl,
                    });
                }

                // Check if Jira integration exists
                if (incidentData.jiraKey) {
                    setJiraDetails({
                        id: incidentData.jiraId,
                        key: incidentData.jiraKey,
                        url: incidentData.jiraUrl,
                    });
                }
            }
        } catch (error) {
            console.log('Integration details not available:', error);
        }
        setLoadingIntegrations(false);
    }

    const handleAssignToCopilot = async () => {
        setAssigning(true);
        try {
            const response = await fetch(`/api/incidents/${incident._id}/assign-github`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    assignees: ['nazmultanvir'],
                    triggerCopilot: true,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to assign to Copilot');
            }

            const data = await response.json();
            alert('✅ Successfully assigned to GitHub Copilot! The issue has been created and Copilot has been notified.');
        } catch (error) {
            console.error('Error assigning to Copilot:', error);
            alert('❌ Failed to assign to GitHub Copilot. Please ensure the backend API is running and GitHub integration is configured.');
        } finally {
            setAssigning(false);
        }
    };

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

                    {/* GitHub Integration Details */}
                    {githubDetails && (
                        <div className="detail-section integration-section">
                            <h4>🔗 GitHub Integration</h4>
                            <div className="integration-content">
                                <div className="integration-item">
                                    <label>Issue Number</label>
                                    <a
                                        href={githubDetails.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="integration-link"
                                    >
                                        #{githubDetails.issueNumber}
                                    </a>
                                </div>
                                <div className="integration-item">
                                    <label>Issue ID</label>
                                    <span className="issue-id">{githubDetails.issueId}</span>
                                </div>
                                <div className="integration-item">
                                    <label>Link</label>
                                    <a
                                        href={githubDetails.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="integration-link"
                                    >
                                        View on GitHub →
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Jira Integration Details */}
                    {jiraDetails && (
                        <div className="detail-section integration-section jira-section">
                            <h4>🎯 Jira Integration</h4>
                            <div className="integration-content">
                                <div className="integration-item">
                                    <label>Issue Key</label>
                                    <a
                                        href={jiraDetails.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="integration-link"
                                    >
                                        {jiraDetails.key}
                                    </a>
                                </div>
                                <div className="integration-item">
                                    <label>Issue ID</label>
                                    <span className="issue-id">{jiraDetails.id}</span>
                                </div>
                                <div className="integration-item">
                                    <label>Link</label>
                                    <a
                                        href={jiraDetails.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="integration-link"
                                    >
                                        View on Jira →
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}

                    {loadingIntegrations && (
                        <div className="detail-section">
                            <p className="loading-text">Loading integration details...</p>
                        </div>
                    )}

                    {!loadingIntegrations && !githubDetails && !jiraDetails && (
                        <div className="detail-section integration-section">
                            <p className="no-integration-text">ℹ️ No GitHub or Jira integrations linked to this incident.</p>
                        </div>
                    )}
                </div>

                <div className="modal-actions">
                    <button
                        className="btn-copilot"
                        onClick={handleAssignToCopilot}
                        disabled={assigning}
                        title="Create a GitHub issue and assign to Copilot for automated assistance"
                    >
                        <span className="copilot-icon">🤖</span>
                        {assigning ? 'Assigning...' : 'Assign to Copilot'}
                    </button>
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
