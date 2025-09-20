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
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm mb-2 text-muted-foreground">Orders</p>
                <p className="text-3xl font-bold text-foreground">201</p>
                <p className="text-xs text-success mt-1">↗ 8.2% <span className="text-muted-foreground">since last month</span></p>
              </div>
              
            </div>
          </div>
          
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Approved</p>
                <p className="text-3xl font-bold text-foreground">36</p>
                <p className="text-xs text-success mt-1">↗ 5.4% <span className="text-muted-foreground">since last month</span></p>
              </div>
              
            </div>
          </div>
          
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Users</p>
                <p className="text-3xl font-bold text-foreground">4,890</p>
                <p className="text-xs text-muted-foreground mt-1">since last month</p>
              </div>
              <div className="w-20 h-12 relative">
                
                
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Subscriptions</p>
                <p className="text-3xl font-bold text-foreground">1,201</p>
                <p className="text-xs text-muted-foreground mt-1">since last month</p>
              </div>
              <div className="w-20 h-12 relative">
                
                
              </div>
            </div>
          </div>
        </div>
        
        {/* Second Row KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Month total</p>
                <p className="text-3xl font-bold text-foreground">25410</p>
                <p className="text-xs text-destructive mt-1">↘ 0.5% <span className="text-muted-foreground">since last month</span></p>
              </div>
              
            </div>
          </div>
          
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Revenue</p>
                <p className="text-3xl font-bold text-foreground">1352</p>
                <p className="text-xs text-success mt-1">↗ 1.7% <span className="text-muted-foreground">since last month</span></p>
              </div>
              
            </div>
          </div>
          
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Paid invoices</p>
                <p className="text-2xl font-bold text-foreground">$30256.23</p>
                <p className="text-xs text-muted-foreground mt-1">more details here</p>
              </div>
              <div className="w-12 h-12 bg-chart-purple/20 rounded-lg flex items-center justify-center">
                
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Funds received</p>
                <p className="text-2xl font-bold text-foreground">$150256.23</p>
                <p className="text-xs text-muted-foreground mt-1">more details here</p>
              </div>
              <div className="w-12 h-12 bg-chart-green/20 rounded-lg flex items-center justify-center">
                
              </div>
            </div>
          </div>
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