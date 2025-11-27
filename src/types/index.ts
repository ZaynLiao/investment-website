// 產品類型
export interface Product {
  id: number;
  name: string;
  code: string;
  price: string;
  changePercent: number;
  type: string;
  risk: string;
  return: number;
}

// 熱門產品類型
export interface PopularProduct {
  id: number;
  name: string;
  price: string;
  change: number;
  type: string;
}

// 持有標的類型
export interface Holding {
  id: number;
  name: string;
  code: string;
  type: string;
  quantity: number;
  costPrice: string;
  currentPrice: string;
  marketValue: string;
  profit: string;
  profitPercent: number;
}

// 資產配置類型
export interface AssetAllocation {
  type: string;
  percentage: number;
  color: string;
}

// 交易記錄類型
export interface Transaction {
  id: number;
  type: "buy" | "sell";
  name: string;
  date: string;
  quantity: number;
  price: string;
  total: string;
}

// 市場新聞類型
export interface MarketNews {
  id: number;
  category: string;
  title: string;
  summary: string;
  time: string;
}

// 股票資訊類型
export interface Stock {
  id: number;
  name: string;
  code: string;
  price: string;
  change: number;
}

// 圖表數據類型
export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    fill: boolean;
    tension: number;
    pointBackgroundColor?: string;
    pointBorderColor?: string;
    pointHoverBackgroundColor?: string;
    pointHoverBorderColor?: string;
  }[];
}

// 圖表選項類型
export interface ChartOptions {
  responsive: boolean;
  maintainAspectRatio: boolean;
  plugins: {
    legend: {
      display: boolean;
      position: "top" | "bottom" | "left" | "right";
      labels?: {
        color?: string;
        font?: {
          size?: number;
          weight?: string;
        };
      };
    };
  };
  scales: {
    x?: {
      ticks?: {
        color?: string;
        font?: {
          size?: number;
        };
      };
      grid?: {
        color?: string;
      };
    };
    y: {
      beginAtZero: boolean;
      ticks?: {
        color?: string;
        font?: {
          size?: number;
        };
      };
      grid?: {
        color?: string;
      };
    };
  };
}
