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
  LogOut,
  ChevronLeft,
  ChevronRight,
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
  onToggle?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, isMobile = false, onClose, onToggle }) => {
  const location = useLocation();
  
  const handleLinkClick = () => {
    if (isMobile && onClose) {
      onClose();
    }
  };

  return (
    <div
      className={`bg-slate-800 text-white min-h-screen flex flex-col transition-all duration-300 ${
        isMobile
          ? `fixed inset-y-0 left-0 z-50 w-full transform ${
              isOpen ? 'translate-x-0' : '-translate-x-full'
            }`
          : isOpen
          ? 'w-64'
          : 'w-16'
      }`}
    >
      <div className="p-4 border-b border-slate-700">
        {isOpen ? (
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Test shop</h1>
            {onClose && (
              <button
                onClick={onClose}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white"
                aria-label="Close sidebar"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center ml-8">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm p-3">TS</span>
            </div>
            {!isMobile && onToggle && (
              <button
                onClick={onToggle}
                className="inline-flex items-center justify-center p-0 ml-2 rounded-md text-gray-400 hover:text-white"
                aria-label="Expand sidebar"
                style={{ marginLeft: 'auto' }}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>
        )}
      </div>

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

