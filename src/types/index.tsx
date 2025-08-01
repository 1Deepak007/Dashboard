export interface MetricCard {
  title: string;
  value: number | string;
  trend?: string;
  trendType?: 'up' | 'down' | 'neutral';
  icon: string;
  color: string;
}

export interface Product {
  id: string;
  code: string;
  name: string;
  supplier: string;
  category: string;
  brand: string;
  purchasePrice: number;
  mrp: number;
  sellingPrice: number;
  stock: number;
  tax: string;
  status: 'Active' | 'Inactive';
}

export interface NavigationItem {
  name: string;
  path: string;
  icon: string;
  active?: boolean;
}