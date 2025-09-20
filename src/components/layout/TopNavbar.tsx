import React from 'react';
import { Calendar, LogOut, Sun, Moon, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const TopNavbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout, switchRole } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  return (
    <div className="h-16 bg-card border-b border-border/50 px-6 flex items-center justify-between transition-colors duration-500">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold text-foreground">Conversational Analytics Dashboard</h1>
      </div>

      <div className="flex items-center space-x-4">
        {/* Date Filter */}
        <Button variant="outline" size="sm" className="hover-lift">
          <Calendar className="w-4 h-4 mr-2" />
          Last 30 days
        </Button>

        {/* Theme Toggle */}
        <Button
          variant="outline"
          size="sm"
          onClick={toggleTheme}
          className="hover-lift"
        >
          {theme === 'light' ? (
            <Moon className="w-4 h-4" />
          ) : (
            <Sun className="w-4 h-4" />
          )}
        </Button>

        {/* User Menu */}
        {user && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2 hover-lift">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={user.avatar} alt={user.email} />
                  <AvatarFallback>
                    <User className="w-4 h-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium">{user.email}</span>
                  <Badge variant="secondary" className="text-xs">
                    {user.role}
                  </Badge>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onClick={switchRole}>
                Switch to {user.role === 'Admin' ? 'Recruiter' : 'Admin'}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
};