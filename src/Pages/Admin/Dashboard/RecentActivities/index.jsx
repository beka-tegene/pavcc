import React from 'react';

const recentActivitiesData = [
  { id: 1, type: 'User Registration', details: 'John Doe registered', date: '2024-08-14' },
  { id: 2, type: 'Idea Posted', details: 'Idea on AI for Healthcare', date: '2024-08-13' },
  { id: 3, type: 'User Registration', details: 'Jane Smith registered', date: '2024-08-12' },
  { id: 4, type: 'Idea Posted', details: 'Idea on Renewable Energy', date: '2024-08-11' },
];

export const RecentActivities = () => {
  return (
    <div className="max-h-[45vh] w-full flex flex-col bg-white shadow rounded-lg p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-2">Recent Activities</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {recentActivitiesData.map((activity) => (
            <tr key={activity.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{activity.type}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{activity.details}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{activity.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
