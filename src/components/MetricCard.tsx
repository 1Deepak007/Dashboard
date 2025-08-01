import React from 'react';
import { TrendingUp, TrendingDown, Package, DollarSign, ShoppingCart, AlertTriangle, User } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: number | string;
  trend?: string;
  trendType?: 'up' | 'down' | 'neutral';
  iconType: 'products' | 'revenue' | 'orders' | 'stock' | 'users';
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, trend, trendType, iconType }) => {
  const getIcon = () => {
    switch (iconType) {
      case 'products':
        return <Package className="w-6 h-6 text-blue-600" />;
      case 'revenue':
        return <DollarSign className="w-6 h-6 text-green-600" />;
      case 'orders':
        return <ShoppingCart className="w-6 h-6 text-orange-600" />;
      case 'stock':
        return <AlertTriangle className="w-6 h-6 text-red-600" />;
      case 'users':
        return <User className="w-6 h-6 text-purple-600" />;
      default:
        return <Package className="w-6 h-6 text-blue-600" />;
    }
  };

  const getTrendIcon = () => {
    if (trendType === 'up') {
      return <TrendingUp className="w-4 h-4 text-green-500" />;
    } else if (trendType === 'down') {
      return <TrendingDown className="w-4 h-4 text-red-500" />;
    }
    return null;
  };

  const getCardBorderColor = () => {
    switch (iconType) {
      case 'products':
        return 'border-l-blue-500';
      case 'revenue':
        return 'border-l-green-500';
      case 'orders':
        return 'border-l-orange-500';
      case 'stock':
        return 'border-l-red-500';
      default:
        return 'border-l-blue-500';
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 border-l-4 ${getCardBorderColor()} p-6`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {trend && (
            <div className="flex items-center mt-2">
              {getTrendIcon()}
              <span className={`text-sm ml-1 ${
                trendType === 'up' ? 'text-green-600' : 
                trendType === 'down' ? 'text-red-600' : 
                'text-gray-600'
              }`}>
                {trend}
              </span>
            </div>
          )}
        </div>
        <div className="ml-4">
          {getIcon()}
        </div>
      </div>
    </div>
  );
};

export default MetricCard;