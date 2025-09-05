import { Users, CreditCard, Building, FileText, TrendingUp, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Layout from '@/components/Layout';

const Dashboard = () => {
  const metrics = [
    {
      title: 'Total Admissions',
      value: '2,847',
      change: '+12.5%',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Fee Collected',
      value: '₹84.2L',
      change: '+8.1%',
      icon: CreditCard,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Hostel Occupancy',
      value: '87%',
      change: '+5.2%',
      icon: Building,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Active Exams',
      value: '23',
      change: '+2',
      icon: FileText,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const recentActivities = [
    {
      type: 'admission',
      message: 'New student registration: Priya Sharma (CSE)',
      time: '5 minutes ago',
      status: 'success'
    },
    {
      type: 'payment',
      message: 'Fee payment received: ₹45,000 from Rajesh Kumar',
      time: '12 minutes ago', 
      status: 'success'
    },
    {
      type: 'hostel',
      message: 'Room B-204 allocated to Ankit Singh',
      time: '25 minutes ago',
      status: 'info'
    },
    {
      type: 'alert',
      message: 'System backup completed successfully',
      time: '1 hour ago',
      status: 'success'
    },
    {
      type: 'exam',
      message: 'Mathematics exam schedule updated',
      time: '2 hours ago',
      status: 'info'
    }
  ];

  const departmentStats = [
    { name: 'Computer Science', students: 856, percentage: 65 },
    { name: 'Mechanical Engg', students: 742, percentage: 58 },
    { name: 'Electronics', students: 623, percentage: 48 },
    { name: 'Civil Engineering', students: 534, percentage: 42 },
    { name: 'Information Tech', students: 467, percentage: 36 }
  ];

  return (
    <Layout>
      <div className="p-6 space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary-deep">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's what's happening at your institution.</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-success-light rounded-lg border border-success/20">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-success">System Online</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="metric-card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                    <metric.icon className={`h-6 w-6 ${metric.color}`} />
                  </div>
                  <div className="flex items-center gap-1 text-sm text-success">
                    <TrendingUp className="h-3 w-3" />
                    <span>{metric.change}</span>
                  </div>
                </div>
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.title}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Department Statistics */}
          <Card className="lg:col-span-2 dashboard-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary-deep" />
                Department-wise Enrollment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {departmentStats.map((dept, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{dept.name}</span>
                    <span className="text-muted-foreground">{dept.students} students</span>
                  </div>
                  <Progress value={dept.percentage} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-primary-deep" />
                Recent Activities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex gap-3 p-3 rounded-lg border border-border bg-secondary/20">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    activity.status === 'success' ? 'bg-success' : 
                    activity.status === 'info' ? 'bg-primary-deep' : 'bg-destructive'
                  }`}></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-card-foreground">{activity.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="dashboard-card cursor-pointer hover:bg-primary-light transition-colors">
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 text-primary-deep mx-auto mb-2" />
              <div className="font-medium text-sm">New Admission</div>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card cursor-pointer hover:bg-success-light transition-colors">
            <CardContent className="p-4 text-center">
              <CreditCard className="h-8 w-8 text-success mx-auto mb-2" />
              <div className="font-medium text-sm">Process Payment</div>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card cursor-pointer hover:bg-purple-50 transition-colors">
            <CardContent className="p-4 text-center">
              <Building className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="font-medium text-sm">Assign Room</div>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card cursor-pointer hover:bg-orange-50 transition-colors">
            <CardContent className="p-4 text-center">
              <FileText className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="font-medium text-sm">Update Grades</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;