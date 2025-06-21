import ContactForm from '@/components/ContactForm';
import GoogleMapsEmbed from '@/components/GoogleMapsEmbed';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export const metadata = {
  title: "Contact Us - Paaji's Restaurant",
  description: "Get in touch with Paaji's Restaurant. Find our location, contact details, or send us a message.",
};

export default function ContactPage() {
  // Coordinates for Sadashiv Peth, Pune (approximate)
  const restaurantLatitude = 18.5085; 
  const restaurantLongitude = 73.8452;
  const restaurantPlaceName = "Paaji's Restaurant, 1843, Sadashiv Peth, Pune, Maharashtra 411030";


  return (
    <div className="bg-background min-h-screen py-12 sm:py-16">
      <header className="py-12 bg-primary/10 mb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle size={64} className="mx-auto text-primary mb-4" />
          <h1 className="font-headline text-5xl font-extrabold text-primary tracking-tight">
            Get In Touch
          </h1>
          <p className="mt-4 font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            We&apos;d love to hear from you! Whether it&apos;s for reservations, feedback, or inquiries, feel free to reach out.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Contact Form Section */}
          <div className="lg:order-1">
            <h2 className="font-headline text-3xl font-semibold text-primary mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Info & Map Section */}
          <div className="lg:order-2 space-y-8">
            <div>
              <h2 className="font-headline text-3xl font-semibold text-primary mb-6">Our Location & Details</h2>
              <div className="bg-card p-6 rounded-lg shadow-lg space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">Address</h3>
                    <p className="text-muted-foreground">1843, Sadashiv Peth, Pune, Maharashtra 411030</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">Phone</h3>
                    <a href="tel:+919834464883" className="text-muted-foreground hover:text-primary transition-colors">098344 64883</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">Email</h3>
                    <a href="mailto:paajisrestaurant@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">paajisrestaurant@gmail.com</a>
                  </div>
                </div>
                 <div className="pt-2">
                    <h3 className="font-semibold text-lg text-foreground mb-1">Opening Hours</h3>
                    <p className="text-muted-foreground">Mon - Fri: 12:00 AM - 10:00 PM</p>
                    <p className="text-muted-foreground">Sat - Sun: 1:00 PM - 11:00 PM</p>
                </div>
              </div>
            </div>
            
            <div>
              <GoogleMapsEmbed 
                latitude={restaurantLatitude} 
                longitude={restaurantLongitude}
                placeName={restaurantPlaceName}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
