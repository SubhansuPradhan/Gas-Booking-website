"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateNotification } from '@/ai/flows/smart-notification-tool';
import { useToast } from '@/hooks/use-toast';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

const formSchema = z.object({
  notificationType: z.string().min(1, 'Please select a notification type.'),
  userDetails: z.string().optional(),
  accountBalance: z.string().optional(),
  bookingDetails: z.string().optional(),
  otherDetails: z.string().optional(),
});

export function NotificationForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      notificationType: '',
      userDetails: '',
      accountBalance: '',
      bookingDetails: '',
      otherDetails: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedMessage('');
    try {
      const result = await generateNotification(values);
      setGeneratedMessage(result.notificationMessage);
       toast({
        title: 'Message Generated!',
        description: 'Review the message and send it to the user.',
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Error Generating Message',
        description: 'An unexpected error occurred. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }
  
  function handleSend() {
     toast({
        title: 'Notification Sent!',
        description: 'The message has been sent to the user.',
     });
     setGeneratedMessage('');
     form.reset();
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="notificationType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notification Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="account balance">Account Balance</SelectItem>
                    <SelectItem value="cylinder booking">Cylinder Booking</SelectItem>
                    <SelectItem value="general update">General Update</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="userDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User Details (Optional)</FormLabel>
                <Input placeholder="e.g., User ID: 12345, Name: John Doe" {...field} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="accountBalance"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account Balance (Optional)</FormLabel>
                <Input placeholder="e.g., $50.00" {...field} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bookingDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Booking Details (Optional)</FormLabel>
                <Textarea placeholder="e.g., Booking ID: BK12345, Delivery expected tomorrow." {...field} />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="otherDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Other Details (Optional)</FormLabel>
                <Textarea placeholder="e.g., Upcoming maintenance on 25th Dec." {...field} />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Generate Message
          </Button>
        </form>
      </Form>
      <Card className="flex flex-col">
        <div className="p-6 space-y-4 flex flex-col flex-1">
            <div className="space-y-2 flex-1 flex flex-col">
                <FormLabel htmlFor="generated-message">Generated Notification Message</FormLabel>
                <Textarea
                id="generated-message"
                placeholder="AI-generated message will appear here..."
                value={generatedMessage}
                readOnly
                className="min-h-[200px] bg-muted flex-1"
                />
            </div>
            <Button onClick={handleSend} disabled={!generatedMessage || isLoading} className="w-full md:w-auto md:self-end">
                Send Notification
            </Button>
        </div>
      </Card>
    </div>
  );
}
