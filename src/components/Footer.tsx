import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 32 32"
    width="28"
    height="28"
    fill="currentColor"
    className="transition-transform duration-150 hover:scale-110"
    aria-hidden="true"
  >
    <path d="M16 2C8.27 2 2 8.27 2 16c0 2.85.75 5.54 2.06 7.9L2 30l6.23-2.05A13.9 13.9 0 0 0 16 30c7.73 0 14-6.27 14-14S23.73 2 16 2zm0 25.6c-2.36 0-4.55-.65-6.45-1.77l-.46-.27-3.7 1.21 1.2-3.61-.3-.47A11.6 11.6 0 0 1 4.4 16c0-6.42 5.18-11.6 11.6-11.6 6.42 0 11.6 5.18 11.6 11.6 0 6.42-5.18 11.6-11.6 11.6zm6.31-8.5c-.35-.17-2.04-1-2.35-1.12-.31-.11-.53-.17-.75.17-.22.35-.86 1.14-1.06 1.38-.2.23-.39.26-.72.09-.35-.17-1.47-.52-2.8-1.65-1.03-.91-1.73-2.02-1.94-2.36-.22-.35-.02-.55.15-.72.15-.15.35-.4.52-.6.17-.2.23-.35.35-.58.11-.23.06-.43-.03-.61-.09-.18-.79-1.01-1.08-1.19-.29-.17-.58-.17-.78-.17s-.43.03-.66.03c-.23 0-.6.09-.91.43-.31.35-1.2 1.2-1.2 2.92s1.23 3.39 1.4 3.62c.17.23 2.42 3.88 5.86 5.45.82.37 1.47.6 1.97.76.83.28 1.58.24 2.18-.14.67-.42 1.1-.96 1.25-1.5.15-.55.15-1.03.11-1.2-.04-.17-.22-.26-.45-.43z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h5 className="font-headline text-xl font-semibold text-primary mb-4">Paaji&apos;s Restaurant</h5>
            <p className="text-sm text-muted-foreground">
              Experience the authentic taste of Chinese and Biryani cuisine. Quality ingredients, traditional recipes, and a warm atmosphere.
            </p>
          </div>
          <div>
            <h6 className="font-headline text-lg font-semibold text-foreground mb-4">Quick Links</h6>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/menu" className="text-sm text-muted-foreground hover:text-primary transition-colors">Menu</Link></li>
              <li><Link href="/catering" className="text-sm text-muted-foreground hover:text-primary transition-colors">Catering</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="font-headline text-lg font-semibold text-foreground mb-4">Contact Us</h6>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start space-x-2"> 
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <span>1843, Sadashiv Peth, Pune, Maharashtra 411030</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:+919834464883" className="hover:text-primary transition-colors">098344 64883</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:paajisrestaurant@gmail.com" className="hover:text-primary transition-colors">paajisrestaurant@gmail.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-headline text-lg font-semibold text-foreground mb-4">Follow Us</h6>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/share/193iM6d4Dv/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-full bg-muted hover:bg-primary text-muted-foreground hover:text-background transition-colors duration-200 shadow"
              >
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.instagram.com/paajis_restaurant?igsh=MWprOHJtZHEwczhvbQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-full bg-muted hover:bg-primary text-muted-foreground hover:text-background transition-colors duration-200 shadow"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://wa.me/919834464883"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-full bg-muted hover:bg-primary text-muted-foreground hover:text-background transition-colors duration-200 shadow"
              >
                <WhatsAppIcon />
              </a>
            </div>
            <div className="mt-6">
              <h6 className="font-headline text-lg font-semibold text-foreground mb-2">Leave Us Your Feedback</h6>
              <p className="text-sm text-muted-foreground mb-3">
                Your opinion is important to us! Let us know how we did and how we can improve our service.
              </p>
              <Button asChild variant="outline" size="sm">
                <a href="mailto:paajisrestaurant@gmail.com?subject=Feedback%20for%20Paaji's%20Restaurant">
                  Share Your Thoughts
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground mt-8">
          <p>&copy; {new Date().getFullYear()} Paaji&apos;s Restaurant. All Rights Reserved. Crafted with passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;