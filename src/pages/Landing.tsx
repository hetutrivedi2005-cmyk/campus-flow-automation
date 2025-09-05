import { useNavigate } from 'react-router-dom';
import { 
  GraduationCap, 
  Users, 
  CreditCard, 
  Building, 
  FileText, 
  Shield,
  Zap,
  BarChart3,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: 'Smart Admissions',
      description: 'Streamlined online application process with automated document verification and real-time status tracking.',
      color: 'text-blue-600'
    },
    {
      icon: CreditCard,
      title: 'Automated Fee Management',
      description: 'Digital payment processing with automatic receipt generation and comprehensive financial reporting.',
      color: 'text-green-600'
    },
    {
      icon: Building,
      title: 'Live Hostel Allocation',
      description: 'Real-time room availability tracking with smart allocation algorithms and occupancy management.',
      color: 'text-purple-600'
    },
    {
      icon: FileText,
      title: 'Examination Records',
      description: 'Complete marksheet management with automated grading systems and performance analytics.',
      color: 'text-orange-600'
    }
  ];

  const benefits = [
    'Reduce administrative workload by 70%',
    'Real-time data synchronization',
    'Advanced security & encryption',
    'Mobile-responsive design',
    'Automated backup systems',
    'Role-based access control'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-background to-secondary">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-deep rounded-xl">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary-deep">ERP Smart</h1>
              <p className="text-sm text-muted-foreground">Student Management System</p>
            </div>
          </div>
          
          <Button onClick={() => navigate('/login')} className="bg-primary-deep hover:bg-primary-deep/90">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary-deep text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            Smart Automation for Modern Education
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-deep to-blue-600 bg-clip-text text-transparent">
            Smart, Low-Cost ERP for Colleges
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your educational institution with our comprehensive student management system. 
            Streamline admissions, manage fees, allocate hostels, and track academic records—all in one intelligent platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/dashboard')}
              className="bg-primary-deep hover:bg-primary-deep/90 px-8 py-3 text-lg"
            >
              View Demo Dashboard
              <BarChart3 className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/login')}
              className="border-primary-deep text-primary-deep hover:bg-primary-deep hover:text-white px-8 py-3 text-lg"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary-deep">Comprehensive Management Modules</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every aspect of student lifecycle management, powered by smart automation and real-time insights.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="dashboard-card hover:shadow-lg transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-light rounded-lg mb-4">
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-card py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary-deep">Why Choose ERP Smart?</h2>
              <p className="text-muted-foreground mb-8">
                Built specifically for educational institutions, our platform combines cutting-edge technology 
                with intuitive design to deliver exceptional results.
              </p>
              
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-card-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-primary-deep to-blue-600 rounded-2xl p-8 text-white">
                <Shield className="h-12 w-12 mb-4 text-white/80" />
                <h3 className="text-2xl font-bold mb-4">Enterprise-Grade Security</h3>
                <p className="text-white/90 mb-6">
                  Your data is protected with bank-level encryption, automated backups, 
                  and comprehensive audit trails. GDPR compliant and SOC 2 certified.
                </p>
                <Button variant="secondary" onClick={() => navigate('/login')}>
                  Learn More About Security
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-primary-deep">Ready to Transform Your Institution?</h2>
          <p className="text-muted-foreground mb-8">
            Join hundreds of educational institutions already using ERP Smart to streamline their operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/login')}
              className="bg-primary-deep hover:bg-primary-deep/90"
            >
              Start Your Free Trial
            </Button>
            <Button variant="outline" size="lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-deep text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="h-6 w-6" />
            <span className="text-lg font-semibold">ERP Smart</span>
          </div>
          <p className="text-white/70">
            © 2024 ERP Smart Solutions. Smart Automation for Modern Education.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;