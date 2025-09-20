import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { KPICard } from '@/components/charts/KPICard';
import { LineChart } from '@/components/charts/LineChart';
import { BarChart } from '@/components/charts/BarChart';
import { Card } from '@/components/ui/card';
import { Globe, TrendingUp, Users } from 'lucide-react';
import {
  globalOrdersByGeography,
  tatByGeography,
  checkTypeVsGeography
} from '@/data/mockData';

const GlobalAnalytics: React.FC = () => {
  const rightPanelContent = (
    <div className="space-y-3">
      <div className="p-3 bg-success/10 rounded-lg">
        <p className="text-xs font-medium text-success">Global Performance</p>
        <p className="text-xs text-muted-foreground mt-1">
          Australia leads with 96.1% completion rate globally.
        </p>
      </div>
      <div className="p-3 bg-chart-primary/10 rounded-lg">
        <p className="text-xs font-medium text-chart-primary">Regional Insight</p>
        <p className="text-xs text-muted-foreground mt-1">
          US market represents 55% of total global volume.
        </p>
      </div>
      <div className="p-3 bg-warning/10 rounded-lg">
        <p className="text-xs font-medium text-warning">Growth Opportunity</p>
        <p className="text-xs text-muted-foreground mt-1">
          European markets showing 23% YoY growth potential.
        </p>
      </div>
    </div>
  );

  return (
    <DashboardLayout 
      rightPanelContent={rightPanelContent}
      rightPanelTitle="Global Insights"
    >
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Global Analytics</h1>
          <p className="text-muted-foreground">Worldwide performance and regional insights</p>
        </div>

        {/* Global KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <KPICard
            title="Global Orders"
            value="45,230"
            subtitle="All regions"
            trend={{ value: 18.5, isPositive: true }}
            icon={<Globe className="w-5 h-5" />}
          />
          <KPICard
            title="Global Avg TAT"
            value="2.1 days"
            subtitle="Worldwide average"
            trend={{ value: -12.3, isPositive: true }}
            icon={<TrendingUp className="w-5 h-5" />}
          />
          <KPICard
            title="Active Regions"
            value="5"
            subtitle="Operating countries"
            trend={{ value: 25.0, isPositive: true }}
            icon={<Users className="w-5 h-5" />}
          />
        </div>

        {/* World Map Visualization */}
        <Card className="p-6 hover-lift">
          <h3 className="text-lg font-semibold mb-4">Orders by Geography</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {globalOrdersByGeography.map((country) => (
              <div key={country.country} className="text-center p-4 bg-muted/20 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">
                  {country.orders.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">{country.country}</div>
                <div className="w-full bg-muted rounded-full h-2 mt-2">
                  <div 
                    className="bg-gradient-kpi h-2 rounded-full transition-all duration-300"
                    style={{ 
                      width: `${(country.orders / Math.max(...globalOrdersByGeography.map(c => c.orders))) * 100}%` 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <BarChart
            title="Status by Geography"
            data={[
              { geography: 'US', completed: 2375, pending: 100, failed: 25 },
              { geography: 'Canada', completed: 760, pending: 30, failed: 10 },
              { geography: 'UK', completed: 620, pending: 25, failed: 5 },
              { geography: 'Australia', completed: 432, pending: 15, failed: 3 },
              { geography: 'Germany', completed: 380, pending: 18, failed: 2 },
            ]}
            dataKey={['completed', 'pending', 'failed']}
            xAxisKey="geography"
            stacked={true}
            height={400}
            colors={[
              'hsl(var(--success))',
              'hsl(var(--warning))',
              'hsl(var(--destructive))'
            ]}
          />

          <Card className="p-6 space-y-4">
            <h3 className="text-lg font-semibold">Regional Performance Summary</h3>
            <div className="space-y-4">
              {[
                { region: 'United States', completion: 95.2, tat: 1.8, growth: '+12%' },
                { region: 'Canada', completion: 94.8, tat: 2.1, growth: '+8%' },
                { region: 'United Kingdom', completion: 96.1, tat: 1.6, growth: '+15%' },
                { region: 'Australia', completion: 96.7, tat: 1.7, growth: '+20%' },
                { region: 'Germany', completion: 93.2, tat: 1.9, growth: '+10%' },
              ].map((region) => (
                <div key={region.region} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                  <div>
                    <div className="font-medium">{region.region}</div>
                    <div className="text-sm text-muted-foreground">
                      {region.completion}% completion • {region.tat} days TAT
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-success">{region.growth}</div>
                    <div className="text-xs text-muted-foreground">YoY Growth</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Advanced Analytics */}
        <div className="space-y-6">
          <BarChart
            title="Check Type Distribution by Geography"
            data={checkTypeVsGeography}
            dataKey={['US', 'Canada', 'UK', 'Australia', 'Germany']}
            xAxisKey="checkType"
            stacked={false}
            height={400}
            colors={[
              'hsl(var(--chart-primary))',
              'hsl(var(--chart-secondary))',
              'hsl(var(--success))',
              'hsl(var(--warning))',
              'hsl(var(--destructive))'
            ]}
          />

          <LineChart
            title="TAT Trends by Geography"
            data={tatByGeography}
            dataKey="US"
            xAxisKey="month"
            height={400}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default GlobalAnalytics;