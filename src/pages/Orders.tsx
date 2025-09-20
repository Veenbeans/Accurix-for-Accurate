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
    const variants: Record<string, any> = {
      'Completed': 'default',
      'In Progress': 'secondary',
      'Pending': 'outline',
      'Failed': 'destructive',
    };
    return <Badge variant={variants[status] || 'outline'}>{status}</Badge>;
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
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Orders</h1>
          <p className="text-muted-foreground">Manage and track all background check orders</p>
        </div>

        {/* Filters */}
        <Card className="p-4">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Failed">Failed</SelectItem>
              </SelectContent>
            </Select>

            <Select value={geoFilter} onValueChange={setGeoFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Geography" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                <SelectItem value="US">US</SelectItem>
                <SelectItem value="Canada">Canada</SelectItem>
                <SelectItem value="UK">UK</SelectItem>
                <SelectItem value="Australia">Australia</SelectItem>
                <SelectItem value="Germany">Germany</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </Card>

        {/* Orders Table */}
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50 sticky top-0">
                <tr>
                  <th className="text-left p-4 font-medium">Order ID</th>
                  <th className="text-left p-4 font-medium">Candidate Name</th>
                  <th className="text-left p-4 font-medium">Check Type</th>
                  <th className="text-left p-4 font-medium">Geography</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Created At</th>
                  <th className="text-left p-4 font-medium">Completed At</th>
                  <th className="text-left p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {ordersTableData.map((order, index) => (
                  <tr 
                    key={order.id}
                    className={`border-b border-border/50 hover:bg-muted/20 transition-colors ${
                      index % 2 === 0 ? 'bg-card' : 'bg-muted/10'
                    }`}
                  >
                    <td className="p-4 font-mono text-sm">{order.id}</td>
                    <td className="p-4">
                      {user?.role === 'Recruiter' ? '****** ******' : order.candidateName}
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">{order.checkType}</td>
                    <td className="p-4">
                      <Badge variant="outline">{order.geography}</Badge>
                    </td>
                    <td className="p-4">
                      {getStatusBadge(order.status)}
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">{order.createdAt}</td>
                    <td className="p-4 text-sm text-muted-foreground">
                      {order.completedAt || '-'}
                    </td>
                    <td className="p-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedOrder(order)}
                      >
                        <Eye className="w-4 h-4" />
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