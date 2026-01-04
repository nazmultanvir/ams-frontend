import { useState, useEffect } from 'react';
import './App.css';
import IncidentList from './components/IncidentList';
import IncidentForm from './components/IncidentForm';
import IncidentDetails from './components/IncidentDetails';
import IncidentFilters from './components/IncidentFilters';
import { incidentService } from './services/incidentService';

function App() {
  const [incidents, setIncidents] = useState([]);
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [editingIncident, setEditingIncident] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch incidents on mount and when filters change
  useEffect(() => {
    fetchIncidents();
  }, [filters]);

  const fetchIncidents = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await incidentService.getAllIncidents(filters);
      setIncidents(response.data || []);
    } catch (err) {
      setError('Failed to load incidents. Please check if the API server is running.');
      console.error('Error fetching incidents:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateNew = () => {
    setEditingIncident(null);
    setShowForm(true);
    setShowDetails(false);
  };

  const handleSaveIncident = async (formData) => {
    try {
      if (editingIncident) {
        await incidentService.updateIncident(editingIncident._id, formData);
      } else {
        await incidentService.createIncident(formData);
      }
      setShowForm(false);
      setEditingIncident(null);
      fetchIncidents();
    } catch (err) {
      alert('Failed to save incident. Please try again.');
      console.error('Error saving incident:', err);
    }
  };

  const handleDeleteIncident = async (id) => {
    try {
      await incidentService.deleteIncident(id);
      fetchIncidents();
    } catch (err) {
      alert('Failed to delete incident. Please try again.');
      console.error('Error deleting incident:', err);
    }
  };

  const handleSelectIncident = (incident) => {
    setSelectedIncident(incident);
    setShowDetails(true);
  };

  const handleEditFromDetails = (incident) => {
    setEditingIncident(incident);
    setShowDetails(false);
    setShowForm(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedIncident(null);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingIncident(null);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Incident Management System</h1>
        <button className="btn-create" onClick={handleCreateNew}>
          + Create New Incident
        </button>
      </header>

      <main className="app-main">
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {showForm ? (
          <IncidentForm
            incident={editingIncident}
            onSave={handleSaveIncident}
            onCancel={handleCancelForm}
          />
        ) : (
          <>
            <IncidentFilters onFilterChange={handleFilterChange} />
            
            {loading ? (
              <div className="loading">Loading incidents...</div>
            ) : (
              <IncidentList
                incidents={incidents}
                onSelectIncident={handleSelectIncident}
                onDeleteIncident={handleDeleteIncident}
              />
            )}
          </>
        )}

        {showDetails && (
          <IncidentDetails
            incident={selectedIncident}
            onEdit={handleEditFromDetails}
            onClose={handleCloseDetails}
          />
        )}
      </main>
    </div>
  );
}

export default App;
