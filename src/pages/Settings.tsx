import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { 
  User, 
  Shield, 
  Bell, 
  Palette, 
  Database, 
  Download,
  Mail,
  Settings as SettingsIcon 
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';

const Settings: React.FC = () => {
  const { user, switchRole } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const rightPanelContent = (
    <div className="space-y-3">
      <div className="p-3 bg-chart-primary/10 rounded-lg">
        <p className="text-xs font-medium text-chart-primary">Settings Tips</p>
        <p className="text-xs text-muted-foreground mt-1">
          Adjust notification preferences for better workflow management.
        </p>
      </div>
      <div className="p-3 bg-success/10 rounded-lg">
        <p className="text-xs font-medium text-success">Security</p>
        <p className="text-xs text-muted-foreground mt-1">
          Your account has enhanced security features enabled.
        </p>
      </div>
    </div>
  );

  return (
    <DashboardLayout 
      rightPanelContent={rightPanelContent}
      rightPanelTitle="Settings Help"
    >
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your account and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Profile Card */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>Profile Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={user?.avatar} alt={user?.email} />
                  <AvatarFallback>
                    <User className="w-8 h-8" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{user?.email}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant="secondary">
                      {user?.role}
                    </Badge>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={switchRole}
                    >
                      Switch Role
                    </Button>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">{user?.email}</p>
                  </div>
                  <Mail className="w-4 h-4 text-muted-foreground" />
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Account Type</p>
                    <p className="text-sm text-muted-foreground">Premium Analytics</p>
                  </div>
                  <Shield className="w-4 h-4 text-success" />
                </div>
              </div>

              <Button className="w-full" variant="outline">
                Edit Profile
              </Button>
            </CardContent>
          </Card>

          {/* Preferences Card */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <SettingsIcon className="w-5 h-5" />
                <span>Preferences</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Palette className="w-4 h-4" />
                    <div>
                      <Label htmlFor="theme-toggle">Dark Mode</Label>
                      <p className="text-sm text-muted-foreground">
                        Toggle between light and dark themes
                      </p>
                    </div>
                  </div>
                  <Switch
                    id="theme-toggle"
                    checked={theme === 'dark'}
                    onCheckedChange={toggleTheme}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Bell className="w-4 h-4" />
                    <div>
                      <Label htmlFor="notifications">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive alerts for order updates
                      </p>
                    </div>
                  </div>
                  <Switch id="notifications" defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Database className="w-4 h-4" />
                    <div>
                      <Label htmlFor="auto-sync">Auto Data Sync</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically sync data every hour
                      </p>
                    </div>
                  </div>
                  <Switch id="auto-sync" defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Settings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Security Settings */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Security & Privacy</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  Change Password
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Two-Factor Authentication
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Login Activity
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Privacy Settings
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Data & Export */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Data & Export</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  Export Dashboard Data
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Download Reports
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  API Access Keys
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Data Retention Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <Database className="w-6 h-6" />
                <span>Sync Data Now</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <Download className="w-6 h-6" />
                <span>Export All</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <Shield className="w-6 h-6" />
                <span>Security Check</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

    </DashboardLayout>
  );
};

export default Settings;