import { useState } from 'react';
import { Upload, User, Mail, Phone, MapPin, GraduationCap, FileText, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Layout from '@/components/Layout';

const Admissions = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    course: '',
    previousEducation: '',
    documents: []
  });

  const courses = [
    'Computer Science Engineering',
    'Mechanical Engineering',
    'Electronics Engineering',
    'Civil Engineering',
    'Information Technology',
    'Electrical Engineering'
  ];

  const requiredDocuments = [
    'High School Marksheet',
    'Transfer Certificate',
    'Character Certificate',
    'Passport Size Photo',
    'Aadhar Card Copy',
    'Income Certificate'
  ];

  const handleSubmit = () => {
    toast({
      title: "Application Submitted Successfully!",
      description: "Your admission application has been received. Application ID: ADM2024001847",
    });
  };

  const handleFileUpload = (docName: string) => {
    toast({
      title: "Document Uploaded",
      description: `${docName} has been uploaded successfully.`,
    });
  };

  return (
    <Layout>
      <div className="p-6 space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary-deep">Admissions Management</h1>
            <p className="text-muted-foreground">Process new student applications and manage admissions</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-primary-light rounded-lg">
            <GraduationCap className="h-5 w-5 text-primary-deep" />
            <span className="text-sm font-medium text-primary-deep">Online Applications: 124</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Application Form */}
          <Card className="lg:col-span-2 dashboard-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary-deep" />
                Student Application Form
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Personal Information */}
              <div className="form-section">
                <h3 className="font-semibold mb-4 text-primary-deep">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter first name"
                      value={formData.firstName}
                      onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter last name"
                      value={formData.lastName}
                      onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="email" 
                        type="email"
                        placeholder="student@email.com"
                        className="pl-10"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="phone" 
                        placeholder="+91 9876543210"
                        className="pl-10"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Textarea 
                      id="address" 
                      placeholder="Complete address with pincode"
                      className="pl-10 min-h-[80px]"
                      value={formData.address}
                      onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                    />
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div className="form-section">
                <h3 className="font-semibold mb-4 text-primary-deep">Academic Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Course Selection</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your course" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course) => (
                          <SelectItem key={course} value={course}>
                            {course}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="previousEducation">Previous Education</Label>
                    <Input 
                      id="previousEducation" 
                      placeholder="e.g., 12th Science (85%)"
                      value={formData.previousEducation}
                      onChange={(e) => setFormData(prev => ({ ...prev, previousEducation: e.target.value }))}
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                onClick={handleSubmit}
                className="w-full bg-primary-deep hover:bg-primary-deep/90"
                size="lg"
              >
                Submit Application
                <CheckCircle className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>

          {/* Document Upload & Status */}
          <div className="space-y-6">
            {/* Document Upload */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary-deep" />
                  Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex-1">
                      <span className="text-sm font-medium">{doc}</span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleFileUpload(doc)}
                    >
                      <Upload className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Application Status */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle>Application Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                    <span className="text-sm">Application Received</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                    <span className="text-sm">Documents Verified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary-deep rounded-full"></div>
                    <span className="text-sm">Under Review</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-border rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Admission Confirmed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="dashboard-card">
              <CardContent className="p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Pending Applications</span>
                  <span className="font-bold text-primary-deep">47</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Approved Today</span>
                  <span className="font-bold text-success">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Seats</span>
                  <span className="font-bold text-card-foreground">3,200</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Admissions;