import { useState } from 'react';
import { FileText, Calendar, Upload, Download, GraduationCap, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import Layout from '@/components/Layout';

const Examinations = () => {
  const { toast } = useToast();

  const examStats = [
    {
      title: 'Active Exams',
      value: '23',
      icon: Clock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Completed Exams',
      value: '45',
      icon: CheckCircle,
      color: 'text-success',
      bgColor: 'bg-success-light'
    },
    {
      title: 'Pending Results',
      value: '8',
      icon: AlertCircle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Total Students',
      value: '2,847',
      icon: GraduationCap,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const examSchedule = [
    {
      id: 'EX001',
      subject: 'Data Structures & Algorithms',
      course: 'Computer Science',
      date: '2024-03-20',
      time: '09:00 AM',
      duration: '3 hours',
      hall: 'Hall A-1',
      students: 85,
      status: 'scheduled'
    },
    {
      id: 'EX002', 
      subject: 'Digital Electronics',
      course: 'Electronics',
      date: '2024-03-21',
      time: '02:00 PM',
      duration: '3 hours',
      hall: 'Hall B-2',
      students: 72,
      status: 'scheduled'
    },
    {
      id: 'EX003',
      subject: 'Thermodynamics',
      course: 'Mechanical',
      date: '2024-03-18',
      time: '09:00 AM',
      duration: '3 hours',
      hall: 'Hall C-1',
      students: 94,
      status: 'completed'
    },
    {
      id: 'EX004',
      subject: 'Database Management',
      course: 'Information Technology',
      date: '2024-03-22',
      time: '09:00 AM', 
      duration: '3 hours',
      hall: 'Hall A-2',
      students: 68,
      status: 'scheduled'
    }
  ];

  const studentRecords = [
    {
      studentId: 'CSE2024001',
      name: 'Priya Sharma',
      course: 'Computer Science',
      semester: 'VI',
      cgpa: 8.7,
      subjects: [
        { name: 'Data Structures', marks: 92, grade: 'A+' },
        { name: 'Operating Systems', marks: 85, grade: 'A' },
        { name: 'Computer Networks', marks: 78, grade: 'B+' },
        { name: 'Software Engineering', marks: 88, grade: 'A' }
      ]
    },
    {
      studentId: 'ME2024002', 
      name: 'Rajesh Kumar',
      course: 'Mechanical Engineering',
      semester: 'IV',
      cgpa: 7.9,
      subjects: [
        { name: 'Thermodynamics', marks: 82, grade: 'A' },
        { name: 'Fluid Mechanics', marks: 75, grade: 'B+' },
        { name: 'Machine Design', marks: 79, grade: 'B+' },
        { name: 'Manufacturing Processes', marks: 84, grade: 'A' }
      ]
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'scheduled':
        return <Badge className="bg-blue-50 text-blue-600 border border-blue-200">Scheduled</Badge>;
      case 'completed':
        return <Badge className="bg-success-light text-success border border-success/20">Completed</Badge>;
      case 'ongoing':
        return <Badge className="bg-orange-50 text-orange-600 border border-orange-200">Ongoing</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const handleUploadMarksheet = () => {
    toast({
      title: "Marksheet Uploaded",
      description: "Student marksheet has been successfully uploaded and processed.",
    });
  };

  const handleGenerateResult = (examId: string) => {
    toast({
      title: "Result Generated",
      description: `Results for exam ${examId} have been compiled and are ready for review.`,
    });
  };

  return (
    <Layout>
      <div className="p-6 space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary-deep">Examination Management</h1>
            <p className="text-muted-foreground">Comprehensive exam scheduling and academic record management</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Exam
            </Button>
            <Button className="bg-primary-deep hover:bg-primary-deep/90">
              <Upload className="h-4 w-4 mr-2" />
              Upload Results
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {examStats.map((stat, index) => (
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

        {/* Main Content Tabs */}
        <Tabs defaultValue="schedule" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="schedule">Exam Schedule</TabsTrigger>
            <TabsTrigger value="records">Student Records</TabsTrigger>
            <TabsTrigger value="results">Results & Analytics</TabsTrigger>
          </TabsList>

          {/* Exam Schedule Tab */}
          <TabsContent value="schedule" className="space-y-6">
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary-deep" />
                  Examination Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Subject</TableHead>
                      <TableHead>Course</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Hall</TableHead>
                      <TableHead>Students</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {examSchedule.map((exam) => (
                      <TableRow key={exam.id}>
                        <TableCell className="font-medium">{exam.subject}</TableCell>
                        <TableCell>{exam.course}</TableCell>
                        <TableCell>
                          <div>
                            <div>{exam.date}</div>
                            <div className="text-xs text-muted-foreground">{exam.time} ({exam.duration})</div>
                          </div>
                        </TableCell>
                        <TableCell>{exam.hall}</TableCell>
                        <TableCell>{exam.students}</TableCell>
                        <TableCell>{getStatusBadge(exam.status)}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            {exam.status === 'completed' ? (
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleGenerateResult(exam.id)}
                              >
                                <FileText className="h-3 w-3" />
                              </Button>
                            ) : (
                              <Button variant="outline" size="sm">
                                Edit
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
          </TabsContent>

          {/* Student Records Tab */}
          <TabsContent value="records" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 dashboard-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary-deep" />
                    Student Academic Records
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {studentRecords.map((student, index) => (
                    <div key={index} className="form-section">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-primary-deep">{student.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {student.studentId} • {student.course} • Semester {student.semester}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-success">{student.cgpa}</div>
                          <div className="text-xs text-muted-foreground">CGPA</div>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        {student.subjects.map((subject, subIndex) => (
                          <div key={subIndex} className="flex items-center justify-between p-3 border border-border rounded-lg">
                            <div>
                              <div className="font-medium text-sm">{subject.name}</div>
                              <div className="text-xs text-muted-foreground">Grade: {subject.grade}</div>
                            </div>
                            <div className="text-lg font-bold text-primary-deep">{subject.marks}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="space-y-6">
                {/* Upload Marksheet */}
                <Card className="dashboard-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Upload className="h-5 w-5 text-primary-deep" />
                      Upload Marksheet
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                      <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground mb-4">
                        Drag & drop marksheet files or click to browse
                      </p>
                      <Button variant="outline" onClick={handleUploadMarksheet}>
                        Browse Files
                      </Button>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Supported formats: PDF, JPG, PNG (Max 10MB)
                    </div>
                  </CardContent>
                </Card>

                {/* Grade Statistics */}
                <Card className="dashboard-card">
                  <CardHeader>
                    <CardTitle>Grade Distribution</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">A+ (90-100)</span>
                      <span className="font-bold text-success">23%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">A (80-89)</span>
                      <span className="font-bold text-primary-deep">35%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">B+ (70-79)</span>
                      <span className="font-bold text-orange-600">28%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">B (60-69)</span>
                      <span className="font-bold text-muted-foreground">14%</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Results Tab */}
          <TabsContent value="results" className="space-y-6">
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary-deep" />
                  Results & Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-success mb-2">92.3%</div>
                    <div className="text-sm text-muted-foreground">Overall Pass Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-deep mb-2">7.8</div>
                    <div className="text-sm text-muted-foreground">Average CGPA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">2,847</div>
                    <div className="text-sm text-muted-foreground">Students Evaluated</div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <Button className="w-full bg-success hover:bg-success/90">
                    <Download className="h-4 w-4 mr-2" />
                    Generate Semester Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Examinations;