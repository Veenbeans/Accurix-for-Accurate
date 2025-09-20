import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { KPICard } from '@/components/charts/KPICard';
import { LineChart } from '@/components/charts/LineChart';
import { BarChart } from '@/components/charts/BarChart';
import { DonutChart } from '@/components/charts/DonutChart';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Clock } from 'lucide-react';
import {
  disputesOverTime,
  disputesByGeography,
  disputesByCheckType,
  disputesTableData
} from '@/data/mockData';

const Disputes: React.FC = () => {
  const getStatusBadge = (status: string) => {
    return status === 'Open' ? (
      <Badge variant="destructive">Open</Badge>
    ) : (
      <Badge variant="default">Resolved</Badge>
    );
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Disputes</h1>
          <p className="text-muted-foreground">Monitor and manage quality disputes</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <KPICard
            title="Open Disputes"
            value="23"
            subtitle="Pending resolution"
            trend={{ value: -15.2, isPositive: true }}
            icon={<AlertTriangle className="w-5 h-5" />}
          />
          <KPICard
            title="Avg Resolution Time"
            value="3.2 days"
            subtitle="Time to resolve"
            trend={{ value: -25.0, isPositive: true }}
            icon={<Clock className="w-5 h-5" />}
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LineChart
            title="Disputes Over Time"
            data={disputesOverTime}
            dataKey="disputes"
            xAxisKey="month"
            color="hsl(var(--chart-red))"
            height={350}
          />
          
          <BarChart
            title="Disputes by Geography"
            data={disputesByGeography}
            dataKey="disputes"
            xAxisKey="geography"
            colors={['hsl(var(--chart-red))']}
            height={350}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DonutChart
            title="Disputes by Check Type"
            data={disputesByCheckType}
            dataKey="value"
            nameKey="name"
            height={350}
          />

          {/* Disputes Table */}
          <Card className="p-4 space-y-4">
            <h3 className="text-lg font-semibold">Recent Disputes</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Dispute ID</th>
                    <th className="text-left p-2">Order ID</th>
                    <th className="text-left p-2">Raised At</th>
                    <th className="text-left p-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {disputesTableData.map((dispute) => (
                    <tr key={dispute.disputeId} className="border-b hover:bg-muted/20">
                      <td className="p-2 font-mono">{dispute.disputeId}</td>
                      <td className="p-2 font-mono">{dispute.orderId}</td>
                      <td className="p-2 text-muted-foreground">{dispute.raisedAt}</td>
                      <td className="p-2">
                        {getStatusBadge(dispute.status)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Disputes;