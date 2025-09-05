import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, User, Key, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const Login = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('admin');
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const roles = [
    {
      value: 'student',
      label: 'Student',
      description: 'Access grades, fees, and personal information',
      defaultPath: '/dashboard'
    },
    {
      value: 'staff',
      label: 'Staff',
      description: 'Manage admissions, examinations, and records',
      defaultPath: '/admissions'
    },
    {
      value: 'admin',
      label: 'Administrator',
      description: 'Full system access and management',
      defaultPath: '/dashboard'
    }
  ];

  const handleLogin = () => {
    // Simulate login - in real app, this would validate credentials
    const selectedRoleData = roles.find(role => role.value === selectedRole);
    navigate(selectedRoleData?.defaultPath || '/dashboard');
  };

  const handleDemoLogin = (role: string) => {
    setSelectedRole(role);
    setCredentials({ username: `demo_${role}`, password: 'demo123' });
    const selectedRoleData = roles.find(r => r.value === role);
    navigate(selectedRoleData?.defaultPath || '/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-background to-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary-deep rounded-xl">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary-deep">ERP Smart</h1>
              <p className="text-sm text-muted-foreground">Student Management System</p>
            </div>
          </div>
          <p className="text-muted-foreground">Sign in to access your dashboard</p>
        </div>

        {/* Login Form */}
        <Card className="dashboard-card animate-fade-in">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center text-primary-deep">Welcome Back</CardTitle>
            <p className="text-center text-muted-foreground">
              Choose your role and sign in to continue
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Role Selection */}
            <div className="space-y-4">
              <Label className="text-sm font-medium">Select Your Role</Label>
              <RadioGroup 
                value={selectedRole} 
                onValueChange={setSelectedRole}
                className="space-y-3"
              >
                {roles.map((role) => (
                  <div key={role.value} className="flex items-center space-x-3">
                    <RadioGroupItem 
                      value={role.value} 
                      id={role.value}
                      className="border-primary-deep data-[state=checked]:bg-primary-deep"
                    />
                    <div className="flex-1">
                      <Label htmlFor={role.value} className="font-medium cursor-pointer">
                        {role.label}
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        {role.description}
                      </p>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Credentials */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    className="pl-10"
                    value={credentials.username}
                    onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10"
                    value={credentials.password}
                    onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                  />
                </div>
              </div>
            </div>

            {/* Login Button */}
            <Button 
              onClick={handleLogin}
              className="w-full bg-primary-deep hover:bg-primary-deep/90"
              size="lg"
            >
              Sign In
            </Button>

            {/* Demo Access */}
            <div className="space-y-3">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or try demo</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {roles.map((role) => (
                  <Button
                    key={role.value}
                    variant="outline"
                    size="sm"
                    onClick={() => handleDemoLogin(role.value)}
                    className="text-xs"
                  >
                    {role.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Security Badge */}
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-success" />
              <span>Secure & Encrypted Login</span>
            </div>
          </CardContent>
        </Card>

        {/* Footer Links */}
        <div className="text-center mt-6 space-y-2">
          <Button variant="link" onClick={() => navigate('/')}>
            ← Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;