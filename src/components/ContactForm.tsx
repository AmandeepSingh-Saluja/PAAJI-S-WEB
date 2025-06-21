'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

const RESTAURANT_EMAIL = "paajisrestaurant@gmail.com"; 

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    setIsSubmitting(true);
    
    // Using mailto: link as per simplified requirement
    const subject = `Contact Form Submission from ${data.name}`;
    const body = `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`;
    const mailtoLink = `mailto:${RESTAURANT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Attempt to open mail client
    window.location.href = mailtoLink;

    // Provide feedback to the user
    // Note: We can't know if the email was actually sent using mailto:
    // This toast informs them that their mail client should have opened.
    toast({
      title: "Mail Client Opened",
      description: "Your email client should have opened with a pre-filled message. Please complete sending it there.",
    });
    
    reset(); // Reset form fields
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-8 bg-card rounded-lg shadow-xl">
      <div>
        <Label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name</Label>
        <Input
          id="name"
          type="text"
          {...register('name')}
          className={`w-full ${errors.name ? 'border-destructive ring-destructive' : ''}`}
          placeholder="e.g. John Doe"
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
      </div>

      <div>
        <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email Address</Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          className={`w-full ${errors.email ? 'border-destructive ring-destructive' : ''}`}
          placeholder="you@example.com"
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
      </div>

      <div>
        <Label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</Label>
        <Textarea
          id="message"
          {...register('message')}
          rows={5}
          className={`w-full ${errors.message ? 'border-destructive ring-destructive' : ''}`}
          placeholder="Your message..."
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
      </div>

      <div>
        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-accent text-primary-foreground text-lg py-3 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg" 
          disabled={isSubmitting}
          aria-live="polite"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </>
          )}
        </Button>
      </div>
       <p className="text-xs text-muted-foreground text-center pt-2">
        Note: Clicking "Send Message" will open your default email application.
      </p>
    </form>
  );
}
