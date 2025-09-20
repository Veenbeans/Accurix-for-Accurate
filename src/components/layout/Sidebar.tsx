import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingCart,
  AlertTriangle,
  Brain,
  Globe,
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Orders', href: '/orders', icon: ShoppingCart },
  { name: 'Disputes', href: '/disputes', icon: AlertTriangle },
  { name: 'Insights', href: '/insights', icon: Brain },
  { name: 'Global Analytics', href: '/global-analytics', icon: Globe },
  { name: 'Settings', href: '/settings', icon: Settings },
];

interface SidebarProps {
  isCollapsed?: boolean;
  onToggle?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed = false, onToggle }) => {
  const location = useLocation();

  return (
    <div className={cn(
      "bg-sidebar-bg border-r border-border/50 transition-all duration-300 relative",
      isCollapsed ? "w-16" : "w-[15%] min-w-[200px]"
    )}>
      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-8 w-6 h-6 bg-card border border-border rounded-full flex items-center justify-center hover:bg-accent transition-colors z-20"
      >
        {isCollapsed ? (
          <ChevronRight className="w-3 h-3" />
        ) : (
          <ChevronLeft className="w-3 h-3" />
        )}
      </button>

      <div className={cn("p-6", isCollapsed && "px-3")}>
        <div className={cn(
          "flex items-center mb-8 transition-all duration-300",
          isCollapsed ? "justify-center" : "space-x-2"
        )}>
          <div className="w-8 h-8 bg-gradient-kpi rounded-lg flex items-center justify-center flex-shrink-0">
            <Brain className="w-5 h-5 text-white" />
          </div>
          {!isCollapsed && (
            <div className="overflow-hidden">
              <h2 className="text-lg font-bold text-foreground whitespace-nowrap">Accurix</h2>
              <p className="text-xs text-muted-foreground whitespace-nowrap">Insight Engine</p>
            </div>
          )}
        </div>
        
        <nav className="space-y-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={cn(
                  'flex items-center rounded-lg transition-all duration-200 hover-lift relative group',
                  isCollapsed ? 'px-2 py-3 justify-center' : 'space-x-3 px-4 py-3',
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                )}
                title={isCollapsed ? item.name : undefined}
              >
                <item.icon className={cn("flex-shrink-0", isCollapsed ? "w-5 h-5" : "w-5 h-5")} />
                {!isCollapsed && (
                  <span className="text-sm font-medium whitespace-nowrap overflow-hidden">
                    {item.name}
                  </span>
                )}
                
                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-card border border-border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-30 whitespace-nowrap">
                    <span className="text-xs font-medium">{item.name}</span>
                  </div>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </div>
  );
};