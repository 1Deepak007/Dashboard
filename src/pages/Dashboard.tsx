import React from 'react';
import Header from '../components/Header';
import MetricCard from '../components/MetricCard';

const Dashboard: React.FC = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Dashboard" 
        subtitle="Welcome back! Here's what's happening with your inventory."
        breadcrumbs={['Dashboard']}
      />
      
      <div className="p-6">
        <div className="mb-6">
          <p className="text-sm text-gray-500">Last updated: 01/08/2025</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <MetricCard
            title="Total Products"
            value="0"
            trend="from last month"
            trendType="neutral"
            iconType="products"
          />
          <MetricCard
            title="Total Revenue"
            value="0"
            trend="from last month"
            trendType="neutral"
            iconType="revenue"
          />
          <MetricCard
            title="Active Orders"
            value="0"
            trend="from last month"
            trendType="neutral"
            iconType="orders"
          />
          <MetricCard
            title="Low Stock Items"
            value="0"
            trend="from last month"
            trendType="neutral"
            iconType="stock"
          />
          <MetricCard
            title="Total Users"
            value="0"
            trend="from last month"
            trendType="neutral"
            iconType="users"
          />
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">No recent activity</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-sm font-medium text-gray-900">Add Product</div>
                <div className="text-xs text-gray-500">Create new product</div>
              </button>
              <button className="p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-sm font-medium text-gray-900">New Order</div>
                <div className="text-xs text-gray-500">Process new order</div>
              </button>
              <button className="p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-sm font-medium text-gray-900">View Reports</div>
                <div className="text-xs text-gray-500">Analytics & insights</div>
              </button>
              <button className="p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-sm font-medium text-gray-900">Manage Stock</div>
                <div className="text-xs text-gray-500">Update inventory</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;