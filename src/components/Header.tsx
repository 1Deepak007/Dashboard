import React from 'react';
import { ChevronRight, Globe, User } from 'lucide-react';

interface HeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: string[];
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, breadcrumbs = [] }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">

      <div className="flex items-center justify-between">
        <div>

          {/* {breadcrumbs.length > 0 && (
            <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <span>{crumb}</span>
                  {index < breadcrumbs.length - 1 && (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </React.Fragment>
              ))}
            </nav>
          )} */}
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
          {subtitle && (
            <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
          )}
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <select className="flex items-center bg-white border border-gray-300 rounded-md px-2 py-1">
              <option value="en">English</option>
              <option value="ja">Japanese</option>
              <option value="ko">Korean</option>
              <option value="ru">Russian</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-gray-700">DG</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;