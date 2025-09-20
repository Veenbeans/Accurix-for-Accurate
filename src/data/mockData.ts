// Mock data for the dashboard

export const ordersOverTime = [
  { month: 'Jan', orders: 1250, completed: 1200, pending: 50 },
  { month: 'Feb', orders: 1350, completed: 1300, pending: 50 },
  { month: 'Mar', orders: 1450, completed: 1400, pending: 50 },
  { month: 'Apr', orders: 1200, completed: 1150, pending: 50 },
  { month: 'May', orders: 1600, completed: 1550, pending: 50 },
  { month: 'Jun', orders: 1750, completed: 1700, pending: 50 },
];

export const statusDistribution = [
  { name: 'Completed', value: 85, color: 'hsl(var(--success))' },
  { name: 'In Progress', value: 10, color: 'hsl(var(--warning))' },
  { name: 'Pending', value: 3, color: 'hsl(var(--chart-primary))' },
  { name: 'Failed', value: 2, color: 'hsl(var(--destructive))' },
];

export const ordersByCheckType = [
  { type: 'Background Check', count: 450 },
  { type: 'Employment Verification', count: 320 },
  { type: 'Education Verification', count: 280 },
  { type: 'Reference Check', count: 190 },
  { type: 'Drug Test', count: 150 },
];

export const tatTrends = [
  { month: 'Jan', avgTAT: 2.5 },
  { month: 'Feb', avgTAT: 2.3 },
  { month: 'Mar', avgTAT: 2.1 },
  { month: 'Apr', avgTAT: 2.4 },
  { month: 'May', avgTAT: 2.0 },
  { month: 'Jun', avgTAT: 1.8 },
];

export const geoStatusData = [
  { geography: 'US', completed: 400, pending: 20, failed: 8 },
  { geography: 'Canada', completed: 200, pending: 15, failed: 5 },
  { geography: 'UK', completed: 180, pending: 12, failed: 3 },
  { geography: 'Australia', completed: 150, pending: 8, failed: 2 },
  { geography: 'Germany', completed: 120, pending: 6, failed: 4 },
];

export const ordersTableData = [
  {
    id: 'ORD-001',
    candidateName: 'John Smith',
    checkType: 'Background Check',
    geography: 'US',
    status: 'Completed',
    createdAt: '2024-01-15',
    completedAt: '2024-01-17',
  },
  {
    id: 'ORD-002',
    candidateName: 'Sarah Johnson',
    checkType: 'Employment Verification',
    geography: 'Canada',
    status: 'In Progress',
    createdAt: '2024-01-16',
    completedAt: null,
  },
  {
    id: 'ORD-003',
    candidateName: 'Michael Brown',
    checkType: 'Education Verification',
    geography: 'UK',
    status: 'Completed',
    createdAt: '2024-01-14',
    completedAt: '2024-01-16',
  },
  // Add more mock data as needed
];

export const disputesOverTime = [
  { month: 'Jan', disputes: 15 },
  { month: 'Feb', disputes: 12 },
  { month: 'Mar', disputes: 18 },
  { month: 'Apr', disputes: 10 },
  { month: 'May', disputes: 8 },
  { month: 'Jun', disputes: 6 },
];

export const disputesByGeography = [
  { geography: 'US', disputes: 25 },
  { geography: 'Canada', disputes: 15 },
  { geography: 'UK', disputes: 12 },
  { geography: 'Australia', disputes: 8 },
  { geography: 'Germany', disputes: 5 },
];

export const disputesByCheckType = [
  { name: 'Background Check', value: 30 },
  { name: 'Employment Verification', value: 20 },
  { name: 'Education Verification', value: 15 },
  { name: 'Reference Check', value: 10 },
  { name: 'Drug Test', value: 5 },
];

export const disputesTableData = [
  {
    disputeId: 'DIS-001',
    orderId: 'ORD-001',
    raisedAt: '2024-01-18',
    status: 'Open',
    resolvedAt: null,
  },
  {
    disputeId: 'DIS-002',
    orderId: 'ORD-015',
    raisedAt: '2024-01-16',
    status: 'Resolved',
    resolvedAt: '2024-01-20',
  },
  // Add more mock data as needed
];

export const globalOrdersByGeography = [
  { country: 'United States', orders: 2500, lat: 39.8283, lng: -98.5795 },
  { country: 'Canada', orders: 800, lat: 56.1304, lng: -106.3468 },
  { country: 'United Kingdom', orders: 650, lat: 55.3781, lng: -3.4360 },
  { country: 'Australia', orders: 450, lat: -25.2744, lng: 133.7751 },
  { country: 'Germany', orders: 400, lat: 51.1657, lng: 10.4515 },
];

export const tatByGeography = [
  { month: 'Jan', US: 2.5, Canada: 2.8, UK: 2.2, Australia: 2.1, Germany: 2.6 },
  { month: 'Feb', US: 2.3, Canada: 2.6, UK: 2.0, Australia: 2.2, Germany: 2.4 },
  { month: 'Mar', US: 2.1, Canada: 2.4, UK: 1.9, Australia: 2.0, Germany: 2.2 },
  { month: 'Apr', US: 2.4, Canada: 2.7, UK: 2.1, Australia: 2.3, Germany: 2.5 },
  { month: 'May', US: 2.0, Canada: 2.3, UK: 1.8, Australia: 1.9, Germany: 2.1 },
  { month: 'Jun', US: 1.8, Canada: 2.1, UK: 1.6, Australia: 1.7, Germany: 1.9 },
];

export const checkTypeVsGeography = [
  { checkType: 'Background Check', US: 450, Canada: 200, UK: 180, Australia: 150, Germany: 120 },
  { checkType: 'Employment Verification', US: 320, Canada: 150, UK: 130, Australia: 100, Germany: 80 },
  { checkType: 'Education Verification', US: 280, Canada: 120, UK: 110, Australia: 90, Germany: 70 },
  { checkType: 'Reference Check', US: 190, Canada: 80, UK: 70, Australia: 60, Germany: 50 },
  { checkType: 'Drug Test', US: 150, Canada: 60, UK: 50, Australia: 40, Germany: 30 },
];

export const chatSuggestions = [
  "Show me the trend of orders over the last 6 months",
  "What's the completion rate by geography?",
  "Which check types have the highest dispute rate?",
  "Compare TAT performance across regions",
  "Show orders pending for more than 5 days",
];

export const chatMessages = [
  {
    id: 1,
    type: 'user' as const,
    content: 'Show me the completion rate by geography',
    timestamp: new Date(),
  },
  {
    id: 2,
    type: 'bot' as const,
    content: 'Here\'s the completion rate analysis by geography. The US leads with 94.2% completion rate, followed by Canada at 93.1%. I\'ve generated a detailed chart showing the breakdown.',
    timestamp: new Date(),
    chartData: {
      type: 'bar',
      data: [
        { geography: 'US', completionRate: 94.2 },
        { geography: 'Canada', completionRate: 93.1 },
        { geography: 'UK', completionRate: 95.8 },
        { geography: 'Australia', completionRate: 96.1 },
        { geography: 'Germany', completionRate: 92.8 },
      ]
    }
  },
];