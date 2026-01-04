# AMS Frontend - Assignment Management System

A React-based frontend application for managing assignments with an interactive dashboard and analytics.

## Features

- **Dashboard Overview**: Quick statistics showing total, completed, pending, and overdue assignments
- **Analytics Section**: 
  - Line chart displaying assignment completion trends over time
  - Bar chart showing assignment distribution by category
- Responsive design for various screen sizes
- Clean and modern UI

## Installation

```bash
npm install
```

## Running the Application

### Development Mode
```bash
npm start
```
The application will open at [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
```

## Project Structure

```
ams-frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Dashboard.js       # Main dashboard component
│   │   ├── Dashboard.css
│   │   ├── Analytics.js       # Analytics visualization component
│   │   └── Analytics.css
│   ├── services/
│   │   └── dataService.js     # Data service for dashboard and analytics
│   ├── App.js                 # Root application component
│   ├── App.css
│   ├── index.js               # Application entry point
│   └── index.css
└── package.json
```

## Technologies Used

- **React** 18.2.0 - UI framework
- **Recharts** 2.10.0 - Data visualization library
- **React Scripts** 5.0.1 - Build tooling

## Issue Resolution

This project addresses the dashboard analytics blank display issue (Incident ID: 695a1eedcacd66b1439cf17b) by implementing:
1. Complete React application structure
2. Functional Analytics component with proper data visualization
3. Sample data service to populate charts
4. Responsive and accessible UI components

The analytics section now properly displays:
- Assignment completion trends (completed, pending, overdue assignments over time)
- Assignment distribution by category (Math, Science, English, History, Programming)

## License

MIT
