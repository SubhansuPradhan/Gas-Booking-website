import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { NotificationForm } from './notification-form';
import { Users, Fuel, AlertTriangle } from 'lucide-react';

const users = [
    { id: 'USR001', name: 'Alice Johnson', email: 'alice@example.com', cylindersUsed: 5 },
    { id: 'USR002', name: 'Bob Williams', email: 'bob@example.com', cylindersUsed: 8 },
    { id: 'USR003', name: 'Charlie Brown', email: 'charlie@example.com', cylindersUsed: 2 },
    { id: 'USR004', name: 'Diana Prince', email: 'diana@example.com', cylindersUsed: 11 },
];

const bookings = [
    { id: 'BK54321', user: 'Charlie Brown', date: '2024-05-20', status: 'Pending' },
    { id: 'BK54322', user: 'Alice Johnson', date: '2024-05-19', status: 'Pending' },
    { id: 'BK54323', user: 'Bob Williams', date: '2024-05-18', status: 'Approved' },
];

export default function AdminDashboardPage() {
    return (
        <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2 sm:w-auto sm:inline-flex md:grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="bookings">Bookings</TabsTrigger>
                <TabsTrigger value="notifications">Smart Notifications</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{users.length}</div>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Pending Bookings</CardTitle>
                            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{bookings.filter(b => b.status === 'Pending').length}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
                            <Fuel className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{bookings.length}</div>
                        </CardContent>
                    </Card>
                </div>
            </TabsContent>

            <TabsContent value="users">
                <Card>
                    <CardHeader>
                        <CardTitle>User Management</CardTitle>
                        <CardDescription>View and manage all registered users.</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>User ID</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Cylinders Used</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {users.map(user => (
                                    <TableRow key={user.id}>
                                        <TableCell>{user.id}</TableCell>
                                        <TableCell className="font-medium">{user.name}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{user.cylindersUsed}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="bookings">
                <Card>
                    <CardHeader>
                        <CardTitle>Booking Requests</CardTitle>
                        <CardDescription>Approve or reject new cylinder booking requests.</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Booking ID</TableHead>
                                    <TableHead>User</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {bookings.map(booking => (
                                    <TableRow key={booking.id}>
                                        <TableCell>{booking.id}</TableCell>
                                        <TableCell className="font-medium">{booking.user}</TableCell>
                                        <TableCell>{booking.date}</TableCell>
                                        <TableCell>
                                            <Badge variant={booking.status === 'Pending' ? 'destructive' : 'default'} className={booking.status === 'Approved' ? 'bg-accent text-accent-foreground' : ''}>{booking.status}</Badge>
                                        </TableCell>
                                        <TableCell className="text-right space-x-2">
                                            {booking.status === 'Pending' && (
                                                <>
                                                    <Button size="sm" variant="outline">Approve</Button>
                                                    <Button size="sm" variant="destructive">Reject</Button>
                                                </>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="notifications">
                <Card>
                    <CardHeader>
                        <CardTitle>Smart Notification Tool</CardTitle>
                        <CardDescription>Use AI to craft and send notifications to users.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <NotificationForm />
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );
}
