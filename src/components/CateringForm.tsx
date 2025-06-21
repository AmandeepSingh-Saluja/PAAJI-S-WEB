
'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send, Calendar as CalendarIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const cateringFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid 10-digit mobile number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  eventDate: z.date({
    required_error: "An event date is required.",
  }),
  address: z.string().min(5, { message: "Address must be at least 5 characters."}),
  eventTime: z.string().min(1, { message: "Please specify the event time."}),
  comments: z.string().optional(),
});


type CateringFormInputs = z.infer<typeof cateringFormSchema>;

const RESTAURANT_EMAIL = "paajisrestaurant@gmail.com"; 

export default function CateringForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset, control } = useForm<CateringFormInputs>({
    resolver: zodResolver(cateringFormSchema),
  });

  const onSubmit = async (data: CateringFormInputs) => {
    setIsSubmitting(true);
    
    const subject = `Corporate Booking/Bulk Order Inquiry from ${data.name}`;
    const body = `
      Corporate Booking / Bulk Order Details:
      ---------------------------
      Name: ${data.name}
      Mobile No.: ${data.phone}
      Email: ${data.email}
      Date of Event: ${format(data.eventDate, 'PPP')}
      Time of Event: ${data.eventTime}
      Address: ${data.address}
      
      Comments:
      ${data.comments || 'No additional comments provided.'}
    `;
    const mailtoLink = `mailto:${RESTAURANT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.trim())}`;

    window.location.href = mailtoLink;

    toast({
      title: "Mail Client Opened",
      description: "Your email client should have opened to send your catering inquiry. Please complete sending it there.",
    });
    
    reset();
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-8 bg-card rounded-lg shadow-xl">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register('name')} placeholder="Your full name" />
        {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
      </div>
      
      <div>
        <Label htmlFor="phone">Mobile No.</Label>
        <Input id="phone" type="tel" {...register('phone')} placeholder="Your 10-digit mobile number" />
        {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>}
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register('email')} placeholder="you@example.com" />
        {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
      </div>
      
      <div>
        <Label htmlFor="eventDate">Date of Event</Label>
        <Controller
          control={control}
          name="eventDate"
          render={({ field }) => (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() - 1))}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          )}
        />
        {errors.eventDate && <p className="mt-1 text-sm text-destructive">{errors.eventDate.message}</p>}
      </div>

      <div>
        <Label htmlFor="address">Address</Label>
        <Textarea
          id="address"
          {...register('address')}
          rows={3}
          placeholder="Please provide the full event address"
        />
        {errors.address && <p className="mt-1 text-sm text-destructive">{errors.address.message}</p>}
      </div>

      <div>
        <Label htmlFor="eventTime">Time of Event</Label>
        <Input id="eventTime" type="text" {...register('eventTime')} placeholder="e.g. 7:00 PM" />
        {errors.eventTime && <p className="mt-1 text-sm text-destructive">{errors.eventTime.message}</p>}
      </div>

      <div>
        <Label htmlFor="comments">Comments</Label>
        <Textarea
          id="comments"
          {...register('comments')}
          rows={4}
          placeholder="Any special requests or questions? (Optional)"
        />
        {errors.comments && <p className="mt-1 text-sm text-destructive">{errors.comments.message}</p>}
      </div>

      <div>
        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-accent text-primary-foreground text-lg py-3" 
          disabled={isSubmitting}
        >
          {isSubmitting ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Send className="mr-2 h-5 w-5" />}
          Submit Inquiry
        </Button>
      </div>
       <p className="text-xs text-muted-foreground text-center pt-2">
        Note: Clicking "Submit Inquiry" will open your default email application.
      </p>
    </form>
  );
}
