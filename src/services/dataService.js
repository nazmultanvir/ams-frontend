// Sample data service for AMS Frontend
// In a real application, this would fetch data from an API

export const getDashboardStats = () => {
  return {
    totalAssignments: 24,
    completed: 18,
    pending: 6,
    overdue: 2
  };
};

export const getCompletionTrendsData = () => {
  return [
    { month: 'Jan', completed: 12, pending: 8, overdue: 2 },
    { month: 'Feb', completed: 15, pending: 6, overdue: 1 },
    { month: 'Mar', completed: 18, pending: 5, overdue: 2 },
    { month: 'Apr', completed: 20, pending: 4, overdue: 1 },
    { month: 'May', completed: 22, pending: 6, overdue: 2 },
    { month: 'Jun', completed: 18, pending: 6, overdue: 2 }
  ];
};

export const getCategoryDistributionData = () => {
  return [
    { category: 'Math', count: 8 },
    { category: 'Science', count: 6 },
    { category: 'English', count: 5 },
    { category: 'History', count: 3 },
    { category: 'Programming', count: 2 }
  ];
};
