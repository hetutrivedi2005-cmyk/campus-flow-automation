import { useState } from 'react';
import { CreditCard, Download, Receipt, Search, Filter, DollarSign, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import Layout from '@/components/Layout';

const FeeManagement = () => {
  const { toast } = useToast();
  const [selectedStudent, setSelectedStudent] = useState(null);

  const feeRecords = [
    {
      id: 'FEE001',
      studentName: 'Priya Sharma',
      studentId: 'CSE2024001',
      amount: 45000,
      dueDate: '2024-03-15',
      status: 'paid',
      paymentDate: '2024-03-10',
      semester: 'Spring 2024'
    },
    {
      id: 'FEE002', 
      studentName: 'Rajesh Kumar',
      studentId: 'ME2024002',
      amount: 42000,
      dueDate: '2024-03-15',
      status: 'pending',
      paymentDate: null,
      semester: 'Spring 2024'
    },
    {
      id: 'FEE003',
      studentName: 'Ankit Singh', 
      studentId: 'ECE2024003',
      amount: 43500,
      dueDate: '2024-03-20',
      status: 'overdue',
      paymentDate: null,
      semester: 'Spring 2024'
    },
    {
      id: 'FEE004',
      studentName: 'Sneha Patel',
      studentId: 'IT2024004', 
      amount: 44000,
      dueDate: '2024-03-25',
      status: 'paid',
      paymentDate: '2024-03-18',
      semester: 'Spring 2024'
    }
  ];

  const paymentStats = [
    {
      title: 'Total Collections',
      value: '₹84.2L',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Paid This Month',
      value: '₹12.4L',
      icon: CheckCircle, 
      color: 'text-success',
      bgColor: 'bg-success-light'
    },
    {
      title: 'Pending Payments',
      value: '₹3.8L',
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Overdue Amount',
      value: '₹1.2L',
      icon: AlertTriangle,
      color: 'text-destructive',
      bgColor: 'bg-red-50'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return <Badge className="bg-success-light text-success">Paid</Badge>;
      case 'pending':
        return <Badge variant="outline" className="border-orange-200 text-orange-600">Pending</Badge>;
      case 'overdue':
        return <Badge variant="destructive">Overdue</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const handleGenerateReceipt = (feeId: string) => {
    toast({
      title: "Receipt Generated",
      description: `Digital receipt for ${feeId} has been generated and sent to student's email.`,
    });
  };

  const handleProcessPayment = (studentName: string) => {
    toast({
      title: "Payment Processed",
      description: `Fee payment for ${studentName} has been processed successfully.`,
    });
  };

  return (
    <Layout>
      <div className="p-6 space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary-deep">Fee Management</h1>
            <p className="text-muted-foreground">Automated fee collection and digital receipt generation</p>
          </div>
          <Button className="bg-primary-deep hover:bg-primary-deep/90">
            <CreditCard className="h-4 w-4 mr-2" />
            Process Bulk Payments
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paymentStats.map((stat, index) => (
            <Card key={index} className="metric-card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
                <div className="metric-value">{stat.value}</div>
                <div className="metric-label">{stat.title}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Fee Records Table */}
          <Card className="lg:col-span-2 dashboard-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Receipt className="h-5 w-5 text-primary-deep" />
                  Fee Records
                </CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search students..." className="pl-10 w-64" />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {feeRecords.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{record.studentName}</div>
                          <div className="text-xs text-muted-foreground">{record.studentId}</div>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">₹{record.amount.toLocaleString()}</TableCell>
                      <TableCell>{record.dueDate}</TableCell>
                      <TableCell>{getStatusBadge(record.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          {record.status === 'paid' ? (
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleGenerateReceipt(record.id)}
                            >
                              <Download className="h-3 w-3" />
                            </Button>
                          ) : (
                            <Button 
                              size="sm"
                              onClick={() => handleProcessPayment(record.studentName)}
                              className="bg-success hover:bg-success/90"
                            >
                              Pay Now
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Payment Processing */}
          <div className="space-y-6">
            {/* Quick Payment */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary-deep" />
                  Quick Payment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Student ID</label>
                  <Input placeholder="Enter Student ID" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Amount</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="0.00" className="pl-10" />
                  </div>
                </div>
                <Button className="w-full bg-success hover:bg-success/90">
                  Process Payment
                </Button>
              </CardContent>
            </Card>

            {/* Receipt Generator */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Receipt className="h-5 w-5 text-primary-deep" />
                  Receipt Generator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-secondary/20 rounded-lg border border-border">
                  <h4 className="font-medium text-sm mb-2">Auto-Generated Receipt</h4>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div>Receipt ID: RCP2024001847</div>
                    <div>Student: Priya Sharma</div>
                    <div>Amount: ₹45,000</div>
                    <div>Date: March 10, 2024</div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle>Accepted Payment Methods</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-2 rounded border">
                  <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                    <CreditCard className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm">Credit/Debit Cards</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded border">
                  <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                    <DollarSign className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm">UPI Payments</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded border">
                  <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                    <Receipt className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-sm">Net Banking</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FeeManagement;