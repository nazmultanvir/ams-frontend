const API_BASE_URL = '/api';

export const incidentService = {
  // Get all incidents with optional filters
  getAllIncidents: async (filters = {}) => {
    try {
      const params = new URLSearchParams();
      
      if (filters.status) params.append('status', filters.status);
      if (filters.priority) params.append('priority', filters.priority);
      if (filters.assignedTo) params.append('assignedTo', filters.assignedTo);
      if (filters.category) params.append('category', filters.category);
      
      const queryString = params.toString();
      const url = `${API_BASE_URL}/incidents${queryString ? '?' + queryString : ''}`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch incidents');
      return await response.json();
    } catch (error) {
      console.error('Error fetching incidents:', error);
      throw error;
    }
  },

  // Get single incident by ID
  getIncidentById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/incidents/${id}`);
      if (!response.ok) throw new Error('Failed to fetch incident');
      return await response.json();
    } catch (error) {
      console.error('Error fetching incident:', error);
      throw error;
    }
  },

  // Create new incident
  createIncident: async (incidentData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/incidents`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(incidentData),
      });
      if (!response.ok) throw new Error('Failed to create incident');
      return await response.json();
    } catch (error) {
      console.error('Error creating incident:', error);
      throw error;
    }
  },

  // Update incident
  updateIncident: async (id, updateData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/incidents/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });
      if (!response.ok) throw new Error('Failed to update incident');
      return await response.json();
    } catch (error) {
      console.error('Error updating incident:', error);
      throw error;
    }
  },

  // Delete incident
  deleteIncident: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/incidents/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete incident');
      return await response.json();
    } catch (error) {
      console.error('Error deleting incident:', error);
      throw error;
    }
  },
};
