import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Brain, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        toast({
          title: "Login successful",
          description: "Welcome to Analytics Dashboard",
        });
        navigate('/');
      } else {
        toast({
          title: "Login failed",
          description: "Please check your credentials",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred during login",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-foreground">Welcome back!</h1>
            <p className="text-muted-foreground">
              Simplify your workflow and boost your productivity<br />
              with <span className="font-semibold text-foreground">Accurix</span>. Get started for free.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Input
                  id="email"
                  type="email"
                  placeholder="Username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 rounded-full px-6 border-2 border-border bg-background"
                  required
                />
              </div>
              
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 rounded-full px-6 pr-12 border-2 border-border bg-background"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="text-center">
              <button
                type="button"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Forgot Password?
              </button>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Login'}
            </Button>
          </form>

          {/* Social Login */}
          <div className="space-y-4">
            <p className="text-center text-sm text-muted-foreground">or continue with</p>
            <div className="flex justify-center space-x-4">
              <button className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/90 transition-colors">
                <span className="font-bold">G</span>
              </button>
              <button className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/90 transition-colors">
                <span className="font-bold">🍎</span>
              </button>
              <button className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/90 transition-colors">
                <span className="font-bold">f</span>
              </button>
            </div>
          </div>

          {/* Register Link */}
          <p className="text-center text-sm text-muted-foreground">
            Not a member? <button className="text-foreground font-medium hover:underline">Register now</button>
          </p>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-muted/20 p-12 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/20"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-chart-secondary/20"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 rounded-full bg-success/20"></div>
        </div>

        <div className="text-center space-y-8 z-10">
          {/* Person Illustration */}
          <div className="flex justify-center relative">
            <div className="w-64 h-64 relative">
              {/* Person sitting */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-40 bg-primary/10 rounded-full flex items-center justify-center">
                  <Brain className="w-16 h-16 text-primary" />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-8 w-12 h-12 rounded-full bg-card border-2 border-border flex items-center justify-center shadow-lg">
                <span className="text-xs">😊</span>
              </div>
              <div className="absolute -top-4 -right-8 w-12 h-12 rounded-full bg-card border-2 border-border flex items-center justify-center shadow-lg">
                <span className="text-xs">👤</span>
              </div>
              <div className="absolute -bottom-8 -left-4 w-12 h-12 rounded-full bg-card border-2 border-border flex items-center justify-center shadow-lg">
                <span className="text-xs">📊</span>
              </div>
              
              {/* Task Card */}
              <div className="absolute -bottom-4 right-4 bg-card rounded-lg p-3 shadow-lg border">
                <p className="text-sm font-medium">Accurix Analytics</p>
                <p className="text-xs text-muted-foreground">10 Tasks</p>
                <div className="mt-2 flex items-center space-x-2">
                  <div className="w-6 h-6 rounded bg-success/20 flex items-center justify-center">
                    <span className="text-xs text-success">84%</span>
                  </div>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Analytics</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Make your work easier and organized</h2>
            <h3 className="text-xl text-foreground">with <span className="font-bold">Accurix</span></h3>
          </div>

          {/* Page indicators */}
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="w-6 h-2 rounded-full bg-foreground"></div>
            <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;