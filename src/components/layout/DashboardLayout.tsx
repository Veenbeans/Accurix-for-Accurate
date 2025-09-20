import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { TopNavbar } from './TopNavbar';
import { RightPanel } from './RightPanel';
interface DashboardLayoutProps {
  children: React.ReactNode;
  rightPanelContent?: React.ReactNode;
  rightPanelTitle?: string;
}
export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  rightPanelContent,
  rightPanelTitle = "Quick Actions"
}) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  return <div className="min-h-screen bg-dashboard-bg transition-colors duration-500">
      <div className="flex h-screen">
        <Sidebar isCollapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopNavbar />
          <div className="flex-1 flex overflow-hidden">
            <main className="flex-1 overflow-y-auto p-6 bg-neutral-200">
              {children}
            </main>
            <RightPanel title={rightPanelTitle}>
              {rightPanelContent}
            </RightPanel>
          </div>
        </div>
      </div>
    </div>;
};