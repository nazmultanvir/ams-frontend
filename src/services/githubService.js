const API_BASE_URL = '/api';

export const githubService = {
  // Get all GitHub issues from the repository
  getIssues: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/github/issues`);
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub issues');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching GitHub issues:', error);
      throw error;
    }
  },

  // Get a specific GitHub issue
  getIssue: async (issueNumber) => {
    try {
      const response = await fetch(`${API_BASE_URL}/github/issues/${issueNumber}`);
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub issue');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching GitHub issue:', error);
      throw error;
    }
  },

  // Assign incident to GitHub Copilot
  assignToCopilot: async (issueNumber, incidentData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/github/issues/${issueNumber}/assign-copilot`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(incidentData),
      });
      if (!response.ok) {
        throw new Error('Failed to assign to Copilot');
      }
      return await response.json();
    } catch (error) {
      console.error('Error assigning to Copilot:', error);
      throw error;
    }
  },

  // Create a new GitHub issue from an incident
  createIssueFromIncident: async (incidentData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/github/issues`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: incidentData.title,
          body: `**Incident ID:** ${incidentData._id}
          
**Priority:** ${incidentData.priority}
**Status:** ${incidentData.status}
**Category:** ${incidentData.category || 'N/A'}

**Description:**
${incidentData.description}

**Reported By:** ${incidentData.reportedBy || 'N/A'}
**Created At:** ${new Date(incidentData.createdAt).toLocaleString()}`,
          labels: [
            'incident',
            `priority:${incidentData.priority}`,
            `status:${incidentData.status}`
          ],
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to create GitHub issue');
      }
      return await response.json();
    } catch (error) {
      console.error('Error creating GitHub issue:', error);
      throw error;
    }
  },

  // Link incident to existing GitHub issue
  linkIncidentToIssue: async (incidentId, issueNumber) => {
    try {
      const response = await fetch(`${API_BASE_URL}/incidents/${incidentId}/link-github`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ githubIssue: issueNumber }),
      });
      if (!response.ok) {
        throw new Error('Failed to link GitHub issue');
      }
      return await response.json();
    } catch (error) {
      console.error('Error linking GitHub issue:', error);
      throw error;
    }
  },
};
