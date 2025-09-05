import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { 
  GraduationCap, 
  LayoutDashboard, 
  Users, 
  CreditCard, 
  Building, 
  FileText, 
  Shield,
  Menu,
  X,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    { 
      icon: LayoutDashboard, 
      label: 'Dashboard', 
      path: '/dashboard',
      description: 'Overview & Analytics'
    },
    { 
      icon: Users, 
      label: 'Admissions', 
      path: '/admissions',
      description: 'Student Registration'
    },
    { 
      icon: CreditCard, 
      label: 'Fee Management', 
      path: '/fee-management',
      description: 'Payments & Receipts'
    },
    { 
      icon: Building, 
      label: 'Hostel Allocation', 
      path: '/hostel',
      description: 'Room Management'
    },
    { 
      icon: FileText, 
      label: 'Examinations', 
      path: '/examinations',
      description: 'Records & Schedules'
    },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsSidebarOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-dashboard-bg">
      {/* Header */}
      <header className="bg-sidebar-bg border-b border-border px-4 lg:px-6 h-16 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden"
          >
            {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-deep rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-primary-deep">ERP Smart</h1>
              <p className="text-xs text-muted-foreground">Student Management System</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Shield className="h-4 w-4 text-success" />
            <span className="hidden sm:inline text-muted-foreground">Secure & Encrypted</span>
          </div>
          
          <Button variant="ghost" size="sm" onClick={() => navigate('/login')}>
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline ml-2">Logout</span>
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={cn(
          "fixed lg:relative inset-y-0 left-0 z-30 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 bg-sidebar-bg border-r border-border",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="flex flex-col h-full pt-16 lg:pt-0">
            <nav className="flex-1 px-4 py-6 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={cn(
                    "nav-item w-full text-left",
                    isActive(item.path) && "active"
                  )}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium">{item.label}</div>
                    <div className="text-xs text-muted-foreground truncate">
                      {item.description}
                    </div>
                  </div>
                </button>
              ))}
            </nav>

            {/* Security Badge */}
            <div className="p-4 mx-4 mb-4 bg-success-light rounded-lg border border-success/20">
              <div className="flex items-center gap-2 text-success">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">System Status</span>
              </div>
              <p className="text-xs text-success/80 mt-1">
                All data encrypted & backed up
              </p>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden" 
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 min-h-screen lg:ml-0">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
};

export default Layout;