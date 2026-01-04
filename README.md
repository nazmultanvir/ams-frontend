# Incident Management System - Frontend

A modern React-based incident management application for tracking and managing incidents. This application provides a clean, intuitive interface for creating, viewing, updating, and managing incidents without requiring user authentication.

## Features

- **📋 Incident List View**: View all incidents in a sortable table format
- **🔍 Advanced Filtering**: Filter incidents by status, priority, category, and assignee
- **➕ Create Incidents**: Create new incidents with detailed information
- **✏️ Edit Incidents**: Update existing incidents
- **👁️ Incident Details**: View detailed information about each incident
- **🗑️ Delete Incidents**: Remove incidents from the system
- **🔗 GitHub Integration**: Link incidents to GitHub issues and assign to Copilot
- **🤖 Copilot Assignment**: Assign incidents to GitHub Copilot for automated assistance
- **🎨 Modern UI**: Clean, responsive design that works on all devices
- **⚡ Real-time Updates**: Automatically refresh incident list after changes

## Incident Properties

Each incident includes:
- **Title**: Brief summary of the incident
- **Description**: Detailed description of the issue
- **Status**: open, in-progress, resolved, or closed
- **Priority**: low, medium, high, or critical
- **Category**: Type of incident (e.g., Infrastructure, Database, Authentication)
- **Assigned To**: Person responsible for handling the incident
- **Reported By**: Person who reported the incident
- **Timestamps**: Created and updated dates

## Tech Stack

- **React 18.3**: Modern React with hooks
- **Vite**: Fast development server and build tool
- **CSS3**: Custom styling with responsive design
- **Fetch API**: For API communication

## Prerequisites

Before running this application, make sure you have:

- Node.js (v16 or higher)
- npm or yarn
- The backend API server running on `http://localhost:5000`

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## API Configuration

The application is configured to proxy API requests to `http://localhost:5000`. This is set in the `vite.config.js` file:

```javascript
server: {
  port: 3000,
  proxy: {
    '/api': {
      target: 'http://localhost:5000',
      changeOrigin: true
    }
  }
}
```

If your backend API is running on a different port, update the `target` value accordingly.

## Project Structure

```
frontend/
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   │   ├── IncidentList.jsx        # Displays list of incidents
│   │   ├── IncidentList.css
│   │   ├── IncidentForm.jsx        # Form for creating/editing
│   │   ├── IncidentForm.css
│   │   ├── IncidentDetails.jsx     # Modal for viewing details
│   │   ├── IncidentDetails.css
│   │   ├── IncidentFilters.jsx     # Filter controls
│   │   └── IncidentFilters.css
│   ├── services/        # API services
│   │   └── incidentService.js      # API communication layer
│   ├── App.jsx          # Main application component
│   ├── App.css
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Usage

### Creating an Incident

1. Click the **"+ Create New Incident"** button in the header
2. Fill in the incident details:
   - Title (required)
   - Description (required)
   - Status (default: open)
   - Priority (default: medium)
   - Category (optional)
   - Assigned To (optional)
   - Reported By (optional)
3. Click **"Create Incident"** to save

### Viewing Incident Details

- Click on any row in the incident table to view full details
- A modal will appear showing all incident information

### Editing an Incident

- Click on an incident to view details
- Click the **"Edit Incident"** button in the modal
- Update the fields and click **"Update Incident"**

### Deleting an Incident

- Click the **"Delete"** button in the incident row
- Confirm the deletion when prompted

### Filtering Incidents

Use the filter controls above the incident list to filter by:
- **Status**: Open, In Progress, Resolved, Closed
- **Priority**: Low, Medium, High, Critical
- **Category**: Free text search
- **Assigned To**: Free text search

### GitHub Integration & Copilot Assignment

When GitHub issues are available, you can assign incidents to GitHub Copilot for automated assistance:

1. Click on an incident to view its details
2. In the **GitHub Integration** section, you'll see available GitHub issues
3. Select a relevant GitHub issue from the dropdown
4. Click **"Assign to Copilot"** to create a connection between the incident and GitHub issue
5. GitHub Copilot will be notified and can provide automated assistance

**Note**: This feature requires:
- Backend API endpoint for GitHub integration (`/api/github/issues`)
- Proper GitHub API configuration on the backend
- GitHub repository with issues enabled

Click **"Reset Filters"** to clear all filters.

## Building for Production

Create a production build:

```bash
**Incident Management:**
- `GET /api/incidents` - Get all incidents (with optional filters)
- `GET /api/incidents/:id` - Get a specific incident
- `POST /api/incidents` - Create a new incident
- `PUT /api/incidents/:id` - Update an incident
- `DELETE /api/incidents/:id` - Delete an incident

**GitHub Integration (Optional):**
- `GET /api/github/issues` - Get all GitHub issues
- `GET /api/github/issues/:number` - Get a specific GitHub issue
- `POST /api/github/issues` - Create a new GitHub issue
- `POST /api/github/issues/:number/assign-copilot` - Assign incident to Copilot
- `PUT /api/incidents/:id/link-github` - Link incident to GitHub issue
Preview the production build:

```bash
npm run preview
```

## API Endpoints Used

The application communicates with the following API endpoints:

- `GET /api/incidents` - Get all incidents (with optional filters)
- `GET /api/incidents/:id` - Get a specific incident
- `POST /api/incidents` - Create a new incident
- `PUT /api/incidents/:id` - Update an incident
- `DELETE /api/incidents/:id` - Delete an incident

## Styling


### GitHub Integration Not Working

If GitHub issues are not appearing:
1. Ensure the backend API has GitHub integration endpoints
2. Check GitHub API credentials and permissions
3. Verify the repository has issues enabled
4. Check browser console for GitHub API errors
5. The app will work normally without GitHub integration
The application uses custom CSS with:
- Responsive grid layouts
- Color-coded status and priority badges
- Smooth transitions and hover effects
- Mobile-friendly design
- Clean, modern aesthetic

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### API Connection Issues

If you see "Failed to load incidents", check:
1. Backend API server is running on `http://localhost:5000`
2. API is accessible at `/api/incidents`
3. CORS is properly configured on the backend
4. Browser console for specific error messages

### Build Issues

If you encounter build errors:
1. Delete `node_modules/` and `package-lock.json`
2. Run `npm install` again
3. Clear Vite cache: `rm -rf node_modules/.vite`

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License.

