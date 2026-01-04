// Mock GitHub issues for testing
// In production, this would be replaced with actual GitHub API calls

export const mockGitHubIssues = [
  {
    number: 42,
    title: 'Server performance degradation',
    state: 'open',
    labels: ['bug', 'high-priority'],
    created_at: '2026-01-03T10:30:00Z',
    updated_at: '2026-01-04T08:15:00Z',
  },
  {
    number: 38,
    title: 'Database connection timeout',
    state: 'open',
    labels: ['bug', 'infrastructure'],
    created_at: '2026-01-02T14:20:00Z',
    updated_at: '2026-01-03T16:45:00Z',
  },
  {
    number: 35,
    title: 'Authentication service issues',
    state: 'open',
    labels: ['bug', 'security'],
    created_at: '2026-01-01T09:10:00Z',
    updated_at: '2026-01-04T07:30:00Z',
  },
];

// Mock function to simulate API delay
export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
