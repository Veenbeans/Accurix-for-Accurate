import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { KPICard } from '@/components/charts/KPICard';
import { LineChart } from '@/components/charts/LineChart';
import { DonutChart } from '@/components/charts/DonutChart';
import { BarChart } from '@/components/charts/BarChart';
import {
  ShoppingCart,
  CheckCircle,
  Clock,
  AlertTriangle
} from 'lucide-react';
import {
  ordersOverTime,
  statusDistribution,
  ordersByCheckType,
  tatTrends,
  geoStatusData
} from '@/data/mockData';

const Dashboard: React.FC = () => {
  const rightPanelContent = (
    <div className="space-y-3">
      <div className="p-3 bg-primary/10 rounded-lg">
        <p className="text-xs font-medium text-primary">Quick Insight</p>
        <p className="text-xs text-muted-foreground mt-1">
          TAT improved by 15% this month across all geographies.
        </p>
      </div>
      <div className="p-3 bg-success/10 rounded-lg">
        <p className="text-xs font-medium text-success">Performance Alert</p>
        <p className="text-xs text-muted-foreground mt-1">
          UK region showing 96% completion rate - highest this quarter.
        </p>
      </div>
    </div>
  );

  return (
    <DashboardLayout 
      rightPanelContent={rightPanelContent}
      rightPanelTitle="Dashboard Insights"
    >
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome to your analytics overview</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Total Orders"
            value="8,945"
            subtitle="This month"
            trend={{ value: 12.5, isPositive: true }}
            icon={<ShoppingCart className="w-5 h-5" />}
          />
          <KPICard
            title="Completion %"
            value="94.2%"
            subtitle="Success rate"
            trend={{ value: 2.3, isPositive: true }}
            icon={<CheckCircle className="w-5 h-5" />}
          />
          <KPICard
            title="Avg TAT"
            value="1.8 days"
            subtitle="Processing time"
            trend={{ value: -8.2, isPositive: true }}
            icon={<Clock className="w-5 h-5" />}
          />
          <KPICard
            title="Dispute Rate"
            value="0.8%"
            subtitle="Quality metric"
            trend={{ value: -12.5, isPositive: true }}
            icon={<AlertTriangle className="w-5 h-5" />}
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LineChart
            title="Orders Over Time"
            data={ordersOverTime}
            dataKey="orders"
            xAxisKey="month"
            height={350}
          />
          
          <DonutChart
            title="Status Distribution"
            data={statusDistribution}
            dataKey="value"
            nameKey="name"
            height={350}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <BarChart
            title="Orders by Check Type"
            data={ordersByCheckType}
            dataKey="count"
            xAxisKey="type"
            height={350}
          />
          
          <LineChart
            title="TAT Trends"
            data={tatTrends}
            dataKey="avgTAT"
            xAxisKey="month"
            color="hsl(var(--success))"
            height={350}
          />
        </div>

        <div className="w-full">
          <BarChart
            title="Status by Geography"
            data={geoStatusData}
            dataKey={['completed', 'pending', 'failed']}
            xAxisKey="geography"
            stacked={true}
            height={400}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;