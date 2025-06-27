'use server';

/**
 * @fileOverview A Smart Notification Tool that suggests notification messages to send to users.
 *
 * - generateNotification - A function that generates notification messages.
 * - SmartNotificationToolInput - The input type for the generateNotification function.
 * - SmartNotificationToolOutput - The return type for the generateNotification function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SmartNotificationToolInputSchema = z.object({
  notificationType: z
    .string()
    .describe(
      'The type of notification to generate (e.g., account balance, cylinder booking, general update).'
    ),
  userDetails: z.string().optional().describe('Details about the user.'),
  accountBalance: z.string().optional().describe('The user account balance.'),
  bookingDetails: z.string().optional().describe('Details about the cylinder booking.'),
  otherDetails: z.string().optional().describe('Any other relevant details for the notification.'),
});
export type SmartNotificationToolInput = z.infer<
  typeof SmartNotificationToolInputSchema
>;

const SmartNotificationToolOutputSchema = z.object({
  notificationMessage: z
    .string()
    .describe('The generated notification message.'),
});
export type SmartNotificationToolOutput = z.infer<
  typeof SmartNotificationToolOutputSchema
>;

export async function generateNotification(
  input: SmartNotificationToolInput
): Promise<SmartNotificationToolOutput> {
  return smartNotificationToolFlow(input);
}

const prompt = ai.definePrompt({
  name: 'smartNotificationToolPrompt',
  input: {schema: SmartNotificationToolInputSchema},
  output: {schema: SmartNotificationToolOutputSchema},
  prompt: `You are an AI assistant specializing in generating notification messages for a gas agency system.

  Based on the provided information, craft a clear, concise, and informative notification message.

  Notification Type: {{{notificationType}}}
  User Details: {{{userDetails}}}
  Account Balance: {{{accountBalance}}}
  Booking Details: {{{bookingDetails}}}
  Other Details: {{{otherDetails}}}

  Generated Notification Message:`,
});

const smartNotificationToolFlow = ai.defineFlow(
  {
    name: 'smartNotificationToolFlow',
    inputSchema: SmartNotificationToolInputSchema,
    outputSchema: SmartNotificationToolOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
