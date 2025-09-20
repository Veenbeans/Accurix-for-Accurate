import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { KPICard } from '@/components/charts/KPICard';
import { LineChart } from '@/components/charts/LineChart';
import { DonutChart } from '@/components/charts/DonutChart';
import { BarChart } from '@/components/charts/BarChart';
import { ShoppingCart, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import { ordersOverTime, statusDistribution, ordersByCheckType, tatTrends, geoStatusData } from '@/data/mockData';
const Dashboard: React.FC = () => {
  return <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-foreground">Analytics</h1>
            
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              
              
            </div>
            
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Orders"
            value="201"
            trend={{ value: 8.2, isPositive: true }}
            icon={<ShoppingCart className="w-5 h-5" />}
          />
          
          <KPICard
            title="Approved"
            value="36"
            trend={{ value: 5.4, isPositive: true }}
            icon={<CheckCircle className="w-5 h-5" />}
          />
          
          <KPICard
            title="Users"
            value="4,890"
            subtitle="since last month"
          />
          
          <KPICard
            title="Subscriptions"
            value="1,201"
            subtitle="since last month"
          />
        </div>
        
        {/* Second Row KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Month total"
            value="25,410"
            trend={{ value: -0.5, isPositive: false }}
            icon={<Clock className="w-5 h-5" />}
          />
          
          <KPICard
            title="Revenue"
            value="1,352"
            trend={{ value: 1.7, isPositive: true }}
            icon={<AlertTriangle className="w-5 h-5" />}
          />
          
          <KPICard
            title="Paid invoices"
            value="$30,256.23"
            subtitle="more details here"
          />
          
          <KPICard
            title="Funds received"
            value="$150,256.23"
            subtitle="more details here"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LineChart title="Orders Over Time" data={ordersOverTime} dataKey="orders" xAxisKey="month" height={350} />
          
          <DonutChart title="Status Distribution" data={statusDistribution} dataKey="value" nameKey="name" height={350} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <BarChart title="Orders by Check Type" data={ordersByCheckType} dataKey="count" xAxisKey="type" height={350} />
          
          <LineChart title="TAT Trends" data={tatTrends} dataKey="avgTAT" xAxisKey="month" color="hsl(var(--chart-green))" height={350} />
        </div>

        <div className="w-full">
          <BarChart title="Status by Geography" data={geoStatusData} dataKey={['completed', 'pending', 'failed']} xAxisKey="geography" stacked={true} height={400} />
        </div>
      </div>
    </DashboardLayout>;
};
export default Dashboard;