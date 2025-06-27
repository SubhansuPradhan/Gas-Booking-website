import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Fuel, Calendar, CircleCheck } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const bookingHistory = [
  { id: 'BK12345', date: '2024-04-15', status: 'Delivered', payment: 'Paytm QR' },
  { id: 'BK12331', date: '2024-03-10', status: 'Delivered', payment: 'Cash on Delivery' },
  { id: 'BK12322', date: '2024-02-05', status: 'Delivered', payment: 'Cash on Delivery' },
  { id: 'BK12319', date: '2024-01-01', status: 'Delivered', payment: 'Paytm QR' },
];

const cylindersPerYear = 12;
const cylindersUsed = bookingHistory.length;
const cylindersLeft = cylindersPerYear - cylindersUsed;

export default function UserDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Cylinders Left</CardTitle>
            <Fuel className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{cylindersLeft} / {cylindersPerYear}</div>
            <p className="text-xs text-muted-foreground">Remaining for this year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Last Booking</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{bookingHistory[0].date}</div>
            <p className="text-xs text-muted-foreground">Status: {bookingHistory[0].status}</p>
          </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col justify-center">
            <CardContent className="pt-6">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="w-full" size="lg" disabled={cylindersLeft <= 0}>Book New Cylinder</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Confirm Cylinder Booking</AlertDialogTitle>
                      <AlertDialogDescription>
                        You are about to book a new gas cylinder. This will use one of your {cylindersLeft} remaining cylinders for the year. Do you want to proceed?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Confirm Booking</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
            </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Booking History</CardTitle>
          <CardDescription>View your past gas cylinder bookings.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Booking ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Payment</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookingHistory.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">{booking.id}</TableCell>
                  <TableCell>{booking.date}</TableCell>
                  <TableCell>
                    <Badge variant={booking.status === 'Delivered' ? 'default' : 'secondary'} className="bg-accent text-accent-foreground hover:bg-accent/80">
                      <CircleCheck className="mr-2 h-4 w-4" />
                      {booking.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{booking.payment}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
