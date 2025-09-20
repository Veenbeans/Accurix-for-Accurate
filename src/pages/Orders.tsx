import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Search, Filter, Eye } from 'lucide-react';
import { ordersTableData } from '@/data/mockData';
import { useAuth } from '@/contexts/AuthContext';

const Orders: React.FC = () => {
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [geoFilter, setGeoFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { user } = useAuth();

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { color: string; bgColor: string; text: string }> = {
      'Completed': { color: 'text-chart-green', bgColor: 'bg-chart-green/10', text: '● Fulfilled' },
      'In Progress': { color: 'text-chart-orange', bgColor: 'bg-chart-orange/10', text: '● Pending' },
      'Pending': { color: 'text-chart-orange', bgColor: 'bg-chart-orange/10', text: '● Pending' },
      'Failed': { color: 'text-destructive', bgColor: 'bg-destructive/10', text: '● Unfulfilled' },
    };
    
    const config = statusConfig[status] || statusConfig['Pending'];
    
    return (
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${config.color} ${config.bgColor}`}>
        {config.text}
      </span>
    );
  };

  const rightPanelContent = (
    <div className="space-y-3">
      <div className="p-3 bg-chart-primary/10 rounded-lg">
        <p className="text-xs font-medium text-chart-primary">Filters Applied</p>
        <p className="text-xs text-muted-foreground mt-1">
          Status: {statusFilter !== 'all' ? statusFilter : 'All'}
        </p>
        <p className="text-xs text-muted-foreground">
          Geography: {geoFilter !== 'all' ? geoFilter : 'All'}
        </p>
      </div>
      <div className="p-3 bg-warning/10 rounded-lg">
        <p className="text-xs font-medium text-warning">Quick Stats</p>
        <p className="text-xs text-muted-foreground mt-1">
          {ordersTableData.length} orders displayed
        </p>
      </div>
    </div>
  );

  return (
    <DashboardLayout 
      rightPanelContent={rightPanelContent}
      rightPanelTitle="Order Filters"
    >
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Orders</h1>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline">
              Export to Excel
            </Button>
            <Button variant="outline">
              Import Orders
            </Button>
            <Button className="bg-primary text-primary-foreground">
              + New Order
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 items-center">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search Order ID"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 rounded-lg"
            />
          </div>
          
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[120px] rounded-lg">
              <SelectValue placeholder="Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Dates</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
            </SelectContent>
          </Select>

          <Select value={geoFilter} onValueChange={setGeoFilter}>
            <SelectTrigger className="w-[150px] rounded-lg">
              <SelectValue placeholder="Sales Channel" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Channels</SelectItem>
              <SelectItem value="online">Online</SelectItem>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="wholesale">Wholesale</SelectItem>
            </SelectContent>
          </Select>
          
          <Select>
            <SelectTrigger className="w-[120px] rounded-lg">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="fulfilled">Fulfilled</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="unfulfilled">Unfulfilled</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="sm" className="rounded-lg">
            More Filters ↓
          </Button>
        </div>

        {/* Orders Table */}
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/30">
                <tr>
                  <th className="text-left p-4 font-medium text-sm">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="text-left p-4 font-medium text-sm">Order ID</th>
                  <th className="text-left p-4 font-medium text-sm">Date</th>
                  <th className="text-left p-4 font-medium text-sm">Customer</th>
                  <th className="text-left p-4 font-medium text-sm">Sales Channel</th>
                  <th className="text-left p-4 font-medium text-sm">Destination</th>
                  <th className="text-left p-4 font-medium text-sm">Items</th>
                  <th className="text-left p-4 font-medium text-sm">Status</th>
                  <th className="text-left p-4 font-medium text-sm"></th>
                </tr>
              </thead>
              <tbody>
                {ordersTableData.slice(0, 6).map((order, index) => (
                  <tr 
                    key={order.id}
                    className="border-b border-border/50 hover:bg-muted/10 transition-colors"
                  >
                    <td className="p-4">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td className="p-4">
                      <span className="text-chart-primary font-medium">#{order.id.replace('ORD-', '')}</span>
                    </td>
                    <td className="p-4 text-sm">{order.createdAt}</td>
                    <td className="p-4 text-sm font-medium">
                      {user?.role === 'Recruiter' ? '****** ******' : order.candidateName}
                    </td>
                    <td className="p-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center text-background text-xs font-bold">
                          {order.geography === 'US' ? 'a' : order.geography === 'UK' ? 'E' : '$'}
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-sm">{order.geography === 'US' ? 'International' : 'Domestic'}</td>
                    <td className="p-4 text-sm">{Math.floor(Math.random() * 5) + 1}</td>
                    <td className="p-4">
                      {getStatusBadge(order.status)}
                    </td>
                    <td className="p-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedOrder(order)}
                        className="w-6 h-6 p-0 rounded-full hover:bg-muted"
                      >
                        ❤️
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Order Details Modal */}
        <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Order Details - {selectedOrder?.id}</DialogTitle>
            </DialogHeader>
            {selectedOrder && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium">Candidate Name</p>
                    <p className="text-sm text-muted-foreground">
                      {user?.role === 'Recruiter' ? '****** ******' : selectedOrder.candidateName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Check Type</p>
                    <p className="text-sm text-muted-foreground">{selectedOrder.checkType}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Status</p>
                    {getStatusBadge(selectedOrder.status)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">Geography</p>
                    <Badge variant="outline">{selectedOrder.geography}</Badge>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-2">Timeline</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Order Created</span>
                      <span className="text-muted-foreground">{selectedOrder.createdAt}</span>
                    </div>
                    {selectedOrder.completedAt && (
                      <div className="flex justify-between">
                        <span>Order Completed</span>
                        <span className="text-muted-foreground">{selectedOrder.completedAt}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <Button variant="outline" className="w-full">
                    View Document (Sample Report.pdf)
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default Orders;