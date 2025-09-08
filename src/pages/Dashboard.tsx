import { Users, CreditCard, Building, FileText, TrendingUp, AlertCircle, BookOpen, BarChart3, PieChart, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { LineChart, Line, AreaChart, Area, PieChart as RechartsPieChart, Cell, Pie, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Layout from '@/components/Layout';

const Dashboard = () => {
  const metrics = [
    {
      title: 'Total Admissions',
      value: '2,847',
      change: '+12.5%',
      icon: Users,
      cardClass: 'metric-card-primary',
      iconColor: 'text-primary',
      bgColor: 'bg-primary-light'
    },
    {
      title: 'Fee Collected',
      value: '₹84.2L',
      change: '+8.1%',
      icon: CreditCard,
      cardClass: 'metric-card-success',
      iconColor: 'text-success',
      bgColor: 'bg-success-light'
    },
    {
      title: 'Hostel Occupancy',
      value: '87%',
      change: '+5.2%',
      icon: Building,
      cardClass: 'metric-card-teal',
      iconColor: 'text-teal',
      bgColor: 'bg-teal-light'
    },
    {
      title: 'Active Exams',
      value: '23',
      change: '+2',
      icon: FileText,
      cardClass: 'metric-card-orange',
      iconColor: 'text-orange',
      bgColor: 'bg-orange-light'
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
    { name: 'Computer Science', students: 856, percentage: 65, color: '#3b82f6' },
    { name: 'Mechanical Engg', students: 742, percentage: 58, color: '#14b8a6' },
    { name: 'Electronics', students: 623, percentage: 48, color: '#f97316' },
    { name: 'Civil Engineering', students: 534, percentage: 42, color: '#22c55e' },
    { name: 'Information Tech', students: 467, percentage: 36, color: '#8b5cf6' }
  ];

  const enrollmentTrend = [
    { month: 'Jan', admissions: 245, fees: 12.5 },
    { month: 'Feb', admissions: 312, fees: 15.8 },
    { month: 'Mar', admissions: 189, fees: 9.2 },
    { month: 'Apr', admissions: 428, fees: 21.4 },
    { month: 'May', admissions: 367, fees: 18.9 },
    { month: 'Jun', admissions: 445, fees: 24.1 }
  ];

  const pieChartData = [
    { name: 'CSE', value: 30, color: '#3b82f6' },
    { name: 'ME', value: 25, color: '#14b8a6' },
    { name: 'ECE', value: 20, color: '#f97316' },
    { name: 'CE', value: 15, color: '#22c55e' },
    { name: 'IT', value: 10, color: '#8b5cf6' }
  ];

  return (
    <Layout>
      <div className="p-6 space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-teal bg-clip-text text-transparent">
              Smart Trackers Dashboard
            </h1>
            <p className="text-muted-foreground mt-2">Welcome back! Here's what's happening at your institution.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-success-light rounded-xl border border-success/20">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-success">System Online</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-primary-light rounded-xl border border-primary/20">
              <Activity className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Live Updates</span>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index} className={`${metric.cardClass} animate-slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${metric.bgColor}`}>
                    <metric.icon className={`h-6 w-6 ${metric.iconColor}`} />
                  </div>
                  <div className="flex items-center gap-1 text-sm text-success">
                    <TrendingUp className="h-3 w-3" />
                    <span className="font-medium">{metric.change}</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-card-foreground mb-1">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.title}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Analytics Section */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Enrollment Trends */}
          <Card className="lg:col-span-2 dashboard-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Enrollment Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={enrollmentTrend}>
                  <defs>
                    <linearGradient id="colorAdmissions" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }} 
                  />
                  <Area type="monotone" dataKey="admissions" stroke="#3b82f6" fillOpacity={1} fill="url(#colorAdmissions)" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                Recent Activities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex gap-3 p-3 rounded-lg border border-border bg-secondary/20">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    activity.status === 'success' ? 'bg-success' : 
                    activity.status === 'info' ? 'bg-primary' : 'bg-destructive'
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

        {/* Department Analytics */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Department Distribution */}
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-teal" />
                Department Split
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RechartsPieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RechartsPieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {pieChartData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span>{item.name}</span>
                    </div>
                    <span className="font-medium">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Department Statistics */}
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-success" />
                Department Enrollment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {departmentStats.map((dept, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: dept.color }}></div>
                      <span className="font-medium">{dept.name}</span>
                    </div>
                    <span className="text-muted-foreground">{dept.students} students</span>
                  </div>
                  <Progress value={dept.percentage} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <Card className="dashboard-card cursor-pointer hover:bg-primary-light transition-all duration-300 group">
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-medium text-sm">New Admission</div>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card cursor-pointer hover:bg-success-light transition-all duration-300 group">
            <CardContent className="p-4 text-center">
              <CreditCard className="h-8 w-8 text-success mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-medium text-sm">Process Payment</div>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card cursor-pointer hover:bg-teal-light transition-all duration-300 group">
            <CardContent className="p-4 text-center">
              <Building className="h-8 w-8 text-teal mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-medium text-sm">Assign Room</div>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card cursor-pointer hover:bg-orange-light transition-all duration-300 group">
            <CardContent className="p-4 text-center">
              <FileText className="h-8 w-8 text-orange mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-medium text-sm">Update Grades</div>
            </CardContent>
          </Card>

          <Card className="dashboard-card cursor-pointer hover:bg-purple-50 transition-all duration-300 group">
            <CardContent className="p-4 text-center">
              <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-medium text-sm">Library Access</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;