import { useState } from 'react';
import { Building, Bed, Users, MapPin, Search, Filter, UserPlus, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import Layout from '@/components/Layout';

const HostelAllocation = () => {
  const { toast } = useToast();
  const [selectedRoom, setSelectedRoom] = useState(null);

  const hostelStats = [
    {
      title: 'Total Rooms',
      value: '450',
      icon: Building,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Occupied Rooms',
      value: '392',
      icon: Bed,
      color: 'text-success',
      bgColor: 'bg-success-light'
    },
    {
      title: 'Available Rooms',
      value: '58',
      icon: UserPlus,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Occupancy Rate',
      value: '87%',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const roomData = [
    {
      roomNo: 'A-101',
      block: 'Block A',
      capacity: 2,
      occupied: 2,
      status: 'occupied',
      students: ['Priya Sharma', 'Neha Gupta'],
      facilities: ['AC', 'Wi-Fi', 'Attached Bath']
    },
    {
      roomNo: 'A-102', 
      block: 'Block A',
      capacity: 2,
      occupied: 1,
      status: 'partial',
      students: ['Rajesh Kumar'],
      facilities: ['AC', 'Wi-Fi', 'Attached Bath']
    },
    {
      roomNo: 'B-201',
      block: 'Block B',
      capacity: 3,
      occupied: 0,
      status: 'available',
      students: [],
      facilities: ['Fan', 'Wi-Fi', 'Common Bath']
    },
    {
      roomNo: 'B-202',
      block: 'Block B', 
      capacity: 3,
      occupied: 3,
      status: 'occupied',
      students: ['Ankit Singh', 'Rohit Verma', 'Amit Sharma'],
      facilities: ['Fan', 'Wi-Fi', 'Common Bath']
    },
    {
      roomNo: 'C-301',
      block: 'Block C',
      capacity: 2,
      occupied: 0,
      status: 'available',
      students: [],
      facilities: ['AC', 'Wi-Fi', 'Attached Bath', 'Balcony']
    },
    {
      roomNo: 'C-302',
      block: 'Block C',
      capacity: 2,
      occupied: 1,
      status: 'partial', 
      students: ['Sneha Patel'],
      facilities: ['AC', 'Wi-Fi', 'Attached Bath', 'Balcony']
    }
  ];

  const getStatusBadge = (status: string, occupied: number, capacity: number) => {
    switch (status) {
      case 'available':
        return <Badge className="status-available">Available</Badge>;
      case 'occupied':
        return <Badge className="status-occupied">Full</Badge>;
      case 'partial':
        return <Badge variant="outline" className="border-orange-200 text-orange-600">
          {occupied}/{capacity}
        </Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const handleAllocateRoom = (roomNo: string) => {
    toast({
      title: "Room Allocated",
      description: `Room ${roomNo} has been successfully allocated to the student.`,
    });
  };

  const handleViewDetails = (room: any) => {
    setSelectedRoom(room);
    toast({
      title: "Room Details",
      description: `Viewing details for room ${room.roomNo}`,
    });
  };

  return (
    <Layout>
      <div className="p-6 space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary-deep">Hostel Allocation</h1>
            <p className="text-muted-foreground">Real-time room availability and smart allocation management</p>
          </div>
          <Button className="bg-primary-deep hover:bg-primary-deep/90">
            <UserPlus className="h-4 w-4 mr-2" />
            Allocate New Room
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hostelStats.map((stat, index) => (
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
          {/* Room Availability Table */}
          <Card className="lg:col-span-2 dashboard-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-primary-deep" />
                  Live Room Occupancy
                </CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search rooms..." className="pl-10 w-48" />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Room No.</TableHead>
                    <TableHead>Block</TableHead>
                    <TableHead>Occupancy</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {roomData.map((room) => (
                    <TableRow key={room.roomNo}>
                      <TableCell className="font-medium">{room.roomNo}</TableCell>
                      <TableCell>{room.block}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span>{room.occupied}/{room.capacity}</span>
                          <div className="flex gap-1">
                            {Array.from({ length: room.capacity }).map((_, i) => (
                              <div
                                key={i}
                                className={`w-3 h-3 rounded-sm ${
                                  i < room.occupied ? 'bg-primary-deep' : 'bg-border'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(room.status, room.occupied, room.capacity)}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleViewDetails(room)}
                          >
                            <Eye className="h-3 w-3" />
                          </Button>
                          {room.status !== 'occupied' && (
                            <Button 
                              size="sm"
                              onClick={() => handleAllocateRoom(room.roomNo)}
                              className="bg-success hover:bg-success/90"
                            >
                              Allocate
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

          {/* Room Details & Allocation */}
          <div className="space-y-6">
            {/* Quick Allocation */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="h-5 w-5 text-primary-deep" />
                  Quick Allocation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Student ID</label>
                  <Input placeholder="Enter Student ID" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Preferred Block</label>
                  <select className="w-full p-2 border border-border rounded-md">
                    <option>Any Available</option>
                    <option>Block A</option>
                    <option>Block B</option>
                    <option>Block C</option>
                  </select>
                </div>
                <Button className="w-full bg-success hover:bg-success/90">
                  Auto Allocate Room
                </Button>
              </CardContent>
            </Card>

            {/* Block Overview */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary-deep" />
                  Block Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg border border-border">
                    <div>
                      <div className="font-medium text-sm">Block A</div>
                      <div className="text-xs text-muted-foreground">Premium Rooms</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">85/100</div>
                      <div className="text-xs text-muted-foreground">85% Full</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg border border-border">
                    <div>
                      <div className="font-medium text-sm">Block B</div>
                      <div className="text-xs text-muted-foreground">Standard Rooms</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">142/180</div>
                      <div className="text-xs text-muted-foreground">79% Full</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg border border-border">
                    <div>
                      <div className="font-medium text-sm">Block C</div>
                      <div className="text-xs text-muted-foreground">Deluxe Rooms</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">165/170</div>
                      <div className="text-xs text-muted-foreground">97% Full</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Facilities Legend */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle>Room Facilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span>Available</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <span>Occupied</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span>Partially Filled</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HostelAllocation;