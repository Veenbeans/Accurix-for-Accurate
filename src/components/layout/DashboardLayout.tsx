import React from 'react';
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
  rightPanelTitle
}) => {
  return (
    <div className="min-h-screen bg-dashboard-bg transition-colors duration-500">
      <TopNavbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 overflow-hidden">
          {children}
        </main>
        <RightPanel title={rightPanelTitle}>
          {rightPanelContent}
        </RightPanel>
      </div>
    </div>
  );
};