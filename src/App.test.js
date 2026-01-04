import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Assignment Management System heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Assignment Management System/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders Dashboard heading', () => {
  render(<App />);
  const dashboardElement = screen.getByText(/Dashboard/i);
  expect(dashboardElement).toBeInTheDocument();
});

test('renders Analytics section', () => {
  render(<App />);
  const analyticsElement = screen.getByText(/Analytics/i);
  expect(analyticsElement).toBeInTheDocument();
});

test('renders Total Assignments stat', () => {
  render(<App />);
  const statElement = screen.getByText(/Total Assignments/i);
  expect(statElement).toBeInTheDocument();
});
