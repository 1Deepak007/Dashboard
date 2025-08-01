import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';

// Placeholder components for other routes
const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex-1 bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
      <p className="text-gray-600">This page is under construction.</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cash-register" element={<PlaceholderPage title="Cash Register" />} />
          <Route path="/purchase-orders" element={<PlaceholderPage title="Purchase Orders" />} />
          <Route path="/bills" element={<PlaceholderPage title="Bills" />} />
          <Route path="/brands" element={<PlaceholderPage title="Brands" />} />
          <Route path="/categories" element={<PlaceholderPage title="Categories" />} />
          <Route path="/product-units" element={<PlaceholderPage title="Product Units" />} />
          <Route path="/promotions" element={<PlaceholderPage title="Promotions" />} />
          <Route path="/users" element={<PlaceholderPage title="Users" />} />
          <Route path="/roles" element={<PlaceholderPage title="Roles & Permissions" />} />
          <Route path="/sequence-settings" element={<PlaceholderPage title="Sequence Settings" />} />
          <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
