import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  CreditCard,
  ShoppingCart,
  Receipt,
  Tag,
  Grid3X3,
  Layers,
  Percent,
  Users,
  Shield,
  Settings,
  Hash,
  LogOut
} from 'lucide-react';

const navigationItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Products', path: '/products', icon: Package },
  { name: 'Cash Register', path: '/cash-register', icon: CreditCard },
  { name: 'Purchase Orders', path: '/purchase-orders', icon: ShoppingCart },
  { name: 'Bills', path: '/bills', icon: Receipt },
  { name: 'Brands', path: '/brands', icon: Tag },
  { name: 'Categories', path: '/categories', icon: Grid3X3 },
  { name: 'Product Units', path: '/product-units', icon: Layers },
  { name: 'Promotions', path: '/promotions', icon: Percent },
  { name: 'Users', path: '/users', icon: Users },
  { name: 'Roles & Permissions', path: '/roles', icon: Shield },
  { name: 'Sequence Settings', path: '/sequence-settings', icon: Hash },
  { name: 'Settings', path: '/settings', icon: Settings },
];

interface SidebarProps {
  isOpen: boolean;
  isMobile?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, isMobile = false, onClose }) => {
  const location = useLocation();

  const handleLinkClick = () => {
    // Close sidebar on mobile when a link is clicked
    if (isMobile && onClose) {
      onClose();
    }
  };

  return (
    <div className={`bg-slate-800 text-white min-h-screen flex flex-col transition-all duration-300 ${
      isMobile
        ? `fixed inset-y-0 left-0 z-50 w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 ${isOpen ? 'md:w-64' : 'md:w-16'}`
        : isOpen ? 'w-64' : 'w-16'
    }`}>
      {/* Logo */}
      <div className="p-4 border-b border-slate-700">
        {isOpen ? (
          <h1 className="text-xl font-bold">Test shop</h1>
        ) : (
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">TS</span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={handleLinkClick}
                  className={`flex items-center px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white border-r-2 border-blue-400'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  } ${!isOpen && !isMobile ? 'justify-center' : ''}`}
                  title={!isOpen && !isMobile ? item.name : undefined}
                >
                  <Icon className={`w-5 h-5 ${isOpen || isMobile ? 'mr-3' : ''}`} />
                  {(isOpen || isMobile) && item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-slate-700">
        <button
          className={`flex items-center w-full px-4 py-3 text-sm font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors duration-200 rounded ${
            !isOpen ? 'justify-center' : ''
          }`}
          title={!isOpen ? 'Logout' : undefined}
        >
          <LogOut className={`w-5 h-5 ${isOpen ? 'mr-3' : ''}`} />
          {isOpen && 'Logout'}
        </button>
        {isOpen && (
          <div className="mt-2 text-xs text-slate-500">
            Version 1.0.0
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;